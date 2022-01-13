import './../App.scss';
import './Gallery-row.scss';
import {PaintingData} from './../assets/plik-konfiguracji';
import {useState} from 'react';

interface GalleryRowProps {
    paintingData: PaintingData,
    onPaintingClicked(paintingNumber: string): any
}

const GalleryRow = (props: GalleryRowProps) => {
        
    const paintingData : PaintingData = props.paintingData;

    const clickHandler = (url: string) => {
        props.onPaintingClicked(url);
    }

    return (
        <div>
            <div className={ paintingData.rowType === 1 ? "gallery__row" : "gallery__row gallery__row--type-2"}>
                <div className="gallery__box gallery__box--labels">
                    <div className="gallery__box--labels__number">
                        #{paintingData.number}
                        {/* {number} */}
                    </div>
                    <div className="gallery__box--labels__caption">
                        <div className="gallery__box--labels__caption__kind">{paintingData.kind}</div>
                        <div className="gallery__box--labels__caption__date">{paintingData.date}</div>
                        <div className="gallery__box--labels__caption__technique">{paintingData.technique}</div>
                        <div className="gallery__box--labels__caption__size">{paintingData.size}</div>
                    </div>
                </div>

                <div className="gallery__box gallery__box--image" onClick={() => clickHandler(paintingData.paintingUrl)}>
                    <img alt="painting" src={paintingData.paintingUrl}></img>
                </div>

                <div className="gallery__box gallery__box--details" onClick={() => clickHandler(paintingData.paintingUrl)}>
                    <img alt="detail" src={paintingData.detailUrl}></img>
                </div>
            </div>
        </div>
    )
}

export default GalleryRow;