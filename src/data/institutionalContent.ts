import type { Language } from "@/types/i18n";

type SeoEntry = {
  title: string;
  description: string;
};

type ServiceCard = {
  title: string;
  description: string;
  application: string;
  cta: string;
};

type ApplicationCard = {
  title: string;
  description: string;
  highlight: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type LocalizedInstitutionalContent = {
  seo: Record<string, SeoEntry>;
  services: {
    badge: string;
    title: string;
    subtitle: string;
    intro: string;
    cards: ServiceCard[];
    sectorLinksTitle: string;
    sectorLinksSubtitle: string;
    processTitle: string;
    processItems: string[];
  };
  applications: {
    badge: string;
    title: string;
    subtitle: string;
    cards: ApplicationCard[];
    ctaTitle: string;
    ctaText: string;
  };
  materials: {
    badge: string;
    introTitle: string;
    introText: string;
    categories: Record<string, string>;
    finishLabel: string;
    finishValue: string;
    requestButton: string;
    modalCategory: string;
    modalColor: string;
    modalOrigin: string;
    modalFinish: string;
    modalAltPrefix: string;
    faqTitle: string;
    faqSubtitle: string;
    emptyTitle: string;
    emptyDescription: string;
  };
  contact: {
    seoTitle: string;
    seoDescription: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    consentLabel: string;
    phoneRequired: string;
    consentRequired: string;
    prefillMaterial: string;
    prefillApplication: string;
    whatsappTitle: string;
    whatsappSubtitle: string;
  };
  faq: {
    services: FaqItem[];
    materials: FaqItem[];
    contact: FaqItem[];
  };
  whatsappIntents: {
    id: string;
    label: string;
    description: string;
    number: string;
    message: string;
  }[];
};

export const institutionalContent: Record<Language, LocalizedInstitutionalContent> = {
  pt: {
    seo: {
      home: {
        title: "DW Granitos & Mármores | Rochas Ornamentais em Cachoeiro de Itapemirim - ES",
        description:
          "Especialistas em granitos, mármores, quartzitos, chapas e recortados sob medida em Cachoeiro de Itapemirim - ES. Solicite orçamento com a DW Granitos & Mármores LTDA.",
      },
      about: {
        title: "Sobre a DW Granitos & Mármores | Mais de 25 anos em Rochas Ornamentais",
        description:
          "Conheça a trajetória, a estrutura e o compromisso da DW Granitos & Mármores LTDA com qualidade, precisão e atendimento profissional em rochas ornamentais.",
      },
      services: {
        title: "Serviços em Granitos, Mármores, Quartzitos e Recortados | DW Granitos",
        description:
          "Conheça os serviços da DW Granitos & Mármores LTDA em chapas, recortados, bancadas, pisos, fachadas, acabamentos e projetos personalizados.",
      },
      materials: {
        title: "Galeria de Materiais | Granitos, Mármores, Quartzitos e Exóticos",
        description:
          "Explore a galeria de materiais da DW Granitos & Mármores LTDA com granitos, mármores, quartzitos, materiais claros, escuros e opções especiais para seu projeto.",
      },
      contact: {
        title: "Contato DW Granitos | Orçamentos por WhatsApp e Formulário",
        description:
          "Fale com a DW Granitos & Mármores LTDA por WhatsApp ou formulário e solicite orçamento para chapas, recortados, bancadas e projetos em rochas ornamentais.",
      },
      applications: {
        title: "Aplicações em Rochas Ornamentais | Bancadas, Pisos, Fachadas e Mais",
        description:
          "Veja aplicações em granitos, mármores e quartzitos para cozinhas, banheiros, escadas, fachadas, áreas gourmet, lavabos, peitoris e soleiras.",
      },
      serraria: {
        title: "Serraria de Blocos e Chapas | DW Granitos & Mármores",
        description:
          "Serviços de serraria com tecnologia Multi-Fio para corte de blocos em chapas, com precisão, rendimento e suporte para produção própria e terceiros.",
      },
      chapas: {
        title: "Chapas de Granito, Mármore e Quartzito | DW Granitos & Mármores",
        description:
          "Seleção de chapas em granitos, mármores, quartzitos e materiais especiais com qualidade comercial, variedade e suporte técnico da DW Granitos & Mármores.",
      },
      recortado: {
        title: "Recortados Sob Medida | Bancadas, Soleiras, Peitoris e Peças Especiais",
        description:
          "Produção de recortados sob medida com acabamento preciso para bancadas, peitoris, soleiras, pisos, lavabos e projetos personalizados.",
      },
    },
    services: {
      badge: "Serviços Institucionais",
      title: "Soluções em rochas ornamentais para obras residenciais e comerciais",
      subtitle:
        "A DW Granitos & Mármores LTDA reúne serraria, chapas, recortados e acabamento para atender desde fornecimento técnico até peças prontas para instalação.",
      intro:
        "Atendemos construtoras, arquitetos, marmorarias, lojas e clientes finais com foco em prazo, acabamento, padronização visual e suporte comercial em cada etapa do projeto.",
      cards: [
        { title: "Chapas de granitos, mármores, quartzitos e exóticos", description: "Seleção de materiais para diferentes padrões estéticos, especificações técnicas e escalas de fornecimento.", application: "Indicadas para cozinhas, áreas gourmet, revestimentos, lavabos e empreendimentos.", cta: "Solicitar orçamento de chapas" },
        { title: "Recortados sob medida", description: "Produção de peças com medidas definidas em projeto, leitura técnica e acabamento compatível com cada aplicação.", application: "Indicados para bancadas, painéis, nichos, peitoris, soleiras e peças especiais.", cta: "Solicitar orçamento de recortados" },
        { title: "Bancadas", description: "Soluções sob medida com atenção ao desenho, à paginação do material e ao uso do ambiente.", application: "Indicadas para cozinhas, banheiros, lavabos, áreas gourmet e ambientes corporativos.", cta: "Orçar bancadas" },
        { title: "Balcões", description: "Peças com presença visual, resistência e leitura comercial para atendimento, recepção e apoio.", application: "Indicados para lojas, recepções, consultórios, bares e áreas de serviço.", cta: "Orçar balcões" },
        { title: "Soleiras", description: "Peças de transição com corte preciso, padrão visual e acabamento compatível com o piso.", application: "Indicadas para passagens internas, portas de acesso e integração entre ambientes.", cta: "Orçar soleiras" },
        { title: "Peitoris", description: "Execução sob medida para proteção, acabamento e valorização das aberturas.", application: "Indicados para janelas residenciais, comerciais e fachadas.", cta: "Orçar peitoris" },
        { title: "Pisos", description: "Materiais com resistência, fácil manutenção e variedade de tonalidades para uso contínuo.", application: "Indicados para halls, áreas internas, áreas externas cobertas e circulações.", cta: "Orçar pisos" },
        { title: "Fachadas", description: "Fornecimento de materiais com leitura arquitetônica e suporte para especificação.", application: "Indicadas para empreendimentos residenciais, comerciais e corporativos.", cta: "Orçar fachadas" },
        { title: "Acabamentos em rochas ornamentais", description: "Orientação comercial para bordas, cortes, paginação e padrão final conforme o material escolhido.", application: "Indicados para peças aparentes, detalhes construtivos e acabamentos especiais.", cta: "Falar sobre acabamentos" },
        { title: "Projetos personalizados", description: "Atendimento consultivo para demandas fora do padrão, com análise técnica e viabilidade comercial.", application: "Indicados para arquitetos, construtoras e clientes com projetos exclusivos.", cta: "Enviar projeto para análise" },
      ],
      sectorLinksTitle: "Setores especializados da DW",
      sectorLinksSubtitle: "Aprofunde os detalhes operacionais de cada frente de atendimento.",
      processTitle: "Como conduzimos o atendimento comercial",
      processItems: [
        "Recebimento da necessidade, medida ou projeto.",
        "Análise do material mais adequado para uso, estética e desempenho.",
        "Definição de quantitativo, acabamento e prazo comercial.",
        "Envio do orçamento e direcionamento para produção ou separação de chapas.",
      ],
    },
    applications: {
      badge: "Obras e Aplicações",
      title: "Onde nossos materiais podem transformar o projeto",
      subtitle:
        "Apresentamos aplicações recorrentes para orientar especificação, composição visual e solicitação de orçamento.",
      cards: [
        { title: "Bancadas de cozinha", description: "Materiais com leitura sofisticada, fácil manutenção e boa resistência para uso diário.", highlight: "Soluções para ilhas, bancadas lineares e áreas gourmet." },
        { title: "Bancadas de banheiro", description: "Peças que valorizam o ambiente com acabamento limpo e desenho compatível com cubas e metais.", highlight: "Muito usadas em suítes, lavabos e ambientes corporativos." },
        { title: "Escadas", description: "Aplicações com continuidade visual e robustez para circulação intensa ou residencial.", highlight: "Podem receber paginação técnica e medidas sob encomenda." },
        { title: "Pisos", description: "Opções para ambientes internos e áreas de destaque, com padrão visual uniforme.", highlight: "Boa alternativa para halls, salas, recepções e áreas sociais." },
        { title: "Fachadas", description: "Materiais que agregam valor estético e presença institucional ao empreendimento.", highlight: "Indicados para projetos residenciais, comerciais e corporativos." },
        { title: "Soleiras e peitoris", description: "Peças funcionais que refinam o encontro entre revestimentos e esquadrias.", highlight: "Aplicações de alto giro em obras novas e reformas." },
        { title: "Áreas gourmet", description: "Soluções para espaços de convivência com desempenho, estética e resistência.", highlight: "Compatíveis com bancadas, apoios, mesas e revestimentos de destaque." },
        { title: "Lavabos", description: "Materiais com apelo visual marcante para espaços compactos e sofisticados.", highlight: "Excelente escolha para criar impacto com peças sob medida." },
      ],
      ctaTitle: "Tem um projeto em andamento?",
      ctaText:
        "Envie suas medidas, referências ou projeto executivo para receber um atendimento comercial mais assertivo.",
    },
    materials: {
      badge: "Galeria Comercial",
      introTitle: "Materiais para diferentes propostas estéticas e aplicações",
      introText:
        "A galeria reúne materiais disponíveis para consultas comerciais, separação por perfil visual e direcionamento rápido para orçamento.",
      categories: {
        all: "Todos os materiais",
        granite: "Granitos",
        marble: "Mármores",
        quartzite: "Quartzitos",
        exotic: "Exóticos",
        light: "Materiais claros",
        dark: "Materiais escuros",
      },
      finishLabel: "Acabamento",
      finishValue: "Disponível sob consulta comercial",
      requestButton: "Solicitar orçamento deste material",
      modalCategory: "Categoria",
      modalColor: "Cor predominante",
      modalOrigin: "Origem",
      modalFinish: "Acabamento",
      modalAltPrefix: "Imagem do material",
      faqTitle: "Perguntas frequentes sobre materiais",
      faqSubtitle: "Respostas rápidas para ajudar na escolha e no envio do orçamento.",
      emptyTitle: "Nenhum material encontrado",
      emptyDescription: "Ajuste os filtros ou a busca para encontrar outras opções da galeria.",
    },
    contact: {
      seoTitle: "Contato DW Granitos | Orçamentos por WhatsApp e Formulário",
      seoDescription:
        "Solicite orçamento com a DW Granitos & Mármores LTDA por formulário ou WhatsApp para chapas, recortados, projetos e atendimento comercial.",
      subjectLabel: "Assunto / interesse",
      subjectPlaceholder: "Ex.: Orçamento de bancada, chapas disponíveis, envio de projeto",
      consentLabel: "Autorizo o uso dos dados enviados para retorno comercial da DW Granitos & Mármores.",
      phoneRequired: "Informe o telefone ou WhatsApp.",
      consentRequired: "É necessário autorizar o uso dos dados para prosseguir.",
      prefillMaterial: "Olá, vim pelo site da DW Granitos e gostaria de solicitar orçamento do material:",
      prefillApplication: "Olá, vim pelo site da DW Granitos e gostaria de solicitar orçamento para a aplicação:",
      whatsappTitle: "Atendimento direto por WhatsApp",
      whatsappSubtitle: "Escolha o assunto e fale com o setor mais adequado.",
    },
    faq: {
      services: [
        { question: "Qual a diferença entre granito, mármore e quartzito?", answer: "Granitos costumam oferecer alta resistência, mármores valorizam a estética clássica e quartzitos combinam sofisticação com desempenho. A indicação depende da aplicação e do padrão desejado." },
        { question: "A DW Granitos faz bancadas sob medida?", answer: "Sim. Atendemos bancadas e peças sob medida conforme medidas, projeto e material selecionado." },
        { question: "Posso enviar medidas ou projeto para orçamento?", answer: "Sim. Você pode enviar projeto, croqui, medidas ou referências pelo formulário e pelo WhatsApp." },
        { question: "A empresa trabalha com chapas e recortados?", answer: "Sim. A DW atua tanto no fornecimento de chapas quanto na produção de recortados e peças especiais." },
        { question: "Quais acabamentos estão disponíveis?", answer: "Os acabamentos variam conforme o material e a aplicação. Nossa equipe orienta a melhor opção durante o atendimento comercial." },
        { question: "A DW atende fora de Cachoeiro de Itapemirim?", answer: "Sim. O atendimento comercial contempla clientes de outras cidades, estados e demandas na América do Sul." },
        { question: "Como solicitar orçamento?", answer: "Basta entrar em contato pelo formulário, WhatsApp ou enviar seu projeto para análise comercial." },
      ],
      materials: [
        { question: "Como escolher o melhor material para bancada?", answer: "A escolha depende do uso, da estética e do ambiente. Nossa equipe ajuda a comparar materiais claros, escuros, clássicos ou especiais." },
        { question: "Posso consultar chapas disponíveis antes do orçamento?", answer: "Sim. O catálogo ajuda na triagem inicial e o time comercial orienta as opções mais adequadas para disponibilidade e aplicação." },
        { question: "Os materiais têm aplicação indicada?", answer: "Sim. Cada item da galeria destaca usos recomendados para facilitar a especificação." },
      ],
      contact: [
        { question: "Posso anexar projeto ou medidas no formulário?", answer: "Sim. O formulário permite anexar arquivos para análise comercial." },
        { question: "O atendimento por WhatsApp direciona para setores diferentes?", answer: "Sim. É possível escolher entre comercial, financeiro, vendas, chapas, recortados e envio de projeto." },
        { question: "A DW responde pedidos de orçamento fora do horário?", answer: "Sim. As mensagens podem ser enviadas a qualquer momento e o retorno ocorre conforme o horário comercial." },
      ],
    },
    whatsappIntents: [
      { id: "comercial", label: "Comercial", description: "Informações gerais e atendimento institucional", number: "+55 28 99923-8885", message: "Olá, vim pelo site da DW Granitos e gostaria de solicitar um orçamento." },
      { id: "financeiro", label: "Financeiro", description: "Pagamentos, boletos e assuntos financeiros", number: "+55 28 99946-6989", message: "Olá, vim pelo site da DW Granitos e preciso de informações do setor financeiro." },
      { id: "vendas", label: "Vendas", description: "Atendimento comercial e disponibilidade", number: "+55 28 99985-1446", message: "Olá, vim pelo site da DW Granitos e gostaria de falar com o setor de vendas." },
      { id: "chapas", label: "Orçamento de chapas", description: "Consulta de materiais e chapas disponíveis", number: "+55 28 99985-1446", message: "Olá, gostaria de informações sobre chapas disponíveis." },
      { id: "recortados", label: "Orçamento de recortados", description: "Peças sob medida e demandas especiais", number: "+55 28 99951-1643", message: "Olá, gostaria de solicitar orçamento de recortados sob medida." },
      { id: "projeto", label: "Enviar projeto/medidas", description: "Projetos executivos, croquis e dimensões", number: "+55 28 99951-1643", message: "Olá, gostaria de enviar medidas/projeto para orçamento." },
    ],
  },
  en: {
    seo: {
      home: { title: "DW Granitos & Mármores | Ornamental Stones in Cachoeiro de Itapemirim - ES", description: "Specialists in granite, marble, quartzite, slabs and custom cut pieces in Cachoeiro de Itapemirim - ES. Request a quote with DW Granitos & Mármores LTDA." },
      about: { title: "About DW Granitos & Mármores | Over 25 Years in Ornamental Stones", description: "Learn about DW Granitos & Mármores LTDA, its structure and its commitment to quality, precision and professional service in ornamental stones." },
      services: { title: "Granite, Marble, Quartzite and Cut-to-Size Services | DW Granitos", description: "Discover DW Granitos & Mármores LTDA services in slabs, custom cut pieces, countertops, floors, facades, finishes and tailored projects." },
      materials: { title: "Materials Gallery | Granite, Marble, Quartzite and Exotic Stones", description: "Explore the DW Granitos & Mármores LTDA materials gallery with granite, marble, quartzite, light and dark options and special stones for your project." },
      contact: { title: "DW Granitos Contact | Quotes by WhatsApp and Form", description: "Talk to DW Granitos & Mármores LTDA by WhatsApp or form and request a quote for slabs, cut-to-size pieces, countertops and stone projects." },
      applications: { title: "Stone Applications | Countertops, Floors, Facades and More", description: "See ornamental stone applications for kitchens, bathrooms, stairs, facades, gourmet spaces, window sills and thresholds." },
      serraria: { title: "Block and Slab Sawmill | DW Granitos & Mármores", description: "Sawmill services with Multi-Wire technology for block cutting into slabs with precision and yield for internal production and third parties." },
      chapas: { title: "Granite, Marble and Quartzite Slabs | DW Granitos & Mármores", description: "Selection of slabs in granite, marble, quartzite and special materials with commercial quality, variety and technical support." },
      recortado: { title: "Custom Cut Pieces | Countertops, Thresholds, Sills and Special Parts", description: "Custom cut-to-size production for countertops, sills, thresholds, floors, powder rooms and tailored projects." },
    },
    services: {
      badge: "Institutional Services",
      title: "Stone solutions for residential and commercial projects",
      subtitle: "DW Granitos & Mármores LTDA combines sawmill, slabs, custom cut pieces and finishing to serve supply and tailored production demands.",
      intro: "We work with builders, architects, stone shops, retailers and end customers with a focus on deadlines, finishing quality, visual consistency and commercial support.",
      cards: [],
      sectorLinksTitle: "DW specialized sectors",
      sectorLinksSubtitle: "Go deeper into each production and supply front.",
      processTitle: "How we guide the commercial flow",
      processItems: [
        "Receive the demand, measurements or project files.",
        "Review the most suitable material for use, aesthetics and performance.",
        "Define quantities, finishes and commercial deadlines.",
        "Send the quote and route it to production or slab separation.",
      ],
    },
    applications: {
      badge: "Projects and Applications",
      title: "Where our materials can transform a project",
      subtitle: "We highlight recurring applications to support specification, visual composition and quote requests.",
      cards: [],
      ctaTitle: "Do you already have a project in progress?",
      ctaText: "Send measurements, references or executive drawings for a more precise commercial service.",
    },
    materials: {
      badge: "Commercial Gallery",
      introTitle: "Materials for different visual concepts and technical needs",
      introText: "The gallery helps organize materials by aesthetic profile and makes quote requests faster.",
      categories: { all: "All materials", granite: "Granites", marble: "Marbles", quartzite: "Quartzites", exotic: "Exotics", light: "Light materials", dark: "Dark materials" },
      finishLabel: "Finish",
      finishValue: "Available on commercial request",
      requestButton: "Request a quote for this material",
      modalCategory: "Category",
      modalColor: "Main color",
      modalOrigin: "Origin",
      modalFinish: "Finish",
      modalAltPrefix: "Material image",
      faqTitle: "Frequently asked questions about materials",
      faqSubtitle: "Quick answers to help you choose and request a quote.",
      emptyTitle: "No material found",
      emptyDescription: "Adjust the filters or the search field to see more options.",
    },
    contact: {
      seoTitle: "DW Granitos Contact | Quotes by WhatsApp and Form",
      seoDescription: "Request a quote with DW Granitos & Mármores LTDA by form or WhatsApp for slabs, custom pieces, projects and commercial service.",
      subjectLabel: "Subject / interest",
      subjectPlaceholder: "Example: Countertop quote, available slabs, project submission",
      consentLabel: "I authorize the use of the submitted data for commercial follow-up by DW Granitos & Mármores.",
      phoneRequired: "Please enter your phone or WhatsApp number.",
      consentRequired: "You need to authorize data usage to continue.",
      prefillMaterial: "Hello, I came from the DW Granitos website and would like to request a quote for the material:",
      prefillApplication: "Hello, I came from the DW Granitos website and would like to request a quote for the application:",
      whatsappTitle: "Direct service through WhatsApp",
      whatsappSubtitle: "Choose the subject and talk to the most suitable department.",
    },
    faq: {
      services: [],
      materials: [],
      contact: [],
    },
    whatsappIntents: [
      { id: "comercial", label: "Commercial", description: "General information and institutional service", number: "+55 28 99923-8885", message: "Hello, I came from the DW Granitos website and would like to request a quote." },
      { id: "financeiro", label: "Financial", description: "Payments, invoices and financial topics", number: "+55 28 99946-6989", message: "Hello, I came from the DW Granitos website and need information from the financial department." },
      { id: "vendas", label: "Sales", description: "Commercial service and availability", number: "+55 28 99985-1446", message: "Hello, I came from the DW Granitos website and would like to speak with the sales team." },
      { id: "chapas", label: "Slab quote", description: "Material consultation and slab availability", number: "+55 28 99985-1446", message: "Hello, I would like information about available slabs." },
      { id: "recortados", label: "Cut-to-size quote", description: "Custom pieces and special demands", number: "+55 28 99951-1643", message: "Hello, I would like to request a quote for custom cut-to-size pieces." },
      { id: "projeto", label: "Send project/measurements", description: "Executive projects, sketches and measurements", number: "+55 28 99951-1643", message: "Hello, I would like to send measurements/project for a quote." },
    ],
  },
  es: {
    seo: {
      home: { title: "DW Granitos & Mármores | Rocas Ornamentales en Cachoeiro de Itapemirim - ES", description: "Especialistas en granitos, mármoles, quartzitos, láminas y piezas a medida en Cachoeiro de Itapemirim - ES. Solicite un presupuesto con DW Granitos & Mármores LTDA." },
      about: { title: "Sobre DW Granitos & Mármores | Más de 25 años en Rocas Ornamentales", description: "Conozca la trayectoria, la estructura y el compromiso de DW Granitos & Mármores LTDA con calidad, precisión y atención profesional." },
      services: { title: "Servicios en Granitos, Mármoles, Quartzitos y Recortados | DW Granitos", description: "Conozca los servicios de DW Granitos & Mármores LTDA en láminas, recortados, cubiertas, pisos, fachadas, acabados y proyectos personalizados." },
      materials: { title: "Galería de Materiales | Granitos, Mármoles, Quartzitos y Exóticos", description: "Explore la galería de materiales de DW Granitos & Mármores LTDA con granitos, mármoles, quartzitos, materiales claros, oscuros y opciones especiales." },
      contact: { title: "Contacto DW Granitos | Presupuestos por WhatsApp y Formulario", description: "Hable con DW Granitos & Mármores LTDA por WhatsApp o formulario y solicite presupuesto para láminas, recortados, cubiertas y proyectos." },
      applications: { title: "Aplicaciones en Rocas Ornamentales | Cubiertas, Pisos, Fachadas y Más", description: "Vea aplicaciones en granitos, mármoles y quartzitos para cocinas, baños, escaleras, fachadas, áreas gourmet y lavabos." },
      serraria: { title: "Aserradero de Bloques y Láminas | DW Granitos & Mármores", description: "Servicios de aserradero con tecnología Multi-Hilo para corte de bloques en láminas con precisión y rendimiento." },
      chapas: { title: "Láminas de Granito, Mármol y Quartzito | DW Granitos & Mármores", description: "Selección de láminas de granito, mármol, quartzito y materiales especiales con calidad comercial y soporte técnico." },
      recortado: { title: "Recortados a Medida | Cubiertas, Umbrales y Piezas Especiales", description: "Producción de recortados a medida para cubiertas, alféizares, umbrales, pisos, lavabos y proyectos personalizados." },
    },
    services: {
      badge: "Servicios Institucionales",
      title: "Soluciones en rocas ornamentales para obras residenciales y comerciales",
      subtitle: "DW Granitos & Mármores LTDA reúne aserradero, láminas, recortados y acabados para atender suministro y producción a medida.",
      intro: "Atendemos constructoras, arquitectos, marmolerías, tiendas y clientes finales con foco en plazos, acabado, padronización visual y soporte comercial.",
      cards: [],
      sectorLinksTitle: "Sectores especializados de DW",
      sectorLinksSubtitle: "Profundice en cada frente operativa.",
      processTitle: "Cómo conducimos la atención comercial",
      processItems: [
        "Recepción de la necesidad, medidas o proyecto.",
        "Análisis del material más adecuado para uso, estética y desempeño.",
        "Definición de cantidad, acabado y plazo comercial.",
        "Envío del presupuesto y direccionamiento a producción o separación de láminas.",
      ],
    },
    applications: {
      badge: "Obras y Aplicaciones",
      title: "Dónde nuestros materiales pueden transformar un proyecto",
      subtitle: "Presentamos aplicaciones frecuentes para orientar especificación, composición visual y solicitud de presupuesto.",
      cards: [],
      ctaTitle: "¿Tiene un proyecto en marcha?",
      ctaText: "Envíe medidas, referencias o proyecto ejecutivo para recibir una atención comercial más precisa.",
    },
    materials: {
      badge: "Galería Comercial",
      introTitle: "Materiales para diferentes propuestas estéticas y aplicaciones",
      introText: "La galería ayuda a organizar materiales por perfil visual y agiliza la solicitud de presupuesto.",
      categories: { all: "Todos los materiales", granite: "Granitos", marble: "Mármoles", quartzite: "Quartzitos", exotic: "Exóticos", light: "Materiales claros", dark: "Materiales oscuros" },
      finishLabel: "Acabado",
      finishValue: "Disponible bajo consulta comercial",
      requestButton: "Solicitar presupuesto de este material",
      modalCategory: "Categoría",
      modalColor: "Color predominante",
      modalOrigin: "Origen",
      modalFinish: "Acabado",
      modalAltPrefix: "Imagen del material",
      faqTitle: "Preguntas frecuentes sobre materiales",
      faqSubtitle: "Respuestas rápidas para ayudar en la elección y el presupuesto.",
      emptyTitle: "No se encontró material",
      emptyDescription: "Ajuste los filtros o la búsqueda para ver otras opciones.",
    },
    contact: {
      seoTitle: "Contacto DW Granitos | Presupuestos por WhatsApp y Formulario",
      seoDescription: "Solicite presupuesto con DW Granitos & Mármores LTDA por formulario o WhatsApp para láminas, recortados, proyectos y atención comercial.",
      subjectLabel: "Asunto / interés",
      subjectPlaceholder: "Ej.: Presupuesto de cubierta, láminas disponibles, envío de proyecto",
      consentLabel: "Autorizo el uso de los datos enviados para retorno comercial de DW Granitos & Mármores.",
      phoneRequired: "Informe el teléfono o WhatsApp.",
      consentRequired: "Es necesario autorizar el uso de los datos para continuar.",
      prefillMaterial: "Hola, vengo del sitio de DW Granitos y me gustaría solicitar presupuesto del material:",
      prefillApplication: "Hola, vengo del sitio de DW Granitos y me gustaría solicitar presupuesto para la aplicación:",
      whatsappTitle: "Atención directa por WhatsApp",
      whatsappSubtitle: "Elija el asunto y hable con el sector más adecuado.",
    },
    faq: {
      services: [],
      materials: [],
      contact: [],
    },
    whatsappIntents: [
      { id: "comercial", label: "Comercial", description: "Información general y atención institucional", number: "+55 28 99923-8885", message: "Hola, vengo del sitio de DW Granitos y me gustaría solicitar un presupuesto." },
      { id: "financeiro", label: "Financiero", description: "Pagos, facturas y asuntos financieros", number: "+55 28 99946-6989", message: "Hola, vengo del sitio de DW Granitos y necesito información del sector financiero." },
      { id: "vendas", label: "Ventas", description: "Atención comercial y disponibilidad", number: "+55 28 99985-1446", message: "Hola, vengo del sitio de DW Granitos y me gustaría hablar con el sector de ventas." },
      { id: "chapas", label: "Presupuesto de láminas", description: "Consulta de materiales y láminas disponibles", number: "+55 28 99985-1446", message: "Hola, me gustaría recibir información sobre láminas disponibles." },
      { id: "recortados", label: "Presupuesto de recortados", description: "Piezas a medida y demandas especiales", number: "+55 28 99951-1643", message: "Hola, me gustaría solicitar presupuesto de recortados a medida." },
      { id: "projeto", label: "Enviar proyecto/medidas", description: "Proyectos ejecutivos, croquis y dimensiones", number: "+55 28 99951-1643", message: "Hola, me gustaría enviar medidas/proyecto para presupuesto." },
    ],
  },
};

const ptServiceCards = institutionalContent.pt.services.cards;
const ptApplicationCards = institutionalContent.pt.applications.cards;
const ptFaqServices = institutionalContent.pt.faq.services;
const ptFaqMaterials = institutionalContent.pt.faq.materials;
const ptFaqContact = institutionalContent.pt.faq.contact;

institutionalContent.en.services.cards = ptServiceCards.map((item, index) => ({
  ...item,
  title: [
    "Granite, marble, quartzite and exotic slabs",
    "Custom cut-to-size pieces",
    "Countertops",
    "Counters",
    "Thresholds",
    "Window sills",
    "Floors",
    "Facades",
    "Ornamental stone finishing",
    "Tailored projects",
  ][index],
  description: [
    "Selected materials for different visual standards, technical requirements and supply scales.",
    "Production of pieces based on project measurements, technical reading and finishing suited to each use.",
    "Made-to-measure solutions with attention to layout, stone pattern and daily use.",
    "Pieces that reinforce commercial presence with durability and visual impact.",
    "Transition pieces with precise cutting, visual consistency and technical detailing.",
    "Made-to-measure pieces for protection, finishing and architectural value.",
    "Materials with resistance, low maintenance and strong visual consistency.",
    "Supply focused on architectural expression and specification support.",
    "Commercial guidance on edges, cuts, layouts and final presentation.",
    "Consultative support for non-standard demands and exclusive projects.",
  ][index],
  application: [
    "Suitable for kitchens, gourmet spaces, cladding, powder rooms and developments.",
    "Suitable for countertops, panels, niches, sills, thresholds and special pieces.",
    "Suitable for kitchens, bathrooms, powder rooms, gourmet spaces and offices.",
    "Suitable for stores, receptions, clinics, bars and service areas.",
    "Suitable for indoor transitions, entrances and room integration.",
    "Suitable for residential, commercial and facade windows.",
    "Suitable for halls, indoor areas, covered outdoor areas and circulation spaces.",
    "Suitable for residential, commercial and corporate developments.",
    "Suitable for visible pieces, constructive details and special finishes.",
    "Suitable for architects, builders and clients with exclusive projects.",
  ][index],
  cta: [
    "Request slab quote",
    "Request cut-to-size quote",
    "Quote countertops",
    "Quote counters",
    "Quote thresholds",
    "Quote window sills",
    "Quote floors",
    "Quote facades",
    "Talk about finishes",
    "Send project for review",
  ][index],
}));

institutionalContent.es.services.cards = ptServiceCards.map((item, index) => ({
  ...item,
  title: [
    "Láminas de granito, mármol, quartzito y exóticos",
    "Recortados a medida",
    "Cubiertas",
    "Mostradores",
    "Umbrales",
    "Alféizares",
    "Pisos",
    "Fachadas",
    "Acabados en rocas ornamentales",
    "Proyectos personalizados",
  ][index],
  description: [
    "Selección de materiales para diferentes estándares estéticos, exigencias técnicas y escalas de suministro.",
    "Producción de piezas con medidas definidas en proyecto, lectura técnica y acabado adecuado a cada uso.",
    "Soluciones a medida con atención al diseño, la veta y el uso del ambiente.",
    "Piezas con presencia visual, resistencia y lectura comercial para atención y recepción.",
    "Piezas de transición con corte preciso, padronización visual y detalle técnico.",
    "Piezas a medida para protección, acabado y valorización arquitectónica.",
    "Materiales con resistencia, fácil mantenimiento y buena uniformidad visual.",
    "Suministro orientado a lectura arquitectónica y apoyo en especificación.",
    "Orientación comercial sobre bordes, cortes, paginación y resultado final.",
    "Atención consultiva para demandas fuera del estándar y proyectos exclusivos.",
  ][index],
  application: [
    "Indicadas para cocinas, áreas gourmet, revestimientos, lavabos y emprendimientos.",
    "Indicados para cubiertas, paneles, nichos, alféizares, umbrales y piezas especiales.",
    "Indicadas para cocinas, baños, lavabos, áreas gourmet y oficinas.",
    "Indicados para tiendas, recepciones, clínicas, bares y áreas de servicio.",
    "Indicados para transiciones internas, accesos e integración de ambientes.",
    "Indicados para ventanas residenciales, comerciales y fachadas.",
    "Indicados para halls, áreas internas, áreas externas cubiertas y circulaciones.",
    "Indicadas para emprendimientos residenciales, comerciales y corporativos.",
    "Indicados para piezas visibles, detalles constructivos y acabados especiales.",
    "Indicados para arquitectos, constructoras y clientes con proyectos exclusivos.",
  ][index],
  cta: [
    "Solicitar presupuesto de láminas",
    "Solicitar presupuesto de recortados",
    "Presupuestar cubiertas",
    "Presupuestar mostradores",
    "Presupuestar umbrales",
    "Presupuestar alféizares",
    "Presupuestar pisos",
    "Presupuestar fachadas",
    "Hablar sobre acabados",
    "Enviar proyecto para análisis",
  ][index],
}));

institutionalContent.en.applications.cards = ptApplicationCards.map((item, index) => ({
  ...item,
  title: [
    "Kitchen countertops",
    "Bathroom countertops",
    "Stairs",
    "Floors",
    "Facades",
    "Thresholds and window sills",
    "Gourmet areas",
    "Powder rooms",
  ][index],
  description: [
    "Materials with a sophisticated look, easy maintenance and good performance for daily use.",
    "Pieces that enhance the space with clean finishing and integration with sinks and metals.",
    "Applications with visual continuity and durability for intense or residential circulation.",
    "Options for indoor environments and standout spaces with visual consistency.",
    "Materials that add institutional value and architectural presence to the development.",
    "Functional pieces that refine the meeting point between cladding and frames.",
    "Solutions for social spaces that demand aesthetics, durability and performance.",
    "Materials with striking visual appeal for compact and sophisticated spaces.",
  ][index],
  highlight: [
    "Solutions for islands, linear countertops and gourmet spaces.",
    "Widely used in suites, powder rooms and office environments.",
    "Can receive technical layouts and made-to-measure dimensions.",
    "A strong option for halls, living areas, receptions and social spaces.",
    "Suitable for residential, commercial and corporate projects.",
    "High-turn applications for new buildings and renovations.",
    "Compatible with countertops, support pieces, tables and standout cladding.",
    "Excellent choice to create impact with made-to-measure pieces.",
  ][index],
}));

institutionalContent.es.applications.cards = ptApplicationCards.map((item, index) => ({
  ...item,
  title: [
    "Cubiertas de cocina",
    "Cubiertas de baño",
    "Escaleras",
    "Pisos",
    "Fachadas",
    "Umbrales y alféizares",
    "Áreas gourmet",
    "Lavabos",
  ][index],
  description: [
    "Materiales con lectura sofisticada, fácil mantenimiento y buen desempeño para uso diario.",
    "Piezas que valorizan el ambiente con acabado limpio e integración con lavabos y metales.",
    "Aplicaciones con continuidad visual y robustez para circulación intensa o residencial.",
    "Opciones para ambientes interiores y espacios de destaque con consistencia visual.",
    "Materiales que agregan valor institucional y presencia arquitectónica al emprendimiento.",
    "Piezas funcionales que refinan el encuentro entre revestimientos y carpinterías.",
    "Soluciones para espacios sociales que requieren estética, resistencia y desempeño.",
    "Materiales con fuerte impacto visual para espacios compactos y sofisticados.",
  ][index],
  highlight: [
    "Soluciones para islas, cubiertas lineales y áreas gourmet.",
    "Muy usadas en suites, lavabos y ambientes corporativos.",
    "Pueden recibir paginación técnica y medidas a medida.",
    "Buena alternativa para halls, salas, recepciones y áreas sociales.",
    "Indicados para proyectos residenciales, comerciales y corporativos.",
    "Aplicaciones de alto giro en obras nuevas y reformas.",
    "Compatibles con cubiertas, apoyos, mesas y revestimientos destacados.",
    "Excelente elección para crear impacto con piezas a medida.",
  ][index],
}));

institutionalContent.en.faq.services = ptFaqServices;
institutionalContent.en.faq.materials = ptFaqMaterials;
institutionalContent.en.faq.contact = ptFaqContact;
institutionalContent.es.faq.services = ptFaqServices;
institutionalContent.es.faq.materials = ptFaqMaterials;
institutionalContent.es.faq.contact = ptFaqContact;
