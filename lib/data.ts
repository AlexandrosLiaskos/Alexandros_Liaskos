import { features } from "node:process"

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
    linkedin: "https://www.linkedin.com/in/alexandros-liaskos/",
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

export const experience = [
  {
    category: "Research",
    positions: [
      {
        title: "EO-PERSIST Research Programme",
        organization: "Lund University, Sweden",
        supervisor: "Prof. George P. Petropoulos",
        period: "Jan 2025 – May 2025",
        status: "completed",
        link: "https://eo-persist.eu/",
      },
      {
        title: "Geohazards Research",
        organization: "National and Kapodistrian University of Athens (NKUA)",
        supervisor: "Prof. Niki Evelpidou",
        period: "2020 – Present",
        status: "current",
        link: "https://github.com/AlexandrosLiaskos",
      },
    ],
  },
  {
    category: "Freelance",
    positions: [
      {
        title: "Software Developer",
        organization: "Independent Contractor",
        description: "Developing algorithms, CLI applications and tools using Python, JavaScript/TypeScript and Bash.",
        period: "2021 – Present",
        status: "current",
      },
      {
        title: "Geospatial Analyst",
        organization: "Independent Contractor",
        description: "Utilizing GIS software (ArcGIS Pro, QGIS), Python/JavaScript, and satellite imagery (GEE, Copernicus) for geospatial data analysis and software development.",
        period: "2022 – Present",
        status: "current",
      },
      {
        title: "Web Developer",
        organization: "Independent Contractor",
        description: "Developing web applications using Next.js, Typescript, ShadCN, and SQLite.",
        period: "2024 – Present",
        status: "current",
      }
    ],
  },
  {
    category: "Service Industry",
    positions: [
      {
        title: "Assistant Waiter",
        organization: "The Old Tavern of Psarras",
        location: "Athens, Greece",
        description: "Physically intense, dynamic, and demanding experience.",
        period: "2018 – Present",
        status: "current",
        link: "https://psaras-taverna.gr/",
      },
    ],
  },
]

export const skills = {
  "Software & Applications": [
    { name: "ArcGIS Pro", category: "gis" },
    { name: "QGIS", category: "gis" },
    { name: "Google Earth Engine", category: "gis" },
    { name: "Copernicus", category: "gis" },
    { name: "SNAP", category: "gis" },
    { name: "Git", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "Jupyter", category: "python" },
    { name: "Google Colab", category: "python" },
    { name: "Arch Linux", category: "systems" },
    { name: "Ubuntu", category: "systems" },
  ],
  "Programming & Markup": [
    { name: "Python", category: "python" },
    { name: "JavaScript", category: "javascript" },
    { name: "TypeScript", category: "javascript" },
    { name: "Bash", category: "shell" },
    { name: "HTML", category: "web" },
    { name: "CSS", category: "web" },
    { name: "Markdown", category: "markup" },
    { name: "JSON", category: "data" },
    { name: "LaTeX", category: "markup" },
  ],
  "Frameworks & Libraries": [
    // Python Libraries
    { name: "NumPy", category: "python" },
    { name: "Pandas", category: "python" },
    { name: "GDAL", category: "python" },
    { name: "Shapely", category: "python" },
    { name: "Rasterio", category: "python" },
    { name: "Scikit-image", category: "python" },
    { name: "Flask", category: "python" },
    // JavaScript Frameworks
    { name: "React", category: "web" },
    { name: "Next.js", category: "web" },
    { name: "Vue.js", category: "web" },
    { name: "Node.js", category: "javascript" },
    { name: "Leaflet", category: "javascript" },
    { name: "Turf.js", category: "javascript" },
    { name: "SQLite", category: "web" },
    // CSS Frameworks
    { name: "Tailwind CSS", category: "web" },
    { name: "ShadCN", category: "web" },
  ],
}

