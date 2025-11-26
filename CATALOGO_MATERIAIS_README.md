# 📋 Catálogo de Materiais - Instruções

## ✅ Status Atual
Página de catálogo criada e funcionando! Você pode acessar em: `http://localhost:5174/catalogo`

## 📸 Como Adicionar Imagens Reais das Amostras

### 1. **Preparar as Imagens**
- **Formatos aceitos**: JPG, PNG, WEBP
- **Resolução recomendada**: 800x800px ou superior (quadrada)
- **Qualidade**: Alta definição para mostrar detalhes do material
- **Nome dos arquivos**: Use nomes descritivos (ex: `branco-itaunas.jpg`, `preto-sao-gabriel.jpg`)

### 2. **Onde Colocar as Imagens**
```
/public/images/materiais/
  ├── branco-itaunas.jpg
  ├── preto-sao-gabriel.jpg
  ├── bege-bahia.jpg
  └── ... suas imagens
```

### 3. **Como Atualizar o Catálogo**

#### Opção A: Substituição Simples (Recomendado)
1. Coloque suas imagens na pasta `/public/images/materiais/`
2. No arquivo `src/pages/Catalogo.tsx`, localize o array `materiaisExemplo`
3. Substitua os caminhos das imagens:

```tsx
// ANTES (placeholder):
imagem: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=White%20marble%20slab..."

// DEPOIS (sua imagem real):
imagem: "/images/materiais/branco-itaunas.jpg"
```

#### Opção B: Adicionar Novos Materiais
Copie e cole este formato para adicionar novos materiais:

```tsx
{
  id: 7, // próximo número disponível
  nome: "Nome do Seu Material",
  tipo: "marmore", // ou "granito"
  cor: "Branco", // cor predominante
  origem: "ES", // estado de origem
  aplicacoes: ["Pisos", "Paredes", "Cozinhas"], // aplicações possíveis
  imagem: "/images/materiais/seu-material.jpg", // caminho da imagem
  descricao: "Descrição detalhada do material..."
}
```

## 🎨 Dicas para Fotos de Qualidade

### Iluminação
- Use luz natural ou iluminação profissional
- Evite reflexos intensos que prejudiquem a visualização
- Mostre a textura real do material

### Ângulo e Enquadramento
- Foto frontal do material (vista de frente)
- Mostre uma área representativa do padrão
- Mantenha a câmera perpendicular à superfície

### Consistência
- Use o mesmo ângulo e iluminação para todos os materiais
- Isso cria um catálogo profissional e harmonioso

## 📋 Informações do Material

### Tipos Disponíveis
- **Mármore**: Para materiais com veios mais marcantes
- **Granito**: Para materiais com grãos mais uniformes

### Cores Sugeridas
Branco, Preto, Bege, Cinza, Verde, Rosa, Azul, Amarelo, Marrom

### Origens Comuns
ES (Espírito Santo), BA (Bahia), RS (Rio Grande do Sul), SP (São Paulo), MS (Mato Grosso do Sul)

### Aplicações Populares
Pisos, Paredes, Cozinhas, Banheiros, Áreas externas, Escritórios, Áreas sociais, Bancadas

## 🚀 Funcionalidades do Catálogo

✅ **Filtros**: Por tipo (mármore/granito) e cor
✅ **Busca**: Por nome ou descrição  
✅ **Visualização**: Modal com detalhes ampliados
✅ **Download**: Ficha técnica do material
✅ **Responsivo**: Funciona em celulares e tablets

## 📞 Precisa de Ajuda?

Se tiver dúvidas sobre como adicionar suas imagens ou quiser modificar o layout, o catálogo está totalmente customizável!