// ============================================
// MICHAEL LAW MD - WEBSITE CONFIGURATION
// ============================================

const SITE_CONFIG = {
  // ==========================================
  // PRACTICE INFORMATION
  // ==========================================
  practiceName: "Michael Law MD Aesthetic Plastic Surgery",
  doctorName: "Dr. Michael Law",
  doctorCredentials: "MD",
  doctorTitle: "Board-Certified Plastic Surgeon",
  tagline: "One of the BEST Trained Plastic Surgeons in the US",

  // ==========================================
  // CONTACT INFORMATION
  // ==========================================
  phone: "(919) 256-0900",
  phoneClean: "9192560900",
  email: "info@michaellawmd.com",

  // ==========================================
  // LOCATION
  // ==========================================
  address: {
    street: "10941 Raven Ridge Road, Suite 101",
    city: "Raleigh",
    state: "NC",
    zip: "27614",
    full: "10941 Raven Ridge Road, Suite 101, Raleigh, NC 27614"
  },

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.8!2d-78.59!3d35.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac576a2ae951a9%3A0xf200e8a31fb3a07!2s10941+Raven+Ridge+Rd+STE+101%2C+Raleigh%2C+NC+27614!5e0!3m2!1sen!2sus!4v1234567890",

  // ==========================================
  // OFFICE HOURS
  // ==========================================
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 5:00 PM",
    saturday: "Saturday: Closed",
    sunday: "Sunday: Closed"
  },

  // ==========================================
  // SOCIAL MEDIA
  // ==========================================
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    realself: ""
  },

  // ==========================================
  // SEO SETTINGS
  // ==========================================
  seo: {
    primaryCity: "Raleigh",
    primaryState: "NC",
    serviceArea: "Raleigh, Durham, Chapel Hill, Cary, Wake Forest, North Carolina",
    homeMetaDescription: "Dr. Michael Law is a board-certified plastic surgeon in Raleigh, NC with 10 years of formal training. Voted Best Plastic Surgeon by WRAL since 2017. Breast augmentation, tummy tuck, facelift & more.",
    businessType: "PlasticSurgery"
  },

  // ==========================================
  // ABOUT SECTION
  // ==========================================
  about: {
    shortBio: "Dr. Michael Law is a board-certified plastic surgeon with 10 years of formal surgical training — twice that of some plastic surgeons. He completed his plastic surgery residency at USC and fellowship at the #1 ranked program in the United States. Voted Best Plastic Surgeon in Raleigh by WRAL News every year since 2017.",
    credentials: [
      "Board Certified by the American Board of Plastic Surgery",
      "Member of the American Society of Plastic Surgeons",
      "Alpha Omega Alpha Honor Society",
      "10 Years of Formal Surgical Training",
      "WRAL Best Plastic Surgeon Since 2017"
    ],
    education: [
      "BS, University of North Carolina at Chapel Hill (Phi Beta Kappa)",
      "MD, Emory University (Magna Cum Laude, 2nd in class)",
      "General Surgery Residency, UCLA",
      "Plastic Surgery Residency, USC",
      "Plastic Surgery Fellowship, USC (#1 ranked program)"
    ]
  },

  // ==========================================
  // SERVICES OFFERED
  // ==========================================
  services: {
    breast: {
      enabled: true,
      procedures: {
        augmentation: true,
        lift: true,
        reduction: true,
        revision: true,
        implantRemoval: true,
        reconstruction: false
      }
    },
    body: {
      enabled: true,
      procedures: {
        tummyTuck: true,
        liposuction: true,
        mommyMakeover: true,
        bodyLift: true,
        armLift: true,
        thighLift: true
      }
    },
    face: {
      enabled: true,
      procedures: {
        facelift: true,
        neckLift: true,
        eyelidSurgery: true,
        browLift: true,
        rhinoplasty: false
      }
    },
    nonSurgical: {
      enabled: true,
      procedures: {
        botox: true,
        fillers: true
      }
    }
  },

  // ==========================================
  // TESTIMONIALS
  // ==========================================
  testimonials: [
    {
      name: "Sarah M.",
      procedure: "Breast Augmentation",
      rating: 5,
      text: "Dr. Law's attention to detail is remarkable. His extensive training shows in every aspect of care. I couldn't be happier with my results.",
      location: "Raleigh, NC"
    },
    {
      name: "Jennifer L.",
      procedure: "Mommy Makeover",
      rating: 5,
      text: "After researching dozens of surgeons, I chose Dr. Law for his unmatched credentials. The results exceeded my expectations.",
      location: "Cary, NC"
    },
    {
      name: "Michelle R.",
      procedure: "Facelift",
      rating: 5,
      text: "Dr. Law made me feel completely comfortable from consultation to recovery. His skill is evident in my natural-looking results.",
      location: "Durham, NC"
    }
  ],

  // ==========================================
  // GALLERY
  // ==========================================
  showGallery: false,
  galleryDisclaimer: "Individual results may vary.",

  // ==========================================
  // FINANCING
  // ==========================================
  financing: {
    enabled: true,
    providers: ["CareCredit", "Prosper Healthcare Lending"],
    text: "We believe everyone deserves to feel confident. Flexible financing options available."
  },

  // ==========================================
  // COLORS (Premium/Luxury feel)
  // ==========================================
  colors: {
    primary: "#1a365d",
    secondary: "#c9a959",
    accent: "#2d5a7b",
    text: "#333333",
    lightBg: "#f8f9fa",
    white: "#ffffff"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
