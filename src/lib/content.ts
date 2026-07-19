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
  {
    title: "Vertex Fitness",
    category: "Fitnes",
    year: "2024",
    summary:
      "Zamonaviy fitnes klubi uchun a'zolik va mashg'ulotlarga yozilish tizimi.",
    metric: "+192%",
    metricLabel: "Yangi a'zolar",
    accent: "from-[#1b2b52] to-[#0b1120]",
  },
  {
    title: "Orion Academy",
    category: "Ta'lim",
    year: "2025",
    summary:
      "O'quv markazi uchun kurslar katalogi va onlayn ariza qabul qilish sahifasi.",
    metric: "×3.1",
    metricLabel: "Kursga yozilishlar",
    accent: "from-[#123040] to-[#0a1016]",
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
    title: "Brief va strategiya",
    description:
      "Biznesingiz va maqsadingizni o'rganib, sotadigan aniq strategiyani belgilaymiz.",
  },
  {
    no: "02",
    title: "Premium dizayn",
    description:
      "Brendingizga mos noyob vizual til: tipografiya, rang va animatsiya.",
  },
  {
    no: "03",
    title: "Tez ishlab chiqish",
    description:
      "Next.js'da 3 barobar tezroq, moslashuvchan va SEO-tayyor sayt quriladi.",
  },
  {
    no: "04",
    title: "Ishga tushirish",
    description:
      "Domen, tezlik va analitika sozlanadi — biznesingiz jonli efirda.",
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
    q: "Sayt qancha vaqtda tayyor bo'ladi?",
    a: "Oddiy landing 8 soatdan tayyor. Kattaroq loyihalar brifga qarab kelishiladi — muddatni oldindan aniq aytaman.",
  },
  {
    q: "Narx qancha?",
    a: "Bo'limlar soni va murakkablikka bog'liq. Tanishuvdan so'ng aniq va yakuniy taklif beraman — yashirin to'lovlar yo'q.",
  },
  {
    q: "Saytni keyin o'zim tahrirlay olamanmi?",
    a: "Ha. Xohishingizga ko'ra CMS ulayman — matn va rasmlarni kod bilmasdan o'zingiz yangilaysiz.",
  },
  {
    q: "To'lov qanday?",
    a: "Ish boshida 50%, topshirilganda 50%. Naqd, karta yoki bank o'tkazmasi qabul qilinadi.",
  },
  {
    q: "Ishdan keyin yordam bormi?",
    a: "Ha. Har bir loyihadan so'ng bepul qo'llab-quvvatlash beriladi, keyin ham yordam mavjud.",
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
