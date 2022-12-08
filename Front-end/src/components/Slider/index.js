import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import imagem1 from '../../assets/images/imagem1.png';
import imagem2 from '../../assets/images/imagem2.png';
import imagem3 from '../../assets/images/imagem3.png';

export default function AutoPlay() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={imagem1} alt="" />
      </div>
      <div>
      <img src={imagem2} alt="" />
      </div>
      <div>
      <img src={imagem3} alt="" />
      </div>
    </Slider>
  );
}