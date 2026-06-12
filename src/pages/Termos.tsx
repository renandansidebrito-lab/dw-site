import { motion } from "framer-motion";
import Seo from "@/components/seo/Seo";
import { COMPANY } from "@/data/company";

export default function Termos() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <Seo
        title={`Termos de Uso | ${COMPANY.brandName}`}
        description={`Leia os Termos de Uso do site da ${COMPANY.legalName}, com condições de acesso, uso do conteúdo e informações institucionais.`}
        path="/termos"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100"
        >
          <div className="mb-10 border-b border-slate-100 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Termos de Uso
            </h1>
            <p className="text-slate-500">
              Condições e regras para a utilização do site institucional da {COMPANY.brandName}.
            </p>
          </div>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
            <section>
              <p className="lead text-lg text-slate-700">
                Bem-vindo ao site da <strong>{COMPANY.legalName}</strong> (CNPJ: {COMPANY.taxId}). Ao acessar e usar este site, você concorda em 
                cumprir e estar vinculado aos seguintes termos e condições de uso.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-3">1. Aceitação dos Termos</h3>
              <p>
                Ao acessar este site, você confirma que leu, compreendeu e concorda em ficar vinculado a estes 
                Termos de Uso. Se você não concordar com estes termos ou com qualquer parte deles, não deve utilizar nosso site 
                nem os serviços aqui oferecidos.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-3">2. Uso do Conteúdo e Propriedade Intelectual</h3>
              <p>
                Todo o conteúdo presente neste site, incluindo textos, imagens, logotipos, vídeos, design e código-fonte, é propriedade 
                exclusiva da <strong>{COMPANY.legalName}</strong> ou de seus licenciadores, estando protegido pelas leis de direitos autorais e de propriedade intelectual. 
                O uso, reprodução ou distribuição não autorizada deste conteúdo é estritamente proibido.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-3">3. Isenção de Responsabilidade</h3>
              <p className="mb-3">
                As informações fornecidas neste site são apenas para fins informativos gerais e comerciais. Embora nos esforcemos 
                para manter as informações atualizadas e corretas:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li>Não garantimos a precisão, integridade ou adequação absoluta das informações para qualquer finalidade específica sem uma consulta comercial prévia.</li>
                <li>As imagens dos materiais exibidos no catálogo são ilustrativas. Tratando-se de rochas naturais, podem e irão ocorrer variações de tonalidade, textura, veios e padronagem em relação às amostras e imagens.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-3">4. Links para Terceiros</h3>
              <p>
                Nosso site pode conter links para sites de terceiros, incluídos apenas para sua conveniência. Não endossamos e não somos responsáveis 
                pelo conteúdo, políticas de privacidade ou práticas operacionais de qualquer site de terceiros.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-3">5. Alterações nos Termos</h3>
              <p>
                Reservamo-nos o direito de modificar, adicionar ou remover partes destes termos a qualquer momento, a nosso critério. As alterações entrarão 
                em vigor imediatamente após a sua publicação no site. É sua responsabilidade revisar estes termos periodicamente.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-slate-800 mb-3">6. Legislação Aplicável e Foro</h3>
              <p>
                Estes Termos de Uso são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa que surja em relação a estes 
                termos estará sujeita à jurisdição exclusiva dos tribunais da comarca de {COMPANY.address.addressLocality} - {COMPANY.address.addressRegion}.
              </p>
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
