import { ArrowRight, Star, Layers, Ruler, ShieldCheck, CheckCircle, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { getMateriais } from "@/data/materiais";
import { useTranslation } from "@/contexts/i18nContext";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Chapas() {
  const { t } = useTranslation();
  const materiaisExemplo = getMateriais(t);
  const [previewIndices, setPreviewIndices] = useState<number[]>(() => {
    const count = 4;
    const max = materiaisExemplo.length;
    const set = new Set<number>();
    while (set.size < Math.min(count, max)) {
      set.add(Math.floor(Math.random() * max));
    }
    return Array.from(set);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (materiaisExemplo.length === 0) return;
      setPreviewIndices(prev => {
        const pos = Math.floor(Math.random() * Math.min(4, prev.length));
        const currentSet = new Set(prev);
        let candidate = Math.floor(Math.random() * materiaisExemplo.length);
        let guard = 0;
        while (currentSet.has(candidate) && guard < 100) {
          candidate = Math.floor(Math.random() * materiaisExemplo.length);
          guard++;
        }
        const next = [...prev];
        next[pos] = candidate;
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: Layers, title: t('chapas.services.curadoria.title'), text: t('chapas.services.curadoria.text') },
    { icon: ShieldCheck, title: t('chapas.services.tratamento.title'), text: t('chapas.services.tratamento.text') },
    { icon: Star, title: t('chapas.services.acabamentos.title'), text: t('chapas.services.acabamentos.text') },
    { icon: Ruler, title: t('chapas.services.dimensoes.title'), text: t('chapas.services.dimensoes.text') },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="/images/setores/chapas.webp" 
            className="w-full h-full object-cover" 
            alt="Chapas Background"
            loading="eager"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.backgroundColor = '#0f172a'; // slate-900
            }}
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">{t('chapas.hero.title')}</h1>
              <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">{t('chapas.hero.subtitle')}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-xl p-8 h-full border border-slate-100 hover:border-brand/30 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-brandLight rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-300">
                    <service.icon className="h-7 w-7 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{service.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t('chapas.featured.title')}</h2>
                <p className="text-lg text-slate-600 max-w-xl">
                  {t('chapas.featured.subtitle')}
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <a href="/catalogo" className="hidden md:inline-flex items-center text-brand font-bold hover:text-brand2 transition-colors mt-6 md:mt-0">
                {t('chapas.featured.viewCatalog')} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {previewIndices.map((idx, i) => {
              const m = materiaisExemplo[idx];
              if (!m) return null;
              return (
                <ScrollReveal key={`${idx}-${i}`} delay={i * 0.1}>
                  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={m.imagem}
                        alt={m.nome}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                      <span className="inline-block px-2 py-1 mb-2 text-xs font-bold text-white bg-brand rounded-md">
                        {m.tipo}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brandLight transition-colors">{m.nome}</h3>
                      <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {m.descricao}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <a href="/catalogo" className="inline-flex items-center text-brand font-bold hover:text-brand2 transition-colors">
              {t('chapas.featured.viewCatalog')} <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Technical Detail Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand to-brand2 rounded-2xl opacity-20 blur-lg" />
                <img
                  src="/images/chapas/qualidade.webp"
                  alt="Processo de Qualidade"
                  loading="lazy"
                  className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                  onError={(e) => {
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.parentElement!.style.backgroundColor = '#cbd5e1'; // slate-300 placeholder
                  }}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">{t('chapas.quality.title')}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t('chapas.quality.subtitle')}</p>
                
                <div className="space-y-6">
                  {[
                    { title: t('chapas.quality.points.1.title'), desc: t('chapas.quality.points.1.desc') },
                    { title: t('chapas.quality.points.2.title'), desc: t('chapas.quality.points.2.desc') },
                    { title: t('chapas.quality.points.3.title'), desc: t('chapas.quality.points.3.desc') }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t('chapas.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
              {t('chapas.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/catalogo"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand font-bold rounded-full hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl"
              >
                {t('chapas.cta.primary')}
              </a>
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand2 text-white font-bold rounded-full hover:bg-brand2/90 transition-all shadow-lg border border-white/20"
              >
                {t('chapas.cta.secondary')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Delivery Banner */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="p-5 bg-brand rounded-2xl shadow-2xl shadow-brand/20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <Truck className="w-10 h-10 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                {t('delivery.global')}
              </h3>
              <p className="text-slate-400 text-lg font-medium max-w-2xl">{t('delivery.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
