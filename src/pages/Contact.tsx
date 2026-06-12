import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, XCircle, X } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Seo from "@/components/seo/Seo";
import FAQSection from "@/components/sections/FAQSection";
import { institutionalContent } from "@/data/institutionalContent";
import { buildWhatsAppUrl } from "@/data/company";

export default function Contact() {
  const { t, language } = useTranslation();
  const content = institutionalContent[language];
  const ui = {
    faqTitle:
      language === "en"
        ? "Frequently asked questions about contact and quotations"
        : language === "es"
          ? "Preguntas frecuentes sobre contacto y presupuestos"
          : "Perguntas frequentes sobre contato e orçamento",
    faqSubtitle:
      language === "en"
        ? "Everything the client needs to start the commercial service more quickly."
        : language === "es"
          ? "Todo lo que el cliente necesita para iniciar la atención comercial con más agilidad."
          : "Tudo o que o cliente precisa para iniciar o atendimento comercial com mais agilidade.",
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+55",
    phone: "",
    country: "Brasil",
    subject: "",
    message: "",
    state: "",
    files: [] as File[],
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<string>("");
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({ show: false, type: 'success', message: '' });

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const material = params.get("material");
    const application = params.get("aplicacao");

    if (material) {
      setFormData((prev) => ({
        ...prev,
        subject: `Orçamento de material: ${material}`,
        message: `${content.contact.prefillMaterial} ${material}`,
      }));
    }

    if (application) {
      setFormData((prev) => ({
        ...prev,
        subject: `Orçamento para aplicação: ${application}`,
        message: `${content.contact.prefillApplication} ${application}`,
      }));
    }
  }, [content.contact.prefillApplication, content.contact.prefillMaterial]);

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
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    if (name === "phone") {
      const formatted = formatByCode(formData.phoneCode, value);
      setFormData({ ...formData, phone: formatted });
    } else if (name === "phoneCode") {
      const reformat = formatByCode(value, formData.phone);
      setFormData({ ...formData, phoneCode: value, phone: reformat });
    } else {
      setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
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
    if (!formData.phone.trim()) newErrors.phone = content.contact.phoneRequired;
    if (!formData.country) newErrors.country = t('contact.validation.countryRequired');
    if (formData.country.toLowerCase() === 'brasil' && !formData.state) newErrors.state = t('contact.validation.stateRequired');
    if (!formData.subject.trim()) newErrors.subject = t('contact.validation.subjectRequired');
    if (!formData.message.trim()) newErrors.message = t('contact.validation.messageRequired');
    if (!formData.consent) newErrors.consent = content.contact.consentRequired;
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

    // Pegar o número do primeiro intent comercial disponível ou fallback (apenas dígitos)
    const defaultPhone = content.whatsappIntents[0]?.number.replace(/\D/g, "") || "5528999999999"; 
    
    // Montagem da mensagem amigável para o WhatsApp
    let waMessage = `Olá, vim pelo site da DW Granitos.\n\n`;
    waMessage += `*Nome:* ${formData.name}\n`;
    waMessage += `*Telefone:* ${formData.phoneCode} ${formData.phone}\n`;
    waMessage += `*E-mail:* ${formData.email}\n`;
    waMessage += `*Local:* ${formData.country} ${formData.state ? `- ${formData.state}` : ''}\n`;
    waMessage += `*Assunto:* ${formData.subject}\n\n`;
    waMessage += `*Mensagem:*\n${formData.message}`;

    const encodedMessage = encodeURIComponent(waMessage);
    const whatsappUrl = `https://wa.me/${defaultPhone}?text=${encodedMessage}`;

    // Abrir o WhatsApp Imediatamente para evitar bloqueio de pop-up pelo navegador
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Fornecer feedback de sucesso mantendo os dados no form caso o usuário queira consultar
    setNotification({ show: true, type: 'success', message: "Redirecionando para o WhatsApp..." });
    setFeedback("Abrimos o WhatsApp com sua mensagem pronta. Confira e envie por lá.");
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

  const whatsappIntents = content.whatsappIntents;

  return (
    <div className="min-h-screen bg-white">
      <Seo title={content.contact.seoTitle} description={content.contact.seoDescription} path="/contato" />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-900">
        {/* Fundo puramente em CSS para carregamento instantâneo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Fale com a DW Granitos & Mármores</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Envie suas medidas, projeto, fotos ou dúvidas. Nossa equipe irá orientar você na escolha do material, acabamento e melhor solução para o seu projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="bg-slate-50 px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="h-full rounded-sm border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md md:p-8 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center mb-6 text-brand">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 tracking-tight">{info.title}</h3>
                  {info.type === 'emails' ? (
                    <div className="space-y-2">
                      {info.content.split('\n').map((email) => (
                        <a 
                          key={email} 
                          href={`mailto:${email}`} 
                          className="block text-slate-600 hover:text-brand transition-colors text-sm font-medium"
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
      <section className="bg-slate-50 py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center md:mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{content.contact.whatsappTitle}</h2>
              <p className="text-slate-600">{content.contact.whatsappSubtitle}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whatsappIntents.map((wa, idx) => (
              <ScrollReveal key={wa.id} delay={idx * 0.1}>
                <a
                  href={buildWhatsAppUrl(wa.number, wa.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-green-400 hover:shadow-md md:p-6"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium">{wa.label}</div>
                    <div className="text-lg font-bold text-slate-800 group-hover:text-green-600 transition-colors">{wa.description}</div>
                    <p className="mt-2 text-sm text-slate-500">{wa.number}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
            {/* Left Column: Form */}
            <div className="w-full lg:w-3/5">
              <div className="bg-white p-0">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Envie sua mensagem</h2>
                <p className="text-slate-500 mb-10">Preencha os campos abaixo e retornaremos o mais breve possível.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700">{t('contact.form.fullName.label')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full px-4 py-3 rounded-sm bg-slate-50 border focus:ring-1 focus:ring-brand/50 transition-all outline-none ${
                          errors.name ? 'border-red-500' : 'border-slate-200 focus:border-brand'
                        }`}
                        placeholder={t('contact.form.fullName.placeholder')}
                      />
                      {errors.name && <p id="name-error" className="text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700">{t('contact.form.email.label')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-200 focus:border-brand focus:ring-1 focus:ring-brand/50 transition-all outline-none"
                        placeholder={t('contact.form.email.placeholder')}
                      />
                      {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-700">{t('contact.form.phone.label')}</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          name="phoneCode"
                          value={formData.phoneCode}
                          onChange={handleChange}
                          className="w-20 px-3 py-3 rounded-sm bg-slate-50 border border-slate-200 outline-none focus:border-brand text-center"
                          placeholder="+55"
                        />
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`flex-1 px-4 py-3 rounded-sm bg-slate-50 border focus:ring-1 focus:ring-brand/50 transition-all outline-none ${
                            errors.phone ? 'border-red-500' : 'border-slate-200 focus:border-brand'
                          }`}
                          placeholder={t('contact.form.phone.placeholder')}
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="country" className="text-sm font-bold text-slate-700">{t('contact.form.country.label')}</label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-sm bg-slate-50 border focus:ring-1 focus:ring-brand/50 transition-all outline-none ${
                          errors.country ? 'border-red-500' : 'border-slate-200 focus:border-brand'
                        }`}
                        placeholder={t('contact.form.country.placeholder')}
                      />
                      {errors.country && <p className="text-xs text-red-500">{errors.country}</p>}
                    </div>

                    {formData.country.toLowerCase() === 'brasil' && (
                      <div className="space-y-2">
                        <label htmlFor="state" className="text-sm font-bold text-slate-700">{t('contact.form.state.label')}</label>
                        <select
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-sm bg-slate-50 border focus:ring-1 focus:ring-brand/50 transition-all outline-none ${
                            errors.state ? 'border-red-500' : 'border-slate-200 focus:border-brand'
                          }`}
                        >
                          <option value="">{t('contact.form.state.placeholder')}</option>
                          {['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'].map(uf => (
                            <option key={uf} value={uf}>{uf}</option>
                          ))}
                        </select>
                        {errors.state && <p className="text-xs text-red-500">{errors.state}</p>}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-slate-700">{content.contact.subjectLabel}</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-sm bg-slate-50 border focus:ring-1 focus:ring-brand/50 transition-all outline-none ${
                        errors.subject ? 'border-red-500' : 'border-slate-200 focus:border-brand'
                      }`}
                      placeholder={content.contact.subjectPlaceholder}
                    />
                    {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
                  </div>

                  {/* Campo de Anexo mantido mas não vai pro WA, apenas caso haja API futura */}
                  <div className="space-y-2">
                    <label htmlFor="files" className="text-sm font-bold text-slate-700">{t('contact.form.files.label')} <span className="font-normal text-slate-400 ml-1">(Opcional)</span></label>
                    <div className="relative border-2 border-dashed border-slate-200 rounded-sm p-6 hover:bg-slate-50 transition-colors text-center cursor-pointer">
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
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700">{t('contact.form.message.label')}</label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-4 py-3 rounded-sm bg-slate-50 border focus:ring-1 focus:ring-brand/50 transition-all outline-none resize-none ${
                        errors.message ? 'border-red-500' : 'border-slate-200 focus:border-brand'
                      }`}
                      placeholder={t('contact.form.message.placeholder')}
                    />
                    {errors.message && <p id="message-error" className="text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-start gap-3 rounded-sm border border-slate-200 bg-slate-50 p-4 cursor-pointer hover:border-slate-300">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-0.5 h-4 w-4 rounded-sm border-slate-300 text-brand focus:ring-brand cursor-pointer"
                      />
                      <span className="text-sm leading-relaxed text-slate-600">{content.contact.consentLabel}</span>
                    </label>
                    {errors.consent && <p className="text-xs text-red-500">{errors.consent}</p>}
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full md:w-auto px-10 py-4 bg-brand text-white font-bold rounded-sm hover:bg-brandDark transition-colors uppercase tracking-widest text-sm"
                    >
                      <span>Enviar pelo WhatsApp</span>
                      <MessageCircle className="ml-3 h-5 w-5" />
                    </button>
                    {feedback && (
                      <p className="mt-4 text-sm font-medium text-brand animate-pulse">{feedback}</p>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Checklist & Info */}
            <div className="w-full lg:w-2/5">
              <div className="sticky top-28">
                <div className="bg-slate-900 rounded-sm p-8 md:p-10 shadow-lg text-white">
                  <h3 className="text-2xl font-bold mb-6">Checklist para Orçamento</h3>
                  <p className="text-slate-300 mb-8 font-light text-sm leading-relaxed">
                    Para agilizarmos seu atendimento, se possível, tenha em mãos as seguintes informações antes de falar com nosso comercial:
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      </div>
                      <span className="text-slate-200 text-sm">Medidas aproximadas do ambiente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      </div>
                      <span className="text-slate-200 text-sm">Nome do material desejado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      </div>
                      <span className="text-slate-200 text-sm">Fotos do local ou planta do projeto</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      </div>
                      <span className="text-slate-200 text-sm">Detalhes como quantidade de cubas, furos e acabamento das bordas</span>
                    </li>
                  </ul>

                  <div className="pt-8 border-t border-white/10">
                    <h4 className="font-bold text-white mb-2">Atendimento Imediato</h4>
                    <p className="text-slate-400 text-sm mb-4">Se preferir, clique no botão abaixo para falar agora mesmo com um consultor.</p>
                    <a
                      href={buildWhatsAppUrl(content.whatsappIntents[0]?.number, "Olá! Gostaria de falar com um consultor da DW Granitos.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-400 hover:text-green-300 font-bold transition-colors"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chamar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title={ui.faqTitle}
        subtitle={ui.faqSubtitle}
        items={content.faq.contact}
      />

      {/* Map Section */}
      <section className="relative h-[380px] bg-slate-200 md:h-[440px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9!2d-41.0555197!3d-20.7651504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb96ff915e9163b%3A0x1a7a93d530a6f709!2sDW%20Granitos%20%26%20Marmores%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1700000000000&maptype=satellite"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DW Granitos & Mármores LTDA - Localização"
          className="transition-all duration-500"
        />
        <div className="absolute bottom-4 left-1/2 flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-lg md:bottom-8 md:px-6">
          <div className="bg-brand/10 p-3 rounded-full text-brand">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800">{t('contact.map.title')}</h4>
            <p className="text-xs text-slate-500">{t('contact.map.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {notification.show && (
        <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-2xl flex items-center gap-3 z-50 animate-slide-in ${
          notification.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {notification.type === 'success' ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
          <p className="font-medium">{notification.message}</p>
          <button onClick={() => setNotification(prev => ({ ...prev, show: false }))} className="ml-2 opacity-50 hover:opacity-100">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
