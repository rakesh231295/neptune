import React from "react";
import Slider from "react-slick";

// Import Slick Carousel CSS
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";

const Offer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const offers = [
    { id: 1, image: "/assets/images/banner.png" },
    { id: 2, image: "/assets/images/banner.png" },
    { id: 3, image: "/assets/images/banner.png" },
  ];

  return (
    <div>
      
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} style={{ textAlign: "center", padding: "10px" }}>
            <img
              src={offer.image}
              alt={offer.title}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Offer;
