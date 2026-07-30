export type Project = {
  name: string;
  category: "Website" | "Software" | "Mobile App" | "Marketing";
  type: string;
  description: string;
  technologies: string[];
  highlights: string[];
};

export const PROJECTS: Project[] = [
  {
    name: "Guru KPO",
    category: "Website",
    type: "Business Website",
    description: "A corporate website for a KPO firm, built to communicate service offerings clearly to enterprise prospects.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js"],
    highlights: ["Structured service pages for outsourcing offerings", "Lead capture forms tied to the sales pipeline"],
  },
  {
    name: "Biyani Group",
    category: "Website",
    type: "Education Platform",
    description: "A multi-department education platform covering course listings, admissions information and campus updates.",
    technologies: ["Next.js", "TypeScript", "MySQL"],
    highlights: ["Unified platform across multiple institutes", "Searchable course and department directory"],
  },
  {
    name: "Practice Guru",
    category: "Website",
    type: "Learning Portal",
    description: "An online practice and test-series portal built for students preparing for competitive examinations.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    highlights: ["Timed mock-test engine", "Progress tracking across subjects"],
  },
  {
    name: "Kings Education",
    category: "Website",
    type: "Educational Website",
    description: "A brochure-style website for an education group, focused on admissions enquiries and program information.",
    technologies: ["Next.js", "Tailwind CSS"],
    highlights: ["Streamlined admissions enquiry flow", "Program pages optimized for local SEO"],
  },
  {
    name: "Clat Prep India",
    category: "Website",
    type: "Coaching Platform",
    description: "A coaching platform for law-entrance exam preparation, presenting faculty, results and course batches.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    highlights: ["Batch and schedule management pages", "Results showcase built for conversions"],
  },
  {
    name: "HG International School",
    category: "Website",
    type: "School Website",
    description: "A school website covering admissions, academics and campus facilities for prospective parents.",
    technologies: ["WordPress", "Custom PHP"],
    highlights: ["Admissions enquiry and callback forms", "Photo gallery for campus and events"],
  },
  {
    name: "Wisdom Dental Clinic",
    category: "Website",
    type: "Healthcare Website",
    description: "A clinic website presenting treatments, doctor profiles and appointment scheduling for patients.",
    technologies: ["Next.js", "Tailwind CSS"],
    highlights: ["Treatment pages structured for local search", "Simple appointment enquiry form"],
  },
  {
    name: "Estragen Pharmacy",
    category: "Website",
    type: "Pharmaceutical Website",
    description: "A corporate website for a pharmaceutical business, presenting product categories and compliance information.",
    technologies: ["Next.js", "Node.js"],
    highlights: ["Structured product catalogue by category", "Compliance and certification pages"],
  },
  {
    name: "Khubsurat Facility Services",
    category: "Website",
    type: "Corporate Website",
    description: "A corporate website for a facility management company, showcasing service lines to commercial clients.",
    technologies: ["Next.js", "Tailwind CSS"],
    highlights: ["Service-line pages built for B2B enquiries", "Quote-request forms routed to sales"],
  },
  {
    name: "Hello Sharma Ji",
    category: "Marketing",
    type: "Service Platform",
    description: "A local services platform paired with a digital marketing push to grow bookings across service categories.",
    technologies: ["Next.js", "Google Ads", "Meta Ads"],
    highlights: ["Campaign landing pages by service category", "Ad tracking tied to booking conversions"],
  },
  {
    name: "Trigem Infotech",
    category: "Website",
    type: "Technology Website",
    description: "A technology company website presenting solutions, case studies and technical capabilities.",
    technologies: ["Next.js", "TypeScript"],
    highlights: ["Solutions pages organized by industry", "Technical capability breakdowns for enterprise buyers"],
  },
  {
    name: "Inventory Management System",
    category: "Software",
    type: "Custom Software",
    description: "A custom inventory and stock management system built to replace manual, spreadsheet-based tracking.",
    technologies: ["Java", ".NET", "MySQL"],
    highlights: ["Real-time stock level tracking across warehouses", "Automated low-stock alerts and reporting"],
  },
];
