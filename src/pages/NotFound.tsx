import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Seo from "@/components/seo/Seo";
import { useTranslation } from "@/contexts/i18nContext";

export default function NotFound() {
  const { language } = useTranslation();
  const location = useLocation();
  const content =
    language === "en"
      ? {
          title: "Page not found",
          eyebrow: "Error 404",
          description: "The address you entered does not exist or may have been moved.",
          home: "Back to homepage",
          contact: "Contact our team",
        }
      : language === "es"
        ? {
            title: "Página no encontrada",
            eyebrow: "Error 404",
            description: "La dirección ingresada no existe o puede haber sido movida.",
            home: "Volver al inicio",
            contact: "Hablar con nuestro equipo",
          }
        : {
            title: "Página não encontrada",
            eyebrow: "Erro 404",
            description: "O endereço informado não existe ou pode ter sido movido.",
            home: "Voltar para o início",
            contact: "Falar com nossa equipe",
          };

  return (
    <section className="flex min-h-[70vh] items-center bg-slate-50 px-4 pb-20 pt-32">
      <Seo
        title={content.title}
        description={content.description}
        path={location.pathname}
        noIndex
      />
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-brand">{content.eyebrow}</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
          {content.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          {content.description}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {content.home}
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition-colors hover:border-brand hover:text-brand"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            {content.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
