export type Project = {
  name: string;
  highlights: string[];
  techStack: string[];
  featured: boolean;
  links: {
    type: "github" | "live" | "npm";
    url: string;
  }[];
};

export type Skill = {
  name: string;
  category: string;
};

export type Skills = {
  [key: string]: Skill[];
};

export type Position = {
  title: string;
  organization: string;
  location: string;
  period: string;
  status: string;
  link?: string;
  supervisor?: string;
  description?: string;
  highlights?: string[];
};

export type ExperienceCategory = {
  category: string;
  positions: Position[];
};

export function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate)
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }

  return age
}

export const personalInfo = {
  name: "Alexandros P. Liaskos",
  title: "Software Engineer • Geosciences Specialist",
  specialization: "Geospatial Analysis and Informatics",
  birthDate: "2000-06-15",
  location: "Athens, Greece",
  email: "alexliaskosga@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/128935863?v=4",
  social: {
    github: "https://github.com/AlexandrosLiaskos",
    linkedin: "https://www.linkedin.com/in/alexandros-liaskos-a92a46254/",
  },
  bio: "Software engineer and geosciences specialist with a BSc in Geology, undergoing MSc in GIS, years of experience in research of geohazards, satellite imagery analysis, geoinformatics and web-app development.",
}

export const education = [
  {
    degree: "MSc in Geographic Information Systems",
    institution: "National and Kapodistrian University of Athens (NKUA)",
    period: "Sep 2025",
    status: "upcoming",
    link: "https://gis.geol.uoa.gr/",
  },
  {
    degree: "BSc in Geology and Geo-environment",
    institution: "National and Kapodistrian University of Athens (NKUA)",
    period: "2018 – 2024",
    gpa: "7.4/10",
    supervisor: "Prof. Niki Evelpidou",
    supervisorLink: "https://scholar.google.com/citations?hl=en&user=blf1mr8AAAAJ&view_op=list_works&sortby=pubdate",
    status: "completed",
    link: "https://www.geol.uoa.gr",
  },
]

export const experience: ExperienceCategory[] = [
  {
    category: "Research",
    positions: [
      {
        title: "EO-PERSIST Research Programme",
        organization: "Lund University",
        location: "Sweden",
        period: "January 2025 – May 2025",
        status: "upcoming",
        description: "Developed CVIc, a React/TypeScript web platform to automate Coastal Vulnerability Index calculations.",
      },
      {
        title: "Researcher - Software Engineer",
        organization: "National and Kapodistrian University of Athens (NKUA)",
        location: "Athens, Greece",
        period: "January 2020 – present",
        status: "current",
        description: "Participating in projects related to Geohazards",
      },
      {
        title: "Facing Fire Internship",
        organization: "University of Santiago de Compostela",
        location: "Lugo, Spain",
        period: "23 June – 20 July 2023",
        status: "completed",
        description: "Service-Learning Erasmus+ Internship",
      },
      {
        title: "Latin America in the Global Networks",
        organization: "Universidad Autónoma de Madrid",
        location: "Spain",
        period: "3-9 July 2022",
        status: "completed",
        description: "CIVIS Blended Intensive Programme",
      }
    ]
  },
  {
    category: "Service Industry",
    positions: [
      {
        title: "Assistant Waiter / Commis de Rang",
        organization: "The Old Tavern of Psarras",
        location: "Plaka, Athens, Greece",
        period: "January 2018 – Present",
        status: "current",
      }
    ],
  },
  {
    category: "Military Service",
    positions: [
      {
        title: "Military Service",
        organization: "Hellenic Army",
        location: "Kalymnos, Greece",
        period: "December 2023 – August 2024",
        status: "completed",
      },
    ],
  },
];

