import { motion } from "framer-motion";
import Seo from "@/components/seo/Seo";
import { COMPANY } from "@/data/company";
import { useTranslation } from "@/contexts/i18nContext";
import type { Language } from "@/types/i18n";

const privacyUi: Record<Language, {
  title: string;
  seoDescription: string;
  subtitle: string;
  intro: string;
  sections: { title: string; text: string; bullets?: { label: string; text: string }[] }[];
  contactTitle: string;
  contactText: string;
  labels: { company: string; taxId: string; email: string; phone: string; address: string };
  updated: string;
}> = {
  pt: {
    title: "Política de Privacidade",
    seoDescription: "Consulte nossa Política de Privacidade, com informações sobre coleta, uso e proteção de dados no site institucional.",
    subtitle: "Compreenda como gerenciamos e protegemos os seus dados.",
    intro: "Estamos comprometidos em proteger sua privacidade. Esta política explica como coletamos, usamos e protegemos suas informações quando você visita nosso site.",
    sections: [
      { title: "1. Coleta de Informações", text: "Podemos coletar informações pessoais fornecidas voluntariamente em formulários, como nome, e-mail e telefone. Também podemos coletar dados anônimos de navegação, como endereço IP, tipo de navegador e páginas visitadas, para melhorar a experiência e o desempenho do site." },
      { title: "2. Uso das Informações", text: "Utilizamos as informações coletadas para as seguintes finalidades:", bullets: [
        { label: "Atendimento", text: "Responder a solicitações de orçamento, dúvidas ou suporte técnico." },
        { label: "Melhoria Contínua", text: "Aprimorar nosso site, serviços e processos comerciais." },
        { label: "Comunicação", text: "Enviar comunicações relevantes sobre produtos e serviços quando houver autorização." },
      ] },
      { title: "3. Proteção e Segurança de Dados", text: "Adotamos medidas técnicas e organizacionais para proteger informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição, em conformidade com a legislação aplicável." },
      { title: "4. Uso de Cookies", text: "Utilizamos cookies para melhorar a funcionalidade e o desempenho do site. Você pode recusá-los ou receber alertas pelo navegador, mas isso pode limitar algumas funcionalidades." },
      { title: "5. Seus Direitos", text: "Você pode solicitar acesso, correção, atualização ou exclusão das informações pessoais que mantemos por meio dos nossos canais oficiais." },
    ],
    contactTitle: "6. Contato Oficial",
    contactText: "Em caso de dúvidas, solicitações ou preocupações sobre esta Política de Privacidade, entre em contato conosco:",
    labels: { company: "Empresa", taxId: "CNPJ", email: "E-mail", phone: "Telefone", address: "Endereço" },
    updated: "Última atualização: Junho de 2026",
  },
  en: {
    title: "Privacy Policy",
    seoDescription: "Read our Privacy Policy and learn how information is collected, used and protected on our corporate website.",
    subtitle: "Learn how we manage and protect your data.",
    intro: "We are committed to protecting your privacy. This policy explains how we collect, use and protect your information when you visit our website.",
    sections: [
      { title: "1. Information We Collect", text: "We may collect personal information you voluntarily provide through forms, such as your name, email address and phone number. We may also collect anonymous browsing data, such as IP address, browser type and pages visited, to improve the website experience and performance." },
      { title: "2. How We Use Information", text: "We use collected information for the following purposes:", bullets: [
        { label: "Service", text: "Respond to quotation requests, questions or technical support inquiries." },
        { label: "Continuous Improvement", text: "Improve our website, services and sales processes." },
        { label: "Communication", text: "Send relevant product and service information when authorized." },
      ] },
      { title: "3. Data Protection and Security", text: "We use appropriate technical and organizational measures to protect personal information from unauthorized access, alteration, disclosure or destruction in accordance with applicable law." },
      { title: "4. Cookies", text: "We use cookies to improve website functionality and performance. You may refuse them or receive browser alerts, but doing so can limit some features." },
      { title: "5. Your Rights", text: "You may request access to, correction, updating or deletion of personal information we hold by contacting us through our official channels." },
    ],
    contactTitle: "6. Official Contact",
    contactText: "For questions, requests or concerns about this Privacy Policy, contact us:",
    labels: { company: "Company", taxId: "Brazilian Tax ID", email: "Email", phone: "Phone", address: "Address" },
    updated: "Last updated: June 2026",
  },
  es: {
    title: "Política de Privacidad",
    seoDescription: "Consulte nuestra Política de Privacidad y conozca cómo recopilamos, usamos y protegemos la información en nuestro sitio institucional.",
    subtitle: "Conozca cómo gestionamos y protegemos sus datos.",
    intro: "Estamos comprometidos con la protección de su privacidad. Esta política explica cómo recopilamos, usamos y protegemos su información cuando visita nuestro sitio.",
    sections: [
      { title: "1. Recopilación de Información", text: "Podemos recopilar información personal proporcionada voluntariamente en formularios, como nombre, correo electrónico y teléfono. También podemos recopilar datos anónimos de navegación, como dirección IP, navegador y páginas visitadas, para mejorar la experiencia y el rendimiento del sitio." },
      { title: "2. Uso de la Información", text: "Utilizamos la información recopilada para las siguientes finalidades:", bullets: [
        { label: "Atención", text: "Responder solicitudes de presupuesto, consultas o soporte técnico." },
        { label: "Mejora Continua", text: "Mejorar nuestro sitio, servicios y procesos comerciales." },
        { label: "Comunicación", text: "Enviar información relevante sobre productos y servicios cuando exista autorización." },
      ] },
      { title: "3. Protección y Seguridad de Datos", text: "Adoptamos medidas técnicas y organizativas para proteger la información personal contra acceso no autorizado, alteración, divulgación o destrucción, de acuerdo con la legislación aplicable." },
      { title: "4. Uso de Cookies", text: "Utilizamos cookies para mejorar la funcionalidad y el rendimiento del sitio. Puede rechazarlas o recibir alertas del navegador, aunque esto puede limitar algunas funciones." },
      { title: "5. Sus Derechos", text: "Puede solicitar acceso, corrección, actualización o eliminación de la información personal que conservamos mediante nuestros canales oficiales." },
    ],
    contactTitle: "6. Contacto Oficial",
    contactText: "Si tiene preguntas, solicitudes o inquietudes sobre esta Política de Privacidad, contáctenos:",
    labels: { company: "Empresa", taxId: "CNPJ", email: "Correo electrónico", phone: "Teléfono", address: "Dirección" },
    updated: "Última actualización: Junio de 2026",
  },
};

