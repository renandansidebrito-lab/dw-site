import type { Language } from "@/types/i18n";

export const chapasUi: Record<Language, {
  heroAlt: string;
  materialsTitle: string;
  materialsSubtitle: string;
  materialTypes: { title: string; desc: string }[];
  finishesTitle: string;
  finishesSubtitle: string;
  indication: string;
  finishes: { title: string; desc: string; use: string }[];
  choiceTitle: string;
  choiceText: string;
  applications: string[];
  helpTitle: string;
  helpText: string;
  talkSales: string;
  featuredTitle: string;
  featuredText: string;
  viewCatalog: string;
  requestQuote: string;
  qualityAlt: string;
  availableSlabs: string;
  requestPhotos: string;
}> = {
  pt: {
    heroAlt: "Chapas de rochas ornamentais",
    materialsTitle: "Tipos de Materiais",
    materialsSubtitle: "Trabalhamos com uma seleção criteriosa de rochas para atender diferentes necessidades do seu projeto.",
    materialTypes: [
      { title: "Granitos", desc: "Alta resistência e durabilidade, ideais para áreas de intenso tráfego e bancadas." },
      { title: "Mármores", desc: "Elegância clássica e veios únicos, perfeitos para ambientes internos e nobres." },
      { title: "Quartzitos", desc: "Beleza de mármore com resistência de granito. Uma escolha premium e versátil." },
      { title: "Exóticos", desc: "Padrões exclusivos e cores raras para projetos que buscam exclusividade absoluta." },
    ],
    finishesTitle: "Acabamentos Disponíveis",
    finishesSubtitle: "Oferecemos diferentes tratamentos de superfície para valorizar a rocha e adequá-la perfeitamente ao uso pretendido.",
    indication: "Indicação",
    finishes: [
      { title: "Polido", desc: "Superfície lisa e brilhante que destaca a cor e os veios da pedra.", use: "Áreas internas, bancadas e pisos secos." },
      { title: "Levigado", desc: "Superfície lisa, mas sem brilho (fosca). Mantém a cor natural.", use: "Áreas internas e externas cobertas." },
      { title: "Escovado", desc: "Textura levemente rugosa e acetinada, muito agradável ao toque.", use: "Áreas externas, bordas de piscina e pisos." },
      { title: "Flameado", desc: "Aspecto rústico e antiderrapante, obtido por tratamento térmico.", use: "Áreas externas descobertas e rampas." },
      { title: "Resinagem", desc: "Tratamento para fechamento de microporos e reforço estrutural.", use: "Aplicado na fábrica em materiais para maior resistência." },
    ],
    choiceTitle: "Como escolher a chapa ideal?",
    choiceText: "A escolha da pedra natural ideal depende de onde ela será aplicada. Diferentes ambientes exigem características específicas de resistência, porosidade e acabamento.",
    applications: ["Bancadas", "Pisos", "Fachadas", "Escadas", "Áreas Internas e Externas"],
    helpTitle: "Dúvidas na escolha?",
    helpText: "Nossa equipe comercial é especializada em orientar a melhor escolha de material e acabamento para a sua obra.",
    talkSales: "Falar com o Comercial",
    featuredTitle: "Materiais em Destaque",
    featuredText: "Confira algumas opções selecionadas do nosso catálogo de granitos, mármores e quartzitos para chapas e projetos sob medida.",
    viewCatalog: "Ver catálogo completo",
    requestQuote: "Solicitar orçamento",
    qualityAlt: "Processo de controle de qualidade",
    availableSlabs: "Consultar chapas disponíveis",
    requestPhotos: "Solicitar fotos de materiais",
  },
  en: {
    heroAlt: "Natural stone slabs",
    materialsTitle: "Material Types",
    materialsSubtitle: "We work with a carefully selected range of stones to meet the different needs of your project.",
    materialTypes: [
      { title: "Granites", desc: "High strength and durability, ideal for countertops and high-traffic areas." },
      { title: "Marbles", desc: "Classic elegance and unique veining, perfect for refined indoor spaces." },
      { title: "Quartzites", desc: "The beauty of marble with the strength of granite. A premium, versatile choice." },
      { title: "Exotic Stones", desc: "Exclusive patterns and rare colors for projects seeking complete uniqueness." },
    ],
    finishesTitle: "Available Finishes",
    finishesSubtitle: "We offer different surface treatments to enhance the stone and perfectly match its intended use.",
    indication: "Recommended for",
    finishes: [
      { title: "Polished", desc: "A smooth, glossy surface that highlights the stone's color and veining.", use: "Indoor areas, countertops and dry floors." },
      { title: "Honed", desc: "A smooth, matte surface that preserves the stone's natural color.", use: "Indoor and covered outdoor areas." },
      { title: "Brushed", desc: "A lightly textured, satin surface that is pleasant to the touch.", use: "Outdoor areas, pool surrounds and floors." },
      { title: "Flamed", desc: "A rustic, slip-resistant finish created through thermal treatment.", use: "Uncovered outdoor areas and ramps." },
      { title: "Resin-treated", desc: "Treatment that seals micropores and improves structural strength.", use: "Factory-applied to materials that require greater resistance." },
    ],
    choiceTitle: "How do you choose the ideal slab?",
    choiceText: "The ideal natural stone depends on where it will be installed. Each environment requires specific levels of strength, porosity and finish.",
    applications: ["Countertops", "Floors", "Facades", "Stairs", "Indoor and Outdoor Areas"],
    helpTitle: "Need help choosing?",
    helpText: "Our sales team can guide you toward the best material and finish for your project.",
    talkSales: "Talk to Sales",
    featuredTitle: "Featured Materials",
    featuredText: "Explore a selection of granites, marbles and quartzites from our catalog for slabs and custom projects.",
    viewCatalog: "View full catalog",
    requestQuote: "Request a quote",
    qualityAlt: "Quality control process",
    availableSlabs: "View available slabs",
    requestPhotos: "Request material photos",
  },
  es: {
    heroAlt: "Láminas de rocas ornamentales",
    materialsTitle: "Tipos de Materiales",
    materialsSubtitle: "Trabajamos con una selección rigurosa de rocas para atender las distintas necesidades de su proyecto.",
    materialTypes: [
      { title: "Granitos", desc: "Alta resistencia y durabilidad, ideales para encimeras y áreas de tránsito intenso." },
      { title: "Mármoles", desc: "Elegancia clásica y vetas únicas, perfectos para ambientes interiores refinados." },
      { title: "Cuarcitas", desc: "La belleza del mármol con la resistencia del granito. Una opción premium y versátil." },
      { title: "Exóticos", desc: "Patrones exclusivos y colores raros para proyectos que buscan singularidad absoluta." },
    ],
    finishesTitle: "Acabados Disponibles",
    finishesSubtitle: "Ofrecemos distintos tratamientos de superficie para realzar la roca y adaptarla perfectamente al uso previsto.",
    indication: "Indicación",
    finishes: [
      { title: "Pulido", desc: "Superficie lisa y brillante que destaca el color y las vetas de la piedra.", use: "Áreas interiores, encimeras y pisos secos." },
      { title: "Apomazado", desc: "Superficie lisa y mate que conserva el color natural.", use: "Áreas interiores y exteriores cubiertas." },
      { title: "Cepillado", desc: "Textura ligeramente rugosa y satinada, muy agradable al tacto.", use: "Áreas exteriores, bordes de piscina y pisos." },
      { title: "Flameado", desc: "Aspecto rústico y antideslizante obtenido mediante tratamiento térmico.", use: "Áreas exteriores descubiertas y rampas." },
      { title: "Resinado", desc: "Tratamiento que cierra microporos y refuerza la estructura.", use: "Aplicado en fábrica a materiales que requieren mayor resistencia." },
    ],
    choiceTitle: "¿Cómo elegir la lámina ideal?",
    choiceText: "La piedra natural ideal depende del lugar donde será instalada. Cada ambiente exige niveles específicos de resistencia, porosidad y acabado.",
    applications: ["Encimeras", "Pisos", "Fachadas", "Escaleras", "Áreas Interiores y Exteriores"],
    helpTitle: "¿Necesita ayuda para elegir?",
    helpText: "Nuestro equipo comercial puede orientarle sobre el mejor material y acabado para su proyecto.",
    talkSales: "Hablar con Ventas",
    featuredTitle: "Materiales Destacados",
    featuredText: "Conozca una selección de granitos, mármoles y cuarcitas de nuestro catálogo para láminas y proyectos a medida.",
    viewCatalog: "Ver catálogo completo",
    requestQuote: "Solicitar presupuesto",
    qualityAlt: "Proceso de control de calidad",
    availableSlabs: "Consultar láminas disponibles",
    requestPhotos: "Solicitar fotos de materiales",
  },
};

