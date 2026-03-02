import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import { useUIStore } from "@/stores/uiStore";
import { useScrollStore } from "@/stores/uiStore";
import { 
  navVariants, 
  menuItemVariants, 
  mobileMenuVariants,
  glassmorphismVariants,
  hoverScaleVariants 
} from "@/utils/animations";

export default function ModernNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, language, setLanguage } = useTranslation();
  const { isMenuOpen, setIsMenuOpen } = useUIStore();
  const { scrollY } = useScrollStore();
  const location = useLocation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: t('nav.home'), href: "/" },
    { id: "serraria", label: t('sectors.serraria.title'), href: "/serraria" },
    { id: "chapas", label: t('sectors.chapas.title'), href: "/chapas" },
    { id: "recortado", label: t('sectors.recortado.title'), href: "/recortado" },
    { id: "catalogo", label: t('nav.catalog'), href: "/catalogo" },
    { id: "sobre", label: t('nav.about'), href: "/sobre" },
    { id: "contato", label: t('nav.contact'), href: "/contato" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Detectar seção ativa baseada no scroll
    const sections = ["home", "catalogo", "sobre", "contato"];
    const sectionElements = sections.map(id => 
      document.getElementById(id) || document.querySelector(`[data-section="${id}"]`)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-section") || "home");
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
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

  // Determina se o texto deve ser branco (quando não scrollado e em cima de hero escuro)
  const isTransparent = !isScrolled;
  
  // Classe de cor do texto baseada no estado do scroll
  const getTextColor = (isActive: boolean) => {
    if (isActive) return "text-brand";
    return isTransparent ? "text-white hover:text-brandLight" : "text-slate-600 hover:text-brand";
  };

  const logoSrc = isTransparent ? "/images/dw-logo-white.webp" : "/images/dw-logo-black.webp";

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial="hidden"
        animate={isScrolled ? "scrolled" : "visible"}
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-4 bg-white/90 backdrop-blur-lg shadow-sm" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              variants={hoverScaleVariants}
              whileHover="hover"
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center space-x-3">
                <motion.img
                  src={logoSrc}
                  alt="DW Granitos"
                  className={`transition-all duration-300 object-contain ${
                    isScrolled ? "h-10" : "h-12"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onError={(e) => {
                     // Fallback se a logo branca não existir, usa a preta e inverte cores via css se necessário ou mantém original
                     e.currentTarget.src = "/images/dw-logo-black.webp";
                     if (isTransparent) {
                        e.currentTarget.style.filter = "brightness(0) invert(1)";
                     } else {
                        e.currentTarget.style.filter = "none";
                     }
                  }}
                />
              </Link>
            </motion.div>

            {/* Navigation Items */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const isHomePage = location.pathname === "/";
                const isActive = (isHomePage && activeSection === item.id) || (location.pathname === item.href && item.href !== "/");
                
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
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${getTextColor(isActive)}`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
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
                  className={`flex items-center space-x-1 font-medium transition-colors ${
                    isTransparent ? "text-white hover:text-brandLight" : "text-slate-600 hover:text-brand"
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
                      className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[80px]"
                    >
                      {(['pt', 'en', 'es'] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setLanguage(lang);
                            setLangMenuOpen(false);
                          }}
                          className="block w-full text-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand uppercase font-medium"
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
                  className="group relative inline-flex items-center px-6 py-3 bg-brand text-white font-semibold rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  <motion.div
                    className="absolute inset-0 bg-brand2 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"
                    initial={false}
                  />
                  <span className="relative z-10 flex items-center">
                    {t('hero.cta.secondary')}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isTransparent ? "text-white hover:bg-white/10" : "text-slate-600 hover:text-brand hover:bg-slate-100"
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

        {/* Glassmorphism Background - already handled by parent nav class but keeping for structure if needed */}
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="lg:hidden fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
                    <img src="/images/dw-logo-black.webp" alt="DW Granitos" className="h-10" />
                    <span className="font-bold text-slate-800">DW Granitos</span>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-600 hover:text-brand hover:bg-slate-100 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                          location.pathname === item.href
                            ? "bg-brand text-white"
                            : "text-slate-700 hover:bg-slate-100 hover:text-brand"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-slate-200"
                >
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                    {t('nav.contact')}
                  </h3>
                  <div className="space-y-3">
                    <a href="tel:+5528999057492" className="flex items-center space-x-3 text-slate-700 hover:text-brand transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>(28) 99905-7492</span>
                    </a>
                    <a href="mailto:contato@dwgranitos.com.br" className="flex items-center space-x-3 text-slate-700 hover:text-brand transition-colors">
                      <Mail className="h-4 w-4" />
                      <span>contato@dwgranitos.com.br</span>
                    </a>
                    <div className="flex items-center space-x-3 text-slate-700">
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
