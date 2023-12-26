"use client";
import Image from "next/image";
import Link from "next/link";
import bannerShape_2 from "@/assets/img/banner/heroImage.webp";

const Banner = () => {
  return (
    <section
      className="banner-area banner-bg"
      style={{ backgroundImage: `url(/assets/img/banner/banner_bg.png)` }}
    >
      <div className="container flex-banner">
        <div className="row justify-content-center">
          <div className="banner-content text-center">
            <h2 className="title">
              A Decentralized <br /> <span>AI Asset Tracking</span> <br />{" "}
              Platform
            </h2>
            <p>
              SpunkySDX leverages an inbuilt advanced Artificial
              Intelligence(AI)- based tool to track stolen cryptocurrency
              tokens/coins across different Ethereum Virtual Machine (EVM)
              compatible blockchains, from Decentralized wallets to Centralized
              Exchanges (CEX).
            </p>

            <ul className="list-wrap header-action">
              <li className="header-login">
                <Link href="/Spunkysdx_Whitepaper.pdf">WhitePaper</Link>
              </li>
              <li className="header-signup">
                <Link href="/#roadMap">Spunkymap</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="banner-shape-wrap">
          <Image src={bannerShape_2} alt="" className="alltuchtopdown" />
        </div>
      </div>
      <div className="banner-scroll-down">
        <a href="/#feature" className="section-link">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </section>
  );
};

export default Banner;
