# Expand Catalog with New Materials

I will update the catalog to include all materials from the provided list, correcting types and adding new categories.

## 1. Update Data Structure (`src/data/materiais.ts`)
- Update `Material` type definition to include new categories: `quartzito`, `quartzo`, `ultracompacto`, `supernano`, `outros`.
- Update existing entries to match the provided list (e.g., correct Granite vs Marble classifications).
- Add all missing materials from the list (approx. 40 new items) with placeholder images and guessed attributes based on their names.

## 2. Update Catalog Page (`src/pages/Catalogo.tsx`)
- Update filter dropdown to include the new material types.
- Add specific badge colors for new types (e.g., Quartzite, Quartz, Ultracompact) in the material cards.

## 3. Update Translations (`src/contexts/translations.ts`)
- Add translation keys for the new material categories in PT, EN, and ES.
  - Quartzito / Quartzite / Cuarcita
  - Quartzo / Quartz / Cuarzo
  - Ultracompacto / Ultracompact / Ultracompacto
  - Supernano / Supernano / Supernano
  - Outros / Others / Otros

## 4. Verification
- Verify that all new materials appear in the catalog.
- Check if filters work correctly for the new types.
- Ensure translations are applied correctly.
