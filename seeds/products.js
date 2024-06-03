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
    },
    {
      id: 2,
      product_name: "Ultra Facial Cream",
      category: "Moisturizer",
      brand: "Kiehl's",
      description: "24-hour daily facial cream for all skin types.",
    },
    {
      id: 3,
      product_name: "CeraVe Moisturizing Cream",
      category: "Moisturizer",
      brand: "CeraVe",
      description:
        "Rich, non-greasy, fast-absorbing, and suitable for dry skin.",
    },
    {
      id: 4,
      product_name: "Tidal Brightening Enzyme Water Cream",
      category: "Moisturizer",
      brand: "Sunday Riley",
      description:
        "Brightening, refining treatment that delivers intense hydration.",
    },
    {
      id: 5,
      product_name: "Moisture Surge 72-Hour Auto-Replenishing Hydrator",
      category: "Moisturizer",
      brand: "Clinique",
      description:
        "Gel-cream that keeps skin almost twice as hydrated at the end of the day.",
    },
    {
      id: 6,
      product_name: "Advanced Génifique Youth Activating Serum",
      category: "Serum",
      brand: "Lancôme",
      description: "Anti-aging serum for glowing, younger-looking skin.",
    },
    {
      id: 7,
      product_name: "C E Ferulic",
      category: "Serum",
      brand: "SkinCeuticals",
      description: "Vitamin C serum that provides environmental protection.",
    },
    {
      id: 8,
      product_name: "Truth Serum",
      category: "Serum",
      brand: "Ole Henriksen",
      description: "Collagen-boosted with True-C Complex to brighten and firm.",
    },
    {
      id: 9,
      product_name: "Hyaluronic Acid 2% + B5",
      category: "Serum",
      brand: "The Ordinary",
      description: "Hydrating formula with ultra-pure, vegan hyaluronic acid.",
    },
    {
      id: 10,
      product_name: "Double Serum Complete Age Control Concentrate",
      category: "Serum",
      brand: "Clarins",
      description:
        "A two-in-one formula that visibly firms, smooths, and boosts radiance.",
    },
    {
      id: 11,
      product_name: "UV Clear Broad-Spectrum SPF 46",
      category: "Sunscreen",
      brand: "EltaMD",
      description: "Oil-free sunscreen that calms and protects sensitive skin.",
    },
    {
      id: 12,
      product_name: "Anthelios Melt-in Milk Sunscreen SPF 100",
      category: "Sunscreen",
      brand: "La Roche-Posay",
      description: "Sunscreen for face and body, sensitive skin formula.",
    },
    {
      id: 13,
      product_name: "Unseen Sunscreen SPF 40",
      category: "Sunscreen",
      brand: "Supergoop!",
      description:
        "Weightless, invisible, scent-free, and makeup-gripping daily primer.",
    },
    {
      id: 14,
      product_name: "Clear Face Breakout Free Oil-Free Sunscreen SPF 55",
      category: "Sunscreen",
      brand: "Neutrogena",
      description: "Protects skin from sunburn without causing breakouts.",
    },
    {
      id: 15,
      product_name: "Sunprise Mild Airy Finish Sun Milk SPF50+",
      category: "Sunscreen",
      brand: "Etude House",
      description: "Lightweight, fast-absorbing sunscreen with a matte finish.",
    },
    {
      id: 16,
      product_name: "Glow Tonic",
      category: "Toner",
      brand: "Pixi",
      description:
        "Exfoliating toner that helps to firm and tighten normal to dry, dull skin.",
    },
    {
      id: 17,
      product_name: "The Alcohol-Free Witch Hazel Toner",
      category: "Toner",
      brand: "Thayers",
      description: "Gentle toner derived from a time-honored formula.",
    },
    {
      id: 18,
      product_name: "Pore-Reducing Toner",
      category: "Toner",
      brand: "Paula's Choice",
      description:
        "Minimizes pores and reduces oiliness with a gentle, alcohol-free formula.",
    },
    {
      id: 19,
      product_name: "Aloe Vera Soothing & Moisture Toner",
      category: "Toner",
      brand: "Nature Republic",
      description: "Hydrating and soothing toner with aloe vera extract.",
    },
    {
      id: 20,
      product_name: "Calendula Herbal Extract Alcohol-Free Toner",
      category: "Toner",
      brand: "Kiehl's",
      description: "Alcohol-free toner for normal to oily skin types.",
    },
    {
      id: 21,
      product_name: "Dramatically Different Moisturizing Lotion",
      category: "Moisturizer",
      brand: "Clinique",
      description:
        "Daily moisture developed by dermatologists to maintain optimal moisture balance.",
    },
    {
      id: 22,
      product_name: "Toleriane Double Repair Face Moisturizer",
      category: "Moisturizer",
      brand: "La Roche-Posay",
      description:
        "Replenishes moisture for up to 48-hour hydration and helps restore the skin barrier.",
    },
    {
      id: 23,
      product_name: "Water Drench Hyaluronic Cloud Cream",
      category: "Moisturizer",
      brand: "Peter Thomas Roth",
      description:
        "Rich, hydrating cream that reduces the appearance of fine lines and wrinkles.",
    },
    {
      id: 24,
      product_name: "Belif The True Cream Aqua Bomb",
      category: "Moisturizer",
      brand: "Belif",
      description:
        "Ultra-lightweight, oil-free gel-cream that instantly cools and refreshes skin.",
    },
    {
      id: 25,
      product_name: "First Aid Beauty Ultra Repair Cream",
      category: "Moisturizer",
      brand: "First Aid Beauty",
      description: "Intense hydration for dry, distressed skin and eczema.",
    },
    {
      id: 26,
      product_name: "Ceramidin Cream",
      category: "Moisturizer",
      brand: "Dr. Jart+",
      description: "Deep moisturizing cream for dry and rough skin.",
    },
    {
      id: 27,
      product_name: "Youth To The People Adaptogen Deep Moisture Cream",
      category: "Moisturizer",
      brand: "Youth To The People",
      description:
        "Adaptogen-rich hydrating cream to combat dryness and redness.",
    },
    {
      id: 28,
      product_name: "Fresh Rose Deep Hydration Face Cream",
      category: "Moisturizer",
      brand: "Fresh",
      description:
        "Hydrating moisturizer infused with time-release hydro-patches.",
    },
    {
      id: 29,
      product_name: "Charlotte's Magic Cream",
      category: "Moisturizer",
      brand: "Charlotte Tilbury",
      description:
        "Anti-aging moisturizer to transform the appearance of tired, dull skin.",
    },
    {
      id: 30,
      product_name: "Weleda Skin Food Original Ultra-Rich Cream",
      category: "Moisturizer",
      brand: "Weleda",
      description:
        "Deeply nourishing and intensely hydrating cream for dry, rough skin.",
    },
    {
      id: 31,
      product_name: "The Ordinary Niacinamide 10% + Zinc 1%",
      category: "Serum",
      brand: "The Ordinary",
      description: "High-strength vitamin and mineral blemish formula.",
    },
    {
      id: 32,
      product_name: "Estee Lauder Advanced Night Repair",
      category: "Serum",
      brand: "Estee Lauder",
      description:
        "Synchronized Recovery Complex II for radiant, youthful-looking skin.",
    },
    {
      id: 33,
      product_name: "L'Oréal Paris Revitalift 1.5% Pure Hyaluronic Acid Serum",
      category: "Serum",
      brand: "L'Oréal Paris",
      description: "Instantly hydrates and visibly plumps skin.",
    },
    {
      id: 34,
      product_name: "Drunk Elephant C-Firma Day Serum",
      category: "Serum",
      brand: "Drunk Elephant",
      description:
        "Potent antioxidant complex, enzyme, and essential nutrients.",
    },
    {
      id: 35,
      product_name: "Olay Regenerist Micro-Sculpting Serum",
      category: "Serum",
      brand: "Olay",
      description: "Anti-aging serum with advanced amino-peptide complex.",
    },
    {
      id: 36,
      product_name: "Vichy Mineral 89",
      category: "Serum",
      brand: "Vichy",
      description: "Fortifying and plumping daily booster.",
    },
    {
      id: 37,
      product_name: "Caudalie Vinoperfect Radiance Serum",
      category: "Serum",
      brand: "Caudalie",
      description: "Complexion correcting, brightening serum.",
    },
    {
      id: 38,
      product_name: "Kiehl's Clearly Corrective Dark Spot Solution",
      category: "Serum",
      brand: "Kiehl's",
      description: "Visibly reduces dark spots and discolorations.",
    },
    {
      id: 39,
      product_name: "Murad Rapid Age Spot and Pigment Lightening Serum",
      category: "Serum",
      brand: "Murad",
      description: "Targeted skin lightening treatment.",
    },
    {
      id: 40,
      product_name: "The Inkey List Hyaluronic Acid Serum",
      category: "Serum",
      brand: "The Inkey List",
      description: "Hydrating serum with hyaluronic acid.",
    },
    {
      id: 41,
      product_name: "Neutrogena Hydro Boost Water Gel Lotion SPF 30",
      category: "Sunscreen",
      brand: "Neutrogena",
      description: "Water gel lotion with SPF 30, hydrates and protects skin.",
    },
    {
      id: 42,
      product_name: "Aveeno Protect + Hydrate Face Sunscreen SPF 50",
      category: "Sunscreen",
      brand: "Aveeno",
      description: "Oil-free sunscreen with SPF 50 for face.",
    },
    {
      id: 43,
      product_name: "Blue Lizard Australian Sunscreen SPF 30+",
      category: "Sunscreen",
      brand: "Blue Lizard",
      description: "Mineral sunscreen with SPF 30+ for sensitive skin.",
    },
    {
      id: 44,
      product_name: "Coppertone Pure & Simple SPF 50",
      category: "Sunscreen",
      brand: "Coppertone",
      description: "Hypoallergenic sunscreen with SPF 50.",
    },
    {
      id: 45,
      product_name: "Banana Boat Ultra Sport Sunscreen SPF 50",
      category: "Sunscreen",
      brand: "Banana Boat",
      description: "High-performance sunscreen with SPF 50.",
    },
    {
      id: 46,
      product_name: "Alba Botanica Hawaiian Sunscreen SPF 45",
      category: "Sunscreen",
      brand: "Alba Botanica",
      description: "Natural, botanical-based sunscreen with SPF 45.",
    },
    {
      id: 47,
      product_name: "Hawaiian Tropic Sheer Touch SPF 30",
      category: "Sunscreen",
      brand: "Hawaiian Tropic",
      description:
        "Lightweight sunscreen with SPF 30 and skin-nourishing antioxidants.",
    },
    {
      id: 48,
      product_name: "Coola Classic Face Organic Sunscreen SPF 30",
      category: "Sunscreen",
      brand: "Coola",
      description: "Organic face sunscreen with SPF 30.",
    },
    {
      id: 49,
      product_name: "Shiseido Ultimate Sun Protection Lotion SPF 50+",
      category: "Sunscreen",
      brand: "Shiseido",
      description: "Water-resistant sunscreen with SPF 50+.",
    },
    {
      id: 50,
      product_name: "Biore UV Aqua Rich Watery Essence SPF 50+",
      category: "Sunscreen",
      brand: "Biore",
      description: "Lightweight, water-based sunscreen with SPF 50+.",
    },
    {
      id: 51,
      product_name: "Innisfree Green Tea Balancing Skin",
      category: "Toner",
      brand: "Innisfree",
      description: "Hydrating toner formulated with green tea extract.",
    },
    {
      id: 52,
      product_name: "Klairs Supple Preparation Unscented Toner",
      category: "Toner",
      brand: "Klairs",
      description: "Calming and hydrating toner for sensitive skin.",
    },
    {
      id: 53,
      product_name: "Mario Badescu Glycolic Acid Toner",
      category: "Toner",
      brand: "Mario Badescu",
      description: "Glycolic acid-based toner to rejuvenate skin.",
    },
    {
      id: 54,
      product_name: "Thayers Witch Hazel Toner",
      category: "Toner",
      brand: "Thayers",
      description: "Alcohol-free toner with witch hazel and aloe vera.",
    },
    {
      id: 55,
      product_name: "Pixi Glow Tonic",
      category: "Toner",
      brand: "Pixi",
      description: "Exfoliating toner with glycolic acid to brighten skin.",
    },
    {
      id: 56,
      product_name: "The Ordinary Glycolic Acid 7% Toning Solution",
      category: "Toner",
      brand: "The Ordinary",
      description:
        "Exfoliating toner with glycolic acid for improved skin clarity.",
    },
    {
      id: 57,
      product_name: "Fresh Rose & Hyaluronic Acid Deep Hydration Toner",
      category: "Toner",
      brand: "Fresh",
      description: "Hydrating toner with rose water and hyaluronic acid.",
    },
    {
      id: 58,
      product_name: "Paula's Choice Skin Balancing Pore-Reducing Toner",
      category: "Toner",
      brand: "Paula's Choice",
      description: "Balances oily skin and minimizes pores.",
    },
    {
      id: 59,
      product_name: "Kiehl's Calendula Herbal Extract Alcohol-Free Toner",
      category: "Toner",
      brand: "Kiehl's",
      description: "Soothing, alcohol-free toner with calendula.",
    },
    {
      id: 60,
      product_name: "Laneige Essential Power Skin Toner",
      category: "Toner",
      brand: "Laneige",
      description: "Hydrating toner to boost moisture levels.",
    },
  ]);
};
