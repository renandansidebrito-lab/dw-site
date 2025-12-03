import { ArrowRight, CheckCircle } from "lucide-react";

export default function Serraria() {
  const services = [
    "Corte de blocos em chapas com Multi-Fio",
    "Chapas de diversas espessuras (2cm, 3cm, 4cm)",
    "Precisão e rendimento com tecnologia Multi-Fio",
    "Serviços internos e para terceiros",
    "Respeito ao prazo de entrega",
    "Qualidade garantida em cada corte"
  ];

  const equipment = [
    {
      name: "Multi-Fio",
      description: "Corte de blocos com multi-fios para alta precisão e ótimo rendimento",
      capacity: "Serviços internos e para terceiros"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Serraria
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Filial Mineração Jeronymo. Operamos um equipamento Multi-Fio para transformar blocos em chapas
              com precisão e rendimento, atendendo serviços internos e para terceiros.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Nossos Serviços
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Na filial Mineração Jeronymo, transformamos blocos brutos em chapas com tecnologia Multi-Fio,
                garantindo precisão, excelente rendimento e atendimento a serviços internos e para terceiros.
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-4">
                  <img
                    src="/images/mineracao-jeronymo-logo.png"
                    alt="Mineração Jeronymo"
                    className="h-12 w-auto object-contain"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div>
                    <div className="text-lg font-semibold text-slate-800">Mineração Jeronymo</div>
                    <div className="text-slate-600 text-sm">CNPJ: 00.000.000/0000-00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 rounded-xl h-96">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Industrial%20stone%20cutting%20machine%20with%20diamond%20blades%20cutting%20marble%20block%2C%20professional%20stone%20processing%20facility%2C%20precision%20cutting%20equipment&image_size=square_hd"
                alt="Equipamento de serraria"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Equipamentos de Ponta
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Investimos em tecnologia de última geração para garantir precisão e eficiência em cada corte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.name}
                </h3>
                <p className="text-slate-600 mb-4">
                  {item.description}
                </p>
                <div className="text-brand font-semibold">
                  {item.capacity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Nosso Processo
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Seleção de blocos com variação de qualidade conforme a finalidade e corte em chapas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand">1</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Seleção</h3>
              <p className="text-slate-600">Seleção de blocos com variação de qualidade conforme a finalidade</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand">2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Corte</h3>
              <p className="text-slate-600">Corte do bloco em chapas com Multi-Fio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Precisa de Serraria de Qualidade?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Solicite um orçamento para nossos serviços de serraria e garanta as melhores chapas para seu projeto.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center px-8 py-3 bg-white text-brand font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
