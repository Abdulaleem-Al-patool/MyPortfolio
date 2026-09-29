/**
 * Theme & Color Palette Definitions
 * Centered on the user's custom aesthetic palette:
 * #000000 (Pure Jet Black)
 * #0B60B0 (Cobalt Royal Blue)
 * #40A2D8 (Vibrant Cerulean / Electric Sky Blue)
 * #F0EDCF (Warm Alabaster / Vanilla Cream)
 */

export const colorThemes = {
  // Primary: Obsidian Jet & Electric Cerulean (Default Theme)
  obsidianCerulean: {
    id: "obsidianCerulean",
    name: "Obsidian & Electric Cerulean",
    nameAr: "أسود فحمي وأزرق سيروليان مع كريمي",
    previewColor: "#40A2D8",
    bgPreview: "#171616",
    variables: {
      "--bg-primary": "#000000",
      "--bg-elevated": "rgba(11, 96, 176, 0.15)",
      "--bg-surface": "#010407",
      "--border-subtle": "rgba(64, 162, 216, 0.22)",
      "--border-color": "rgba(64, 162, 216, 0.22)",
      "--text-primary": "#FFFF",
      "--text-secondary": "#9DBFD4",
      "--accent": "#40A2D8",
      "--accent-dim": "#0B60B0",
      "--brand-black": "#000000",
      "--brand-cobalt": "#0B60B0",
      "--brand-cyan": "#40A2D8",
      "--brand-cream": "#F0EDCF",
      "--brand-blue": "#40A2D8",
      "--main_color": "#00ff37",
      "--p_color": "#aad2e6",
      "--bg_color": "#08101C",
      "--white_color": "#ffffff",
      "--black_color": "#000000",
      "--success": "#40A2D8",
      "--warning": "#F0EDCF",
    },
  },

  // Permutation 2: Alabaster Cream Primary Highlight
  vanillaCream: {
    id: "vanillaCream",
    name: "Vanilla Cream & Cobalt",
    nameAr: "كريمي دافئ مع أزرق ملكي",
    previewColor: "#F0EDCF",
    bgPreview: "#000000",
    variables: {
      "--bg-primary": "#000000",
      "--bg-elevated": "#07111D",
      "--bg-surface": "#0B60B0",
      "--border-subtle": "rgba(240, 237, 207, 0.25)",
      "--border-color": "rgba(240, 237, 207, 0.25)",
      "--text-primary": "#F0EDCF",
      "--text-secondary": "#A4C4D6",
      "--accent": "#F0EDCF",
      "--accent-dim": "#40A2D8",
      "--brand-black": "#000000",
      "--brand-cobalt": "#0B60B0",
      "--brand-cyan": "#40A2D8",
      "--brand-cream": "#F0EDCF",
      "--brand-blue": "#40A2D8",
      "--main_color": "#F0EDCF",
      "--p_color": "#A4C4D6",
      "--bg_color": "#07111D",
      "--white_color": "#F0EDCF",
      "--black_color": "#000000",
      "--success": "#40A2D8",
      "--warning": "#F0EDCF",
    },
  },

  // Permutation 3: Deep Cobalt Focus
  cobaltDeep: {
    id: "cobaltDeep",
    name: "Deep Cobalt & Cerulean",
    nameAr: "أزرق كحلي ملكي وسيروليان",
    previewColor: "#0B60B0",
    bgPreview: "#030810",
    variables: {
      "--bg-primary": "#02060E",
      "--bg-elevated": "#071324",
      "--bg-surface": "#0B60B0",
      "--border-subtle": "rgba(11, 96, 176, 0.35)",
      "--border-color": "rgba(11, 96, 176, 0.35)",
      "--text-primary": "#F0EDCF",
      "--text-secondary": "#90B4CE",
      "--accent": "#40A2D8",
      "--accent-dim": "#0B60B0",
      "--brand-black": "#000000",
      "--brand-cobalt": "#0B60B0",
      "--brand-cyan": "#40A2D8",
      "--brand-cream": "#F0EDCF",
      "--brand-blue": "#40A2D8",
      "--main_color": "#40A2D8",
      "--p_color": "#90B4CE",
      "--bg_color": "#071324",
      "--white_color": "#F0EDCF",
      "--black_color": "#000000",
      "--success": "#40A2D8",
      "--warning": "#F0EDCF",
    },
  },
};

export const defaultThemeId = "obsidianCerulean";
