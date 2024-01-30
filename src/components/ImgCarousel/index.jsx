import React from "react";
import "./styles.css";
import { Link } from "react-scroll";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import img11 from "../../assets/11.jpg";

function CarouselFadeExample() {
  return (
    <div id="carouselExample" class="carousel slide carousel-fade img-carousel-custom">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={img2} class="d-block carousel-imgs" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={img1} class="d-block carousel-imgs" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={img11} class="d-block carousel-imgs" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={img3} class="d-block carousel-imgs" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={img5} class="d-block carousel-imgs" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={img4} class="d-block carousel-imgs" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={img8} class="d-block carousel-imgs" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={img7} class="d-block carousel-imgs" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={img6} class="d-block carousel-imgs" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={img10} class="d-block carousel-imgs" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={img9} class="d-block carousel-imgs" alt="..." />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
  );
}

const ImgCaraousel = (props) => {
  const getNextSequence = (sequence) => {
    if(sequence === 20) return 1;
    return sequence + 1;
  }
  return (
    <div id={Number(props.sequency)} className="screen-full" style={{background: props.bgColor, color: props.textColor}}>
      <div className="container img-caraousel-container">   
        <CarouselFadeExample />
        <footer class="imgCarousel-footer">
            <Link
              activeClass="active"
              to={getNextSequence(Number(props.sequency))}
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
              ignoreCancelEvents={true}
            >To the Top!</Link>
        </footer>
      </div>
    </div>
  );
};

export default ImgCaraousel;
