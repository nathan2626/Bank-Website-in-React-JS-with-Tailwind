import { people01, people02, people03, facebook, instagram, linkedin, twitter, client1, client2, client3, client4, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Accueil",
  },
  {
    id: "features",
    title: "Expertises",
  },
  {
    id: "product",
    title: "Clients",
  },
  {
    id: "clients",
    title: "Témoignages",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Création / Refonte de sites web",
    content:
      "Sur mesure, en tenant compte de vos exigences et de vos contraintes. Nous travaillons avec les frameworks et CMS les plus populaires du marché, tels que React, Laravel, WordPress...",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Stratégie digitale",
    content:
      "Nous élaborons avec vous une stratégie digitale pertinente et efficace pour atteindre vos objectifs, en utilisant les leviers les plus adaptés (SEO référencement naturel, publicité en ligne, réseaux sociaux, etc.).",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Formation et accompagnement",
    content:
      "Des formations et un accompagnement personnalisé pour vous aider à maîtriser les outils et les compétences nécessaires à la réussite de vos projets digitaux.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Grâce à Boker Tov Agency, nous avons réussi à développer notre présence en ligne et à attirer de nouveaux clients. Leur expertise et leur écoute nous ont permis de créer un site web performant et adapté à nos besoins.",
    name: "Thomas",
    title: "Directeur commercial",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Boker Tov Agency a su nous proposer des solutions innovantes et créatives pour la refonte de notre site e-commerce. Leur professionnalisme et leur réactivité ont été un véritable atout pour notre projet.",
    name: "LévCréa Paris",
    title: "Fondatrice",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Notre collaboration avec Boker Tov Agency a été une expérience très positive. Ils ont su nous guider et nous conseiller tout au long du développement de notre site internet, et le résultat est à la hauteur de nos attentes.",
    name: "Mickael Ohayon",
    title: "Fondateur",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Projets digitaux",
    value: "+60",
  },
  {
    id: "stats-2",
    title: "Clients satisfaits",
    value: "+95%",
  },
  {
    id: "stats-3",
    title: "Note Google",
    value: "5/5",
  },
];

export const footerLinks = [
  {
    title: "Liens utiles",
    links: [
      {
        name: "Accueil",
        linked: "home",
      },
      {
        name: "Expertises",
        linked: "features",
      },
      {
        name: "Clients",
        linked: "product",
      },
      {
        name: "Témoignages",
        linked: "clients",
      },
      {
        name: "Contact",
        linked: "contact",
      },
    ],
  },
  {
    title: "Communauté",
    links: [
      {
        name: "Candidature spontanée",
        linked: "tel:+330766596696",
      },
      {
        name: "Mentions Légales",
        linked: "https://bokertov-agency.com/mentions-legales/",
      },
      {
        name: "Suggestions",
        linked: "tel:+330766596696",
      },
    ],
  },
  {
    title: "Partenaire",
    links: [
      {
        name: "Nos partenaires",
        linked: "/#product",
      },
      {
        name: "Devenir partenaire",
        linked: "tel:+330766596696",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: client1,
  },
  {
    id: "client-2",
    logo: client2,
  },
  {
    id: "client-3",
    logo: client3,
  },
  {
    id: "client-4",
    logo: client4,
  },
];