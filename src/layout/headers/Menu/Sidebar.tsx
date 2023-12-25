"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Sidebar = ({ isActive, setIsActive }: any) => {
  return (
    <div className={` ${isActive ? "mobile-menu-visible" : ""}`}>
      <div className="mobile-menu">
        <nav className="menu-box">
          <div onClick={() => setIsActive(false)} className="close-btn">
            <i className="fas fa-times"></i>
          </div>
          <div className="nav-logo">
            <Link href="/">
              <img
                src="/assets/img/logo/SPDX-Logo.png"
                alt="Logo"
                className="logo-nav-mobile"
              />
            </Link>
          </div>
          <div className="menu-outer">
            <MobileMenu setIsActive={setIsActive} />
          </div>
          <div className="social-links">
            <ul className="clearfix list-wrap">
              <li>
                {" "}
                <a href="https://discord.gg/Wy9QxKbcZ6" target="_blank">
                  <i className="fa-brands fa-discord"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/spunkysdx" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://t.me/+4Ya-gSpR3mkyNDZh" target="_blank">
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100095265556525&mibextid=2JQ9oc"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://medium.com/@spunkysdx" target="_blank">
                  <i className="fa-brands fa-medium"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div onClick={() => setIsActive(false)} className="menu-backdrop"></div>
    </div>
  );
};

export default Sidebar;
