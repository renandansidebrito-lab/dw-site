import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import { 
  fadeInUp, 
  scaleIn, 
  slideInLeft, 
  slideInRight, 
  rotateIn,
  staggerContainer,
  auroraVariants,
  particleVariants,
  typewriterVariants
} from "@/utils/animations";

export default function ModernHero() {
  const { t } = useTranslation();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const rotatingTexts = [
    t('hero.title'),
    t('modernHero.rotatingText.excellence'),
    t('modernHero.rotatingText.quality'),
    t('modernHero.rotatingText.tradition')
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about') || document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-brand-dark">
      {/* Aurora Background Effect */}
      <motion.div
        variants={auroraVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-brand to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-500 to-transparent rounded-full blur-3xl animate-pulse delay-2000" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            custom={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="space-y-8"
        >
          {/* Logo Animation */}
          <motion.div
            variants={scaleIn}
            className="flex justify-center mb-8"
          >
            <motion.img
              src="/images/dw-logo-white.webp"
              alt="DW Granitos"
              loading="eager"
              className="h-24 w-auto md:h-32 drop-shadow-2xl brightness-0 invert"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              onError={(e) => {
                 e.currentTarget.src = "/images/dw-logo-black.webp";
                 e.currentTarget.style.filter = "brightness(0) invert(1)";
              }}
            />
          </motion.div>

          {/* Animated Title with Typewriter Effect */}
          <motion.div className="relative min-h-[120px] md:min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTextIndex}
                variants={typewriterVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 absolute w-full"
              >
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  {rotatingTexts[currentTextIndex]}
                </span>
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div variants={fadeInUp}>
              <a
                href="#sectors"
                onClick={(e) => {
                  e.preventDefault();
                  const sectorsSection = document.getElementById('sectors');
                  if (sectorsSection) {
                    sectorsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative inline-flex items-center px-8 py-4 bg-brand text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand to-brand2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center">
                  {t('hero.cta.primary')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link
                to="/contato"
                className="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300"
              >
                <span className="relative z-10">
                  {t('hero.cta.secondary')}
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats removed as per request */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm">{t('hero.scrollIndicator')}</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
