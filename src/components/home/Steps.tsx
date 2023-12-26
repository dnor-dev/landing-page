import React from "react";

interface DataType {
  id: number;
  title: JSX.Element;
  desc: JSX.Element;
  img: JSX.Element;
}
const steps_data: DataType[] = [
  {
    id: 1,
    title: <>Create Account</>,
    desc: (
      <>
        Visit our website and set up and account with your email and password or
        connect your wallet.
      </>
    ),
    img: <i className="fa-solid fa-plus feat-icon"></i>,
  },
  {
    id: 2,
    title: <>Buy SSDX Token</>,
    desc: (
      <>
        Visit any supported cryptocurrency exchange platform, set up and
        account, deposit and buy SSDX
      </>
    ),
    img: <i className="fa-solid fa-money-bill feat-icon"></i>,
  },
  {
    id: 3,
    title: <>Stake Token</>,
    desc: (
      <>
        Connect your cryptocurrency wallet to spunkysdx, select your preferred
        staking plan and start staking
      </>
    ),
    img: <i className="fa-solid fa-cart-shopping feat-icon"></i>,
  },
];

const Steps = () => {
  return (
    <section className="steps" id="steps">
      <div className="container">
        <div className="section-title text-center mb-50 mt-20">
          <h6>Step by step guide</h6>
          <h2 className="title">Easy Steps to Success</h2>
          <p className="pt-10">
            Create a second income stream with these simple steps
          </p>
        </div>

        <div className="row g-4 g-md-5">
          {steps_data.map((step) => (
            <div className="col-md-6 col-lg-4 col-12" key={step.id}>
              <div className="feat-card-cover">
                <div className="feat-card">
                  {step.img}
                  <h6>{step.title}</h6>
                  <p>{step.desc}</p>
                  <button>
                    Get started <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
