import './../App.scss';
import './Gallery.scss';

function Gallery() {
    return (
        <div>
            <div className="gallery__row">
                <div className="gallery__box gallery__box--labels">
                    <div className="gallery__box--labels__number">
                        #25
                    </div>
                    <div className="gallery__box--labels__caption">
                        <div className="gallery__box--labels__caption__technique">acrylic</div>
                        <div className="gallery__box--labels__caption__date">09.2021</div>
                        <div className="gallery__box--labels__caption__kind">seascape</div>
                        <div className="gallery__box--labels__caption__size">50x70</div>
                    </div>
                </div>

                <div className="gallery__box gallery__box--image">
                    <img alt='test' src='https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web.jpg?alt=media&token=03c5080b-26c0-442f-87c4-4375a07e24d5'></img>
                </div>

                <div className="gallery__box gallery__box--details">
                    <img alt='test' src="https://firebasestorage.googleapis.com/v0/b/amilko-homepage.appspot.com/o/25_2021_07_web_detail_1.jpg?alt=media&token=d0bb55d4-8173-4734-aec6-65a82e730042"></img>
                </div>
            </div>
        </div>
    )
}

export default Gallery;