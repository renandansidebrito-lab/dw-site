import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

export default function Contact() {
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
    if (!formData.name.trim()) newErrors.name = "Informe seu nome completo.";
    if (!formData.email.trim() || !validateEmail(formData.email)) newErrors.email = "Informe um e-mail válido.";
    if (!formData.subject.trim()) newErrors.subject = "Informe o assunto da mensagem.";
    if (!formData.message.trim()) newErrors.message = "Descreva sua mensagem.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setFeedback("Alguns campos obrigatórios precisam de atenção.");
      const firstKey = Object.keys(newErrors)[0];
      const el = document.getElementById(firstKey);
      if (el) el.focus();
      return;
    }
    setFeedback("Enviando...");
    try {
      const attachments = await Promise.all((formData.files || []).map(async (file) => {
        const buf = await file.arrayBuffer();
        let binary = '';
        const bytes = new Uint8Array(buf);
        const chunkSize = 0x8000;
        for (let i = 0; i < bytes.length; i += chunkSize) {
          const sub = bytes.subarray(i, i + chunkSize);
          binary += String.fromCharCode.apply(null, Array.from(sub));
        }
        const base64 = btoa(binary);
        return {
          filename: file.name,
          content: base64,
          contentType: file.type || 'application/octet-stream'
        };
      }));

      const resp = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `${formData.phoneCode}${formData.phone}`,
          subject: formData.subject,
          message: formData.message,
          state: formData.state,
          attachments
        })
      });
      if (resp.ok) {
        setFeedback("Mensagem enviada com sucesso.");
        setModalTitle("Mensagem enviada");
        setModalMessage("Recebemos sua solicitação. Em breve entraremos em contato.");
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
      } else {
        const data = await resp.json().catch(() => ({}));
        const msg = data.error || "Não foi possível enviar. Tente novamente mais tarde.";
        setFeedback(msg);
        setModalTitle("Falha ao enviar");
        setModalMessage(msg);
        setIsModalOpen(true);
        const phone = '5528999851446';
        const text = `Olá! Tive uma falha ao enviar pelo site e gostaria de falar com a equipe.\n\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phoneCode}${formData.phone}\nEstado: ${formData.state}\n\nMensagem:\n${formData.message}`;
        setModalWhatsappUrl(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
        setModalSuggestWhatsapp(true);
      }
    } catch {
      const msg = "Falha de rede ao enviar. Verifique sua conexão.";
      setFeedback(msg);
      setModalTitle("Falha de rede");
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
      title: "Endereço",
      content: "Rua Antonio Bazoni, 555\nVargem Grande do Soturno\nCachoeiro de Itapemirim - ES"
    },
    {
      icon: Phone,
      title: "Telefones Fixos",
      content: "+55 28 3524-2288\n+55 28 3524-1688"
    },
    {
      icon: Mail,
      title: "Emails",
      content: "financeiro@dwgranitos.com.br\ncomercial@dwgranitos.com.br\nvendas@dwgranitos.com.br"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Quinta: 7h - 17h\nSexta: 7h - 16h\nSábado e Domingo: Fechado"
    }
  ];

  return (
    <div className="min-h-screen" role="main">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20" aria-labelledby="contact-hero-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="contact-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
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
      <section className="py-20 bg-white" aria-labelledby="contact-info-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-info-title" className="sr-only">Informações de Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" role="list">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-xl" role="listitem">
                <div className="w-12 h-12 bg-brandLight rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {info.title}
                </h3>
                {info.title === 'Emails' ? (
                  <div className="space-y-1">
                    {info.content.split('\n').map((email: string) => (
                      <p key={email} className="text-slate-600">
                        <a href={`mailto:${email}`} className="text-brand hover:text-brand2 font-medium" aria-label={`Enviar e-mail para ${email}`}>
                          {email}
                        </a>
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-600 whitespace-pre-line">
                    {info.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-brandLight rounded-2xl p-8" aria-labelledby="contact-whatsapp-title">
            <h3 id="contact-whatsapp-title" className="text-2xl font-bold text-slate-800 text-center mb-3">Contatos via WhatsApp</h3>
            <p className="text-center text-slate-600 mb-8">Escolha um dos números abaixo para conversar agora</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 border border-green-200 shadow-sm hover:shadow-lg transition-all transform duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-white/0 via-white/30 to-white/0" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">WhatsApp</div>
                    <div className="text-lg font-semibold text-slate-800">+55 28 99951-1643</div>
                  </div>
                </div>
                <a
                  href="https://wa.me/5528999511643"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform duration-200 hover:scale-[1.02]"
                  aria-label="Abrir WhatsApp para +55 28 99951-1643"
                >
                  Conversar no WhatsApp
                </a>
              </div>

              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 border border-green-200 shadow-sm hover:shadow-lg transition-all transform duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-white/0 via-white/30 to-white/0" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">WhatsApp</div>
                    <div className="text-lg font-semibold text-slate-800">+55 28 99905-7492</div>
                  </div>
                </div>
                <a
                  href="https://wa.me/5528999057492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform duration-200 hover:scale-[1.02]"
                  aria-label="Abrir WhatsApp para +55 28 99905-7492"
                >
                  Conversar no WhatsApp
                </a>
              </div>

              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 border border-green-200 shadow-sm hover:shadow-lg transition-all transform duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-white/0 via-white/30 to-white/0" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">WhatsApp</div>
                    <div className="text-lg font-semibold text-slate-800">+55 28 99985-1446</div>
                  </div>
                </div>
                <a
                  href="https://wa.me/5528999851446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform duration-200 hover:scale-[1.02]"
                  aria-label="Abrir WhatsApp para +55 28 99985-1446"
                >
                  Conversar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-slate-50" aria-labelledby="contact-form-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="contact-form-title" className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Envie sua Mensagem
            </h2>
            <p className="text-lg text-slate-600">
              Preencha o formulário abaixo e entraremos em contato o mais breve possível
            </p>
            <div aria-live="polite" role="status" className="mt-2 text-sm text-slate-600">{feedback}</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6" aria-describedby="contact-form-help">
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
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby="name-hint name-error"
                  />
                  <p id="name-hint" className="text-xs text-slate-500 mt-1">Como gostaria de ser chamado</p>
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-600 mt-1" role="alert">{errors.name}</p>
                  )}
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
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby="email-hint email-error"
                  />
                  <p id="email-hint" className="text-xs text-slate-500 mt-1">Usaremos para responder sua solicitação</p>
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-600 mt-1" role="alert">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Telefone
                  </label>
                  <div className="flex gap-2">
                    <select
                      id="phoneCode"
                      name="phoneCode"
                      value={formData.phoneCode}
                      onChange={handleChange}
                      className="px-3 py-2 border border-slate-300 rounded-lg bg-white"
                      aria-label="Código do país"
                    >
                      {[
                        '+93 AF','+355 AL','+213 DZ','+376 AD','+244 AO','+54 AR','+374 AM','+297 AW','+61 AU','+43 AT','+994 AZ','+973 BH','+880 BD','+375 BY','+32 BE','+501 BZ','+229 BJ','+975 BT','+591 BO','+387 BA','+267 BW','+55 BR','+359 BG','+226 BF','+95 MM','+257 BI','+855 KH','+237 CM','+1 CA','+238 CV','+236 CF','+235 TD','+56 CL','+86 CN','+57 CO','+269 KM','+242 CG','+243 CD','+506 CR','+225 CI','+385 HR','+53 CU','+357 CY','+420 CZ','+45 DK','+253 DJ','+1 DO','+593 EC','+20 EG','+503 SV','+240 GQ','+291 ER','+372 EE','+251 ET','+298 FO','+679 FJ','+358 FI','+33 FR','+241 GA','+220 GM','+995 GE','+49 DE','+233 GH','+30 GR','+299 GL','+502 GT','+224 GN','+245 GW','+592 GY','+509 HT','+504 HN','+852 HK','+36 HU','+354 IS','+91 IN','+62 ID','+98 IR','+964 IQ','+353 IE','+972 IL','+39 IT','+81 JP','+962 JO','+7 KZ','+254 KE','+82 KR','+965 KW','+996 KG','+856 LA','+371 LV','+961 LB','+266 LS','+231 LR','+218 LY','+423 LI','+370 LT','+352 LU','+853 MO','+389 MK','+261 MG','+265 MW','+60 MY','+960 MV','+223 ML','+356 MT','+692 MH','+596 MQ','+222 MR','+230 MU','+52 MX','+691 FM','+373 MD','+377 MC','+976 MN','+382 ME','+212 MA','+258 MZ','+264 NA','+674 NR','+977 NP','+31 NL','+687 NC','+64 NZ','+505 NI','+234 NG','+47 NO','+968 OM','+92 PK','+507 PA','+675 PG','+595 PY','+51 PE','+63 PH','+48 PL','+351 PT','+974 QA','+40 RO','+7 RU','+250 RW','+590 BL','+685 WS','+378 SM','+239 ST','+966 SA','+221 SN','+381 RS','+248 SC','+232 SL','+65 SG','+421 SK','+386 SI','+677 SB','+252 SO','+27 ZA','+34 ES','+94 LK','+249 SD','+597 SR','+46 SE','+41 CH','+963 SY','+886 TW','+992 TJ','+255 TZ','+66 TH','+228 TG','+690 TK','+676 TO','+216 TN','+90 TR','+993 TM','+688 TV','+256 UG','+380 UA','+971 AE','+44 UK','+1 US','+598 UY','+998 UZ','+678 VU','+58 VE','+84 VN','+681 WF','+967 YE','+260 ZM','+263 ZW'
                      ].map(opt => {
                        const [code] = opt.split(' ');
                        return <option key={opt} value={code}>{opt}</option>;
                      })}
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                      aria-describedby="phone-hint"
                    />
                  </div>
                  <p id="phone-hint" className="text-xs text-slate-500 mt-1">Ex.: +55 (11) 99999-9999</p>
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-2">
                    Estado (UF)
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  >
                    <option value="">Selecione</option>
                    {['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'].map(uf => (
                      <option key={uf} value={uf}>{uf}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div>
                  <label htmlFor="files" className="block text-sm font-medium text-slate-700 mb-2">
                    Anexos (imagens, PDF, DWG, DXF)
                  </label>
                  <input
                    type="file"
                    id="files"
                    name="files"
                    multiple
                    onChange={handleFiles}
                    accept="image/*,.pdf,.dwg,.dxf"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                  />
                  <p className="text-xs text-slate-500 mt-1">Você pode selecionar múltiplos arquivos.</p>
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
                  aria-required="true"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby="subject-error"
                />
                {errors.subject && (
                  <p id="subject-error" className="text-xs text-red-600 mt-1" role="alert">{errors.subject}</p>
                )}
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
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby="message-error"
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-600 mt-1" role="alert">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand2 transition-colors"
                  aria-label="Enviar mensagem"
                >
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
              {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/40" aria-hidden="true" onClick={() => setIsModalOpen(false)}></div>
                  <div role="dialog" aria-modal="true" aria-labelledby="status-title" className="relative z-10 bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                    <h3 id="status-title" className="text-xl font-bold text-slate-800 mb-2">{modalTitle}</h3>
                    <p className="text-slate-600 mb-4">{modalMessage}</p>
                    <div className="flex items-center justify-end gap-3">
                      {modalSuggestWhatsapp && (
                        <a href={modalWhatsappUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" aria-label="Abrir WhatsApp">
                          Abrir WhatsApp
                        </a>
                      )}
                      <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand2">Fechar</button>
                    </div>
                  </div>
                </div>
              )}
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
                <MapPin className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm">DW Granitos & Marmores</h3>
                  <p className="text-slate-600 text-xs">
                    Rua Antonio Bazoni, 555<br />
                    Vargem Grande do Soturno<br />
                    Cachoeiro de Itapemirim - ES
                  </p>
                  <a
                    href="https://www.google.com/maps/place/DW+Granitos+%26+Marmores+LTDA/@-20.7651504,-41.0555197,20z/data=!4m15!1m8!3m7!1s0xb96eb6c4bc4ecf:0x11d219c565d3e050!2sR.+%C3%82ngelo+Bazoni,+555+-+Vargem+Grande+Do+Soturno,+Cachoeiro+de+Itapemirim+-+ES,+29321-000!3b1!8m2!3d-20.7651672!4d-41.0554162!16s%2Fg%2F11jyxzckwr!3m5!1s0xb96ff915e9163b:0x1a7a93d530a6f709!8m2!3d-20.7650174!4d-41.0553444!16s%2Fg%2F11rg774jhk?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand text-xs hover:text-brand2 mt-2"
                  >
                    Abrir no Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
