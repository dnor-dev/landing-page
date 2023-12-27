"use client";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";

// import brandImg_1 from "@/assets/img/brand/partner1.webp";
import brandImg_2 from "@/assets/img/brand/partner2.webp";

const brand_data: StaticImageData[] = [brandImg_2];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const Brand = () => {
  return (
    <div className="brand-area" id="partners">
      <div className="row g-0">
        <div className="col-lg-12">
          <div className="brand-title text-center">
            <h6 className="title">Meet our partners</h6>
          </div>
        </div>
      </div>
      <div className="brand-item-wrap">
        <Slider {...settings} className="row g-0 brand-active">
          {brand_data.map((item, i) => (
            <div key={i} className="col-12">
              <div className="brand-item">
                <Image src={item} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brand;
