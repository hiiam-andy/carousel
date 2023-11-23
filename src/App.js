import { useState } from "react";
import Slider from "react-slick";
import "./App.css";

// import icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// import images
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

const images = [img1, img2, img3, img4];

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}
function EmptyArrow({ onClick }) {
  return <div></div>;
}

function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, _) => (
      <div className={current === slideIndex ? "dot active" : "dot"}></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h1>
        АВТОМОБИЛИ
        <br /> НАШЕГО АВТОПАРКА
      </h1>
      <div className="slider_wrapper">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div
              className={index === slideIndex ? "slide active" : "slide"}
              key={index}
            >
              <div className="slider">
                <img src={img} alt="" />
                <h2>Volkswagen Polo 2121</h2>
                <div
                  className={
                    index === slideIndex
                      ? "slide_text_wrapper active"
                      : "slide_text_wrapper"
                  }
                >
                  <p className="slide_text">
                    цена за сутки
                    <br />
                    3000р
                  </p>
                  <p className="slide_text">
                    коробка передач
                    <br />
                    АКПП
                  </p>
                  <p className="slide_text">
                    вид топлива
                    <br />
                    Газ
                  </p>
                  <button>Подробнее</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default App;
