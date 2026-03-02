import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Serraria() {
  const { t } = useTranslation();

  const services = [
    t('serraria.services.list.1'),
    t('serraria.services.list.2'),
    t('serraria.services.list.3'),
    t('serraria.services.list.4'),
    t('serraria.services.list.5'),
    t('serraria.services.list.6')
  ];

  const equipment = [
    {
      name: t('serraria.equipment.multifio.name'),
      description: t('serraria.equipment.multifio.description'),
      capacity: t('serraria.equipment.multifio.capacity')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-bottom" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 -skew-x-12 transform origin-top" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                {t('serraria.hero.title')}
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                {t('serraria.hero.description')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 relative inline-block">
                  {t('serraria.services.title')}
                  <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brand" />
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {t('serraria.services.description')}
                </p>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <div className="mt-1 bg-green-100 p-1 rounded-full group-hover:bg-green-200 transition-colors">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-6">
                    <img
                      src="/images/mineracao-jeronymo-logo.webp"
                      alt="Mineração Jeronymo"
                      className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                    <div>
                      <div className="text-lg font-bold text-slate-800">{t('serraria.partner.mineracaoJeronymo')}</div>
                      <div className="text-slate-500 text-sm">{t('serraria.partner.role')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand/20 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500" />
                <div className="relative bg-slate-200 rounded-xl h-[500px] overflow-hidden shadow-2xl">
                  <img
                    src="/images/setores/serraria.webp"
                    alt={t('serraria.hero.title')}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white font-medium">{t('serraria.image.caption')}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {t('serraria.equipment.title')}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t('serraria.equipment.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-100 h-full flex flex-col">
                  <div className="w-16 h-16 bg-brandLight rounded-2xl flex items-center justify-center mb-6 text-brand">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-6 border-t border-slate-100">
                    <span className="text-sm text-slate-500 uppercase tracking-wide">{t('serraria.equipment.capacityLabel')}</span>
                    <div className="text-brand font-bold text-lg mt-1">
                      {item.capacity}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {t('serraria.process.title')}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t('serraria.process.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="text-center group">
                  <div className="w-24 h-24 bg-white border-4 border-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:border-brand transition-colors duration-300">
                    <span className="text-4xl font-bold text-brand">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{t('serraria.process.step1.title')}</h3>
                  <p className="text-slate-600 max-w-sm mx-auto leading-relaxed">{t('serraria.process.step1.description')}</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.2}>
                <div className="text-center group">
                  <div className="w-24 h-24 bg-white border-4 border-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:border-brand transition-colors duration-300">
                    <span className="text-4xl font-bold text-brand">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{t('serraria.process.step2.title')}</h3>
                  <p className="text-slate-600 max-w-sm mx-auto leading-relaxed">{t('serraria.process.step2.description')}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mineração Jeronymo Info */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[400px]">
          {/* Esquerda: Informações (Metade) */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-6 mb-8">
                <img
                  src="/images/mineracao-jeronymo-logo.webp"
                  alt="Mineração Jeronymo"
                  className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div>
                  <h3 className="text-3xl font-bold text-slate-800">
                    MINERAÇÃO JERONYMO LTDA
                  </h3>
                  <p className="text-slate-500 font-medium text-lg">
                    CNPJ: 03.313.859/0001-49
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-slate-600">
                <div className="flex items-start gap-4">
                  <div className="bg-brand/10 p-3 rounded-full text-brand mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin"
                    >
                      <path d="M20 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-2">
                      {t("serraria.partner.location.title")}
                    </h4>
                    <p className="text-lg leading-relaxed whitespace-pre-line">
                      {t("serraria.partner.location.address")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand/10 p-3 rounded-full text-brand mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-2">
                      {t("serraria.partner.contact.title")}
                    </h4>
                    <p className="text-lg leading-relaxed">(28) 3523-1059</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direita: Mapa Full (Metade) */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-full relative overflow-hidden bg-slate-200">
            <iframe
              src="https://maps.google.com/maps?q=Minera%C3%A7%C3%A3o%20Jeronymo%20Ltda%20Gironda&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-all duration-500"
            ></iframe>
            {/* Overlay Gradient para suavizar a transição */}
            <div className="absolute inset-0 pointer-events-none shadow-inner border-l border-slate-200/50" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t('serraria.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
              {t('serraria.cta.description')}
            </p>
            <a
              href="/contato"
              className="inline-flex items-center px-10 py-4 bg-white text-brand font-bold rounded-full hover:bg-slate-50 transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              {t('serraria.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
