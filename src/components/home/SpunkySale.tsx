import React from "react";

const SpunkySale = () => {
  return (
    <div className="container">
      <section className="spunky_sale">
        <div className="first-section">
          <p>SSDX Coin</p>
          <h2>Spunky Sale</h2>
          <p>
            SpunkySDX leverages advanced AI technology to actively track and
            monitor stolen asset on the EVM chain.
          </p>
          <div className="copy">
            <p>skkeod0dj00sskswppwpsl</p>
            <i className="fa-regular fa-copy"></i>
          </div>
          <a href="https://presale.spunkysdx.io/" target="_blank">
            <button>
              Buy SSDX <i className="fa-solid fa-chevron-right"></i>
            </button>
          </a>
        </div>

        <div className="second-section">
          <h6>
            PRE-SALE <span className="primary-color pl-5">SPUNKY</span>SDX
          </h6>

          <div className="spunky-progress">
            <p>Progress: 30.05%</p>
            <progress value={30.05} max={100}></progress>
          </div>

          <div className="flex-amount">
            <div>
              <p>Total Raised</p>
              <p>$1,780,039</p>
            </div>
            <div>
              <p>Sold</p>
              <p>$1,780,039</p>
            </div>
          </div>

          <div className="flex-amount">
            <div>
              <p>Amount of SSDX</p>
              <p>0</p>
            </div>
          </div>

          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter USDT Amount"
          />
          <a href="https://presale.spunkysdx.io/" target="_blank">
            <button>Buy SSDX</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default SpunkySale;
