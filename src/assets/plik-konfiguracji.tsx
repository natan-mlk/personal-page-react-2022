export interface PaintingData {
    rowType: number,
    number: string,
    technique: string,
    date: string,
    kind: string,
    additional?: string,
    size: string,
    paintingUrl: string,
    detailUrl: string
}

export const configurationFile: PaintingData[] = [
    {
        rowType: 1,
        number: '25',
        technique: 'acrylic',
        date: '09.2021',
        kind: 'seaside',  
        size: '50x70',
        paintingUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web.jpg?alt=media&token=03c5080b-26c0-442f-87c4-4375a07e24d5',
        detailUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web_detail_1.jpg?alt=media&token=d0bb55d4-8173-4734-aec6-65a82e730042'
    },
    {
        rowType: 2,
        number: '24',
        technique: 'acrylic+oil',
        date: '08.2021',
        kind: 'forest',
        size: '50x70',
        paintingUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web.jpg?alt=media&token=03c5080b-26c0-442f-87c4-4375a07e24d5',
        detailUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web_detail_1.jpg?alt=media&token=d0bb55d4-8173-4734-aec6-65a82e730042'
      
    },
    {
        rowType: 1,
        number: '23',
        technique: 'mixed media',
        date: '07.2021',
        size: '50x70',  
        kind: 'beach',
        paintingUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web.jpg?alt=media&token=03c5080b-26c0-442f-87c4-4375a07e24d5',
        detailUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web_detail_1.jpg?alt=media&token=d0bb55d4-8173-4734-aec6-65a82e730042'
      
    },
    {
        rowType: 2,
        number: '22',
        technique: 'acrylic',
        date: '07.2021',
        size: '50x70',  
        kind: 'seaside',
        paintingUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web.jpg?alt=media&token=03c5080b-26c0-442f-87c4-4375a07e24d5',
        detailUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web_detail_1.jpg?alt=media&token=d0bb55d4-8173-4734-aec6-65a82e730042'
      
    },
]