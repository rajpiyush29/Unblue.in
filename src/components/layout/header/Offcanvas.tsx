import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";
import { useEffect, useState } from "react";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
}

const Offcanvas = ({ openNav, setOpenNav }: HeaderProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " nav__dropdown-active" : " ";
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " navbar__item-active" : " ";
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? " nav__dropdown-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " navbar__item-active" : " ";
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, [setOpenNav]);

  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  return (
    <div className="offcanvas-nav">
      <div
        className={"offcanvas-menu" + (openNav ? " show-offcanvas-menu" : " ")}
      >
        <nav className="offcanvas-menu__wrapper" data-lenis-prevent>
          <div className="offcanvas-menu__header nav-fade">
            <div className="logo">
              <Link href="/">
                <Image src={logo} alt="Image" title="Image" priority />
              </Link>
            </div>
            <button
              aria-label="close offcanvas menu"
              className="close-offcanvas-menu"
              onClick={closeNav}
            >
              <i className="fa-light fa-xmark-large"></i>
            </button>
          </div>
          <div className="offcanvas-menu__list">
            <div className="navbar__menu">
              <ul>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "home"
                    )}`}
                    onClick={() => handleSubmenu("home")}
                  >
                    Home
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("home")}`}>
                    <li>
                      <Link href="/">Creative Agency</Link>
                    </li>

                    {/* <li> */}
                      {/* <Link href="index-two">UI Work</Link> */}
                    {/* </li> */}

                    {/* <li> */}
                      {/* <Link href="index-three">It Solution</Link> */}
                    {/* </li> */}

                    {/* <li>
                      <Link href="personal-portfolio">Personal Portfolio</Link>
                    </li> */}
                    {/* <li>
                      <Link href="work-samples">Work Samples</Link>
                    </li> */}
                  </ul>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "services"
                    )}`}
                    onClick={() => handleSubmenu("services")}
                  >
                    Services
                  </button>
                  <ul
                    className={`navbar__sub-menu ${isSubMenuOpen("services")}`}
                  >
                    <li>
                      <Link href="our-services">Our Services</Link>
                    </li>
                    {/* <li>
                      <Link href="service-single">Service Details</Link>
                    </li> */}
                  </ul>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "projects"
                    )}`}
                    onClick={() => handleSubmenu("projects")}
                  >
                    Portfolio
                  </button>
                  <ul
                    className={`navbar__sub-menu ${isSubMenuOpen("projects")}`}
                  >
                    <li>
                      <Link href="portfolio">Our Portfolio</Link>
                    </li>
                    {/* <li>
                      <Link href="project-single">Project Details</Link>
                    </li> */}
                  </ul>
                </li>
                <li className="navbar__item nav-fade">
                  <Link href="about-us">About Us</Link>
                </li>
                <li className="navbar__item nav-fade">
                        <Link href="https://iri-s.com/">Fundraising Consultant</Link>
                      </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "pages"
                    )}`}
                    onClick={() => handleSubmenu("pages")}
                  >
                    FAQs & Team
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("pages")}`}>
                    <li>
                      <Link href="faq">FAQs</Link>
                    </li>
                    {/* <li>
                      <Link href="our-story">Our Story</Link>
                    </li> */}
                    <li className="navbar__item navbar__item--has-children">
                      <button
                        aria-label="dropdown menu"
                        className={`navbar__dropdown-label navbar__dropdown-label-sub ${isNestedMenuButton(
                          "team"
                        )}`}
                        onClick={() => handleNestedmenu("team")}
                      >
                        Team
                      </button>
                      <ul
                        className={`navbar__sub-menu navbar__sub-menu__nested ${isNestedMenuOpen(
                          "team"
                        )}`}
                      >
                        <li>
                          <Link href="our-teams">Our Teams</Link>
                        </li>
                        {/* <li>
                          <Link href="team-single">Team Details</Link>
                        </li> */}
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
                    className={`navbar__dropdown-label navbar__dropdown-label-sub ${isSubMenuButton(
                      "blog"
                    )}`}
                    onClick={() => handleSubmenu("blog")}
                  >
                    Blog
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("blog")}`}>
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
          </div>
          <div className="offcanvas-menu__options nav-fade">
            <div className="offcanvas__mobile-options d-flex">
              <Link
                href="https://calendly.com/piyushraj_unblue/marketing-consultation"
                className="btn btn--secondary"
                target="_blank"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
          <div className="offcanvas-menu__social social nav-fade">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="share us on facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            {/* <Link
              href="https://www.twitter.com/"
              target="_blank"
              aria-label="share us on twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link> */}
            <Link
              href="https://www.linkedin.com/company/unblue-consultation/"
              target="_blank"
              aria-label="share us on Linkedln"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link
              //done
              href="https://www.instagram.com/unblue.in"
              target="_blank"
              aria-label="share us on instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Offcanvas;
