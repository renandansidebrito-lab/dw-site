import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/i18nContext";

export default function Termos() {
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
            Termos de Uso
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>
              Bem-vindo ao site da DW Granitos & Mármores. Ao acessar e usar este site, você concorda em 
              cumprir e estar vinculado aos seguintes termos e condições de uso.
            </p>

            <h3 className="text-xl font-semibold text-slate-800">1. Aceitação dos Termos</h3>
            <p>
              Ao acessar este site, você confirma que leu, compreendeu e concorda em ficar vinculado a estes 
              Termos de Uso. Se você não concordar com estes termos, não deve usar nosso site.
            </p>

            <h3 className="text-xl font-semibold text-slate-800">2. Uso do Conteúdo</h3>
            <p>
              Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é propriedade 
              da DW Granitos & Mármores ou de seus licenciadores e está protegido por leis de direitos autorais. 
              O uso não autorizado deste conteúdo é estritamente proibido.
            </p>

            <h3 className="text-xl font-semibold text-slate-800">3. Isenção de Responsabilidade</h3>
            <p>
              As informações fornecidas neste site são apenas para fins informativos gerais. Embora nos esforcemos 
              para manter as informações atualizadas e corretas, não garantimos a precisão, integridade ou 
              adequação das informações para qualquer finalidade específica.
            </p>
            <p>
              As imagens dos materiais são ilustrativas. Como pedras naturais, podem ocorrer variações de 
              tonalidade e veios.
            </p>

            <h3 className="text-xl font-semibold text-slate-800">4. Links para Terceiros</h3>
            <p>
              Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo ou 
              práticas de privacidade desses sites.
            </p>

            <h3 className="text-xl font-semibold text-slate-800">5. Alterações nos Termos</h3>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão 
              em vigor imediatamente após a publicação no site.
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
