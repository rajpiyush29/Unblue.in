import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";
import logoLight from "public/images/logo-light.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar cmn-nav";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === "/index-two-light") {
    logoSrc = logoLight;
  }

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image src={logoSrc} priority alt="Image" />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          Home
                        </button>
                        <ul className="navbar__sub-menu navbar__sub-menu--lg">
                          <li>
                            <Link href="/">Creative Agency</Link>
                          </li>
                          {/* <li>
                            <Link href="index-light">
                              Creative Agency Light
                            </Link>
                          </li> */}
                          {/* <li>
                            <Link href="index-two-light">
                              Digital Agency Light
                            </Link>
                          </li> */}
                          {/* <li>
                            <Link href="index-three-light">
                              It Solution Light
                            </Link>
                          </li> */}
                          {/* <li>
                            <Link href="personal-portfolio">Personal Portfolio</Link>
                          </li> */}
                          {/* <li>
                            <Link href="index-four-light">
                              Personal Portfolio Light
                            </Link>
                          </li> */}
                          {/* <li>
                            <Link href="work-samples">Work Samples</Link>
                          </li> */}

                          {/* <li>
                            <Link href="index-five-light">
                              Interactive Portfolio Light
                            </Link>
                          </li> */}
                        </ul>
                      </li>

                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          Services
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-services">Our Services</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          Portfolio
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="portfolio">Our Portfolio</Link>
                          </li>
                        </ul>
                      </li>
                      {/* <li className="navbar__item navbar__item--has-children nav-fade"> */}
                      <li className="navbar__item nav-fade m-lg-4">
                        <Link
                          href="https://iri-s.com/"
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"  
                        >
                          Fundraising Consultant
                        </Link>
                        {/* <ul className="navbar__sub-menu">
                          <li>
                            <Link href="https://iri-s.com/">Connect Now </Link>
                          </li>
                        </ul> */}
                      </li>

                      <li className="navbar__item nav-fade m-lg-4">
                      
                      <Link
                          href="about-us"
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"  
                        >
                          About Us
                        </Link>
                        {/* <Link href="about-us">About Us</Link> */}
                      </li>

                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          FAQs & Team
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="faq">FAQs</Link>
                          </li>
                          {/* <li>
                            <Link href="our-story">Our Story</Link>
                          </li> */}
                          <li className="navbar__item navbar__item--has-children">
                            <button
                              aria-label="dropdown menu"
                              className="navbar__dropdown-label navbar__dropdown-label-sub"
                            >
                              Team
                            </button>
                            <ul className="navbar__sub-menu navbar__sub-menu__nested">
                              <li>
                                <Link href="our-teams">Our Teams</Link>
                              </li>
                            </ul>
                          </li>
                          {/* <li>
                            <Link href="client-feedback">Client FeedBack</Link>
                          </li> */}
                          <li>
                            <Link href="contact-us">Contact Us</Link>
                          </li>
                        </ul>
                      </li>
                      {/* <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          Blog
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="blog">Blog</Link>
                          </li>
                          <li>
                            <Link href="blog-single">Blog Details</Link>
                          </li>
                        </ul>
                      </li> */}
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      <Link
                        href="https://calendly.com/piyushraj_unblue/marketing-consultation"
                        className="btn btn--secondary"
                        target="_blank"
                      >
                        Let&apos;s Talk
                      </Link>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderTwo;
