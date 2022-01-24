import './../App.scss';
import GalleryRow from './Gallery-row';
import './Gallery-row.scss';
import './Gallery.scss';
import {configurationFile, PaintingDataInterface, overlayGallery, OverlayDataInterface} from './../assets/plik-konfiguracji';
import {useState} from 'react';

import closeIcon from './../assets/icons/close_white_24dp.svg';
import forwardIcon from './../assets/icons/arrow_forward_ios_white_24dp.svg';
import backIcon from './../assets/icons/arrow_back_ios_white_24dp.svg';

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

    const closeOverlay = (event: any) => {
        console.log(event);
        
        event.stopPropagation();
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
                {/* możliwe że propagation zadziała jak wydzielę overlayGallery do osobnego komponentu */}
                <div className='closeGallery' onClick={(event) => closeOverlay(event)}>
                    <span>X</span>
                </div>

                <div className='image-box'>
                    <div className='navigation-icon navigation-icon--back' onClick={() => previousPainting()}>
                        <img alt='back' src={backIcon}></img>
                    </div>
                    <img alt='' src={galleryState.paintingFromGallery!.url}></img>
                    <div className='navigation-icon navigation-icon--forward' onClick={() => nextPainting()}>
                        <img alt='forward' src={forwardIcon}></img>
                    </div>
                </div>
            </div> : null }

        </div>
    )
}

export default Gallery;