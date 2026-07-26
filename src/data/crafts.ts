import { CraftDetail } from '../types';

export const CRAFT_DETAILS: Record<string, CraftDetail> = {
  Bagru: {
    id: 'Bagru',
    name: 'Bagru Handblock Print',
    origin: 'Bagru Village, Jaipur, Rajasthan',
    shortDesc: 'A century-old mud-resist and natural dye technique famous for earthy tones (terracotta, indigo, charcoal black) and botanical motifs.',
    fullDesc: 'Practiced predominantly by the Chippa community of Bagru village, this craft relies on natural ingredients like Harda (myrobalan), iron rust syrup, madder root, and natural indigo. The fabrics undergo intense sun-drying along the Sanjaria riverbed.',
    dyeType: '100% Natural Eco Vegetable Dyes (Indigo, Madder Root, Iron Scraps, Turmeric)',
    heroImage: '/craft/bagru_hero.jpg',
    processSteps: [
      {
        stepNumber: 1,
        title: 'Woodblock Carving (Tarkashi)',
        subtitle: 'Hand-carving seasoned Teak & Sheesham wood',
        description: 'Master artisans chisel intricate floral, leafy, and geometric patterns into heavy hardwood blocks. A single pattern requires up to 4 separate blocks: Rehk (outline), Gad (background filling), and Datta (accent details).',
        imageUrl: '/craft/step_1.jpg'
      },
      {
        stepNumber: 2,
        title: 'Fabric Pre-Treatment & Preparation',
        subtitle: 'Soaking in Myrobalan fruit & organic solutions',
        description: 'Raw unbleached cotton cloth is washed and treated in natural tannic solutions. This organic pre-treatment acts as a natural mordant for deep, lasting dye absorption.',
        imageUrl: '/craft/step_2.jpg'
      },
      {
        stepNumber: 3,
        title: 'Hand Stamping with Precision',
        subtitle: 'Rhythmic wooden block stamping by master artisans',
        description: 'Artisans press wooden blocks into felt pads soaked with natural pigment, aligning each print by eye with flawless micro-millimeter precision across meters of stretched fabric.',
        imageUrl: '/craft/step_3.jpg'
      },
      {
        stepNumber: 4,
        title: 'Sun Drying & Natural Dyeing',
        subtitle: 'Developing rich organic colors under the Rajasthan sun',
        description: 'Printed cloths are boiled in copper vats with natural dyes to fix colors, then spread across open desert drying grounds under the warm sun.',
        imageUrl: '/craft/step_4.jpg'
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
    heroImage: '/craft/bagru_hero.jpg',
    processSteps: [
      {
        stepNumber: 1,
        title: 'Woodblock Carving',
        subtitle: 'Micro-carving on Sheesham blocks',
        description: 'Craftsmen carve hair-thin outlines into hardwood blocks, capturing graceful petals, birds, and Mughal floral motifs.',
        imageUrl: '/craft/step_1.jpg'
      },
      {
        stepNumber: 2,
        title: 'Fabric Bleaching & Scouring',
        subtitle: 'Achieving pristine white cotton canvas',
        description: 'Cotton cloth is scoured with natural starches to produce a bright white surface that highlights delicate floral prints.',
        imageUrl: '/craft/step_2.jpg'
      },
      {
        stepNumber: 3,
        title: 'Multi-Block Hand Stamping',
        subtitle: 'Overlaying outline and color filling blocks',
        description: 'Artisans first stamp the dark Rehk outline, followed by up to 5 colored Datta blocks to create vibrant multi-hued floral trails.',
        imageUrl: '/craft/step_3.jpg'
      },
      {
        stepNumber: 4,
        title: 'Sun Drying & Finishing',
        subtitle: 'Natural drying under the open sun',
        description: 'Fabrics are washed in clear flowing water and dried in open fields to lock in vibrant pigments and feather-light softness.',
        imageUrl: '/craft/step_4.jpg'
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
    heroImage: '/craft/bagru_hero.jpg',
    processSteps: [
      {
        stepNumber: 1,
        title: 'Woodblock Carving',
        subtitle: 'Carving geometric grid wooden blocks',
        description: 'Carving intricate geometric star and lattice motifs into dense Sheesham hardwood blocks.',
        imageUrl: '/craft/step_1.jpg'
      },
      {
        stepNumber: 2,
        title: 'Fabric Bio-Washing (Saaj)',
        subtitle: 'Softening fabric for dye bonding',
        description: 'Unbleached cloth is scoured through natural bio-washing to open cotton pores for deep mineral dye bonding.',
        imageUrl: '/craft/step_2.jpg'
      },
      {
        stepNumber: 3,
        title: 'Mud-Resist Hand Stamping',
        subtitle: 'Protecting white geometric grids with mud paste',
        description: 'A special resist paste made of lime, gum arabic, and clay is stamped on both sides of the cloth to preserve white lines.',
        imageUrl: '/craft/step_3.jpg'
      },
      {
        stepNumber: 4,
        title: 'Vat Dyeing & Sun Drying',
        subtitle: 'Indigo dipping and open sun drying',
        description: 'Dipped in subterranean indigo vats and boiled with madder root, then dried under the open sky.',
        imageUrl: '/craft/step_4.jpg'
      }
    ]
  }
};
