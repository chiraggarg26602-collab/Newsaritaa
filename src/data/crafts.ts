import { CraftDetail } from '../types';

export const CRAFT_DETAILS: Record<string, CraftDetail> = {
  Bagru: {
    id: 'Bagru',
    name: 'Bagru Handblock Print',
    origin: 'Bagru Village, Jaipur, Rajasthan',
    shortDesc: 'A century-old mud-resist and natural dye technique famous for earthy tones (terracotta, indigo, charcoal black) and botanical motifs.',
    fullDesc: 'Practiced predominantly by the Chippa community of Bagru village, this craft relies on natural ingredients like Harda (myrobalan), iron rust syrup, madder root, and natural indigo. The fabrics undergo intense sun-drying along the Sanjaria riverbed.',
    dyeType: '100% Natural Eco Vegetable Dyes (Indigo, Madder Root, Iron Scraps, Turmeric)',
    heroImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    processSteps: [
      {
        stepNumber: 1,
        title: 'Woodblock Carving (Tarkashi)',
        subtitle: 'Hand-carving seasoned Teak & Sheesham wood',
        description: 'Master artisans chisel intricate floral, leafy, and geometric patterns into heavy hardwood blocks. A single pattern requires up to 4 separate blocks: Rehk (outline), Gad (background filling), and Datta (accent details).',
        imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
      },
      {
        stepNumber: 2,
        title: 'Fabric Pre-Treatment (Harda)',
        subtitle: 'Soaking in Myrobalan fruit extract solution',
        description: 'Raw unbleached cotton cloth is washed and soaked in a natural tannic solution derived from dried Harda (myrobalan) fruits. This pre-treatment acts as a natural mordant for deep dye absorption.',
        imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80'
      },
      {
        stepNumber: 3,
        title: 'Hand Stamping with Precision',
        subtitle: 'Rhythmic wooden block stamping by master artisans',
        description: 'Artisans press wooden blocks into felt pads soaked with natural pigment, aligning each print by eye with flawless micro-millimeter precision across meters of stretched fabric.',
        imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
      },
      {
        stepNumber: 4,
        title: 'Boiling & Open Sun Drying',
        subtitle: 'Developing rich earthy colors in copper cauldrons',
        description: 'Printed cloths are boiled in copper vats filled with Dhaturi flowers and madder roots to fix the colors, then spread across open desert fields to dry naturally under Rajasthan sun.',
        imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  Sanganeri: {
    id: 'Sanganeri',
    name: 'Sanganeri Fine Block Print',
    origin: 'Sanganer, Jaipur, Rajasthan',
    shortDesc: 'Renowned for crisp, delicate floral Bel (creepers) and Butti (sprigs) printed on pure white or ivory backgrounds.',
    fullDesc: 'Originating under royal patronage in the 16th century, Sanganeri block printing stands out for its high density of fine lines, delicate rose, marigold, lotus motifs, and luminous ivory backdrops.',
    dyeType: 'Pure Vegetable Extracts and Eco-certified Mineral Pigments',
    heroImage: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1200&q=80',
    processSteps: [
      {
        stepNumber: 1,
        title: 'Delicate Pattern Carving',
        subtitle: 'Micro-carving on Sheesham blocks',
        description: 'Craftsmen carve hair-thin outlines into hardwood blocks, capturing graceful petals, birds, and Mughal floral motifs.',
        imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
      },
      {
        stepNumber: 2,
        title: 'Bleaching & Scouring',
        subtitle: 'Achieving pristine white cotton canvas',
        description: 'Cotton cloth is scoured with river water and natural starches to produce a bright white surface that highlights delicate floral prints.',
        imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
      },
      {
        stepNumber: 3,
        title: 'Multi-Block Overlay Printing',
        subtitle: 'Overlaying outline and color filling blocks',
        description: 'Artisans first stamp the dark Rehk outline, followed by up to 5 colored Datta blocks to create vibrant multi-hued floral trails.',
        imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
      },
      {
        stepNumber: 4,
        title: 'Washing in River Water',
        subtitle: 'Rinsing excess starches to reveal soft handfeel',
        description: 'Fabrics are washed extensively in clear flowing water to wash off unabsorbed pigments and achieve feather-light softness.',
        imageUrl: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  Ajrakh: {
    id: 'Ajrakh',
    name: 'Ajrakh Geometric Mastercraft',
    origin: 'Kutch, Gujarat & Barmer, Rajasthan',
    shortDesc: 'A complex 16-step double-sided block printing process featuring cosmic geometric star motifs, deep indigo, and crimson madder dyes.',
    fullDesc: 'Deriving its name from "Aaj Rakh" (Keep it today) or "Azrak" (Blue in Arabic), Ajrakh is one of humanity\'s oldest block printing traditions. The fabric undergoes up to 16 distinct washing, resist printing, and indigo-madder vat dye cycles.',
    dyeType: 'Fermented Indigo, Madder Root (Manjistha), Iron Rust, Pomegranate Rind',
    heroImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80',
    processSteps: [
      {
        stepNumber: 1,
        title: 'Saaj (Scouring & Washing)',
        subtitle: 'Softening fabric with camel dung and soda ash',
        description: 'Unbleached cloth is scoured through natural bio-washing to open cotton pores for deep mineral dye bonding.',
        imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80'
      },
      {
        stepNumber: 2,
        title: 'Gach Mud-Resist Stamping',
        subtitle: 'Protecting white geometric grids with mud paste',
        description: 'A special resist paste made of lime, gum arabic, and clay is stamped on both sides of the cloth to preserve white lines.',
        imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
      },
      {
        stepNumber: 3,
        title: 'Indigo Vat Dipping',
        subtitle: 'Submerging in deep natural indigo ferment vats',
        description: 'The fabric is dipped repeatedly into subterranean indigo vats. Exposure to air oxidizes the dye from yellow-green to regal blue.',
        imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
      },
      {
        stepNumber: 4,
        title: 'Bhattti Boiling in Madder Root',
        subtitle: 'Developing deep crimson red highlights',
        description: 'Boiling in copper kettles with powdered madder root (Manjistha) turns non-resist areas into rich fiery red motifs.',
        imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
};
