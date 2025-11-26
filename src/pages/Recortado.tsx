import { ArrowRight, Scissors, Ruler, Clock, Award } from "lucide-react";

export default function Recortado() {
  const services = [
    {
      title: "Corte com Waterjet",
      description: "Precisão extrema para formatos complexos e detalhados",
      features: ["Precisão de ±0.1mm", "Corte de formas complexas", "Sem estresse térmico"]
    },
    {
      title: "Corte com Bridge Saw",
      description: "Corte reto e preciso para peças maiores",
      features: ["Corte reto perfeito", "Peças grandes", "Alta produtividade"]
    },
    {
      title: "Corte com CNC",
      description: "Automação para repetição e precisão em série",
      features: ["Repetição exata", "Formatos complexos", "Produção em série"]
    }
  ];

  const examples = [
    {
      title: "Pia de Cozinha",
      description: "Corte sob medida com furação para torneira e vaso",
      precision: "±2mm",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Kitchen%20sink%20cut%20from%20marble%20slab%2C%20precise%20cutting%20with%20faucet%20holes%2C%20professional%20stone%20fabrication%2C%20clean%20edges&image_size=square_hd"
    },
    {
      title: "Lareira",
      description: "Peças personalizadas para envolvimento de lareira",
      precision: "±3mm",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Marble%20fireplace%20surround%20with%20custom%20cut%20pieces%2C%20precise%20stone%20cutting%2C%20elegant%20design%2C%20professional%20installation&image_size=square_hd"
    },
    {
      title: "Escada",
      description: "Degraus com corte angular e anti-derrapante",
      precision: "±1mm",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Marble%20staircase%20with%20custom%20cut%20steps%2C%20precise%20angle%20cutting%2C%20anti-slip%20surface%2C%20professional%20stone%20work&image_size=square_hd"
    },
    {
      title: "Painel Decorativo",
      description: "Peças geométricas para painéis modernos",
      precision: "±0.5mm",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Geometric%20marble%20wall%20panel%20with%20custom%20cut%20shapes%2C%20modern%20design%2C%20precise%20stone%20cutting%2C%20decorative%20pattern&image_size=square_hd"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Recortado
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Corte sob medida com precisão milimétrica. Transformamos suas ideias em peças perfeitas 
              com tecnologia de corte de última geração.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Serviços de Corte
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Utilizamos diferentes tecnologias de corte para atender às necessidades específicas de cada projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <Scissors className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-slate-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Exemplos de Recortes
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Conheça alguns dos trabalhos personalizados que realizamos com máxima precisão
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {examples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-slate-200">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {example.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">
                    {example.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Precisão:</span>
                    <span className="text-sm font-semibold text-blue-600">{example.precision}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Precisão Milimétrica
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Utilizamos equipamentos de última geração que garantem precisão extrema em cada corte. 
                Nossa tecnologia permite criar peças complexas com tolerância mínima.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Ruler className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">±0.1mm</div>
                  <div className="text-sm text-slate-600">Tolerância</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">48h</div>
                  <div className="text-sm text-slate-600">Prazo Médio</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Tecnologia de corte de ponta</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Programação CAD/CAM avançada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-slate-700">Equipe especializada e treinada</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 rounded-xl h-96">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Precision%20CNC%20stone%20cutting%20machine%20in%20operation%2C%20water%20jet%20cutting%20head%2C%20detailed%20stone%20fabrication%2C%20professional%20workshop%20setting&image_size=square_hd"
                alt="Equipamento de corte de precisão"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Nosso Processo
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Cada projeto personalizado segue um processo rigoroso para garantir perfeição
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Análise do Projeto</h3>
              <p className="text-slate-600 text-sm">Avaliamos suas medidas e requisitos técnicos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Programação</h3>
              <p className="text-slate-600 text-sm">Criamos o programa de corte no sistema CAD/CAM</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Corte de Precisão</h3>
              <p className="text-slate-600 text-sm">Executamos o corte com nossos equipamentos de ponta</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Acabamento</h3>
              <p className="text-slate-600 text-sm">Polimento e acabamento final das bordas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Precisa de Peças Personalizadas?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato e solicite um orçamento para seu projeto de corte sob medida. Transformamos suas ideias em realidade.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}