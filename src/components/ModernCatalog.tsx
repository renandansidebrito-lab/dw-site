import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Eye, Grid, List, X, ChevronDown, Check, SlidersHorizontal } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import { getMateriais, type Material } from "@/data/materiais";
import { 
  fadeInUp, 
  scaleIn, 
  staggerContainer,
  modalVariants,
  backdropVariants 
} from "@/utils/animations";
import { Card, Button, Input } from "@/components/ui";

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

  return (
    <div className={`relative overflow-hidden ${className} bg-slate-100`}>
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
      )}
      
      {/* Actual Image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          loading="lazy"
          onLoad={() => {
            setIsLoading(false);
            onLoad?.();
          }}
          onError={(e) => {
            console.warn(`Failed to load image: ${src}`);
            setHasError(true);
            setIsLoading(false);
            onError?.();
          }}
        />
      )}
      
      {/* Fallback */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-slate-100 text-slate-400">
          <img 
            src="/images/dw-logo-black.webp" 
            alt="DW Logo" 
            className="h-8 w-auto opacity-20 mb-2"
            onError={(e) => e.currentTarget.style.display = 'none'} 
          />
          <span className="text-[10px] uppercase tracking-wider font-medium text-center opacity-50">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
};

// Material Card
const MaterialCard = ({ 
  material, 
  onSelect, 
  index 
}: { 
  material: Material; 
  onSelect: (material: Material) => void;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const getBadgeStyle = (tipo: string) => {
    switch (tipo) {
      case "marmore": return "bg-blue-50 text-blue-700 border-blue-100";
      case "granito": return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "quartzito": return "bg-purple-50 text-purple-700 border-purple-100";
      case "quartzo": return "bg-rose-50 text-rose-700 border-rose-100";
      case "ultracompacto": return "bg-slate-50 text-slate-700 border-slate-100";
      case "supernano": return "bg-indigo-50 text-indigo-700 border-indigo-100";
      default: return "bg-orange-50 text-orange-700 border-orange-100";
    }
  };

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
    <motion.div
      variants={scaleIn}
      initial="initial"
      animate="animate"
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <div 
        onClick={() => onSelect(material)}
        className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer flex flex-col"
      >
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden bg-slate-100">
          <ModernImage
            src={material.imagem}
            alt={material.nome}
            className="w-full h-full"
          />
          
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
          
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md shadow-sm ${getBadgeStyle(material.tipo)}`}>
              {getBadgeLabel(material.tipo)}
            </span>
          </div>

          <div className={`absolute bottom-4 right-4 transition-all duration-300 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button className="bg-white text-slate-900 p-2 rounded-full shadow-lg hover:bg-brand hover:text-white transition-colors">
              <Eye className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-2">
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-brand transition-colors line-clamp-1">
              {material.nome}
            </h3>
            <div className="flex items-center text-xs text-slate-500 mt-1 space-x-2">
              <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-600 font-medium">
                {material.cor}
              </span>
              <span>•</span>
              <span className="truncate max-w-[120px]">
                {material.origem}
              </span>
            </div>
          </div>

          <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-grow">
            {material.descricao}
          </p>

          <div className="flex flex-wrap gap-1 mt-auto pt-3 border-t border-slate-50">
            {material.aplicacoes.slice(0, 2).map((aplicacao, idx) => (
              <span key={idx} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-slate-50 text-slate-500 rounded border border-slate-100">
                {aplicacao}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Material Modal
const MaterialModal = ({ 
  material, 
  onClose 
}: { 
  material: Material | null; 
  onClose: () => void;
}) => {
  const { t } = useTranslation();

  if (!material) return null;

  return (
    <AnimatePresence>
      <motion.div
        variants={backdropVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          variants={modalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Side */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-slate-100">
            <ModernImage
              src={material.imagem}
              alt={material.nome}
              className="w-full h-full"
            />
            <button
              onClick={onClose}
              className="absolute top-4 left-4 md:hidden p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 flex flex-col max-h-[60vh] md:max-h-[90vh]">
            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-grow">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{material.nome}</h2>
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="px-3 py-1 bg-brandLight/20 text-brand rounded-full font-medium">
                      {material.cor}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">
                      {material.origem}
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="hidden md:block p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-3">{t('catalog.description')}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {material.descricao}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-3">{t('catalog.applications')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {material.aplicacoes.map((aplicacao, index) => (
                      <span key={index} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-100">
                        {aplicacao}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-sm font-semibold text-slate-800 mb-2">{t('catalog.specs.title')}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="block text-slate-400 mb-1">{t('catalog.specs.type')}</span>
                      <span className="font-medium text-slate-700 capitalize">{material.tipo}</span>
                    </div>
                    <div>
                      <span className="block text-slate-400 mb-1">{t('catalog.specs.finish')}</span>
                      <span className="font-medium text-slate-700">{t('catalog.specs.finishes')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50/50">
              <div className="flex gap-4">
                <Button
                  variant="primary"
                  onClick={() => {
                    window.location.href = `/contato?material=${encodeURIComponent(material.nome)}`;
                  }}
                  className="flex-1 py-6 text-lg shadow-lg shadow-brand/20"
                >
                  {t('catalog.requestQuote')}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main Component
export default function ModernCatalog() {
  const { t } = useTranslation();
  const materiais = getMateriais(t);
  const [filtroTipo, setFiltroTipo] = useState<string>("todos");
  const [filtroCor, setFiltroCor] = useState<string>("todas");
  const [termoBusca, setTermoBusca] = useState<string>("");
  const [materialSelecionado, setMaterialSelecionado] = useState<Material | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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
    { value: "todas", label: t('catalog.allColors') },
    { value: "Branco", label: t('catalog.colors.white') },
    { value: "Preto", label: t('catalog.colors.black') },
    { value: "Bege", label: t('catalog.colors.beige') },
    { value: "Cinza", label: t('catalog.colors.gray') },
    { value: "Verde", label: t('catalog.colors.green') },
    { value: "Amarelo", label: t('catalog.colors.yellow') },
    { value: "Marrom", label: t('catalog.colors.brown') },
    { value: "Ocre", label: t('catalog.colors.ochre') },
    { value: "Creme", label: t('catalog.colors.cream') },
    { value: "Vermelho", label: t('catalog.colors.red') }
  ];

  const materiaisFiltrados = materiais.filter((material) => {
    const correspondeTipo = filtroTipo === "todos" || material.tipo === filtroTipo;
    const correspondeCor = filtroCor === "todas" || material.cor === filtroCor;
    const correspondeBusca = termoBusca === "" || 
      material.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
      material.descricao.toLowerCase().includes(termoBusca.toLowerCase());
    
    return correspondeTipo && correspondeCor && correspondeBusca;
  });

  // Effect to simulate loading only on filter change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [filtroTipo, filtroCor, termoBusca]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-slate-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/dw-hero-bg.webp" 
            className="w-full h-full object-cover" 
            alt="Background"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.backgroundColor = '#1e293b';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t('catalog.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto font-light"
          >
            {t('catalog.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Modern Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="w-full lg:w-96 relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-brand transition-colors" />
              <input
                type="text"
                placeholder={t('catalog.search')}
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-100 border-transparent rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent transition-all shadow-inner"
              />
            </div>

            {/* Filters Group */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-center lg:justify-end">
              {/* Type Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar max-w-[100vw] px-4 lg:px-0">
                {tipos.slice(0, 5).map((tipo) => (
                  <button
                    key={tipo.value}
                    onClick={() => setFiltroTipo(tipo.value)}
                    className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      filtroTipo === tipo.value
                        ? "bg-brand text-white shadow-lg shadow-brand/20"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tipo.label}
                  </button>
                ))}
                
                {/* Mobile/Extra Dropdown for Types if needed */}
                <div className="relative">
                  <select
                    value={filtroTipo}
                    onChange={(e) => setFiltroTipo(e.target.value)}
                    className="appearance-none pl-4 pr-8 py-2 bg-slate-100 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-200 focus:ring-2 focus:ring-brand border-none cursor-pointer"
                  >
                    <option value="todos">{t('catalog.filters.more')}</option>
                    {tipos.slice(5).map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200 hidden lg:block" />

              {/* Color Filter */}
              <div className="relative min-w-[160px]">
                <select
                  value={filtroCor}
                  onChange={(e) => setFiltroCor(e.target.value)}
                  className="w-full appearance-none pl-4 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:ring-2 focus:ring-brand focus:border-transparent cursor-pointer hover:border-brand transition-colors shadow-sm"
                >
                  {cores.map((cor) => (
                    <option key={cor.value} value={cor.value}>
                      {cor.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full border border-slate-200"
                    style={{ backgroundColor: filtroCor === 'todas' ? 'transparent' : filtroCor === 'Branco' ? '#fff' : filtroCor === 'Preto' ? '#000' : 'gray' }} 
                  />
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <p className="text-slate-500 text-sm">
            {t('catalog.results.found')} <strong className="text-slate-900">{materiaisFiltrados.length}</strong> {t('catalog.results.materials')}
          </p>
          <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-brand' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-brand' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl h-96 animate-pulse border border-slate-100 shadow-sm">
                <div className="h-64 bg-slate-200 rounded-t-2xl" />
                <div className="p-5 space-y-3">
                  <div className="h-5 bg-slate-200 rounded w-3/4" />
                  <div className="h-4 bg-slate-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : materiaisFiltrados.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-300">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{t('catalog.empty.title')}</h3>
            <p className="text-slate-500 mb-8">{t('catalog.empty.description')}</p>
            <Button
              variant="outline"
              onClick={() => {
                setFiltroTipo("todos");
                setFiltroCor("todas");
                setTermoBusca("");
              }}
            >
              {t('catalog.filters.clear')}
            </Button>
          </div>
        ) : (
          <motion.div
            layout
            className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
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
      </section>

      {/* Material Detail Modal */}
      <MaterialModal
        material={materialSelecionado}
        onClose={() => setMaterialSelecionado(null)}
      />
    </div>
  );
}
