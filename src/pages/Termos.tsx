import { motion } from "framer-motion";
import Seo from "@/components/seo/Seo";
import { COMPANY } from "@/data/company";
import { useTranslation } from "@/contexts/i18nContext";
import type { Language } from "@/types/i18n";

const termsUi: Record<Language, {
  title: string;
  seoDescription: string;
  subtitle: string;
  intro: string;
  sections: { title: string; text: string; bullets?: string[] }[];
  updated: string;
}> = {
  pt: {
    title: "Termos de Uso",
    seoDescription: "Leia os Termos de Uso do nosso site, incluindo condições de acesso, uso do conteúdo e informações institucionais.",
    subtitle: "Condições e regras para a utilização do nosso site institucional.",
    intro: "Ao acessar e usar este site, você concorda em cumprir os seguintes termos e condições de uso.",
    sections: [
      { title: "1. Aceitação dos Termos", text: "Ao acessar este site, você confirma que leu, compreendeu e concorda com estes Termos de Uso. Caso não concorde, não deve utilizar o site nem os serviços aqui apresentados." },
      { title: "2. Uso do Conteúdo e Propriedade Intelectual", text: "Textos, imagens, logotipos, vídeos, design e código-fonte pertencem à empresa ou a seus licenciadores e são protegidos pela legislação de direitos autorais e propriedade intelectual. O uso, reprodução ou distribuição sem autorização é proibido." },
      { title: "3. Isenção de Responsabilidade", text: "As informações deste site têm finalidade informativa e comercial. Embora busquemos mantê-las atualizadas e corretas:", bullets: [
        "Não garantimos sua precisão, integridade ou adequação absoluta a uma finalidade específica sem consulta comercial prévia.",
        "As imagens dos materiais são ilustrativas. Rochas naturais apresentam variações de tonalidade, textura, veios e padronagem.",
      ] },
      { title: "4. Links para Terceiros", text: "O site pode conter links externos oferecidos por conveniência. Não somos responsáveis pelo conteúdo, pelas políticas de privacidade nem pelas práticas de terceiros." },
      { title: "5. Alterações nos Termos", text: "Podemos modificar estes termos a qualquer momento. As alterações entram em vigor após sua publicação no site, e recomendamos a revisão periódica deste documento." },
      { title: "6. Legislação Aplicável e Foro", text: "Estes termos são regidos pelas leis do Brasil. Eventuais disputas estarão sujeitas à jurisdição dos tribunais da comarca de Cachoeiro de Itapemirim - ES." },
    ],
    updated: "Última atualização: Junho de 2026",
  },
  en: {
    title: "Terms of Use",
    seoDescription: "Read our website Terms of Use, including access conditions, content usage and corporate information.",
    subtitle: "Conditions and rules for using our corporate website.",
    intro: "By accessing and using this website, you agree to comply with the following terms and conditions.",
    sections: [
      { title: "1. Acceptance of Terms", text: "By accessing this website, you confirm that you have read, understood and agreed to these Terms of Use. If you do not agree, you should not use the website or the services presented here." },
      { title: "2. Content Use and Intellectual Property", text: "Texts, images, logos, videos, design and source code belong to the company or its licensors and are protected by copyright and intellectual property laws. Unauthorized use, reproduction or distribution is prohibited." },
      { title: "3. Disclaimer", text: "The information on this website is provided for general and commercial purposes. Although we seek to keep it current and accurate:", bullets: [
        "We do not guarantee absolute accuracy, completeness or suitability for a specific purpose without prior consultation.",
        "Material images are illustrative. Natural stones present variations in tone, texture, veining and pattern.",
      ] },
      { title: "4. Third-Party Links", text: "The website may include external links for convenience. We are not responsible for third-party content, privacy policies or practices." },
      { title: "5. Changes to These Terms", text: "We may modify these terms at any time. Changes take effect when published on the website, and we recommend reviewing this document periodically." },
      { title: "6. Governing Law and Jurisdiction", text: "These terms are governed by Brazilian law. Any dispute will be subject to the courts of Cachoeiro de Itapemirim, Espírito Santo, Brazil." },
    ],
    updated: "Last updated: June 2026",
  },
  es: {
    title: "Términos de Uso",
    seoDescription: "Lea los Términos de Uso de nuestro sitio, incluidas las condiciones de acceso, uso del contenido e información institucional.",
    subtitle: "Condiciones y reglas para utilizar nuestro sitio institucional.",
    intro: "Al acceder y utilizar este sitio, usted acepta cumplir los siguientes términos y condiciones.",
    sections: [
      { title: "1. Aceptación de los Términos", text: "Al acceder al sitio, usted confirma que ha leído, comprendido y aceptado estos Términos de Uso. Si no está de acuerdo, no debe utilizar el sitio ni los servicios aquí presentados." },
      { title: "2. Uso del Contenido y Propiedad Intelectual", text: "Los textos, imágenes, logotipos, videos, diseño y código fuente pertenecen a la empresa o a sus licenciantes y están protegidos por las leyes de derechos de autor y propiedad intelectual. Se prohíbe su uso, reproducción o distribución sin autorización." },
      { title: "3. Exención de Responsabilidad", text: "La información del sitio tiene fines informativos y comerciales. Aunque procuramos mantenerla actualizada y correcta:", bullets: [
        "No garantizamos su precisión, integridad o adecuación absoluta a una finalidad específica sin consulta comercial previa.",
        "Las imágenes de los materiales son ilustrativas. Las piedras naturales presentan variaciones de tonalidad, textura, vetas y patrón.",
      ] },
      { title: "4. Enlaces de Terceros", text: "El sitio puede contener enlaces externos ofrecidos por conveniencia. No somos responsables del contenido, las políticas de privacidad ni las prácticas de terceros." },
      { title: "5. Cambios en los Términos", text: "Podemos modificar estos términos en cualquier momento. Los cambios entran en vigor al publicarse en el sitio y recomendamos revisar este documento periódicamente." },
      { title: "6. Legislación Aplicable y Jurisdicción", text: "Estos términos se rigen por las leyes de Brasil. Cualquier disputa estará sujeta a los tribunales de Cachoeiro de Itapemirim, Espírito Santo, Brasil." },
    ],
    updated: "Última actualización: Junio de 2026",
  },
};

export default function Termos() {
  const { language } = useTranslation();
  const ui = termsUi[language];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <Seo title={ui.title + " | " + COMPANY.brandName} description={ui.seoDescription} path="/termos" />
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
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}
            <p className="text-sm text-slate-500 mt-10 pt-6 border-t border-slate-100">{ui.updated}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
