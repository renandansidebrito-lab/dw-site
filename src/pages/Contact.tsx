import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    sector: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Obrigado pelo contato! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      sector: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Angelo Bazoni, 555\nVargem Grande do Soturno\nCachoeiro de Itapemirim - ES"
    },
    {
      icon: Phone,
      title: "Telefones Fixos",
      content: "+55 28 3524-2288\n+55 28 3524-1688"
    },
    {
      icon: Mail,
      title: "Emails",
      content: "financeiro@dwgranitos.com.br\ncomercial@dwgranitos.com.br\nvendas@dwgranitos.com.br\nfaturamento@dwgranitos.com.br"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Quinta: 7h - 17h\nSexta: 7h - 16h\nSábado e Domingo: Fechado"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A DW Granitos está aqui para ajudar com seu projeto. Entre em contato conosco para orçamentos, 
              consultas técnicas ou visitas ao nosso showroom em Vargem Grande do Soturno.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-slate-600 whitespace-pre-line">
                  {info.content}
                </p>
              </div>
            ))}
          </div>

          {/* Setor-specific Contact Info */}
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
              Contato por Setor
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Recortado</h4>
                <p className="text-slate-600">
                  <a href="tel:+5528999511643" className="text-green-600 hover:text-green-700 font-medium">
                    +55 28 99951-1643
                  </a>
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Serraria</h4>
                <p className="text-slate-600">
                  <a href="tel:+5528999057492" className="text-blue-600 hover:text-blue-700 font-medium">
                    +55 28 99905-7492
                  </a>
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Chapas</h4>
                <p className="text-slate-600">
                  <a href="tel:+5528999851446" className="text-purple-600 hover:text-purple-700 font-medium">
                    +55 28 99985-1446
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Envie sua Mensagem
            </h2>
            <p className="text-lg text-slate-600">
              Preencha o formulário abaixo e entraremos em contato o mais breve possível
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="sector" className="block text-sm font-medium text-slate-700 mb-2">
                    Setor de Interesse
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione um setor</option>
                    <option value="serraria">Serraria</option>
                    <option value="chapas">Chapas</option>
                    <option value="recortado">Recortado</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descreva seu projeto ou dúvida..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Nossa Localização
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Venha nos visitar em Vargem Grande do Soturno e conhecer nosso showroom com amostras de todos os nossos materiais
            </p>
          </div>

          <div className="relative h-96 lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9!2d-41.0555197!3d-20.7651504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb96ff915e9163b%3A0x1a7a93d530a6f709!2sDW%20Granitos%20%26%20Marmores%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DW Granitos - Localização"
              className="w-full h-full"
            />
            <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm">DW Granitos & Marmores</h3>
                  <p className="text-slate-600 text-xs">
                    Rua Ângelo Bazoni, 555<br />
                    Vargem Grande do Soturno<br />
                    Cachoeiro de Itapemirim - ES
                  </p>
                  <a
                    href="https://www.google.com/maps/place/DW+Granitos+%26+Marmores+LTDA/@-20.7651504,-41.0555197,20z/data=!4m15!1m8!3m7!1s0xb96eb6c4bc4ecf:0x11d219c565d3e050!2sR.+%C3%82ngelo+Bazoni,+555+-+Vargem+Grande+Do+Soturno,+Cachoeiro+de+Itapemirim+-+ES,+29321-000!3b1!8m2!3d-20.7651672!4d-41.0554162!16s%2Fg%2F11jyxzckwr!3m5!1s0xb96ff915e9163b:0x1a7a93d530a6f709!8m2!3d-20.7650174!4d-41.0553444!16s%2Fg%2F11rg774jhk?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 text-xs hover:text-blue-700 mt-2"
                  >
                    Abrir no Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para Começar seu Projeto?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a escolher os melhores materiais e criar o projeto dos seus sonhos.
          </p>
          <a
            href="tel:552835242288"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors mr-4"
          >
            Ligar Agora
          </a>
          <a
            href="https://wa.me/5528999851446"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}