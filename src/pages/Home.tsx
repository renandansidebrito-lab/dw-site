import { Link } from "react-router-dom";
import { ArrowRight, Settings, Package, Scissors, Star, CheckCircle, Shield, MapPin, Truck } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import ModernHero from "@/components/ModernHero";
import Seo from "@/components/seo/Seo";
import { institutionalContent } from "@/data/institutionalContent";

export default function Home() {
  const { t, language } = useTranslation();
  const seo = institutionalContent[language].seo.home;
  
  const sectors = [
    {
      title: t('sectors.serraria.title'),
      description: t('sectors.serraria.description'),
      icon: Settings,
      href: "/serraria",
      image: "/images/setores/serraria.webp"
    },
    {
      title: t('sectors.chapas.title'),
      description: t('sectors.chapas.description'),
      icon: Package,
      href: "/chapas",
      image: "/images/setores/chapas.webp"
    },
    {
      title: t('sectors.recortado.title'),
      description: t('sectors.recortado.description'),
      icon: Scissors,
      href: "/recortado",
      image: "/images/setores/recortado.webp"
    }
  ];

  return (
    <div className="min-h-screen">
      <Seo title={seo.title} description={seo.description} path="/" />
      {/* Modern Hero Section */}
      <ModernHero />

      {/* About Section */}

      {/* Statistics Section */}
      <section className="py-20 bg-brand animate-section-enter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="">
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">{t('home.stats.projects')}</div>
            </div>
            <div className="">
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">{t('home.stats.experience')}</div>
            </div>
            <div className="">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-white/80 text-sm uppercase tracking-wide">{t('home.stats.materials')}</div>
            </div>
            <div className="">
              <div className="text-4xl md:text-5xl font-bold mb-2 flex justify-center"><CheckCircle className="w-10 h-10 md:w-12 md:h-12" /></div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Controle de qualidade<br/>em todas as etapas</div>
            </div>
          </div>
        </div>
      </section>




      {/* Quality Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 relative">
                  {t('home.quality.title')}
                  <span className="absolute -bottom-2 left-0 w-24 h-1 bg-brand rounded-full"></span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t('home.quality.subtitle')}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{t('home.quality.materials')}</h4>
                    <p className="text-sm text-slate-600">{t('home.quality.materials.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{t('home.quality.guarantee')}</h4>
                    <p className="text-sm text-slate-600">{t('home.quality.guarantee.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{t('home.quality.support')}</h4>
                    <p className="text-sm text-slate-600">{t('home.quality.support.description')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 mt-12">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">{t('home.quality.safety.title')}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{t('home.quality.safety.subtitle')}</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">{t('home.quality.excellence.title')}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{t('home.quality.excellence.subtitle')}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">{t('home.quality.compliance.title')}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{t('home.quality.compliance.subtitle')}</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-rose-600" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">{t('home.quality.delivery.title')}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{t('home.quality.delivery.subtitle')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-50 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t('home.projects.title')}
            </h2>
            <div className="w-24 h-1 bg-brand mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('home.projects.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-8">
            {/* Blessed Alquimia Excepcional */}
            <div className="relative group animate-fade-in-up mb-20 md:mb-32" style={{animationDelay: '0.2s'}}>
              {/* Prédio na frente do card */}
              <div className="absolute inset-x-0 top-[-20px] h-32 z-30 transform group-hover:-translate-y-4 transition-all duration-500">
                <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 h-full flex items-end justify-center">
                  <img
                    src="/images/projects/Blessed_predio.webp"
                    alt="Blessed Alquimia Excepcional"
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transform group-hover:scale-125 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              
              {/* Card base com logo e descrição - ATRÁS DO PRÉDIO */}
              <div className="relative z-0 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg pt-12 pb-4 px-6 border border-slate-200 group-hover:shadow-2xl group-hover:border-slate-300 transition-all duration-500 overflow-hidden mt-16">
                {/* Efeito de brilho sutil no card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Logo */}
                <div className="text-center mb-6 relative z-10">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/projects/Blessed_logo.webp"
                      alt="Blessed Logo"
                      className="max-h-12 object-contain drop-shadow-md"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'block';
                        }
                      }}
                    />
                    <div className="hidden text-3xl font-bold text-slate-800" style={{fontFamily: 'serif'}}>BLESSED</div>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">{t('home.projects.blessed.subtitle')}</div>
                </div>
                
                {/* Conteúdo */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-brandLight text-brand text-xs rounded-full font-medium">{t('home.projects.tags.premiumGranite')}</span>
                    <span className="px-3 py-1 bg-brandLight text-brand text-xs rounded-full font-medium">{t('home.projects.tags.marble')}</span>
                    <span className="px-3 py-1 bg-brandLight text-brand text-xs rounded-full font-medium">{t('home.projects.tags.residential')}</span>
                  </div>
                  <p className="text-slate-700 text-sm text-center leading-relaxed">
                    {t('home.projects.blessed.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Residencial Salinas */}
            <div className="relative group animate-fade-in-up mb-20 md:mb-32" style={{animationDelay: '0.4s'}}>
              {/* Prédio na frente do card */}
              <div className="absolute inset-x-0 top-[-20px] h-32 z-30 transform group-hover:-translate-y-4 transition-all duration-500">
                <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 h-full flex items-end justify-center">
                  <img
                    src="/images/projects/Salinas_predio.webp"
                    alt="Residencial Salinas"
                    className="max-h-full max-w-full object-contain transform group-hover:scale-125 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              
              {/* Card base com logo e descrição - ATRÁS DO PRÉDIO */}
              <div className="relative z-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg pt-12 pb-4 px-6 border border-green-200 group-hover:shadow-2xl group-hover:border-green-300 transition-all duration-500 overflow-hidden mt-16">
                {/* Efeito de brilho sutil no card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Logo */}
                <div className="text-center mb-6 relative z-10">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/projects/Salinas_logo.webp"
                      alt="Salinas Logo"
                      className="max-h-12 object-contain drop-shadow-md"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'block';
                        }
                      }}
                    />
                    <div className="hidden flex items-center justify-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 via-yellow-400 to-red-500 rounded-full mr-3"></div>
                      <div className="text-left">
                        <div className="text-xs uppercase tracking-wide text-slate-500">{t('home.projects.tags.residential')}</div>
                        <div className="text-2xl font-bold text-slate-800">Salinas</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">{t('home.projects.salinas.location')}</div>
                </div>
                
                {/* Conteúdo */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">{t('home.projects.tags.naturalStones')}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">{t('home.projects.tags.residential')}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">{t('home.projects.tags.premium')}</span>
                  </div>
                  <p className="text-slate-700 text-sm text-center leading-relaxed">
                    {t('home.projects.salinas.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Maranata Parque Industrial */}
            <div className="relative group animate-fade-in-up mb-20 md:mb-20 md:mb-32" style={{animationDelay: '0.6s'}}>
              {/* Prédio na frente do card */}
              <div className="absolute inset-x-0 top-[-20px] h-32 z-30 transform group-hover:-translate-y-4 transition-all duration-500">
                <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 h-full flex items-end justify-center">
                  <img
                    src="/images/projects/Maranata_predio.webp"
                    alt="Maranata Parque Industrial"
                    className="max-h-full max-w-full object-contain transform group-hover:scale-125 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              
              {/* Card base com logo e descrição - ATRÁS DO PRÉDIO */}
              <div className="relative z-0 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg pt-12 pb-4 px-6 border border-orange-200 group-hover:shadow-2xl group-hover:border-orange-300 transition-all duration-500 overflow-hidden mt-16">
                {/* Efeito de brilho sutil no card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Logo */}
                <div className="text-center mb-6 relative z-10">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/projects/Maranata_logo.webp"
                      alt="Maranata Logo"
                      className="max-h-12 object-contain drop-shadow-md"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'block';
                        }
                      }}
                    />
                    <div className="hidden text-2xl font-bold text-slate-800">{t('home.projects.maranata.title')}</div>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">{t('home.projects.maranata.location')}</div>
                </div>
                
                {/* Conteúdo */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">{t('home.projects.tags.industrial')}</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">{t('home.projects.tags.cladding')}</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">{t('home.projects.tags.granite')}</span>
                  </div>
                  <p className="text-slate-700 text-sm text-center leading-relaxed">
                    {t('home.projects.maranata.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Believe Residence */}
            <div className="relative group animate-fade-in-up mb-20 md:mb-20 md:mb-32" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-x-0 top-[-20px] h-32 z-30 transform group-hover:-translate-y-4 transition-all duration-500">
                <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 h-full flex items-end justify-center">
                  <img
                    src="/images/projects/Believe_residence_predio.webp"
                    alt="Believe Residence"
                    className="max-h-full max-w-full object-contain transform group-hover:scale-125 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="relative z-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg pt-12 pb-4 px-6 border border-blue-200 group-hover:shadow-2xl group-hover:border-blue-300 transition-all duration-500 overflow-hidden mt-16">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center mb-6 relative z-10">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/projects/Believe_residence_logo.webp"
                      alt="Believe Logo"
                      className="max-h-12 object-contain drop-shadow-md"
                      onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                         if (nextSibling) {
                           nextSibling.style.display = 'block';
                         }
                      }}
                    />
                    <div className="hidden text-2xl font-bold text-slate-800">{t('home.projects.believe.title')}</div>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">{t('home.projects.believe.location')}</div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">{t('home.projects.tags.residential')}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">{t('home.projects.tags.highStandard')}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">{t('home.projects.tags.granite')}</span>
                  </div>
                  <p className="text-slate-700 text-sm text-center leading-relaxed">
                    {t('home.projects.believe.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Alvoradas Arboville */}
            <div className="relative group animate-fade-in-up mb-20 md:mb-32" style={{animationDelay: '0.4s'}}>
              <div className="absolute inset-x-0 top-[-20px] h-32 z-30 transform group-hover:-translate-y-4 transition-all duration-500">
                <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 h-full flex items-end justify-center">
                  <img
                    src="/images/projects/Alvoradas_arboville_predio.webp"
                    alt="Alvoradas Arboville"
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transform group-hover:scale-125 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="relative z-0 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg pt-12 pb-4 px-6 border border-emerald-200 group-hover:shadow-2xl group-hover:border-emerald-300 transition-all duration-500 overflow-hidden mt-16">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center mb-6 relative z-10">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/construtoras/terra_simao-logo.webp"
                      alt="Terra Simão Logo"
                      className="max-h-12 object-contain drop-shadow-md"
                    />
                  </div>
                   <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">{t('home.projects.alvoradas.location')}</div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">{t('home.projects.tags.residential')}</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">{t('home.projects.tags.nature')}</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">{t('home.projects.tags.naturalStones')}</span>
                  </div>
                  <p className="text-slate-700 text-sm text-center leading-relaxed">
                    {t('home.projects.alvoradas.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Noah Residence */}
            <div className="relative group animate-fade-in-up mb-20 md:mb-20 md:mb-32" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-x-0 top-[-20px] h-32 z-30 transform group-hover:-translate-y-4 transition-all duration-500">
                <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 h-full flex items-end justify-center">
                  <img
                    src="/images/projects/Noah_residence_predio.webp"
                    alt="Noah Residence"
                    className="max-h-full max-w-full object-contain transform group-hover:scale-125 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="relative z-0 bg-gradient-to-br from-gray-50 to-stone-50 rounded-2xl shadow-lg pt-12 pb-4 px-6 border border-stone-200 group-hover:shadow-2xl group-hover:border-stone-300 transition-all duration-500 overflow-hidden mt-16">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center mb-6 relative z-10">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/projects/Noah_residence_logo.webp"
                      alt="Noah Logo"
                      className="max-h-12 object-contain drop-shadow-md"
                      onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                         if (nextSibling) {
                           nextSibling.style.display = 'block';
                         }
                      }}
                    />
                     <div className="hidden text-2xl font-bold text-slate-800">{t('home.projects.noah.title')}</div>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">{t('home.projects.noah.location')}</div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-stone-100 text-stone-700 text-xs rounded-full font-medium">{t('home.projects.tags.residential')}</span>
                    <span className="px-3 py-1 bg-stone-100 text-stone-700 text-xs rounded-full font-medium">{t('home.projects.tags.modern')}</span>
                    <span className="px-3 py-1 bg-stone-100 text-stone-700 text-xs rounded-full font-medium">{t('home.projects.tags.marble')}</span>
                  </div>
                  <p className="text-slate-700 text-sm text-center leading-relaxed">
                    {t('home.projects.noah.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Neori JD */}
            <div className="relative group animate-fade-in-up mb-20 md:mb-32" style={{animationDelay: '0.4s'}}>
              <div className="absolute inset-x-0 top-[-20px] h-32 z-30 transform group-hover:-translate-y-4 transition-all duration-500">
                <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 h-full flex items-end justify-center">
                  <img
                    src="/images/projects/Neori_jd_predio.webp"
                    alt="Neori JD"
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transform group-hover:scale-125 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="relative z-0 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-lg pt-12 pb-4 px-6 border border-amber-200 group-hover:shadow-2xl group-hover:border-amber-300 transition-all duration-500 overflow-hidden mt-16">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center mb-6 relative z-10">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/projects/Neori_jd_logo.webp"
                      alt="Neori Logo"
                      className="max-h-12 object-contain drop-shadow-md"
                      onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                         if (nextSibling) {
                           nextSibling.style.display = 'block';
                         }
                      }}
                    />
                    <div className="hidden text-2xl font-bold text-slate-800">{t('home.projects.neori.title')}</div>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">{t('home.projects.neori.location')}</div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-medium">{t('home.projects.tags.commercialResidential')}</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-medium">{t('home.projects.tags.design')}</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-medium">{t('home.projects.tags.granite')}</span>
                  </div>
                  <p className="text-slate-700 text-sm text-center leading-relaxed">
                    {t('home.projects.neori.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Vista dos Araçás */}
            <div className="relative group animate-fade-in-up mb-20 md:mb-32" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-x-0 top-[-20px] h-32 z-30 transform group-hover:-translate-y-4 transition-all duration-500">
                <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 h-full flex items-end justify-center">
                  <img
                    src="/images/projects/Vista_dos_aracas_predio.webp"
                    alt="Vista dos Araçás"
                    className="max-h-full max-w-full object-contain transform group-hover:scale-125 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="relative z-0 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl shadow-lg pt-12 pb-4 px-6 border border-sky-200 group-hover:shadow-2xl group-hover:border-sky-300 transition-all duration-500 overflow-hidden mt-16">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center mb-6 relative z-10">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/projects/Vista_dos_aracas_logo.webp"
                      alt="Vista Logo"
                      className="max-h-12 object-contain drop-shadow-md"
                      onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                         if (nextSibling) {
                           nextSibling.style.display = 'block';
                         }
                      }}
                    />
                    <div className="hidden text-2xl font-bold text-slate-800">{t('home.projects.vista.title')}</div>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">{t('home.projects.vista.location')}</div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs rounded-full font-medium">{t('home.projects.tags.residential')}</span>
                    <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs rounded-full font-medium">{t('home.projects.tags.view')}</span>
                    <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs rounded-full font-medium">{t('home.projects.tags.stones')}</span>
                  </div>
                  <p className="text-slate-700 text-sm text-center leading-relaxed">
                    {t('home.projects.vista.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Colina das Amoras */}
            <div className="relative group animate-fade-in-up mb-20 md:mb-32" style={{animationDelay: '0.4s'}}>
              <div className="absolute inset-x-0 top-[-20px] h-32 z-30 transform group-hover:-translate-y-4 transition-all duration-500">
                <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 h-full flex items-end justify-center">
                  <img
                    src="/images/projects/Colina_das_amoras_predio.webp"
                    alt="Colina das Amoras"
                    className="max-h-full max-w-full object-contain transform group-hover:scale-125 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="relative z-0 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-lg pt-12 pb-4 px-6 border border-rose-200 group-hover:shadow-2xl group-hover:border-rose-300 transition-all duration-500 overflow-hidden mt-16">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center mb-6 relative z-10">
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src="/images/projects/Colina_das_amoras_logo.webp"
                      alt="Colina Logo"
                      className="max-h-12 object-contain drop-shadow-md"
                      onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                         if (nextSibling) {
                           nextSibling.style.display = 'block';
                         }
                      }}
                    />
                    <div className="hidden text-2xl font-bold text-slate-800">{t('home.projects.colina.title')}</div>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">{t('home.projects.colina.location')}</div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs rounded-full font-medium">{t('home.projects.tags.residential')}</span>
                    <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs rounded-full font-medium">{t('home.projects.tags.condominium')}</span>
                    <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs rounded-full font-medium">{t('home.projects.tags.finishing')}</span>
                  </div>
                  <p className="text-slate-700 text-sm text-center leading-relaxed">
                    {t('home.projects.colina.description')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Delivery Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <img 
                src="/images/setores/chapas.webp" 
                alt="Logística de chapas e expedição da DW Granitos & Mármores" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand/20 text-brandLight text-sm font-bold mb-6 border border-brand/30">
                  <Truck className="w-4 h-4 mr-2" />
                  {t('delivery.section.badge')}
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
                  {t('delivery.global')}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {t('delivery.section.description')}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    <span className="text-white font-medium">{t('delivery.section.bullets.1')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    <span className="text-white font-medium">{t('delivery.section.bullets.2')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    <span className="text-white font-medium">{t('delivery.section.bullets.3')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    <span className="text-white font-medium">{t('delivery.section.bullets.4')}</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-brand/10 rounded-3xl border border-white/10 p-4 md:p-8">
                  {/* Grid de Mídia - Carregamento */}
                  <div className="grid grid-cols-2 gap-4 h-full">
                    {/* Item 1 - Vídeo Principal */}
                    <div className="col-span-2 aspect-video rounded-2xl overflow-hidden relative shadow-lg group bg-slate-900">
                      <video 
                        src="/images/logistica/carregamento-1.mp4" 
                        preload="metadata"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 pointer-events-none">
                        <span className="text-white font-medium text-sm">{t('delivery.media.caption')}</span>
                      </div>
                    </div>
                    
                    {/* Item 2 - Vídeo Secundário */}
                    <div className="aspect-square rounded-2xl overflow-hidden relative shadow-lg group bg-slate-900">
                      <video 
                        src="/images/logistica/carregamento-2.mp4" 
                        preload="metadata"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Item 3 - Vídeo Terciário */}
                    <div className="aspect-square rounded-2xl overflow-hidden relative shadow-lg group bg-slate-900">
                      <img
                        src="/images/setores/chapas.webp"
                        alt="Movimentação e expedição de chapas na DW Granitos & Mármores"
                        loading="lazy"
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "/images/drone-empresa.webp";
                          e.currentTarget.onerror = null;
                        }}
                      />
                    </div>
                  </div>

                  {/* Card Flutuante de Localização */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 hidden md:block z-20">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-brand/10 rounded-xl text-brand">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-slate-900 font-bold text-lg">{t('delivery.location.title')}</div>
                        <div className="text-slate-500 text-sm">{t('delivery.location.subtitle')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Delivery Banner (Old) -> Removed to give space to the new section above */}
      
      {/* Sectors Section */}
      <section id="sectors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t('sectors.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('sectors.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="group relative h-full">
                {/* Background decorative element */}
                <div className="absolute inset-0 bg-brand/5 rounded-2xl transform rotate-1 transition-transform group-hover:rotate-2"></div>
                
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col border border-slate-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                  {/* Image Container */}
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                    <img
                      src={sector.image}
                      alt={sector.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                       <div className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm text-brand">
                        <sector.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-brand transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                      {sector.description}
                    </p>
                    
                    <Link
                      to={sector.href}
                      className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-brand hover:opacity-80 transition-colors mt-auto group/link"
                    >
                      {t('sectors.learnMore')}
                      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Partners Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              {t('home.partners.title')}
            </h3>
            <div className="w-24 h-1 bg-brand mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('home.partners.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* Morar */}
            <div className="group flex justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 w-32 md:w-40">
              <img
                src="/images/construtoras/morar-logo.webp"
                alt="Morar Construtora"
                className="h-12 md:h-16 object-contain"
                title={t('home.partners.morar.title')}
              />
            </div>

            {/* Tecvale */}
            <div className="group flex justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 w-32 md:w-40">
              <img
                src="/images/construtoras/tecvale-logo.webp"
                alt="Tecvale Construtora"
                className="h-12 md:h-16 object-contain"
                title={t('home.partners.tecvale.title')}
              />
            </div>

            {/* Stanza */}
            <div className="group flex justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 w-32 md:w-40">
              <img
                src="/images/construtoras/stanza-logo.webp"
                alt="Stanza Construtora"
                className="h-12 md:h-16 object-contain"
                title={t('home.partners.stanza.title')}
              />
            </div>

            {/* Vitale */}
            <div className="group flex justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 w-32 md:w-40">
              <img
                src="/images/construtoras/vitale-logo.webp"
                alt="Vitale Construtora"
                className="h-12 md:h-16 object-contain"
                title={t('home.partners.vitale.title')}
              />
            </div>

            {/* MZ3 */}
            <div className="group flex justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 w-32 md:w-40">
              <img
                src="/images/construtoras/mz3-logo.webp"
                alt="MZ3"
                className="h-12 md:h-16 object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                title="MZ3"
              />
            </div>

            {/* MVituzzo */}
            <div className="group flex justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 w-32 md:w-40">
              <img
                src="/images/construtoras/mvituzzo-logo.webp"
                alt="MVituzzo"
                className="h-12 md:h-16 object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                title="MVituzzo"
              />
            </div>

            {/* Terra Simão */}
            <div className="group flex justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 w-32 md:w-40">
              <img
                src="/images/construtoras/terra_simao-logo.webp"
                alt="Terra Simão"
                className="h-12 md:h-16 object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                title={t('home.partners.terrasimao.title')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center px-8 py-3 bg-white text-brand font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            {t('hero.cta.secondary')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Global Delivery Banner (Old) -> Removed to give space to the new section above */}
    </div>
  );
}
