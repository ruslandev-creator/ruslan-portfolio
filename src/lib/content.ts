/**
 * Sahifadagi barcha marketing matni va ma'lumotlar shu yerda.
 * Matnni tahrirlash uchun faqat shu faylni o'zgartirish kifoya.
 */

/* ---------- Comparison ---------- */
export const comparison = {
  ordinary: {
    title: "Oddiy sayt",
    subtitle: "Shablon asosida, tez tayyorlangan",
    points: [
      "Tayyor shablon — minglab saytga o'xshaydi",
      "Sekin yuklanadi, mijozni kutdiradi",
      "Mobil versiyada buziladi",
      "Zaif ishonch, past konversiya",
      "SEO va tezlik e'tiborga olinmagan",
      "Brend hissi yo'q — arzon ko'rinadi",
    ],
  },
  premium: {
    title: "Premium landing",
    subtitle: "Biznesingiz uchun noldan yaratilgan",
    points: [
      "O'ziga xos dizayn — faqat sizniki",
      "1.5 soniyada yuklanadigan tezlik",
      "Har bir ekranda mukammal ko'rinish",
      "Ishonch uyg'otadi, mijozni harakatga chorlaydi",
      "SEO va Core Web Vitals optimallashtirilgan",
      "Premium brend hissi — qimmat ko'rinadi",
    ],
  },
} as const;

/* ---------- Portfolio ---------- */
export type Project = {
  title: string;
  category: string;
  year: string;
  summary: string;
  metric: string;
  metricLabel: string;
  accent: string; // gradient tailwind classes
};

export const projects: Project[] = [
  {
    title: "Lumen Estate",
    category: "Ko'chmas mulk",
    year: "2025",
    summary:
      "Premium ko'chmas mulk agentligi uchun landing. Yangi murojaatlar 3 baravar oshdi.",
    metric: "+218%",
    metricLabel: "Murojaatlar o'sishi",
    accent: "from-[#1b2b52] to-[#0b1120]",
  },
  {
    title: "Nova Clinic",
    category: "Tibbiyot",
    year: "2025",
    summary:
      "Zamonaviy klinika uchun ishonchli va toza dizayn. Onlayn yozilish avtomatlashtirildi.",
    metric: "×2.4",
    metricLabel: "Onlayn yozilishlar",
    accent: "from-[#123040] to-[#0a1016]",
  },
  {
    title: "Atlas Logistics",
    category: "Logistika",
    year: "2024",
    summary:
      "B2B logistika kompaniyasi uchun korporativ sayt va hisob-kitob kalkulyatori.",
    metric: "−41%",
    metricLabel: "Yuklanish vaqti",
    accent: "from-[#22284a] to-[#0b0e1a]",
  },
  {
    title: "Saffron Bistro",
    category: "Restoran",
    year: "2024",
    summary:
      "Restoran uchun menyu va bron qilish tizimi bilan ishtaha ochadigan landing.",
    metric: "+167%",
    metricLabel: "Stol bronlari",
    accent: "from-[#2a2340] to-[#0d0b16]",
  },
];

/* ---------- Process ---------- */
export type Step = {
  no: string;
  title: string;
  description: string;
};

export const processSteps: Step[] = [
  {
    no: "01",
    title: "Tanishuv",
    description:
      "Biznesingiz, maqsadlaringiz va mijozlaringizni chuqur o'rganamiz. Aniq brif tuzamiz.",
  },
  {
    no: "02",
    title: "Tadqiqot",
    description:
      "Bozor, raqobatchilar va auditoriyani tahlil qilib, g'olib strategiyani belgilaymiz.",
  },
  {
    no: "03",
    title: "Wireframe",
    description:
      "Har bir bo'lim mantiqan joylashtiriladi — struktura konversiya uchun quriladi.",
  },
  {
    no: "04",
    title: "Dizayn",
    description:
      "Premium vizual til: tipografiya, rang, animatsiya va brend hissi shakllantiriladi.",
  },
  {
    no: "05",
    title: "Ishlab chiqish",
    description:
      "Next.js va zamonaviy texnologiyalarda tez, moslashuvchan va SEO-tayyor kod.",
  },
  {
    no: "06",
    title: "Ishga tushirish",
    description:
      "Domen, analitika va tezlik testlari. Sayt havolasi bilan biznesingiz jonli efirda.",
  },
];

/* ---------- Why me ---------- */
export type Feature = {
  title: string;
  description: string;
  icon: "spark" | "bolt" | "target" | "device" | "search" | "gem";
};

