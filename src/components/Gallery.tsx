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
        paintingFromGallery: OverlayDataInterface | undefined,
    }>(
        {
            isOverlayOpen: false,
            paintingFromGallery: overlayGallery[0],
            paintingIndex: 0,
        }
    );

    const openGalleryWithPainting = (paintingName: string) => {
        findPainting(paintingName);
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

    const findPainting = (name: string) => {
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
                    paintingFromGallery: displayPainting,
                }
            }
        )
    }

    const nextPainting = () => {
        let nextPainting: OverlayDataInterface;

        if(galleryState.paintingIndex === (overlayGallery.length -1)){
            nextPainting = overlayGallery[0];

            setGalleryState(
                (prevState) => {
                    return {
                        ...prevState, 
                        paintingIndex: 0,
                        isOverlayOpen: true,
                        paintingFromGallery: nextPainting,
                    }
                }
            )
        } else {
            nextPainting = overlayGallery[galleryState.paintingIndex! + 1];

            setGalleryState(
                (prevState) => {
                    return {
                        ...prevState, 
                        paintingIndex: overlayGallery.indexOf(nextPainting),
                        isOverlayOpen: true,
                        paintingFromGallery: nextPainting,

                    }
                }
            )

        }
    }

    const previousPainting = () => {
        let previousPainting: OverlayDataInterface;
        if(galleryState.paintingIndex === 0){
            previousPainting = overlayGallery[overlayGallery.length - 1];
            setGalleryState(
                (prevState) => {
                    return {
                        ...prevState, 
                        paintingIndex: overlayGallery.indexOf(previousPainting),
                        isOverlayOpen: true,
                        paintingFromGallery: previousPainting,
                    }
                }
            )
        } else {
            previousPainting = overlayGallery[galleryState.paintingIndex! - 1];
            setGalleryState(
                (prevState) => {
                    return {
                        ...prevState, 
                        paintingIndex: overlayGallery.indexOf(previousPainting),
                        isOverlayOpen: true,
                        paintingFromGallery: previousPainting,
                    }
                }
            )
        }
    }


    return (
        <div>
            {/* TUTAJ DAĆ POTEM FILTROWANIE ALBO SORTOWANIE */}
            
            {configurationFile.map((paintingData: PaintingDataInterface) => {
              return <GalleryRow paintingData={paintingData} onPaintingClicked={openGalleryWithPainting}></GalleryRow>  
            })}

            {galleryState.isOverlayOpen ? 
            <div className='overlayGallery'>
                {/* możliwe że propagation zadziała jak wydzielę overlayGallery do osobnego komponentu */}
                <div className='closeGallery' onClick={(event) => closeOverlay(event)}>
                    <span>X</span>
                </div>

                <div className='display-box'>
                    <div className={'navigation-icon navigation-icon--back'}
                        onClick={() => previousPainting()}>
                        <img alt='back' src={backIcon}></img>
                    </div>

                    <div className="image-box-wrapper">
                        <div className="image-box"><img alt='' src={galleryState.paintingFromGallery?.url}></img></div>
                        <div className='caption-box'>
                            <span className='caption-box_number'>#{galleryState.paintingFromGallery?.number}</span>, {galleryState.paintingFromGallery?.year}, {galleryState.paintingFromGallery?.technique}
                        </div>
                    </div>

                    <div className={'navigation-icon navigation-icon--forward'}
                         onClick={() => nextPainting()}>
                        <img alt='forward' src={forwardIcon}></img>
                    </div>
                </div>
            </div> : null }
        </div>
    )
}

export default Gallery;