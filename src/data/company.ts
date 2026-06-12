export const COMPANY = {
  legalName: "DW Granitos & Mármores LTDA",
  brandName: "DW Granitos & Mármores",
  shortName: "DW Granitos",
  taxId: "03.693.594/0001-51",
  siteUrl: "https://www.dwgranitos.com.br",
  description:
    "Empresa de rochas ornamentais em Cachoeiro de Itapemirim - ES, com atuação em serraria, chapas, recortados sob medida e soluções em granitos, mármores, quartzitos e materiais especiais.",
  address: {
    streetAddress: "Rua Antonio Bazoni, 555",
    neighborhood: "Vargem Grande do Soturno",
    addressLocality: "Cachoeiro de Itapemirim",
    addressRegion: "ES",
    addressCountry: "BR",
  },
  phones: [
    "+55 28 3524-2288",
    "+55 28 3524-1688",
  ],
  whatsapp: {
    commercial: "+55 28 99923-8885",
    recortado: "+55 28 99951-1643",
    chapas: "+55 28 99985-1446",
    serraria: "+55 28 99905-7492",
    financial: "+55 28 99946-6989",
  },
  whatsappNumbers: [
    "+55 28 99985-1446",
    "+55 28 99951-1643",
    "+55 28 99905-7492",
    "+55 28 99946-6989",
    "+55 28 99923-8885",
  ],
  emails: [
    "financeiro@dwgranitos.com.br",
    "comercial@dwgranitos.com.br",
    "vendas@dwgranitos.com.br",
  ],
  primaryEmails: {
    commercial: "comercial@dwgranitos.com.br",
    sales: "vendas@dwgranitos.com.br",
    financial: "financeiro@dwgranitos.com.br",
  },
  social: {
    instagram: "https://www.instagram.com/dw_rochas/",
    facebook: "https://www.facebook.com/dw.granitos/",
  },
  hours: [
    "Mo-Th 07:00-17:00",
    "Fr 07:00-16:00",
  ],
  serviceArea: [
    "Cachoeiro de Itapemirim - ES",
    "Espírito Santo",
    "Brasil",
    "América do Sul",
  ],
  logoPath: "/images/dw-logo-black.webp",
  ogImagePath: "/images/drone-empresa.webp",
};

export type WhatsAppIntent = {
  id: string;
  label: string;
  description: string;
  number: string;
  message: string;
};

export function normalizePhoneNumber(phone: string) {
  return phone.replace(/\D/g, "");
}

export function buildWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${normalizePhoneNumber(phone)}?text=${encodeURIComponent(message)}`;
}