export const skills: Skills = {
  "Web Development": [
    { name: "JavaScript/TypeScript", category: "javascript" },
    { name: "React", category: "web" },
    { name: "Next.js", category: "web" },
    { name: "Node.js", category: "javascript" },
    { name: "Nest.js", category: "javascript" },
    { name: "Tailwind CSS", category: "css" },
    { name: "ShadCN", category: "web" },
  ],
  "Data Science & GIS": [
    { name: "Python", category: "python" },
    { name: "NumPy", category: "python" },
    { name: "Pandas", category: "python" },
    { name: "GDAL", category: "gis" },
    { name: "Shapely", category: "gis" },
    { name: "Rasterio", category: "gis" },
    { name: "Scikit-image", category: "python" },
    { name: "Leaflet", category: "gis" },
    { name: "Turf.js", category: "gis" },
    { name: "GIS", category: "gis" },
    { name: "GEE", category: "gis" },
    { name: "SNAP", category: "gis" },
  ],
  Databases: [
    { name: "SQLite", category: "other" },
    { name: "PostgreSQL", category: "other" },
    { name: "IndexedDB", category: "other" },
  ],
  Other: [
    { name: "Git", category: "other" },
    { name: "Docker", category: "other" },
    { name: "Linux", category: "other" },
    { name: "Bash", category: "shell" },
    { name: "Markdown", category: "other" },
    { name: "JSON", category: "other" },
    { name: "YAML", category: "other" },
    { name: "LaTeX", category: "other" },
  ],
};