export default function Privacidade() {
  const { language } = useTranslation();
  const ui = privacyUi[language];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <Seo title={ui.title + " | " + COMPANY.brandName} description={ui.seoDescription} path="/privacidade" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100">
          <div className="mb-10 border-b border-slate-100 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{ui.title}</h1>
            <p className="text-slate-500">{ui.subtitle}</p>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
            <section>
              <p className="lead text-lg text-slate-700"><strong>{COMPANY.legalName}</strong> (CNPJ: {COMPANY.taxId}). {ui.intro}</p>
            </section>
            {ui.sections.map((section) => (
              <section key={section.title}>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{section.title}</h3>
                <p className={section.bullets ? "mb-3" : undefined}>{section.text}</p>
                {section.bullets && (
                  <ul className="list-disc pl-5 space-y-2 text-slate-700 bg-slate-50 p-6 rounded-xl border border-slate-100">
                    {section.bullets.map((item) => <li key={item.label}><strong>{item.label}:</strong> {item.text}</li>)}
                  </ul>
                )}
              </section>
            ))}
            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{ui.contactTitle}</h3>
              <p className="mb-4">{ui.contactText}</p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-sm">
                <p><strong>{ui.labels.company}:</strong> {COMPANY.legalName}</p>
                <p><strong>{ui.labels.taxId}:</strong> {COMPANY.taxId}</p>
                <p><strong>{ui.labels.email}:</strong> <a href={"mailto:" + COMPANY.primaryEmails.commercial} className="text-brand hover:underline">{COMPANY.primaryEmails.commercial}</a></p>
                <p><strong>{ui.labels.phone}:</strong> {COMPANY.phones[0]}</p>
                <p><strong>{ui.labels.address}:</strong> {COMPANY.address.streetAddress}, {COMPANY.address.neighborhood} - {COMPANY.address.addressLocality} / {COMPANY.address.addressRegion}</p>
              </div>
            </section>
            <p className="text-sm text-slate-500 mt-10 pt-6 border-t border-slate-100">{ui.updated}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
