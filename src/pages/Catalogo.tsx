import ModernCatalog from "@/components/ModernCatalog";
import Seo from "@/components/seo/Seo";
import { useTranslation } from "@/contexts/i18nContext";
import { institutionalContent } from "@/data/institutionalContent";

export default function Catalogo() {
  const { language } = useTranslation();
  const seo = institutionalContent[language].seo.materials;

  return (
    <>
      <Seo title={seo.title} description={seo.description} path="/catalogo" />
      <ModernCatalog />
    </>
  );
}