export const features: Feature[] = [
  {
    title: "Zamonaviy dizayn",
    description:
      "Linear, Stripe va Apple darajasidagi vizual uslub. Trenddan bir qadam oldinda.",
    icon: "spark",
  },
  {
    title: "Tez muloqot",
    description: "Savollaringizga 24 soat ichida javob. Har bosqichda aniq hisobot.",
    icon: "bolt",
  },
  {
    title: "Biznesga yo'naltirilgan",
    description:
      "Har bir element sotish uchun. Chiroyli emas, natija keltiradigan dizayn.",
    icon: "target",
  },
  {
    title: "To'liq moslashuvchan",
    description: "Telefon, planshet va kompyuterda bir xil mukammal ko'rinish.",
    icon: "device",
  },
  {
    title: "SEO optimallashtirilgan",
    description: "Google'da yuqori o'rin uchun texnik SEO va tezlik ta'minlanadi.",
    icon: "search",
  },
  {
    title: "Premium sifat",
    description:
      "Har bir piksel puxta ishlangan. Biznesingiz qimmat va ishonchli ko'rinadi.",
    icon: "gem",
  },
];

/* ---------- Pricing ---------- */
export type Plan = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$450",
    cadence: "dan boshlab",
    tagline: "Kichik biznes va shaxsiy brendlar uchun",
    features: [
      "1 sahifali landing",
      "Premium dizayn (Figma)",
      "Moslashuvchan (mobil + desktop)",
      "Asosiy SEO sozlamalari",
      "5 kunda tayyor",
    ],
    cta: "Boshlash",
  },
  {
    name: "Business",
    price: "$900",
    cadence: "dan boshlab",
    tagline: "Rivojlanayotgan kompaniyalar uchun eng mashhur tanlov",
    features: [
      "Ko'p bo'limli landing",
      "Maxsus animatsiyalar",
      "Aloqa formasi + integratsiya",
      "To'liq SEO + tezlik optimizatsiyasi",
      "Analitika sozlamasi",
      "10 kunda tayyor",
    ],
    featured: true,
    cta: "Eng ko'p tanlangan",
  },
  {
    name: "Premium",
    price: "$1 800",
    cadence: "dan boshlab",
    tagline: "Bozorda yetakchi bo'lishni istaganlar uchun",
    features: [
      "Ko'p sahifali sayt",
      "Brend identifikatsiyasi",
      "Kengaytirilgan animatsiya (GSAP)",
      "CMS — o'zingiz tahrirlaysiz",
      "Premium qo'llab-quvvatlash (30 kun)",
      "Ustuvor ishlab chiqish",
    ],
    cta: "Bog'lanish",
  },
];

/* ---------- FAQ ---------- */
export const faqs = [
  {
    q: "Loyiha qancha vaqtda tayyor bo'ladi?",
    a: "Landing odatda 5–10 kun ichida tayyor bo'ladi. Ko'p sahifali saytlar uchun muddat brifga qarab kelishiladi. Har bosqichda aniq muddatlarni oldindan aytaman.",
  },
  {
    q: "Narx nimalarga bog'liq?",
    a: "Bo'limlar soni, animatsiya murakkabligi va qo'shimcha integratsiyalarga. Tanishuvdan so'ng sizga aniq va yakuniy taklif beraman — kutilmagan to'lovlar bo'lmaydi.",
  },
  {
    q: "Saytni keyin o'zim tahrirlay olamanmi?",
    a: "Ha. Premium tarifda CMS ulaymiz — matn va rasmlarni kod bilmasdan o'zingiz yangilaysiz. Boshqa tariflarda ham tahrir bo'yicha yo'riqnoma beraman.",
  },
  {
    q: "To'lov qanday amalga oshiriladi?",
    a: "Ish boshida 50% oldindan, qolgan 50% loyiha topshirilganda. Naqd, plastik karta yoki bank o'tkazmasi orqali qabul qilinadi.",
  },
  {
    q: "Domen va hosting kim tomonidan?",
    a: "Domen va hostingni tanlash, sotib olish va sozlashda to'liq yordam beraman. Xohishingizga ko'ra o'zingiz nomingizga rasmiylashtiramiz.",
  },
  {
    q: "Ishdan keyin qo'llab-quvvatlash bormi?",
    a: "Ha. Har bir loyihadan so'ng bepul qo'llab-quvvatlash davri beriladi. Keyinchalik ham yangilanish va texnik yordam xizmatlari mavjud.",
  },
] as const;

/* ---------- Hero stats ---------- */
export const stats = [
  { value: "50+", label: "Yakunlangan loyiha" },
  { value: "8+", label: "Yillik tajriba" },
  { value: "24s", label: "Javob vaqti" },
  { value: "98%", label: "Mijoz mamnunligi" },
] as const;

/* Marquee ostidagi "ishonch" logolari (matn ko'rinishida) */
export const trustedBy = [
  "Estate",
  "Clinic",
  "Logistics",
  "Bistro",
  "Finance",
  "Studio",
  "Retail",
  "Academy",
] as const;
