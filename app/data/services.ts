export type Service = {
  slug: string;
  label: string;
  image: string;
  tagline: string;
  description: string[];
  whatWeOffer: string[];
  howItWorks: { title: string; desc: string }[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "black-magic-removal",
    label: "Black Magic Removal",
    image: "/AstrologyImg/BlackMagicRemoval.jpg",
    tagline: "Break Free from Dark Energies",
    description: [
      "Black magic, also known as Kala Jadoo or Abhichara in Vedic tradition, is the deliberate use of negative supernatural forces to harm, control, or destroy an individual's life, health, relationships, or prosperity. Its effects can be subtle at first — unexplained illness, sudden financial loss, broken relationships — but can intensify over time if left unaddressed.",
      "At Astro Sanatana, we use ancient Vedic rituals, powerful Mantras, protective Yantras, and Tantra-based remedies to identify, neutralise, and permanently remove black magic from your life. Our approach is rooted in centuries-old Sanatana Dharma practices, performed with complete sanctity and spiritual precision.",
    ],
    whatWeOffer: [
      "Identification of black magic through Kundli and psychic analysis",
      "Powerful Beej Mantras and Maha-Mrityunjaya Japa for protection",
      "Yantra creation and energisation for shielding your aura",
      "Kaal Sarp Dosha and Graha-related ritual cleansing (Puja)",
      "Protective Kavach (spiritual armour) for you and your home",
      "Ongoing spiritual monitoring and follow-up guidance",
    ],
    howItWorks: [
      { title: "Consultation", desc: "Share your concerns, birth details, and symptoms. We perform an in-depth analysis of your horoscope and energy field." },
      { title: "Diagnosis & Ritual Planning", desc: "We identify the nature and source of the black magic and prepare a tailored remedy plan including specific Pujas and Mantras." },
      { title: "Remedy & Protection", desc: "Rituals are performed on auspicious Muhuratas. You receive protective remedies, Kavach, and guidance for ongoing safety." },
    ],
    benefits: [
      "Relief from unexplained illness, fear, or anxiety",
      "Restoration of mental peace and clarity",
      "Protection of family, home, and business",
      "Removal of recurring bad luck or misfortune",
      "Strengthened aura and spiritual shield",
    ],
  },
  {
    slug: "get-your-ex-love-back",
    label: "Get Your Ex Love Back",
    image: "/AstrologyImg/GetYourExLoveBack.jpg",
    tagline: "Rekindle the Love You Lost",
    description: [
      "Losing a relationship that meant everything to you is one of life's most painful experiences. Whether it ended due to misunderstandings, external interference, family pressure, or emotional distance, Vedic astrology and spiritual remedies offer powerful pathways to rekindle lost love.",
      "Astro Sanatana specialises in ancient Vashikaran Mantras, love-related Pujas, and astrological remedies that help align energies, dissolve barriers, and restore the emotional connection between two people — guided by dharmic principles and with your highest well-being in mind.",
    ],
    whatWeOffer: [
      "Birth chart analysis of both partners for compatibility and obstacles",
      "Vedic Vashikaran Mantras and Stri/Purusha Akarshan rituals",
      "Kamdev Puja and Mohini Mantra for attraction and reunion",
      "Removal of third-party interference through spiritual remedies",
      "Guidance on the right timing (Muhurat) to reconnect",
      "Relationship healing counselling combined with astrological insight",
    ],
    howItWorks: [
      { title: "Share Your Story", desc: "Tell us about your relationship and the circumstances of the separation. Provide birth details of both partners." },
      { title: "Astrological Analysis", desc: "We examine both horoscopes, assess Venus, the 7th house, and Navamsa chart to understand the relationship's karmic pattern." },
      { title: "Personalised Remedies", desc: "Targeted Mantras, Pujas, and practical guidance are provided to help restore harmony and bring your partner back." },
    ],
    benefits: [
      "Emotional reconnection with your ex-partner",
      "Resolution of misunderstandings and past conflicts",
      "Removal of negative influences blocking reunion",
      "Clarity on whether reunion aligns with your destiny",
      "Restored trust, love, and mutual attraction",
    ],
  },
  {
    slug: "evil-spirit-removal",
    label: "Evil Spirit Removal",
    image: "/AstrologyImg/EvilSpiritRemoval.jpg",
    tagline: "Cleanse, Protect & Restore Peace",
    description: [
      "Evil spirits, negative entities, and supernatural disturbances — known in Vedic tradition as Preta Badha, Bhoot Badha, or Graha Pida — can attach themselves to individuals or homes, causing persistent distress, confusion, sleep disorders, and unexplained misfortune.",
      "Astro Sanatana performs ancient Vedic Shanti Pujas, Navagraha rituals, and protective ceremonies to identify and remove these negative presences and restore peace, clarity, and spiritual safety to your life and home.",
    ],
    whatWeOffer: [
      "Diagnosis of supernatural disturbances through Jyotish analysis",
      "Bhoot Shanti Puja and Preta Moksha ceremonies",
      "Hanuman Chalisa Patha and Bajrang Baan recitation rituals",
      "Home purification (Griha Shanti) and Vastu-based cleansing",
      "Protective Yantras and amulets for ongoing spiritual safety",
      "Post-removal guidance and spiritual strengthening practices",
    ],
    howItWorks: [
      { title: "Assessment", desc: "We assess symptoms, birth chart afflictions (particularly Rahu, Ketu, and 12th house), and the history of disturbances." },
      { title: "Ritual Preparation", desc: "Sacred materials are prepared — including specific woods, herbs, and Mantras — for the purification ceremony." },
      { title: "Cleansing & Protection", desc: "Rituals are performed to remove the negative entity, purify the energy field, and establish strong spiritual protection." },
    ],
    benefits: [
      "Elimination of supernatural fear and disturbances",
      "Restored peace, sleep, and mental well-being",
      "Purification of home and workplace energies",
      "Protection of children and vulnerable family members",
      "Lasting spiritual safety and positive energy",
    ],
  },
  {
    slug: "palm-reading",
    label: "Palm Reading",
    image: "/AstrologyImg/PalmReading.jpg",
    tagline: "Your Destiny Is Written in Your Hands",
    description: [
      "Palm reading, known as Hasta-Samudrika Shastra in ancient Indian tradition, is one of the most profound and personalised forms of divination. The lines, mounts, shapes, and patterns of your palm carry a unique map of your life — revealing insights about your character, career, relationships, health, and spiritual path.",
      "At Astro Sanatana, our palm reading sessions combine classical Indian Samudrika Shastra with intuitive spiritual insight, offering you a detailed and compassionate reading of your life's blueprint — both what has been and what lies ahead.",
    ],
    whatWeOffer: [
      "Analysis of all major lines — Life, Head, Heart, Fate, and Sun",
      "Study of mounts (Venus, Jupiter, Saturn, Mercury, Moon, Mars)",
      "Finger shape and thumb analysis for personality and willpower",
      "Past event verification and future trend guidance",
      "Health-related palm indicators and remedies",
      "Combined palm + Kundli reading for maximum accuracy",
    ],
    howItWorks: [
      { title: "Share Your Palm", desc: "Visit us in Union City, CA or share clear photographs of both palms (front and back) for online sessions." },
      { title: "In-Depth Analysis", desc: "Our expert reads all major and minor lines, mounts, and marks using classical Samudrika Shastra principles." },
      { title: "Detailed Report", desc: "Receive a comprehensive reading covering career, love, health, luck, and personalised guidance for your life path." },
    ],
    benefits: [
      "Deep self-awareness and understanding of your strengths",
      "Clarity on your career direction and financial prospects",
      "Insight into love life, compatibility, and marriage timing",
      "Early awareness of potential health concerns",
      "Guidance on your spiritual purpose and dharmic path",
    ],
  },
  {
    slug: "negative-energy-removal",
    label: "Negative Energy Removal",
    image: "/AstrologyImg/NegativeEnergyRemoval.jpg",
    tagline: "Restore Harmony & Positive Vibrations",
    description: [
      "Negative energy can accumulate in our lives through jealousy, envy (Nazar or Evil Eye), conflicts, grief, past traumas, or simply from the environments we inhabit. This invisible weight can manifest as persistent fatigue, emotional heaviness, recurring bad luck, health problems, or a general sense that something is holding you back.",
      "Astro Sanatana offers powerful Vedic rituals, Nazar Dosha remedies, space cleansing ceremonies, and personalised Mantra practices to dissolve negative energy at its root and restore bright, positive vibrations in your life, home, and relationships.",
    ],
    whatWeOffer: [
      "Nazar Dosha (Evil Eye) identification and removal",
      "Griha Shanti Puja for home energy cleansing",
      "Aura cleansing and chakra balancing rituals",
      "Salt, camphor, and sacred herb space-cleansing ceremonies",
      "Protective Mantras and Yantra energisation",
      "Guidance on crystals, colours, and Vastu adjustments",
    ],
    howItWorks: [
      { title: "Energy Assessment", desc: "We assess your birth chart, living environment, and personal circumstances to identify sources of negative energy." },
      { title: "Cleansing Ceremony", desc: "A customised Shanti Puja or ritual is performed to remove stagnant and harmful energies from your aura and space." },
      { title: "Protection & Maintenance", desc: "Protective Yantras and daily Mantra practices are provided to maintain positive energy and prevent re-accumulation." },
    ],
    benefits: [
      "Renewed energy, optimism, and mental clarity",
      "Relief from persistent bad luck or obstacles",
      "Peaceful, positive atmosphere at home and work",
      "Strengthened relationships and improved communication",
      "Enhanced spiritual vibration and overall well-being",
    ],
  },
  {
    slug: "psychic-readings",
    label: "Psychic Readings",
    image: "/AstrologyImg/PsychicReadings.jpg",
    tagline: "Clarity Beyond the Visible World",
    description: [
      "Psychic readings tap into the subtle, non-physical dimensions of reality to offer guidance that goes beyond what conventional analysis can provide. At Astro Sanatana, our psychic readings are rooted in Vedic spirituality and combine clairvoyant insight with astrological wisdom to give you a holistic understanding of your situation.",
      "Whether you are seeking clarity about a relationship, a career decision, a health concern, or a spiritual crossroads, our psychic readings provide intuitive guidance drawn from years of spiritual practice and divine connection.",
    ],
    whatWeOffer: [
      "Clairvoyant insight into past, present, and future",
      "Aura reading and energy field assessment",
      "Spirit guide communication and ancestral messages",
      "Career, love, and life path psychic guidance",
      "Tarot card integration for visual confirmation",
      "Dream interpretation and symbolic analysis",
    ],
    howItWorks: [
      { title: "Connect & Share", desc: "Book your session and share any specific questions or areas of life you want guidance on. No details are required in advance — just an open mind." },
      { title: "Intuitive Reading", desc: "Our psychic tunes into your energy field, combined with birth chart analysis and spiritual attunement, to deliver clear and honest insights." },
      { title: "Guidance & Clarity", desc: "Receive detailed guidance, practical suggestions, and spiritual remedies to help you navigate your path with confidence." },
    ],
    benefits: [
      "Clarity on confusing or challenging life situations",
      "Confirmation of your intuitions and inner knowing",
      "Insight into relationships and people around you",
      "Guidance from spiritual realms for important decisions",
      "Peace of mind and renewed sense of direction",
    ],
  },
  {
    slug: "love-spell-caster",
    label: "Love Spell Caster",
    image: "/AstrologyImg/LoveSpell.jpg",
    tagline: "Sacred Vedic Rituals for Love & Attraction",
    description: [
      "In Vedic tradition, love spells are not mere superstition — they are sacred rituals rooted in the science of Tantra, Mantra, and Yantra, designed to align universal energies with your deepest intentions for love, attraction, and togetherness. When performed with purity of intention and proper knowledge, these rituals can powerfully influence the flow of love in your life.",
      "At Astro Sanatana, our love spell ceremonies are conducted with full dharmic integrity — using ancient Vedic Kamdev Mantras, sacred offerings, and spiritual practices to attract love, strengthen bonds, and bring desired partners closer.",
    ],
    whatWeOffer: [
      "Kamdev and Rati Mantra rituals for love attraction",
      "Mohini Vashikaran for drawing a specific person closer",
      "Love binding rituals to strengthen existing relationships",
      "Shukra (Venus) Puja for enhanced charisma and attraction",
      "Compatibility assessment before any love ritual",
      "Ethical guidance ensuring no harm to free will",
    ],
    howItWorks: [
      { title: "Intention & Consultation", desc: "Share your situation and intentions. We assess astrological compatibility and the ethical parameters of the desired outcome." },
      { title: "Ritual Planning", desc: "A suitable love ritual is chosen based on your Kundli, the target's energy, and the most auspicious Muhurat for maximum effect." },
      { title: "Sacred Ceremony", desc: "The ritual is performed with complete devotion using Mantras, fire offerings, and sacred materials. Guidance is provided for follow-up practices." },
    ],
    benefits: [
      "Attraction of genuine love and meaningful relationships",
      "Strengthened emotional bond with your partner",
      "Removal of obstacles blocking love in your life",
      "Enhanced personal charisma and magnetic energy",
      "Clarity on your love life and relationship destiny",
    ],
  },
  {
    slug: "health-problems",
    label: "Health Problems",
    image: "/AstrologyImg/HealthProblems.jpg",
    tagline: "Astrological Remedies for Health & Vitality",
    description: [
      "In Vedic astrology, physical and mental health are deeply connected to planetary influences in your birth chart. Malefic planets, doshas, and afflicted houses can predispose individuals to specific health challenges. By understanding these cosmic patterns, we can address health issues at their energetic root — complementing conventional medical treatment with powerful spiritual remedies.",
      "Astro Sanatana provides astrological health analysis, healing Pujas, Gemstone recommendations, and Mantra therapies that help restore balance, vitality, and well-being. We never replace medical advice — we enhance your healing journey from a spiritual dimension.",
    ],
    whatWeOffer: [
      "Health astrology — analysis of the 6th, 8th, and 12th houses",
      "Identification of planetary causes of recurring illness",
      "Mahamrityunjaya Japa and healing Pujas",
      "Gemstone recommendations to strengthen weak planets",
      "Dietary and lifestyle guidance based on your Dosha and Kundli",
      "Navagraha Shanti Puja for overall health and vitality",
    ],
    howItWorks: [
      { title: "Health Assessment", desc: "Share your birth details and current health concerns. We examine the Kundli for planetary influences on your physical and mental well-being." },
      { title: "Remedy Design", desc: "A personalised plan is prepared — including specific Mantras, Pujas, Gemstones, and lifestyle adjustments aligned to your chart." },
      { title: "Healing & Monitoring", desc: "Remedies are initiated and you are guided through a spiritual healing protocol with regular check-ins for ongoing support." },
    ],
    benefits: [
      "Identification of astrological roots of health issues",
      "Complementary spiritual support for medical treatment",
      "Improved energy levels and mental well-being",
      "Reduced frequency of recurring illnesses",
      "Greater awareness of body, mind, and cosmic rhythms",
    ],
  },
  {
    slug: "relationship-problems",
    label: "Relationship Problems",
    image: "/AstrologyImg/RelationshipProblems.jpg",
    tagline: "Heal, Harmonise & Rebuild Connections",
    description: [
      "Relationships are the most treasured and yet most challenging aspect of human life. Conflicts, trust issues, communication breakdowns, compatibility gaps, or external interference can cause immense pain in our closest bonds. Vedic astrology offers profound insight into the karmic dynamics between individuals and provides powerful remedies to heal and harmonise relationships.",
      "At Astro Sanatana, we analyse the Kundli compatibility (Guna Milan and Navamsa charts) of both partners, identify planetary causes of friction, and prescribe targeted Mantras, Pujas, and practical guidance to restore harmony in your relationships.",
    ],
    whatWeOffer: [
      "Detailed compatibility analysis (Ashtkoot and Navamsa)",
      "Identification of Mangal Dosha, Nadi Dosha, and their remedies",
      "Venus and 7th house strengthening Pujas",
      "Communication and understanding remedies",
      "Third-party interference removal through spiritual rituals",
      "Couples guidance combining astrology and spiritual counselling",
    ],
    howItWorks: [
      { title: "Share Your Situation", desc: "Provide birth details of both individuals and describe the specific challenges in the relationship you seek guidance on." },
      { title: "Compatibility & Chart Analysis", desc: "We perform a thorough Guna Milan, examine the 7th house, Venus, and Navamsa of both charts to understand karmic patterns." },
      { title: "Remedies & Guidance", desc: "Targeted remedies including Mantras, Pujas, and practical relationship advice are provided to restore harmony and strengthen the bond." },
    ],
    benefits: [
      "Deeper understanding of relationship dynamics",
      "Resolved conflicts and improved communication",
      "Removal of karmic obstacles in the relationship",
      "Restored trust, intimacy, and emotional connection",
      "Clarity on whether the relationship aligns with your destiny",
    ],
  },
  {
    slug: "spiritual-healing",
    label: "Spiritual Healing",
    image: "/AstrologyImg/SpiritualHealing.jpg",
    tagline: "Align Body, Mind & Soul",
    description: [
      "Spiritual healing is the process of restoring balance and harmony to the subtle energy body — the Pranamaya Kosha — which directly influences our physical health, emotional state, mental clarity, and spiritual progress. When our life force energy (Prana) is blocked, depleted, or distorted, we experience illness, confusion, lack of purpose, and disconnection from our higher self.",
      "Astro Sanatana offers authentic Vedic spiritual healing sessions that combine Pranic healing principles, chakra alignment, Mantra therapy, and personalised Vedic rituals to cleanse and restore your entire energetic system — leaving you feeling renewed, centred, and aligned with your dharmic path.",
    ],
    whatWeOffer: [
      "Chakra assessment and energy centre balancing",
      "Pranic and Reiki-influenced healing techniques",
      "Personalised healing Mantras and Pranayama guidance",
      "Navagraha Shanti Puja for planetary energy balance",
      "Soul-level healing for past trauma and karmic wounds",
      "Meditation guidance and spiritual practice design",
    ],
    howItWorks: [
      { title: "Energy Assessment", desc: "We assess your aura, chakra system, and Kundli to identify blockages, imbalances, and areas requiring healing attention." },
      { title: "Healing Session", desc: "A personalised healing session is conducted using Mantras, Pranic techniques, and Vedic rituals to clear and rebalance your energy field." },
      { title: "Integration & Practice", desc: "You receive a personalised spiritual practice — including Mantras, meditation, and lifestyle guidance — to maintain your healing and growth." },
    ],
    benefits: [
      "Deep sense of peace, calm, and spiritual well-being",
      "Release of emotional blocks and past traumas",
      "Improved physical health through energetic alignment",
      "Greater mental clarity and decision-making ability",
      "Strengthened connection to your higher self and purpose",
    ],
  },
  {
    slug: "win-lotto",
    label: "Win Lotto",
    image: "/AstrologyImg/WinLotto.jpg",
    tagline: "Unlock Your Lucky Numbers & Auspicious Timing",
    description: [
      "Wealth, luck, and financial abundance are written in the stars. In Vedic astrology, the 2nd house (accumulated wealth), 5th house (speculation and luck), 8th house (sudden gains), and 11th house (income and gains) — along with the planets Jupiter (wealth), Venus (luxury), and the Moon (fluctuations) — all play a role in your financial destiny and luck quotient.",
      "At Astro Sanatana, we analyse your Kundli to identify your luckiest numbers, colours, days, and periods (Mahadasha and Antardasha) and provide Vedic remedies to enhance your luck and attract financial abundance — including specific guidance for lotteries, investments, and speculative activities.",
    ],
    whatWeOffer: [
      "Lucky number identification from Numerology and Vedic astrology",
      "Analysis of the 5th, 8th, and 11th houses for luck and sudden gains",
      "Lakshmi Puja and Kubera Mantra rituals for wealth attraction",
      "Identification of auspicious dates and times for participation",
      "Lucky colour, gemstone, and direction guidance",
      "Financial abundance remedies (Yantra and Mantra)",
    ],
    howItWorks: [
      { title: "Birth Chart Analysis", desc: "We examine your Kundli for wealth yogas, speculative luck indicators, and favourable Dasha periods for financial gains." },
      { title: "Lucky Numbers & Timing", desc: "Based on your chart and Numerology, we derive your luckiest numbers and the most auspicious timing for participation." },
      { title: "Wealth Remedies", desc: "Specific Pujas, Mantras, and Yantras are recommended to strengthen your Jupiter and wealth houses, and attract financial fortune." },
    ],
    benefits: [
      "Personalised lucky numbers rooted in your birth chart",
      "Knowledge of your most auspicious financial periods",
      "Enhanced luck through targeted Vedic remedies",
      "Strengthened wealth-attracting energies in your chart",
      "Clarity on financial decisions and speculative activities",
    ],
  },
  {
    slug: "job-business-problems",
    label: "Job & Business Problems",
    image: "/AstrologyImg/JobBusinessProblems.jpg",
    tagline: "Vedic Guidance for Career & Business Growth",
    description: [
      "Career setbacks, job loss, stagnant business growth, financial losses, workplace conflicts, and partnership disputes are often reflected in specific planetary patterns in your birth chart. Saturn (career and discipline), the 10th house (profession), Mercury (business), and Jupiter (growth and expansion) all play crucial roles in your professional destiny.",
      "Astro Sanatana provides comprehensive career and business astrology — identifying the root causes of professional obstacles, recommending powerful Vedic remedies, and guiding you with Vastu corrections and auspicious timing to unlock career growth and business success.",
    ],
    whatWeOffer: [
      "Career astrology — 10th house and Saturn analysis",
      "Business compatibility and partnership assessment",
      "Vastu Shastra consultation for office and business premises",
      "Saturn (Shani) Shanti and Mangal Puja for career success",
      "Auspicious Muhurat for business launches and job interviews",
      "Mercury strengthening remedies for business clarity and growth",
    ],
    howItWorks: [
      { title: "Career & Business Assessment", desc: "Provide your birth details and describe your professional situation. We examine the 10th house, Saturn, Mercury, and Dasha periods." },
      { title: "Problem Identification", desc: "We identify specific planetary obstacles — such as Saturn Sade Sati, Ketu in the 10th, or weak Mercury — causing your professional challenges." },
      { title: "Remedies & Action Plan", desc: "A targeted remedy plan is provided: specific Pujas, Mantras, Gemstones, Vastu corrections, and auspicious timing for career and business success." },
    ],
    benefits: [
      "Clarity on the best career path aligned with your Kundli",
      "Relief from professional stagnation and job-related stress",
      "Improved business growth and financial stability",
      "Stronger partnerships and workplace relationships",
      "Auspicious timing for major career and business decisions",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
