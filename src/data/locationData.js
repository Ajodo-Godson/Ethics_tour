// Location data for Ethics Tour
const locationData = [
    {
        id: "introduction",
        name: "Introduction",
        subtitle: 'Urban Poverty in a Wealthy City',
        description: 'Ethical dilemmas when giving might enable harm',
        centralQuestion: 'Are we morally obligated to give if our aid might enable harmful behaviors?',
        mapCoordinates: [37.783, -122.417],
        lat: 37.783,
        lng: -122.417,
        color: '#2e86de',
        colorRgb: '46, 134, 222',
        heroImage: '/assets/map/sf-background.jpg',
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
        notes: [],
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
        id: "tenderloin",
        name: 'Tenderloin',
        subtitle: 'Are we morally obligated to give to strangers in need, if it might enable harm?',
        description: 'Ethical dilemmas of direct giving',
        centralQuestion: 'Should we give directly to strangers if our aid might be misused?',
        mapCoordinates: [37.784, -122.414],
        lat: 37.784,
        lng: -122.414,
        color: '#10ac84',
        colorRgb: '16, 172, 132',
        heroImage: '/assets/tenderloin/Image8.jpg',
        images: [
            './assets/tenderloin/Image1.webp',
            './assets/tenderloin/Image2.webp',
            './assets/tenderloin/Image3.jpg',
            './assets/tenderloin/Image4.jpeg',
            './assets/tenderloin/Image5.jpeg',
            './assets/tenderloin/Image6.jpeg',
            './assets/tenderloin/Image7.jpeg',

        ],
        notes: [],
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
        id: "grocery",
        name: 'Grocery Stores',
        subtitle: 'Should we only give in-kind aid, such as food, water or gift cards, which cannot be misused?',
        description: 'In-kind aid vs. monetary assistance',
        centralQuestion: 'Is it more ethical to give only in-kind aid that cannot be misused?',
        mapCoordinates: [37.781, -122.412],
        lat: 37.781,
        lng: -122.412,
        color: '#ee5253',
        colorRgb: '238, 82, 83',
        heroImage: '/assets/target/Image1.jpg',
        images: [
            './assets/target/Image1.jpg',
            './assets/target/Image2.jpeg',
            './assets/target/Image3.jpg'
        ],
        notes: [],
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
    },
    {
        id: "civic",
        name: 'Civic Plaza',
        subtitle: 'Public Spaces and Social Responsibility',
        description: 'Public giving & institutional responsibility',
        centralQuestion: 'Are we shifting the burden of addressing homelessness from public institutions to individuals?',
        mapCoordinates: [37.779, -122.416],
        lat: 37.779,
        lng: -122.416,
        color: '#9b59b6',
        colorRgb: '155, 89, 182',
        heroImage: '/assets/civic_plaza/Image9.jpg',
        images: [
            './assets/civic_plaza/Image1.jpg',
            './assets/civic_plaza/Image2.jpeg',
            './assets/civic_plaza/Image3.jpeg',
            './assets/civic_plaza/Image4.jpeg',
            './assets/civic_plaza/Image5.jpeg',
            './assets/civic_plaza/Image6.jpeg',
            './assets/civic_plaza/Image7.jpeg',
            './assets/civic_plaza/Image8.jpeg',


        ],
        notes: [],
        analysis: {
            kantian: {
                title: 'Kantian Perspective',
                text: 'Kant might question whether we\'re fulfilling civic responsibilities when we rely on individual charity. True moral action might involve advocating for systemic changes that respect the dignity of all persons.'
            },
            utilitarian: {
                title: 'Utilitarian Approach',
                text: 'Utilitarians would evaluate whether individual giving or institutional solutions produce greater well-being. Resources directed through effective public programs might benefit more people than sporadic individual donations.'
            },
            buddhist: {
                title: 'Buddhist View',
                text: 'Buddhist ethics suggests that compassion must be coupled with wisdom. Individual giving addresses immediate suffering, but community action addresses the systemic causes of suffering.'
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