export const recortadoUi: Record<Language, {
  heroAlt: string;
  customSinkTitle: string;
  customSinkDescription: string;
  producedTitle: string;
  producedText: string;
  products: string[];
  applicationsTitle: string;
  applicationsText: string;
  applications: string[];
  quoteTitle: string;
  quoteText: string;
  quoteItems: string[];
  readyTitle: string;
  readyText: string;
  requestQuote: string;
}> = {
  pt: {
    heroAlt: "Produção de recortados em rochas ornamentais",
    customSinkTitle: "Pia Personalizada",
    customSinkDescription: "Corte e acabamento refinado",
    producedTitle: "O que produzimos em Recortados?",
    producedText: "Peças sob medida para transformar o seu projeto arquitetônico em realidade, com acabamento impecável.",
    products: ["Bancadas", "Balcões", "Soleiras", "Peitoris", "Lavatórios", "Escadas", "Peças sob medida"],
    applicationsTitle: "Principais Aplicações",
    applicationsText: "Nossos recortes são indicados para os mais diversos ambientes e necessidades.",
    applications: ["Cozinha", "Banheiro", "Área Gourmet", "Comercial", "Escadas", "Soleiras/Peitoris"],
    quoteTitle: "O que enviar para orçamento?",
    quoteText: "Para que nossa equipe comercial retorne o seu orçamento de forma mais ágil e precisa, tenha em mãos os seguintes itens:",
    quoteItems: ["Medidas aproximadas", "Tipo de material desejado", "Projeto, desenho ou rascunho", "Fotos do local", "Quantidade de cubas/furos", "Espelhos, saias ou guarnições", "Cidade/local de entrega"],
    readyTitle: "Tudo pronto?",
    readyText: "Envie suas medidas agora mesmo pelo WhatsApp ou através do nosso formulário de contato.",
    requestQuote: "Solicitar orçamento",
  },
  en: {
    heroAlt: "Custom-cut natural stone production",
    customSinkTitle: "Custom Sink",
    customSinkDescription: "Refined cutting and finishing",
    producedTitle: "What do we produce in our Custom-Cut division?",
    producedText: "Made-to-measure pieces that bring your architectural project to life with impeccable finishing.",
    products: ["Countertops", "Counters", "Thresholds", "Window Sills", "Washbasins", "Stairs", "Custom Pieces"],
    applicationsTitle: "Main Applications",
    applicationsText: "Our custom-cut pieces are suitable for a wide range of spaces and requirements.",
    applications: ["Kitchen", "Bathroom", "Gourmet Area", "Commercial", "Stairs", "Thresholds/Sills"],
    quoteTitle: "What should you send for a quote?",
    quoteText: "To help our sales team provide a faster and more accurate quote, please have the following information ready:",
    quoteItems: ["Approximate measurements", "Desired material", "Project, drawing or sketch", "Photos of the site", "Number of sinks/openings", "Backsplashes, aprons or trims", "Delivery city/location"],
    readyTitle: "Everything ready?",
    readyText: "Send your measurements through WhatsApp or our contact form.",
    requestQuote: "Request a quote",
  },
  es: {
    heroAlt: "Producción de piezas a medida en rocas ornamentales",
    customSinkTitle: "Fregadero Personalizado",
    customSinkDescription: "Corte y acabado refinado",
    producedTitle: "¿Qué producimos en Recortados?",
    producedText: "Piezas a medida que convierten su proyecto arquitectónico en realidad con un acabado impecable.",
    products: ["Encimeras", "Mostradores", "Umbrales", "Alféizares", "Lavabos", "Escaleras", "Piezas a Medida"],
    applicationsTitle: "Principales Aplicaciones",
    applicationsText: "Nuestros recortes son adecuados para los más diversos ambientes y necesidades.",
    applications: ["Cocina", "Baño", "Área Gourmet", "Comercial", "Escaleras", "Umbrales/Alféizares"],
    quoteTitle: "¿Qué debe enviar para solicitar un presupuesto?",
    quoteText: "Para que nuestro equipo comercial prepare un presupuesto más rápido y preciso, tenga a mano la siguiente información:",
    quoteItems: ["Medidas aproximadas", "Material deseado", "Proyecto, dibujo o boceto", "Fotos del lugar", "Cantidad de cubas/perforaciones", "Respaldos, faldones o molduras", "Ciudad/lugar de entrega"],
    readyTitle: "¿Todo listo?",
    readyText: "Envíe sus medidas por WhatsApp o mediante nuestro formulario de contacto.",
    requestQuote: "Solicitar presupuesto",
  },
};

