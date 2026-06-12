export type Material = {
  id: number;
  nome: string;
  tipo: "marmore" | "granito" | "quartzito" | "quartzo" | "ultracompacto" | "supernano" | "outros";
  cor: string;
  origem: string;
  aplicacoes: string[];
  imagem: string;
  descricao: string;
  acabamento?: string;
  alt?: string;
};

const MATERIAL_PLACEHOLDER = "/images/placeholder-material.svg";
const MISSING_MATERIAL_IMAGES = new Set([
  "/images/materiais/marmore-branco.webp",
  "/images/materiais/pedra-madeira-branco-are.webp",
  "/images/materiais/pedra-moledo-branca.webp"
]);

export const getMateriais = (t: (key: string) => string): Material[] => {
  const materials: Material[] = [
  {
    id: 1,
    nome: t('catalog.name.1'),
    tipo: "granito",
    cor: t('catalog.colors.yellow'),
    origem: "BA",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.walls'), t('catalog.app.social'), t('catalog.app.decoration')],
    imagem: "/images/materiais/amarelo-capri.webp",
    descricao: t('catalog.desc.1')
  },
  {
    id: 2,
    nome: t('catalog.name.2'),
    tipo: "granito",
    cor: t('catalog.colors.yellow'),
    origem: "RJ",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.cladding'), t('catalog.app.countertops')],
    imagem: "/images/materiais/amarelo-icarai.webp",
    descricao: t('catalog.desc.2')
  },
  {
    id: 3,
    nome: t('catalog.name.3'),
    tipo: "granito",
    cor: t('catalog.colors.yellow'),
    origem: "BA",
    aplicacoes: [t('catalog.app.kitchens'), t('catalog.app.internal'), t('catalog.app.countertops'), t('catalog.app.sinks')],
    imagem: "/images/materiais/amarelo-maracuja.webp",
    descricao: t('catalog.desc.3')
  },
  {
    id: 4,
    nome: t('catalog.name.4'),
    tipo: "granito",
    cor: t('catalog.colors.yellow'),
    origem: "ES",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/amarelo-ornamental.webp",
    descricao: t('catalog.desc.4')
  },
  {
    id: 5,
    nome: t('catalog.name.5'),
    tipo: "granito",
    cor: t('catalog.colors.yellow'),
    origem: "ES",
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors')],
    imagem: "/images/materiais/amarelo-santa-cecilia.webp",
    descricao: t('catalog.desc.5')
  },
  {
    id: 6,
    nome: t('catalog.name.6'),
    tipo: "granito",
    cor: t('catalog.colors.yellow'),
    origem: "ES",
    aplicacoes: [t('catalog.app.walls'), t('catalog.app.bathrooms'), t('catalog.app.social'), t('catalog.app.decoration')],
    imagem: "/images/materiais/amarelo-vitoria.webp",
    descricao: t('catalog.desc.6')
  },
  {
    id: 7,
    nome: t('catalog.name.7'),
    tipo: "outros",
    cor: t('catalog.colors.brown'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.cladding'), t('catalog.app.floors')],
    imagem: "/images/materiais/anfibolito-madeirus.webp",
    descricao: t('catalog.desc.7')
  },
  {
    id: 8,
    nome: t('catalog.name.8'),
    tipo: "marmore",
    cor: t('catalog.colors.beige'),
    origem: "BA",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.cladding'), t('catalog.app.facades')],
    imagem: "/images/materiais/bege-bahia.webp",
    descricao: t('catalog.desc.8')
  },
  {
    id: 9,
    nome: t('catalog.name.9'),
    tipo: "granito",
    cor: t('catalog.colors.beige'),
    origem: "RJ",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.kitchens'), t('catalog.app.internal'), t('catalog.app.living')],
    imagem: "/images/materiais/bege-ipanema.webp",
    descricao: t('catalog.desc.9')
  },
  {
    id: 10,
    nome: t('catalog.name.10'),
    tipo: "quartzito",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.imported'),
    aplicacoes: [t('catalog.app.luxury_countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/bianco-superiore.webp",
    descricao: t('catalog.desc.10')
  },
  {
    id: 11,
    nome: t('catalog.name.11'),
    tipo: "granito",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.imported'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.walls')],
    imagem: "/images/materiais/branco-alaska.webp",
    descricao: t('catalog.desc.11')
  },
  {
    id: 12,
    nome: t('catalog.name.12'),
    tipo: "granito",
    cor: t('catalog.colors.white'),
    origem: "ES",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/branco-arabesco.webp",
    descricao: t('catalog.desc.12')
  },
  {
    id: 13,
    nome: t('catalog.name.13'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.cladding'), t('catalog.app.bathrooms')],
    imagem: "/images/materiais/branco-carrarinha.webp",
    descricao: t('catalog.desc.13')
  },
  {
    id: 14,
    nome: t('catalog.name.14'),
    tipo: "granito",
    cor: t('catalog.colors.white'),
    origem: "CE",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.cladding')],
    imagem: "/images/materiais/branco-ceara.webp",
    descricao: t('catalog.desc.14')
  },
  {
    id: 15,
    nome: t('catalog.name.15'),
    tipo: "granito",
    cor: t('catalog.colors.white'),
    origem: "ES",
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors')],
    imagem: "/images/materiais/branco-cotton.webp",
    descricao: t('catalog.desc.15')
  },
  {
    id: 16,
    nome: t('catalog.name.16'),
    tipo: "granito",
    cor: t('catalog.colors.white'),
    origem: "ES",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/branco-dallas.webp",
    descricao: t('catalog.desc.16')
  },
  {
    id: 17,
    nome: t('catalog.name.17'),
    tipo: "granito",
    cor: t('catalog.colors.white'),
    origem: "CE",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/branco-fortaleza.webp",
    descricao: t('catalog.desc.17')
  },
  {
    id: 18,
    nome: t('catalog.name.18'),
    tipo: "granito",
    cor: t('catalog.colors.white'),
    origem: "ES",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.cladding'), t('catalog.app.countertops')],
    imagem: "/images/materiais/branco-itaunas.webp",
    descricao: t('catalog.desc.18')
  },
  {
    id: 19,
    nome: t('catalog.name.19'),
    tipo: "quartzito",
    cor: t('catalog.colors.white'),
    origem: "BA",
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors'), t('catalog.app.cladding')],
    imagem: "/images/materiais/branco-macaubas.webp",
    descricao: t('catalog.desc.19')
  },
  {
    id: 20,
    nome: t('catalog.name.20'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.cladding')],
    imagem: "/images/materiais/branco-moura.webp",
    descricao: t('catalog.desc.20')
  },
  {
    id: 21,
    nome: t('catalog.name.21'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: "PR",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.cladding')],
    imagem: "/images/materiais/branco-parana.webp",
    descricao: t('catalog.desc.21')
  },
  {
    id: 22,
    nome: t('catalog.name.22'),
    tipo: "granito",
    cor: t('catalog.colors.white'),
    origem: "BA",
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors')],
    imagem: "/images/materiais/branco-pitaya.webp",
    descricao: t('catalog.desc.22')
  },
  {
    id: 23,
    nome: t('catalog.name.23'),
    tipo: "ultracompacto",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.bathroom_countertops'), t('catalog.app.internal_cladding'), "Lavatórios"],
    imagem: "/images/materiais/branco-prime.webp",
    descricao: t('catalog.desc.23')
  },
  {
    id: 24,
    nome: t('catalog.name.24'),
    tipo: "granito",
    cor: t('catalog.colors.white'),
    origem: "ES",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/branco-siena.webp",
    descricao: t('catalog.desc.24')
  },
  {
    id: 25,
    nome: t('catalog.name.25'),
    tipo: "granito",
    cor: t('catalog.colors.brown'),
    origem: "MG",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.countertops'), t('catalog.app.details')],
    imagem: "/images/materiais/cafe-imperial.webp",
    descricao: t('catalog.desc.25')
  },
  {
    id: 26,
    nome: t('catalog.name.26'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.imported'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors'), t('catalog.app.luxury_cladding')],
    imagem: "/images/materiais/calacata.webp",
    descricao: t('catalog.desc.26')
  },
  {
    id: 27,
    nome: t('catalog.name.27'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.imported'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.luxury_cladding')],
    imagem: "/images/materiais/calacatta-gold.webp",
    descricao: t('catalog.desc.27')
  },
  {
    id: 28,
    nome: t('catalog.name.28'),
    tipo: "granito",
    cor: t('catalog.colors.gray'),
    origem: "SP",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.stairs'), t('catalog.app.sills')],
    imagem: "/images/materiais/cinza-andorinha.webp",
    descricao: t('catalog.desc.28')
  },
  {
    id: 29,
    nome: t('catalog.name.29'),
    tipo: "granito",
    cor: t('catalog.colors.gray'),
    origem: "MS",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.cladding'), t('catalog.app.countertops')],
    imagem: "/images/materiais/cinza-corumba.webp",
    descricao: t('catalog.desc.29')
  },
  {
    id: 30,
    nome: t('catalog.name.30'),
    tipo: "granito",
    cor: t('catalog.colors.gray'),
    origem: "MS",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.cladding'), t('catalog.app.stairs')],
    imagem: "/images/materiais/cinza-corumbazinho.webp",
    descricao: t('catalog.desc.30')
  },
  {
    id: 31,
    nome: t('catalog.name.31'),
    tipo: "granito",
    cor: t('catalog.colors.gray'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.sidewalks')],
    imagem: "/images/materiais/cinza-mundo-novo.webp",
    descricao: t('catalog.desc.31')
  },
  {
    id: 32,
    nome: t('catalog.name.32'),
    tipo: "marmore",
    cor: t('catalog.colors.beige'),
    origem: t('catalog.origin.imported'),
    aplicacoes: [t('catalog.app.internal_floors'), t('catalog.app.bathrooms'), t('catalog.app.cladding')],
    imagem: "/images/materiais/crema-marfil-extra.webp",
    descricao: t('catalog.desc.32')
  },
  {
    id: 33,
    nome: t('catalog.name.33'),
    tipo: "quartzito",
    cor: t('catalog.colors.beige'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.cladding'), t('catalog.app.floors'), t('catalog.app.countertops')],
    imagem: "/images/materiais/dakar.webp",
    descricao: t('catalog.desc.33')
  },
  {
    id: 34,
    nome: t('catalog.name.34'),
    tipo: "ultracompacto",
    cor: t('catalog.colors.gray'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.facades'), t('catalog.app.floors'), t('catalog.app.countertops')],
    imagem: "/images/materiais/dekton-laos.webp",
    descricao: t('catalog.desc.34')
  },
  {
    id: 35,
    nome: t('catalog.name.35'),
    tipo: "ultracompacto",
    cor: t('catalog.colors.gray'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.cladding')],
    imagem: "/images/materiais/dekton-sirocco.webp",
    descricao: t('catalog.desc.35')
  },
  {
    id: 36,
    nome: t('catalog.name.36'),
    tipo: "marmore",
    cor: t('catalog.colors.gray'),
    origem: t('catalog.origin.imported'),
    aplicacoes: [t('catalog.app.cladding'), t('catalog.app.washbasins')],
    imagem: "/images/materiais/grey-emperador.webp",
    descricao: t('catalog.desc.36')
  },
  {
    id: 37,
    nome: t('catalog.name.37'),
    tipo: "granito",
    cor: t('catalog.colors.gray'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.countertops')],
    imagem: "/images/materiais/juparana.webp",
    descricao: t('catalog.desc.37')
  },
  {
    id: 38,
    nome: t('catalog.name.38'),
    tipo: "quartzo",
    cor: t('catalog.colors.gray'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/kensho.webp",
    descricao: t('catalog.desc.38')
  },
  {
    id: 39,
    nome: t('catalog.name.39'),
    tipo: "quartzito",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/kouros.webp",
    descricao: t('catalog.desc.39')
  },
  {
    id: 40,
    nome: t('catalog.name.40'),
    tipo: "ultracompacto",
    cor: t('catalog.colors.varied'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.cladding'), t('catalog.app.furniture')],
    imagem: "/images/materiais/lamina-ultracompacta.webp",
    descricao: t('catalog.desc.40')
  },
  {
    id: 41,
    nome: t('catalog.name.41'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.cladding'), t('catalog.app.floors'), t('catalog.app.bathrooms')],
    imagem: "/images/materiais/marmore-branco.webp",
    descricao: t('catalog.desc.41')
  },
  {
    id: 42,
    nome: t('catalog.name.42'),
    tipo: "granito",
    cor: t('catalog.colors.brown'),
    origem: "BA",
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors'), t('catalog.app.cladding')],
    imagem: "/images/materiais/marrom-absoluto.webp",
    descricao: t('catalog.desc.42')
  },
  {
    id: 43,
    nome: t('catalog.name.43'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: "PR",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.cladding'), t('catalog.app.bathrooms')],
    imagem: "/images/materiais/michelangelo-nuvolato.webp",
    descricao: t('catalog.desc.43')
  },
  {
    id: 44,
    nome: t('catalog.name.44'),
    tipo: "quartzito",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.gourmet'), t('catalog.app.cladding')],
    imagem: "/images/materiais/mont-blanc.webp",
    descricao: t('catalog.desc.44')
  },
  {
    id: 45,
    nome: t('catalog.name.45'),
    tipo: "granito",
    cor: t('catalog.colors.ochre'),
    origem: "MG",
    aplicacoes: [t('catalog.app.cladding'), t('catalog.app.floors'), t('catalog.app.facades')],
    imagem: "/images/materiais/ocre-itabira.webp",
    descricao: t('catalog.desc.45')
  },
  {
    id: 46,
    nome: t('catalog.name.46'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.imported'),
    aplicacoes: [t('catalog.app.lighting'), t('catalog.app.decorative_countertops')],
    imagem: "/images/materiais/onix-white.webp",
    descricao: t('catalog.desc.46')
  },
  {
    id: 47,
    nome: t('catalog.name.47'),
    tipo: "quartzito",
    cor: t('catalog.colors.beige'),
    origem: "CE",
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/perla-santana.webp",
    descricao: t('catalog.desc.47')
  },
  {
    id: 48,
    nome: t('catalog.name.48'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.greece'),
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.bathrooms')],
    imagem: "/images/materiais/pigues.webp",
    descricao: t('catalog.desc.48')
  },
  {
    id: 49,
    nome: t('catalog.name.49'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: "ES",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.cladding')],
    imagem: "/images/materiais/pinta-cinza.webp",
    descricao: t('catalog.desc.49')
  },
  {
    id: 50,
    nome: t('catalog.name.50'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.cladding'), t('catalog.app.details')],
    imagem: "/images/materiais/pinta-verde.webp",
    descricao: t('catalog.desc.50')
  },
  {
    id: 51,
    nome: t('catalog.name.51'),
    tipo: "granito",
    cor: t('catalog.colors.black'),
    origem: t('catalog.origin.imported'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors'), t('catalog.app.cladding')],
    imagem: "/images/materiais/preto-absoluto.webp",
    descricao: t('catalog.desc.51')
  },
  {
    id: 52,
    nome: t('catalog.name.52'),
    tipo: "granito",
    cor: t('catalog.colors.black'),
    origem: t('catalog.origin.india'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors')],
    imagem: "/images/materiais/preto-indiano.webp",
    descricao: t('catalog.desc.52')
  },
  {
    id: 53,
    nome: t('catalog.name.53'),
    tipo: "granito",
    cor: t('catalog.colors.black'),
    origem: "ES",
    aplicacoes: [t('catalog.app.kitchens'), t('catalog.app.bathrooms'), t('catalog.app.external'), t('catalog.app.garages')],
    imagem: "/images/materiais/preto-santa-angelica.webp",
    descricao: t('catalog.desc.53')
  },
  {
    id: 54,
    nome: t('catalog.name.54'),
    tipo: "granito",
    cor: t('catalog.colors.black'),
    origem: "ES",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.countertops'), t('catalog.app.cladding'), t('catalog.app.stairs')],
    imagem: "/images/materiais/preto-sao-gabriel.webp",
    descricao: t('catalog.desc.54')
  },
  {
    id: 55,
    nome: t('catalog.name.55'),
    tipo: "granito",
    cor: t('catalog.colors.black'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors')],
    imagem: "/images/materiais/preto-semi-absoluto.webp",
    descricao: t('catalog.desc.55')
  },
  {
    id: 56,
    nome: t('catalog.name.56'),
    tipo: "granito",
    cor: t('catalog.colors.black'),
    origem: "BA",
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/preto-via-lactea.webp",
    descricao: t('catalog.desc.56')
  },
  {
    id: 57,
    nome: t('catalog.name.57'),
    tipo: "quartzo",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.kitchen_countertops'), "Lavatórios", "Áreas Internas"],
    imagem: "/images/materiais/quartzo-branco.webp",
    descricao: t('catalog.desc.57')
  },
  {
    id: 58,
    nome: t('catalog.name.58'),
    tipo: "quartzo",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.islands'), t('catalog.app.cladding')],
    imagem: "/images/materiais/quartzo-calacata.webp",
    descricao: t('catalog.desc.58')
  },
  {
    id: 59,
    nome: t('catalog.name.59'),
    tipo: "quartzo",
    cor: t('catalog.colors.gray'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.cladding'), t('catalog.app.internal_floors')],
    imagem: "/images/materiais/quartzo-cinza.webp",
    descricao: t('catalog.desc.59')
  },
  {
    id: 60,
    nome: t('catalog.name.60'),
    tipo: "quartzo",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/quartzo-valentino.webp",
    descricao: t('catalog.desc.60')
  },
  {
    id: 61,
    nome: t('catalog.name.61'),
    tipo: "marmore",
    cor: t('catalog.colors.gray'),
    origem: "ES",
    aplicacoes: [t('catalog.app.cladding'), t('catalog.app.floors'), t('catalog.app.bathrooms')],
    imagem: "/images/materiais/raja-cinza.webp",
    descricao: t('catalog.desc.61')
  },
  {
    id: 62,
    nome: t('catalog.name.62'),
    tipo: "quartzito",
    cor: t('catalog.colors.white'),
    origem: "MG",
    aplicacoes: [t('catalog.app.external_floors'), t('catalog.app.pool_edges')],
    imagem: "/images/materiais/sao-tome-branco.webp",
    descricao: t('catalog.desc.62')
  },
  {
    id: 63,
    nome: t('catalog.name.63'),
    tipo: "quartzo",
    cor: t('catalog.colors.brown'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/silestone-unsui.webp",
    descricao: t('catalog.desc.63')
  },
  {
    id: 64,
    nome: t('catalog.name.64'),
    tipo: "supernano",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors'), t('catalog.app.cladding')],
    imagem: "/images/materiais/supernano.webp",
    descricao: t('catalog.desc.64')
  },
  {
    id: 65,
    nome: t('catalog.name.65'),
    tipo: "quartzito",
    cor: t('catalog.colors.beige'),
    origem: "CE",
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors'), t('catalog.app.luxury_cladding')],
    imagem: "/images/materiais/taj-mahal.webp",
    descricao: t('catalog.desc.65')
  },
  {
    id: 66,
    nome: t('catalog.name.66'),
    tipo: "marmore",
    cor: t('catalog.colors.beige'),
    origem: "BA",
    aplicacoes: [t('catalog.app.walls'), t('catalog.app.internal_floors'), t('catalog.app.washbasins')],
    imagem: "/images/materiais/travertino.webp",
    descricao: t('catalog.desc.66')
  },
  {
    id: 67,
    nome: t('catalog.name.67'),
    tipo: "marmore",
    cor: t('catalog.colors.beige'),
    origem: t('catalog.origin.italy'),
    aplicacoes: [t('catalog.app.walls'), t('catalog.app.floors')],
    imagem: "/images/materiais/travertino-romano.webp",
    descricao: t('catalog.desc.67')
  },
  {
    id: 68,
    nome: t('catalog.name.68'),
    tipo: "ultracompacto",
    cor: t('catalog.colors.gray'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors'), t('catalog.app.facades')],
    imagem: "/images/materiais/ultracompacto-marmorizado-cinza.webp",
    descricao: t('catalog.desc.68')
  },
  {
    id: 69,
    nome: t('catalog.name.69'),
    tipo: "granito",
    cor: t('catalog.colors.green'),
    origem: "MG",
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors')],
    imagem: "/images/materiais/verde-pantanal.webp",
    descricao: t('catalog.desc.69')
  },
  {
    id: 70,
    nome: t('catalog.name.70'),
    tipo: "granito",
    cor: t('catalog.colors.green'),
    origem: "SP",
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors'), t('catalog.app.cladding')],
    imagem: "/images/materiais/verde-ubatuba.webp",
    descricao: t('catalog.desc.70')
  },
  {
    id: 71,
    nome: t('catalog.name.71'),
    tipo: "granito",
    cor: t('catalog.colors.red'),
    origem: "DF",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.facades')],
    imagem: "/images/materiais/vermelho-brasilia.webp",
    descricao: t('catalog.desc.71')
  },
  {
    id: 72,
    nome: t('catalog.name.72'),
    tipo: "quartzo",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.islands')],
    imagem: "/images/materiais/white-pearl.webp",
    descricao: t('catalog.desc.72')
  },
  {
    id: 73,
    nome: t('catalog.name.73'),
    tipo: "granito",
    cor: t('catalog.colors.white'),
    origem: "ES",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/white-rose.webp",
    descricao: t('catalog.desc.73')
  },
  {
    id: 74,
    nome: t('catalog.name.74'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: "ES",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.cladding'), t('catalog.app.bathrooms')],
    imagem: "/images/materiais/marmore-branco-espirito-santo.webp",
    descricao: t('catalog.desc.74')
  },
  {
    id: 75,
    nome: t('catalog.name.75'),
    tipo: "quartzito",
    cor: t('catalog.colors.green'),
    origem: "CE",
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.luxury_cladding'), t('catalog.app.details')],
    imagem: "/images/materiais/quartzito-botanic-green.webp",
    descricao: t('catalog.desc.75')
  },
  {
    id: 76,
    nome: t('catalog.name.76'),
    tipo: "marmore",
    cor: t('catalog.colors.varied'),
    origem: t('catalog.origin.imported'),
    aplicacoes: [t('catalog.app.cladding'), t('catalog.app.bathrooms'), t('catalog.app.internal_floors')],
    imagem: "/images/materiais/marmore-arabescato-orobico.webp",
    descricao: t('catalog.desc.76')
  },
  {
    id: 77,
    nome: t('catalog.name.77'),
    tipo: "ultracompacto",
    cor: t('catalog.colors.beige'),
    origem: t('catalog.origin.industrialized'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.facades'), t('catalog.app.floors')],
    imagem: "/images/materiais/laminatto-cashmere.webp",
    descricao: t('catalog.desc.77')
  },
  {
    id: 78,
    nome: t('catalog.name.78'),
    tipo: "outros",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.facades'), t('catalog.app.external'), t('catalog.app.walls')],
    imagem: "/images/materiais/pedra-madeira-branco-are.webp",
    descricao: t('catalog.desc.78')
  },
  {
    id: 79,
    nome: t('catalog.name.79'),
    tipo: "outros",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.facades'), t('catalog.app.external'), t('catalog.app.walls')],
    imagem: "/images/materiais/pedra-moledo-branca.webp",
    descricao: t('catalog.desc.79')
  },
  {
    id: 80,
    nome: t('catalog.name.80'),
    tipo: "quartzito",
    cor: t('catalog.colors.blue'),
    origem: "BA",
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.luxury_cladding'), t('catalog.app.floors')],
    imagem: "/images/materiais/quartzito-azul-macaubas.webp",
    descricao: t('catalog.desc.80')
  },
  {
    id: 81,
    nome: t('catalog.name.81'),
    tipo: "granito",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.countertops'), t('catalog.app.floors'), t('catalog.app.stairs')],
    imagem: "/images/materiais/granito-ouro-branco.webp",
    descricao: t('catalog.desc.81')
  },
  {
    id: 82,
    nome: t('catalog.name.82'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.imported'),
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.bathrooms'), t('catalog.app.cladding')],
    imagem: "/images/materiais/marmore-matarazzo.webp",
    descricao: t('catalog.desc.82')
  },
  {
    id: 83,
    nome: t('catalog.name.83'),
    tipo: "granito",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.national'),
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.countertops'), t('catalog.app.cladding')],
    imagem: "/images/materiais/granito-branco-polar.webp",
    descricao: t('catalog.desc.83')
  },
  {
    id: 84,
    nome: t('catalog.name.84'),
    tipo: "marmore",
    cor: t('catalog.colors.white'),
    origem: t('catalog.origin.imported'),
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.cladding'), t('catalog.app.bathrooms')],
    imagem: "/images/materiais/marmore-valentino.webp",
    descricao: t('catalog.desc.84')
  },
  {
    id: 85,
    nome: t('catalog.name.85'),
    tipo: "granito",
    cor: t('catalog.colors.gray'),
    origem: "ES",
    aplicacoes: [t('catalog.app.floors'), t('catalog.app.stairs'), t('catalog.app.commercial')],
    imagem: "/images/materiais/granito-cinza-castelo.webp",
    descricao: t('catalog.desc.85')
  },
  ];

  return materials.map((material) => ({
    ...material,
    imagem: MISSING_MATERIAL_IMAGES.has(material.imagem) ? MATERIAL_PLACEHOLDER : material.imagem,
    alt: material.alt ?? material.nome,
  }));
};
