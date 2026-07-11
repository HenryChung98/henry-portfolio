export const PROFILE = {
  isOpened: true,
  name: "Henry Chung",
  title: "Software Engineer",
  description: "Henry Chung | Software Engineer",
  avatar: "/portfolio/logo.webp",
  email: "henrychung.dev@gmail.com",
  phone: "+1 778 322 3951",
  location: "Burnaby, Canada",
  github: "https://github.com/HenryChung98",
  instagram: "https://www.instagram.com/_henrychung",
  linkedin: "https://www.linkedin.com/in/henry-chung-cs",
  itchio: "https://9henrychung8.itch.io",
  blog: "https://henrychung98.github.io/blog",
  fiverr: "https://www.fiverr.com/s/dDQpmG8",
  og: {
    title: "Henry Chung - Software Engineer",
    description: `Henry Chung is a Software Engineer specializing in TypeScript/Next.js for full-stack
     web applications. Experience building SaaS products with role-based access control and API optimization. 
     View his projects, skills, and experience in modern development.`,
    image: "/portfolio/logo.webp",
    imageAlt: "Henry Chung - Software Engineer",
    url: "https://henrychung98.github.io/portfolio",
    type: "website",
    siteName: "Henry Chung",
    locale: "en_CA",
  },
};

// nav labels are localized in src/i18n (keyed by id)
export const NAV_ITEMS = [
  { id: "home", icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" },
  {
    id: "about-me",
    icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  },
  {
    id: "skills",
    icon: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z",
  },
  {
    id: "projects",
    icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
  },
  {
    id: "blog",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
  },
];

export const LIST_STYLE = "list-disc text-muted-foreground";
