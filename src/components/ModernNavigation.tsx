import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import { COMPANY } from "@/data/company";
import { useUIStore } from "@/stores/uiStore";
import { 
  navVariants, 
  menuItemVariants, 
  mobileMenuVariants,
  hoverScaleVariants 
} from "@/utils/animations";

export default function ModernNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage } = useTranslation();
  const { isMenuOpen, setIsMenuOpen } = useUIStore();
  const location = useLocation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const isHomePage = location.pathname === "/";
  const isOnHero = isHomePage && !isScrolled;

  const isLightMode = !isOnHero;

  const navItems = [
    { id: "home", label: t('nav.home'), href: "/" },
    { id: "sobre", label: t('nav.about'), href: "/sobre" },
    { id: "serraria", label: t('nav.serraria'), href: "/serraria" },
    { id: "chapas", label: t('nav.chapas'), href: "/chapas" },
    { id: "recortado", label: t('nav.recortado'), href: "/recortado" },
    { id: "catalogo", label: t('nav.catalog'), href: "/catalogo" },
    { id: "contato", label: t('nav.contact'), href: "/contato" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getNavItemClass = (isActive: boolean) => {
    if (isLightMode) {
      return isActive
        ? "text-brand bg-red-50/50 border-red-100/50 font-semibold shadow-sm"
        : "text-slate-600 hover:text-brand hover:bg-slate-50 border-transparent font-medium";
    } else {
      return isActive
        ? "text-white bg-white/12 border-white/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] font-medium"
        : "text-slate-200 hover:text-white hover:bg-white/6 border-transparent font-medium";
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial="hidden"
        animate={isScrolled ? "scrolled" : "visible"}
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isLightMode
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)]"
            : "bg-slate-950/40 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${isOnHero ? "h-[4.5rem]" : "h-[4.15rem]"}`}>
            {/* Logo */}
            <motion.div
              variants={hoverScaleVariants}
              whileHover="hover"
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center">
                <motion.img
                  src={isLightMode ? "/images/dw-logo-black.webp" : "/images/dw-logo-white.webp"}
                  alt={COMPANY.legalName}
                  className={`transition-all duration-300 object-contain ${
                    isOnHero ? "h-10 md:h-11" : "h-9 md:h-10"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  onError={(e) => {
                     e.currentTarget.src = "/images/dw-logo-black.webp";
                     e.currentTarget.style.filter = isLightMode ? "none" : "brightness(0) invert(1)";
                  }}
                />
              </Link>
            </motion.div>

            {/* Navigation Items */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              {navItems.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? location.pathname === "/"
                    : location.pathname === item.href;
                
                return (
                  <motion.div
                    key={item.id}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                  >
                    <Link
                      to={item.href}
                      onClick={() => handleNavClick(item.href)}
                    className={`relative inline-flex items-center whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all duration-200 ${getNavItemClass(isActive)}`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  aria-label={t('nav.selectLanguage')}
                  aria-expanded={langMenuOpen}
                  className={`flex items-center whitespace-nowrap rounded-full border px-3 py-2 text-sm font-medium transition-colors ${
                    isLightMode 
                      ? "border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900" 
                      : "border-white/10 text-slate-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="uppercase text-xs font-bold tracking-wider">
                    {language === 'pt' ? 'BR' : language === 'en' ? 'US' : 'ES'}
                  </span>
                  <ArrowRight className={`ml-1 h-3 w-3 transition-transform ${langMenuOpen ? "-rotate-90" : "rotate-90"}`} />
                </button>

                <AnimatePresence>
                  {langMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`absolute top-full right-0 mt-2 min-w-[84px] rounded-2xl border py-2 shadow-2xl ${
                        isLightMode
                          ? "border-slate-100 bg-white"
                          : "border-white/10 bg-slate-950/95"
                      }`}
                    >
                      {(['pt', 'en', 'es'] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setLanguage(lang);
                            setLangMenuOpen(false);
                          }}
                          className={`block w-full px-4 py-2 text-center text-sm font-medium uppercase transition-colors ${
                            isLightMode
                              ? "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                              : "text-slate-200 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {lang === 'pt' ? 'BR' : lang === 'en' ? 'US' : 'ES'}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <motion.div
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                custom={navItems.length}
              >
                <Link
                  to="/contato"
                  className="group inline-flex items-center whitespace-nowrap rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition-all duration-200 hover:bg-brand2"
                >
                  <span className="relative z-10 flex items-center">
                    {t('nav.cta')}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={hoverScaleVariants}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              className={`lg:hidden rounded-full border p-2.5 transition-colors ${
                isLightMode
                  ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                  : "border-white/10 text-white hover:bg-white/10"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className={`lg:hidden fixed inset-0 z-40 backdrop-blur-sm ${
              isLightMode ? "bg-slate-900/20" : "bg-slate-900/50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`absolute right-0 top-0 h-full w-80 border-l shadow-2xl ${
                isLightMode
                  ? "border-slate-200 bg-white text-slate-900"
                  : "border-white/10 bg-slate-950 text-white"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
                    <img 
                      src={isLightMode ? "/images/dw-logo-black.webp" : "/images/dw-logo-white.webp"} 
                      alt={COMPANY.legalName} 
                      className="h-9 object-contain" 
                      onError={(e) => {
                         e.currentTarget.src = "/images/dw-logo-black.webp";
                         e.currentTarget.style.filter = isLightMode ? "none" : "brightness(0) invert(1)";
                      }}
                    />
                    <span className={`font-semibold ${isLightMode ? "text-slate-800" : "text-slate-100"}`}>
                      {COMPANY.brandName}
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-full border p-2 transition-colors ${
                      isLightMode
                        ? "border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                        : "border-white/10 text-slate-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive =
                      item.href === "/"
                        ? location.pathname === "/"
                        : location.pathname === item.href;
                    
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className={`block rounded-2xl border px-4 py-3 text-base font-medium transition-colors ${
                            isActive
                              ? isLightMode 
                                ? "border-brand/20 bg-brand/5 text-brand"
                                : "border-white/15 bg-white/10 text-white"
                              : isLightMode
                                ? "border-transparent text-slate-600 hover:bg-slate-50 hover:text-brand"
                                : "border-transparent text-slate-200 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`mt-auto pt-8 border-t ${isLightMode ? "border-slate-100" : "border-white/10"}`}
                >
                  <Link
                    to="/contato"
                    onClick={() => setIsMenuOpen(false)}
                    className="mb-6 inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand2"
                  >
                    {t('nav.cta')}
                  </Link>
                  <h3 className={`mb-4 text-sm font-semibold uppercase tracking-wide ${isLightMode ? "text-slate-500" : "text-slate-400"}`}>
                    {t('nav.contact')}
                  </h3>
                  <div className="space-y-3">
                    <a href="tel:+552835242288" className={`flex items-center space-x-3 transition-colors ${isLightMode ? "text-slate-600 hover:text-brand" : "text-slate-200 hover:text-white"}`}>
                      <Phone className="h-4 w-4" />
                      <span>+55 28 3524-2288</span>
                    </a>
                    <a href={`mailto:${COMPANY.primaryEmails.commercial}`} className={`flex items-center space-x-3 transition-colors ${isLightMode ? "text-slate-600 hover:text-brand" : "text-slate-200 hover:text-white"}`}>
                      <Mail className="h-4 w-4" />
                      <span>{COMPANY.primaryEmails.commercial}</span>
                    </a>
                    <div className={`flex items-center space-x-3 ${isLightMode ? "text-slate-500" : "text-slate-300"}`}>
                      <MapPin className="h-4 w-4" />
                      <span>Cachoeiro de Itapemirim - ES</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
