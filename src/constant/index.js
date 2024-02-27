import { checkBlue, diammond, rating4, rating4_5, rating5, trophy } from "@/assets/icons"
import { image } from "@/assets/images"

export const links = [
    {
        id: 1,
        link: 'Tools'
    },
    {
        id: 2,
        link: 'AWS Builder'
    },
    {
        id: 3,
        link: 'Start Build'
    },
    {
        id: 4,
        link: 'Build Supplies'
    },
    {
        id: 5,
        link: 'Tooling'
    },
    {
        id: 6,
        link: 'BlueHosting'
    },
]
export const listing = [
    {
        id: 1,
        link: 'Home>'
    },
    {
        id: 2,
        link: 'Hosting for all>'
    },
    {
        id: 3,
        link: 'Hosting>'
    },
    {
        id: 4,
        link: 'Hosting6>'
    },
    {
        id: 5,
        link: 'Hosting5'
    }
]

export const footerCategories = [
    {
        id: 1,
        category: 'Web builder',
    },
    {
        id: 2,
        category: 'Hosting',
    },
    {
        id: 3,
        category: 'Data Center',
    },
    {
        id: 4,
        category: 'Robotic-Automation',
    },
]
export const footerContacts = [
    {
        id: 1,
        category: 'Contact',
    },
    {
        id: 2,
        category: 'Privacy Policy',
    },
    {
        id: 3,
        category: 'Terms Of Service',
    },
    {
        id: 4,
        category: 'Categories',
    },
    {
        id: 5,
        category: 'About',
    },
]
export const deals = [
    {
        id: 1,
        image: image,
        off: '20% ',
        time: 'Limited time',
        heading: 'Webbuilder 1',
        subheading: 'Computer  Modern clasic with wix support',
        price: 39.96,
        offPrice: 49.96
    },
    {
        id: 2,
        image: image,
        off: '20% ',
        time: 'Limited time',
        heading: 'Webbuilder 1',
        subheading: 'Computer  Modern clasic with wix support',
        price: 39.96,
        offPrice: 49.96
    },
    {
        id: 3,
        image: image,
        off: '20% ',
        time: 'Limited time',
        heading: 'Webbuilder 1',
        subheading: 'Computer  Modern clasic with wix support',
        price: 39.96,
        offPrice: 49.96
    },

]

export const listingDeals = [
    {
        id: 1,
        isBest: true,
        bestValue: 'Choice',
        bestIcon: trophy,
        mainImg: image,
        imageDetail: 'Builder 1',

        details: [
            {
                dId: '11',
                heading: 'WixPro 72-Inch Responsive Website Builder - ',
                para: 'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)'
            },
            {
                dId: '12',
                heading: 'Main highlights',
                para: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.'
            },
        ],
        ratingNo: 9.8,
        ratingRate: "Exceptional",
        ratingImage: rating5
    },
    {
        id: 2,
        isBest: true,
        bestValue: 'Value',
        bestIcon: diammond,
        mainImg: image,
        imageDetail: 'Builder',
        details: [
            {
                dId: '21',
                heading: 'SiteCraft 68-Inch Ultimate Web Design Studio - ',
                para: 'Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)'
            },
            {
                dId: '22',
                heading: 'Main highlights',
                para: '[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.'
            },
        ],
        ratingNo: 9.5,
        ratingRate: "Excellent",
        ratingImage: rating4_5
    },
    {
        id: 3,
        isBest: false,
        bestValue: 'Choice',
        bestIcon: trophy,
        mainImg: image,
        imageDetail: 'Builder 1',
        details: [
            {
                dId: '31',
                heading: 'WixPro 72-Inch Responsive Website Builder - ',
                para: 'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)'
            },
            {
                dId: '32',
                heading: 'Main highlights',
                para: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.'
            },
        ],
        ratingNo: 9.3,
        ratingRate: "Exceptional",
        ratingImage: rating5
    },
    {
        id: 4,
        isBest: false,
        bestValue: 'Choice',
        offAvail: true,

        bestIcon: trophy,
        mainImg: image,
        imageDetail: 'CDK',
        details: [
            {
                dId: '31',
                heading: 'CDK Resposive Builder:',
                para: ' An extensive library of widgets and apps, and detailed step-by-step guides',
                offValue: '26% Off'
            },
            {
                dId: '32',
                bgAvail: true,
                extraParaAvail: true,
                heading: 'Main highlights',
                para: '',
                moreData: [
                    {
                        id: '321',
                        no: 9.9,
                        value: 'building responsive'
                    },
                    {
                        id: '322',
                        no: 8.9,
                        value: 'Cool'
                    },
                    {
                        id: '323',
                        no: 8.9,
                        value: 'Docs'
                    },
                ],
                extraPara: [
                    {
                        heading: 'Why we love it',
                        data: [
                            {
                                icon: checkBlue,
                                value: 'Documentation'
                            },
                            {
                                icon: checkBlue,
                                value: 'Easy Use'
                            },
                            {
                                icon: checkBlue,
                                value: 'Out of box'
                            },
                        ]
                    }
                ]
            },
        ],
        ratingNo: 9.1,
        ratingRate: "Very Good",
        ratingImage: rating4
    },
]