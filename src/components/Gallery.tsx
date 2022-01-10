import './../App.scss';
import GalleryRow from './Gallery-row';
import './Gallery-row.scss';
import {configurationFile, PaintingData} from './../assets/plik-konfiguracji';

function Gallery() {
    return (
        <div>
            {/* TUTAJ DAĆ POTEM FILTROWANIE ALBO SORTOWANIE */}
            {configurationFile.map((paintingData: PaintingData) => {
              return <GalleryRow paintingData={paintingData}></GalleryRow>  
            })}
        </div>
    )
}

export default Gallery;