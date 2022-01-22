export interface PaintingDataInterface {
    rowType: number,
    number: string,
    technique: string,
    date: string,
    kind: string,
    additional?: string,
    size: string,
    paintingUrl: string,
    detailUrl: string,
    mini?: any,
}
export interface OverlayDataInterface {
    year: number,
    name: string,
    technique: string,
    size: string,
    url:string
}

export const overlayGallery = [
    {
        year: 2021,
        name: '26-stormyCloud-main',
        technique: 'acrylic+oil',
        size: '40x50',
        url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26-stormyCloud-main_2021_07.jpg?alt=media&token=506f83b6-f41d-43c3-abf1-59f12882d195',
    },
    {
        year: 2021,
        name: '26-stormyCloud-detal',
        technique: 'acrylic+oil',
        size: '40x50',
        url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26-stormyCloud-detal_2021_07.jpg?alt=media&token=8d0e01b9-ff93-4a3e-9e4b-9689ccfece94',
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
            {name: '26-stormyCloud-main', url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26-stormyCloud-main_2021_07_mini.jpg?alt=media&token=1dca50bc-1b30-43ff-bc2f-0287bec17e0f'},
            {name: '26-stormyCloud-detal', url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26-stormyCloud-detal_2021_07_mini.jpg?alt=media&token=0ae1e753-4844-4c61-afe9-4d82390fcaa4'},
            // {name: '26-stormyCloud-detal', url: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26-stormyCloud-detal_2021_07_mini.jpg?alt=media&token=0ae1e753-4844-4c61-afe9-4d82390fcaa4'},
        ],
        // 
        paintingUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26_2021_07_web_mini2.jpg?alt=media&token=1a19ca1f-1622-4499-9e4a-e53f34db8a16',
        detailUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26_2021_07_detail_web_mini.jpg?alt=media&token=5411b409-77f3-46c9-8bc4-b14883d68aaa'
      
    },
    // {
    //     rowType: 1,
    //     number: '25',
    //     technique: 'acrylic',
    //     date: '07.2021',
    //     kind: 'seaside',  
    //     size: '70x50',
    //     paintingUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web2.jpg?alt=media&token=03c5080b-26c0-442f-87c4-4375a07e24d5',
    //     detailUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web_detail_1.jpg?alt=media&token=d0bb55d4-8173-4734-aec6-65a82e730042'
    // },
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