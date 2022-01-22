import './../App.scss';
import './Gallery-row.scss';
import {PaintingDataInterface} from './../assets/plik-konfiguracji';

interface GalleryRowProps {
    paintingData: PaintingDataInterface,
    onPaintingClicked(name: string): any
}

const GalleryRow = (props: GalleryRowProps) => {
        
    const paintingData : PaintingDataInterface = props.paintingData;

    const clickHandler = (name: string) => {
        props.onPaintingClicked(name);
    }

    const items: any[] = [];

    return (
        <div>
            <div className={ paintingData.rowType === 1 ? "gallery__row" : "gallery__row gallery__row--type-2"}>
                <div className="gallery__box gallery__box--labels">
                    <div className="gallery__box--labels__number">
                        #{paintingData.number}
                    </div>
                    <div className="gallery__box--labels__caption">
                        <div className="gallery__box--labels__caption__kind">{paintingData.kind}</div>
                        <div className="gallery__box--labels__caption__date">{paintingData.date}</div>
                        <div className="gallery__box--labels__caption__technique">{paintingData.technique}</div>
                        <div className="gallery__box--labels__caption__size">{paintingData.size}</div>
                    </div>
                </div>

                <div className="gallery__box gallery__box--image" onClick={() => clickHandler(paintingData.mini[0].name)}>
                    <img alt="painting" src={paintingData.mini[0].url}></img>
                </div>


                <div className="gallery__box gallery__box--details" 
                    onClick={() => clickHandler(paintingData.mini[1].name)}
                    style={{backgroundImage: "url(" + paintingData.mini[1].url + ")"}}>
                </div>
            </div>
        </div>
    )
}

export default GalleryRow;