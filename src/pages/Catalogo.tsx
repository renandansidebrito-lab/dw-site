import { useState, useEffect } from "react";
import { Search, Filter, Eye } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import { materiaisExemplo, type Material } from "@/data/materiais";

const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  return (
    <img
      src={hasError ? '/images/placeholder-material.svg' : imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        setHasError(true);
        setImgSrc('/images/placeholder-material.svg');
      }}
    />
  );
};

const materiaisSeed: Material[] = [
  // ===== MATERIAIS BRANCOS =====
  {
    id: 1,
    nome: "Branco Ceará",
    tipo: "granito",
    cor: "Branco",
    origem: "CE",
    aplicacoes: ["Pisos", "Paredes", "Cozinhas", "Banheiros"],
    imagem: "/images/materiais/branco-ceara.webp",
    descricao: "Granito branco clássico com grãos finos, excelente para ambientes internos e externos."
  },
  {
    id: 2,
    nome: "Branco Dallas",
    tipo: "marmore",
    cor: "Branco",
    origem: "ES",
    aplicacoes: ["Pisos", "Paredes", "Banheiros", "Áreas sociais"],
    imagem: "/images/materiais/branco-dallas.webp",
    descricao: "Mármore branco elegante com veios sutis, perfeito para projetos sofisticados."
  },
  {
    id: 3,
    nome: "Branco Fortaleza",
    tipo: "granito",
    cor: "Branco",
    origem: "CE",
    aplicacoes: ["Pisos", "Cozinhas", "Bancadas", "Áreas de serviço"],
    imagem: "/images/materiais/branco-fortaleza.webp",
    descricao: "Granito branco resistente com textura uniforme, ideal para áreas de alto tráfego."
  },
  {
    id: 4,
    nome: "Branco Itaúnas",
    tipo: "marmore",
    cor: "Branco",
    origem: "ES",
    aplicacoes: ["Pisos", "Paredes", "Escritórios", "Áreas sociais"],
    imagem: "/images/materiais/branco-itaunas.webp",
    descricao: "Mármore branco premium de alta qualidade com veios discretos."
  },
  {
    id: 5,
    nome: "Branco Paraná",
    tipo: "granito",
    cor: "Branco",
    origem: "PR",
    aplicacoes: ["Pisos", "Paredes", "Áreas externas", "Garagens"],
    imagem: "/images/materiais/branco-parana.webp",
    descricao: "Granito branco durável com excelente resistência ao desgaste."
  },
  {
    id: 6,
    nome: "Branco Pitaya",
    tipo: "marmore",
    cor: "Branco",
    origem: "BA",
    aplicacoes: ["Paredes", "Banheiros", "Áreas sociais", "Decoração"],
    imagem: "/images/materiais/branco-pitaya.webp",
    descricao: "Mármore branco exclusivo com padrão único e sofisticado."
  },
  {
    id: 7,
    nome: "Branco Prime",
    tipo: "granito",
    cor: "Branco",
    origem: "ES",
    aplicacoes: ["Cozinhas", "Banheiros", "Bancadas", "Pias"],
    imagem: "/images/materiais/branco-prime.webp",
    descricao: "Granito branco premium com acabamento impecável para superfícies."
  },
  {
    id: 8,
    nome: "Branco Siena",
    tipo: "marmore",
    cor: "Branco",
    origem: "ES",
    aplicacoes: ["Pisos", "Paredes", "Áreas sociais", "Hall de entrada"],
    imagem: "/images/materiais/branco-siena.webp",
    descricao: "Mármore branco clássico com veios dourados sutis, elegância atemporal."
  },

  // ===== MATERIAIS BEGE =====
  {
    id: 9,
    nome: "Bege Bahia",
    tipo: "marmore",
    cor: "Bege",
    origem: "BA",
    aplicacoes: ["Pisos", "Paredes", "Escritórios", "Áreas sociais"],
    imagem: "/images/materiais/bege-bahia.webp",
    descricao: "Mármore bege aconchegante com veios discretos, perfeito para ambientes acolhedores."
  },
  {
    id: 10,
    nome: "Bege Ipanema",
    tipo: "granito",
    cor: "Bege",
    origem: "RJ",
    aplicacoes: ["Pisos", "Cozinhas", "Áreas internas", "Salas"],
    imagem: "/images/materiais/bege-ipanema.webp",
    descricao: "Granito bege versátil com tons quentes que combinam com diversos estilos."
  },
  {
    id: 11,
    nome: "Bege Vitória",
    tipo: "marmore",
    cor: "Bege",
    origem: "ES",
    aplicacoes: ["Paredes", "Banheiros", "Áreas sociais", "Decoração"],
    imagem: "/images/materiais/bege-vitoria.webp",
    descricao: "Mármore bege sofisticado com padrão elegante e acabamento refinado."
  },

  // ===== MATERIAIS CINZA =====
  {
    id: 12,
    nome: "Cinza Andorinha",
    tipo: "granito",
    cor: "Cinza",
    origem: "RS",
    aplicacoes: ["Pisos", "Paredes", "Áreas externas", "Garagens"],
    imagem: "/images/materiais/cinza-andorinha.webp",
    descricao: "Granito cinza moderno com grãos uniformes, excelente para áreas de alto tráfego."
  },
  {
    id: 13,
    nome: "Cinza Corumbá",
    tipo: "marmore",
    cor: "Cinza",
    origem: "MS",
    aplicacoes: ["Pisos", "Paredes", "Escritórios", "Ambientes corporativos"],
    imagem: "/images/materiais/cinza-corumba.webp",
    descricao: "Mármore cinza sofisticado com veios brancos, ideal para ambientes corporativos."
  },
  {
    id: 14,
    nome: "Cinza Corumbazinho",
    tipo: "granito",
    cor: "Cinza",
    origem: "MS",
    aplicacoes: ["Cozinhas", "Banheiros", "Bancadas", "Áreas de serviço"],
    imagem: "/images/materiais/cinza-corumbazinho.webp",
    descricao: "Granito cinza claro com textura fina e excelente resistência."
  },

  // ===== MATERIAIS AMARELO =====
  {
    id: 15,
    nome: "Amarelo Capri",
    tipo: "granito",
    cor: "Amarelo",
    origem: "BA",
    aplicacoes: ["Pisos", "Paredes", "Áreas sociais", "Decoração"],
    imagem: "/images/materiais/amarelo-capri.webp",
    descricao: "Granito amarelo vibrante com tons dourados que aquecem os ambientes."
  },
  {
    id: 16,
    nome: "Amarelo Icarai",
    tipo: "marmore",
    cor: "Amarelo",
    origem: "RJ",
    aplicacoes: ["Paredes", "Banheiros", "Áreas sociais", "Hall de entrada"],
    imagem: "/images/materiais/amarelo-icarai.webp",
    descricao: "Mármore amarelo suave com veios discretos, elegância sofisticada."
  },
  {
    id: 17,
    nome: "Amarelo Maracujá",
    tipo: "granito",
    cor: "Amarelo",
    origem: "BA",
    aplicacoes: ["Cozinhas", "Áreas internas", "Bancadas", "Pias"],
    imagem: "/images/materiais/amarelo-maracuja.webp",
    descricao: "Granito amarelo único com padrão exclusivo e cores vibrantes."
  },
  {
    id: 18,
    nome: "Amarelo Ornamental",
    tipo: "granito",
    cor: "Amarelo",
    origem: "BA",
    aplicacoes: ["Pisos", "Paredes", "Decoração", "Áreas sociais"],
    imagem: "/images/materiais/amarelo-ornamental.webp",
    descricao: "Granito amarelo ornamental com padrão sofisticado e acabamento premium."
  },
  {
    id: 19,
    nome: "Amarelo Santa Cecília",
    tipo: "granito",
    cor: "Amarelo",
    origem: "ES",
    aplicacoes: ["Pisos", "Cozinhas", "Áreas externas", "Garagens"],
    imagem: "/images/materiais/amarelo-santa-cecilia.webp",
    descricao: "Granito amarelo clássico muito popular, combina com qualquer estilo."
  },

  // ===== MATERIAIS PRETO =====
  {
    id: 20,
    nome: "Preto Absoluto",
    tipo: "granito",
    cor: "Preto",
    origem: "África",
    aplicacoes: ["Pisos", "Cozinhas", "Banheiros", "Decoração"],
    imagem: "/images/materiais/preto-absoluto.webp",
    descricao: "Granito preto profundo e uniforme, elegância absoluta para ambientes modernos."
  },
  {
    id: 21,
    nome: "Preto Indiano",
    tipo: "granito",
    cor: "Preto",
    origem: "Índia",
    aplicacoes: ["Pisos", "Paredes", "Bancadas", "Áreas sociais"],
    imagem: "/images/materiais/preto-indiano.webp",
    descricao: "Granito preto com grãos dourados sutis, sofisticação e requinte."
  },
  {
    id: 22,
    nome: "Preto Santa Angélica",
    tipo: "granito",
    cor: "Preto",
    origem: "ES",
    aplicacoes: ["Cozinhas", "Banheiros", "Áreas externas", "Garagens"],
    imagem: "/images/materiais/preto-santa-angelica.webp",
    descricao: "Granito preto nacional com excelente custo-benefício e durabilidade."
  },
  {
    id: 23,
    nome: "Preto São Gabriel",
    tipo: "granito",
    cor: "Preto",
    origem: "RS",
    aplicacoes: ["Pisos", "Cozinhas", "Áreas externas", "Escritórios"],
    imagem: "/images/materiais/preto-sao-gabriel.webp",
    descricao: "Granito preto elegante com pequenos grãos brancos, ideal para superfícies modernas."
  },
  {
    id: 24,
    nome: "Preto Via Láctea",
    tipo: "granito",
    cor: "Preto",
    origem: "BA",
    aplicacoes: ["Paredes", "Decoração", "Áreas sociais", "Hall de entrada"],
    imagem: "/images/materiais/preto-via-lactea.webp",
    descricao: "Granito preto com veios que lembram a via láctea, padrão único e sofisticado."
  },

  // ===== MATERIAIS VERDE =====
  {
    id: 25,
    nome: "Verde Ubatuba",
    tipo: "granito",
    cor: "Verde",
    origem: "SP",
    aplicacoes: ["Cozinhas", "Banheiros", "Áreas externas", "Pias"],
    imagem: "/images/materiais/verde-ubatuba.webp",
    descricao: "Granito verde único com grãos pretos e brancos, excelente para áreas úmidas."
  },

  // ===== MATERIAIS MARRON/OCRE =====
  {
    id: 26,
    nome: "Marrom Absoluto",
    tipo: "granito",
    cor: "Marrom",
    origem: "BA",
    aplicacoes: ["Pisos", "Paredes", "Áreas sociais", "Decoração"],
    imagem: "/images/materiais/marrom-absoluto.webp",
    descricao: "Granito marrom intenso e uniforme, aquece os ambientes com sofisticação."
  },
  {
    id: 27,
    nome: "Ocre Itabira",
    tipo: "marmore",
    cor: "Ocre",
    origem: "MG",
    aplicacoes: ["Paredes", "Banheiros", "Áreas sociais", "Decoração"],
    imagem: "/images/materiais/ocre-itabira.webp",
    descricao: "Mármore ocre com tons terrosos, traz aconchego e elegância natural."
  },

  // ===== MATERIAIS ESPECIAIS =====
  {
    id: 28,
    nome: "Creme Imperial",
    tipo: "marmore",
    cor: "Creme",
    origem: "ES",
    aplicacoes: ["Pisos", "Paredes", "Escritórios", "Áreas nobres"],
    imagem: "/images/materiais/creme-imperial.webp",
    descricao: "Mármore creme imperial com veios dourados, máxima sofisticação e requinte."
  },
  {
    id: 29,
    nome: "Pinta Verde",
    tipo: "granito",
    cor: "Verde",
    origem: "ES",
    aplicacoes: ["Decoração", "Paredes", "Áreas sociais", "Detalhes"],
    imagem: "/images/materiais/pinta-verde.webp",
    descricao: "Granito com pinceladas verdes únicas, peça exclusiva para projetos diferenciados."
  },
  {
    id: 30,
    nome: "Raja Cinza",
    tipo: "marmore",
    cor: "Cinza",
    origem: "ES",
    aplicacoes: ["Pisos", "Paredes", "Banheiros", "Áreas úmidas"],
    imagem: "/images/materiais/raja-cinza.webp",
    descricao: "Mármore cinza com padrão que lembra textura de tecido, design sofisticado."
  },
  {
    id: 31,
    nome: "Travertino",
    tipo: "marmore",
    cor: "Bege",
    origem: "IT",
    aplicacoes: ["Paredes", "Banheiros", "Áreas externas", "Decoração"],
    imagem: "/images/materiais/travertino.webp",
    descricao: "Mármore travertino clássico com textura natural porosa, beleza atemporal."
  },

  // ===== MATERIAIS VERMELHOS =====
  {
    id: 32,
    nome: "Vermelho Brasília",
    tipo: "granito",
    cor: "Vermelho",
    origem: "DF",
    aplicacoes: ["Decoração", "Paredes", "Áreas sociais", "Detalhes"],
    imagem: "/images/materiais/vermelho-brasilia.webp",
    descricao: "Granito vermelho vibrante exclusivo da região de Brasília, cor marcante e única."
  }
];

