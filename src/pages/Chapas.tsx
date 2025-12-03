import { ArrowRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { materiaisExemplo } from "@/pages/Catalogo";

export default function Chapas() {
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
      const pos = Math.floor(Math.random() * Math.min(4, previewIndices.length));
      const currentSet = new Set(previewIndices);
      let candidate = Math.floor(Math.random() * materiaisExemplo.length);
      let guard = 0;
      while (currentSet.has(candidate) && guard < 100) {
        candidate = Math.floor(Math.random() * materiaisExemplo.length);
        guard++;
      }
      setPreviewIndices(prev => {
        const next = [...prev];
        next[pos] = candidate;
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [previewIndices]);


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chapas
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Variedade de chapas com curadoria de qualidade e opções de acabamento sob demanda.
            </p>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Resumo de Serviços</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Entregamos chapas com excelente curadoria, tratamento e acabamento, prontas para seu projeto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Curadoria</h3>
              <p className="text-slate-600">Curadoria cuidadosa das chapas, selecionando as melhores peças para cada finalidade.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Tratamento</h3>
              <p className="text-slate-600">Tratamento com resinagem para estabilidade, proteção e melhor acabamento superficial.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Acabamentos</h3>
              <p className="text-slate-600">Polida, bi‑polida, levigada, flameada e escovada, conforme especificação do cliente.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Espessuras</h3>
              <p className="text-slate-600">Trabalhamos principalmente com espessuras de 2 cm e 3 cm.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Dimensões</h3>
              <p className="text-slate-600">Tamanhos variáveis de chapas, dependentes do bloco de origem.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Atendimento</h3>
              <p className="text-slate-600">Atendimento consultivo para apoiar na escolha de materiais e acabamentos.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Catálogo Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Materiais em Destaque</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Uma seleção dinâmica do nosso catálogo. Clique para conhecer mais.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {previewIndices.map((idx, i) => {
              const m = materiaisExemplo[idx];
              if (!m) return null;
              return (
                <div key={`${idx}-${i}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-slate-200">
                    <img
                      src={m.imagem}
                      alt={m.nome}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-800">{m.nome}</h3>
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">{m.tipo}</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">{m.descricao}</p>
                    <a href="/catalogo" className="inline-flex items-center text-brand font-semibold hover:underline">
                      Ver no catálogo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Quality Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Qualidade e Acabamentos
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Curadoria rigorosa dos blocos e tratamento com resinagem. Após isso, realizamos polimento
                conforme a necessidade do cliente, com diferentes tipos de acabamento.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-slate-700">Curadoria cuidadosa das chapas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-slate-700">Tratamento com resinagem</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-slate-700">Polimento e acabamentos: polida, bi‑polida, levigada, flameada, escovada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-slate-700">Precisão e acabamento conforme a demanda</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 rounded-xl h-96 overflow-hidden">
              <img
                src="/images/chapas/qualidade.jpg"
                alt="Qualidade e Acabamentos"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = 'none';
                  const next = img.nextElementSibling as HTMLElement | null;
                  if (next) next.style.display = 'flex';
                }}
              />
              <div className="hidden items-center justify-center w-full h-full text-center p-6">
                <div className="bg-white/70 rounded-lg p-4 border border-slate-300">
                  <p className="text-slate-800 font-semibold">Adicione sua imagem</p>
                  <p className="text-slate-600 text-sm">Coloque o arquivo em <code>/public/images/chapas/qualidade.jpg</code></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Encontre a Chapa Perfeita
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Visite nosso showroom ou entre em contato para ver nossa completa variedade de chapas e receber orientação especializada.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center px-8 py-3 bg-white text-brand font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Solicitar Catálogo
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
