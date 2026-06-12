import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "@/contexts/i18nContext";
import { COMPANY } from "@/data/company";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

const DEFAULT_IMAGE = `${COMPANY.siteUrl}${COMPANY.ogImagePath}`;

function upsertMeta(
  selector: string,
  attributes: Record<string, string>,
  content: string,
) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      element?.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  structuredData,
}: SeoProps) {
  const location = useLocation();
  const { language } = useTranslation();

  useEffect(() => {
    const currentPath = path ?? location.pathname;
    const canonicalUrl = `${COMPANY.siteUrl}${currentPath}`;
    const hasBrand = /dw granitos/i.test(title) || title.includes(COMPANY.brandName);
    const fullTitle = hasBrand ? title : `${title} | ${COMPANY.brandName}`;

    document.title = fullTitle;
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;

    upsertMeta('meta[name="description"]', { name: "description" }, description);
    upsertMeta('meta[name="author"]', { name: "author" }, COMPANY.legalName);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, fullTitle);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, description);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, type);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, image);
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, COMPANY.legalName);
    upsertMeta('meta[property="og:locale"]', { property: "og:locale" }, language === "pt" ? "pt_BR" : language === "en" ? "en_US" : "es_ES");
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, fullTitle);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, description);
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, image);
    upsertLink("canonical", canonicalUrl);

    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: COMPANY.legalName,
      alternateName: COMPANY.brandName,
      taxID: COMPANY.taxId,
      url: COMPANY.siteUrl,
      logo: `${COMPANY.siteUrl}${COMPANY.logoPath}`,
      image,
      description: COMPANY.description,
      telephone: COMPANY.phones,
      email: COMPANY.emails,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address.streetAddress,
        addressLocality: COMPANY.address.addressLocality,
        addressRegion: COMPANY.address.addressRegion,
        addressCountry: COMPANY.address.addressCountry,
      },
      areaServed: COMPANY.serviceArea,
      openingHours: COMPANY.hours,
      sameAs: [COMPANY.social.instagram, COMPANY.social.facebook],
    };

    const scriptId = "dw-structured-data";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const payload = structuredData
      ? Array.isArray(structuredData)
        ? [defaultStructuredData, ...structuredData]
        : [defaultStructuredData, structuredData]
      : [defaultStructuredData];

    script.textContent = JSON.stringify(payload);
  }, [description, image, language, location.pathname, path, structuredData, title, type]);

  return null;
}
