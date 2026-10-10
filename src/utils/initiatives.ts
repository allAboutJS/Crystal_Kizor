import type { Initiative } from "./types";

export const initiativesData: Initiative[] = [
  {
    id: "studio-coka",
    index: "01",
    discipline: "Architecture • Interior Design • Construction",
    title: "Studio COKA",
    lead: "A practice engineered for climate-responsive living and low-energy envelopes.",
    description: "I founded Studio COKA to move away from energy-intensive Western building patterns ill-suited to West Africa. By integrating natural ventilation chimneys, solar orientation, and locally excavated materials, our work proves that buildings can remain naturally cool and deeply functional without permanent reliance on energy grids.",
    image: "/assets/images/arch-coka-facade.webp",
    tags: ["Bioclimatic Design", "Off-Grid Systems", "Vernacular Materials"],
    actionLabel: "Inquire About Architectural Commissions",
    actionIntent: "Studio COKA - Architecture & Interiors",
    reverse: false
  },
  {
    id: "elevated",
    index: "02",
    discipline: "Furniture & Industrial Product Design",
    title: "ELEvated",
    lead: "Contemporary furniture and spatial objects rooted in African material culture.",
    description: "A natural extension of my architectural practice into the tactile scale of domestic life. ELEvated celebrates local timber species, brass, and artisanal joinery—crafting functional, enduring pieces that reject disposable imports and establish a distinct African modernism.",
    image: "/assets/images/furniture-elevated-1.webp",
    tags: ["Bespoke Furniture", "Indigenous Timber", "Artisanal Joinery"],
    actionLabel: "Explore Furniture & Product Inquiries",
    actionIntent: "ELEvated - Furniture & Product Design",
    reverse: true
  },
  {
    id: "tea",
    index: "03",
    discipline: "Education • Media • Professional Mentorship",
    title: "The Effective Architect (TEA)",
    lead: "Empowering built-environment practitioners to master commercial practice.",
    description: "Traditional architectural schools teach design theory but leave architects unprepared for contracts, client acquisition, and running sustainable studios. TEA is an educational academy and media platform offering candid business frameworks, masterclasses, and podcasts tailored to practitioners across Africa.",
    image: "/assets/images/tea-media.webp",
    tags: ["Practice Masterclasses", "Industry Podcasts", "Studio Operations"],
    actionLabel: "Join The TEA Community",
    actionIntent: "The Effective Architect (TEA) - Learning & Media",
    reverse: false
  },
  {
    id: "speaking",
    index: "04",
    discipline: "Thought Leadership • Keynotes • Design Dialogues",
    title: "Speaking Engagements",
    lead: "Advancing conversations on African cities, bioclimatic design, and leadership.",
    description: "From TEDx stages to university amphitheaters and real estate summits, I share grounded perspectives on tropical architecture, sustainable materials, and the socio-economic evolution of African urban spaces.",
    image: "/assets/images/about-portrait.webp",
    tags: ["TEDx Speaker", "African Urbanism", "Creative Entrepreneurship"],
    actionLabel: "Book Me for a Keynote or Panel",
    actionIntent: "Speaking Engagement & Keynotes",
    reverse: true
  },
  {
    id: "ako-alliance",
    index: "05",
    discipline: "Education Access • Youth Opportunities",
    title: "AKO Alliance",
    lead: "Expanding access to education and unlocking opportunities for young people.",
    description: "An initiative dedicated to tearing down educational barriers for children from underserved communities. AKO Alliance provides learning resources, mentorship programs, and creative exposure so children can develop problem-solving skills for tomorrow.",
    quote: {
      motif: "◆",
      heading: "Expanding Educational Horizons",
      text: "Spatial equity starts with empowering young minds with tools, literacy, and creative confidence."
    },
    tags: ["Educational Access", "Youth Sponsorships", "Creative Workshops"],
    actionLabel: "Partner With AKO Alliance",
    actionIntent: "Youth Impact & Social Alliance",
    reverse: false
  },
  {
    id: "alive-and-free",
    index: "06",
    discipline: "Youth Movement • Purpose & Spiritual Wholeness",
    title: "Alive and Free",
    lead: "A Christian youth movement walking in truth, healing, and life in Christ.",
    description: "Buildings shape physical life, but spiritual groundedness shapes character. Alive and Free is a movement dedicated to walking alongside young people as they break through trauma, emotional exhaustion, and identity confusion to live freely and purposefully.",
    quote: {
      motif: "✝",
      heading: "Restoration & Identity",
      text: "True transformation happens when inner healing and divine purpose anchor an entire generation.",
      isDark: true
    },
    tags: ["Spiritual Growth", "Youth Community", "Emotional Wholeness"],
    actionLabel: "Connect With the Movement",
    actionIntent: "Youth Impact & Social Alliance",
    reverse: true
  },
  {
    id: "research",
    index: "07",
    discipline: "Authorship • Research • Open Media",
    title: "Research, Writing & Content",
    lead: "Documenting design processes, essays, and architectural guides.",
    description: "Under my personal brand, I document architectural experiments in real-time. Through my 'New Space Guide', construction vlogs, and essays on indigenous materials, I make spatial design knowledge transparent and practical for homeowners, architects, and builders.",
    image: "/assets/images/collaborate-portrait.webp",
    tags: ["New Space Guide", "Process Documentation", "Design Essays"],
    actionLabel: "Explore Publications & Media",
    actionIntent: "General Inquiry",
    reverse: false
  }
];
