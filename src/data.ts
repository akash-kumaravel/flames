import { FAQItem, ProductDetails, BlogArticle, ServiceItem } from './types';

export const BRAND = "Flames Fireplace";
export const TAGLINE = "Premium Indoor & Outdoor Fire Features in Dubai & UAE";

export const META_SUMMARY = {
  home: {
    title: "Flames Fireplace Dubai | Premium Bio Ethanol Fireplaces, Fire Pits & Outdoor Kitchens",
    description: "Discover premium bio ethanol fireplaces, fire pits, outdoor kitchens, and custom BBQs in Dubai and the UAE with Flames Fireplace.",
    primaryKW: "bio ethanol fireplace Dubai, fire pits Dubai",
    secondaryKW: "outdoor kitchen Dubai, luxury fireplace UAE"
  },
  about: {
    title: "About Flames Fireplace | Premium Fire Features & Outdoor Kitchens UAE",
    description: "Learn why Flames Fireplace is a trusted name for premium fireplaces, outdoor kitchens, and custom BBQ solutions across the UAE.",
    primaryKW: "about Flames Fireplace, bio ethanol fireplace supplier UAE"
  },
  indoor: {
    title: "Indoor Bio Ethanol Fireplace | Ventless, Eco-Friendly Real Flame — Flames Fireplace",
    description: "Real flame warmth without chimneys, flues, or gas connections. Clean-burning, modern, and beautiful flueless heating for modern Dubai homes.",
    primaryKW: "indoor bio ethanol fireplace, ventless fireplace",
    secondaryKW: "bioethanol fireplace UAE, wall mounted fireplace, no chimney fireplace"
  },
  outdoor: {
    title: "Outdoor Fire Features | Fire Pits & Fireplaces — Flames Fireplace",
    description: "Create an inviting outdoor retreat with bio ethanol fireplaces, fire pits, gas fire tables, and custom outdoor fire installations in Dubai.",
    primaryKW: "outdoor bio ethanol fireplace, patio fireplace UAE",
    secondaryKW: "outdoor fire features Dubai, pool deck fireplace, terrace fire feature"
  },
  faq: {
    title: "FAQs | Flames Fireplace — Bio Ethanol Fireplace Questions Answered",
    description: "Expert answers to the most common questions about safety, installation, fuel, and maintenance for bio ethanol fireplaces from Flames Fireplace.",
    primaryKW: "bio ethanol fireplace FAQ"
  },
  contact: {
    title: "Contact Flames Fireplace | Dubai UAE Office",
    description: "Get in touch with the Flames Fireplace team in Dubai. Ask about pricing, custom outdoor kitchens, fire pits, and fireplaces.",
    primaryKW: "contact Flames Fireplace, buy bio ethanol fireplace UAE, fireplace quote"
  },
  'why-choose': {
    title: "Why Choose Flames Fireplace | Pricing, Quality & Safety Specs",
    description: "Discover why Flames Fireplace is Dubai's trusted supplier of premium fire features and outdoor kitchens. Honest pricing, dedicated care, reliable delivery.",
    primaryKW: "why choose Flames Fireplace, bio ethanol fireplaces",
    secondaryKW: "certified ventless fireplace, fireplace safety UAE"
  },
  'outdoor-features': {
    title: "BBQ & Outdoor Kitchens Dubai UAE | Flames Fireplace",
    description: "Elevate your outdoor dining with custom outdoor kitchens, built-in BBQs, outdoor fridges, modular islands, and organized storage systems in Dubai.",
    primaryKW: "outdoor fire features Dubai, outdoor kitchen Dubai",
    secondaryKW: "fire pit products Dubai, BBQ grill Dubai, outdoor fireplace UAE"
  },
  services: {
    title: "Our Services | Design, Advisory & Installation — Flames Fireplace",
    description: "Complete architectural integration, site inspections, custom drafting, and safe handover commissioning for luxury indoor and outdoor fire features in the UAE.",
    primaryKW: "fireplace installation Dubai, outdoor kitchen design UAE",
    secondaryKW: "architectural fireplace services, technical site inspection UAE"
  },
  portfolio: {
    title: "Project Portfolio | Showcasing Finished Works — Flames Fireplace",
    description: "Explore our collection of premium indoor 3D water vapor fireplaces, clean bio-ethanol fire features, and bespoke outdoor kitchens installed across Dubai & UAE.",
    primaryKW: "fireplace portfolio Dubai, custom outdoor kitchen gallery UAE",
    secondaryKW: "bespoke fire pit installation, luxury garden barbecue setups"
  }
};

