import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Eye, Grid, List, X, ChevronDown } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import { getMateriais, type Material } from "@/data/materiais";
import { institutionalContent } from "@/data/institutionalContent";
import { 
  scaleIn, 
  modalVariants,
  backdropVariants 
} from "@/utils/animations";
import { Button } from "@/components/ui";
import FAQSection from "@/components/sections/FAQSection";
import { catalogUi } from "@/data/pageUi";

const PLACEHOLDER_IMAGE = "/images/placeholder-material.svg";

function getColorKey(t: (key: string) => string, value: string) {
  const colorMap: Record<string, string> = {
    white: t("catalog.colors.white"),
    black: t("catalog.colors.black"),
    beige: t("catalog.colors.beige"),
    gray: t("catalog.colors.gray"),
    green: t("catalog.colors.green"),
    yellow: t("catalog.colors.yellow"),
    brown: t("catalog.colors.brown"),
    ochre: t("catalog.colors.ochre"),
    cream: t("catalog.colors.cream"),
    red: t("catalog.colors.red"),
    varied: t("catalog.colors.varied"),
  };

  return Object.entries(colorMap).find(([, label]) => label === value)?.[0] ?? "varied";
}

function matchesCategory(
  material: Material,
  category: string,
  t: (key: string) => string,
) {
  const colorKey = getColorKey(t, material.cor);
  const lightColors = ["white", "beige", "cream", "yellow"];
  const darkColors = ["black", "brown", "gray", "green", "red", "ochre"];

  if (category === "all") return true;
  if (category === "granite") return material.tipo === "granito";
  if (category === "marble") return material.tipo === "marmore";
  if (category === "quartzite") return material.tipo === "quartzito";
  if (category === "exotic") return ["quartzo", "ultracompacto", "supernano", "outros"].includes(material.tipo);
  if (category === "light") return lightColors.includes(colorKey);
  if (category === "dark") return darkColors.includes(colorKey);

  return true;
}

// Modern Image Component
const ModernImage = ({ 
  src, 
  alt, 
  className = "",
  onLoad,
  onError 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isPlaceholderAsset = src === PLACEHOLDER_IMAGE;
  const showFallback = hasError || isPlaceholderAsset;

  return (
    <div className={`relative overflow-hidden ${className} bg-slate-900`}>
      {isLoading && !showFallback && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse" />
      )}
      
      {!showFallback && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          loading="lazy"
          onLoad={() => {
            setIsLoading(false);
            onLoad?.();
          }}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
            onError?.();
          }}
        />
      )}
      
      {showFallback && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 p-5 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_70%)]" />
          <img 
            src="/images/dw-logo-black.webp" 
            alt="Logotipo da DW" 
            className="relative h-12 w-auto opacity-10 brightness-0 invert"
            onError={(e) => e.currentTarget.style.display = 'none'} 
          />
        </div>
      )}
    </div>
  );
};

