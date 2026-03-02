import { ArrowRight, Scissors, Ruler, Clock, Award, CheckCircle, Truck } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Recortado() {
  const { t } = useTranslation();

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
      image: "/images/recortado/balcao.webp.webp",
      video: "/images/recortado/cozinha.mp4"
    },
    {
      title: t('recortado.gallery.items.2.title'),
      description: t('recortado.gallery.items.2.desc'),
      precision: "2cm",
      image: "/images/placeholder-square.webp", // Poster fallback
      video: "/images/recortado/escadaria.mp4"
    },
    {
      title: t('recortado.gallery.items.3.title'),
      description: t('recortado.gallery.items.3.desc'),
      precision: "2cm",
      image: "/images/placeholder-square.webp",
      video: "/images/recortado/pisos.mp4"
    },
    {
      title: t('recortado.gallery.items.4.title'),
      description: t('recortado.gallery.items.4.desc'),
      precision: "2cm",
      image: "/images/recortado/lavabo.webp.webp",
      video: "/images/recortado/lavabo.mp4"
    },
    {
      title: t('recortado.gallery.items.5.title'),
      description: t('recortado.gallery.items.5.desc'),
      precision: "2cm",
      image: "/images/recortado/lavabo1.webp.webp"
    },
    {
      title: t('recortado.gallery.items.6.title'),
      description: t('recortado.gallery.items.6.desc'),
      precision: "2cm",
      image: "/images/recortado/balcao.webp.webp"
    },
    {
      title: t('recortado.gallery.items.7.title'),
      description: t('recortado.gallery.items.7.desc'),
      precision: "2cm",
      image: "/images/recortado/prateleira.webp.webp"
    },
    {
      title: t('recortado.gallery.items.8.title'),
      description: t('recortado.gallery.items.8.desc'),
      precision: "2cm",
      image: "/images/recortado/pias.webp.webp"
    },
    {
      title: t('recortado.gallery.items.9.title'),
      description: t('recortado.gallery.items.9.desc'),
      precision: "2cm",
      image: "/images/placeholder-square.webp",
      video: "/images/recortado/tampa_de_mesa.mp4"
    },
    {
      title: t('recortado.gallery.items.10.title'),
      description: t('recortado.gallery.items.10.desc'),
      precision: "2cm",
      image: "/images/recortado/lavabo.webp"
    },
    {
      title: t('recortado.gallery.items.11.title'),
      description: t('recortado.gallery.items.11.desc'),
      precision: "2cm",
      image: "/images/placeholder-square.webp",
      video: "/images/recortado/lavabo.mp4"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="/images/setores/recortado.webp" 
            className="w-full h-full object-cover opacity-30" 
            alt="Recortado Background"
            onError={(e) => {
              e.currentTarget.src = "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Industrial%20stone%20cutting%20machine%20cnc%20precision%20work&image_size=landscape_16_9";
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
      <section id="services" className="py-24 bg-slate-50">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-slate-100 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      <Scissors className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 ml-4 group-hover:text-brand transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
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

      {/* Examples Gallery */}
      <section className="py-24 bg-white">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {examples.map((example, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group rounded-2xl overflow-hidden cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    {/* Imagem Base (Sempre renderizada como fallback/poster) */}
                    <img
                      src={example.image}
                      alt={example.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "/images/placeholder-square.webp";
                        e.currentTarget.onerror = null;
                      }}
                    />

                    {/* Vídeo Overlay (se existir) */}
                    {(example as any).video && (
                      <video
                        src={(example as any).video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ opacity: 0 }}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 transition-opacity duration-500"
                        onLoadedData={(e) => {
                          e.currentTarget.style.opacity = '1';
                        }}
                        onError={(e) => {
                          console.error("Erro vídeo:", (example as any).video);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4">
                       <span className="inline-block px-2 py-1 mb-2 text-xs font-bold text-white bg-brand/80 backdrop-blur-sm rounded">
                        {example.precision}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1">{example.title}</h3>
                      <p className="text-slate-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                        {example.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Precision Stats */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-slate-900" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
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
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 text-center">
                  <Ruler className="h-10 w-10 text-brand mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-1">1cm - 3cm</div>
                  <div className="text-sm text-slate-400">{t('recortado.precision.tolerance.label')}</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 text-center">
                  <Clock className="h-10 w-10 text-brand mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-1">48h</div>
                  <div className="text-sm text-slate-400">{t('recortado.precision.time.label')}</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {t('recortado.process.title')}
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: t('recortado.process.step1.title'), desc: t('recortado.process.step1.description') },
              { step: "2", title: t('recortado.process.step2.title'), desc: t('recortado.process.step2.description') },
              { step: "3", title: t('recortado.process.step3.title'), desc: t('recortado.process.step3.description') },
              { step: "4", title: t('recortado.process.step4.title'), desc: t('recortado.process.step4.description') }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="relative p-6 bg-white rounded-xl shadow-sm border border-slate-100 text-center group hover:shadow-md transition-shadow">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center text-xl font-bold border-4 border-slate-50">
                    {item.step}
                  </div>
                  <h3 className="mt-8 text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('recortado.customCta.title')}
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('recortado.customCta.description')}
            </p>
            <a
              href="/contato"
              className="inline-flex items-center px-8 py-4 bg-white text-brand font-bold rounded-full hover:bg-slate-100 transition-colors shadow-lg"
            >
              {t('recortado.customCta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Delivery Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-8 text-center text-lg font-bold tracking-wide uppercase shadow-lg">
        <p className="opacity-90">{t('delivery.global')}</p>
      </div>
    </div>
  );
}
