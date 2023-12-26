"use client";
import team_data from "@/data/TeamData";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  centerMode: true,
  centerPadding: "130px",
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: "70px",
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0",
        centerMode: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        centerPadding: "0",
        centerMode: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerPadding: "0",
        centerMode: false,
      },
    },
  ],
};

const Team = () => {
  return (
    <section
      className="team-area team-bg"
      style={{ backgroundImage: `url(/assets/img/bg/team_bg.png)` }}
    >
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <div className="section-title text-center mb-50 mt-50">
              <h6>Our Team</h6>
              <h2 className="title">
                As we grow, new members <br /> would be added
              </h2>
            </div>
          </div>
        </div>
        <div className="team-item-wrap">
          <Slider {...settings} className="row team-active g-0">
            {team_data.map((item) => (
              <div key={item.id} className="col">
                <div className="team-item">
                  <div className="team-thumb">
                    <Image src={item.img} alt="" />
                    <div className="social-links">
                      <a href={item.linkedIn} className="team-social">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href={item.twitter} className="team-social">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-content">
                    <h2 className="title">{item.title}</h2>
                    <span>{item.profession}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="read-more-btn text-center mt-70">
            <Link href="/" className="btn">
              All Team Member
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
