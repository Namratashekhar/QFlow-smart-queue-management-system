import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Home.css";
import { getCurrentUser } from "../../util";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <div className="home-page">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to QFlow</h1>

          <h2>
            Skip the Line, Save Your Time
          </h2>

          <p>
            Join queues online and check your queue status
            without waiting in long lines.
          </p>

          {user ? (
            <h3>Hello, {user.name}! 👋</h3>
          ) : (
            <h3>Welcome Guest! 👋</h3>
          )}

          <Link to="/services" className="home-button">
            Join Queue
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">

        <h2>How QFlow Works</h2>

        <div className="steps">

          <div className="step">
            <h3>1. Choose Service</h3>
            <p>
              Select Hospital, Restaurant, Salon or Bank.
            </p>
          </div>

          <div className="step">
            <h3>2. Join Queue</h3>
            <p>
              Get your queue number instantly.
            </p>
          </div>

          <div className="step">
            <h3>3. Track Queue</h3>
            <p>
              Check people ahead and waiting time.
            </p>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="home-services">

        <h2>Our Services</h2>

        <div className="service-list">

          <div className="service-card">
            <h3>🏥 Hospital</h3>
            <p>Manage your hospital queue easily.</p>
          </div>

          <div className="service-card">
            <h3>🍽️ Restaurant</h3>
            <p>Join restaurant queues online.</p>
          </div>

          <div className="service-card">
            <h3>💇 Salon</h3>
            <p>Save time while waiting for your turn.</p>
          </div>

          <div className="service-card">
            <h3>🏦 Bank</h3>
            <p>Track your banking service queue.</p>
          </div>

        </div>

        <Link to="/services" className="view-button">
          View Services
        </Link>

      </section>

    </div>
  );
}

export default Home;