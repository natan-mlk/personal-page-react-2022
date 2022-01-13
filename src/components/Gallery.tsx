import './../App.scss';
import GalleryRow from './Gallery-row';
import './Gallery-row.scss';
import './Gallery.scss';
import {configurationFile, PaintingData} from './../assets/plik-konfiguracji';
import {useState} from 'react';

const Gallery = ()=> {

    // stan : pokaż galerię albo nie. Może jaki url
    const [isOverlayOpen, toggleOverlay] = useState(false);
    const [paintingUrl, setPaintingUrl] = useState('');

    const getPaintingNumber = (paintingUrl: string) => {
        toggleOverlay(true);
        setPaintingUrl(paintingUrl);
    }

    const closeOverlay = () => {
        toggleOverlay(false);
        setPaintingUrl('');
    }

    return (
        <div>
            {/* TUTAJ DAĆ POTEM FILTROWANIE ALBO SORTOWANIE */}
            
            {configurationFile.map((paintingData: PaintingData) => {
              return <GalleryRow paintingData={paintingData} onPaintingClicked={getPaintingNumber}></GalleryRow>  
            })}

            {isOverlayOpen ? 
            <div className='overlayGallery'>
                <h1 onClick={() => closeOverlay()}>CLOSE</h1>
                <img alt='' src={paintingUrl}></img>
            </div> : null }

        </div>
    )
}

export default Gallery;