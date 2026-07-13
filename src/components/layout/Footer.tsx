import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import { Link } from "react-router-dom";
import { COMPANY } from "@/data/company";

export default function Footer() {
  const { t } = useTranslation();
  
  // Navigation links in same order as header
  const navigationLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/sobre' },
    { name: t('nav.serraria'), path: '/serraria' },
    { name: t('nav.chapas'), path: '/chapas' },
    { name: t('nav.recortado'), path: '/recortado' },
    { name: t('nav.catalog'), path: '/catalogo' },
    { name: t('nav.contact'), path: '/contato' }
  ];

  const contactInfo = [
    { icon: Phone, text: COMPANY.phones[0], href: "tel:+552835242288" },
    { icon: Phone, text: COMPANY.phones[1], href: "tel:+552835241688" },
    { icon: Mail, text: COMPANY.primaryEmails.sales, href: `mailto:${COMPANY.primaryEmails.sales}` }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/dw_rochas/", 
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      name: "Instagram"
    },
    { 
      icon: Facebook, 
      href: COMPANY.social.facebook, 
      color: "bg-blue-600",
      name: "Facebook"
    },
    { 
      icon: MessageCircle, 
      href: "https://wa.me/5528999238885", 
      color: "bg-green-600",
      name: "WhatsApp"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand rounded-full filter blur-[100px] opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top Section: Brand & Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-white/10 pb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <img src="/images/dw-logo-white.webp" alt={COMPANY.legalName} className="h-20 w-auto mb-4 mx-auto md:mx-0 brightness-0 invert" />
            <p className="text-slate-400 max-w-md">{t('footer.tagline')}</p>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/5 hover:bg-brand transition-all duration-300 group`}
                  title={social.name}
                >
                  <IconComponent className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-brand pl-3">{t('footer.navigation.title')}</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-brand transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-brand mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-brand pl-3">{t('footer.contact.title')}</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <li key={index}>
                    <a
                      href={info.href}
                      className="flex items-start space-x-3 text-slate-400 hover:text-white transition-colors group"
                    >
                      <IconComponent className="h-5 w-5 text-brand mt-0.5 group-hover:animate-bounce" />
                      <span className="text-sm leading-relaxed">{info.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Address */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-brand pl-3">{t('footer.location.title')}</h4>
            <div className="flex items-start space-x-3 text-slate-400">
              <MapPin className="h-6 w-6 text-brand flex-shrink-0 mt-1" />
              <p className="text-sm leading-relaxed">
                {t('footer.address')}
              </p>
            </div>
            <div className="mt-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9!2d-41.0555197!3d-20.7651504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb96ff915e9163b%3A0x1a7a93d530a6f709!2sDW%20Granitos%20%26%20Marmores%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1700000000000" 
                width="100%" 
                height="120" 
                style={{border:0, borderRadius: '8px', filter: 'grayscale(100%) invert(90%)'}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-brand pl-3">{t('footer.hours.title')}</h4>
            <div className="space-y-3 text-slate-400 text-sm">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>{t('footer.hours.monThu')}</span>
                <span className="text-white font-medium">07:00 - 17:00</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>{t('footer.hours.fri')}</span>
                <span className="text-white font-medium">07:00 - 16:00</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>{t('footer.hours.weekend')}</span>
                <span className="text-brand">{t('footer.hours.closed')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p className="mb-4 md:mb-0">{t('footer.copyright')}</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacidade" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to="/termos" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
            <span className="flex items-center gap-1">
              {t('footer.madeBy')} <span className="text-brand font-bold">Nexor</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
