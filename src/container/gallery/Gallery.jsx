import "./Gallery.css"
import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import Subheading from '../../components/subheading/Subheading';
import images  from '../../images';
import './Gallery.css';

const Gallery = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };

    return (
        <div className="app__gallery flex__center">
            <div className="app__gallery-content">
                <Subheading title="Instagram" />
                <h1 className="headtext__cormorant">Photo Gallery</h1>
                <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Indulge your eyes in the best of food goodies by Exploring our photo gallery, pleasure that meets desires.</p>
                <button type="button" className="custom__button">View More</button>
            </div>
            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {[images.Gallery1, images.Gallery2, images.Gallery3, images.Gallery4].map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                            <img src={image} alt="gallery_image" />
                            <BsInstagram className="gallery__image-icon" />
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                </div>
            </div>
        </div>
    );
};

export default Gallery;