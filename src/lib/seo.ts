export const siteConfig = {
  url: "https://www.herzogweb.pl",
  brand: "HerzogWeb",
  person: "Filip Herzog",
  jobTitle: "Web Developer / Projektant stron internetowych",
  email: "herzog.web.dev@gmail.com",
  description:
    "Projektuję i koduję nowoczesne strony internetowe w Next.js i Tailwind CSS — od designu po wdrożenie. Strony, które sprzedają: szybkie, responsywne i zoptymalizowane pod SEO.",
  areaServed: "Polska",
  // sameAs — profile, które AI/Google wiążą z encją. Uzupełnij pełnym URL-em Instagrama.
  sameAs: ["https://www.instagram.com/herzogweb"],
  knowsAbout: [
    "Tworzenie stron internetowych",

    "Next.js",
    "React",
    "Tailwind CSS",
    "UX/UI Design",
    "SEO",
    "Integracja płatności Stripe",
  ],
} as const;

export const services = [
  {
    title: "UI/UX Design",
    desc: "Nowoczesny wygląd dopasowany do Twoich potrzeb i grupy docelowej.",
  },
  {
    title: "Zakodowanie strony",
    desc: "Responsywna, szybka i gotowa do działania – zero gotowców.",
  },
  {
    title: "Wdrożenie i wsparcie",
    desc: "Pomoc przy domenie, hostingu i uruchomieniu. Wsparcie po starcie.",
  },
];

export const faqData = [
  {
    question: "Jak długo trwa realizacja strony?",
    answer:
      "Standardowo od 7 do 21 dni roboczych, w zależności od złożoności projektu. Prostsze strony wizytówkowe realizuję nawet w 7 dni, bardziej rozbudowane projekty z e-commerce mogą zająć do 3–4 tygodni.",
  },
  {
    question: "Ile kosztuje strona internetowa?",
    answer:
      "Każdy projekt wyceniam indywidualnie – cena zależy od zakresu prac, liczby podstron i wymaganych funkcji. Najlepiej skontaktować się ze mną, podczas rozmowy omówimy Twoje potrzeby i przygotuję wycenę.",
  },
  {
    question: "Jakie technologie wykorzystujesz przy tworzeniu stron?",
    answer:
      "Pracuję głównie w Next.js i Tailwind CSS – to połączenie gwarantuje szybkość, responsywność i nowoczesny wygląd. Do animacji używam Framer Motion, a projekty UI tworzę w Figmie.",
  },
  {
    question: "Co muszę przygotować, zanim zaczniemy współpracę?",
    answer:
      "Wystarczy mieć wstępny pomysł na stronę. Razem omówimy Twoje cele biznesowe, grupę docelową i potrzeby. Teksty, zdjęcia i inne materiały możesz dostarczyć w trakcie.",
  },
  {
    question: "Czy strona będzie responsywna?",
    answer:
      "Tak, każda strona jest w pełni responsywna i wygląda świetnie na desktopie, tablecie i telefonie. Testuję na wielu urządzeniach przed oddaniem projektu.",
  },
  {
    question: "Czy oferujesz wsparcie techniczne po zakończeniu projektu?",
    answer:
      "Tak, oferuję wsparcie techniczne przez miesiąc po starcie projektu – w tym czasie możesz zgłaszać poprawki bez dodatkowych kosztów.",
  },
];

const personId = `${siteConfig.url}/#person`;
const orgId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

export function organizationGraph() {
  return [
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.person,
      jobTitle: siteConfig.jobTitle,
      url: siteConfig.url,
      email: siteConfig.email,
      sameAs: siteConfig.sameAs,
      knowsAbout: siteConfig.knowsAbout,
      worksFor: { "@id": orgId },
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": orgId,
      name: siteConfig.brand,
      url: siteConfig.url,
      email: siteConfig.email,
      description: siteConfig.description,
      image: `${siteConfig.url}/opengraph.png`,
      logo: `${siteConfig.url}/LOGO.svg`,
      founder: { "@id": personId },
      sameAs: siteConfig.sameAs,
      areaServed: { "@type": "Country", name: siteConfig.areaServed },
      knowsAbout: siteConfig.knowsAbout,
      serviceType: "Projektowanie i tworzenie stron internetowych",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Usługi tworzenia stron internetowych",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.desc,
            provider: { "@id": orgId },
            areaServed: { "@type": "Country", name: siteConfig.areaServed },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.brand,
      description: siteConfig.description,
      inLanguage: "pl-PL",
      publisher: { "@id": orgId },
    },
  ];
}

export function faqPageLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function homeGraphLd() {
  return {
    "@context": "https://schema.org",
    "@graph": organizationGraph(),
  };
}
