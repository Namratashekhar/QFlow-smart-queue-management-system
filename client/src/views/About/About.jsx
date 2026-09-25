import { Link } from "react-router";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";

function About() {
  return (
    <div className="about-page">

      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section className="about-section">

        <div className="about-content">

          <h1>About QFlow</h1>

          <p className="about-intro">
            QFlow is a smart queue management system that helps
            people join queues online and save their valuable time.
          </p>

          <p>
            Instead of standing in long queues, users can select a
            service, get a queue number and check their position
            from anywhere.
          </p>

          <Link to="/services" className="about-button">
            Explore Services
          </Link>

        </div>

      </section>

      {/* Features */}
      <section className="features-section">

        <h2>Why Use QFlow?</h2>

        <div className="features">

          <div className="feature-card">
            <h3>⏱ Save Time</h3>
            <p>
              Spend less time waiting in physical queues.
            </p>
          </div>

          <div className="feature-card">
            <h3>🎟 Easy Queue</h3>
            <p>
              Join a queue online with just a few clicks.
            </p>
          </div>

          <div className="feature-card">
            <h3>📱 Track Queue</h3>
            <p>
              Check your queue number and people ahead easily.
            </p>
          </div>

          <div className="feature-card">
            <h3>🏢 Multiple Services</h3>
            <p>
              Use QFlow for hospitals, restaurants, salons and banks.
            </p>
          </div>

        </div>

      </section>

      {/* Mission */}
      <section className="mission-section">

        <h2>Our Mission</h2>

        <p>
          Our mission is to make queue management simple,
          convenient and efficient for everyone.
        </p>

      </section>

    </div>
  );
}

export default About;