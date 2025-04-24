// Location data for Ethics Tour
const locationData = [
    {
        id: 0,
        name: 'Tenderloin',
        subtitle: 'Urban Poverty in a Wealthy City',
        description: 'Ethical dilemmas when giving might enable harm',
        centralQuestion: 'Are we morally obligated to give if our aid might enable harmful behaviors?',
        mapCoordinates: [37.783, -122.417],
        lat: 37.783,
        lng: -122.417,
        color: '#2e86de',
        colorRgb: '46, 134, 222',
        heroImage: '/assets/tenderloin/hero.jpg',
        images: [
            './assets/tenderloin/Image1.webp',
            './assets/tenderloin/Image2.webp',
            './assets/tenderloin/Image3.jpg',
            './assets/tenderloin/Image4.jpeg',
            './assets/tenderloin/Image5.jpeg',
            './assets/tenderloin/Image6.jpeg',
            './assets/tenderloin/Image7.jpeg',
            './assets/tenderloin/Image8.jpg'
        ],
        notes: [
            { id: 1, content: 'From an effective altruism perspective, resources allocated here should maximize welfare for the greatest number of people.' },
            { id: 2, content: 'Kant would assert we still have an imperfect duty to give, regardless of potential misuse.' },
            { id: 3, content: 'Buddhism views giving (dāna) as the first of six pāramitās that constitute the path to awakening.' }
        ],
        analysis: {
            kantian: {
                title: 'Kantian Perspective',
                text: 'Kant would assert that you still have the imperfect duty to give. As Stohr (2011) explains, the moral rightness of an action depends on whether it could be universalized to be a moral law, independently of its predicted effects. Concerns that "aid might enable harm" are subjective and lack the universality needed for a moral duty.'
            },
            utilitarian: {
                title: 'Utilitarian Approach',
                text: 'A utilitarian approach considers whether the aid likely improves or worsens overall well-being. If giving is likely to result in harmful outcomes such as fostering addiction, it could decrease overall well-being and might be considered morally wrong, as described in Beauchamp\'s (2008) analysis of beneficence.'
            },
            buddhist: {
                title: 'Buddhist View',
                text: 'Buddhist texts on giving (dāna) from the Aṅguttaranikāya suggest that giving generates good merit even if the recipient misuses the aid. However, Buddhist ethics also value wisdom. If giving directly enables harm, a more discerning act of compassion might be needed.'
            }
        }
    },
    {
        id: 1,
        name: 'Civic Plaza',
        subtitle: 'Public Spaces and Social Responsibility',
        description: 'Public giving & institutional responsibility',
        centralQuestion: 'Are we shifting the burden of addressing homelessness and poverty from public institutions onto individual donors, thereby normalizing systemic failure?',
        mapCoordinates: [37.779, -122.416],
        lat: 37.779,
        lng: -122.416,
        color: '#10ac84',
        colorRgb: '16, 172, 132',
        heroImage: '/assets/civic_plaza/hero.jpg',
        images: [
            './assets/civic_plaza/Image1.jpg',
            './assets/civic_plaza/Image2.jpeg',
            './assets/civic_plaza/Image3.jpeg',
            './assets/civic_plaza/Image4.jpeg',
            './assets/civic_plaza/Image5.jpeg',
            './assets/civic_plaza/Image6.jpeg',
            './assets/civic_plaza/Image7.jpeg',
            './assets/civic_plaza/Image8.jpeg',
            './assets/civic_plaza/Image9.jpg'
        ],
        notes: [
            { id: 1, content: 'Are we shifting responsibility from public institutions to individual donors, normalizing systemic failure?' },
            { id: 2, content: 'The visibility of giving in public spaces raises questions about motivation: duty or social recognition?' },
            { id: 3, content: 'Utilitarian perspectives ask whether public giving creates positive awareness or potentially negative consequences.' }
        ],
        analysis: {
            kantian: {
                title: 'Kantian Perspective',
                text: 'Kant might question whether we\'re giving from genuine duty or merely to appear virtuous in this public setting. The moral worth of an action comes from acting from duty, not from inclination or social pressure.'
            },
            utilitarian: {
                title: 'Utilitarian Approach',
                text: 'Utilitarians would consider the broader implications. Does public giving create positive awareness or potentially negative consequences like disputes over resources?'
            },
            buddhist: {
                title: 'Buddhist View',
                text: 'Buddhist ethics reminds us that our intentions matter - giving publicly with genuine compassion differs from giving for social recognition. Yet all beings deserve support regardless of where they\'re encountered.'
            }
        }
    },
    {
        id: 2,
        name: 'Food Retailers',
        subtitle: 'Corporate Ethics and Food Inequality',
        description: 'In-kind aid vs. monetary assistance',
        centralQuestion: 'Should we only give in-kind aid, such as food, water or health kits, which cannot be misused?',
        mapCoordinates: [37.783, -122.4167],
        lat: 37.783,
        lng: -122.4167,
        color: '#ee5253',
        colorRgb: '238, 82, 83',
        heroImage: '/assets/target/Image1.jpg',
        images: [
            './assets/target/Image1.jpg',
            './assets/civic_plaza/Image6.jpeg',
            './assets/civic_plaza/Image7.jpeg',
            './assets/civic_plaza/Image8.jpeg'
        ],
        notes: [
            { id: 1, content: "When giving in-kind aid instead of cash, are we respecting the recipient's autonomy as a rational agent?" },
            { id: 2, content: "Studies suggest direct cash aid often improves outcomes like housing stability and food security." },
            { id: 3, content: "Buddhist ethics focuses on whether our action reduces suffering while maintaining compassion." }
        ],
        analysis: {
            kantian: {
                title: 'Kantian Perspective',
                text: 'From a Kantian lens, when you give only in-kind aid, are you treating the recipient as a fellow rational being, or are you subtly asserting superiority in deciding what they should want? Kant would caution against paternalism while still acknowledging your imperfect duty to help.'
            },
            utilitarian: {
                title: 'Utilitarian Approach',
                text: 'Effective altruists would approach this pragmatically: Which form of giving produces the most positive impact? Studies suggest direct cash aid often improves outcomes, but context matters. Giving a sandwich to someone who is clearly hungry may yield immediate utility.'
            },
            buddhist: {
                title: 'Buddhist View',
                text: 'Buddhist ethics would focus on whether your action reduces suffering while maintaining compassion, acknowledging that intention shapes the moral quality of giving.'
            }
        }
    }
];

// Update location data with lat/lng if they're missing
locationData.forEach(location => {
    if (!location.lat && location.mapCoordinates) {
        location.lat = location.mapCoordinates[0];
        location.lng = location.mapCoordinates[1];
    }
});

export default locationData; 