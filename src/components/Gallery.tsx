import './../App.scss';
import GalleryRow from './Gallery-row';
import './Gallery-row.scss';
import './Gallery.scss';
import {configurationFile, PaintingDataInterface, overlayGallery, OverlayDataInterface} from './../assets/plik-konfiguracji';
import {useState} from 'react';

const Gallery = ()=> {

    const [isOverlayOpen, toggleOverlay] = useState(false);
    const [paintingFromGallery, setPaintingFromGallery] = useState<OverlayDataInterface | undefined>();
    const [paintingIndex, setPaintingIndex] = useState<number>(0);

    const getPaintingNumber = (paintingName: string) => {
        findPaintingUrl(paintingName);
        console.log('isOverlayOpen 1', isOverlayOpen);
        
        toggleOverlay(true);
        console.log('isOverlayOpen 2', isOverlayOpen);

    }

    const closeOverlay = () => {
        toggleOverlay(false);
        setPaintingFromGallery(undefined);

    }

    const findPaintingUrl = (name: string) => {
        const displayPainting: OverlayDataInterface | undefined = overlayGallery.find(
            (elem: OverlayDataInterface) => elem.name === name
        );
        setPaintingFromGallery(displayPainting);
        const paintingIndex: number =  overlayGallery.findIndex(
            (elem: OverlayDataInterface) => elem.name === name
        )
        setPaintingIndex(paintingIndex);
    }

    const nextPainting = () => {
        if(paintingIndex >= 0) {
            const nextPainting: OverlayDataInterface = overlayGallery[paintingIndex + 1];
            console.log('!!! paintingFromGallery 1', paintingFromGallery); // main
            setPaintingFromGallery(nextPainting);
            console.log('!!! paintingFromGallery 2', paintingFromGallery); // main

            console.log('!!! paintingIndex 1', paintingIndex);
            setPaintingIndex(overlayGallery.indexOf(nextPainting));
            console.log('!!! paintingIndex 2', paintingIndex);

            // console.log('!!! overlayGallery', overlayGallery);
            // console.log('!!! nextPainting', nextPainting); // detal
            // console.log('!!! paintingFromGallery', paintingFromGallery); // main
            
        }
    }

    const previousPainting = () => {
        console.log('paintingIndex - 1', paintingIndex - 1);
        console.log('overlayGallery.length', overlayGallery.length);
        
        if((paintingIndex - 1) < overlayGallery.length) {
        const previousPainting: OverlayDataInterface = overlayGallery[paintingIndex - 1];
        setPaintingFromGallery(previousPainting);
        setPaintingIndex(overlayGallery.indexOf(previousPainting));
        console.log('!!! overlayGallery', overlayGallery);

        console.log('!!! paintingIndex', paintingIndex);

        }
    }


    return (
        <div>
            {/* TUTAJ DAĆ POTEM FILTROWANIE ALBO SORTOWANIE */}
            
            {configurationFile.map((paintingData: PaintingDataInterface) => {
              return <GalleryRow paintingData={paintingData} onPaintingClicked={getPaintingNumber}></GalleryRow>  
            })}

            {isOverlayOpen ? 
            <div className='overlayGallery'>
                <h1 onClick={() => closeOverlay()}>CLOSE</h1>
                <h1 onClick={() => nextPainting()}>Next</h1>
                <h1 onClick={() => previousPainting()}>Prev</h1>
                <h1>{paintingFromGallery!.name}</h1>
                
                {/* <img alt='' src={paintingUrl}></img> */}
                <img alt='' src={paintingFromGallery!.url}></img>
            </div> : null }

        </div>
    )
}

export default Gallery;