"use client";
import team_data from "@/data/TeamData";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <section
      className="team-area team-bg"
      style={{ backgroundImage: `url(/assets/img/bg/team_bg.png)` }}
    >
      <div className="container">
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
        <div className="row justify-content-center gy-4">
          {team_data.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 col-12">
              <div className="team-item">
                <div className="team-thumb">
                  <Image src={item.img} alt="" />
                </div>
                <div className="flex-bottom">
                  <div className="team-content">
                    <h2 className="title">{item.title}</h2>
                    <p>{item.profession}</p>
                  </div>
                  <div className="social-links">
                    <a href={item.linkedIn} className="team-social">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href={item.twitter} className="team-social">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
