// Função para obter imagem do material
export const getMaterialImage = (materialName: string, tipo: 'marmore' | 'granito', cor: string): string => {
  // Tenta a imagem específica do material
  const formattedName = materialName.toLowerCase().replace(/\s+/g, '-');
  return `/images/materiais/${formattedName}.webp`;
};

// Função para tratar erro de imagem - usa imagem placeholder padrão
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, tipo: 'marmore' | 'granito', cor: string) => {
  e.currentTarget.src = '/images/placeholder-material.svg';
};