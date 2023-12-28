"use client";
import React, { useState } from "react";
import Image from "next/image";
import presaleimg from "@/assets/img/banner/pres-image.svg";

const SpunkySale = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    setIsCopied(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="container">
      <section className="spunky_sale">
        <div className="first-section">
          <p>SSDX Token</p>
          <h2>Spunky Presale</h2>
          <p>
            SpunkySDX leverages advanced AI technology to actively track and
            monitor stolen asset on the EVM chain.
          </p>
          {/* <div className="copy">
            <p>0x96DE8aF54...1C3036119b6623648580438</p>
            {isCopied ? (
              <i className="fa-solid fa-check"></i>
            ) : (
              <i
                className="fa-regular fa-copy"
                onClick={() =>
                  handleCopy("0x96DE8aF54...1C3036119b6623648580438")
                }
              ></i>
            )}
          </div> */}
          <a href="https://presale.spunkysdx.io/" target="_blank">
            <button>
              Buy SSDX <i className="fa-solid fa-chevron-right"></i>
            </button>
          </a>
        </div>

        <div className="second-section">
          <Image src={presaleimg} alt="" className="alltuchtopdown" />
          {/* <h6>
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
          </a> */}
        </div>
      </section>
    </div>
  );
};

export default SpunkySale;
