import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Home.css";
import { getCurrentUser } from "../../util";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">

          <div className="hero-text">
            <span className="hero-badge">
              Smart Queue Management
            </span>

            <h1>
              Skip the Line.
              <span> Save Your Time.</span>
            </h1>

            <p>
              Join queues online, track your position in real time,
              and spend less time waiting. QFlow makes waiting
              simple, smart, and stress-free.
            </p>

            {user ? (
              <h3 className="welcome-text">
                Hello, {user.name}! 👋
              </h3>
            ) : (
              <h3 className="welcome-text">
                Welcome to QFlow! 👋
              </h3>
            )}

            <div className="hero-buttons">
              <Link to="/services" className="primary-btn">
                Join a Queue
                <span>→</span>
              </Link>

              <Link to="/about" className="secondary-btn">
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero-visual">
            <div className="queue-card">

              <div className="queue-card-header">
                <div>
                  <small>YOUR QUEUE</small>
                  <h3>Hospital</h3>
                </div>

                <div className="live-dot">
                  <span></span>
                  Live
                </div>
              </div>

              <div className="queue-number">
                <small>Queue Number</small>
                <strong>Q-24</strong>
              </div>

              <div className="queue-info">

                <div className="info-box">
                  <span>Currently Serving</span>
                  <strong>Q-18</strong>
                </div>

                <div className="info-box">
                  <span>People Ahead</span>
                  <strong>5</strong>
                </div>

              </div>

              <div className="wait-time">
                <span>Estimated Wait Time</span>
                <strong>25 min</strong>
              </div>

              <div className="progress-area">
                <div className="progress-label">
                  <span>Queue Progress</span>
                  <span>75%</span>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>

            </div>

            {/* Floating Cards */}
            <div className="floating-card people-card">
              <div className="floating-icon">👥</div>
              <div>
                <strong>120+</strong>
                <small>People served</small>
              </div>
            </div>

            <div className="floating-card time-card">
              <div className="floating-icon">⏱</div>
              <div>
                <strong>30 min</strong>
                <small>Time saved</small>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">

        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Queue Management Made Easy</h2>
          <p>
            Get your place in line without standing in one.
          </p>
        </div>

        <div className="steps-container">

          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon">🔍</div>
            <h3>Choose a Service</h3>
            <p>
              Select the service you need from hospitals,
              restaurants, salons, banks and more.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon">🎟️</div>
            <h3>Join the Queue</h3>
            <p>
              Get your queue number instantly and avoid
              waiting physically in a long line.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon">📱</div>
            <h3>Track Your Queue</h3>
            <p>
              See your position, people ahead and estimated
              waiting time in real time.
            </p>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="services-section">

        <div className="section-heading">
          <span>OUR SERVICES</span>
          <h2>One Platform, Multiple Services</h2>
          <p>
            Manage your waiting time across different services.
          </p>
        </div>

        <div className="service-preview">

          <div className="service-box">
            <div className="service-icon">🏥</div>
            <h3>Hospital</h3>
            <p>Join hospital queues without waiting in line.</p>
          </div>

          <div className="service-box">
            <div className="service-icon">🍽️</div>
            <h3>Restaurant</h3>
            <p>Reserve your place and wait comfortably.</p>
          </div>

          <div className="service-box">
            <div className="service-icon">💇</div>
            <h3>Salon</h3>
            <p>Track your appointment queue easily.</p>
          </div>

          <div className="service-box">
            <div className="service-icon">🏦</div>
            <h3>Bank</h3>
            <p>Save time while waiting for banking services.</p>
          </div>

        </div>

        <div className="view-services">
          <Link to="/services">
            View All Services →
          </Link>
        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Skip the Line?</h2>

          <p>
            Join QFlow today and make waiting a thing of the past.
          </p>

          <Link to="/services" className="cta-button">
            Get Started →
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;