export default function Catalogo() {
  const { t } = useTranslation();
  const [materiais] = useState<Material[]>(materiaisExemplo.length ? materiaisExemplo : materiaisSeed);
  const [filtroTipo, setFiltroTipo] = useState<string>("todos");
  const [filtroCor, setFiltroCor] = useState<string>("todas");
  const [termoBusca, setTermoBusca] = useState<string>("");
  const [materialSelecionado, setMaterialSelecionado] = useState<Material | null>(null);

  const tipos = [
    { value: "todos", label: t('catalog.allTypes') },
    { value: "marmore", label: t('catalog.marble') },
    { value: "granito", label: t('catalog.granite') },
    { value: "quartzito", label: t('catalog.quartzite') || "Quartzito" },
    { value: "quartzo", label: t('catalog.quartz') || "Quartzo" },
    { value: "ultracompacto", label: t('catalog.ultracompact') || "Ultracompacto" },
    { value: "supernano", label: t('catalog.supernano') || "Supernano" },
    { value: "outros", label: t('catalog.others') || "Outros" }
  ];
  
  const cores = [
    { value: "todas", label: t('catalog.allColors') },
    { value: "Branco", label: "Branco" },
    { value: "Preto", label: "Preto" },
    { value: "Bege", label: "Bege" },
    { value: "Cinza", label: "Cinza" },
    { value: "Verde", label: "Verde" },
    { value: "Amarelo", label: "Amarelo" },
    { value: "Marrom", label: "Marrom" },
    { value: "Ocre", label: "Ocre" },
    { value: "Creme", label: "Creme" },
    { value: "Vermelho", label: "Vermelho" }
  ];

  const materiaisFiltrados = materiais.filter((material) => {
    const correspondeTipo = filtroTipo === "todos" || material.tipo === filtroTipo;
    const correspondeCor = filtroCor === "todas" || material.cor === filtroCor;
    const correspondeBusca = termoBusca === "" || 
      material.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
      material.descricao.toLowerCase().includes(termoBusca.toLowerCase());
    
    return correspondeTipo && correspondeCor && correspondeBusca;
  });

  const getBadgeStyle = (tipo: string) => {
    switch (tipo) {
      case "marmore":
        return "bg-blue-100 text-blue-800";
      case "granito":
        return "bg-green-100 text-green-800";
      case "quartzito":
        return "bg-purple-100 text-purple-800";
      case "quartzo":
        return "bg-pink-100 text-pink-800";
      case "ultracompacto":
        return "bg-gray-100 text-gray-800";
      case "supernano":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-orange-100 text-orange-800";
    }
  };

  const getBadgeLabel = (tipo: string) => {
    switch (tipo) {
      case "marmore": return t('catalog.marble');
      case "granito": return t('catalog.granite');
      case "quartzito": return t('catalog.quartzite') || "Quartzito";
      case "quartzo": return t('catalog.quartz') || "Quartzo";
      case "ultracompacto": return t('catalog.ultracompact') || "Ultracompacto";
      case "supernano": return t('catalog.supernano') || "Supernano";
      default: return t('catalog.others') || "Outros";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              {t('catalog.title')}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('catalog.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Busca */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder={t('catalog.search')}
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filtros */}
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">{t('catalog.filterBy')}</span>
              </div>
              
              <select
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {tipos.map((tipo) => (
                  <option key={tipo.value} value={tipo.value}>
                    {tipo.label}
                  </option>
                ))}
              </select>

              <select
                value={filtroCor}
                onChange={(e) => setFiltroCor(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {cores.map((cor) => (
                  <option key={cor.value} value={cor.value}>
                    {cor.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Resultados */}
          <div className="mt-4 text-sm text-slate-600">
            {t('catalog.showing')} {materiaisFiltrados.length} {t('catalog.of')} {materiais.length} {t('catalog.materials')}
          </div>
        </div>
      </section>

      {/* Grid de Materiais */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {materiaisFiltrados.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-500">{t('catalog.noResults')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {materiaisFiltrados.map((material) => (
                <div key={material.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Imagem do Material */}
                  <div className="relative h-64 bg-slate-200">
                    <ImageWithFallback
                      src={material.imagem}
                      alt={material.nome}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeStyle(material.tipo)}`}>
                        {getBadgeLabel(material.tipo)}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-slate-800">{material.nome}</h3>
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                        {material.cor}
                      </span>
                    </div>

                    <p className="text-slate-600 mb-4 text-sm">
                      {material.descricao}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">{t('catalog.applications')}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {material.aplicacoes.map((aplicacao, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                            {aplicacao}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setMaterialSelecionado(material)}
                        className="flex-1 flex items-center justify-center px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand2 transition-colors text-sm"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        {t('catalog.seeDetails')}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal de Detalhes */}
      {materialSelecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <ImageWithFallback
                src={materialSelecionado.imagem}
                alt={materialSelecionado.nome}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={() => setMaterialSelecionado(null)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-slate-100"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-slate-800">{materialSelecionado.nome}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeStyle(materialSelecionado.tipo)}`}>
                  {getBadgeLabel(materialSelecionado.tipo)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold text-slate-700 mb-1">{t('catalog.color')}</h3>
                  <p className="text-slate-600">{materialSelecionado.cor}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 mb-1">{t('catalog.origin')}</h3>
                  <p className="text-slate-600">{materialSelecionado.origem}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-slate-700 mb-2">{t('catalog.description')}</h3>
                <p className="text-slate-600">{materialSelecionado.descricao}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-slate-700 mb-2">{t('catalog.applications')}</h3>
                <div className="flex flex-wrap gap-2">
                  {materialSelecionado.aplicacoes.map((aplicacao, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded">
                      {aplicacao}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setMaterialSelecionado(null)}
                  className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {t('catalog.close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