export const TRUST_BAR = [
  { title: "Honest, Competitive Pricing", desc: "Premium products without the premium markup" },
  { title: "Dedicated Customer Care", desc: "Real support before, during, and after your purchase" },
  { title: "Consistent Quality", desc: "Every product checked and standard-tested before delivery" },
  { title: "Experienced Team", desc: "Specialists who understand fire safety and outdoor design" },
  { title: "Trusted Across the UAE", desc: "A growing base of satisfied homeowners and businesses" },
  { title: "Reliable Delivery", desc: "We follow through on every commitment we make" }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "indoor-water-vapor",
    title: "3D Water Vapor Fireplaces",
    subtitle: "Eco-Safe Mist Technology",
    description: "Realistic clean flames using ultrasonic water mist and colored LEDs. 100% cool-to-touch and safe beneath smart TV media centers.",
    image: "/assets/Water Vapor Fireplace _ Wall Feature.png",
    badge: "3D WATER MIST",
    category: "indoor",
    waMessage: "Inquiry regarding premium Indoor 3D Water Vapor Fireplaces"
  },
  {
    id: "indoor-bioethanol",
    title: "Bio-Ethanol Fireplaces",
    subtitle: "Ventless Living Flames Fireplace",
    description: "Authentic physical heat and beautiful golden flames burning clean renewable liquid fuel with zero smoke, ash, or soot.",
    image: "/assets/Bio-Ethanol Fireplace _ Product Close-up.png",
    badge: "BIO-ETHANOL FLAMES FIREPLACE",
    category: "indoor",
    waMessage: "Inquiry regarding bespoke Indoor Bio-Ethanol Fireplaces"
  },
  {
    id: "outdoor-fire-pits",
    title: "Premium Fire Pits & Tables",
    subtitle: "Architectural Fire Features",
    description: "Durable concrete fire tables and fire bowls running on clean bioethanol or gas, completed with tempered wind safety guards.",
    image: "/assets/Fire Pit _ Product Close-up.png",
    badge: "FIRE PITS & BOWLS",
    category: "outdoor",
    waMessage: "Inquiry regarding custom Outdoor Fire Pits & Fire Tables"
  },
  {
    id: "outdoor-kitchens",
    title: "Custom Outdoor Kitchens",
    subtitle: "Culinary Luxury",
    description: "Custom premium modular kitchens with high-durability sintered stone countertops, fully rated for extreme Gulf climates.",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1200",
    badge: "MODULAR KITCHENS",
    category: "outdoor",
    waMessage: "Inquiry regarding custom Outdoor Kitchens in Dubai"
  },
  {
    id: "built-in-bbqs",
    title: "Premium Built-In BBQs",
    subtitle: "High-Performance Grills",
    description: "Heavy-duty 304/316 marine-grade stainless steel grills integrated seamlessly into bespoke granite and marble countertops.",
    image: "/assets/Built-In BBQ _ Flames Close-up.png",
    badge: "PREMIUM GRILLS",
    category: "outdoor",
    waMessage: "Inquiry regarding Built-In BBQs & Side Burners"
  }
];

export const GENERAL_STATS = [
  { value: "500+", label: "Fireplaces Installed" },
  { value: "100%", label: "Smokeless & Safe" },
  { value: "3", label: "Product Categories" },
  { value: "5-Star", label: "Customer Service" }
];

