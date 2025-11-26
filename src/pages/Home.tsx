import { Link } from "react-router-dom";
import { ArrowRight, Settings, Package, Scissors, Star, Award, Calendar, CheckCircle, Building2, Shield } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Home() {
  const { t } = useTranslation();
  
  const sectors = [
    {
      title: t('sectors.serraria.title'),
      description: t('sectors.serraria.description'),
      icon: Settings,
      href: "/serraria",
      image: "/images/setores/serraria-placeholder.jpg"
    },
    {
      title: t('sectors.chapas.title'),
      description: t('sectors.chapas.description'),
      icon: Package,
      href: "/chapas",
      image: "/images/setores/chapas-placeholder.jpg"
    },
    {
      title: t('sectors.recortado.title'),
      description: t('sectors.recortado.description'),
      icon: Scissors,
      href: "/recortado",
      image: "/images/setores/recortado-placeholder.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-100 to-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img src="/images/dw-logo-black.png" alt="DW Granitos" className="h-20 w-auto" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('hero.cta.secondary')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t('about.title')}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                {t('about.subtitle')}
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                {t('about.location')} {t('about.structure')} {t('about.technology')}
              </p>
              <p className="text-lg text-slate-600 mb-8">
                {t('about.services')} {t('about.team')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-slate-600">Projetos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-slate-600">{t('about.experience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-slate-600">{t('about.sectors')}</div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">{t('about.mission')}</h4>
                <p className="text-slate-700">
                  {t('about.mission.text')}
                </p>
              </div>
              
              <div>
                <Link
                  to="/contato"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('sectors.learnMore')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-slate-200 rounded-xl h-96 overflow-hidden">
              <img
                src="/images/drone-empresa.jpg"
                alt="Vista aérea da DW Granitos e Marmores LTDA"
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Marble%20and%20granite%20workshop%20interior%2C%20professional%20stone%20processing%20facility%2C%20modern%20equipment%2C%20clean%20and%20organized%20workspace&image_size=square_hd";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">{t('home.stats.projects')}</div>
            </div>
            <div className="">
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">{t('home.stats.experience')}</div>
            </div>
            <div className="">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">{t('home.stats.materials')}</div>
            </div>
            <div className="">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">{t('home.stats.satisfaction')}</div>
            </div>
          </div>
        </div>
      </section>



      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t('home.process.title')}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('home.process.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{t('home.process.step1.title')}</h3>
              <p className="text-slate-600">{t('home.process.step1.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{t('home.process.step2.title')}</h3>
              <p className="text-slate-600">{t('home.process.step2.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{t('home.process.step3.title')}</h3>
              <p className="text-slate-600">{t('home.process.step3.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{t('home.process.step4.title')}</h3>
              <p className="text-slate-600">{t('home.process.step4.description')}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">5</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{t('home.process.step5.title')}</h3>
              <p className="text-slate-600">{t('home.process.step5.description')}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">6</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{t('home.process.step6.title')}</h3>
              <p className="text-slate-600">{t('home.process.step6.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                {t('home.quality.title')}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {t('home.quality.subtitle')}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700">{t('home.quality.materials')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700">{t('home.quality.certified')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700">{t('home.quality.guarantee')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-slate-700">{t('home.quality.support')}</span>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Award className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-800">{t('home.quality.certifications.title')}</h3>
                </div>
                <p className="text-slate-700">
                  {t('home.quality.certifications.text')}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-800 mb-2">{t('home.quality.iso.title')}</h4>
                <p className="text-sm text-slate-600">{t('home.quality.iso.subtitle')}</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-800 mb-2">{t('home.quality.safety.title')}</h4>
                <p className="text-sm text-slate-600">{t('home.quality.safety.subtitle')}</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <Star className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-800 mb-2">{t('home.quality.excellence.title')}</h4>
                <p className="text-sm text-slate-600">{t('home.quality.excellence.subtitle')}</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center">
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-800 mb-2">{t('home.quality.compliance.title')}</h4>
                <p className="text-sm text-slate-600">{t('home.quality.compliance.subtitle')}</p>
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
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('home.projects.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-8">
            {/* Blessed Alquimia Excepcional - Left Column */}
            <div className="relative group animate-fade-in-up mb-32" style={{animationDelay: '0.2s'}}>
              {/* Prédio na frente do card */}
              <div className="absolute inset-x-0 top-[-20px] h-32 z-30 transform group-hover:-translate-y-4 transition-all duration-500">
                <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 h-full flex items-end justify-center">
                  <img
                    src="/images/projects/Blessed_predio.png"
                    alt="Blessed Alquimia Excepcional"
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
                      src="/images/projects/Blessed_logo.png"
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
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">AQUARIUS EXCEPTIONAL</div>
                </div>
                
                {/* Conteúdo */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">Granito Premium</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">Mármore</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">Residencial</span>
                  </div>
                  <p className="text-slate-700 text-sm text-center leading-relaxed">
                    {t('home.projects.blessed.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Residencial Salinas - Right Column */}
            <div className="relative group animate-fade-in-up mb-32" style={{animationDelay: '0.4s'}}>
              {/* Prédio na frente do card */}
              <div className="absolute inset-x-0 top-[-20px] h-32 z-30 transform group-hover:-translate-y-4 transition-all duration-500">
                <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 h-full flex items-end justify-center">
                  <img
                    src="/images/projects/Salinas_predio.png"
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
                      src="/images/projects/Salinas_logo.png"
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
                        <div className="text-xs uppercase tracking-wide text-slate-500">Residencial</div>
                        <div className="text-2xl font-bold text-slate-800">Salinas</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">- Bosque dos Eucaliptos -</div>
                </div>
                
                {/* Conteúdo */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Pedras Naturais</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Residencial</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Premium</span>
                  </div>
                  <p className="text-slate-700 text-sm text-center leading-relaxed">
                    {t('home.projects.salinas.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terceiro Card - Maranata Parque Industrial */}
          <div className="mt-32 max-w-2xl mx-auto relative group animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            {/* Prédio na frente do card */}
            <div className="absolute inset-x-0 top-[-80px] h-32 z-30 transform group-hover:-translate-y-4 transition-all duration-500">
              <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 h-full flex items-end justify-center">
                <img
                  src="/images/projects/Maranata_predio.png"
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
                    src="/images/projects/Maranata_logo.png"
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
                  <div className="hidden text-2xl font-bold text-slate-800">Maranata</div>
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">Parque Industrial</div>
              </div>
              
              {/* Conteúdo */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">Industrial</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">Revestimento</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">Granito</span>
                </div>
                <p className="text-slate-700 text-sm text-center leading-relaxed">
                  {t('home.projects.maranata.description')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-white">
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
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="h-56 bg-slate-200 flex-shrink-0">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <sector.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 ml-4">
                        {sector.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 mb-6 flex-grow">
                      {sector.description}
                    </p>
                    <Link
                      to={sector.href}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-auto"
                    >
                      {t('sectors.learnMore')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Partners Section */}
      <div className="mt-24">
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Parceiros Comerciais
          </h3>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Construtoras com quem realizamos diversos condomínios e empreendimentos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Morar */}
          <div className="group">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow h-full flex flex-col justify-center">
              <img
                src="/images/construtoras/morar-logo.png"
                alt="Morar Construtora"
                className="h-16 mx-auto mb-4 object-contain"
              />
              <h4 className="text-xl font-bold text-slate-800 mb-2">Morar</h4>
              <p className="text-slate-600 text-sm">
                Construtora parceira em diversos empreendimentos residenciais
              </p>
            </div>
          </div>

          {/* Tecvale */}
          <div className="group">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow h-full flex flex-col justify-center">
              <img
                src="/images/construtoras/tecvale-logo.png"
                alt="Tecvale Construtora"
                className="h-16 mx-auto mb-4 object-contain"
              />
              <h4 className="text-xl font-bold text-slate-800 mb-2">Tecvale</h4>
              <p className="text-slate-600 text-sm">
                Especializada em condomínios horizontais e verticais
              </p>
            </div>
          </div>

          {/* Estanza */}
          <div className="group">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow h-full flex flex-col justify-center">
              <img
                src="/images/construtoras/estanza-logo.png"
                alt="Estanza Construtora"
                className="h-16 mx-auto mb-4 object-contain"
              />
              <h4 className="text-xl font-bold text-slate-800 mb-2">Estanza</h4>
              <p className="text-slate-600 text-sm">
                Desenvolvimento de empreendimentos de alto padrão
              </p>
            </div>
          </div>

          {/* Vitale */}
          <div className="group">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow h-full flex flex-col justify-center">
              <img
                src="/images/construtoras/vitale-logo.png"
                alt="Vitale Construtora"
                className="h-16 mx-auto mb-4 object-contain"
              />
              <h4 className="text-xl font-bold text-slate-800 mb-2">Vitale</h4>
              <p className="text-slate-600 text-sm">
                Construtora com sólida experiência em empreendimentos residenciais
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            {t('hero.cta.secondary')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}