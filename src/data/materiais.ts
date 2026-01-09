export type Material = {
  id: number;
  nome: string;
  tipo: "marmore" | "granito" | "quartzito" | "quartzo" | "ultracompacto" | "supernano" | "outros";
  cor: string;
  origem: string;
  aplicacoes: string[];
  imagem: string;
  descricao: string;
};

export const materiaisExemplo: Material[] = [
  // 1. GRANITO AMARELO CAPRI
  {
    id: 1,
    nome: "Amarelo Capri",
    tipo: "granito",
    cor: "Amarelo",
    origem: "BA",
    aplicacoes: ["Pisos", "Paredes", "Áreas sociais", "Decoração"],
    imagem: "/images/materiais/amarelo-capri.webp",
    descricao: "Granito amarelo vibrante com tons dourados que aquecem os ambientes."
  },
  // 2. GRANITO AMARELO ÍCARAI
  {
    id: 2,
    nome: "Amarelo Icaraí",
    tipo: "granito",
    cor: "Amarelo",
    origem: "RJ",
    aplicacoes: ["Pisos", "Revestimentos", "Bancadas"],
    imagem: "/images/materiais/amarelo-icarai.webp",
    descricao: "Granito amarelo com tons quentes e vibrantes."
  },
  // 3. GRANITO AMARELO MARACUJÁ
  {
    id: 3,
    nome: "Amarelo Maracujá",
    tipo: "granito",
    cor: "Amarelo",
    origem: "BA",
    aplicacoes: ["Cozinhas", "Áreas internas", "Bancadas", "Pias"],
    imagem: "/images/materiais/amarelo-maracuja.webp",
    descricao: "Granito amarelo único com padrão exclusivo e cores vibrantes."
  },
  // 4. GRANITO AMARELO ORNAMENTAL
  {
    id: 4,
    nome: "Amarelo Ornamental",
    tipo: "granito",
    cor: "Amarelo",
    origem: "ES",
    aplicacoes: ["Pisos", "Bancadas", "Revestimentos"],
    imagem: "/images/materiais/amarelo-ornamental.webp",
    descricao: "Granito amarelo com pontilhados pretos e marrons, clássico."
  },
  // 5. GRANITO AMARELO SANTA CECÍLIA
  {
    id: 5,
    nome: "Amarelo Santa Cecília",
    tipo: "granito",
    cor: "Amarelo",
    origem: "ES",
    aplicacoes: ["Bancadas", "Pisos"],
    imagem: "/images/materiais/amarelo-santa-cecilia.webp",
    descricao: "Granito amarelo clássico e resistente."
  },
  // 6. GRANITO AMARELO VITÓRIA
  {
    id: 6,
    nome: "Amarelo Vitória",
    tipo: "granito",
    cor: "Amarelo",
    origem: "ES",
    aplicacoes: ["Paredes", "Banheiros", "Áreas sociais", "Decoração"],
    imagem: "/images/materiais/amarelo-vitoria.webp",
    descricao: "Granito amarelo sofisticado com padrão elegante e acabamento refinado."
  },
  // 7. ANFIBOLITO MADEIRUS
  {
    id: 7,
    nome: "Anfibolito Madeirus",
    tipo: "outros",
    cor: "Marrom",
    origem: "Nacional",
    aplicacoes: ["Revestimentos", "Pisos"],
    imagem: "/images/materiais/anfibolito-madeirus.webp",
    descricao: "Rocha metamórfica com textura que lembra madeira."
  },
  // 8. MÁRMORE BEGE BAHIA
  {
    id: 8,
    nome: "Bege Bahia",
    tipo: "marmore",
    cor: "Bege",
    origem: "BA",
    aplicacoes: ["Pisos", "Revestimentos", "Fachadas"],
    imagem: "/images/materiais/bege-bahia.webp",
    descricao: "Mármore bege nacional muito utilizado em pisos e revestimentos."
  },
  // 9. GRANITO BEGE IPANEMA
  {
    id: 9,
    nome: "Bege Ipanema",
    tipo: "granito",
    cor: "Bege",
    origem: "RJ",
    aplicacoes: ["Pisos", "Cozinhas", "Áreas internas", "Salas"],
    imagem: "/images/materiais/bege-ipanema.webp",
    descricao: "Granito bege versátil com tons quentes que combinam com diversos estilos."
  },
  // 10. QUARTZITO BIANCO SUPERIORE
  {
    id: 10,
    nome: "Bianco Superiore",
    tipo: "quartzito",
    cor: "Branco",
    origem: "Importado",
    aplicacoes: ["Bancadas de Luxo", "Revestimentos"],
    imagem: "/images/materiais/bianco-superiore.webp",
    descricao: "Quartzito branco de extrema pureza e dureza."
  },
  // 11. GRANITO BRANCO ALASKA
  {
    id: 11,
    nome: "Branco Alaska",
    tipo: "granito",
    cor: "Branco",
    origem: "Importado",
    aplicacoes: ["Bancadas", "Paredes"],
    imagem: "/images/materiais/branco-alaska.webp",
    descricao: "Granito branco com grandes cristais de quartzo e feldspato."
  },
  // 12. GRANITO BRANCO ARABESCO
  {
    id: 12,
    nome: "Branco Arabesco",
    tipo: "granito",
    cor: "Branco",
    origem: "ES",
    aplicacoes: ["Pisos", "Bancadas", "Revestimentos"],
    imagem: "/images/materiais/branco-arabesco.webp",
    descricao: "Granito branco com movimentos cinzas fluidos."
  },
  // 13. MÁRMORE BRANCO CARRARINHA
  {
    id: 13,
    nome: "Branco Carrarinha",
    tipo: "marmore",
    cor: "Branco",
    origem: "Nacional",
    aplicacoes: ["Revestimentos", "Banheiros"],
    imagem: "/images/materiais/branco-carrarinha.webp",
    descricao: "Mármore nacional que remete ao Carrara italiano."
  },
  // 14. GRANITO BRANCO CEARÁ
  {
    id: 14,
    nome: "Branco Ceará",
    tipo: "granito",
    cor: "Branco",
    origem: "CE",
    aplicacoes: ["Pisos", "Revestimentos"],
    imagem: "/images/materiais/branco-ceara.webp",
    descricao: "Granito branco com pintas pretas bem distribuídas."
  },
  // 15. GRANITO BRANCO COTTON
  {
    id: 15,
    nome: "Branco Cotton",
    tipo: "granito",
    cor: "Branco",
    origem: "ES",
    aplicacoes: ["Bancadas", "Pisos"],
    imagem: "/images/materiais/branco-cotton.webp",
    descricao: "Granito branco com aparência suave como algodão."
  },
  // 16. GRANITO BRANCO DALLAS
  {
    id: 16,
    nome: "Branco Dallas",
    tipo: "granito",
    cor: "Branco",
    origem: "ES",
    aplicacoes: ["Pisos", "Bancadas", "Revestimentos"],
    imagem: "/images/materiais/branco-dallas.webp",
    descricao: "Granito branco com pontilhados em tons de vinho e cinza."
  },
  // 17. GRANITO BRANCO FORTALEZA
  {
    id: 17,
    nome: "Branco Fortaleza",
    tipo: "granito",
    cor: "Branco",
    origem: "CE",
    aplicacoes: ["Pisos", "Bancadas", "Revestimentos"],
    imagem: "/images/materiais/branco-fortaleza.webp",
    descricao: "Granito branco com pintas cinzas e pretas, alta durabilidade."
  },
  // 18. GRANITO BRANCO ITAÚNAS
  {
    id: 18,
    nome: "Branco Itaúnas",
    tipo: "granito",
    cor: "Branco",
    origem: "ES",
    aplicacoes: ["Pisos", "Revestimentos", "Bancadas"],
    imagem: "/images/materiais/branco-itaunas.webp",
    descricao: "Granito branco com aparência que remete ao mármore, muito utilizado em pisos."
  },
  // 19. QUARTZITO BRANCO MACAÚBAS
  {
    id: 19,
    nome: "Branco Macaúbas",
    tipo: "quartzito",
    cor: "Branco",
    origem: "BA",
    aplicacoes: ["Bancadas", "Pisos", "Revestimentos"],
    imagem: "/images/materiais/branco-macaubas.webp",
    descricao: "Quartzito branco com veios lineares cinzas, nobre e resistente."
  },
  // 20. MÁRMORE BRANCO MOURA
  {
    id: 20,
    nome: "Branco Moura",
    tipo: "marmore",
    cor: "Branco",
    origem: "Nacional",
    aplicacoes: ["Pisos", "Revestimentos"],
    imagem: "/images/materiais/branco-moura.webp",
    descricao: "Mármore branco com veios cinzas suaves."
  },
  // 21. MÁRMORE BRANCO PARANÁ
  {
    id: 21,
    nome: "Branco Paraná",
    tipo: "marmore",
    cor: "Branco",
    origem: "PR",
    aplicacoes: ["Pisos", "Revestimentos"],
    imagem: "/images/materiais/branco-parana.webp",
    descricao: "Mármore branco nacional de alta dureza e beleza."
  },
  // 22. GRANITO BRANCO PITAYA
  {
    id: 22,
    nome: "Branco Pitaya",
    tipo: "granito",
    cor: "Branco",
    origem: "BA",
    aplicacoes: ["Bancadas", "Pisos"],
    imagem: "/images/materiais/branco-pitaya.webp",
    descricao: "Granito branco com padrão exclusivo."
  },
  // 23. BRANCO PRIME
  {
    id: 23,
    nome: "Branco Prime",
    tipo: "ultracompacto",
    cor: "Branco",
    origem: "Industrializado",
    aplicacoes: ["Bancadas de Banheiro", "Revestimentos Internos", "Lavatórios"],
    imagem: "/images/materiais/branco-prime.webp",
    descricao: "Material industrializado branco puro, ideal para ambientes internos e lavatórios."
  },
  // 24. GRANITO BRANCO SIENA
  {
    id: 24,
    nome: "Branco Siena",
    tipo: "granito",
    cor: "Branco",
    origem: "ES",
    aplicacoes: ["Pisos", "Bancadas", "Revestimentos"],
    imagem: "/images/materiais/branco-siena.webp",
    descricao: "Granito branco com pontilhados cinzas e pretos, muito popular e resistente."
  },
  // 25. GRANITO CAFÉ IMPERIAL
  {
    id: 25,
    nome: "Café Imperial",
    tipo: "granito",
    cor: "Marrom",
    origem: "MG",
    aplicacoes: ["Pisos", "Bancadas", "Detalhes"],
    imagem: "/images/materiais/cafe-imperial.webp",
    descricao: "Granito marrom escuro com grãos marcantes, muito sofisticado."
  },
  // 26. MÁRMORE CALACATA
  {
    id: 26,
    nome: "Calacata",
    tipo: "marmore",
    cor: "Branco",
    origem: "Importado",
    aplicacoes: ["Bancadas", "Pisos", "Revestimentos de Luxo"],
    imagem: "/images/materiais/calacata.webp",
    descricao: "Mármore branco de alto padrão com veios cinzas marcantes e fundo claro."
  },
  // 27. MÁRMORE CALACATTA GOLD
  {
    id: 27,
    nome: "Calacatta Gold",
    tipo: "marmore",
    cor: "Branco",
    origem: "Importado",
    aplicacoes: ["Bancadas", "Revestimentos de Luxo"],
    imagem: "/images/materiais/calacatta-gold.webp",
    descricao: "Mármore branco com veios dourados, ícone de luxo."
  },
  // 28. GRANITO CINZA ANDORINHA
  {
    id: 28,
    nome: "Cinza Andorinha",
    tipo: "granito",
    cor: "Cinza",
    origem: "SP",
    aplicacoes: ["Pisos", "Escadas", "Soleiras"],
    imagem: "/images/materiais/cinza-andorinha.webp",
    descricao: "Granito cinza com pigmentos pretos, excelente custo-benefício."
  },
  // 29. GRANITO CINZA CORUMBÁ
  {
    id: 29,
    nome: "Cinza Corumbá",
    tipo: "granito",
    cor: "Cinza",
    origem: "MS",
    aplicacoes: ["Pisos", "Revestimentos", "Bancadas"],
    imagem: "/images/materiais/cinza-corumba.webp",
    descricao: "Granito cinza clássico e resistente, ideal para grandes obras."
  },
  // 30. GRANITO CINZA CORUMBAZINHO
  {
    id: 30,
    nome: "Cinza Corumbazinho",
    tipo: "granito",
    cor: "Cinza",
    origem: "MS",
    aplicacoes: ["Pisos", "Revestimentos", "Escadas"],
    imagem: "/images/materiais/cinza-corumbazinho.webp",
    descricao: "Granito cinza com grãos menores que o Corumbá tradicional."
  },
  // 31. GRANITO CINZA MUNDO NOVO
  {
    id: 31,
    nome: "Cinza Mundo Novo",
    tipo: "granito",
    cor: "Cinza",
    origem: "Nacional",
    aplicacoes: ["Pisos", "Calçadas"],
    imagem: "/images/materiais/cinza-mundo-novo.webp",
    descricao: "Granito cinza clássico para obras comerciais e residenciais."
  },
  // 32. MÁRMORE CREMA MARFIL EXTRA
  {
    id: 32,
    nome: "Crema Marfil Extra",
    tipo: "marmore",
    cor: "Bege",
    origem: "Importado",
    aplicacoes: ["Pisos Internos", "Banheiros", "Revestimentos"],
    imagem: "/images/materiais/crema-marfil.webp",
    descricao: "Mármore bege espanhol de tonalidade uniforme e acabamento nobre."
  },
  // 33. QUARTZITO DAKAR
  {
    id: 33,
    nome: "Dakar",
    tipo: "quartzito",
    cor: "Bege",
    origem: "Nacional",
    aplicacoes: ["Revestimentos", "Pisos", "Bancadas"],
    imagem: "/images/materiais/dakar.webp",
    descricao: "Quartzito resistente com tons terrosos e bege."
  },
  // 34. ULTRACOMPACTA DEKTON LAOS
  {
    id: 34,
    nome: "Dekton Laos",
    tipo: "ultracompacto",
    cor: "Cinza",
    origem: "Industrializado",
    aplicacoes: ["Fachadas", "Pisos", "Bancadas"],
    imagem: "/images/materiais/dekton-laos.webp",
    descricao: "Superfície ultracompacta inspirada em cimento industrial."
  },
  // 35. ULTRACOMPACTA DEKTON SIROCCO
  {
    id: 35,
    nome: "Dekton Sirocco",
    tipo: "ultracompacto",
    cor: "Cinza",
    origem: "Industrializado",
    aplicacoes: ["Pisos", "Revestimentos"],
    imagem: "/images/materiais/dekton-sirocco.webp",
    descricao: "Ultracompacto cinza calcário com textura natural."
  },
  // 36. MÁRMORE GREY EMPERADOR
  {
    id: 36,
    nome: "Grey Emperador",
    tipo: "marmore",
    cor: "Cinza",
    origem: "Importado",
    aplicacoes: ["Revestimentos", "Lavabos"],
    imagem: "/images/materiais/grey-emperador.webp",
    descricao: "Mármore cinza com veios brancos, sofisticação moderna."
  },
  // 37. GRANITO JUPARANÁ
  {
    id: 37,
    nome: "Juparaná",
    tipo: "granito",
    cor: "Cinza",
    origem: "Nacional",
    aplicacoes: ["Pisos", "Bancadas"],
    imagem: "/images/materiais/juparana.webp",
    descricao: "Granito com movimentos ondulados característicos."
  },
  // 38. QUARTZO CINZA KENSHO
  {
    id: 38,
    nome: "Kensho",
    tipo: "quartzo",
    cor: "Cinza",
    origem: "Industrializado",
    aplicacoes: ["Bancadas", "Revestimentos"],
    imagem: "/images/materiais/kensho.webp",
    descricao: "Quartzo cinza claro da Silestone, inspiração oriental."
  },
  // 39. QUARTZITO KOUROS
  {
    id: 39,
    nome: "Kouros",
    tipo: "quartzito",
    cor: "Branco",
    origem: "Nacional",
    aplicacoes: ["Bancadas", "Revestimentos"],
    imagem: "/images/materiais/kouros.webp",
    descricao: "Quartzito branco com veios dourados e textura única."
  },
  // 40. LÂMINA ULTRACOMPACTA
  {
    id: 40,
    nome: "Lâmina Ultracompacta",
    tipo: "ultracompacto",
    cor: "Variada",
    origem: "Industrializado",
    aplicacoes: ["Revestimentos", "Mobiliário"],
    imagem: "/images/materiais/lamina-ultracompacta.webp",
    descricao: "Lâminas finas e resistentes para revestimento de móveis e paredes."
  },
  // 41. MÁRMORE BRANCO
  {
    id: 41,
    nome: "Mármore Branco",
    tipo: "marmore",
    cor: "Branco",
    origem: "Nacional",
    aplicacoes: ["Revestimentos", "Pisos", "Banheiros"],
    imagem: "/images/materiais/marmore-branco.webp",
    descricao: "Mármore branco nacional clássico."
  },
  // 42. GRANITO MARROM ABSOLUTO
  {
    id: 42,
    nome: "Marrom Absoluto",
    tipo: "granito",
    cor: "Marrom",
    origem: "BA",
    aplicacoes: ["Bancadas", "Pisos", "Revestimentos"],
    imagem: "/images/materiais/marrom-absoluto.webp",
    descricao: "Granito marrom uniforme e elegante."
  },
  // 43. MÁRMORE MICHELANGELO NUVOLATO
  {
    id: 43,
    nome: "Michelangelo Nuvolato",
    tipo: "marmore",
    cor: "Branco",
    origem: "PR",
    aplicacoes: ["Pisos", "Revestimentos", "Banheiros"],
    imagem: "/images/materiais/michelangelo-nuvolato.webp",
    descricao: "Mármore branco paranaense com veios dourados e cinzas, de beleza única."
  },
  // 44. QUARTZITO MONT BLANC
  {
    id: 44,
    nome: "Mont Blanc",
    tipo: "quartzito",
    cor: "Branco",
    origem: "Nacional",
    aplicacoes: ["Bancadas", "Áreas Gourmet", "Revestimentos"],
    imagem: "/images/materiais/mont-blanc.webp",
    descricao: "Quartzito branco com veios cinzas e aparência cristalina."
  },
  // 45. GRANITO OCRE ITABIRA
  {
    id: 45,
    nome: "Ocre Itabira",
    tipo: "granito",
    cor: "Ocre",
    origem: "MG",
    aplicacoes: ["Revestimentos", "Pisos", "Fachadas"],
    imagem: "/images/materiais/ocre-itabira.webp",
    descricao: "Granito de tom ocre acinzentado, muito resistente."
  },
  // 46. MÁRMORE ONIX WHITE TRANSLÚCIDO
  {
    id: 46,
    nome: "Onix White Translúcido",
    tipo: "marmore",
    cor: "Branco",
    origem: "Importado",
    aplicacoes: ["Iluminação", "Bancadas Decorativas"],
    imagem: "/images/materiais/onix-white.webp",
    descricao: "Pedra translúcida espetacular para projetos com iluminação."
  },
  // 47. QUARTZITO PERLA SANTANA
  {
    id: 47,
    nome: "Perla Santana",
    tipo: "quartzito",
    cor: "Bege",
    origem: "CE",
    aplicacoes: ["Bancadas", "Revestimentos"],
    imagem: "/images/materiais/perla-santana.webp",
    descricao: "Quartzito de tom perolado e alta translucidez."
  },
  // 48. MÁRMORE PIGUÊS
  {
    id: 48,
    nome: "Piguês",
    tipo: "marmore",
    cor: "Branco",
    origem: "Grécia",
    aplicacoes: ["Pisos", "Banheiros"],
    imagem: "/images/materiais/pigues.webp",
    descricao: "Mármore grego branco com veios cinzas suaves."
  },
  // 49. MÁRMORE PINTA CINZA
  {
    id: 49,
    nome: "Pinta Cinza",
    tipo: "marmore",
    cor: "Branco",
    origem: "ES",
    aplicacoes: ["Pisos", "Revestimentos"],
    imagem: "/images/materiais/pinta-cinza.webp",
    descricao: "Mármore branco com pequenas pintas cinzas."
  },
  // 50. MÁRMORE PINTA VERDE
  {
    id: 50,
    nome: "Pinta Verde",
    tipo: "marmore",
    cor: "Branco",
    origem: "Nacional",
    aplicacoes: ["Revestimentos", "Detalhes"],
    imagem: "/images/materiais/pinta-verde.webp",
    descricao: "Mármore branco com pigmentos verdes sutis."
  },
  // 51. GRANITO PRETO ABSOLUTO
  {
    id: 51,
    nome: "Preto Absoluto",
    tipo: "granito",
    cor: "Preto",
    origem: "Importado",
    aplicacoes: ["Bancadas", "Pisos", "Revestimentos"],
    imagem: "/images/materiais/preto-absoluto.webp",
    descricao: "Granito preto profundo e uniforme, sinônimo de elegância moderna."
  },
  // 52. GRANITO PRETO INDIANO
  {
    id: 52,
    nome: "Preto Indiano",
    tipo: "granito",
    cor: "Preto",
    origem: "Índia",
    aplicacoes: ["Bancadas", "Pisos"],
    imagem: "/images/materiais/preto-indiano.webp",
    descricao: "Granito preto com veios brancos discretos."
  },
  // 53. GRANITO PRETO SANTA ANGÉLICA
  {
    id: 53,
    nome: "Preto Santa Angélica",
    tipo: "granito",
    cor: "Preto",
    origem: "ES",
    aplicacoes: ["Cozinhas", "Banheiros", "Áreas externas", "Garagens"],
    imagem: "/images/materiais/preto-santa-angelica.webp",
    descricao: "Granito preto nacional com excelente custo-benefício e durabilidade."
  },
  // 54. GRANITO PRETO SÃO GABRIEL
  {
    id: 54,
    nome: "Preto São Gabriel",
    tipo: "granito",
    cor: "Preto",
    origem: "ES",
    aplicacoes: ["Pisos", "Bancadas", "Revestimentos", "Escadas"],
    imagem: "/images/materiais/preto-sao-gabriel.webp",
    descricao: "Granito preto de grão médio e uniforme, muito resistente e versátil."
  },
  // 55. GRANITO PRETO SEMI ABSOLUTO
  {
    id: 55,
    nome: "Preto Semi Absoluto",
    tipo: "granito",
    cor: "Preto",
    origem: "Nacional",
    aplicacoes: ["Bancadas", "Pisos"],
    imagem: "/images/materiais/preto-semi-absoluto.webp",
    descricao: "Granito preto quase uniforme, excelente alternativa ao Absoluto."
  },
  // 56. GRANITO PRETO VIA LÁCTEA
  {
    id: 56,
    nome: "Preto Via Láctea",
    tipo: "granito",
    cor: "Preto",
    origem: "BA",
    aplicacoes: ["Bancadas", "Revestimentos"],
    imagem: "/images/materiais/preto-via-lactea.webp",
    descricao: "Granito preto com veios brancos que lembram uma galáxia."
  },
  // 57. QUARTZO BRANCO
  {
    id: 57,
    nome: "Quartzo Branco",
    tipo: "quartzo",
    cor: "Branco",
    origem: "Industrializado",
    aplicacoes: ["Bancadas de Cozinha", "Lavatórios", "Áreas Internas"],
    imagem: "/images/materiais/quartzo-branco.webp",
    descricao: "Superfície de quartzo branco puro, resistente a manchas e riscos."
  },
  // 58. QUARTZO CALACATA
  {
    id: 58,
    nome: "Quartzo Calacata",
    tipo: "quartzo",
    cor: "Branco",
    origem: "Industrializado",
    aplicacoes: ["Bancadas", "Ilhas", "Revestimentos"],
    imagem: "/images/materiais/quartzo-calacata.webp",
    descricao: "Quartzo com veios que imitam o mármore Calacata, unindo beleza e resistência."
  },
  // 59. QUARTZO CINZA
  {
    id: 59,
    nome: "Quartzo Cinza",
    tipo: "quartzo",
    cor: "Cinza",
    origem: "Industrializado",
    aplicacoes: ["Bancadas", "Revestimentos", "Pisos Internos"],
    imagem: "/images/materiais/quartzo-cinza.webp",
    descricao: "Superfície de quartzo cinza uniforme e moderna."
  },
  // 60. QUARTZO VALENTINO
  {
    id: 60,
    nome: "Quartzo Valentino",
    tipo: "quartzo",
    cor: "Branco",
    origem: "Industrializado",
    aplicacoes: ["Bancadas", "Revestimentos"],
    imagem: "/images/materiais/quartzo-valentino.webp",
    descricao: "Quartzo com padrão marmorizado elegante."
  },
  // 61. MÁRMORE RAJA CINZA
  {
    id: 61,
    nome: "Raja Cinza",
    tipo: "marmore",
    cor: "Cinza",
    origem: "ES",
    aplicacoes: ["Revestimentos", "Pisos", "Banheiros"],
    imagem: "/images/materiais/raja-cinza.webp",
    descricao: "Mármore cinza com padrão que lembra textura de tecido, design sofisticado."
  },
  // 62. QUARTZITO SÃO TOMÉ BRANCO
  {
    id: 62,
    nome: "São Tomé Branco",
    tipo: "quartzito",
    cor: "Branco",
    origem: "MG",
    aplicacoes: ["Pisos Externos", "Bordas de Piscina"],
    imagem: "/images/materiais/sao-tome-branco.webp",
    descricao: "Pedra térmica e antiderrapante, ideal para áreas de lazer."
  },
  // 63. SILESTONE UNSUI
  {
    id: 63,
    nome: "Silestone Unsui",
    tipo: "quartzo",
    cor: "Marrom",
    origem: "Industrializado",
    aplicacoes: ["Bancadas", "Revestimentos"],
    imagem: "/images/materiais/silestone-unsui.webp",
    descricao: "Quartzo marrom acinzentado de tom sóbrio e elegante."
  },
  // 64. SUPERNANO (NANOGLASS)
  {
    id: 64,
    nome: "Supernano",
    tipo: "supernano",
    cor: "Branco",
    origem: "Industrializado",
    aplicacoes: ["Bancadas", "Pisos", "Revestimentos"],
    imagem: "/images/materiais/supernano.webp",
    descricao: "Superfície de vidro cristalizado branco puro, brilho intenso e dureza."
  },
  // 65. QUARTZITO TAJ MAHAL
  {
    id: 65,
    nome: "Taj Mahal",
    tipo: "quartzito",
    cor: "Bege",
    origem: "CE",
    aplicacoes: ["Bancadas", "Pisos", "Revestimentos de Luxo"],
    imagem: "/images/materiais/taj-mahal.webp",
    descricao: "Quartzito nobre de fundo creme translúcido, alta resistência e beleza única."
  },
  // 66. MÁRMORE TRAVERTINO NACIONAL
  {
    id: 66,
    nome: "Travertino Nacional",
    tipo: "marmore",
    cor: "Bege",
    origem: "BA",
    aplicacoes: ["Paredes", "Pisos Internos", "Lavabos"],
    imagem: "/images/materiais/travertino.webp",
    descricao: "Mármore bege com veios característicos, trazendo elegância e sofisticação."
  },
  // 67. TRAVERTINO ROMANO
  {
    id: 67,
    nome: "Travertino Romano",
    tipo: "marmore",
    cor: "Bege",
    origem: "IT",
    aplicacoes: ["Paredes", "Pisos"],
    imagem: "/images/materiais/travertino-romano.webp",
    descricao: "Clássico mármore italiano bege com veios horizontais."
  },
  // 68. ULTRACOMPACTO MARMORIZADO CINZA
  {
    id: 68,
    nome: "Ultracompacto Marmorizado Cinza",
    tipo: "ultracompacto",
    cor: "Cinza",
    origem: "Industrializado",
    aplicacoes: ["Bancadas", "Pisos", "Fachadas"],
    imagem: "/images/materiais/ultracompacto-marmorizado-cinza.webp",
    descricao: "Material tecnológico de alta performance com estética de mármore cinza."
  },
  // 69. GRANITO VERDE PANTANAL
  {
    id: 69,
    nome: "Verde Pantanal",
    tipo: "granito",
    cor: "Verde",
    origem: "MG",
    aplicacoes: ["Bancadas", "Pisos"],
    imagem: "/images/materiais/verde-pantanal.webp",
    descricao: "Granito verde com movimentos que remetem à natureza."
  },
  // 70. GRANITO VERDE UBATUBA
  {
    id: 70,
    nome: "Verde Ubatuba",
    tipo: "granito",
    cor: "Verde",
    origem: "SP",
    aplicacoes: ["Bancadas", "Pisos", "Revestimentos"],
    imagem: "/images/materiais/verde-ubatuba.webp",
    descricao: "Granito verde escuro, quase preto, muito resistente e tradicional."
  },
  // 71. GRANITO VERMELHO BRASILIA
  {
    id: 71,
    nome: "Vermelho Brasília",
    tipo: "granito",
    cor: "Vermelho",
    origem: "DF",
    aplicacoes: ["Pisos", "Fachadas"],
    imagem: "/images/materiais/vermelho-brasilia.webp",
    descricao: "Granito vermelho intenso e marcante."
  },
  // 72. QUARTZO WHITE PEARL
  {
    id: 72,
    nome: "White Pearl",
    tipo: "quartzo",
    cor: "Branco",
    origem: "Industrializado",
    aplicacoes: ["Bancadas", "Ilhas"],
    imagem: "/images/materiais/white-pearl.webp",
    descricao: "Quartzo branco com textura perolada sutil."
  },
  // 73. GRANITO WHITE ROSE
  {
    id: 73,
    nome: "White Rose",
    tipo: "granito",
    cor: "Branco",
    origem: "ES",
    aplicacoes: ["Pisos", "Bancadas", "Revestimentos"],
    imagem: "/images/materiais/white-rose.webp",
    descricao: "Granito branco com nuances rosadas sutis."
  }
];
