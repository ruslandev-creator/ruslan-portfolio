/**
 * Yagona sozlama fayli.
 * Brend nomi, aloqa ma'lumotlari va navigatsiyani shu yerdan o'zgartiring.
 */
export const site = {
  name: "Ruscodit",
  wordmark: "Ruscodit",
  role: "Premium veb-dizayner",
  domain: "https://ruslan.studio",
  location: "Toshkent, O'zbekiston",
  phone: "+998 70 018 88 60",
  phoneHref: "tel:+998700188860",
  telegram: "https://t.me/ruscodit",
  instagram: "https://instagram.com/username",
  description:
    "O'zbekiston bizneslari uchun premium landing va veb-saytlar. Ishonch uyg'otadigan, tez va sotadigan dizayn.",
} as const;

export const nav = [
  { label: "Ishlar", href: "#portfolio" },
  { label: "Jarayon", href: "#jarayon" },
  { label: "Narxlar", href: "#narxlar" },
  { label: "Savollar", href: "#faq" },
] as const;