export const PRODUCTS: ProductDetails[] = [
  {
    id: "indoor-ethanol",
    name: "Indoor Bio Ethanol Fireplace",
    tagline: "Ventless, Eco-Friendly Real Flame — Flames Fireplace",
    description: "Bring the warmth and elegance of a real flame into your indoor living spaces without the need for a chimney, flue, or gas connection. Flames Fireplace offers a curated range of bio ethanol fireplaces, from sleek tabletop models to statement wall-mounted units and custom inserts.",
    detailedDescription: "Bring the warmth and elegance of a real flame into your indoor living spaces without the need for a chimney, flue, or gas connection. Flames Fireplace offers a curated range of bio ethanol fireplaces, from sleek tabletop models to statement wall-mounted units and custom inserts. With a flueless fireplace, 100% of the heat generated stays inside your home instead of escaping up a chimney. It is a highly efficient, clean-burning solution that adds both ambiance and supplementary warmth to any room.",
    priceEstimate: "Available on Request",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200", // Luxurious modern salon
    bgGradient: "from-orange-50 to-orange-100",
    features: [
      "No Chimney Needed — burns cleanly with zero smoke, ash, or soot, making it 100% ventless",
      "Real Flame & Warmth — provides authentic radiant heat and a beautiful golden flicker",
      "Easy Installation — freestanding and tabletop models are ready to go; recessed units fit into standard drywall",
      "Eco-Friendly Fuel — powered by renewable, plant-derived bio ethanol liquid"
    ],
    benefits: [
      "No Chimney Needed — burns cleanly with zero smoke, ash, or soot, making it 100% ventless",
      "Real Flame & Warmth — provides authentic radiant heat and a beautiful golden flicker",
      "Easy Installation — freestanding and tabletop models are ready to go; recessed units fit into standard drywall",
      "Eco-Friendly Fuel — powered by renewable, plant-derived bio ethanol liquid"
    ],
    howItWorks: [
      "Pour premium liquid bioethanol fuel into the safety steel burner tank.",
      "Ignite the fuel vapors using an extended lighter safely.",
      "The fuel burns cleanly, producing comfortable physical heat and a gorgeous golden fire.",
      "To extinguish, simply slide the damper plate over the opening to snuff out the oxygen supply."
    ],
    faqs: [
      {
        question: "Does it require ventilation?",
        answer: "A standard chimney is not needed because it burns cleanly without smoke or soot. However, because it burns oxygen, it should be placed in rooms with normal air circulation or a partially cracked window."
      },
      {
        question: "Where does the heat go?",
        answer: "Because there is no chimney, 100% of the generated heat remains in the room, making it an incredibly efficient heating solution."
      }
    ]
  },
  {
    id: "outdoor-ethanol",
    name: "Outdoor Fire Features",
    tagline: "Outdoor Fire Features | Fire Pits & Fireplaces | Flames Fireplace",
    description: "Create an inviting outdoor retreat with our range of outdoor fire features. Engineered to withstand the elements while providing a stunning visual anchor, our collection ranges from contemporary bio ethanol burners to sculptural gas-powered installations.",
    detailedDescription: "Create an inviting outdoor retreat with our range of outdoor fire features. Engineered to withstand the elements while providing a stunning visual anchor, our collection ranges from contemporary bio ethanol burners to sculptural gas-powered installations.",
    priceEstimate: "Available on Request",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200", // Luxury terrace and pool
    bgGradient: "from-orange-100 to-amber-100",
    features: [
      "Bio Ethanol Fireplaces — clean-burning and ventless, perfect for custom outdoor enclosures, patios, and decks",
      "Fire Bowls & Fire Pits — durable concrete and steel fire bowls that create a warm, natural gathering spot",
      "Gas Fire Features — convenient, high-performance gas fire burners that deliver instant fire at the touch of a button",
      "Custom Outdoor Fire Installations — bespoke fire features designed and fitted to match your unique outdoor living space"
    ],
    benefits: [
      "Bio Ethanol Fireplaces — clean-burning and ventless, perfect for custom outdoor enclosures, patios, and decks",
      "Fire Bowls & Fire Pits — durable concrete and steel fire bowls that create a warm, natural gathering spot",
      "Gas Fire Features — convenient, high-performance gas fire burners that deliver instant fire at the touch of a button",
      "Custom Outdoor Fire Installations — bespoke fire features designed and fitted to match your unique outdoor living space"
    ],
    howItWorks: [
      "Position the weather-proof fire pit or fireplace in your desired terrace, pool, or garden layout.",
      "Refill the clean burner using premium liquid fuel or hook up your gas-powered line.",
      "Ignite using the safe integrated valve control or a remote trigger.",
      "Enjoy a beautiful, wind-resistant visual centerpiece that keeps your guests warm and cozy."
    ],
    faqs: [
      {
        question: "What categories of outdoor fire features do you provide?",
        answer: "We offer Bio Ethanol Fireplaces, concrete and steel Fire Bowls & Fire Pits, high-performance Gas Fire Features, and completely bespoke Custom Outdoor Fire Installations."
      },
      {
        question: "Are they weather-resistant for UAE summers?",
        answer: "Yes. All of our outdoor features are engineered from premium double-walled metals and concrete resins to resist heavy coastal air, high temperatures, and dust."
      }
    ]
  }
];

