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
      "--bg-primary": "#050A14",
      "--border-color": "rgba(64, 162, 216, 0.22)",
      "--text-primary": "#FFFFFF",
      "--accent": "#40A2D8",
      "--main_color": "#40A2D8",
      "--p_color": "#9dbfd4",
      "--white_color": "#ffffff",
      "--warning": "#F0EDCF",
    },
  },
};

export const defaultThemeId = "obsidianCerulean";
