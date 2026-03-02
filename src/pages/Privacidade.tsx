import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/i18nContext";

export default function Privacidade() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm p-8 md:p-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>
              A DW Granitos & Mármores ("nós", "nosso") está comprometida em proteger sua privacidade. 
              Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações 
              quando você visita nosso site.
            </p>

            <h3 className="text-xl font-semibold text-slate-800">1. Coleta de Informações</h3>
            <p>
              Podemos coletar informações pessoais que você nos fornece voluntariamente ao preencher formulários 
              no site, como nome, e-mail e telefone para contato. Também coletamos automaticamente dados de 
              navegação anônimos para melhorar nossa experiência de usuário.
            </p>

            <h3 className="text-xl font-semibold text-slate-800">2. Uso das Informações</h3>
            <p>
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Responder às suas solicitações e dúvidas;</li>
              <li>Melhorar nosso site e serviços;</li>
              <li>Enviar comunicações de marketing, caso você tenha optado por recebê-las.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800">3. Proteção de Dados</h3>
            <p>
              Implementamos medidas de segurança apropriadas para proteger suas informações pessoais contra 
              acesso não autorizado, alteração, divulgação ou destruição.
            </p>

            <h3 className="text-xl font-semibold text-slate-800">4. Cookies</h3>
            <p>
              Nosso site utiliza cookies para melhorar a funcionalidade e desempenho. Você pode configurar 
              seu navegador para recusar cookies, mas isso pode limitar algumas funcionalidades do site.
            </p>

            <h3 className="text-xl font-semibold text-slate-800">5. Contato</h3>
            <p>
              Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através 
              da nossa página de contato ou pelo e-mail contato@dwgranitos.com.br.
            </p>

            <p className="text-sm text-slate-500 mt-8 pt-8 border-t border-slate-100">
              Última atualização: Fevereiro de 2026
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
