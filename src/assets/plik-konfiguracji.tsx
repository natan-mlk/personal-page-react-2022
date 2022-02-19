export interface PaintingDataInterface {
    rowType: number,
    number: string,
    technique: string,
    date: string,
    kind: string,
    additional?: string,
    size: string,
    paintingUrl?: string, // chyba niepotrzebne
    detailUrl?: string, // chyba niepotrzebne
    mini: any,
}
export interface OverlayDataInterface {
    number: number,
    year: number,
    name: string,
    technique: string,
    size: string,
    url:string,
    additional?: string
}

export const overlayGallery = [
    {
        number: 26,
        year: 2021,
        name: '26-stormyCloud-main',
        technique: 'acrylic+oil',
        size: '40x50',
        additional: 'Commissioned',
        url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26-stormyCloud-main_2021_07.jpg?alt=media&token=506f83b6-f41d-43c3-abf1-59f12882d195',
    },
    {
        number: 26,
        year: 2021,
        name: '26-stormyCloud-detal',
        technique: 'acrylic+oil',
        size: '40x50',
        additional: 'Commissioned',
        url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26-stormyCloud-detal_2021_07.jpg?alt=media&token=8d0e01b9-ff93-4a3e-9e4b-9689ccfece94',
    },
    
    {
        number: 25,
        year: 2021,
        name: '25-seaside-main',
        technique: 'acrylic+structure',
        size: '???',
        url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/025%2F25-seaside-main_2021_07.jpg?alt=media&token=a4d0489b-a904-461b-967e-0eb2f151636f',
    },
    
    {
        number: 25,
        year: 2021,
        name: '25-seaside-detal',
        technique: 'acrylic+structure',
        size: '???',
        url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/025%2F25-seaside-detail_2021_07.jpg?alt=media&token=e29a90a5-9b1d-4277-9756-52d5e95ca818',
    },
];

export const configurationFile: PaintingDataInterface[] = [
    {
        rowType: 2,
        number: '26',
        technique: 'acrylic+oil',
        date: '07.2021',
        kind: 'abstract',
        size: '40x50',

        mini: [
            {name: '26-stormyCloud-main', url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26-stormyCloud-main_2021_07_mini.jpg?alt=media&token=c3b02e73-a630-42f1-97b2-28b53865efc0'},
            {name: '26-stormyCloud-detal', url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26-stormyCloud-detal_2021_07_mini.jpg?alt=media&token=0ae1e753-4844-4c61-afe9-4d82390fcaa4'},
            // {name: '26-stormyCloud-detal', url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26-stormyCloud-detal_2021_07_mini.jpg?alt=media&token=0ae1e753-4844-4c61-afe9-4d82390fcaa4'},
        ],
        // 
        // paintingUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26_2021_07_web_mini2.jpg?alt=media&token=1a19ca1f-1622-4499-9e4a-e53f34db8a16',
        // detailUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26_2021_07_detail_web_mini.jpg?alt=media&token=5411b409-77f3-46c9-8bc4-b14883d68aaa'
      
    },
    {
        rowType: 1,
        number: '25',
        technique: 'acrylic+structure',
        date: '07.2021',
        kind: 'abstract',
        size: '70x50',
        mini: [
            {name: '25-seaside-main', url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/025%2F25-seaside-main_2021_07_mini.jpg?alt=media&token=d128106d-898c-43be-89cb-de3e7338fac0'},
            {name: '25-seaside-detal', url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/025%2F25-seaside-detail_2021_07_mini.jpg?alt=media&token=6a95fe38-d27d-4dd4-a714-900a2697115b'},
        ],
        // paintingUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/025%2F25-seaside-main_2021_07.jpg?alt=media&token=a4d0489b-a904-461b-967e-0eb2f151636f',
        // detailUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/025%2F25-seaside-detail_2021_07.jpg?alt=media&token=e29a90a5-9b1d-4277-9756-52d5e95ca818'
    },

    // {
    //     rowType: 2,
    //     number: '22',
    //     technique: 'acrylic',
    //     date: '07.2021',
    //     size: '50x70',  
    //     kind: 'seaside',
    //     paintingUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web.jpg?alt=media&token=03c5080b-26c0-442f-87c4-4375a07e24d5',
    //     detailUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web_detail_1.jpg?alt=media&token=d0bb55d4-8173-4734-aec6-65a82e730042'
      
    // },
]