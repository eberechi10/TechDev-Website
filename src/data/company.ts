export const COMPANY_INFO = {
  name: "TechDev",
  parentBrand: "Techstackgist",
  fullName: "TechDev by Techstackgist",
  tagline: "Technology That Moves Your Business Forward.",
  shortDescription: "We design and build practical digital solutions that help businesses attract customers, simplify operations and create better experiences.",
  fullDescription: "TechDev is the technology and software development arm of Techstackgist. We help businesses, organizations, startups and individuals use technology to solve real business problems, attract customers, automate operations and build scalable digital products.",
  
  // Contact details - fully configurable
  email: "ebetechdigitalsolutions@gmail.com",
  founderEmail: "ebetechdigitalsolutions@gmail.com",
  phone: "+234 806 391 2897",
  whatsappNumber: "2348063912897",
  address: "13 Ihebi St, Awada, Onitsha, Anambra State, Nigeria",
  serviceRegions: "Serving clients across Nigeria and globally",

  socials: {
    github: "https://github.com/TechDevTechstackgist",
    linkedin: "https://linkedin.com/company/techdev-techstackgist",
    x: "https://x.com/techstackgist",
    facebook: "https://facebook.com/techstackgist",
    instagram: "https://instagram.com/techstackgist",
    youtube: "https://youtube.com/@techstackgist"
  },

  values: [
    {
      title: "Integrity",
      description: "We are honest about what technology can and cannot do. No false promises, no artificial jargon, and no inflated budgets."
    },
    {
      title: "Practicality",
      description: "Technology should solve a measurable business problem first. We prioritize what actually works in production over passing trends."
    },
    {
      title: "Innovation",
      description: "We adopt modern, reliable software architectures, AI workflows, and security standards that give our clients a competitive edge."
    },
    {
      title: "Learning",
      description: "Technology evolves rapidly. We constantly refine our technical craftsmanship and bring those advancements directly to our clients."
    },
    {
      title: "Customer Success",
      description: "Our work is judged by whether your business gets more enquiries, sells more products, or runs with less friction."
    }
  ],

  getWhatsAppLink: (customMessage?: string) => {
    const defaultMsg = "Hello TechDev, I would like to discuss a technology project for my business.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/2348063912897?text=${text}`;
  }
};
