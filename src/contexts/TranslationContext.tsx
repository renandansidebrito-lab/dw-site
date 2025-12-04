import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre Nós',
    'nav.sectors': 'Setores',
    'nav.serraria': 'Serraria',
    'nav.chapas': 'Chapas',
    'nav.recortado': 'Recortado',
    'nav.catalog': 'Catálogo',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.title': 'DW Granitos e Marmores LTDA',
    'hero.subtitle': 'Excelência em Transformação de Pedras Naturais',
    'hero.description': 'Com mais de 25 anos de experiência, somos especialistas em transformação de pedras naturais, oferecendo soluções personalizadas e de alta qualidade para seus projetos.',
    'hero.cta.primary': 'Nossos Serviços',
    'hero.cta.secondary': 'Fale Conosco',
    
    // About Section
    'about.title': 'Sobre Nós',
    'about.subtitle': 'Conheça Nossa História',
    'about.description': 'Fundada em 2004, a DW Granitos e Marmores LTDA se destaca no mercado de transformação de pedras naturais. Nossa missão é fornecer produtos de excelência, combinando tradição e tecnologia moderna.',
    'about.experience': 'Anos de Experiência',
    'about.clients': 'Clientes Satisfeitos',
    'about.sectors': 'Setores de Atuação',
    
    // Sectors Section
    'sectors.title': 'Nossos Setores',
    'sectors.subtitle': 'Conheça Nossa Estrutura Completa',
    'sectors.serraria.title': 'Serraria',
    'sectors.serraria.description': 'Corte preciso de blocos com tecnologia de ponta',
    'sectors.chapas.title': 'Chapas',
    'sectors.chapas.description': 'Produção de chapas de alta qualidade',
    'sectors.recortado.title': 'Recortado',
    'sectors.recortado.description': 'Peças especiais sob medida',
    'sectors.learnMore': 'Saiba Mais',
    
    // CTA Section
    'cta.title': 'Pronto para Realizar Seu Projeto?',
    'cta.description': 'Entre em contato com nossa equipe e solicite um orçamento personalizado. Estamos aqui para transformar suas ideias em realidade.',
    'cta.button': 'Solicitar Orçamento',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.hours': 'Horário de Funcionamento',
    'footer.contact': 'Contato',
    'footer.social': 'Redes Sociais',
    'footer.monday.thursday': 'Segunda a Quinta: 7h - 17h',
    'footer.friday': 'Sexta: 7h - 16h',
    'footer.weekend': 'Sábado e Domingo: Fechado',
    'footer.phone': '+55 28 99905-7492',
    'footer.email': 'contato@dwgranitos.com.br',
    'footer.address': 'Rua Antonio Bazoni, 555\nVargem Grande do Soturno\nCachoeiro de Itapemirim - ES',
    'footer.rights': 'Todos os direitos reservados',
    
    // Sectors Pages
    'sectors.serraria.hero': 'Serraria DW Granitos',
    'sectors.serraria.subtitle': 'Precisão e Qualidade no Corte',
    'sectors.chapas.hero': 'Chapas DW Granitos',
    'sectors.chapas.subtitle': 'Excelência em Chapas de Pedra',
    'sectors.recortado.hero': 'Recortado DW Granitos',
    'sectors.recortado.subtitle': 'Peças Especiais Sob Medida',
    
    // Contact Page
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Estamos aqui para ajudar com seu projeto',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telefone',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.info': 'Informações de Contato',
    'contact.hours': 'Horário de Atendimento',
    
    // Catalog Page
    'catalog.title': 'Catálogo de Materiais',
    'catalog.subtitle': 'Conheça nossa completa linha de mármores e granitos de alta qualidade. Cada material é cuidadosamente selecionado para garantir excelência em seus projetos.',
    'catalog.search': 'Buscar material...',
    'catalog.filterBy': 'Filtrar por:',
    'catalog.allTypes': 'Todos os Tipos',
    'catalog.marble': 'Mármore',
    'catalog.granite': 'Granito',
    'catalog.allColors': 'Todas as Cores',
    'catalog.showing': 'Mostrando',
    'catalog.of': 'de',
    'catalog.materials': 'materiais',
    'catalog.noResults': 'Nenhum material encontrado com os filtros selecionados.',
    'catalog.seeDetails': 'Ver Detalhes',
    'catalog.color': 'Cor',
    'catalog.origin': 'Origem',
    'catalog.applications': 'Aplicações Recomendadas',
    'catalog.description': 'Descrição',
    'catalog.close': 'Fechar',
    'catalog.type': 'Tipo',
    
    // WhatsApp Float
    'whatsapp.title': 'DW Granitos',
    'whatsapp.subtitle': 'Clique para conversar',
    'whatsapp.chat': 'Fale conosco',
    'whatsapp.description': 'Tem dúvidas sobre nossos mármores e granitos? Nossa equipe está pronta para ajudar!',
    'whatsapp.startChat': 'Iniciar conversa',
    'whatsapp.close': 'Fechar',
    'whatsapp.schedule': 'Horário de atendimento:',
    'whatsapp.schedule.detail': 'Seg-Qui: 7h-17h | Sex: 7h-16h',
    'whatsapp.messages': [
      'Hello! How can I help you?',
      'Do you have questions about our materials?',
      'Request a quote!',
      'Talk to our specialists'
    ],

    // Delivery Regions
    'delivery.title': 'Regiões de Entrega',
    'delivery.subtitle': 'Atendemos todo o Sudeste e também Bahia e Paraná',
    'delivery.southeast.title': 'Sudeste',
    'delivery.southeast.detail': 'ES, RJ, SP e MG',
    'delivery.ba.title': 'Bahia',
    'delivery.ba.detail': 'Atendimento e logística para toda a Bahia',
    'delivery.pr.title': 'Paraná',
    'delivery.pr.detail': 'Atendimento e logística para todo o Paraná',
    
    
    'home.testimonials.title': 'O que nossos clientes dizem',
    'home.testimonials.subtitle': 'A satisfação de nossos clientes é nossa maior recompensa',
    'home.partners.title': 'Parceiros e Clientes',
    'home.partners.subtitle': 'Empresas que confiam na qualidade de nossos serviços',
    'home.partners.morar.title': 'Morar',
    'home.partners.morar.description': 'Construtora parceira em diversos empreendimentos residenciais',
    'home.partners.tecvale.title': 'Tecvale',
    'home.partners.tecvale.description': 'Especializada em condomínios horizontais e verticais',
    'home.partners.stanza.title': 'Stanza',
    'home.partners.stanza.description': 'Desenvolvimento de empreendimentos de alto padrão',
    'home.partners.vitale.title': 'Vitale',
    'home.partners.vitale.description': 'Construtora com sólida experiência em empreendimentos residenciais',
    'home.process.title': 'Nosso Processo de Trabalho',
    'home.process.subtitle': 'Do bloco bruto à obra-prima final, cada etapa é executada com precisão',
    'home.quality.title': 'Qualidade Garantida',
    'home.quality.subtitle': 'Estamos comprometidos com a excelência em cada detalhe',
    'home.stats.projects': 'Projetos Completados',
    'home.stats.experience': 'Anos de Experiência',
    'home.stats.materials': 'Tipos de Pedras',
    'home.stats.satisfaction': 'Clientes Satisfeitos',
    
    // Testimonials
    'home.testimonials.client1.name': 'Carlos Silva',
    'home.testimonials.client1.company': 'Construtora Silva',
    'home.testimonials.client1.text': 'Excelente trabalho! A qualidade dos materiais e o acabamento superaram nossas expectativas. Equipe muito profissional e pontual.',
    'home.testimonials.client2.name': 'Maria Santos',
    'home.testimonials.client2.profession': 'Arquiteta',
    'home.testimonials.client2.text': 'Profissionalismo exemplar. Desde o orçamento até a entrega, tudo foi perfeito. Recomendo a todos!',
    'home.testimonials.client3.name': 'João Oliveira',
    'home.testimonials.client3.profession': 'Proprietário',
    'home.testimonials.client3.text': 'Qualidade impecável! As pedras são lindas e o corte é perfeito. Transformaram nossa casa em um lar dos sonhos.',
    
    // Process Steps
    'home.process.step1.title': 'Seleção',
    'home.process.step1.description': 'Escolha cuidadosa dos blocos de pedra de maior qualidade',
    'home.process.step2.title': 'Serraria',
    'home.process.step2.description': 'Serramos o bloco para chapas brutas',
    'home.process.step3.title': 'Tratamento',
    'home.process.step3.description': 'As chapas passam por processos de resinamento e polimento',
    'home.process.step4.title': 'Corte',
    'home.process.step4.description': 'Após seleção de chapas pelo cliente, fazemos o corte',
    'home.process.step5.title': 'Acabamento',
    'home.process.step5.description': 'Acabamento final com alta qualidade',
    'home.process.step6.title': 'Carregamento',
    'home.process.step6.description': 'Preparação para transporte - fretamos com terceiros se solicitado',
    
    // Quality Section
    'home.quality.materials': 'Materiais selecionados com rigor',
    'home.quality.certified': 'Compromisso com melhoria contínua',
    'home.quality.guarantee': 'Garantia de satisfação total',
    'home.quality.support': 'Suporte técnico especializado',
    'home.quality.certifications.title': '',
    'home.quality.certifications.text': '',
    'home.quality.iso.title': '',
    'home.quality.iso.subtitle': '',
    'home.quality.safety.title': 'Segurança',
    'home.quality.safety.subtitle': 'NR-22 e Normas de Segurança',
    'home.quality.excellence.title': 'Excelência',
    'home.quality.excellence.subtitle': 'Selo de Qualidade do Setor',
    'home.quality.compliance.title': 'Conformidade',
    'home.quality.compliance.subtitle': 'Padrões ABNT e Internacionais',
    
    // Sectors Descriptions (já definidas anteriormente na linha 42-44)
    
    // About Section
    'about.location': 'A DW Granitos e Mármores LTDA está localizada em Vargem Grande do Soturno, Cachoeiro de Itapemirim - ES.',
    'about.structure': 'Como você pode ver na imagem ao lado, nossa estrutura é completa e moderna, com equipamentos de ponta para processamento de mármore e granito.',
    'about.technology': 'Combinamos tecnologia avançada com expertise artesanal para transformar pedras naturais em obras de arte.',
    'about.services': 'Atendemos desde pequenas reformas residenciais até grandes projetos comerciais, sempre com o compromisso de entregar excelência em cada detalhe.',
    'about.team': 'Nossa equipe qualificada garante precisão milimétrica e acabamento impecável em todas as nossas peças.',
    'about.mission': 'Nossa Missão',
    'about.mission.text': 'Transformar pedras naturais em soluções elegantes e duradouras, superando as expectativas de nossos clientes através de qualidade, pontualidade e atendimento excepcional.',
    
    // Partners Section
    'home.partners.company': 'Empresa',
    
    // Projects Section
    'home.projects.title': 'Obras Realizadas',
    'home.projects.subtitle': 'Conheça algumas das obras que utilizaram nossos materiais',
    'home.projects.blessed.title': 'Blessed Alquimia Excepcional',
    'home.projects.blessed.location': 'Localização',
    'home.projects.blessed.description': 'Residencial com acabamento em granito e mármore de alta qualidade',
    'home.projects.salinas.title': 'Residencial Salinas',
    'home.projects.salinas.location': 'Bosque dos Eucaliptos',
    'home.projects.salinas.description': 'Empreendimento residencial com pedras naturais premium',
    'home.projects.maranata.title': 'Maranata Parque Industrial',
    'home.projects.maranata.location': 'Parque Industrial',
    'home.projects.maranata.description': 'Complexo industrial com revestimento em pedra natural',
    'home.projects.view.more': 'Ver mais projetos'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.sectors': 'Sectors',
    'nav.serraria': 'Sawmill',
    'nav.chapas': 'Slabs',
    'nav.recortado': 'Cut to Size',
    'nav.catalog': 'Catalog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'DW Granitos e Marmores LTDA',
    'hero.subtitle': 'Excellence in Natural Stone Transformation',
    'hero.description': 'With over 25 years of experience, we are specialists in natural stone transformation, offering customized and high-quality solutions for your projects.',
    'hero.cta.primary': 'Our Services',
    'hero.cta.secondary': 'Contact Us',
    
    // About Section
    'about.title': 'About Us',
    'about.subtitle': 'Our Story',
    'about.description': 'Founded in 2004, DW Granites and Marbles LTD stands out in the natural stone transformation market. Our mission is to provide excellent products, combining tradition and modern technology.',
    'about.experience': 'Years of Experience',
    'about.clients': 'Satisfied Clients',
    'about.sectors': 'Operating Sectors',
    
    // Sectors Section
    'sectors.title': 'Our Sectors',
    'sectors.subtitle': 'Know Our Complete Structure',
    'sectors.serraria.title': 'Sawmill',
    'sectors.serraria.description': 'Precise block cutting with cutting-edge technology',
    'sectors.chapas.title': 'Slabs',
    'sectors.chapas.description': 'High-quality slab production',
    'sectors.recortado.title': 'Cut to Size',
    'sectors.recortado.description': 'Custom special pieces',
    'sectors.learnMore': 'Learn More',
    
    // CTA Section
    'cta.title': 'Ready to Realize Your Project?',
    'cta.description': 'Contact our team and request a personalized quote. We are here to turn your ideas into reality.',
    'cta.button': 'Request Quote',
    
    // Footer
    'footer.company': 'Company',
    'footer.hours': 'Business Hours',
    'footer.contact': 'Contact',
    'footer.social': 'Social Media',
    'footer.monday.thursday': 'Monday to Thursday: 7am - 5pm',
    'footer.friday': 'Friday: 7am - 4pm',
    'footer.weekend': 'Saturday and Sunday: Closed',
    'footer.phone': '+55 28 99905-7492',
    'footer.email': 'contato@dwgranitos.com.br',
    'footer.address': 'Rua Antonio Bazoni, 555\nVargem Grande do Soturno\nCachoeiro de Itapemirim - ES',
    'footer.rights': 'All rights reserved',
    'footer.description': 'Specialists in natural stone transformation with excellence and precision in the market for over 20 years.',
    'footer.sectors': 'Sectors',
    'footer.quickLinks': 'Quick Links',
    'footer.address.title': 'Location',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    
    // Sectors Pages
    'sectors.serraria.hero': 'DW Granitos Sawmill',
    'sectors.serraria.subtitle': 'Precision and Quality in Cutting',
    'sectors.chapas.hero': 'DW Granitos Slabs',
    'sectors.chapas.subtitle': 'Excellence in Stone Slabs',
    'sectors.recortado.hero': 'DW Granitos Cut to Size',
    'sectors.recortado.subtitle': 'Custom Special Pieces',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help with your project',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info': 'Contact Information',
    'contact.hours': 'Business Hours',
    
    // Catalog Page
    'catalog.title': 'Materials Catalog',
    'catalog.subtitle': 'Discover our complete line of high-quality marbles and granites. Each material is carefully selected to ensure excellence in your projects.',
    'catalog.search': 'Search material...',
    'catalog.filterBy': 'Filter by:',
    'catalog.allTypes': 'All Types',
    'catalog.marble': 'Marble',
    'catalog.granite': 'Granite',
    'catalog.allColors': 'All Colors',
    'catalog.showing': 'Showing',
    'catalog.of': 'of',
    'catalog.materials': 'materials',
    'catalog.noResults': 'No materials found with the selected filters.',
    'catalog.seeDetails': 'See Details',
    'catalog.color': 'Color',
    'catalog.origin': 'Origin',
    'catalog.applications': 'Recommended Applications',
    'catalog.description': 'Description',
    'catalog.close': 'Close',
    'catalog.type': 'Type',
    
    // WhatsApp Float
    'whatsapp.title': 'DW Granitos',
    'whatsapp.subtitle': 'Click to chat',
    'whatsapp.chat': 'Contact Us',
    'whatsapp.description': 'Have questions about our marbles and granites? Our team is ready to help!',
    'whatsapp.startChat': 'Start Chat',
    'whatsapp.close': 'Close',
    'whatsapp.schedule': 'Business hours:',
    'whatsapp.schedule.detail': 'Mon-Thu: 7am-5pm | Fri: 7am-4pm',

    // Delivery Regions
    'delivery.title': 'Delivery Regions',
    'delivery.subtitle': 'We serve all Southeast and also Bahia and Paraná',
    'delivery.southeast.title': 'Southeast',
    'delivery.southeast.detail': 'ES, RJ, SP and MG',
    'delivery.ba.title': 'Bahia',
    'delivery.ba.detail': 'Service and logistics across Bahia',
    'delivery.pr.title': 'Paraná',
    'delivery.pr.detail': 'Service and logistics across Paraná',
    
    
    'home.testimonials.title': 'What our customers say',
    'home.testimonials.subtitle': 'Customer satisfaction is our greatest reward',
    'home.partners.title': 'Partners and Clients',
    'home.partners.subtitle': 'Companies that trust the quality of our services',
    'home.partners.morar.title': 'Morar',
    'home.partners.morar.description': 'Partner construction company in various residential developments',
    'home.partners.tecvale.title': 'Tecvale',
    'home.partners.tecvale.description': 'Specialized in horizontal and vertical condominiums',
    'home.partners.stanza.title': 'Stanza',
    'home.partners.stanza.description': 'Development of high-end projects',
    'home.partners.vitale.title': 'Vitale',
    'home.partners.vitale.description': 'Construction company with solid experience in residential developments',
    'home.process.title': 'Our Work Process',
    'home.process.subtitle': 'From raw block to final masterpiece, each step is executed with precision',
    'home.quality.title': 'Guaranteed Quality',
    'home.quality.subtitle': 'We are committed to excellence in every detail',
    'home.stats.projects': 'Completed Projects',
    'home.stats.experience': 'Years of Experience',
    'home.stats.materials': 'Types of Stones',
    'home.stats.satisfaction': 'Satisfied Customers',
    
    // Testimonials
    'home.testimonials.client1.name': 'Carlos Silva',
    'home.testimonials.client1.company': 'Silva Construction',
    'home.testimonials.client1.text': 'Excellent work! The quality of materials and finishing exceeded our expectations. Very professional and punctual team.',
    'home.testimonials.client2.name': 'Maria Santos',
    'home.testimonials.client2.profession': 'Architect',
    'home.testimonials.client2.text': 'Exemplary professionalism. From the quote to delivery, everything was perfect. I recommend to everyone!',
    'home.testimonials.client3.name': 'João Oliveira',
    'home.testimonials.client3.profession': 'Owner',
    'home.testimonials.client3.text': 'Impeccable quality! The stones are beautiful and the cut is perfect. They transformed our house into a dream home.',
    
    // Process Steps
    'home.process.step1.title': 'Selection',
    'home.process.step1.description': 'Careful selection of the highest quality stone blocks',
    'home.process.step2.title': 'Sawmill',
    'home.process.step2.description': 'We cut the block into rough slabs',
    'home.process.step3.title': 'Treatment',
    'home.process.step3.description': 'Slabs go through resin application and polishing processes',
    'home.process.step4.title': 'Cutting',
    'home.process.step4.description': 'After customer selects slabs, we perform the cutting',
    'home.process.step5.title': 'Finishing',
    'home.process.step5.description': 'Final high-quality finishing',
    'home.process.step6.title': 'Loading',
    'home.process.step6.description': 'Preparation for transport - we arrange with third parties if requested',
    
    // Projects Section
    'home.projects.title': 'Completed Projects',
    'home.projects.subtitle': 'See some of the projects that used our materials',
    'home.projects.blessed.title': 'Blessed Exceptional Alchemy',
    'home.projects.blessed.location': 'Location',
    'home.projects.blessed.description': 'Residential building with high-quality granite and marble finishes',
    'home.projects.salinas.title': 'Salinas Residential',
    'home.projects.salinas.location': 'Eucalyptus Grove',
    'home.projects.salinas.description': 'Residential development with premium natural stones',
    'home.projects.maranata.title': 'Maranata Industrial Park',
    'home.projects.maranata.location': 'Industrial Park',
    'home.projects.maranata.description': 'Industrial complex with natural stone cladding',
    'home.projects.view.more': 'View more projects',
    
    // Quality Section
    'home.quality.materials': 'Rigorously selected materials',
    'home.quality.certified': 'Commitment to continuous improvement',
    'home.quality.guarantee': 'Total satisfaction guarantee',
    'home.quality.support': 'Specialized technical support',
    'home.quality.certifications.title': '',
    'home.quality.certifications.text': '',
    'home.quality.iso.title': 'ISO 9001',
    'home.quality.iso.subtitle': 'Quality Management System',
    'home.quality.safety.title': 'Safety',
    'home.quality.safety.subtitle': 'NR-22 and Safety Standards',
    'home.quality.excellence.title': 'Excellence',
    'home.quality.excellence.subtitle': 'Quality Seal of the Sector',
    'home.quality.compliance.title': 'Compliance',
    'home.quality.compliance.subtitle': 'ABNT and International Standards',
    
    // Sectors Descriptions
    // About Section
    'about.location': 'DW Granitos and Marmores LTDA is located in Vargem Grande do Soturno, Cachoeiro de Itapemirim - ES.',
    'about.structure': 'As you can see in the image beside, our structure is complete and modern, with state-of-the-art equipment for marble and granite processing.',
    'about.technology': 'We combine advanced technology with artisanal expertise to transform natural stones into works of art.',
    'about.services': 'We serve from small residential renovations to large commercial projects, always with the commitment to deliver excellence in every detail.',
    'about.team': 'Our qualified team guarantees millimeter precision and impeccable finish in all our pieces.',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To transform natural stones into elegant and durable solutions, exceeding our customers expectations through quality, punctuality and exceptional service.',
    
    // Partners Section
    'home.partners.company': 'Company'
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.sectors': 'Sectores',
    'nav.serraria': 'Aserradero',
    'nav.chapas': 'Láminas',
    'nav.recortado': 'Corte a Medida',
    'nav.catalog': 'Catálogo',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'DW Granitos e Marmores LTDA',
    'hero.subtitle': 'Excelencia en Transformación de Piedras Naturales',
    'hero.description': 'Con más de 25 años de experiencia, somos especialistas en transformación de piedras naturales, ofreciendo soluciones personalizadas y de alta calidad para sus proyectos.',

    // Delivery Regions
    'delivery.title': 'Regiones de Entrega',
    'delivery.subtitle': 'Atendemos todo el Sudeste y también Bahía y Paraná',
    'delivery.southeast.title': 'Sudeste',
    'delivery.southeast.detail': 'ES, RJ, SP y MG',
    'delivery.ba.title': 'Bahía',
    'delivery.ba.detail': 'Servicio y logística para toda Bahía',
    'delivery.pr.title': 'Paraná',
    'delivery.pr.detail': 'Servicio y logística para todo Paraná',
    'hero.cta.primary': 'Nuestros Servicios',
    'hero.cta.secondary': 'Contáctenos',
    
    // About Section
    'about.title': 'Sobre Nosotros',
    'about.subtitle': 'Conozca Nuestra Historia',
    'about.description': 'Fundada en 2004, DW Granitos y Mármoles LTDA se destaca en el mercado de transformación de piedras naturales. Nuestra misión es proporcionar productos de excelencia, combinando tradición y tecnología moderna.',
    'about.experience': 'Años de Experiencia',
    'about.clients': 'Clientes Satisfechos',
    'about.sectors': 'Sectores de Actuación',
    
    // Sectors Section
    'sectors.title': 'Nuestros Sectores',
    'sectors.subtitle': 'Conozca Nuestra Estructura Completa',
    'sectors.serraria.title': 'Aserradero',
    'sectors.serraria.description': 'Corte preciso de bloques con tecnología de punta',
    'sectors.chapas.title': 'Láminas',
    'sectors.chapas.description': 'Producción de láminas de alta calidad',
    'sectors.recortado.title': 'Corte a Medida',
    'sectors.recortado.description': 'Piezas especiales a medida',
    'sectors.learnMore': 'Más',
    
    // CTA Section
    'cta.title': '¿Listo para Realizar Su Proyecto?',
    'cta.description': 'Contacte con nuestro equipo y solicite un presupuesto personalizado. Estamos aquí para convertir sus ideas en realidad.',
    'cta.button': 'Solicitar Presupuesto',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.hours': 'Horario de Atención',
    'footer.contact': 'Contacto',
    'footer.social': 'Redes Sociales',
    'footer.monday.thursday': 'Lunes a Jueves: 7h - 17h',
    'footer.friday': 'Viernes: 7h - 16h',
    'footer.weekend': 'Sábado y Domingo: Cerrado',
    'footer.phone': '+55 28 99905-7492',
    'footer.email': 'contato@dwgranitos.com.br',
    'footer.address': 'Rua Ângelo Bazoni, 555\nVargem Grande do Soturno\nCachoeiro de Itapemirim - ES',
    'footer.rights': 'Todos los derechos reservados',
    'footer.description': 'Especialistas en transformación de piedras naturales con excelencia y precisión en el mercado por más de 20 años.',
    'footer.sectors': 'Sectores',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.address.title': 'Ubicación',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Uso',
    
    // Sectors Pages
    'sectors.serraria.hero': 'Aserradero DW Granitos',
    'sectors.serraria.subtitle': 'Precisión y Calidad en el Corte',
    'sectors.chapas.hero': 'Láminas DW Granitos',
    'sectors.chapas.subtitle': 'Excelencia en Láminas de Piedra',
    'sectors.recortado.hero': 'Corte a Medida DW Granitos',
    'sectors.recortado.subtitle': 'Piezas Especiales a Medida',
    
    // Contact Page
    'contact.title': 'Póngase en Contacto',
    'contact.subtitle': 'Estamos aquí para ayudar con su proyecto',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.phone': 'Teléfono',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.info': 'Información de Contacto',
    'contact.hours': 'Horario de Atención',
    
    // Catalog Page
    'catalog.title': 'Catálogo de Materiales',
    'catalog.subtitle': 'Descubra nuestra línea completa de mármoles y granitos de alta calidad. Cada material es cuidadosamente seleccionado para garantir excelencia en sus proyectos.',
    'catalog.search': 'Buscar material...',
    'catalog.filterBy': 'Filtrar por:',
    'catalog.allTypes': 'Todos los Tipos',
    'catalog.marble': 'Mármol',
    'catalog.granite': 'Granito',
    'catalog.allColors': 'Todos los Colores',
    'catalog.showing': 'Mostrando',
    'catalog.of': 'de',
    'catalog.materials': 'materiales',
    'catalog.noResults': 'Ningún material encontrado con los filtros seleccionados.',
    'catalog.seeDetails': 'Ver Detalles',
    'catalog.color': 'Color',
    'catalog.origin': 'Origen',
    'catalog.applications': 'Aplicaciones Recomendadas',
    'catalog.description': 'Descripción',
    'catalog.close': 'Cerrar',
    'catalog.type': 'Tipo',
    
    // WhatsApp Float
    'whatsapp.title': 'DW Granitos',
    'whatsapp.subtitle': 'Haz clic para chatear',
    'whatsapp.chat': 'Contáctenos',
    'whatsapp.description': '¿Tiene preguntas sobre nuestros mármoles y granitos? ¡Nuestro equipo está listo para ayudar!',
    'whatsapp.startChat': 'Iniciar Conversación',
    'whatsapp.close': 'Cerrar',
    'whatsapp.schedule': 'Horario de atención:',
    'whatsapp.schedule.detail': 'Lun-Jue: 7h-17h | Vie: 7h-16h',
    'whatsapp.messages': [
      '¡Hola! ¿Cómo puedo ayudarle?',
      '¿Preguntas sobre nuestros materiales?',
      '¡Solicite un presupuesto!',
      'Hable con nuestros expertos'
    ],
    
    
    'home.testimonials.title': 'Lo que dicen nuestros clientes',
    'home.testimonials.subtitle': 'La satisfacción de nuestros clientes es nuestra mayor recompensa',
    'home.partners.title': 'Socios y Clientes',
    'home.partners.subtitle': 'Empresas que confían en la calidad de nuestros servicios',
    'home.partners.morar.title': 'Morar',
    'home.partners.morar.description': 'Constructora asociada en diversos desarrollos residenciales',
    'home.partners.tecvale.title': 'Tecvale',
    'home.partners.tecvale.description': 'Especializada en condominios horizontales y verticales',
    'home.partners.stanza.title': 'Stanza',
    'home.partners.stanza.description': 'Desarrollo de emprendimientos de alto nivel',
    'home.partners.vitale.title': 'Vitale',
    'home.partners.vitale.description': 'Constructora con sólida experiencia en desarrollos residenciales',
    'home.process.title': 'Nuestro Proceso de Trabajo',
    'home.process.subtitle': 'Del bloque en bruto a la obra maestra final, cada paso se ejecuta con precisión',
    'home.quality.title': 'Calidad Garantizada',
    'home.quality.subtitle': 'Nos comprometemos con la excelencia en cada detalle',
    'home.stats.projects': 'Proyectos Completados',
    'home.stats.experience': 'Años de Experiencia',
    'home.stats.materials': 'Tipos de Piedras',
    'home.stats.satisfaction': 'Clientes Satisfechos',
    
    // Testimonials
    'home.testimonials.client1.name': 'Carlos Silva',
    'home.testimonials.client1.company': 'Constructora Silva',
    'home.testimonials.client1.text': '¡Excelente trabajo! La calidad de los materiales y el acabado superaron nuestras expectativas. Equipo muy profesional y puntual.',
    'home.testimonials.client2.name': 'María Santos',
    'home.testimonials.client2.profession': 'Arquitecta',
    'home.testimonials.client2.text': 'Profesionalismo ejemplar. Desde el presupuesto hasta la entrega, todo fue perfecto. ¡Lo recomiendo a todos!',
    'home.testimonials.client3.name': 'João Oliveira',
    'home.testimonials.client3.profession': 'Propietario',
    'home.testimonials.client3.text': '¡Calidad impecable! Las piedras son hermosas y el corte es perfecto. Transformaron nuestra casa en el hogar de nuestros sueños.',
    
    // Process Steps
    'home.process.step1.title': 'Selección',
    'home.process.step1.description': 'Cuidadosa selección de los bloques de piedra de mayor calidad',
    'home.process.step2.title': 'Aserradero',
    'home.process.step2.description': 'Cortamos el bloque en placas brutas',
    'home.process.step3.title': 'Tratamiento',
    'home.process.step3.description': 'Las placas pasan por procesos de resinado y pulido',
    'home.process.step4.title': 'Corte',
    'home.process.step4.description': 'Después de la selección de placas por el cliente, realizamos el corte',
    'home.process.step5.title': 'Acabado',
    'home.process.step5.description': 'Acabado final con acabado de alta calidad',
    'home.process.step6.title': 'Carga',
    'home.process.step6.description': 'Preparación para el transporte - coordinamos con terceros si se solicita',
    
    // Projects Section
    'home.projects.title': 'Obras Realizadas',
    'home.projects.subtitle': 'Conozca algunas de las obras que utilizaron nuestros materiales',
    'home.projects.blessed.title': 'Blessed Alquimia Excepcional',
    'home.projects.blessed.location': 'Ubicación',
    'home.projects.blessed.description': 'Residencial con acabado en granito y mármol de alta calidad',
    'home.projects.salinas.title': 'Residencial Salinas',
    'home.projects.salinas.location': 'Bosque de los Eucaliptos',
    'home.projects.salinas.description': 'Desarrollo residencial con piedras naturales premium',
    'home.projects.maranata.title': 'Maranata Parque Industrial',
    'home.projects.maranata.location': 'Parque Industrial',
    'home.projects.maranata.description': 'Complejo industrial con revestimiento en piedra natural',
    'home.projects.view.more': 'Ver más proyectos',
    
    // Quality Section
    'home.quality.materials': 'Materiales seleccionados con rigor',
    'home.quality.certified': 'Compromiso con la mejora continua',
    'home.quality.guarantee': 'Garantía de satisfacción total',
    'home.quality.support': 'Soporte técnico especializado',
    'home.quality.certifications.title': '',
    'home.quality.certifications.text': '',
    'home.quality.iso.title': 'ISO 9001',
    'home.quality.iso.subtitle': 'Sistema de Gestión de la Calidad',
    'home.quality.safety.title': 'Seguridad',
    'home.quality.safety.subtitle': 'NR-22 y Normas de Seguridad',
    'home.quality.excellence.title': 'Excelencia',
    'home.quality.excellence.subtitle': 'Sello de Calidad del Sector',
    'home.quality.compliance.title': 'Conformidad',
    'home.quality.compliance.subtitle': 'Estándares ABNT e Internacionales',
    
    // Sectors Descriptions
    // About Section
    'about.location': 'DW Granitos y Mármoles LTDA está ubicada en Vargem Grande do Soturno, Cachoeiro de Itapemirim - ES.',
    'about.structure': 'Como puede ver en la imagen al lado, nuestra estructura es completa y moderna, con equipos de última generación para el procesamiento de mármol y granito.',
    'about.technology': 'Combinamos tecnología avanzada con experiencia artesanal para transformar piedras naturales en obras de arte.',
    'about.services': 'Atendemos desde pequeñas renovaciones residenciales hasta grandes proyectos comerciales, siempre con el compromiso de entregar excelencia en cada detalle.',
    'about.team': 'Nuestro equipo calificado garantiza precisión milimétrica y acabado impecable en todas nuestras piezas.',
    'about.mission': 'Nuestra Misión',
    'about.mission.text': 'Transformar piedras naturales en soluciones elegantes y duraderas, superando las expectativas de nuestros clientes a través de calidad, puntualidad y servicio excepcional.',
    
    // Partners Section
    'home.partners.company': 'Empresa'
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
