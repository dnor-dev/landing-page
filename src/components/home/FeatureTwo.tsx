import Image, { StaticImageData } from "next/image";

import featuresImg_1 from "@/assets/img/images/features_two_img01.png";
import featuresImg_2 from "@/assets/img/images/features_two_img02.png";
import featuresImg_3 from "@/assets/img/images/features_two_img03.png";

import featuresTitleImg_1 from "@/assets/img/images/title_img01.jpg";
import featuresTitleImg_2 from "@/assets/img/images/title_img02.jpg";

import featuresShape_1 from "@/assets/img/images/features_shape01.png";
import featuresShape_2 from "@/assets/img/images/features_shape02.png";

interface DataType {
  id: number;
  title: string;
  desc: string;
  img: JSX.Element;
  coming_soon: boolean;
}

const feature_data: DataType[] = [
  {
    id: 1,
    title: "Asset Tracking",
    desc: "Say good bye to sleepless nights. Track your stolen assets from a DEX wallet to a CEX wallet platform",
    img: <i className="feat-icon fa-solid fa-shield"></i>,
    coming_soon: false,
  },
  {
    id: 2,
    title: "Aggregator",
    desc: "Stay informed with the current happeningwith spunkySDX news. We provide accurate insight on crypto market trends",
    img: <i className="feat-icon fa-solid fa-clipboard"></i>,
    coming_soon: false,
  },
  {
    id: 3,
    title: "Reward Program",
    desc: "Increase your income capacity. Complete simple tasks on our website and earn daily spunky points which can be converted to SSDX token",
    img: <i className="feat-icon fa-solid fa-money-bill"></i>,
    coming_soon: false,
  },
  {
    id: 4,
    title: "NFT Market Place",
    desc: "Own unique digital assets with high market value",
    img: <i className="feat-icon fa-solid fa-masks-theater"></i>,
    coming_soon: true,
  },
  {
    id: 5,
    title: "Staking",
    desc: "Earn up to 5% APY when you stake your SSDX token. we have flexible plans to suit everyone.",
    img: <i className="feat-icon fa-solid fa-database"></i>,
    coming_soon: false,
  },
  {
    id: 6,
    title: "DEX",
    desc: "Seamlessly trade different coins on spunkysdx",
    img: <i className="feat-icon fa-solid fa-shield-halved"></i>,
    coming_soon: true,
  },
  {
    id: 7,
    title: "Blockchain",
    desc: "Own unique digital assets with high market value",
    img: <i className="feat-icon fa-solid fa-coins"></i>,
    coming_soon: true,
  },
  {
    id: 8,
    title: "Launchpad",
    desc: "Raise funds easily during the initial stage of your Brc-20 projects",
    img: <i className="feat-icon fa-solid fa-rocket"></i>,
    coming_soon: true,
  },
];

const FeatureTwo = () => {
  return (
    <div>
      <div className="container">
        <div className="section-title text-center mb-50 mt-50">
          <h6>Our Features</h6>
          <h2 className="title">All you need is here</h2>
          <p className="pt-10">Experience an all iin one crypto solution</p>
        </div>
      </div>
      <section
        className="features-area-two features-bg"
        style={{ backgroundImage: `url(/assets/img/bg/features_bg.png)` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            {feature_data.map((step) => (
              <div className="col-md-6 col-lg-4 col-12" key={step.id}>
                <div
                  className="feat-card"
                  style={{
                    border: "2px solid #d63384",
                  }}
                >
                  {step.img}
                  <h6>{step.title}</h6>
                  <p>{step.desc}</p>
                  {step.coming_soon && (
                    <button>
                      Coming Soon <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureTwo;
