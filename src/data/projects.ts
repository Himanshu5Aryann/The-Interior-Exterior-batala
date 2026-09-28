export interface ProjectImage {
  src: string;
  caption: string;
  alt: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  location: string;
  category: "Residential" | "Commercial" | "Hospitality" | "Cafe" | "Turnkey" | "Cabin Design" | "Hospital";
  year: string;
  size?: string;
  heroImage: string;
  heroAlt: string;
  listImage: string;
  imageFit?: "cover" | "contain";
  layout: "full" | "split" | "portrait" | "wide";
  overview: string;
  challenge: string;
  approach: string;
  materials: string[];
  lighting: string;
  spatial: string;
  gallery: ProjectImage[];
  beforeAfter?: {
    before: string;
    after: string;
    note: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    meta: string;
  };
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "chaat-di-hatti",
    number: "01",
    title: "Chaat Di Hatti",
    location: "Amritsar",
    category: "Cafe",
    year: "2026",
    size: "4,200 sq. ft.",
    heroImage: "/ChatGPT Image 90.png",
    heroAlt: "Cafe interior design project",
    listImage: "/ChatGPT Image 90.png",
    layout: "full",
    overview:
      "A café experience in Amritsar shaped around warmth, flavour and the joy of gathering.",
    challenge:
      "The existing shell offered generous proportions but disconnected circulation and inconsistent natural light across the living volumes. The family wanted openness without sacrificing intimacy in individual rooms.",
    approach:
      "We restructured the ground floor around a single sightline that connects the entrance, living and garden-facing dining area. Material palette was reduced deliberately — limestone, white oak and brushed bronze — allowing architecture and light to remain the primary decoration.",
    materials: ["Natural limestone", "White oak veneer", "Brushed bronze hardware", "Linen upholstery", "Lime-washed plaster"],
    lighting:
      "Layered lighting strategy combining recessed architectural cove lighting, warm-dimmed pendant fixtures and controlled daylight through reworked window proportions, avoiding a single dominant ceiling light in any room.",
    spatial:
      "Furniture was positioned to preserve circulation paths and sightlines toward the garden, with custom joinery replacing several freestanding pieces to keep the floor plan visually uncluttered.",
    gallery: [
      {
        src: "https://images.pexels.com/photos/7045763/pexels-photo-7045763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Interior of modern lounge decorated with marble fireplace and black wood rack",
        caption: "The living room fireplace, finished in book-matched natural stone.",
      },
      {
        src: "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Bright modern bedroom with bed and bedside tables under pendant lamps",
        caption: "The primary bedroom, oriented toward the eastern garden light.",
      },
      {
        src: "https://images.pexels.com/photos/6580381/pexels-photo-6580381.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Stylish modern living room with open kitchen and contemporary design elements",
        caption: "Open living and kitchen volume sharing a single material language.",
      },
    ],
    beforeAfter: {
      before:
        "/wide_angle_high_resolution_modern_interior_archi.jpg",
      after:
        "/ChatGPT Image Sep 13, 2026, 11_06_34 AM.png",
      note: "A considered transformation from the original shell to a refined living environment.",
    },
    outcome:
      "A home that reads as a single continuous gesture rather than a sequence of decorated rooms — delivered on a phased execution timeline coordinated with the family in residence.",
  },
  {
    slug: "uppal-neuro-hospital",
    number: "02",
    title: "Uppal Neuro Hospital & Multispeciality Centre",
    location: "Amritsar",
    category: "Residential",
    year: "2025",
    size: "3,100 sq. ft.",
    heroImage: "/ChatGPT Image Sep 25, 2026, 03_10_13 PM.png",
    heroAlt: "Hospital interior design project",
    listImage: "/ChatGPT Image Sep 25, 2026, 03_10_13 PM.png",
    layout: "portrait",
    overview:
      "A top-floor residence designed for a young couple who wanted a home that felt editorial rather than trend-driven — one that would age with restraint rather than date quickly.",
    challenge:
      "Low ceiling bulkheads and an awkward service core limited furniture planning options across the main living floor.",
    approach:
      "Rather than disguising the structural constraints, we designed around them — using the bulkhead line to anchor a continuous lighting cove and reorganising joinery to absorb the service core into a functional wall of storage.",
    materials: ["Fluted oak panelling", "Honed marble", "Boucle upholstery", "Antique brass"],
    lighting:
      "A single low cove line unifies the ceiling plane, paired with warm 2700K accent fixtures within joinery to avoid visual clutter overhead.",
    spatial:
      "Custom low-profile furniture was specified to keep sightlines toward the terrace glazing uninterrupted from the entrance.",
    gallery: [
      {
        src: "https://images.pexels.com/photos/8135502/pexels-photo-8135502.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1500&w=1200",
        alt: "Sophisticated bedroom with modern decor, soft lighting, and luxurious furnishings",
        caption: "Primary bedroom with a restrained material palette.",
      },
      {
        src: "https://images.pexels.com/photos/8135505/pexels-photo-8135505.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1500&w=1200",
        alt: "Cozy modern bedroom with green bedding and soft lighting",
        caption: "Guest bedroom, designed as a quieter counterpoint.",
      },
      {
        src: "https://images.pexels.com/photos/7031879/pexels-photo-7031879.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1500&w=1200",
        alt: "Contemporary kitchen in beige and white colors with minimalist cabinets and marble table",
        caption: "Kitchen and breakfast counter in honed marble.",
      },
    ],
    outcome:
      "A residence that presents as considerably larger than its floor plate suggests, achieved through disciplined material and lighting decisions rather than added square footage.",
  },
  {
    slug: "ranjit-avenue",
    number: "03",
    title: "Ranjit Avenue",
    location: "Amritsar",
    category: "Commercial",
    year: "2025",
    size: "12,000 sq. ft.",
    heroImage:
      "https://images.pexels.com/photos/36286291/pexels-photo-36286291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1300&w=2200",
    heroAlt: "Spacious modern interior of a luxurious corporate building with sleek design and natural light",
    listImage:
      "https://images.pexels.com/photos/36286291/pexels-photo-36286291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1600",
    layout: "wide",
    overview:
      "A corporate headquarters for a family-run enterprise that wanted its workplace to communicate the same quality standards as its client-facing business.",
    challenge:
      "The floor plate needed to balance private cabins, open collaborative desking and formal client-facing reception areas without feeling fragmented.",
    approach:
      "A material and colour language consistent across every zone — from reception to boardroom — was used to unify the experience, while lighting temperature and intensity were varied by function.",
    materials: ["Fluted walnut", "Textured limewash", "Brushed brass", "Wool-blend carpet tile"],
    lighting:
      "Task-appropriate lighting zoning: cooler, brighter light across desking; warmer, dimmable light in meeting and reception areas.",
    spatial:
      "Circulation was planned around a central spine so that visitors experience a considered sequence of spaces from arrival to boardroom.",
    gallery: [
      {
        src: "https://images.pexels.com/photos/5511099/pexels-photo-5511099.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Bright and spacious modern office interior featuring sleek workstations",
        caption: "Open collaborative desking zone.",
      },
      {
        src: "/WhatsApp202026-09-25204.05.02%20PM.png",
        alt: "Batala sugar mill cabin interior with white electrical panels and ceiling ducting",
        caption: "Sugar mill Batala cabin installation and electrical infrastructure fit-out.",
      },
      {
        src: "https://images.pexels.com/photos/23073436/pexels-photo-23073436.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Stylish office interior featuring a desk, chair, bookshelf, and decorative items",
        caption: "Private cabin with custom joinery and reading corner.",
      },
      {
        src: "https://images.pexels.com/photos/5511119/pexels-photo-5511119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Spacious meeting room with modern lighting in a corporate setting",
        caption: "Boardroom, positioned at the end of the arrival sequence.",
      },
    ],
    outcome:
      "A workplace that has measurably changed how the client hosts visiting partners — now used as a standing venue for client presentations rather than an off-site venue.",
  },
  {
    slug: "sugar-mill-batala",
    number: "04",
    title: "Sugar Mill Batala",
    location: "Batala",
    category: "Cabin Design",
    year: "2025",
    heroImage: "/sugar-mill-batala-cabin.png",
    heroAlt: "Sugar Mill Batala cabin design project",
    listImage: "/sugar-mill-batala-cabin.png",
    layout: "portrait",
    overview:
      "A compact cabin concept centred on clarity, performance and a calm professional atmosphere for daily operations.",
    challenge:
      "Create a clear and comfortable work setting within a compact operational cabin.",
    approach:
      "The cabin is organised around practical daily use, with a restrained finish and a clear, uncluttered arrangement.",
    materials: ["Durable interior finishes", "Integrated work surfaces", "Practical storage"],
    lighting:
      "Lighting is planned to support clear visibility and comfortable day-to-day work.",
    spatial:
      "The compact footprint is arranged to keep work areas and circulation straightforward.",
    gallery: [],
    outcome:
      "A focused cabin environment designed to support daily operations with clarity and comfort.",
  },
  {
    slug: "sharma-family-house",
    number: "05",
    title: "Sharma Family House",
    location: "Pathankot",
    category: "Residential",
    year: "2025",
    heroImage: "/ChatGPT Image Sep 26, 2026, 12_02_06 PM.png",
    heroAlt: "Sharma Family House residential interior home design",
    listImage: "/ChatGPT Image Sep 26, 2026, 12_02_06 PM.png",
    layout: "portrait",
    overview:
      "A thoughtfully designed family residence in Pathankot, created for the Sharma family with a focus on contemporary comfort, refined interiors, and practical everyday living.",
    challenge:
      "Balance contemporary comfort and practical everyday living throughout a family residence.",
    approach:
      "The home is planned around refined interiors and functional spaces suited to the family's daily routines.",
    materials: ["Refined interior finishes", "Contemporary materials", "Integrated storage"],
    lighting:
      "Lighting is considered as part of the home's comfortable, everyday interior environment.",
    spatial:
      "The layout focuses on practical family living while maintaining a contemporary interior character.",
    gallery: [],
    outcome:
      "A contemporary family residence designed around comfort, refined interiors and practical everyday living.",
  },
  {
    slug: "modern-kitchen-amritsar",
    number: "06",
    title: "Modern Kitchen",
    location: "Amritsar",
    category: "Residential",
    year: "2025",
    heroImage: "/Cozy_Spring_Decor_Ideas_for_Tiny_Spaces.png",
    heroAlt: "Modern modular kitchen in Amritsar",
    listImage: "/Cozy_Spring_Decor_Ideas_for_Tiny_Spaces.png",
    imageFit: "contain",
    layout: "wide",
    overview:
      "A contemporary modular kitchen in Amritsar designed with clean lines, refined finishes, smart storage, and practical everyday functionality.",
    challenge:
      "Bring clean lines, useful storage and everyday functionality together in a contemporary kitchen.",
    approach:
      "A modular layout pairs refined finishes with practical storage to support daily use without visual clutter.",
    materials: ["Refined cabinetry finishes", "Contemporary surfaces", "Integrated hardware"],
    lighting:
      "Lighting is arranged to keep preparation and everyday kitchen tasks clearly visible.",
    spatial:
      "The modular arrangement keeps storage and work areas accessible within a clean-lined composition.",
    gallery: [],
    outcome:
      "A clean-lined modular kitchen that combines considered storage with practical everyday use.",
  },
  {
    slug: "modern-house-amritsar",
    number: "07",
    title: "Modern House",
    location: "Amritsar",
    category: "Residential",
    year: "2025",
    heroImage: "/Modern20Design20India.png",
    heroAlt: "Modern residential house in Amritsar",
    listImage: "/Modern20Design20India.png",
    layout: "wide",
    overview:
      "A modern residential house in Amritsar combining clean architectural lines, warm material accents, generous glazing, and a refined contemporary exterior.",
    challenge:
      "Shape a contemporary exterior that balances clean architectural lines with a welcoming residential character.",
    approach:
      "Warm material accents and generous glazing complement the home's clean-lined contemporary exterior.",
    materials: ["Warm material accents", "Contemporary exterior finishes", "Glazing"],
    lighting:
      "The glazing brings natural light into the residence and reinforces its connection with the outdoors.",
    spatial:
      "The exterior composition balances generous glazing with clear architectural proportions.",
    gallery: [],
    outcome:
      "A refined contemporary residence with a clear architectural expression and warm material character.",
  },
  {
    slug: "modern-house-pathankot",
    number: "01",
    title: "Modern House",
    location: "Pathankot",
    category: "Residential",
    year: "2025",
    heroImage: "/download281%2529.png",
    heroAlt: "Contemporary family residence in Pathankot",
    listImage: "/download281%2529.png",
    layout: "wide",
    overview:
      "A contemporary family residence in Pathankot featuring a clean modern façade, balanced proportions, warm wood accents, and functional outdoor space.",
    challenge:
      "Combine a clear modern façade with comfortable family living and usable outdoor space.",
    approach:
      "Balanced proportions and warm wood accents give the contemporary façade a welcoming residential character.",
    materials: ["Warm wood accents", "Contemporary exterior finishes", "Glazing"],
    lighting:
      "The façade and outdoor areas are designed to make effective use of natural light.",
    spatial:
      "Functional outdoor space extends the home's living environment beyond its interior rooms.",
    gallery: [],
    outcome:
      "A contemporary family home with balanced proportions, warm detailing and practical outdoor space.",
  },
  {
    slug: "bajwa-hospital",
    number: "02",
    title: "Bajwa Hospital",
    location: "Batala, Punjab",
    category: "Hospital",
    year: "2026",
    heroImage: "/ChatGPT Image Sep 27, 2026, 05_09_27 PM.png",
    heroAlt: "Bajwa Hospital exterior facade with illuminated branding",
    listImage: "/ChatGPT Image Sep 27, 2026, 05_09_27 PM.png",
    imageFit: "contain",
    layout: "wide",
    overview:
      "A prominent healthcare landmark in Batala designed to feel highly visible, reassuring and professional from the street at night.",
    challenge:
      "Create a strong civic-facing identity while maintaining a clean clinical appearance and clear visual recognition for patients and visitors.",
    approach:
      "The exterior language focuses on clarity, scale and immediate legibility, using a restrained facade and illuminated signage to create a confident healthcare presence.",
    materials: ["Structured concrete facade", "Illuminated signage", "Glazing", "Minimal architectural detailing"],
    lighting:
      "Night-time illumination is used to increase legibility and give the hospital a strong, welcoming identity after dark.",
    spatial:
      "The facade is composed to establish a clear first impression, with broader openings and a well-defined street-facing presence.",
    gallery: [],
    outcome:
      "A highly recognisable hospital frontage that balances visibility, professionalism and a welcoming public presence.",
  },
  {
    slug: "mr-khullad-wala",
    number: "03",
    title: "Mr. Khullad Wala",
    location: "Batala, Punjab",
    category: "Commercial",
    year: "2026",
    heroImage: "/ChatGPT Image Sep 27, 2026, 05_10_35 PM.png",
    heroAlt: "Mr. Khullad Wala interior with warm green wall styling and moustache branding",
    listImage: "/ChatGPT Image Sep 27, 2026, 05_10_35 PM.png",
    layout: "wide",
    overview:
      "A character-led hospitality concept in Batala designed around a playful identity, warm material palette and a memorable guest experience.",
    challenge:
      "Infuse the space with strong personality without sacrificing a comfortable and cohesive dining setting for everyday use.",
    approach:
      "The design uses a bold green wall treatment, branded signage, ambient lighting and a confident table layout to create a memorable but welcoming atmosphere.",
    materials: ["Green feature wall", "Warm ambient lighting", "Custom branded signage", "Mixed dining furniture"],
    lighting:
      "Layered warm lighting supports an intimate, friendly atmosphere while highlighting the brand identity and social spaces.",
    spatial:
      "The room is arranged to support both casual dining and social visibility, with a clear focal point built around the brand statement.",
    gallery: [],
    outcome:
      "A highly identifiable dine-in experience that feels expressive, warm and instantly memorable for guests.",
  },
  {
    slug: "chai-sutta-bar",
    number: "04",
    title: "Chai Sutta Bar",
    location: "Batala, Punjab",
    category: "Cafe",
    year: "2026",
    heroImage: "/ChatGPT Image Sep 27, 2026, 05_12_50 PM.png",
    heroAlt: "Chai Sutta Bar cafe interior in Batala",
    listImage: "/ChatGPT Image Sep 28, 2026, 12_01_58 PM.png",
    imageFit: "contain",
    layout: "wide",
    overview:
      "A modern cafe interior in Batala blending informal comfort, warm hospitality and a branded visual language with an energetic social atmosphere.",
    challenge:
      "Balance a strong commercial identity with a comfortable seating layout and practical guest flow in a compact dining footprint.",
    approach:
      "The concept layers natural wood accents, green feature treatment, warm pendant lighting and flexible seating to create a lively but comfortable cafe environment.",
    materials: ["Wood finishes", "Green wall feature", "Ambient pendants", "Cafe furniture"],
    lighting:
      "Warm downlighting and feature pendants highlight the social zones while keeping the overall mood intimate and inviting.",
    spatial:
      "Seating is arranged to support both quiet conversations and efficient movement, while the wall features provide a strong brand point of view.",
    gallery: [
      {
        src: "/ChatGPT Image Sep 28, 2026, 12_01_58 PM.png",
        alt: "Chai Sutta Bar cafe in Batala",
        caption: "Chai Sutta Bar, Batala.",
      },
    ],
    outcome:
      "A vibrant cafe identity designed to attract, host and retain guests through an warm, recognisable atmosphere.",
  },
  {
    slug: "hotel-kullu",
    number: "05",
    title: "Hotel Kullu",
    location: "New Delhi",
    category: "Hospitality",
    year: "2024",
    size: "6,800 sq. ft.",
    heroImage: "/bedroom_image.png",
    heroAlt: "Hotel bedroom interior",
    listImage: "/bedroom_image.png",
    layout: "full",
    overview:
      "A boutique hospitality lobby and lounge designed to give a mid-sized property a sense of arrival disproportionate to its footprint.",
    challenge:
      "A low, compressed ceiling height at entry needed to feel intentional rather than restrictive, while guiding guests toward a taller volume beyond.",
    approach:
      "We used a deliberately compressed, dimly lit threshold that opens into a taller, brighter lounge — a classic architectural device for sequencing arrival — reinforced with a considered material change underfoot.",
    materials: ["Book-matched marble", "Cane and rattan detailing", "Aged brass", "Hand-loomed textiles"],
    lighting:
      "Warm, low-level lighting at entry rises in intensity and colour temperature as guests move into the main lounge volume.",
    spatial:
      "Seating was arranged in loose clusters rather than fixed rows, allowing the space to function for both casual guest use and private events.",
    gallery: [
      {
        src: "https://images.pexels.com/photos/14036246/pexels-photo-14036246.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Luxurious hotel lobby featuring opulent decor, art, and comfortable seating for guests",
        caption: "Guest lounge, seen from the reception threshold.",
      },
      {
        src: "https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Elegant hotel foyer featuring a grand staircase, marble floors, and a chandelier",
        caption: "Marble foyer connecting the lobby to the upper floors.",
      },
      {
        src: "https://images.pexels.com/photos/19689235/pexels-photo-19689235.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Elegant hotel lobby featuring luxurious marble flooring and stylish furnishings",
        caption: "Reception hall detailing in aged brass and stone.",
      },
    ],
    outcome:
      "A lobby experience that has become a recognisable identity marker for the property across its own marketing and guest photography.",
  },
  {
    slug: "the-heritage-home",
    number: "10",
    title: "The Heritage Home",
    location: "New Delhi",
    category: "Turnkey",
    year: "2024",
    size: "5,400 sq. ft.",
    heroImage:
      "https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1300&w=2200",
    heroAlt: "A beautifully decorated dining room featuring a long wooden table and ornate curtains",
    listImage:
      "https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1600",
    layout: "split",
    overview:
      "A full turnkey transformation for a multi-generational family home — from architectural coordination through to final styling — completed as a single managed engagement.",
    challenge:
      "Three generations shared the home, each with different expectations of formality, storage and privacy, within a fixed structural envelope.",
    approach:
      "We developed a shared material language for common areas while allowing individual family wings a degree of personal expression within an agreed palette — keeping the home cohesive without being uniform.",
    materials: ["Teak wood joinery", "Hand-finished plaster", "Natural stone flooring", "Silk-blend drapery"],
    lighting:
      "A zoned lighting control system allows each family wing to independently adjust warmth and intensity while common areas remain consistent.",
    spatial:
      "Furniture and joinery were custom-specified across every room as part of a single coordinated execution timeline, from civil work through final handover.",
    gallery: [
      {
        src: "https://images.pexels.com/photos/14598479/pexels-photo-14598479.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Modern dining room with marble table, gold accents, and stylish lighting",
        caption: "Formal dining room, shared across the family.",
      },
      {
        src: "https://images.pexels.com/photos/8092429/pexels-photo-8092429.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "A luxurious dining room showcasing vintage ceramics and classic furniture",
        caption: "Display joinery holding family heirloom ceramics.",
      },
      {
        src: "https://images.pexels.com/photos/10855258/pexels-photo-10855258.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800",
        alt: "Cozy living room with wooden beams, modern furniture, and a stylish kitchen",
        caption: "Family living room with exposed timber detailing.",
      },
    ],
    outcome:
      "A single, end-to-end engagement — spanning architectural coordination, execution and styling — delivered without requiring the family to separately manage multiple vendors.",
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const workProjects = [
  "modern-house-amritsar",
  "bajwa-hospital",
  "mr-khullad-wala",
  "chai-sutta-bar",
  "hotel-kullu",
]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));
