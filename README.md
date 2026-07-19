# RUSLAN — Premium Landing Page

O'zbekiston bizneslari uchun premium veb-dizayn landing sahifasi.
Dark theme, glassmorphism, silliq animatsiyalar va to'liq responsiv.

Modern SaaS uslubidagi (Linear · Vercel · Stripe · Framer · Apple) yagona sahifali sayt.

---

## Texnologiyalar

| Qatlam | Texnologiya |
| --- | --- |
| Framework | **Next.js 14** (App Router) |
| Til | **TypeScript** |
| Styling | **Tailwind CSS** |
| Animatsiya | **Framer Motion** + **GSAP** |
| Smooth scroll | **Lenis** |
| Shriftlar | Inter · Space Grotesk (`next/font`) |

---

## Ishga tushirish

Avval **Node.js 18+** o'rnatilgan bo'lishi kerak ([nodejs.org](https://nodejs.org)).

```bash
# 1. Kutubxonalarni o'rnatish
npm install

# 2. Development server (http://localhost:3000)
npm run dev

# 3. Production build
npm run build
npm start
```

---

## Loyiha tuzilishi

```
src/
├── app/
│   ├── layout.tsx        # Root layout, SEO metadata, JSON-LD, shriftlar
│   ├── page.tsx          # Sahifa — barcha bo'limlar shu yerda yig'iladi
│   ├── globals.css       # Dizayn tizimi: glass, glow, noise, tugmalar
│   ├── sitemap.ts        # SEO sitemap
│   ├── robots.ts         # SEO robots.txt
│   └── icon.svg          # Favicon
│
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── providers/        # SmoothScroll (Lenis + GSAP)
│   ├── sections/         # 8 ta asosiy bo'lim
│   │   ├── Hero.tsx
│   │   ├── Comparison.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Process.tsx
│   │   ├── WhyMe.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── ContactCTA.tsx
│   └── ui/               # Qayta ishlatiladigan komponentlar
│       ├── Button.tsx
│       ├── SectionHeading.tsx
│       ├── SpotlightCard.tsx   # sichqoncha ortidan yoruqlik
│       ├── Reveal.tsx          # scroll reveal wrapper
│       ├── Backgrounds.tsx     # grid + glow orblar
│       ├── BrowserMockup.tsx   # hero mockup
│       └── Icons.tsx
│
└── lib/
    ├── site.ts       # ⚙️ Brend, aloqa, navigatsiya
    ├── content.ts    # ✍️ Barcha matn, portfolio, narxlar, FAQ
    ├── motion.ts     # Framer Motion variantlari
    └── utils.ts      # cn() helper
```

---

## Nimani qayerdan o'zgartirish kerak

| Nima | Fayl |
| --- | --- |
| Ism, email, telefon, Telegram, domen | `src/lib/site.ts` |
| Portfolio ishlari, narxlar, FAQ, matnlar | `src/lib/content.ts` |
| Ranglar, spacing, shadow, glow | `tailwind.config.ts` |
| Glass, noise, tugma uslublari | `src/app/globals.css` |

Barcha marketing matni **`src/lib/content.ts`** faylida — kodga tegmasdan tahrirlash mumkin.

---

## Aloqa formasini ulash

Hozircha forma `mailto:` orqali ishlaydi (backend talab qilmaydi).
To'liq avtomatlashtirish uchun `src/components/sections/ContactCTA.tsx` ichidagi
`handleSubmit` funksiyasiga quyidagilardan birini ulang:

- **Formspree** / **Getform** — tayyor endpoint
- **Telegram Bot API** — xabarni to'g'ridan-to'g'ri Telegramga
- O'zingizning **Next.js API route** (`src/app/api/contact/route.ts`)

---

## Dizayn tizimi

- **8px spacing** — Tailwind'ning standart 4/8px shkalasi asosida
- **Ranglar** — `ink` (fon), `line` (chegaralar), `accent` (yagona ko'k urg'u)
- **Tipografiya** — Space Grotesk (sarlavhalar) + Inter (matn)
- **Effektlar** — glassmorphism, subtle blue/white glow, noise texture

Butun ranglar palitrasi cheklangan: faqat qora–oq–ko'k. Premium his shundan.

---

## SEO

- To'liq `metadata` (Open Graph, Twitter, canonical)
- `JSON-LD` (ProfessionalService schema)
- `sitemap.xml` + `robots.txt`
- Semantik HTML, `lang="uz"`, skip-link, `prefers-reduced-motion`

---

## Deploy

Eng oson yo'l — **Vercel**:

```bash
npm i -g vercel
vercel
```

Yoki GitHub'ga push qilib, [vercel.com](https://vercel.com) orqali repozitoriyni ulang.
