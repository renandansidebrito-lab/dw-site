import { ArrowRight, Package, Star } from "lucide-react";

export default function Chapas() {
  const materials = [
    {
      name: "Mármore Branco",
      description: "Clássico e elegante, ideal para ambientes sofisticados",
      colors: ["Branco", "Creme"],
      applications: ["Bancadas", "Pisos", "Revestimentos"],
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=White%20marble%20slab%20with%20subtle%20veining%2C%20high-gloss%20finish%2C%20professional%20stone%20photography%2C%20clean%20background&image_size=square_hd"
    },
    {
      name: "Granito Preto",
      description: "Resistente e moderno, perfeito para áreas de alto tráfego",
      colors: ["Preto", "Cinza Escuro"],
      applications: ["Bancadas", "Pisos comerciais", "Fachadas"],
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Black%20granite%20slab%20with%20subtle%20crystals%2C%20polished%20finish%2C%20professional%20stone%20photography%2C%20elegant%20appearance&image_size=square_hd"
    },
    {
      name: "Mármore Bege",
      description: "Aquecido e versátil, combina com diversos estilos",
      colors: ["Bege", "Creme", "Marrom Claro"],
      applications: ["Bancadas", "Paredes", "Lareiras"],
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Beige%20marble%20slab%20with%20natural%20veining%2C%20warm%20tones%2C%20polished%20finish%2C%20professional%20stone%20photography&image_size=square_hd"
    },
    {
      name: "Granito Cinza",
      description: "Prático e durável, ideal para uso externo e interno",
      colors: ["Cinza", "Prata", "Branco"],
      applications: ["Pisos externos", "Bancadas", "Escadas"],
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Gray%20granite%20slab%20with%20speckled%20pattern%2C%20matte%20and%20polished%20finish%2C%20versatile%20stone%20material%2C%20professional%20photography&image_size=square_hd"
    }
  ];

  const thicknesses = [
    { thickness: "2cm", use: "Bancadas, revestimentos, paredes" },
    { thickness: "3cm", use: "Bancadas de cozinha, balcões, mesas" },
    { thickness: "4cm", use: "Pisos externos, áreas de alto tráfego" },
    { thickness: "Personalizado", use: "Projetos especiais sob medida" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chapas de Mármore e Granito
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Amplia variedade de chapas de alta qualidade em diferentes cores, texturas e espessuras. 
              Perfeitas para transformar seu projeto em realidade.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Nossos Materiais
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Selecione entre nossa amplia variedade de pedras naturais, cada uma com características únicas e beleza singular
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-slate-200">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-800">
                      {material.name}
                    </h3>
                    <Package className="h-5 w-5 text-brand" />
                  </div>
                  <p className="text-slate-600 text-sm mb-4">
                    {material.description}
                  </p>
                  
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-slate-700 mb-1">Cores:</h4>
                    <div className="flex flex-wrap gap-1">
                      {material.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-1">Aplicações:</h4>
                    <div className="flex flex-wrap gap-1">
                      {material.applications.map((app, appIndex) => (
                        <span key={appIndex} className="px-2 py-1 bg-brandLight text-brand text-xs rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thickness Guide */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Guia de Espessuras
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Escolha a espessura ideal para sua aplicação específica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {thicknesses.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-brand">{item.thickness}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {item.thickness}
                </h3>
                <p className="text-slate-600 text-sm">
                  {item.use}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Qualidade Garantida
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Todas as nossas chapas passam por rigoroso controle de qualidade. Selecionamos apenas 
                os melhores blocos e garantimos acabamento perfeito em cada peça.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-slate-700">Seleção cuidadosa de matéria-prima</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-slate-700">Acabamento polido ou fosco sob demanda</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-slate-700">Medidas exatas e precisão milimétrica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-slate-700">Embalagem profissional para transporte</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 rounded-xl h-96">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Quality%20control%20inspection%20of%20marble%20slabs%20in%20warehouse%2C%20professional%20stone%20quality%20assessment%2C%20measuring%20tools%20and%20inspection%20equipment&image_size=square_hd"
                alt="Controle de qualidade"
                className="w-full h-full object-cover rounded-xl"
              />
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
