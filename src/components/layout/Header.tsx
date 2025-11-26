import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useTranslation, Language } from "@/contexts/TranslationContext";
// import DwLogo from "@/assets/dw-logo.svg"; // Descomente quando tiver a logo real
// import LogoPlaceholder from "@/assets/logo-placeholder.svg"; // Placeholder removido - usando imagem real

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useTranslation();

  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.serraria'), href: "/serraria" },
    { name: t('nav.chapas'), href: "/chapas" },
    { name: t('nav.recortado'), href: "/recortado" },
    { name: t('nav.catalog'), href: "/catalogo" },
    { name: t('nav.contact'), href: "/contato" },
  ];

  const languages = [
    { code: 'pt', name: 'PT', flag: '🇧🇷' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'es', name: 'ES', flag: '🇪🇸' }
  ];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsLangMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/dw-logo-black.png" alt="DW Granitos" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Globe size={16} />
                <span>{languages.find(lang => lang.code === language)?.flag} {languages.find(lang => lang.code === language)?.name}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code as Language)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${
                        language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-slate-700'
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Language Selector Mobile */}
              <div className="border-t pt-2 mt-2">
                <p className="px-3 py-2 text-sm font-medium text-slate-500">Idioma / Language / Idioma</p>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageChange(lang.code as Language);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                      language === lang.code
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}