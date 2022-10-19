import React, { useState } from 'react'
import Slider from "react-slick";
import style from './Slider.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card4 from '../../img/card4.png';
import card3 from '../../img/card3.png';
import cardMain from '../../img/card-main.png';
import card2 from '../../img/card2.png';
import card1 from '../../img/card1.png';
import ChevronLeft from '../../img/ChevronLeft.png';
import ChevronRight from '../../img/ChevronRight.png';


export default function SliderComponent() {
    const [currentSlide, setCurrentSlide] = useState(2);
    const customSlider = React.createRef();
    const settings = {
        beforeChange: (current, next) => setCurrentSlide(next),
        className: "center variable-width",
        centerMode: true,
        variableWidth: true,
        // infinite: true,
        centerPadding: "60px",
        margin: "60px",
        speed: 500,
        slidesToShow: 3,
        // slidesToScroll: 4,
        initialSlide: 2,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div className={style.slider}>
            <Slider ref={customSlider} {...settings}>
                <div style={{ width: 300 }} className={style.sliderItem}>
                    <div>
                        <img src={card1} alt='card1' />
                    </div>
                </div>
                <div style={{ width: 300 }} className={style.sliderItem}>
                    <div>
                        <img src={card2} alt='card2' />

                    </div>
                </div>
                <div style={{ width: 300 }} className={style.sliderItem}>
                    <div>
                        <img src={cardMain} alt='card-main' />

                    </div>
                </div>
                <div style={{ width: 300 }} className={style.sliderItem}>
                    <div>
                        <img src={card3} alt='card3' />

                    </div>
                </div>
                <div style={{ width: 300 }} className={style.sliderItem}>
                    <div>
                        <img src={card4} alt='card4' />

                    </div>
                </div>
            </Slider>
            <div className={style.buttons}>
                <img src={ChevronLeft} alt="ChevronLeft" className={style.button} onClick={() => customSlider.current.slickPrev()} />
                <span>{currentSlide + 1}</span>
                <span>/</span>    
                <span>5</span>
                <img src={ChevronRight} alt="ChevronRight" className={style.button} onClick={() => customSlider.current.slickNext()} />
            </div>
            {/* <div>{currentSlide + 1}</div> */}
        </div>
    )
}
