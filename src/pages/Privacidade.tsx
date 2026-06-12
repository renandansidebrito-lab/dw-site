import { motion } from "framer-motion";
import Seo from "@/components/seo/Seo";
import { COMPANY } from "@/data/company";

export default function Privacidade() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <Seo
        title={`Política de Privacidade | ${COMPANY.brandName}`}
        description={`Consulte a Política de Privacidade da ${COMPANY.legalName}, com informações sobre coleta, uso e proteção de dados no site institucional.`}
        path="/privacidade"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100"
        >
          <div className="mb-10 border-b border-slate-100 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Política de Privacidade
            </h1>
            <p className="text-slate-500">
              Compreenda como a {COMPANY.brandName} gerencia e protege os seus dados.
            </p>
          </div>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
            <section>
              <p className="lead text-lg text-slate-700">
                A <strong>{COMPANY.legalName}</strong> (CNPJ: {COMPANY.taxId}), aqui referida como "{COMPANY.shortName}", "nós" ou "nosso", está comprometida em proteger sua privacidade. 
                Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações 
                quando você visita nosso site.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-3">1. Coleta de Informações</h3>
              <p>
                Podemos coletar informações pessoais que você nos fornece voluntariamente ao preencher formulários 
                no site, como nome, e-mail e telefone para contato. Também coletamos automaticamente dados de 
                navegação anônimos (como endereço IP, tipo de navegador e páginas visitadas) para melhorar nossa experiência de usuário e o desempenho do site.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-3">2. Uso das Informações</h3>
              <p className="mb-3">
                Utilizamos as informações coletadas para as seguintes finalidades:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li><strong>Atendimento:</strong> Responder às suas solicitações de orçamento, dúvidas ou suporte técnico.</li>
                <li><strong>Melhoria Contínua:</strong> Aprimorar nosso site, serviços e processos comerciais.</li>
                <li><strong>Comunicação:</strong> Enviar comunicações relevantes sobre nossos produtos e serviços, caso você tenha optado por recebê-las.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-3">3. Proteção e Segurança de Dados</h3>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra 
                acesso não autorizado, alteração, divulgação ou destruição. Nosso compromisso é tratar seus dados com a máxima 
                confidencialidade e em conformidade com as leis de proteção de dados aplicáveis.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-3">4. Uso de Cookies</h3>
              <p>
                Nosso site utiliza cookies para melhorar a funcionalidade e o desempenho. Você pode configurar 
                seu navegador para recusar cookies ou para alertá-mo quando um cookie estiver sendo enviado. Contudo, 
                isso pode limitar algumas funcionalidades do site.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-3">5. Seus Direitos</h3>
              <p>
                Você tem o direito de solicitar o acesso, correção, atualização ou exclusão das suas informações pessoais 
                que mantemos. Para exercer esses direitos, basta entrar em contato através dos nossos canais oficiais.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-3">6. Contato Oficial</h3>
              <p className="mb-4">
                Se tiver dúvidas, solicitações ou preocupações sobre esta Política de Privacidade, entre em contato conosco:
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-sm">
                <p><strong>Empresa:</strong> {COMPANY.legalName}</p>
                <p><strong>CNPJ:</strong> {COMPANY.taxId}</p>
                <p><strong>E-mail:</strong> <a href={`mailto:${COMPANY.primaryEmails.commercial}`} className="text-brand hover:underline">{COMPANY.primaryEmails.commercial}</a></p>
                <p><strong>Telefone:</strong> {COMPANY.phones[0]}</p>
                <p><strong>Endereço:</strong> {COMPANY.address.streetAddress}, {COMPANY.address.neighborhood} - {COMPANY.address.addressLocality} / {COMPANY.address.addressRegion}</p>
              </div>
            </section>

            <p className="text-sm text-slate-500 mt-10 pt-6 border-t border-slate-100">
              Última atualização: Junho de 2026
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
