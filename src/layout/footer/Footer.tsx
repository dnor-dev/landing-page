"use client";
import Image from "next/image";
import Link from "next/link";

interface DataType {
  id: number;
  class_name: string;
  title: string;
  footer_link: {
    link: string;
    link_title: string;
  }[];
}

const Footer = () => {
  return (
    <footer>
      <div
        className="footer-area footer-bg"
        style={{ backgroundImage: `url(/assets/img/bg/footer_bg.png)` }}
      >
        <div className="container">
          <div className="footer-top">
            <h6>SpunkySDX</h6>
            <p>
              The meme with purpose, transforming the meme and crypto spaces
              with <br /> real world value and cutting edge technology.
            </p>
            <div className="spunky_contact">
              <div className="footer-links">
                <p>&copy; 2023, punkySDX All rights reserved</p>
                <Link href="/#" passHref>
                  Terms of use
                </Link>
                <Link href="/#" passHref>
                  Privacy Policy
                </Link>
                <Link href="/#" passHref>
                  FAQ
                </Link>
              </div>

              <div className="contact-link-icons">
                <a href="https://discord.gg/Wy9QxKbcZ6" target="_blank">
                  <i className="fa-brands fa-discord"></i>
                </a>
                <a href="https://twitter.com/spunkysdx" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://t.me/+4Ya-gSpR3mkyNDZh" target="_blank">
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <a href="https://medium.com/@spunkysdx" target="_blank">
                  <i className="fa-brands fa-medium"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100095265556525&mibextid=2JQ9oc"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-text">
                  <p>
                    Disclaimer: Nothing posted or said on this account is to be
                    taken as financial advice or an endorsement. Anyone
                    considering investing in a project that has featured on the
                    account should first undertake their own research before
                    deciding whether or not to invest. It is imperative never to
                    make any hasty investment decisions. It is also important to
                    note that when investing in cryptocurrencies, your capital
                    is at risk due to the lack of regulation and volatility.
                    Cryptocurrencies are also highly speculative by nature. This
                    all means that whilst the value of investments can go up,
                    they can also go down. Any profits made from investments are
                    also subject to capital gains tax.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
