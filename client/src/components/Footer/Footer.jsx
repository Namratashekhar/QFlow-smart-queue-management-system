import "./Footer.css";
import {MapPin,Mail,Phone} from 'lucide-react';
import logo from "../Navbar/logo.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section-1">

          <div className="logo-container">
          <img src={logo} alt="QFlow Logo"className="footer-logo" />
            <b className="project-name">QFlow</b>
           </div>

<p> QFlow makes queue management simple. Join queues online, get your queue number, and track your status without waiting in long lines. </p>
        </div>

        <div className="footer-section-2">

          <b className="project-name">
            Quick Links
          </b>

          <ul>
            <li>
              <a href="/" className="menu-subitem">
                Home
              </a>
            </li>

            <li>
              <a href="/about" className="menu-subitem">
                About
              </a>
            </li>

            <li>
              <a href="/services" className="menu-subitem">
                Services
              </a>
            </li>

            <li>
              <a href="/myqueue" className="menu-subitem">
                My Queue
              </a>
            </li>
            </ul>

        </div>

        <div className="footer-section-3">

          <b className="project-name">
            Our Services
          </b>

          <ul>
            <li>Hospital Queue</li>
            <li>Restaurant Queue</li>
            <li>Salon Queue</li>
            <li>Bank Queue</li>
            <li>Online Queue Tracking</li>
          </ul>

        </div>

        <div className="footer-section-4">

          <b className="project-name">
            Contact
          </b>

          <div className="contact-item">
            <span className="contact-icon"><MapPin /></span>
            <span>
              Smart Queue Management System
            </span>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><Mail /></span>
            <span>
              support@qflow.com
            </span>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><Phone /></span>
            <span>
              +91 98765 43210
            </span>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {year} QFlow. All rights reserved.
        </p>

        <p>
          Smart Queue Management System
        </p>
      </div>

    </footer> 
  );
}

export default Footer;