// Material Card - Premium Gallery Style
const MaterialCard = ({ 
  material, 
  onSelect, 
  index 
}: { 
  material: Material; 
  onSelect: (material: Material) => void;
  index: number;
}) => {
  const { t, language } = useTranslation();
  const ui = catalogUi[language];

  const getBadgeLabel = (tipo: string) => {
    const labels: Record<string, string> = {
      marmore: t('catalog.marble'),
      granito: t('catalog.granite'),
      quartzito: t('catalog.types.quartzite'),
      quartzo: t('catalog.types.quartz'),
      ultracompacto: t('catalog.types.ultracompact'),
      supernano: t('catalog.types.supernano')
    };
    return labels[tipo] || t('catalog.types.others');
  };

  return (
    <motion.button
      type="button"
      variants={scaleIn}
      initial="initial"
      animate="animate"
      transition={{ delay: index * 0.05 }}
      onClick={() => onSelect(material)}
      className="group relative h-[280px] lg:h-[320px] w-full rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500 bg-slate-900 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/40"
      aria-label={`${material.nome}: ${t('catalog.seeDetails')}`}
    >
      <ModernImage
        src={material.imagem}
        alt={material.nome}
        className="absolute inset-0 w-full h-full transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
      />
      
      {/* Base overlay for readability - localized at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 pointer-events-none" />

      {/* Top Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold shadow-sm backdrop-blur-md bg-white/95 text-slate-800 rounded-sm">
          {getBadgeLabel(material.tipo)}
        </span>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col justify-end p-5">
        <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-md tracking-tight transform transition-transform duration-500 md:group-hover:-translate-y-2">
          {material.nome}
        </h3>
        
        {/* Mobile hint */}
        <div className="md:hidden flex items-center text-white/70 text-[10px] mt-2 uppercase tracking-wider">
          <Eye className="w-3 h-3 mr-1" />
          <span>{ui.tapDetails}</span>
        </div>

        {/* Hover Content - Desktop Only */}
        <div className="hidden md:block overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 group-hover:mt-3">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {material.aplicacoes.slice(0, 3).map((app, idx) => (
              <span key={idx} className="text-[9px] uppercase tracking-wider px-2 py-1 bg-black/40 text-white rounded-sm border border-white/10 backdrop-blur-md">
                {app}
              </span>
            ))}
          </div>
          <div className="flex items-center text-white/90 font-medium text-xs uppercase tracking-wider group/btn">
            {ui.viewDetails} <Eye className="ml-2 w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.button>
  );
};

