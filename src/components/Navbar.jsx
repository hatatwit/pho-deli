import { useState } from "react";
import { Link } from "react-scroll";
import "./styles.css";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Pho Deli
        </Link>
      </div>
      <button className="hamburger" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? (
          <i class="fa-solid fa-xmark"></i>
        ) : (
          <i class="fa-solid fa-bars"></i>
        )}
      </button>
      <div
        className={navOpen ? "navbar-mobile" : "navbar-desktop"}
        onClick={() => setNavOpen(false)}
      >
        <div className="left navlink">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="menu"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Menu
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </div>
        <div className="right navlink">
          <a href="https://www.ubereats.com/store/pho-deli/jTqbqnv6TNSRzegfi_xkmg">
            Delivery
          </a>
        </div>
      </div>
    </div>
  );
}
