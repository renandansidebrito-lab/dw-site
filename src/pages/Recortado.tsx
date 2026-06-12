import { ArrowRight, Scissors, Ruler, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/i18nContext";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Seo from "@/components/seo/Seo";
import { institutionalContent } from "@/data/institutionalContent";

export default function Recortado() {
  const { t, language } = useTranslation();
  const seo = institutionalContent[language].seo.recortado;
  const fallbackImage = "/images/placeholder-material.svg";

  const services = [
    {
      title: t('recortado.services.item1.title'),
      description: t('recortado.services.item1.description'),
      features: [
        t('recortado.services.item1.features.1'),
        t('recortado.services.item1.features.2'),
        t('recortado.services.item1.features.3')
      ]
    },
    {
      title: t('recortado.services.item2.title'),
      description: t('recortado.services.item2.description'),
      features: [
        t('recortado.services.item2.features.1'),
        t('recortado.services.item2.features.2'),
        t('recortado.services.item2.features.3')
      ]
    },
    {
      title: t('recortado.services.item3.title'),
      description: t('recortado.services.item3.description'),
      features: [
        t('recortado.services.item3.features.1'),
        t('recortado.services.item3.features.2'),
        t('recortado.services.item3.features.3')
      ]
    },
    {
      title: t('recortado.services.item4.title'),
      description: t('recortado.services.item4.description'),
      features: [
        t('recortado.services.item4.features.1'),
        t('recortado.services.item4.features.2'),
        t('recortado.services.item4.features.3')
      ]
    },
    {
      title: t('recortado.services.item5.title'),
      description: t('recortado.services.item5.description'),
      features: [
        t('recortado.services.item5.features.1'),
        t('recortado.services.item5.features.2'),
        t('recortado.services.item5.features.3')
      ]
    },
    {
      title: t('recortado.services.item6.title'),
      description: t('recortado.services.item6.description'),
      features: [
        t('recortado.services.item6.features.1'),
        t('recortado.services.item6.features.2'),
        t('recortado.services.item6.features.3')
      ]
    }
  ];

  const examples = [
    {
      title: t('recortado.gallery.items.1.title'),
      description: t('recortado.gallery.items.1.desc'),
      precision: "2cm",
      image: "/images/recortado/balcao.webp.webp"
    },
    {
      title: t('recortado.gallery.items.13.title'),
      description: t('recortado.gallery.items.13.desc'),
      precision: "2cm",
      image: fallbackImage,
      video: "/images/recortado/cozinha.mp4"
    },
    {
      title: t('recortado.gallery.items.2.title'),
      description: t('recortado.gallery.items.2.desc'),
      precision: "2cm",
      image: fallbackImage,
      video: "/images/recortado/escadaria.mp4"
    },
    {
      title: t('recortado.gallery.items.4.title'),
      description: t('recortado.gallery.items.4.desc'),
      precision: "2cm",
      image: "/images/recortado/lavabo.webp"
    },
    {
      title: t('recortado.gallery.items.5.title'),
      description: t('recortado.gallery.items.5.desc'),
      precision: "2cm",
      image: "/images/recortado/lavabo1.webp"
    },
    {
      title: t('recortado.gallery.items.11.title'),
      description: t('recortado.gallery.items.11.desc'),
      precision: "2cm",
      image: fallbackImage,
      video: "/images/recortado/lavabo_personalizado.mp4"
    },
    {
      title: t('recortado.gallery.items.12.title'),
      description: t('recortado.gallery.items.12.desc'),
      precision: "2cm",
      image: "/images/recortado/lavabo_premium.webp"
    },
    {
      title: t('recortado.gallery.items.8.title'),
      description: t('recortado.gallery.items.8.desc'),
      precision: "2cm",
      image: "/images/recortado/pias.webp.webp"
    },
    {
      title: t('recortado.gallery.items.3.title'),
      description: t('recortado.gallery.items.3.desc'),
      precision: "2cm",
      image: fallbackImage,
      video: "/images/recortado/pisos.mp4"
    },
    {
      title: t('recortado.gallery.items.7.title'),
      description: t('recortado.gallery.items.7.desc'),
      precision: "2cm",
      image: "/images/recortado/prateleira.webp.webp"
    },
    {
      title: t('recortado.gallery.items.9.title'),
      description: t('recortado.gallery.items.9.desc'),
      precision: "2cm",
      image: fallbackImage,
      video: "/images/recortado/tampa_de_mesa.mp4"
    },
    {
      title: "Pia Personalizada",
      description: "Corte e acabamento refinado",
      precision: "2cm",
      image: fallbackImage,
      video: "/images/recortado/tampa_de_pia_personalizado.mp4"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo title={seo.title} description={seo.description} path="/recortado" />
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="/images/setores/recortado.webp" 
            className="w-full h-full object-cover opacity-30" 
            alt="Produção de recortados em rochas ornamentais"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
           />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand/20 border border-brand/30 text-brandLight text-sm font-medium mb-6">
                <Scissors className="w-4 h-4 mr-2" />
                {t('recortado.hero.badge')}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                {t('recortado.hero.title')}
              </h1>
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                {t('recortado.hero.description')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {t('recortado.services.title')}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t('recortado.services.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group rounded-sm border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-sm border border-slate-100 flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-colors duration-300">
                      <Scissors className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 ml-4 group-hover:text-brand transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-3 pt-6 border-t border-slate-100">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* O que a DW faz */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">O que produzimos em Recortados?</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Peças sob medida para transformar o seu projeto arquitetônico em realidade, com acabamento impecável.</p>
            </ScrollReveal>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Bancadas", "Balcões", "Soleiras", "Peitoris", "Lavatórios", "Escadas", "Peças sob medida"].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-sm text-slate-700 font-medium shadow-sm hover:border-brand/50 hover:bg-brand/5 hover:text-brandDark transition-colors cursor-default">
                  {item}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Principais Aplicações</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Nossos recortes são indicados para os mais diversos ambientes e necessidades.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { title: "Cozinha" },
              { title: "Banheiro" },
              { title: "Área Gourmet" },
              { title: "Comercial" },
              { title: "Escadas" },
              { title: "Soleiras/Peitoris" }
            ].map((app, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-6 md:p-8 rounded-sm border border-slate-100 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-bold text-slate-800 tracking-tight">{app.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* O que enviar para orçamento */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-sm p-8 md:p-14 shadow-xl relative overflow-hidden text-center md:text-left">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">O que enviar para orçamento?</h2>
                <p className="text-slate-300 mb-8 leading-relaxed text-lg font-light">
                  Para que nossa equipe comercial retorne o seu orçamento de forma mais ágil e precisa, tenha em mãos os seguintes itens:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-200">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></div> Medidas aproximadas</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></div> Tipo de material desejado</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></div> Projeto, desenho ou rascunho</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></div> Fotos do local</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></div> Quantidade de cubas/furos</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></div> Espelhos, saias ou guarnições</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></div> Cidade/local de entrega</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-sm p-8 md:p-10 border border-white/10 backdrop-blur-sm flex flex-col justify-center shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-3">Tudo pronto?</h3>
                <p className="text-slate-300 mb-8 font-light">Envie suas medidas agora mesmo pelo WhatsApp ou através do nosso formulário de contato.</p>
                <Link to="/contato" className="inline-flex items-center justify-center w-full px-6 py-4 bg-brand text-white font-bold rounded-sm hover:bg-brandDark transition-colors shadow-lg shadow-brand/20 uppercase tracking-widest text-sm">
                  Solicitar orçamento <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Gallery */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {t('recortado.examples.title')}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t('recortado.examples.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {examples.map((example, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow bg-slate-900">
                  <div className="relative h-[280px] md:h-[300px] overflow-hidden">
                    {(example as any).video ? (
                      <video
                        src={(example as any).video}
                        preload="auto"
                        autoPlay
                        loop
                        playsInline
                        muted
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        style={{ pointerEvents: 'none' }}
                        ref={(el) => {
                          if (el) {
                            el.defaultMuted = true;
                            el.muted = true;
                            el.play().catch(() => {});
                          }
                        }}
                      />
                    ) : (
                      <img
                        src={example.image}
                        alt={example.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        onError={(e) => {
                          e.currentTarget.src = fallbackImage;
                          e.currentTarget.onerror = null;
                        }}
                      />
                    )}
                    {/* Hover overlay that doesn't completely darken the image */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 pointer-events-none" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-500 md:group-hover:-translate-y-2">
                       <span className="inline-block px-2.5 py-1 mb-2.5 text-[10px] uppercase tracking-wider font-bold text-slate-800 bg-white/95 backdrop-blur-md rounded-sm shadow-sm">
                        {example.precision}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1 drop-shadow-md tracking-tight">{example.title}</h3>
                      <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2 hidden md:block">
                        <p className="text-white/90 text-sm font-light">
                          {example.description}
                        </p>
                      </div>
                      
                      {/* Mobile description visibility */}
                      <div className="md:hidden mt-1">
                        <p className="text-white/80 text-xs font-light line-clamp-2">
                          {example.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Precision Stats */}
      <section className="relative overflow-hidden bg-slate-900 py-16 text-white md:py-20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-slate-900" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t('recortado.precision.title')}
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {t('recortado.precision.description')}
              </p>
              
              <div className="space-y-4">
                {[
                  t('recortado.precision.list.1'),
                  t('recortado.precision.list.2'),
                  t('recortado.precision.list.3')
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-brand" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-sm border border-slate-700 bg-slate-800/50 p-6 text-center backdrop-blur-sm md:p-8 hover:bg-slate-800/70 transition-colors">
                <Ruler className="mx-auto mb-4 h-10 w-10 text-brand" />
                <div className="mb-1 text-3xl font-bold text-white md:text-4xl">1cm - 3cm</div>
                <div className="text-sm text-slate-400">{t('recortado.precision.tolerance.label')}</div>
              </div>
              <div className="rounded-sm border border-slate-700 bg-slate-800/50 p-6 text-center backdrop-blur-sm md:p-8 hover:bg-slate-800/70 transition-colors">
                <Clock className="mx-auto mb-4 h-10 w-10 text-brand" />
                <div className="mb-1 text-3xl font-bold text-white md:text-4xl">48h</div>
                <div className="text-sm text-slate-400">{t('recortado.precision.time.label')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-slate-50 py-20 md:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {t('recortado.process.title')}
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              { step: "1", title: t('recortado.process.step1.title'), desc: t('recortado.process.step1.description') },
              { step: "2", title: t('recortado.process.step2.title'), desc: t('recortado.process.step2.description') },
              { step: "3", title: t('recortado.process.step3.title'), desc: t('recortado.process.step3.description') },
              { step: "4", title: t('recortado.process.step4.title'), desc: t('recortado.process.step4.description') }
            ].map((item, idx) => (
              <div key={idx} className="group relative rounded-sm border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1 mt-6 xl:mt-0">
                  <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm border border-slate-100 bg-brand text-lg font-bold text-white shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-800 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl tracking-tight">
              {t('recortado.customCta.title')}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 font-light">
              {t('recortado.customCta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand text-white font-bold rounded-sm hover:bg-brandDark transition-colors shadow-lg shadow-brand/20 uppercase tracking-widest text-sm"
              >
                Falar com o setor de recortado
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
      </section>

      {/* Global Delivery Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-6 text-center text-lg font-bold uppercase tracking-wide text-white shadow-lg">
        <p className="opacity-90">{t('delivery.global')}</p>
      </div>
    </div>
  );
}
