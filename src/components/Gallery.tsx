import './../App.scss';
import GalleryRow from './Gallery-row';
import './Gallery-row.scss';
import './Gallery.scss';
import {configurationFile, PaintingDataInterface, overlayGallery, OverlayDataInterface} from './../assets/plik-konfiguracji';
import {useState} from 'react';

const Gallery = ()=> {
    
    const [galleryState, setGalleryState] = useState<{
        isOverlayOpen: boolean,
        paintingIndex: number,
        paintingFromGallery: OverlayDataInterface | undefined
    }>(
        {
            isOverlayOpen: false,
            paintingFromGallery: overlayGallery[0],
            paintingIndex: 0
        }
    );

    const getPaintingNumber = (paintingName: string) => {
        findPaintingUrl(paintingName);
    }

    const closeOverlay = () => {
        setGalleryState(
            (prevState) => {
                return {
                    ...prevState,
                    isOverlayOpen: false,
                }
            }
        )

    }

    const findPaintingUrl = (name: string) => {
        const displayPainting: OverlayDataInterface | undefined = overlayGallery.find(
            (elem: OverlayDataInterface) => elem.name === name
        );

        const paintingIndex: number =  overlayGallery.findIndex(
            (elem: OverlayDataInterface) => elem.name === name
        )

        setGalleryState(
            (prevState) => {
                return {
                    ...prevState, 
                    paintingIndex: paintingIndex,
                    isOverlayOpen: true,
                    paintingFromGallery: displayPainting
                }
            }
        )
    }

    const nextPainting = () => {
        if((galleryState.paintingIndex + 1) !== overlayGallery.length) {
            const nextPainting: OverlayDataInterface = overlayGallery[galleryState.paintingIndex + 1];

            setGalleryState(
                (prevState) => {
                    return {
                        ...prevState, 
                        paintingIndex: overlayGallery.indexOf(nextPainting),
                        isOverlayOpen: true,
                        paintingFromGallery: nextPainting
                    }
                }
            )
        }
    }

    const previousPainting = () => {
        if((galleryState.paintingIndex) > 0) {
            const previousPainting: OverlayDataInterface = overlayGallery[galleryState.paintingIndex - 1];
            
            setGalleryState(
                (prevState) => {
                    return {
                        ...prevState, 
                        paintingIndex: overlayGallery.indexOf(previousPainting),
                        isOverlayOpen: true,
                        paintingFromGallery: previousPainting
                    }
                }
            )

        }
    }


    return (
        <div>
            {/* TUTAJ DAĆ POTEM FILTROWANIE ALBO SORTOWANIE */}
            
            {configurationFile.map((paintingData: PaintingDataInterface) => {
              return <GalleryRow paintingData={paintingData} onPaintingClicked={getPaintingNumber}></GalleryRow>  
            })}

            {galleryState.isOverlayOpen ? 
            <div className='overlayGallery'>
                <h1 onClick={() => closeOverlay()}>CLOSE</h1>
                <h1 onClick={() => nextPainting()}>Next</h1>
                <h1 onClick={() => previousPainting()}>Prev</h1>
                <h1>{galleryState.paintingFromGallery!.name}</h1>                
                <img alt='' src={galleryState.paintingFromGallery!.url}></img>
            </div> : null }

        </div>
    )
}

export default Gallery;