export const projects = [
  {
    title: "AEMS",
    description: "Automated Email Management System with AI-powered classification and data extraction from invoices/receipts. Features Gmail integration, real-time processing, and local-first storage.",
    techStack: ["NestJS", "React", "TypeScript", "GraphQL", "OpenAI API", "Gmail API", "WebSocket"],
    githubUrl: "https://github.com/AlexandrosLiaskos/AEMS",
    status: "active",
    featured: true,
  },
  {
    title: "SatShor",
    description: "Satellite-derived shorelines from S2L2AB08 images with subpixel precision and a TUI for acquiring the product-of-interest through CDSE's OData API.",
    techStack: ["Python", "Sentinel-2 L2A B08", "OData API", "Marching Squares"],
    githubUrl: "https://github.com/AlexandrosLiaskos/SatShor",
    status: "active",
    featured: "true",
  },
  {
    title: "Chilling-Vibes",
    description: "Python/PyAutoGUI automation tool to bridge RooCode with Google AI Studio.",
    techStack: ["Python", "PyAutoGUI", "OCR", "Automation"],
    githubUrl: "https://github.com/AlexandrosLiaskos/Chilling-Vibes",
    status: "active",
    featured:  "true",
  },
  {
    title: "CVIc",
    description: "React/TypeScript Web platform to automate Coastal Vulnerability Index calculations.",
    techStack: ["React", "TypeScript", "Leaflet", "Turf.js", "TailwindCSS", "Firebase"],
    githubUrl: "https://github.com/AlexandrosLiaskos/CVIc",
    liveUrl: "https://cvic-456409.web.app/",
    status: "active",
    featured: true,
  },
  {
    title: "Obsidian Web Scraper",
    description: "NPM/MCP tools to scrape web content via Readability & Turndown.",
    techStack: ["Node.js", "JavaScript", "CLI", "Markdown"],
    githubUrl: "https://github.com/AlexandrosLiaskos/obsidian-scraper",
    npmUrl: "https://www.npmjs.com/package/obsidian-web-scraper",
    status: "active",
    featured: true,
  },
  {
    title: "Awesome Wallpapers",
    description: "Vue/TailwindCSS web app for browsing/searching/downloading wallpapers.",
    techStack: ["Vue.js", "TailwindCSS", "JSON"],
    githubUrl: "https://github.com/AlexandrosLiaskos/Awesome_Wallpapers",
    liveUrl: "https://alexandrosliaskos.github.io/Awesome_Wallpapers/",
    status: "active",
  },
  {
    title: "PyTutor",
    description: "Python/Rich TUI to teach Python fundamentals.",
    techStack: ["Python", "TUI", "Education"],
    githubUrl: "https://github.com/AlexandrosLiaskos/PyTutor",
    status: "active",
  },
  {
    title: "lazyls",
    description: "Go/Gocui lazy-loaded terminal file browser.",
    techStack: ["Go", "TUI", "Git"],
    githubUrl: "https://github.com/AlexandrosLiaskos/lazyls",
    status: "active",
  },
  {
    title: "PyAnalysis",
    description: "Python CLI tool to analyze Python code structure using Abstract Syntax Trees (AST).",
    techStack: ["Python", "AST", "CLI"],
    githubUrl: "https://github.com/AlexandrosLiaskos/PyAnalysis",
    status: "active",
  },
  {
    title: "JsonAnalysis",
    description: "Python CLI tool to analyze JSON file structure, data types, and statistics.",
    techStack: ["Python", "JSON", "CLI"],
    githubUrl: "https://github.com/AlexandrosLiaskos/JsonAnalysis",
    status: "active",
  }


]

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

export const languages = [
  { name: "Greek", level: "Native" },
  { name: "English", level: "Fluent (IELTS 8.0)", certificate: "https://github.com/AlexandrosLiaskos/Certificates/blob/6a51de5808a971dbefa7cde29dafedf1e2a9c8d6/Languages/IELTS_Test_Report_Form_LIASKOS.pdf" },
  { name: "Spanish", level: "Proficient (B2)" },
]

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
  },
  {
    title: "Man Facing Himself (Part A & B)",
    provider: "Mathesis - Crete University Press",
    category: "History",
    certificate: "https://mathesis.cup.gr/certificates/80cb295493ec46de8060dbd05a1023c6?lang=en",
  },
  {
    title: "Plato",
    provider: "Mathesis - Crete University Press",
    category: "Philosophy",
    certificate: "https://mathesis.cup.gr/certificates/ebc2d0ea141d459e9164f5f67681464f?lang=en",
  },
  {
    title: "Justice",
    provider: "HarvardX on edX",
    category: "Philosophy/Ethics",
    certificate: "https://courses.edx.org/certificates/a81b1ef3acc541b69fb0261aebdfaebe",
  },
]

export const international = [
  {
    title: "EO-PERSIST Research Programme",
    organization: "Lund University",
    location: "Sweden",
    period: "Jan 2025 – May 2025",
    supervisor: "Prof. George P. Petropoulos",
    status: "completed",
  },
  {
    title: "Facing Fire Internship",
    organization: "University of Santiago de Compostela",
    location: "Lugo, Spain",
    period: "23 June – 20 July 2023",
    program: "Erasmus+ Internship",
    certificate: "Available on GitHub",
  },
  {
    title: "Latin America in the Global Networks",
    organization: "Universidad Autónoma de Madrid",
    location: "Spain",
    period: "3-9 July 2022",
    program: "CIVIS Blended Intensive Programme",
    certificate: "Digital certificate available",
  },
  {
    title: "Culture on My Camera",
    organization: "Erasmus+ Youth Exchange",
    location: "Denizli, Turkey",
    period: "17-24 July 2022",
    certificate: "Available on GitHub",
  },
]

export const volunteering = [
  {
    title: "Volunteer Firefighter",
    organization: "12th Fire Station of Athens",
    period: "Feb 2023 – Present",
    status: "current",
    certificate: "Available on GitHub",
  },
  {
    title: "Student Group Coordinator",
    organization: "Mission Anthropos",
    period: "Oct 2022 – Present",
    status: "current",
    note: "International presence organization",
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
    certificate: "Available on GitHub",
  },
  {
    title: "15th International Congress of GSG",
    organization: "Geological Society of Greece",
    location: "Harokopio University, Athens, Greece",
    date: "22-24 May 2019",
    certificate: "Available on GitHub",
  },
]

export const military = [
  {
    title: "Military Service",
    location: "Kalymnos, Greece",
    period: "Dec 2023 – Aug 2024",
    duration: "9 months",
    certificate: "Available on GitHub",
  },
  {
    title: "Military Training",
    location: "Kalamata, Greece",
    period: "Nov 2023",
    certificate: "Available on GitHub",
  },
]
