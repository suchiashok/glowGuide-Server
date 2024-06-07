/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("products").del();
  await knex("products").insert([
    {
      id: 1,
      product_name: "HydraBoost Water Gel",
      category: "Moisturizer",
      brand: "Neutrogena",
      description:
        "Lightweight, non-greasy moisturizer that hydrates and smooths skin.",
      sizes: {
        small: "50ml",
        medium: "100ml",
        large: "200ml",
      },
      links: {
        brand: "https://www.neutrogena.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 2,
      product_name: "Ultra Facial Cream",
      category: "Moisturizer",
      brand: "Kiehl's",
      description: "24-hour daily facial cream for all skin types.",
      sizes: {
        small: "30ml",
        medium: "50ml",
        large: "100ml",
      },
      links: {
        brand: "https://www.kiehls.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 3,
      product_name: "CeraVe Moisturizing Cream",
      category: "Moisturizer",
      brand: "CeraVe",
      description:
        "Rich, non-greasy, fast-absorbing, and suitable for dry skin.",
      sizes: {
        small: "50ml",
        medium: "100ml",
        large: "200ml",
      },
      links: {
        brand: "https://www.cerave.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 4,
      product_name: "Tidal Brightening Enzyme Water Cream",
      category: "Moisturizer",
      brand: "Sunday Riley",
      description:
        "Brightening, refining treatment that delivers intense hydration.",
      sizes: {
        small: "30ml",
        medium: "50ml",
        large: "100ml",
      },
      links: {
        brand: "https://www.sundayriley.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 5,
      product_name: "Moisture Surge 72-Hour Auto-Replenishing Hydrator",
      category: "Moisturizer",
      brand: "Clinique",
      description:
        "Gel-cream that keeps skin almost twice as hydrated at the end of the day.",
      sizes: {
        small: "30ml",
        medium: "50ml",
        large: "100ml",
      },
      links: {
        brand: "https://www.clinique.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 6,
      product_name: "Advanced Génifique Youth Activating Serum",
      category: "Serum",
      brand: "Lancôme",
      description: "Anti-aging serum for glowing, younger-looking skin.",
      sizes: {
        small: "30ml",
        medium: "50ml",
        large: "100ml",
      },
      links: {
        brand: "https://www.lancome-usa.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 7,
      product_name: "C E Ferulic",
      category: "Serum",
      brand: "SkinCeuticals",
      description: "Vitamin C serum that provides environmental protection.",
      sizes: {
        small: "15ml",
        medium: "30ml",
        large: "50ml",
      },
      links: {
        brand: "https://www.skinceuticals.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 8,
      product_name: "Truth Serum",
      category: "Serum",
      brand: "Ole Henriksen",
      description: "Collagen-boosted with True-C Complex to brighten and firm.",
      sizes: {
        small: "30ml",
        medium: "50ml",
        large: "100ml",
      },
      links: {
        brand: "https://www.olehenriksen.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 9,
      product_name: "Hyaluronic Acid 2% + B5",
      category: "Serum",
      brand: "The Ordinary",
      description: "Hydrating formula with ultra-pure, vegan hyaluronic acid.",
      sizes: {
        small: "30ml",
        medium: "60ml",
        large: "100ml",
      },
      links: {
        brand: "https://www.theordinary.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 10,
      product_name: "Double Serum Complete Age Control Concentrate",
      category: "Serum",
      brand: "Clarins",
      description:
        "A two-in-one formula that visibly firms, smooths, and boosts radiance.",
      sizes: {
        small: "30ml",
        medium: "50ml",
        large: "100ml",
      },
      links: {
        brand: "https://www.clarins.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 11,
      product_name: "UV Clear Broad-Spectrum SPF 46",
      category: "Sunscreen",
      brand: "EltaMD",
      description: "Oil-free sunscreen that calms and protects sensitive skin.",
      sizes: {
        small: "1.7oz",
        medium: "3oz",
        large: "4oz",
      },
      links: {
        brand: "https://www.eltamd.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 12,
      product_name: "Anthelios Melt-in Milk Sunscreen SPF 100",
      category: "Sunscreen",
      brand: "La Roche-Posay",
      description: "Sunscreen for face and body, sensitive skin formula.",
      sizes: {
        small: "3oz",
        medium: "5oz",
        large: "8oz",
      },
      links: {
        brand: "https://www.laroche-posay.us/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 13,
      product_name: "Unseen Sunscreen SPF 40",
      category: "Sunscreen",
      brand: "Supergoop!",
      description:
        "Weightless, invisible, scent-free, and makeup-gripping daily primer.",
      sizes: {
        small: "0.5oz",
        medium: "1.7oz",
        large: "2.0oz",
      },
      links: {
        brand: "https://supergoop.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 14,
      product_name: "Clear Face Breakout Free Oil-Free Sunscreen SPF 55",
      category: "Sunscreen",
      brand: "Neutrogena",
      description: "Protects skin from sunburn without causing breakouts.",
      sizes: {
        small: "3oz",
        medium: "5oz",
        large: "8oz",
      },
      links: {
        brand: "https://www.neutrogena.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 15,
      product_name: "Sunprise Mild Airy Finish Sun Milk SPF50+",
      category: "Sunscreen",
      brand: "Etude House",
      description: "Lightweight, fast-absorbing sunscreen with a matte finish.",
      sizes: {
        small: "1.6oz",
        medium: "3.4oz",
        large: "5oz",
      },
      links: {
        brand: "https://www.etudehouse.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 16,
      product_name: "Glow Tonic",
      category: "Toner",
      brand: "Pixi",
      description:
        "Exfoliating toner that helps to firm and tighten normal to dry, dull skin.",
      sizes: {
        small: "3.4oz",
        medium: "8.5oz",
        large: "16.9oz",
      },
      links: {
        brand: "https://www.pixibeauty.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 17,
      product_name: "The Alcohol-Free Witch Hazel Toner",
      category: "Toner",
      brand: "Thayers",
      description: "Gentle toner derived from a time-honored formula.",
      sizes: {
        small: "3oz",
        medium: "8oz",
        large: "12oz",
      },
      links: {
        brand: "https://www.thayers.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 18,
      product_name: "Pore-Reducing Toner",
      category: "Toner",
      brand: "Paula's Choice",
      description:
        "Minimizes pores and reduces oiliness with a gentle, alcohol-free formula.",
      sizes: {
        small: "4oz",
        medium: "6.4oz",
        large: "10oz",
      },
      links: {
        brand: "https://www.paulaschoice.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 19,
      product_name: "Aloe Vera Soothing & Moisture Toner",
      category: "Toner",
      brand: "Nature Republic",
      description: "Hydrating and soothing toner with aloe vera extract.",
      sizes: {
        small: "5.07oz",
        medium: "10.14oz",
        large: "16.9oz",
      },
      links: {
        brand: "https://www.naturerepublicusa.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 20,
      product_name: "Calendula Herbal Extract Alcohol-Free Toner",
      category: "Toner",
      brand: "Kiehl's",
      description: "Alcohol-free toner for normal to oily skin types.",
      sizes: {
        small: "4.2oz",
        medium: "8.4oz",
        large: "16.9oz",
      },
      links: {
        brand: "https://www.kiehls.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 21,
      product_name: "Dramatically Different Moisturizing Lotion",
      category: "Moisturizer",
      brand: "Clinique",
      description:
        "Daily moisture developed by dermatologists to maintain optimal moisture balance.",
      sizes: {
        small: "1oz",
        medium: "1.7oz",
        large: "4.2oz",
      },
      links: {
        brand: "https://www.clinique.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 22,
      product_name: "Toleriane Double Repair Face Moisturizer",
      category: "Moisturizer",
      brand: "La Roche-Posay",
      description:
        "Replenishes moisture for up to 48-hour hydration and helps restore the skin barrier.",
      sizes: {
        small: "1oz",
        medium: "2.5oz",
        large: "4.2oz",
      },
      links: {
        brand: "https://www.laroche-posay.us/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 23,
      product_name: "Water Drench Hyaluronic Cloud Cream",
      category: "Moisturizer",
      brand: "Peter Thomas Roth",
      description:
        "Rich, hydrating cream that reduces the appearance of fine lines and wrinkles.",
      sizes: {
        small: "0.67oz",
        medium: "1.7oz",
        large: "3.4oz",
      },
      links: {
        brand: "https://www.peterthomasroth.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 24,
      product_name: "Belif The True Cream Aqua Bomb",
      category: "Moisturizer",
      brand: "Belif",
      description:
        "Ultra-lightweight, oil-free gel-cream that instantly cools and refreshes skin.",
      sizes: {
        small: "0.84oz",
        medium: "1.68oz",
        large: "3.38oz",
      },
      links: {
        brand: "https://www.belifusa.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 25,
      product_name: "First Aid Beauty Ultra Repair Cream",
      category: "Moisturizer",
      brand: "First Aid Beauty",
      description: "Intense hydration for dry, distressed skin and eczema.",
      sizes: {
        small: "2oz",
        medium: "6oz",
        large: "8oz",
      },
      links: {
        brand: "https://www.firstaidbeauty.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 26,
      product_name: "Ceramidin Cream",
      category: "Moisturizer",
      brand: "Dr. Jart+",
      description: "Deep moisturizing cream for dry and rough skin.",
      sizes: {
        small: "0.67oz",
        medium: "1.69oz",
        large: "3.38oz",
      },
      links: {
        brand: "https://www.drjart.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 27,
      product_name: "Youth To The People Adaptogen Deep Moisture Cream",
      category: "Moisturizer",
      brand: "Youth To The People",
      description:
        "Adaptogen-rich hydrating cream to combat dryness and redness.",
      sizes: {
        small: "0.25oz",
        medium: "2oz",
        large: "4oz",
      },
      links: {
        brand: "https://www.youthtothepeople.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 28,
      product_name: "Fresh Rose Deep Hydration Face Cream",
      category: "Moisturizer",
      brand: "Fresh",
      description:
        "Hydrating moisturizer infused with time-release hydro-patches.",
      sizes: {
        small: "0.24oz",
        medium: "1oz",
        large: "1.6oz",
      },
      links: {
        brand: "https://www.fresh.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 29,
      product_name: "Charlotte's Magic Cream",
      category: "Moisturizer",
      brand: "Charlotte Tilbury",
      description:
        "Anti-aging moisturizer to transform the appearance of tired, dull skin.",
      sizes: {
        small: "0.52oz",
        medium: "1.01oz",
        large: "1.69oz",
      },
      links: {
        brand: "https://www.charlottetilbury.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 30,
      product_name: "Weleda Skin Food Original Ultra-Rich Cream",
      category: "Moisturizer",
      brand: "Weleda",
      description:
        "Deeply nourishing and intensely hydrating cream for dry, rough skin.",
      sizes: {
        small: "1oz",
        medium: "2.5oz",
        large: "4.5oz",
      },
      links: {
        brand: "https://www.weleda.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 31,
      product_name: "The Ordinary Niacinamide 10% + Zinc 1%",
      category: "Serum",
      brand: "The Ordinary",
      description: "High-strength vitamin and mineral blemish formula.",
      sizes: {
        standard: "1oz",
      },
      links: {
        brand: "https://theordinary.deciem.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 32,
      product_name: "Estee Lauder Advanced Night Repair",
      category: "Serum",
      brand: "Estee Lauder",
      description:
        "Synchronized Recovery Complex II for radiant, youthful-looking skin.",
      sizes: {
        standard: "1.7oz",
      },
      links: {
        brand: "https://www.esteelauder.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 33,
      product_name: "L'Oréal Paris Revitalift 1.5% Pure Hyaluronic Acid Serum",
      category: "Serum",
      brand: "L'Oréal Paris",
      description: "Instantly hydrates and visibly plumps skin.",
      sizes: {
        standard: "1oz",
      },
      links: {
        brand: "https://www.lorealparisusa.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 34,
      product_name: "Drunk Elephant C-Firma Day Serum",
      category: "Serum",
      brand: "Drunk Elephant",
      description:
        "Potent antioxidant complex, enzyme, and essential nutrients.",
      sizes: {
        standard: "1oz",
      },
      links: {
        brand: "https://www.drunkelephant.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 35,
      product_name: "Olay Regenerist Micro-Sculpting Serum",
      category: "Serum",
      brand: "Olay",
      description: "Anti-aging serum with advanced amino-peptide complex.",
      sizes: {
        standard: "1.7oz",
      },
      links: {
        brand: "https://www.olay.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 36,
      product_name: "Vichy Mineral 89",
      category: "Serum",
      brand: "Vichy",
      description: "Fortifying and plumping daily booster.",
      sizes: {
        standard: "1.69oz",
      },
      links: {
        brand: "https://www.vichyusa.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 37,
      product_name: "Caudalie Vinoperfect Radiance Serum",
      category: "Serum",
      brand: "Caudalie",
      description: "Complexion correcting, brightening serum.",
      sizes: {
        standard: "1oz",
      },
      links: {
        brand: "https://us.caudalie.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 38,
      product_name: "Kiehl's Clearly Corrective Dark Spot Solution",
      category: "Serum",
      brand: "Kiehl's",
      description: "Visibly reduces dark spots and discolorations.",
      sizes: {
        standard: "1oz",
      },
      links: {
        brand: "https://www.kiehls.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 39,
      product_name: "Murad Rapid Age Spot and Pigment Lightening Serum",
      category: "Serum",
      brand: "Murad",
      description: "Targeted skin lightening treatment.",
      sizes: {
        standard: "1oz",
      },
      links: {
        brand: "https://www.murad.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 40,
      product_name: "The Inkey List Hyaluronic Acid Serum",
      category: "Serum",
      brand: "The Inkey List",
      description: "Hydrating serum with hyaluronic acid.",
      sizes: {
        standard: "1oz",
      },
      links: {
        brand: "https://www.theinkeylist.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 41,
      product_name: "Neutrogena Hydro Boost Water Gel Lotion SPF 30",
      category: "Sunscreen",
      brand: "Neutrogena",
      description: "Water gel lotion with SPF 30, hydrates and protects skin.",
      sizes: {
        standard: "3oz",
      },
      links: {
        brand: "https://www.neutrogena.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 42,
      product_name: "Aveeno Protect + Hydrate Face Sunscreen SPF 50",
      category: "Sunscreen",
      brand: "Aveeno",
      description: "Oil-free sunscreen with SPF 50 for face.",
      sizes: {
        standard: "3oz",
      },
      links: {
        brand: "https://www.aveeno.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 43,
      product_name: "Blue Lizard Australian Sunscreen SPF 30+",
      category: "Sunscreen",
      brand: "Blue Lizard",
      description: "Mineral sunscreen with SPF 30+ for sensitive skin.",
      sizes: {
        standard: "5oz",
      },
      links: {
        brand: "https://www.bluelizard.net/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 44,
      product_name: "Coppertone Pure & Simple SPF 50",
      category: "Sunscreen",
      brand: "Coppertone",
      description: "Hypoallergenic sunscreen with SPF 50.",
      sizes: {
        standard: "6oz",
      },
      links: {
        brand: "https://www.coppertone.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 45,
      product_name: "Banana Boat Ultra Sport Sunscreen SPF 50",
      category: "Sunscreen",
      brand: "Banana Boat",
      description: "High-performance sunscreen with SPF 50.",
      sizes: {
        standard: "8oz",
      },
      links: {
        brand: "https://www.bananaboat.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 46,
      product_name: "Alba Botanica Hawaiian Sunscreen SPF 45",
      category: "Sunscreen",
      brand: "Alba Botanica",
      description: "Natural, botanical-based sunscreen with SPF 45.",
      sizes: {
        standard: "4oz",
      },
      links: {
        brand: "https://www.albabotanica.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 47,
      product_name: "Hawaiian Tropic Sheer Touch SPF 30",
      category: "Sunscreen",
      brand: "Hawaiian Tropic",
      description:
        "Lightweight sunscreen with SPF 30 and skin-nourishing antioxidants.",
      sizes: {
        standard: "8oz",
      },
      links: {
        brand: "https://www.hawaiiantropic.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 48,
      product_name: "Coola Classic Face Organic Sunscreen SPF 30",
      category: "Sunscreen",
      brand: "Coola",
      description: "Organic face sunscreen with SPF 30.",
      sizes: {
        standard: "1.7oz",
      },
      links: {
        brand: "https://coola.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 49,
      product_name: "Shiseido Ultimate Sun Protection Lotion SPF 50+",
      category: "Sunscreen",
      brand: "Shiseido",
      description: "Water-resistant sunscreen with SPF 50+.",
      sizes: {
        standard: "3.3oz",
      },
      links: {
        brand: "https://www.shiseido.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 50,
      product_name: "Biore UV Aqua Rich Watery Essence SPF 50+",
      category: "Sunscreen",
      brand: "Biore",
      description: "Lightweight, water-based sunscreen with SPF 50+.",
      sizes: {
        standard: "1.7oz",
      },
      links: {
        brand: "https://www.biore.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 51,
      product_name: "Innisfree Green Tea Balancing Skin",
      category: "Toner",
      brand: "Innisfree",
      description: "Hydrating toner formulated with green tea extract.",
      sizes: {
        standard: "6.76oz",
      },
      links: {
        brand: "https://us.innisfree.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 52,
      product_name: "Klairs Supple Preparation Unscented Toner",
      category: "Toner",
      brand: "Klairs",
      description: "Calming and hydrating toner for sensitive skin.",
      sizes: {
        standard: "6.08oz",
      },
      links: {
        brand: "https://www.klairscosmetics.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 53,
      product_name: "Mario Badescu Glycolic Acid Toner",
      category: "Toner",
      brand: "Mario Badescu",
      description: "Glycolic acid-based toner to rejuvenate skin.",
      sizes: {
        standard: "8oz",
      },
      links: {
        brand: "https://www.mariobadescu.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 54,
      product_name: "Thayers Witch Hazel Toner",
      category: "Toner",
      brand: "Thayers",
      description: "Alcohol-free toner with witch hazel and aloe vera.",
      sizes: {
        standard: "12oz",
      },
      links: {
        brand: "https://www.thayers.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 55,
      product_name: "Pixi Glow Tonic",
      category: "Toner",
      brand: "Pixi",
      description: "Exfoliating toner with glycolic acid to brighten skin.",
      sizes: {
        standard: "3.4oz",
      },
      links: {
        brand: "https://www.pixibeauty.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 56,
      product_name: "The Ordinary Glycolic Acid 7% Toning Solution",
      category: "Toner",
      brand: "The Ordinary",
      description:
        "Exfoliating toner with glycolic acid for improved skin clarity.",
      sizes: {
        standard: "8oz",
      },
      links: {
        brand: "https://theordinary.deciem.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 57,
      product_name: "Fresh Rose & Hyaluronic Acid Deep Hydration Toner",
      category: "Toner",
      brand: "Fresh",
      description: "Hydrating toner with rose water and hyaluronic acid.",
      sizes: {
        standard: "8.4oz",
      },
      links: {
        brand: "https://www.fresh.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 58,
      product_name: "Paula's Choice Skin Balancing Pore-Reducing Toner",
      category: "Toner",
      brand: "Paula's Choice",
      description: "Balances oily skin and minimizes pores.",
      sizes: {
        standard: "6.4oz",
      },
      links: {
        brand: "https://www.paulaschoice.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 59,
      product_name: "Kiehl's Calendula Herbal Extract Alcohol-Free Toner",
      category: "Toner",
      brand: "Kiehl's",
      description: "Soothing, alcohol-free toner with calendula.",
      sizes: {
        standard: "8.4oz",
      },
      links: {
        brand: "https://www.kiehls.com/",
        sephora: "https://www.sephora.com/",
      },
    },
    {
      id: 60,
      product_name: "Laneige Essential Power Skin Toner",
      category: "Toner",
      brand: "Laneige",
      description: "Hydrating toner to boost moisture levels.",
      sizes: {
        standard: "6.7oz",
      },
      links: {
        brand: "https://us.laneige.com/",
        sephora: "https://www.sephora.com/",
      },
    },
  ]);
};