export const catalogUi: Record<Language, {
  logoAlt: string;
  tapDetails: string;
  viewDetails: string;
  recommended: string;
  heroAlt: string;
  title: string;
  subtitle: string;
  materialCount: string;
  filter: string;
  clear: string;
  stoneType: string;
  color: string;
  features: string;
  showResults: string;
  showing: string;
}> = {
  pt: {
    logoAlt: "Logotipo da DW",
    tapDetails: "Toque para detalhes",
    viewDetails: "Ver detalhes",
    recommended: "Recomendado para",
    heroAlt: "Galeria de materiais em rochas ornamentais",
    title: "Galeria de Materiais",
    subtitle: "Explore granitos, mármores, quartzitos e materiais especiais para chapas, bancadas e projetos sob medida.",
    materialCount: "materiais",
    filter: "Filtrar materiais",
    clear: "Limpar",
    stoneType: "Tipo de Pedra",
    color: "Cor",
    features: "Características",
    showResults: "Ver Resultados",
    showing: "Mostrando",
  },
  en: {
    logoAlt: "DW logo",
    tapDetails: "Tap for details",
    viewDetails: "View details",
    recommended: "Recommended for",
    heroAlt: "Natural stone materials gallery",
    title: "Materials Gallery",
    subtitle: "Explore granites, marbles, quartzites and specialty materials for slabs, countertops and custom projects.",
    materialCount: "materials",
    filter: "Filter materials",
    clear: "Clear",
    stoneType: "Stone Type",
    color: "Color",
    features: "Features",
    showResults: "View Results",
    showing: "Showing",
  },
  es: {
    logoAlt: "Logotipo de DW",
    tapDetails: "Toque para ver detalles",
    viewDetails: "Ver detalles",
    recommended: "Recomendado para",
    heroAlt: "Galería de materiales en rocas ornamentales",
    title: "Galería de Materiales",
    subtitle: "Explore granitos, mármoles, cuarcitas y materiales especiales para láminas, encimeras y proyectos a medida.",
    materialCount: "materiales",
    filter: "Filtrar materiales",
    clear: "Limpiar",
    stoneType: "Tipo de Piedra",
    color: "Color",
    features: "Características",
    showResults: "Ver Resultados",
    showing: "Mostrando",
  },
};

