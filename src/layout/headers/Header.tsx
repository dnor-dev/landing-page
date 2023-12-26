"use client";
import Link from "next/link";
import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import NavMenu from "./Menu/NavMenu";
import Sidebar from "./Menu/Sidebar";
import HeaderOffcanvas from "./Menu/HeaderOffcanvas";

const Header = () => {
  const { sticky } = UseSticky();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [offCanvas, setOffCanvas] = useState<boolean>(false);

  return (
    <>
      <header id="header">
        <div
          id="sticky-header"
          className={`menu-area transparent-header ${
            sticky ? "sticky-menu" : ""
          }`}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/SPDX-Logo.png"
                          alt="Logo"
                          className="logo"
                        />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <NavMenu />
                    </div>
                    <div className="header-action">
                      <ul className="list-wrap">
                        <li className="header-login">
                          <Link href="/">Login</Link>
                        </li>
                        <li className="header-signup">
                          <Link href="/">Signup</Link>
                        </li>
                      </ul>
                      <div className="offcanvas-menu">
                        <a
                          // onClick={() => setOffCanvas(true)}
                          style={{ cursor: "pointer" }}
                          className="menu-tigger"
                          title="Launch App"
                          href="https://spunkysdx.io/"
                          target="_blank"
                        >
                          <i className="feat-icon fa-solid fa-rocket"></i>{" "}
                        </a>
                      </div>
                    </div>

                    <div
                      onClick={() => setIsActive(true)}
                      className="mobile-nav-toggler"
                    >
                      <i className="fas fa-bars"></i>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar style={false} isActive={isActive} setIsActive={setIsActive} />
      <HeaderOffcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
    </>
  );
};

export default Header;