export const WHY_CHOOSE_EXTRA = {
  headline: "Flames Fireplace — Dubai's Trusted Name in Fire Features",
  paragraphs: [
    "Flames Fireplace was founded to bring high-quality, beautifully designed fire features and outdoor kitchens to homes and commercial spaces across the UAE. Based in Dubai, our team specializes in sourcing, supplying, and installing premium fireplaces and outdoor living products that are safe, durable, and engineered to perform in the Gulf climate.",
    "We believe that a fireplace or outdoor kitchen should be more than just an addition; it should be a central gathering space that brings people together. That’s why we partner with leading manufacturers to offer products that blend aesthetic elegance with robust, long-lasting construction.",
    "Whether it is a rooftop lounge, a private garden, or a high-end hospitality venue, Flames Fireplace serves clients in all emirates, including Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Ajman, Umm Al Quwain, and Fujairah, with uncompromising standards of customer care and craftsmanship."
  ]
};

export const COMMON_FAQS: FAQItem[] = [
  {
    question: "Do Flames Fireplace products require highly complicated professional installation?",
    answer: "Most of our catalog is designed for simple, plug-and-play installation! Freestanding Bio Ethanol columns require no installation. Wall-recessed bioethanol models can be easily mounted on safety wall blocks, and our technical design team provides full schematics and remote assistance."
  },
  {
    question: "Are bioethanol fireplaces safe to burn in small apartments?",
    answer: "Yes, when used as directed! Premium bioethanol burns cleanly, releasing vapor and minimal carbon dioxide equal to lighting a couple of candles. As long as your room has a normal ventilation inflow (like an open door, typical AC breeze, or a partially open window), it is fully safe."
  },
  {
    question: "What is the running cost compared to traditional wood or LPG gas?",
    answer: "Bio Ethanol utilizes liquid fuel. It burns highly efficiently, providing cozy radiant heating compared to electric radiators with no heat loss through a chimney."
  },
  {
    question: "Does Flames Fireplace deliver to all Emirates in the UAE?",
    answer: "Yes, we handle complete, secure door-to-door delivery across Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah. Our fulfillment is prompt, double-packed, and fully insured."
  },
  {
    question: "Can I customize the length of my fireplace?",
    answer: "Yes! For large villas, penthouses, or commercial environments like hotel lounges, our linear bio ethanol burners can be placed side-by-side to create a continuous, seamless flame line. Contact our team to request engineering assistance."
  },
  {
    question: "Where does Flames Fireplace install fireplaces in the UAE?",
    answer: "We serve Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain, and Fujairah for premium residential and hospitality projects."
  },
  {
    question: "Is Flames Fireplace suitable for villas, penthouses, and hotel lounges?",
    answer: "Absolutely. Our custom fireplace and outdoor living solutions are designed for private villas, rooftop penthouses, modern apartments, and high-end hospitality spaces."
  },
  {
    question: "What is the best fireplace option for a modern Dubai home?",
    answer: "A bio ethanol fireplace is one of the most popular choices for modern Dubai homes because it offers real flame, no chimney, and elegant installation with minimal structural disruption."
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "ethanol-buying-guide",
    title: "The Ultimate Bio Ethanol Fireplace Buyer's Guide & Safety Blueprint",
    slug: "/blog/bio-ethanol-fireplace-buyers-guide",
    targetKeyword: "bio ethanol fireplace buying guide, bio ethanol fireplace UAE",
    schema: "HowTo, FAQPage",
    content: {
      category: "Buying Guide",
      readTime: "7 min read",
      date: "May 28, 2026",
      intro: "Clean, ventless bioethanol fireplaces are taking modern interior remodeling by storm. Offering a real fire experience without the cost, soot, or logistics of chimneys, they install in minutes. Before you purchase a bioethanol fireplace for your home or project, here is our definitive architectural buyer's guide covering models, fuel criteria, running costs, and important precautions.",
      sections: [
        {
          heading: "1. Selecting Your Mounting Format",
          paragraphs: [
            "Tabletop and Intimate Casings: Small, highly mobile luxury containers designed for console tables, outdoor dining sets, or bathroom terraces. They burn for 2-4 hours per fill.",
            "Wall-Mounted and Freestanding Columns: Designed to be fixed on drywall backing or placed securely on the floor as structural furniture elements. Perfect for open-plan layouts.",
            "Built-In Cassette Cassettes: Seamlessly inserted into custom plaster walls or media walls. Often protected with tall tempered glass guards to prevent draft interference."
          ]
        },
        {
          heading: "2. Fuel Quality is Non-Negotiable",
          paragraphs: [
            "Always purchase liquid bioethanol fuel with a clean purity rating of 96% or more. Cheaper, substandard fuel variants can introduce chemical odors, burn with a yellow-grey color, or leave black soot carbon stains around your stainless steel burner slots. Double-distilled premium fuel produces completely clean combustion."
          ]
        },
        {
          heading: "3. Estimating Real-World Operational Budgets",
          paragraphs: [
            "A standard bioethanol burner compartment operating on a moderate flame setting provides hours of authentic living fire on a single tank. Given the cost of high-grade bioethanol canisters, it is a highly economical and focused alternative to heating rooms."
          ]
        },
        {
          heading: "4. Architectural Safety Checklist",
          paragraphs: [
            "Never refill any bioethanol reservoir while the unit is hot or actively burning! Always extinguish the flame and allow the metallic burner plate to cool down for at least 15 minutes before pouring fresh fuel.",
            "Maintain reasonable distance margins (at least 1 meter) from loose curtains, textile rugs, or wood decorations."
          ]
        }
      ]
    }
  },
  {
    id: "outdoor-entertaining-ideas",
    title: "Designing the Ultimate Premium Alfresco Lounge with Bio Ethanol Style",
    slug: "/blog/outdoor-entertaining-bio-ethanol-fireplace",
    targetKeyword: "outdoor fireplace ideas UAE, outdoor bio ethanol fireplace design",
    schema: "Article",
    content: {
      category: "Outdoor Living",
      readTime: "4 min read",
      date: "April 15, 2026",
      intro: "An outdoor deck or private garden is more than just square footage — it is a canvas for social memory. As the sun sets, a living fire centerpiece resets the ambiance of your space. Learn how professional landscape architects in Dubai and across the GCC integrate Outdoor Bio Ethanol Fireplaces to craft high-impact, cozy, four-season visual areas.",
      sections: [
        {
          heading: "Creating a Magnetic Lounge Hub",
          paragraphs: [
            "The ancient campfire remains the ultimate social magnet. By placing a low-slung concrete bioethanol fire table at the center of your sectional outdoor sofas, you establish an instant focal point. Guests can sit close without coughing on wood smoke or dealing with unpredictable flying embers that ruin outdoor textiles."
          ]
        },
        {
          heading: "Defining Boundaries with Fire Columns",
          paragraphs: [
            "If you have a wide, expansive garden layout, a pool deck, or a rooftop lounge, use tall concrete or obsidian-style bioethanol pillar torches to flank your entryways or outline the pool boundary. It creates a stunning resort-like lifestyle atmosphere that looks incredible during evening parties."
          ]
        },
        {
          heading: "Material Selection for Coastal Climates",
          paragraphs: [
            "The UAE's coastal areas can be challenging for outdoor metals due to high humidity and salinity. When buying outdoor fireplaces, refuse basic iron frames. Insist on marine-grade stainless steel 316, anodized aluminum structural panels, or lightweight weather-sealed architectural concrete fiber. These elements require zero annual painting."
          ]
        }
      ]
    }
  }
];
