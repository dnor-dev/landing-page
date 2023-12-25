"use client";
import Slider from "react-slick";

interface DataTyfe {
  id: number;
  roadmap_title: string;
  title: string;
  desc: JSX.Element;
}

const roadmap_data: DataTyfe[] = [
  {
    id: 1,
    roadmap_title: "Phase 1",
    title: "Project Idea",
    desc: (
      <div>
        <p>Assemble team</p>
        <p>Website</p>
        <p>Social Media</p>
      </div>
    ),
  },
  {
    id: 2,
    roadmap_title: "Phase 2",
    title: "Strategic Partnerships",
    desc: (
      <div>
        <p>Staking Platform</p>
        <p>Task for reward launch</p>
        <p>App launch</p>
      </div>
    ),
  },
  {
    id: 3,
    roadmap_title: "Phase 3",
    title: "Tokenomics",
    desc: (
      <div>
        <p>White paper</p>
        <p>Platform Development</p>
        <p>Smart contract and Audit</p>
      </div>
    ),
  },
  {
    id: 4,
    roadmap_title: "Phase 4",
    title: "Launch",
    desc: (
      <div>
        <p>Public Sale</p>
        <p>Official Launch</p>
      </div>
    ),
  },
  {
    id: 5,
    roadmap_title: "Phase 5",
    title: "Phase 5",
    desc: (
      <div>
        <p>CoinGecko</p>
        <p>Token Buy</p>
        <p>15,000 holders</p>
        <p>Ongoing</p>
      </div>
    ),
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  centerMode: true,
  centerPadding: "260px",
  autoplay: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        enterPadding: "0",
        centerMode: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        enterPadding: "0",
        centerMode: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        enterPadding: "0",
        centerMode: false,
      },
    },
  ],
};

const RoadMapArea = () => {
  return (
    <section id="roadMap" className="roadmap-area pt-140">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-12">
            <div className="section-title text-center mb-70">
              <h2 className="title">Our Roadmap</h2>
            </div>
          </div>
        </div>
        <Slider {...settings} className="row roadMap-active">
          {roadmap_data.map((item) => (
            <div key={item.id} className="col-lg-4">
              <div className="roadmap-item">
                <span className="roadmap-title">{item.roadmap_title}</span>
                <div className="roadmap-content">
                  <h4 className="title">
                    <span className="dot"></span>
                    {item.title}
                  </h4>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RoadMapArea;
