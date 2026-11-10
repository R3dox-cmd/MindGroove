const PROJECTS = [
  {
    title: "The Olive Residence",
    category: "Contemporary Residential",
    desc: "A warm, material-rich home where dusty olive tones meet natural oak and soft linen. Designed for slow living and quiet luxury.",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80"
    ],
    thumb: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Noir Penthouse",
    category: "Luxury Apartment",
    desc: "A dark, cinematic penthouse layered in charcoal, matte black and warm ivory. Dramatic lighting sculpts every surface.",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=80"
    ],
    thumb: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "The Solace Villa",
    category: "Modern Villa",
    desc: "A serene coastal villa opening to the landscape. Stone, timber and light compose a quiet, restorative retreat.",
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80"
    ],
    thumb: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Atelier Workspace",
    category: "Commercial Interior",
    desc: "A creative studio built around collaboration and focus. Acoustic panels, warm task lighting and honest materials.",
    images: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80"
    ],
    thumb: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "The Ivory Retreat",
    category: "Minimalist Residence",
    desc: "A restrained, monastic home in warm ivory. Negative space and quiet proportions do the talking.",
    images: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80"
    ],
    thumb: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Urban Harmony",
    category: "Contemporary Living",
    desc: "A city apartment balancing raw concrete with soft textiles. Industrial bones, domestic warmth.",
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80"
    ],
    thumb: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80"
  }
];

const SERVICES = [
  { name: "Residential Interior Design", detail: "Bespoke homes crafted around the way you live — from concept to the final cushion." },
  { name: "Commercial Interior Design", detail: "Workspaces, hospitality and retail environments that perform and inspire." },
  { name: "Space Planning & Architecture", detail: "Intelligent layouts that unlock flow, light and proportion." },
  { name: "Furniture & Styling", detail: "Curated pieces and layered styling that complete the story." },
  { name: "Lighting Design", detail: "Sculpted illumination that sets mood and reveals material." },
  { name: "Renovation & Remodeling", detail: "Thoughtful transformations that honour the original while elevating it." }
];

const TESTIMONIALS = [
  { quote: "Mind Groove completely transformed our home. Every corner feels thoughtfully designed, and the attention to detail is exceptional.", name: "Aarav Mehta", project: "The Olive Residence" },
  { quote: "The entire experience was seamless. They understood our vision and turned it into something even better than we imagined.", name: "Rhea Kapoor", project: "Noir Penthouse" },
  { quote: "Their ability to combine functionality with beautiful aesthetics is remarkable. Our workspace feels completely different.", name: "Karan Malhotra", project: "Atelier Workspace" },
  { quote: "From the initial concept to the final details, everything was handled with creativity and precision. Absolutely loved the result.", name: "Ananya Sharma", project: "The Solace Villa" }
];
