import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import  gallery  from '/Users/vadimanastasia/Desktop/Anastasia_Kasa_20240411/src/datas/gallery.json'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss'


const NextArrow = ({ onClick }) => (
    <button className="slick-arrow slick-next" onClick={onClick}>
      Next
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className="slick-arrow slick-prev" onClick={onClick}>
      Prev
    </button>
  );

function Carrousel() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        afterChange: (index) => setCurrentSlide(index)
      };
    
      
    const { id } = useParams();
    const [currentSlide, setCurrentSlide] = useState(0);

    const element = gallery.find(item => item.id === id);

    if (!element) {
      return <div>Element non trouvé</div>;
    }
  
    return (
      <div>
        
            
            <Slider {...settings}>
                {element.pictures.map((picture, index) => (
                <img key={index} src={picture} alt={`Image ${index + 1}`} />
                ))}
                
            </Slider>
            <p className='currentSlide'>{currentSlide + 1}/{element.pictures.length}</p> {/* index de l'image actuelle */}
        

        
      </div>
    );
  }
  
  export default Carrousel;