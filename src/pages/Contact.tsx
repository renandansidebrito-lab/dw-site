import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import ScrollReveal from "@/components/animations/ScrollReveal";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+55",
    phone: "",
    subject: "",
    message: "",
    state: "",
    files: [] as File[]
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalSuggestWhatsapp, setModalSuggestWhatsapp] = useState(false);
  const [modalWhatsappUrl, setModalWhatsappUrl] = useState("");

  const formatBR = (val: string) => {
    const d = val.replace(/\D/g, "");
    if (d.length <= 10) return d.replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, (m, a, b, c) => (a ? `(${a})` : "") + (b ? ` ${b}` : "") + (c ? `-${c}` : ""));
    return d.replace(/(\d{0,2})(\d{0,5})(\d{0,4})/, (m, a, b, c) => (a ? `(${a})` : "") + (b ? ` ${b}` : "") + (c ? `-${c}` : ""));
  };
  const formatUS = (val: string) => {
    const d = val.replace(/\D/g, "");
    return d.replace(/(\d{0,3})(\d{0,3})(\d{0,4})/, (m, a, b, c) => (a ? `(${a})` : "") + (b ? ` ${b}` : "") + (c ? `-${c}` : ""));
  };
  const formatGeneric = (val: string) => {
    const d = val.replace(/\D/g, "");
    return d.replace(/(\d{1,4})(\d{1,4})(\d{1,4})(\d{0,4})/, (m, a, b, c, d2) => [a, b, c, d2].filter(Boolean).join(" "));
  };
  const formatByCode = (code: string, value: string) => {
    if (code === "+55") return formatBR(value);
    if (code === "+1") return formatUS(value);
    return formatGeneric(value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const formatted = formatByCode(formData.phoneCode, value);
      setFormData({ ...formData, phone: formatted });
    } else if (name === "phoneCode") {
      const reformat = formatByCode(value, formData.phone);
      setFormData({ ...formData, phoneCode: value, phone: reformat });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setFormData({ ...formData, files });
  };

  const validateEmail = (email: string) => /.+@.+\..+/.test(email);
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t('contact.validation.nameRequired');
    if (!formData.email.trim() || !validateEmail(formData.email)) newErrors.email = t('contact.validation.emailInvalid');
    if (!formData.subject.trim()) newErrors.subject = t('contact.validation.subjectRequired');
    if (!formData.message.trim()) newErrors.message = t('contact.validation.messageRequired');
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setFeedback(t('contact.feedback.missingFields'));
      const firstKey = Object.keys(newErrors)[0];
      const el = document.getElementById(firstKey);
      if (el) el.focus();
      return;
    }
    setFeedback(t('contact.feedback.sending'));
    
    // Configuração do EmailJS
    // Você precisa criar uma conta em https://www.emailjs.com/
    // Criar um serviço (ex: Gmail) e um template de email
    // Substitua as variáveis abaixo pelas suas chaves do EmailJS
    const SERVICE_ID = "service_ID_AQUI"; // Coloque seu Service ID
    const TEMPLATE_ID = "template_ID_AQUI"; // Coloque seu Template ID
    const PUBLIC_KEY = "PUBLIC_KEY_AQUI"; // Coloque sua Public Key

    try {
      // Preparar parâmetros para o template do EmailJS
      const templateParams = {
        to_name: "DW Granitos", // Nome de quem recebe
        from_name: formData.name, // Nome de quem envia
        from_email: formData.email, // Email de quem envia
        phone: `${formData.phoneCode} ${formData.phone}`,
        subject: formData.subject,
        message: formData.message,
        state: formData.state,
        // Nota: Anexos requerem configuração avançada no EmailJS ou plano pago para envio direto
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setFeedback(t('contact.feedback.sent'));
      setModalTitle(t('contact.modal.sent.title'));
      setModalMessage(t('contact.modal.sent.message'));
      setIsModalOpen(true);
      setModalSuggestWhatsapp(false);
      setFormData({
        name: "",
        email: "",
        phoneCode: "+55",
        phone: "",
        subject: "",
        message: "",
        state: "",
        files: []
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      const msg = t('contact.modal.fail.message');
      setFeedback(msg);
      setModalTitle(t('contact.modal.fail.title'));
      setModalMessage(msg);
      setIsModalOpen(true);
      const phone = '5528999851446';
      const text = `Olá! Tive uma falha ao enviar pelo site e gostaria de falar com a equipe.\n\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phoneCode}${formData.phone}\nEstado: ${formData.state}\n\nMensagem:\n${formData.message}`;
      setModalWhatsappUrl(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
      setModalSuggestWhatsapp(true);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      type: "address",
      title: t('contact.info.address.title'),
      content: t('footer.address')
    },
    {
      icon: Phone,
      type: "phones",
      title: t('contact.info.phones.title'),
      content: "+55 28 3524-2288\n+55 28 3524-1688"
    },
    {
      icon: Mail,
      type: "emails",
      title: t('contact.info.emails.title'),
      content: "financeiro@dwgranitos.com.br\ncomercial@dwgranitos.com.br\nvendas@dwgranitos.com.br"
    },
    {
      icon: Clock,
      type: "hours",
      title: t('contact.info.hours.title'),
      content: t('contact.info.hours.content')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/contact-hero.webp"
            alt={t('contact.hero.title')}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.backgroundColor = '#1e293b'; // slate-800
            }}
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('contact.hero.title')}</h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">{t('contact.hero.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 -mt-20 relative z-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-xl p-8 h-full transform hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                  <div className="w-14 h-14 bg-brandLight/50 rounded-2xl flex items-center justify-center mb-6 text-brand">
                    <info.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{info.title}</h3>
                  {info.type === 'emails' ? (
                    <div className="space-y-2">
                      {info.content.split('\n').map((email) => (
                        <a 
                          key={email} 
                          href={`mailto:${email}`} 
                          className="block text-slate-600 hover:text-brand transition-colors text-sm"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-600 whitespace-pre-line text-sm leading-relaxed">
                      {info.content}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{t('contact.whatsapp.title')}</h2>
              <p className="text-slate-600">{t('contact.whatsapp.subtitle')}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "99951-1643", full: "5528999511643" },
              { number: "99905-7492", full: "5528999057492" },
              { number: "99985-1446", full: "5528999851446" }
            ].map((wa, idx) => (
              <ScrollReveal key={wa.number} delay={idx * 0.1}>
                <a
                  href={`https://wa.me/${wa.full}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-green-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">{t('contact.whatsapp.label')}</div>
                    <div className="text-lg font-bold text-slate-800 group-hover:text-green-600 transition-colors">
                      +55 28 {wa.number}
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
              <div className="bg-brand p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-2">{t('contact.form.title')}</h2>
                <p className="text-brandLight/90">{t('contact.form.subtitle')}</p>
              </div>
              
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">{t('contact.form.fullName.label')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-brand/20 transition-all outline-none ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand'
                        }`}
                        placeholder={t('contact.form.fullName.placeholder')}
                      />
                      {errors.name && <p id="name-error" className="text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">{t('contact.form.email.label')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none"
                        placeholder={t('contact.form.email.placeholder')}
                      />
                      {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">{t('contact.form.phone.label')}</label>
                      <div className="flex gap-2">
                        <select
                          name="phoneCode"
                          value={formData.phoneCode}
                          onChange={handleChange}
                          className="px-3 py-3 rounded-lg bg-slate-50 border border-slate-200 outline-none focus:border-brand"
                        >
                          <option value="+55">+55</option>
                          <option value="+1">+1</option>
                          <option value="+351">+351</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="flex-1 px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none"
                          placeholder={t('contact.form.phone.placeholder')}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="state" className="text-sm font-semibold text-slate-700">{t('contact.form.state.label')}</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none"
                      >
                        <option value="">{t('contact.form.state.placeholder')}</option>
                        {['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'].map(uf => (
                          <option key={uf} value={uf}>{uf}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="files" className="text-sm font-semibold text-slate-700">{t('contact.form.files.label')}</label>
                    <div className="relative border-2 border-dashed border-slate-200 rounded-lg p-6 hover:bg-slate-50 transition-colors text-center cursor-pointer">
                      <input
                        type="file"
                        id="files"
                        multiple
                        onChange={handleFiles}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="text-slate-500">
                        <p className="text-sm">{t('contact.form.files.dropzone')}</p>
                        <p className="text-xs mt-1">{t('contact.form.files.hint')}</p>
                      </div>
                    </div>
                    {formData.files.length > 0 && (
                      <div className="text-xs text-brand font-medium">
                        {formData.files.length} {t('contact.form.files.selected')}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">{t('contact.form.message.label')}</label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-4 py-3 rounded-lg bg-slate-50 border focus:ring-2 focus:ring-brand/20 transition-all outline-none resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand'
                      }`}
                      placeholder={t('contact.form.message.placeholder')}
                    />
                    {errors.message && <p id="message-error" className="text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center px-10 py-4 bg-brand text-white font-bold rounded-full hover:bg-brand2 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    >
                      <span>{t('contact.form.send')}</span>
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                    {feedback && (
                      <p className="mt-4 text-sm text-slate-600 animate-pulse">{feedback}</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative bg-slate-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9!2d-41.0555197!3d-20.7651504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb96ff915e9163b%3A0x1a7a93d530a6f709!2sDW%20Granitos%20%26%20Marmores%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1700000000000&maptype=satellite"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DW Granitos - Localização"
          className="transition-all duration-500"
        />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-4 max-w-sm w-full mx-4">
          <div className="bg-brand/10 p-3 rounded-full text-brand">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800">{t('contact.map.title')}</h4>
            <p className="text-xs text-slate-500">{t('contact.map.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">{modalTitle}</h3>
            <p className="text-slate-600 mb-6">{modalMessage}</p>
            <div className="flex flex-col gap-3">
              {modalSuggestWhatsapp && (
                <a 
                  href={modalWhatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t('contact.modal.whatsapp')}
                </a>
              )}
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="w-full py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 font-semibold transition-colors"
              >
                {t('contact.modal.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