export const contactUi: Record<Language, {
  heroTitle: string;
  heroText: string;
  formTitle: string;
  formText: string;
  submit: string;
  materialSubject: string;
  applicationSubject: string;
  greeting: string;
  fields: { name: string; phone: string; email: string; location: string; subject: string; message: string };
  redirecting: string;
  opened: string;
  checklistTitle: string;
  checklistText: string;
  checklistItems: string[];
  immediateTitle: string;
  immediateText: string;
  consultantMessage: string;
  callWhatsApp: string;
  mapTitle: string;
}> = {
  pt: {
    heroTitle: "Fale com a DW Granitos & Mármores",
    heroText: "Envie suas medidas, projeto, fotos ou dúvidas. Nossa equipe irá orientar você na escolha do material, acabamento e melhor solução para o seu projeto.",
    formTitle: "Envie sua mensagem",
    formText: "Preencha os campos abaixo e retornaremos o mais breve possível.",
    submit: "Enviar pelo WhatsApp",
    materialSubject: "Orçamento de material",
    applicationSubject: "Orçamento para aplicação",
    greeting: "Olá, vim pelo site da DW Granitos.",
    fields: { name: "Nome", phone: "Telefone", email: "E-mail", location: "Local", subject: "Assunto", message: "Mensagem" },
    redirecting: "Redirecionando para o WhatsApp...",
    opened: "Abrimos o WhatsApp com sua mensagem pronta. Confira e envie por lá.",
    checklistTitle: "Checklist para Orçamento",
    checklistText: "Para agilizarmos seu atendimento, se possível, tenha em mãos as seguintes informações antes de falar com nosso comercial:",
    checklistItems: ["Medidas aproximadas do ambiente", "Nome do material desejado", "Fotos do local ou planta do projeto", "Detalhes como quantidade de cubas, furos e acabamento das bordas"],
    immediateTitle: "Atendimento Imediato",
    immediateText: "Se preferir, clique no botão abaixo para falar agora mesmo com um consultor.",
    consultantMessage: "Olá! Gostaria de falar com um consultor da DW Granitos.",
    callWhatsApp: "Chamar no WhatsApp",
    mapTitle: "DW Granitos & Mármores LTDA - Localização",
  },
  en: {
    heroTitle: "Contact DW Granitos & Mármores",
    heroText: "Send your measurements, project files, photos or questions. Our team will help you choose the best material, finish and solution for your project.",
    formTitle: "Send us a message",
    formText: "Complete the fields below and we will get back to you as soon as possible.",
    submit: "Send via WhatsApp",
    materialSubject: "Material quotation",
    applicationSubject: "Application quotation",
    greeting: "Hello, I came from the DW Granitos website.",
    fields: { name: "Name", phone: "Phone", email: "Email", location: "Location", subject: "Subject", message: "Message" },
    redirecting: "Opening WhatsApp...",
    opened: "We opened WhatsApp with your message ready. Review it and send it there.",
    checklistTitle: "Quotation Checklist",
    checklistText: "To speed up your service, please have the following information ready before contacting our sales team:",
    checklistItems: ["Approximate measurements", "Name of the desired material", "Photos of the site or project plan", "Details such as the number of sinks, openings and edge finish"],
    immediateTitle: "Immediate Service",
    immediateText: "If you prefer, use the button below to speak with a consultant now.",
    consultantMessage: "Hello! I would like to speak with a DW Granitos consultant.",
    callWhatsApp: "Chat on WhatsApp",
    mapTitle: "DW Granitos & Mármores LTDA - Location",
  },
  es: {
    heroTitle: "Contacte a DW Granitos & Mármores",
    heroText: "Envíe sus medidas, proyecto, fotos o preguntas. Nuestro equipo le ayudará a elegir el mejor material, acabado y solución para su proyecto.",
    formTitle: "Envíenos un mensaje",
    formText: "Complete los campos y nos pondremos en contacto lo antes posible.",
    submit: "Enviar por WhatsApp",
    materialSubject: "Presupuesto de material",
    applicationSubject: "Presupuesto para aplicación",
    greeting: "Hola, llegué desde el sitio web de DW Granitos.",
    fields: { name: "Nombre", phone: "Teléfono", email: "Correo electrónico", location: "Ubicación", subject: "Asunto", message: "Mensaje" },
    redirecting: "Abriendo WhatsApp...",
    opened: "Abrimos WhatsApp con su mensaje listo. Revíselo y envíelo allí.",
    checklistTitle: "Lista para el Presupuesto",
    checklistText: "Para agilizar la atención, tenga a mano la siguiente información antes de hablar con nuestro equipo comercial:",
    checklistItems: ["Medidas aproximadas del ambiente", "Nombre del material deseado", "Fotos del lugar o plano del proyecto", "Detalles como cantidad de cubas, perforaciones y acabado de los bordes"],
    immediateTitle: "Atención Inmediata",
    immediateText: "Si lo prefiere, use el botón para hablar ahora con un asesor.",
    consultantMessage: "¡Hola! Me gustaría hablar con un asesor de DW Granitos.",
    callWhatsApp: "Hablar por WhatsApp",
    mapTitle: "DW Granitos & Mármores LTDA - Ubicación",
  },
};
