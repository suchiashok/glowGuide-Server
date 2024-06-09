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
      size_small: "50ml",
      size_medium: "100ml",
      size_large: "200ml",
      brand_link: "https://www.neutrogena.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 2,
      product_name: "Ultra Facial Cream",
      category: "Moisturizer",
      brand: "Kiehl's",
      description: "24-hour daily facial cream for all skin types.",
      size_small: "30ml",
      size_medium: "50ml",
      size_large: "100ml",
      brand_link: "https://www.kiehls.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 3,
      product_name: "CeraVe Moisturizing Cream",
      category: "Moisturizer",
      brand: "CeraVe",
      description:
        "Rich, non-greasy, fast-absorbing, and suitable for dry skin.",
      size_small: "50ml",
      size_medium: "100ml",
      size_large: "200ml",
      brand_link: "https://www.cerave.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 4,
      product_name: "Tidal Brightening Enzyme Water Cream",
      category: "Moisturizer",
      brand: "Sunday Riley",
      description:
        "Brightening, refining treatment that delivers intense hydration.",
      size_small: "30ml",
      size_medium: "50ml",
      size_large: "100ml",
      brand_link: "https://www.sundayriley.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 5,
      product_name: "Moisture Surge 72-Hour Auto-Replenishing Hydrator",
      category: "Moisturizer",
      brand: "Clinique",
      description:
        "Gel-cream that keeps skin almost twice as hydrated at the end of the day.",
      size_small: "30ml",
      size_medium: "50ml",
      size_large: "100ml",
      brand_link: "https://www.clinique.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 6,
      product_name: "Advanced Génifique Youth Activating Serum",
      category: "Serum",
      brand: "Lancôme",
      description: "Anti-aging serum for glowing, younger-looking skin.",
      size_small: "30ml",
      size_medium: "50ml",
      size_large: "100ml",
      brand_link: "https://www.lancome-usa.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 7,
      product_name: "C E Ferulic",
      category: "Serum",
      brand: "SkinCeuticals",
      description: "Vitamin C serum that provides environmental protection.",
      size_small: "15ml",
      size_medium: "30ml",
      size_large: "50ml",
      brand_link: "https://www.skinceuticals.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 8,
      product_name: "Truth Serum",
      category: "Serum",
      brand: "Ole Henriksen",
      description: "Collagen-boosted with True-C Complex to brighten and firm.",
      size_small: "30ml",
      size_medium: "50ml",
      size_large: "100ml",
      brand_link: "https://www.olehenriksen.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 9,
      product_name: "Hyaluronic Acid 2% + B5",
      category: "Serum",
      brand: "The Ordinary",
      description: "Hydrating formula with ultra-pure, vegan hyaluronic acid.",
      size_small: "30ml",
      size_medium: "60ml",
      size_large: "100ml",
      brand_link: "https://www.theordinary.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 10,
      product_name: "Double Serum Complete Age Control Concentrate",
      category: "Serum",
      brand: "Clarins",
      description:
        "A two-in-one formula that visibly firms, smooths, and boosts radiance.",
      size_small: "30ml",
      size_medium: "50ml",
      size_large: "100ml",
      brand_link: "https://www.clarins.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 11,
      product_name: "UV Clear Broad-Spectrum SPF 46",
      category: "Sunscreen",
      brand: "EltaMD",
      description: "Oil-free sunscreen that calms and protects sensitive skin.",
      size_small: "1.7oz",
      size_medium: "3oz",
      size_large: "4oz",
      brand_link: "https://www.eltamd.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 12,
      product_name: "Anthelios Melt-in Milk Sunscreen SPF 100",
      category: "Sunscreen",
      brand: "La Roche-Posay",
      description: "Sunscreen for face and body, sensitive skin formula.",
      size_small: "3oz",
      size_medium: "5oz",
      size_large: "8oz",
      brand_link: "https://www.laroche-posay.us/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 13,
      product_name: "Unseen Sunscreen SPF 40",
      category: "Sunscreen",
      brand: "Supergoop!",
      description:
        "Weightless, invisible, scent-free, and makeup-gripping daily primer.",
      size_small: "0.5oz",
      size_medium: "1.7oz",
      size_large: "2.0oz",
      brand_link: "https://supergoop.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 14,
      product_name: "Clear Face Breakout Free Oil-Free Sunscreen SPF 55",
      category: "Sunscreen",
      brand: "Neutrogena",
      description: "Protects skin from sunburn without causing breakouts.",
      size_small: "3oz",
      size_medium: "5oz",
      size_large: "8oz",
      brand_link: "https://www.neutrogena.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 15,
      product_name: "Sunprise Mild Airy Finish Sun Milk SPF50+",
      category: "Sunscreen",
      brand: "Etude House",
      description: "Lightweight, fast-absorbing sunscreen with a matte finish.",
      size_small: "1.6oz",
      size_medium: "3.4oz",
      size_large: "5oz",
      brand_link: "https://www.etudehouse.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 16,
      product_name: "Glow Tonic",
      category: "Toner",
      brand: "Pixi",
      description:
        "Exfoliating toner that helps to firm and tighten normal to dry, dull skin.",
      size_small: "3.4oz",
      size_medium: "8.5oz",
      size_large: "16.9oz",
      brand_link: "https://www.pixibeauty.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 17,
      product_name: "The Alcohol-Free Witch Hazel Toner",
      category: "Toner",
      brand: "Thayers",
      description: "Gentle toner derived from a time-honored formula.",
      size_small: "3oz",
      size_medium: "8oz",
      size_large: "12oz",
      brand_link: "https://www.thayers.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 18,
      product_name: "Pore-Reducing Toner",
      category: "Toner",
      brand: "Paula's Choice",
      description:
        "Minimizes pores and reduces oiliness with a gentle, alcohol-free formula.",
      size_small: "4oz",
      size_medium: "6.4oz",
      size_large: "10oz",
      brand_link: "https://www.paulaschoice.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 19,
      product_name: "Aloe Vera Soothing & Moisture Toner",
      category: "Toner",
      brand: "Nature Republic",
      description: "Hydrating and soothing toner with aloe vera extract.",
      size_small: "5.07oz",
      size_medium: "10.14oz",
      size_large: "16.9oz",
      brand_link: "https://www.naturerepublicusa.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 20,
      product_name: "Calendula Herbal Extract Alcohol-Free Toner",
      category: "Toner",
      brand: "Kiehl's",
      description: "Alcohol-free toner for normal to oily skin types.",
      size_small: "4.2oz",
      size_medium: "8.4oz",
      size_large: "16.9oz",
      brand_link: "https://www.kiehls.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 21,
      product_name: "Dramatically Different Moisturizing Lotion",
      category: "Moisturizer",
      brand: "Clinique",
      description:
        "Daily moisture developed by dermatologists to maintain optimal moisture balance.",
      size_small: "1oz",
      size_medium: "1.7oz",
      size_large: "4.2oz",
      brand_link: "https://www.clinique.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 22,
      product_name: "Toleriane Double Repair Face Moisturizer",
      category: "Moisturizer",
      brand: "La Roche-Posay",
      description:
        "Replenishes moisture for up to 48-hour hydration and helps restore the skin barrier.",
      size_small: "1oz",
      size_medium: "2.5oz",
      size_large: "4.2oz",
      brand_link: "https://www.laroche-posay.us/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 23,
      product_name: "Water Drench Hyaluronic Cloud Cream",
      category: "Moisturizer",
      brand: "Peter Thomas Roth",
      description:
        "Rich, hydrating cream that reduces the appearance of fine lines and wrinkles.",
      size_small: "0.67oz",
      size_medium: "1.7oz",
      size_large: "3.4oz",
      brand_link: "https://www.peterthomasroth.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 24,
      product_name: "Belif The True Cream Aqua Bomb",
      category: "Moisturizer",
      brand: "Belif",
      description:
        "Ultra-lightweight, oil-free gel-cream that instantly cools and refreshes skin.",
      size_small: "0.84oz",
      size_medium: "1.68oz",
      size_large: "3.38oz",
      brand_link: "https://www.belifusa.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 25,
      product_name: "First Aid Beauty Ultra Repair Cream",
      category: "Moisturizer",
      brand: "First Aid Beauty",
      description: "Intense hydration for dry, distressed skin and eczema.",
      size_small: "2oz",
      size_medium: "6oz",
      size_large: "8oz",
      brand_link: "https://www.firstaidbeauty.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 26,
      product_name: "Ceramidin Cream",
      category: "Moisturizer",
      brand: "Dr. Jart+",
      description: "Deep moisturizing cream for dry and rough skin.",
      size_small: "0.67oz",
      size_medium: "1.69oz",
      size_large: "3.38oz",
      brand_link: "https://www.drjart.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 27,
      product_name: "Youth To The People Adaptogen Deep Moisture Cream",
      category: "Moisturizer",
      brand: "Youth To The People",
      description:
        "Adaptogen-rich hydrating cream to combat dryness and redness.",
      size_small: "0.25oz",
      size_medium: "2oz",
      size_large: "4oz",
      brand_link: "https://www.youthtothepeople.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 28,
      product_name: "Fresh Rose Deep Hydration Face Cream",
      category: "Moisturizer",
      brand: "Fresh",
      description:
        "Hydrating moisturizer infused with time-release hydro-patches.",
      size_small: "0.24oz",
      size_medium: "1oz",
      size_large: "1.6oz",
      brand_link: "https://www.fresh.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 29,
      product_name: "Charlotte's Magic Cream",
      category: "Moisturizer",
      brand: "Charlotte Tilbury",
      description:
        "Anti-aging moisturizer to transform the appearance of tired, dull skin.",
      size_small: "0.52oz",
      size_medium: "1.01oz",
      size_large: "1.69oz",
      brand_link: "https://www.charlottetilbury.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 30,
      product_name: "Weleda Skin Food Original Ultra-Rich Cream",
      category: "Moisturizer",
      brand: "Weleda",
      description:
        "Deeply nourishing and intensely hydrating cream for dry, rough skin.",
      size_small: "1oz",
      size_medium: "2.5oz",
      size_large: "4.5oz",
      brand_link: "https://www.weleda.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 31,
      product_name: "The Ordinary Niacinamide 10% + Zinc 1%",
      category: "Serum",
      brand: "The Ordinary",
      description: "High-strength vitamin and mineral blemish formula.",
      size_standard: "1oz",
      brand_link: "https://theordinary.deciem.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 32,
      product_name: "Estee Lauder Advanced Night Repair",
      category: "Serum",
      brand: "Estee Lauder",
      description:
        "Synchronized Recovery Complex II for radiant, youthful-looking skin.",
      size_standard: "1.7oz",
      brand_link: "https://www.esteelauder.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 33,
      product_name: "L'Oréal Paris Revitalift 1.5% Pure Hyaluronic Acid Serum",
      category: "Serum",
      brand: "L'Oréal Paris",
      description: "Instantly hydrates and visibly plumps skin.",
      size_standard: "1oz",
      brand_link: "https://www.lorealparisusa.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 34,
      product_name: "Drunk Elephant C-Firma Day Serum",
      category: "Serum",
      brand: "Drunk Elephant",
      description:
        "Potent antioxidant complex, enzyme, and essential nutrients.",
      size_standard: "1oz",
      brand_link: "https://www.drunkelephant.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 35,
      product_name: "Olay Regenerist Micro-Sculpting Serum",
      category: "Serum",
      brand: "Olay",
      description: "Anti-aging serum with advanced amino-peptide complex.",
      size_standard: "1.7oz",
      brand_link: "https://www.olay.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 36,
      product_name: "Vichy Mineral 89",
      category: "Serum",
      brand: "Vichy",
      description: "Fortifying and plumping daily booster.",
      size_standard: "1.69oz",
      brand_link: "https://www.vichyusa.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 37,
      product_name: "Caudalie Vinoperfect Radiance Serum",
      category: "Serum",
      brand: "Caudalie",
      description: "Complexion correcting, brightening serum.",
      size_standard: "1oz",
      brand_link: "https://us.caudalie.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 38,
      product_name: "Kiehl's Clearly Corrective Dark Spot Solution",
      category: "Serum",
      brand: "Kiehl's",
      description: "Visibly reduces dark spots and discolorations.",
      size_standard: "1oz",
      brand_link: "https://www.kiehls.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 39,
      product_name: "Murad Rapid Age Spot and Pigment Lightening Serum",
      category: "Serum",
      brand: "Murad",
      description: "Targeted skin lightening treatment.",
      size_standard: "1oz",
      brand_link: "https://www.murad.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 40,
      product_name: "The Inkey List Hyaluronic Acid Serum",
      category: "Serum",
      brand: "The Inkey List",
      description: "Hydrating serum with hyaluronic acid.",
      size_standard: "1oz",
      brand_link: "https://www.theinkeylist.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 41,
      product_name: "Neutrogena Hydro Boost Water Gel Lotion SPF 30",
      category: "Sunscreen",
      brand: "Neutrogena",
      description: "Water gel lotion with SPF 30, hydrates and protects skin.",
      size_standard: "3oz",
      brand_link: "https://www.neutrogena.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 42,
      product_name: "Aveeno Protect + Hydrate Face Sunscreen SPF 50",
      category: "Sunscreen",
      brand: "Aveeno",
      description: "Oil-free sunscreen with SPF 50 for face.",
      size_standard: "3oz",
      brand_link: "https://www.aveeno.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 43,
      product_name: "Blue Lizard Australian Sunscreen SPF 30+",
      category: "Sunscreen",
      brand: "Blue Lizard",
      description: "Mineral sunscreen with SPF 30+ for sensitive skin.",
      size_standard: "5oz",
      brand_link: "https://www.bluelizard.net/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 44,
      product_name: "Coppertone Pure & Simple SPF 50",
      category: "Sunscreen",
      brand: "Coppertone",
      description: "Hypoallergenic sunscreen with SPF 50.",
      size_standard: "6oz",
      brand_link: "https://www.coppertone.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 45,
      product_name: "Banana Boat Ultra Sport Sunscreen SPF 50",
      category: "Sunscreen",
      brand: "Banana Boat",
      description: "High-performance sunscreen with SPF 50.",
      size_standard: "8oz",
      brand_link: "https://www.bananaboat.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 46,
      product_name: "Alba Botanica Hawaiian Sunscreen SPF 45",
      category: "Sunscreen",
      brand: "Alba Botanica",
      description: "Natural, botanical-based sunscreen with SPF 45.",
      size_standard: "4oz",
      brand_link: "https://www.albabotanica.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 47,
      product_name: "Hawaiian Tropic Sheer Touch SPF 30",
      category: "Sunscreen",
      brand: "Hawaiian Tropic",
      description:
        "Lightweight sunscreen with SPF 30 and skin-nourishing antioxidants.",
      size_standard: "8oz",
      brand_link: "https://www.hawaiiantropic.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 48,
      product_name: "Coola Classic Face Organic Sunscreen SPF 30",
      category: "Sunscreen",
      brand: "Coola",
      description: "Organic face sunscreen with SPF 30.",
      size_standard: "1.7oz",
      brand_link: "https://coola.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 49,
      product_name: "Shiseido Ultimate Sun Protection Lotion SPF 50+",
      category: "Sunscreen",
      brand: "Shiseido",
      description: "Water-resistant sunscreen with SPF 50+.",
      size_standard: "3.3oz",
      brand_link: "https://www.shiseido.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 50,
      product_name: "Biore UV Aqua Rich Watery Essence SPF 50+",
      category: "Sunscreen",
      brand: "Biore",
      description: "Lightweight, water-based sunscreen with SPF 50+.",
      size_standard: "1.7oz",
      brand_link: "https://www.biore.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 51,
      product_name: "Innisfree Green Tea Balancing Skin",
      category: "Toner",
      brand: "Innisfree",
      description: "Hydrating toner formulated with green tea extract.",
      size_standard: "6.76oz",
      brand_link: "https://us.innisfree.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 52,
      product_name: "Klairs Supple Preparation Unscented Toner",
      category: "Toner",
      brand: "Klairs",
      description: "Calming and hydrating toner for sensitive skin.",
      size_standard: "6.08oz",
      brand_link: "https://www.klairscosmetics.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 53,
      product_name: "Mario Badescu Glycolic Acid Toner",
      category: "Toner",
      brand: "Mario Badescu",
      description: "Glycolic acid-based toner to rejuvenate skin.",
      size_standard: "8oz",
      brand_link: "https://www.mariobadescu.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 54,
      product_name: "Thayers Witch Hazel Toner",
      category: "Toner",
      brand: "Thayers",
      description: "Alcohol-free toner with witch hazel and aloe vera.",
      size_standard: "12oz",
      brand_link: "https://www.thayers.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 55,
      product_name: "Pixi Glow Tonic",
      category: "Toner",
      brand: "Pixi",
      description: "Exfoliating toner with glycolic acid to brighten skin.",
      size_standard: "3.4oz",
      brand_link: "https://www.pixibeauty.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 56,
      product_name: "The Ordinary Glycolic Acid 7% Toning Solution",
      category: "Toner",
      brand: "The Ordinary",
      description:
        "Exfoliating toner with glycolic acid for improved skin clarity.",
      size_standard: "8oz",
      brand_link: "https://theordinary.deciem.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 57,
      product_name: "Fresh Rose & Hyaluronic Acid Deep Hydration Toner",
      category: "Toner",
      brand: "Fresh",
      description: "Hydrating toner with rose water and hyaluronic acid.",
      size_standard: "8.4oz",
      brand_link: "https://www.fresh.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 58,
      product_name: "Paula's Choice Skin Balancing Pore-Reducing Toner",
      category: "Toner",
      brand: "Paula's Choice",
      description: "Balances oily skin and minimizes pores.",
      size_standard: "6.4oz",
      brand_link: "https://www.paulaschoice.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 59,
      product_name: "Kiehl's Calendula Herbal Extract Alcohol-Free Toner",
      category: "Toner",
      brand: "Kiehl's",
      description: "Soothing, alcohol-free toner with calendula.",
      size_standard: "8.4oz",
      brand_link: "https://www.kiehls.com/",
      sephora: "https://www.sephora.com/",
    },
    {
      id: 60,
      product_name: "Laneige Essential Power Skin Toner",
      category: "Toner",
      brand: "Laneige",
      description: "Hydrating toner to boost moisture levels.",
      size_standard: "6.7oz",
      brand_link: "https://us.laneige.com/",
      sephora: "https://www.sephora.com/",
    },
  ]);
};
