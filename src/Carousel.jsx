import React, { useState } from 'react';
import './carousel.css';

import CarouselImage1 from "./images/carousel-image1.jpg";
import CarouselImage2 from "./images/carousel-image2.jpg";
import CarouselImage3 from "./images/carousel-image3.jpg";

const carouselImages = [
    { 
        path: CarouselImage1, 
        alt: 'A giant panda sits in a dense bamboo forest, peacefully chewing on a bamboo stalk. It is surrounded by lush greenery, which creates a natural and serene setting.' 
    },
    { 
        path: CarouselImage2, 
        alt: 'Two panda cubs rest on a wooden platform, surrounded by a natural setting with scattered leaves and tree branches. One of the pandas is looking forward, while the other is lying down, appearing relaxed and comfortable.' 
    },
    { 
        path: CarouselImage3, 
        alt: 'A giant panda is lying across a thick tree branch, resting comfortably with its head upside down. The surrounding foliage and tree trunks create a lush forest setting for the panda.' },
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1)
        );
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1)
        );
    };

    return (
        <div className="carousel-container">

            <button className="carousel__button" onClick={prevImage}>
                <div
                    className="gg-play-track-prev-r">
                </div>
            </button>

            <img
                className="carousel__images"
                src={carouselImages[currentIndex].path}
                alt={carouselImages[currentIndex].alt} />
            <button className="carousel__button" onClick={nextImage}>
                <div className="gg-play-track-next-r">
                </div>
            </button>
        </div>
    );
}

export default Carousel;
