import { ArrowRight, Star, Layers, Ruler, ShieldCheck, CheckCircle, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMateriais } from "@/data/materiais";
import { useTranslation } from "@/contexts/i18nContext";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Seo from "@/components/seo/Seo";
import { institutionalContent } from "@/data/institutionalContent";

export default function Chapas() {
  const { t, language } = useTranslation();
  const seo = institutionalContent[language].seo.chapas;
  const materiaisExemplo = getMateriais(t);
  const [previewIndices, setPreviewIndices] = useState<number[]>(() => {
    const count = 5;
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
        const pos = Math.floor(Math.random() * Math.min(5, prev.length));
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
      <Seo title={seo.title} description={seo.description} path="/chapas" />
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

      {/* Types of Materials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Tipos de Materiais</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Trabalhamos com uma seleção criteriosa de rochas para atender diferentes necessidades do seu projeto.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Granitos", desc: "Alta resistência e durabilidade, ideais para áreas de intenso tráfego e bancadas." },
              { title: "Mármores", desc: "Elegância clássica e veios únicos, perfeitos para ambientes internos e nobres." },
              { title: "Quartzitos", desc: "Beleza de mármore com resistência de granito. Uma escolha premium e versátil." },
              { title: "Exóticos", desc: "Padrões exclusivos e cores raras para projetos que buscam exclusividade absoluta." }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow h-full">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Finishes */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Acabamentos Disponíveis</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Oferecemos diferentes tratamentos de superfície para valorizar a rocha e adequá-la perfeitamente ao uso pretendido.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Polido", desc: "Superfície lisa e brilhante que destaca a cor e os veios da pedra.", use: "Áreas internas, bancadas e pisos secos." },
              { title: "Levigado", desc: "Superfície lisa, mas sem brilho (fosca). Mantém a cor natural.", use: "Áreas internas e externas cobertas." },
              { title: "Escovado", desc: "Textura levemente rugosa e acetinada, muito agradável ao toque.", use: "Áreas externas, bordas de piscina e pisos." },
              { title: "Flameado", desc: "Aspecto rústico e antiderrapante, obtido por tratamento térmico.", use: "Áreas externas descobertas e rampas." },
              { title: "Resinagem", desc: "Tratamento para fechamento de microporos e reforço estrutural.", use: "Aplicado na fábrica em materiais para maior resistência." }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-lg font-bold text-brand mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">{item.desc}</p>
                  <div className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-2 rounded-lg mt-auto">
                    <span className="font-bold text-slate-700">Indicação:</span> {item.use}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center md:text-left">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Como escolher a chapa ideal?</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  A escolha da pedra natural ideal depende muito de onde ela será aplicada. Diferentes ambientes exigem características específicas de resistência, porosidade e acabamento.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Bancadas</span>
                  <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Pisos</span>
                  <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Fachadas</span>
                  <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Escadas</span>
                  <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Áreas Internas e Externas</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3">Dúvidas na escolha?</h3>
                <p className="text-sm text-slate-300 mb-6">Nossa equipe comercial é especializada em orientar a melhor escolha de material e acabamento para a sua obra.</p>
                <Link to="/contato" className="inline-flex items-center justify-center w-full px-6 py-3 bg-brand text-white font-bold rounded-xl hover:bg-brand2 transition-colors">
                  Falar com o Comercial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <ScrollReveal>
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Materiais em Destaque</h2>
                <p className="text-lg text-slate-600">
                  Confira algumas opções selecionadas do nosso catálogo de granitos, mármores e quartzitos para chapas e projetos sob medida.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <Link to="/catalogo" className="inline-flex items-center px-6 py-3 bg-white border border-slate-200 text-slate-800 font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-sm">
                Ver catálogo completo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
            {previewIndices.map((idx, i) => {
              const m = materiaisExemplo[idx];
              if (!m) return null;
              
              const isLarge = i === 0;
              
              return (
                <ScrollReveal 
                  key={`${idx}-${i}`} 
                  delay={i * 0.1}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-500 cursor-pointer ${
                    isLarge ? 'lg:col-span-2 lg:row-span-2 h-[350px] lg:h-[520px]' : 
                    'lg:col-span-1 h-[240px] lg:h-[248px]'
                  }`}
                >
                  <Link to={`/contato?material=${encodeURIComponent(m.nome)}`} className="block w-full h-full">
                    <div className="absolute inset-0">
                      <img
                        src={m.imagem}
                        alt={m.nome}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent opacity-90 transition-opacity duration-300" />
                    </div>
                    
                    <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                      <div className="mb-auto flex">
                        <span className="inline-block px-3 py-1 text-xs font-bold text-slate-900 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                          {m.tipo}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className={`font-bold text-white mb-1 group-hover:text-brandLight transition-colors ${isLarge ? 'text-2xl md:text-4xl mb-2' : 'text-lg md:text-xl'}`}>
                          {m.nome}
                        </h3>
                        <div className="flex items-center text-white/90 text-sm font-medium transition-all duration-300 mt-1">
                          Solicitar orçamento <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
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
              <Link
                to="/catalogo"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand font-bold rounded-full hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl"
              >
                Consultar chapas disponíveis
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand2 text-white font-bold rounded-full hover:bg-brand2/90 transition-all shadow-lg border border-white/20"
              >
                Solicitar fotos de materiais
              </Link>
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
