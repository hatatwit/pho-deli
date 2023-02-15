import { Link } from "react-scroll";
import "./styles.css";

export default function Navbar() {
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
      <div className="left-navbar">
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
      <div className="right-navbar">
        <a href="https://www.ubereats.com/store/pho-deli/jTqbqnv6TNSRzegfi_xkmg">
          Delivery
        </a>
        <a href="#languages">EN</a>
      </div>
    </div>
  );
}
