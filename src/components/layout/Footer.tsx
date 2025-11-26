import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, Building2, Hammer, Package, Users, Star, Award, Shield } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  
  // Navigation links in same order as header
  const navigationLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.serraria'), path: '/serraria' },
    { name: t('nav.chapas'), path: '/chapas' },
    { name: t('nav.recortado'), path: '/recortado' },
    { name: t('nav.catalog'), path: '/catalogo' },
    { name: t('nav.contact'), path: '/contato' }
  ];

  const contactInfo = [
    { icon: Phone, text: "+55 28 3524-2288", href: "tel:+552835242288" },
    { icon: Phone, text: "+55 28 3524-1688", href: "tel:+552835241688" },
    { icon: Mail, text: "vendas@dwgranitos.com.br", href: "mailto:vendas@dwgranitos.com.br" }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/dw_granitos/", 
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      name: "Instagram"
    },
    { 
      icon: Facebook, 
      href: "https://facebook.com/dwgranitos", 
      color: "bg-blue-600",
      name: "Facebook"
    },
    { 
      icon: MessageCircle, 
      href: "https://wa.me/5528999851446", 
      color: "bg-green-600",
      name: "WhatsApp"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo, CNPJ, Social Icons */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <div className="mb-6">
              <img src="/images/dw-logo-white.png" alt="DW Granitos" className="h-16 w-auto mx-auto lg:mx-0 mb-4" />
            </div>
            
            {/* CNPJ */}
            <div className="mb-6">
              <p className="text-slate-400 text-sm font-mono tracking-wide">
                CNPJ: 12.345.678/0001-90
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg`}
                    title={social.name}
                  >
                    <IconComponent className="h-5 w-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation Links (same order as header) */}
          <div className="text-center lg:text-left">
            <div className="space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-slate-300 hover:text-white transition-colors py-1 px-2 rounded hover:bg-slate-800/30 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Phone Numbers and Sales Email */}
          <div className="text-center lg:text-left">
            <div className="space-y-3 mb-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center justify-center lg:justify-start space-x-2 text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className="w-5 h-5 bg-slate-700 rounded flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="h-2.5 w-2.5" />
                    </div>
                    <span className="text-sm font-medium">{info.text}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 4: Business Hours */}
          <div className="text-center lg:text-left">
            <div className="text-sm text-slate-300 space-y-2">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                <Clock className="h-4 w-4 text-orange-400" />
                <span className="font-medium">{t('footer.hours') || 'Horário de Funcionamento'}</span>
              </div>
              <div className="text-xs lg:text-sm">{t('footer.monday.thursday') || 'Segunda a Quinta:'} 7h - 17h</div>
              <div className="text-xs lg:text-sm">{t('footer.friday') || 'Sexta:'} 7h - 16h</div>
              <div className="text-xs lg:text-sm">{t('footer.weekend') || 'Sábado e Domingo:'} Fechado</div>
            </div>
          </div>
        </div>

        {/* Address Section - Below Columns */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 text-slate-300">
            <MapPin className="h-4 w-4 text-blue-400" />
            <span className="text-sm">{t('footer.address') || 'R. Ângelo Bazoni, 555 - Vargem Grande Do Soturno, Cachoeiro de Itapemirim - ES'}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Copyright - Center */}
          <div className="text-slate-400 text-center order-2 md:order-1">
            <p>&copy; 2025 DW Granitos & Marmores LTDA. {t('footer.rights') || 'Todos os direitos reservados'}.</p>
          </div>
          
          {/* Feito por Nexor - Right */}
          <div className="text-slate-400 text-center md:text-right order-1 md:order-2">
            <span>Feito por Nexor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}