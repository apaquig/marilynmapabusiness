---
name: marilynmapabusiness-blog-creator
description: Standardized workflow, branding guidelines, SEO/GEO rules, and code patterns for creating new bilingual blog posts in the marilynmapabusiness Astro repository.
---

# Marilyn Mapa Business - Blog Creation Skill

Use this skill whenever the user asks to create, publish, or optimize a new blog post for **MAPA Business & Financial Services** (`marilynmapabusiness`).

## 1. Core Guidelines & Standards

### A. Branding & Visual Standards
- **Color Palette**: Strict **Red, Black, and White** branding (Red `#E31B23`, Dark Charcoal/Black `#121212`, Crisp White `#FFFFFF`).
- **Cover Image Format**:
  - **Aspect Ratio**: Exact **16:9 Widescreen** edge-to-edge layout without outer frames, borders, or blank margins.
  - **Model**: Must feature **Marilyn Paladinez** (Hispanic professional woman with wavy shoulder-length hair, warm smile, wearing her signature bright red blazer over a cream/white top).
  - **Location**: Save image in `/public/images/blog/[slug].png`.
- **Image Generation Command**:
  Use `generate_image` with prompt describing:
  `"Sleek modern 16:9 widescreen horizontal cover graphic using a strict brand color palette of RED, BLACK, and WHITE. On the right side, features a professional Hispanic woman resembling Marilyn Paladinez in a stylish bright red blazer standing confidently in an elegant office. On the left side, on a deep charcoal black background with bold red and white accents, shows crisp relevant graphics and sleek typography reading '[POST TITLE]'. Clean edge-to-edge 16:9 composition without outer borders."`

### B. SEO & Future-Proofing Strategy
- **Future Date Targeting**: When writing about annual taxes or seasonal services, target **2027** (e.g., *"Taxes en Estados Unidos 2027"*) so content ranks #1 as Google indexes the site over coming months.
- **Search Intent & Headings**: Use clear `<h2>` and `<h3>` tags with bullet lists, bolds, and direct answers for AI/GEO engines (ChatGPT, Gemini, Perplexity, Google AI Overviews).
- **FAQ Section**: Include structured Q&A sections in `content.es` and `content.en`.

### C. GEO Local & Office Contact Information
Every blog post CTA must mention:
- **Founder**: Marilyn Paladinez
- **Company**: MAPA Business & Financial Services LLC
- **Address**: 📍 `20 Bloomfield Place, Newark, NJ 07104`
- **Phone**: 📞 `(862) 622-8339`
- **Local GEO Keywords**: Newark, Elizabeth, Harrison, Jersey City, Paterson, Passaic, Clifton, Union City, Essex County.

---

## 2. File Location & Data Structure

Articles live in `/Users/user/Documents/marilynmapabusiness/src/data/posts.ts`.

### Array Entry Template:
```typescript
{
  slug: "tu-slug-aqui",
  title: {
    es: "¿Título en Español?",
    en: "Title in English?"
  },
  excerpt: {
    es: "Resumen optimizado para SEO en español con palabras clave y llamado a la acción.",
    en: "SEO optimized excerpt in English with keywords and call to action."
  },
  date: "2026-08-08", // YYYY-MM-DD format (newest first)
  author: "Marilyn Paladinez",
  category: {
    es: "Categoría en Español",
    en: "Category in English"
  },
  categoryKey: "taxes", // "taxes", "llc", "itin", "transit", etc.
  image: "/images/blog/tu-slug-aqui.png",
  readingTime: "5 min",
  tip: {
    es: "Consejo práctico clave en español.",
    en: "Key practical tip in English."
  },
  content: {
    es: `HTML semántico con h2, h3, ul, ol, strong y CTA final con dirección y teléfono`,
    en: `Semantic HTML with h2, h3, ul, ol, strong, and final CTA with address and phone`
  }
}
```

### Ordering Rule:
Always place new blog post objects **at the top of the `posts` array** in `src/data/posts.ts` so that newest articles appear first in the Blog Hub.

---

## 3. Execution & Verification Workflow

1. **Generate & Save Cover Image**:
   - Generate 16:9 image with `generate_image`.
   - Crop to exact 16:9 ratio if necessary.
   - Save to `public/images/blog/[slug].png`.
2. **Update Data**:
   - Insert new post object into `src/data/posts.ts`.
3. **Verify Build**:
   - Run `npm run build` using `run_command`.
   - Ensure `dist/sitemap.xml` automatically includes the new URL.
4. **Dev Server Restart**:
   - If `astro dev` is running, restart the task so Astro registers the new `getStaticPaths` dynamic route.
