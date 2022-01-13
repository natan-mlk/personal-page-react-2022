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
        rowType: 2,
        number: '26',
        technique: 'acrylic+oil',
        date: '07.2021',
        kind: 'abstract',
        size: '40x50',
        paintingUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26_2021_07_web_mini.jpg?alt=media&token=1a19ca1f-1622-4499-9e4a-e53f34db8a16',
        detailUrl: 'https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/026%2F26_2021_07_detail_web_mini.jpg?alt=media&token=5411b409-77f3-46c9-8bc4-b14883d68aaa'
      
    },
    {
        rowType: 1,
        number: '25',
        technique: 'acrylic',
        date: '07.2021',
        kind: 'seaside',  
        size: '70x50',
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