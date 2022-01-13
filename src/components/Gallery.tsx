import './../App.scss';
import GalleryRow from './Gallery-row';
import './Gallery-row.scss';
import {configurationFile, PaintingData} from './../assets/plik-konfiguracji';

const Gallery = ()=> {

    const getPaintingNumber = (paintingUrl: string) => {
        const paintingNumberData: string = paintingUrl;
        console.log('!! paintingNumberData', paintingNumberData);
    }

    return (
        <div>
            {/* TUTAJ DAĆ POTEM FILTROWANIE ALBO SORTOWANIE */}
            {configurationFile.map((paintingData: PaintingData) => {
              return <GalleryRow paintingData={paintingData} onPaintingClicked={getPaintingNumber}></GalleryRow>  
            })}
            {/* DODAĆ RÓWNIEŻ OVERLAY AKTYWOWANY W ZALEŻNOŚCI OD STANU GALLERY, KTÓRY TO STAN BĘDZIE PRZEKAZANY Z GALLERY-ROW */}
        </div>
    )
}

export default Gallery;