// Material Modal - Premium Showroom Datasheet
const MaterialModal = ({ 
  material, 
  onClose 
}: { 
  material: Material | null; 
  onClose: () => void;
}) => {
  const { language, t } = useTranslation();
  const content = institutionalContent[language].materials;
  const ui = catalogUi[language];
  const navigate = useNavigate();
  const closeLabel = language === "en" ? "Close details" : language === "es" ? "Cerrar detalles" : "Fechar detalhes";

  useEffect(() => {
    if (!material) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [material, onClose]);

  if (!material) return null;
  const materialTypeLabel = {
    marmore: t("catalog.marble"),
    granito: t("catalog.granite"),
    quartzito: t("catalog.types.quartzite"),
    quartzo: t("catalog.types.quartz"),
    ultracompacto: t("catalog.types.ultracompact"),
    supernano: t("catalog.types.supernano"),
    outros: t("catalog.types.others"),
  }[material.tipo] ?? material.tipo;

  return (
    <AnimatePresence>
      <motion.div
        variants={backdropVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] flex items-center justify-center p-4 md:p-6"
        onClick={onClose}
      >
        <motion.div
          variants={modalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="bg-white rounded-sm max-w-5xl w-full max-h-[90vh] md:h-[600px] overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="material-modal-title"
        >
          {/* Image Side */}
          <div className="w-full md:w-[55%] h-[300px] md:h-full relative bg-slate-900">
            <ModernImage
              src={material.imagem}
              alt={material.alt ?? `${content.modalAltPrefix}: ${material.nome}`}
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
            <button
              onClick={onClose}
              aria-label={closeLabel}
              className="absolute top-4 left-4 md:hidden p-2.5 bg-black/40 backdrop-blur-md rounded-sm text-white hover:bg-black/60 transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-[45%] flex flex-col h-[calc(90vh-300px)] md:h-full bg-white relative">
            <button
              onClick={onClose}
              aria-label={closeLabel}
              className="hidden md:flex absolute top-5 right-5 z-10 p-2 bg-white/80 backdrop-blur hover:bg-slate-100 rounded-sm transition-colors text-slate-500 hover:text-slate-900 shadow-sm border border-slate-200"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-grow flex flex-col">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-slate-500 font-medium text-[10px] uppercase tracking-widest border border-slate-200 px-2 py-1 rounded-sm">
                    {materialTypeLabel}
                  </span>
                  <span className="text-slate-400 text-[10px] uppercase tracking-widest px-2 py-1 bg-slate-50 rounded-sm">
                    {material.origem}
                  </span>
                </div>
                <h2 id="material-modal-title" className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight leading-none mb-6">
                  {material.nome}
                </h2>
                <div className="w-8 h-px bg-brand mb-6" />
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {material.descricao}
                </p>
              </div>

              <div className="space-y-6 mt-auto">
                {/* Specs */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                  <div>
                    <span className="block text-slate-400 text-[9px] uppercase tracking-widest mb-1.5">{content.modalColor}</span>
                    <span className="text-slate-800 text-sm font-medium">{material.cor}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 text-[9px] uppercase tracking-widest mb-1.5">{content.modalFinish}</span>
                    <span className="text-slate-800 text-sm font-medium">{material.acabamento ?? content.finishValue}</span>
                  </div>
                </div>

                {/* Applications */}
                <div className="pt-6 border-t border-slate-100">
                  <span className="block text-slate-400 text-[9px] uppercase tracking-widest mb-3">{ui.recommended}</span>
                  <div className="flex flex-wrap gap-2">
                    {material.aplicacoes.map((app, index) => (
                      <span key={index} className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-sm text-xs border border-slate-100 font-medium tracking-wide">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Budget Button */}
            <div className="p-6 bg-slate-50 border-t border-slate-200">
              <Button
                variant="primary"
                onClick={() => {
                  navigate(`/contato?material=${encodeURIComponent(material.nome)}`);
                }}
                className="w-full py-4 text-sm font-semibold shadow-md hover:shadow-lg shadow-brand/20 transition-all uppercase tracking-widest rounded-sm"
              >
                {content.requestButton}
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main Component
export default function ModernCatalog() {
  const { t, language } = useTranslation();
  const content = institutionalContent[language].materials;
  const ui = catalogUi[language];
  const materiais = getMateriais(t);
  const [filtroCategoria, setFiltroCategoria] = useState<string>("all");
  const [filtroTipo, setFiltroTipo] = useState<string>("todos");
  const [filtroCor, setFiltroCor] = useState<string>("all");
  const [termoBusca, setTermoBusca] = useState<string>("");
  const [materialSelecionado, setMaterialSelecionado] = useState<Material | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = [
    { value: "all", label: content.categories.all },
    { value: "granite", label: content.categories.granite },
    { value: "marble", label: content.categories.marble },
    { value: "quartzite", label: content.categories.quartzite },
    { value: "exotic", label: content.categories.exotic },
    { value: "light", label: content.categories.light },
    { value: "dark", label: content.categories.dark },
  ];

  const tipos = [
    { value: "todos", label: t('catalog.filters.all') },
    { value: "marmore", label: t('catalog.marble') },
    { value: "granito", label: t('catalog.granite') },
    { value: "quartzito", label: t('catalog.types.quartzite') },
    { value: "quartzo", label: t('catalog.types.quartz') },
    { value: "ultracompacto", label: t('catalog.types.ultracompact') },
    { value: "supernano", label: t('catalog.types.supernano') },
    { value: "outros", label: t('catalog.types.others') }
  ];
  
  const cores = [
    { value: "all", label: t('catalog.allColors') },
    { value: "white", label: t('catalog.colors.white') },
    { value: "black", label: t('catalog.colors.black') },
    { value: "beige", label: t('catalog.colors.beige') },
    { value: "gray", label: t('catalog.colors.gray') },
    { value: "green", label: t('catalog.colors.green') },
    { value: "yellow", label: t('catalog.colors.yellow') },
    { value: "brown", label: t('catalog.colors.brown') },
    { value: "ochre", label: t('catalog.colors.ochre') },
    { value: "cream", label: t('catalog.colors.cream') },
    { value: "red", label: t('catalog.colors.red') }
  ];

  const materiaisFiltrados = materiais.filter((material) => {
    const colorKey = getColorKey(t, material.cor);
    const correspondeCategoria = matchesCategory(material, filtroCategoria, t);
    const correspondeTipo = filtroTipo === "todos" || material.tipo === filtroTipo;
    const correspondeCor = filtroCor === "all" || colorKey === filtroCor;
    const correspondeBusca = termoBusca === "" || 
      material.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
      material.descricao.toLowerCase().includes(termoBusca.toLowerCase()) ||
      material.aplicacoes.some((item) => item.toLowerCase().includes(termoBusca.toLowerCase()));
    
    return correspondeCategoria && correspondeTipo && correspondeCor && correspondeBusca;
  });

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [filtroCategoria, filtroTipo, filtroCor, termoBusca]);

  const limparFiltros = () => {
    setFiltroCategoria("all");
    setFiltroTipo("todos");
    setFiltroCor("all");
    setTermoBusca("");
  };

  const hasActiveFilters = termoBusca || filtroCategoria !== 'all' || filtroTipo !== 'todos' || filtroCor !== 'all';

  return (
    <div className="min-h-screen bg-slate-50 catalog-page">
      {/* Compact Header / Hero */}
      <section className="bg-slate-900 pt-28 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/drone-empresa.webp"
            className="w-full h-full object-cover" 
            alt={ui.heroAlt}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.backgroundColor = '#0f172a';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight"
          >
            {ui.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto font-light"
          >
            {ui.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between">
          <p className="text-slate-500 text-sm font-medium">{materiaisFiltrados.length} {ui.materialCount}</p>
          <button 
            onClick={() => setMobileFiltersOpen(true)} 
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-800 rounded-lg text-sm font-semibold shadow-sm"
          >
            <Filter className="w-4 h-4" /> {ui.filter}
          </button>
        </div>

        {/* Sidebar (Desktop Filters) */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-800 tracking-tight">{ui.filter}</h2>
              {hasActiveFilters && (
                <button onClick={limparFiltros} className="text-xs text-brand font-semibold hover:text-brandDark transition-colors uppercase tracking-wider">
                  {ui.clear}
                </button>
              )}
            </div>

            {/* Search */}
            <div className="mb-6 relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4 group-focus-within:text-brand transition-colors" />
              <input
                type="text"
                placeholder={t('catalog.search')}
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
              />
            </div>

            {/* Tipo de Pedra */}
            <div className="mb-6">
              <h3 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">{ui.stoneType}</h3>
              <div className="flex flex-col gap-2.5">
                {tipos.map(t => (
                  <label key={t.value} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="tipo" 
                      value={t.value} 
                      checked={filtroTipo === t.value} 
                      onChange={(e) => setFiltroTipo(e.target.value)} 
                      className="hidden" 
                    />
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${filtroTipo === t.value ? 'border-brand bg-brand' : 'border-slate-300 group-hover:border-brand'}`}>
                      {filtroTipo === t.value && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>
                    <span className={`text-sm transition-colors ${filtroTipo === t.value ? 'text-slate-900 font-semibold' : 'text-slate-600 group-hover:text-slate-900'}`}>
                      {t.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Cor */}
            <div className="mb-6">
              <h3 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">{ui.color}</h3>
              <div className="relative">
                <select
                  value={filtroCor}
                  onChange={(e) => setFiltroCor(e.target.value)}
                  className="w-full appearance-none pl-3 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:ring-2 focus:ring-brand focus:border-transparent cursor-pointer hover:border-brand transition-colors"
                >
                  {cores.map((cor) => (
                    <option key={cor.value} value={cor.value}>{cor.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Categoria Extra */}
            <div>
              <h3 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">{ui.features}</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(c => (
                  <button 
                    key={c.value} 
                    onClick={() => setFiltroCategoria(c.value)} 
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${filtroCategoria === c.value ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </aside>

        {/* Mobile Filters Drawer */}
        <AnimatePresence>
          {mobileFiltersOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 z-50 lg:hidden"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 h-[85vh] flex flex-col lg:hidden"
              >
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-800">{ui.filter}</h2>
                  <button onClick={() => setMobileFiltersOpen(false)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-5 overflow-y-auto flex-grow">
                  {/* Search */}
                  <div className="mb-6 relative group">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder={t('catalog.search')}
                      value={termoBusca}
                      onChange={(e) => setTermoBusca(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Tipo de Pedra */}
                  <div className="mb-6">
                    <h3 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">{ui.stoneType}</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {tipos.map(t => (
                        <label key={t.value} className={`flex items-center justify-center text-center p-3 rounded-lg border text-sm font-medium transition-colors ${filtroTipo === t.value ? 'bg-brand/10 border-brand text-brand' : 'bg-white border-slate-200 text-slate-600'}`}>
                          <input type="radio" name="tipo_mobile" value={t.value} checked={filtroTipo === t.value} onChange={(e) => setFiltroTipo(e.target.value)} className="hidden" />
                          {t.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Cor */}
                  <div className="mb-6">
                    <h3 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">{ui.color}</h3>
                    <div className="relative">
                      <select
                        value={filtroCor}
                        onChange={(e) => setFiltroCor(e.target.value)}
                        className="w-full appearance-none pl-3 pr-8 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:ring-2 focus:ring-brand focus:border-transparent cursor-pointer"
                      >
                        {cores.map((cor) => (
                          <option key={cor.value} value={cor.value}>{cor.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Características */}
                  <div>
                    <h3 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">{ui.features}</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(c => (
                        <button 
                          key={c.value} 
                          onClick={() => setFiltroCategoria(c.value)} 
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filtroCategoria === c.value ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'}`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100 bg-white flex gap-3">
                  <button onClick={limparFiltros} className="flex-1 py-3 text-slate-600 font-semibold text-sm rounded-lg border border-slate-200">{ui.clear}</button>
                  <button onClick={() => setMobileFiltersOpen(false)} className="flex-1 py-3 bg-brand text-white font-semibold text-sm rounded-lg shadow-md shadow-brand/20">{ui.showResults}</button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Gallery */}
        <main className="flex-1 pb-16 lg:pb-8">
          <div className="hidden lg:flex justify-between items-center mb-6">
            <p className="text-slate-500 text-sm font-medium">
              {ui.showing} <strong className="text-slate-900">{materiaisFiltrados.length}</strong> {ui.materialCount}
            </p>
            <div className="flex gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-slate-100 text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-slate-100 text-slate-800' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {isLoading ? (
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl h-[300px] animate-pulse border border-slate-100 shadow-sm" />
              ))}
            </div>
          ) : materiaisFiltrados.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-slate-300">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{content.emptyTitle}</h3>
              <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto">{content.emptyDescription}</p>
              <Button variant="outline" onClick={limparFiltros}>
                {t('catalog.filters.clear')}
              </Button>
            </div>
          ) : (
            <motion.div
              layout
              className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}
            >
              {materiaisFiltrados.map((material, index) => (
                <MaterialCard
                  key={material.id}
                  material={material}
                  onSelect={setMaterialSelecionado}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </main>
      </div>

      <MaterialModal
        material={materialSelecionado}
        onClose={() => setMaterialSelecionado(null)}
      />

      <FAQSection
        title={content.faqTitle}
        subtitle={content.faqSubtitle}
        items={institutionalContent[language].faq.materials}
      />

      {/* Adjust WhatsApp Floating Button specifically for the Catalog Page */}
      <style>{`
        .catalog-page ~ div .fixed.bottom-6.right-6.z-50,
        .catalog-page ~ button.fixed.right-3.z-40,
        .catalog-page ~ div .fixed.right-3.z-50 {
          transform: scale(0.85);
          transform-origin: bottom right;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        .catalog-page ~ div .fixed.bottom-6.right-6.z-50:hover,
        .catalog-page ~ button.fixed.right-3.z-40:hover,
        .catalog-page ~ div .fixed.right-3.z-50:hover {
          transform: scale(1);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
