import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '@/contexts/i18nContext';
import { useUIStore } from '@/stores/uiStore';
import { cn } from '@/lib/utils';
import { 
  fadeInUp, 
  slideInLeft, 
  mobileMenuVariants,
  backdropVariants
} from '@/utils/animations';

export function ModernHeader() {
  const { t } = useTranslation();
  const { isMenuOpen, toggleMenu } = useUIStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/serraria', label: t('nav.serraria') },
    { href: '/chapas', label: t('nav.chapas') },
    { href: '/recortado', label: t('nav.recortado') },
    { href: '/catalogo', label: t('nav.catalog') },
    { href: '/contato', label: t('nav.contact') }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-white/20" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="flex items-center"
            >
              <a href="/" className="text-2xl font-bold text-brand">
                DW Granitos
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              variants={slideInLeft}
              initial="initial"
              animate="animate"
              className="hidden md:flex items-center space-x-8"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-brand font-medium transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </motion.nav>

            {/* Mobile Menu Button */}
            <motion.button
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              variants={backdropVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={toggleMenu}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold text-brand">Menu</span>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <nav className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="block p-4 text-lg font-medium text-slate-700 hover:text-brand hover:bg-slate-50 rounded-lg transition-all duration-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={toggleMenu}
                      whileHover={{ x: 5 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
