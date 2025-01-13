import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import aziz from '../../assets/images/azizpolat.webp'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { IoHome } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={aziz} alt="logo" />
        <h4 className="aziz">Aziz Polat</h4>
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <IoHome color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FaUser color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FaEnvelope color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/abdulazizpolat/"
          >
            <FaLinkedin color="4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/azizpolat"
          >
            <FaGithub color="4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
