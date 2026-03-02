import { create } from 'zustand';

interface UIStore {
  isMenuOpen: boolean;
  isLoading: boolean;
  language: 'pt' | 'en' | 'es';
  toggleMenu: () => void;
  setIsMenuOpen: (isOpen: boolean) => void;
  setLoading: (loading: boolean) => void;
  setLanguage: (lang: 'pt' | 'en' | 'es') => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isMenuOpen: false,
  isLoading: false,
  language: 'pt',
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
  setLoading: (loading) => set({ isLoading: loading }),
  setLanguage: (lang) => set({ language: lang }),
}));

interface CatalogStore {
  searchTerm: string;
  selectedType: string;
  selectedColor: string;
  setSearchTerm: (term: string) => void;
  setSelectedType: (type: string) => void;
  setSelectedColor: (color: string) => void;
  resetFilters: () => void;
}

export const useCatalogStore = create<CatalogStore>((set) => ({
  searchTerm: '',
  selectedType: 'todos',
  selectedColor: 'todas',
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSelectedType: (type) => set({ selectedType: type }),
  setSelectedColor: (color) => set({ selectedColor: color }),
  resetFilters: () => set({ searchTerm: '', selectedType: 'todos', selectedColor: 'todas' }),
}));

interface ScrollStore {
  scrollY: number;
  isScrolled: boolean;
  setScrollY: (y: number) => void;
  setIsScrolled: (scrolled: boolean) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
  scrollY: 0,
  isScrolled: false,
  setScrollY: (y) => set({ scrollY: y }),
  setIsScrolled: (scrolled) => set({ isScrolled: scrolled }),
}));