export const projects: Project[] = [
  {
    name: "CVIc",
    highlights: [
      "React/TypeScript Web platform to automate Coastal Vulnerability Index calculations.",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    featured: true,
    links: [
      { type: "github", url: "https://github.com/AlexandrosLiaskos/CVIc" },
      { type: "live", url: "https://cvic-456409.web.app/" },
    ],
  },
  {
    name: "SatShor",
    highlights: [
      "Satellite-derived shorelines from S2L2AB08 images with subpixel precision and a TUI for acquiring the product-of-interest through CDSE's OData API.",
    ],
    techStack: ["Python", "GDAL", "NumPy", "Rasterio"],
    featured: true,
    links: [{ type: "github", url: "https://github.com/AlexandrosLiaskos/SatShor" }],
  },
  {
    name: "Chilling-Vibes",
    highlights: [
      "Python/PyAutoGUI automation tool to bridge RooCode with Google AI Studio.",
    ],
    techStack: ["Python", "PyAutoGUI"],
    featured: true,
    links: [{ type: "github", url: "https://github.com/AlexandrosLiaskos/Chilling-Vibes" }],
  },
  {
    name: "Obsidian Web Scraper",
    highlights: ["NPM/MCP tools to scrape web content via Readability & Turndown."],
    techStack: ["TypeScript", "Node.js", "Readability.js", "Turndown.js"],
    featured: false,
    links: [
      { type: "github", url: "https://github.com/AlexandrosLiaskos/obsidian-scraper" },
      { type: "npm", url: "https://www.npmjs.com/package/obsidian-web-scraper" },
    ],
  },
  {
    name: "Awesome Wallpapers",
    highlights: [
      "Vue/TailwindCSS web app for browsing/searching/downloading wallpapers.",
    ],
    techStack: ["Vue.js", "Tailwind CSS"],
    featured: false,
    links: [
      {
        type: "github",
        url: "https://github.com/AlexandrosLiaskos/Awesome_Wallpapers",
      },
      {
        type: "live",
        url: "https://alexandrosliaskos.github.io/Awesome_Wallpapers/",
      },
    ],
  },
  {
    name: "PyTutor",
    highlights: ["Python/Rich TUI to teach Python fundamentals."],
    techStack: ["Python", "Rich"],
    featured: false,
    links: [{ type: "github", url: "https://github.com/AlexandrosLiaskos/PyTutor" }],
  },
  {
    name: "lazyls",
    highlights: ["Go/Gocui lazy-loaded terminal file browser."],
    techStack: ["Go", "Gocui"],
    featured: false,
    links: [{ type: "github", url: "https://github.com/AlexandrosLiaskos/lazyls" }],
  },
];

export const publications = [
  {
    title: "Coastal erosion: The future of sandy beaches",
    authors: "Evelpidou, N., Tzouxanioti, M., & Liaskos, A.",
    journal: "Proceedings of the European Academy of Sciences and Arts",
    year: "2022",
    status: "published",
    url: "https://www.peasa.eu/site/article/view/12",
  },
  {
    title: "Development of a ModelBuilder Model for Automatizing the Calculation of Coastal Vulnerability Index: Application in the Northern Corinthian Gulf",
    authors: "Tsokos, A., Tsoukala, V., Spyrou, E., Liaskos, A., & Evelpidou, N.",
    journal: "Journal of Marine Science and Application",
    year: "2025",
    status: "published",
    url: "https://link.springer.com/article/10.1007/s11804-025-00669-6"
  },
  {
    title: "Computational Framework in Coastal Vulnerability Assessment (CompCVA): Coastal Vulnerability Index for Island Coastlines in ArcGIS Pro",
    authors: "Liaskos, A.",
    journal: "BSc Research Thesis, National and Kapodistrian University of Athens",
    year: "2025",
    status: "thesis",
    note: "Embargoed until September 2025",
  },
  {
    title: "CVIc: An innovative Web Platform for Automated Coastal Vulnerability Index-based Assessment",
    authors: "Liaskos, A., Petropoulos, G., Detsikas, S.",
    journal: "Environmental Modelling & Software",
    year: "2025",
    status: "accepted",
  },
]

export const volunteering = [
  {
    title: "Volunteer Firefighter",
    organization: "12th Fire Station of Athens",
    period: "Feb 2023 – Present",
    status: "current",
  },
  {
    title: "Improving the life of seniors",
    organization: "Mission Anthropos",
    period: "Oct 2022 – Present",
    status: "current",
  },
]

export const conferences = [
  {
    title: "IAG Regional Conference on Geomorphology",
    organization: "International Association of Geomorphologists (IAG)",
    location: "Timișoara, Romania",
    date: "16-18 Sep 2025",
    status: "upcoming",
  },
  {
    title: "16th International Congress of GSG",
    organization: "Geological Society of Greece",
    location: "University of Patras, Patras, Greece",
    date: "17-19 Oct 2022",
    certificate: "https://github.com/AlexandrosLiaskos/Certificates/blob/86006558b5862f825b12a8ef5a642aef232f2906/Conferences/GSG_2022_Liaskos.pdf",
  },
  {
    title: "15th International Congress of GSG",
    organization: "Geological Society of Greece",
    location: "Harokopio University, Athens, Greece",
    date: "22-24 May 2019",
    certificate: "https://github.com/AlexandrosLiaskos/Certificates/blob/86006558b5862f825b12a8ef5a642aef232f2906/Conferences/GSG_2019_Liaskos.pdf",
  },
]

export const languages = [
  {
    language: "Greek",
    level: "Native",
  },
  {
    language: "English",
    level: "Fluent (IELTS 8.0)",
    certificate: "https://github.com/AlexandrosLiaskos/Certificates/blob/6a51de5808a971dbefa7cde29dafedf1e2a9c8d6/Languages/IELTS_Test_Report_Form_LIASKOS.pdf",
  },
  {
    language: "Spanish",
    level: "Proficient",
  },
];

export const courses = [
  {
    title: "Data Science: R Basics",
    provider: "HarvardX on edX",
    category: "Data Science",
    certificate: "https://courses.edx.org/certificates/c696c477fb6e47f8bc5dbfb0fc6abd10",
  },
  {
    title: "Greatest Unsolved Mysteries of the Universe",
    provider: "Australian National University (ANU) on edX",
    category: "Astrophysics",
    certificate: "https://courses.edx.org/certificates/c9f9bb15bd5b425fb109111c4306bba3",
  },
  {
    title: "Exploring Exoplanets",
    provider: "Australian National University (ANU) on edX",
    category: "Astrophysics",
    certificate: "https://courses.edx.org/certificates/158e69c98b6549f9acd5d5a3d9926dbd",
  },
  {
    title: "Climate Change: The Science and Global Impact",
    provider: "University of Michigan on edX",
    category: "Climate Science",
    certificate: "https://courses.edx.org/certificates/907b975531c3467d90eced244d289b84",
  },
  {
    title: "Differential Equations 1",
    provider: "Mathesis - Crete University Press",
    category: "Mathematics",
    certificate: "https://mathesis.cup.gr/certificates/6ad3c9cfbc834d0bbc4ebb78101a7eb1?lang=en",
  },
  {
    title: "Man Facing Nature",
    provider: "Mathesis - Crete University Press",
    category: "History",
    certificate: "https://mathesis.cup.gr/certificates/247a88e43159402caf633fe8ae992483?lang=en",
  },
  {
    title: "Man Facing Divine",
    provider: "Mathesis - Crete University Press",
    category: "History",
    certificate: "https://mathesis.cup.gr/certificates/3abc090c8a6c4b4c9149f5866b56e73a?lang=en",
  }
]
