import Link from "next/link";

interface DataType {
  id: number;
  title: JSX.Element;
  desc: JSX.Element;
  img: JSX.Element;
}
const feature_data: DataType[] = [
  {
    id: 1,
    title: <>Safe and Secure</>,
    desc: (
      <>
        Our team have put everything in place to ensure your asset is safe and
        secured on our platform.
      </>
    ),
    img: <i className="fa-solid fa-lock"></i>,
  },
  {
    id: 2,
    title: <>Passive Income</>,
    desc: (
      <>
        Earn passive income from staking SSDX token and participating in our
        daily reward program
      </>
    ),
    img: <i className="fa-solid fa-money-bill"></i>,
  },
  {
    id: 3,
    title: <>AI Integration</>,
    desc: (
      <>
        Eliminate traditional manual method and track your stolen funds easy and
        faster.
      </>
    ),
    img: <i className="fa-solid fa-microchip"></i>,
  },
  {
    id: 4,
    title: <>Real world assets</>,
    desc: <>Our token allows you gain ownership of real world assets.</>,
    img: <i className="fa-solid fa-piggy-bank"></i>,
  },
];
const FeatureOne = () => {
  return (
    <section id="feature" className="features-area pt-140 pb-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12">
            <div className="section-title text-center mb-70">
              <h6>Why Choose Us</h6>
              <h2 className="title">Safe, guaranteed, and easy to use</h2>
              <p className="pt-10">
                Join the teeming population of people using SpunkySDX to track
                assets
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {feature_data.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 col-xl-3 col-12">
              <div className="features-item">
                <div className="features-img">
                  {/* <Image src={item.img} alt="" /> */}
                  {item.img}
                </div>
                <div className="features-content">
                  <h2 className="title">
                    <Link href="#!">{item.title}</Link>
                  </h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
