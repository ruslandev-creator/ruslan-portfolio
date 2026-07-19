/**
 * Yagona sozlama fayli.
 * Brend nomi, aloqa ma'lumotlari va navigatsiyani shu yerdan o'zgartiring.
 */
export const site = {
  name: "Ruslan",
  wordmark: "RUSLAN",
  role: "Premium veb-dizayner",
  domain: "https://ruslan.studio",
  location: "Toshkent, O'zbekiston",
  email: "muxriddin.ads@gmail.com",
  phone: "+998 90 000 00 00",
  telegram: "https://t.me/username",
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
