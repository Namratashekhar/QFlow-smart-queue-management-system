import { Link } from "react-router";
import "./Services.css";

import hospital from "./hospital.jpg";
import restaurant from "./restaurant.jpg";
import salon from "./salon.jpg";
import bank from "./bank.jpg";

function Services() {

  const services = [
    {
      id: 1,
      name: "Hospital",
      description: "Join hospital queues and reduce your waiting time.",
      image: hospital
    },
    {
      id: 2,
      name: "Restaurant",
      description: "Join the restaurant queue and know your waiting time.",
      image: restaurant
    },
    {
      id: 3,
      name: "Salon",
      description: "Book your place in the salon queue before you arrive.",
      image: salon
    },
    {
      id: 4,
      name: "Bank",
      description: "Join banking service queues and avoid long waiting.",
      image: bank
    },
  ];


  return (
    <div className="services-page">

      <section className="services-header">

        <h1>Choose Your Service</h1>

        <p>
          Select a service and join the queue without waiting in long lines.
        </p>

      </section>


      <section className="services-container">

        {services.map((service) => (

          <div className="service-card" key={service.id}>

            <img
              src={service.image}
              alt={service.name}
              className="service-image"
            />

            <div className="service-content">

              <h2>{service.name}</h2>

              <p>
                {service.description}
              </p>

              <Link
                to={`/queue/${service.id}`}
                className="join-queue-btn"
              >
                Join Queue
              </Link>

            </div>
          </div>

        ))}
      </section>
    </div>
  );
}

export default Services;