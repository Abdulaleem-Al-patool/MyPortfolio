/**
 * Theme & Color Palette Definitions
 * Centered on the requested palette:
 * #072227 (Abyss Dark Teal)
 * #35858B (Ocean Teal)
 * #4FBDBA (Seafoam Turquoise Accent)
 * #AEFEFF (Electric Icy Cyan)
 */

export const colorThemes = {
  // Primary: Abyss Teal & Ice Cyan (Default Theme)
  abyssTeal: {
    id: 'abyssTeal',
    name: 'Abyss Teal & Ice Cyan',
    nameAr: 'تركواز محيطي وسياني جليدي',
    previewColor: '#4FBDBA',
    bgPreview: '#072227',
    variables: {
      '--bg-primary': '#072227',
      '--bg-elevated': '#0d2f36',
      '--bg-surface': '#133c45',
      '--border-subtle': '#1d4d57',
      '--text-primary': '#AEFEFF',
      '--text-secondary': '#7bb5b8',
      '--accent': '#4FBDBA',
      '--accent-dim': '#35858B',
      '--brand-blue': '#35858B',
      '--success': '#5EC48C',
      '--warning': '#E5A93C',
    },
  },

  // Permutation 2: Electric Ice Highlight (High Contrast Cyan Accent)
  iceElectric: {
    id: 'iceElectric',
    name: 'Electric Cyan Glow',
    nameAr: 'سياني جليدي ساطع',
    previewColor: '#AEFEFF',
    bgPreview: '#05191d',
    variables: {
      '--bg-primary': '#05191d',
      '--bg-elevated': '#0b262c',
      '--bg-surface': '#10333b',
      '--border-subtle': '#35858B',
      '--text-primary': '#E8FBFC',
      '--text-secondary': '#82bfc2',
      '--accent': '#AEFEFF',
      '--accent-dim': '#4FBDBA',
      '--brand-blue': '#35858B',
      '--success': '#6FBF8B',
      '--warning': '#E5A93C',
    },
  },

  // Permutation 3: Deep Ocean Steel
  oceanSteel: {
    id: 'oceanSteel',
    name: 'Deep Ocean & Turquoise',
    nameAr: 'أزرق محيطي وتركواز نقي',
    previewColor: '#35858B',
    bgPreview: '#09252c',
    variables: {
      '--bg-primary': '#08262d',
      '--bg-elevated': '#10343d',
      '--bg-surface': '#18424c',
      '--border-subtle': '#255863',
      '--text-primary': '#AEFEFF',
      '--text-secondary': '#8cb8ba',
      '--accent': '#4FBDBA',
      '--accent-dim': '#35858B',
      '--brand-blue': '#35858B',
      '--success': '#5EC48C',
      '--warning': '#E5A93C',
    },
  },

  // Permutation 4: Inverted Ice Light Canvas
  iceLight: {
    id: 'iceLight',
    name: 'Ice Cyan Light Canvas',
    nameAr: 'خلفية سيانية جليدية ناصعة',
    previewColor: '#072227',
    bgPreview: '#AEFEFF',
    variables: {
      '--bg-primary': '#E8FBFB',
      '--bg-elevated': '#D5F5F6',
      '--bg-surface': '#C3EFF0',
      '--border-subtle': '#9DDDE0',
      '--text-primary': '#072227',
      '--text-secondary': '#21565E',
      '--accent': '#35858B',
      '--accent-dim': '#4FBDBA',
      '--brand-blue': '#35858B',
      '--success': '#2E8B57',
      '--warning': '#D88A28',
    },
  },
};

export const defaultThemeId = 'abyssTeal';
