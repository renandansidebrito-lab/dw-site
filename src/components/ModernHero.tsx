import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";

export default function ModernHero() {
  const { t } = useTranslation();

  return (
    <section className="relative isolate flex min-h-[66vh] items-center overflow-hidden bg-slate-950 pt-24 sm:min-h-[70vh] sm:pt-28 lg:min-h-[74vh] lg:pt-32">
      <img
        src="/images/drone-empresa.webp"
        alt="Vista institucional da estrutura da DW Granitos & Mármores"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-68"
        loading="eager"
        onError={(e) => {
          e.currentTarget.src = "/images/setores/chapas.webp";
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.70)_42%,rgba(2,6,23,0.52)_100%)]" />
      <div className="absolute inset-0 bg-slate-950/34" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-[46rem]"
        >
          <h1 className="max-w-[13ch] text-[2.2rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-[3rem] lg:max-w-[15ch] lg:text-[4rem]">
            {t('hero.title')}
          </h1>

          <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-7 text-slate-300 sm:text-[1.02rem] sm:leading-8 lg:text-[1.05rem]">
            {t('hero.description')}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              to="/contato"
              className="group inline-flex min-w-[12rem] items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition-all duration-200 hover:bg-brand2"
            >
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/catalogo"
              className="inline-flex min-w-[12rem] items-center justify-center rounded-full border border-white/16 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/10"
            >
              {t('hero.cta.secondary')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
