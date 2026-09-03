import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./MyQueue.css";

function MyQueue() {
  const navigate = useNavigate();

  const [queue, setQueue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMyQueue = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
          navigate("/login");
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/myqueue/${user._id}`
        );

        console.log("My Queue Response:", response.data);

        setQueue(response.data.queue);

      } catch (error) {
        console.log(
          "My Queue Error:",
          error.response?.data || error.message
        );

        setMessage(
          error.response?.data?.message ||
          "Unable to fetch queue"
        );

      } finally {
        setLoading(false);
      }
    };

    fetchMyQueue();
  }, [navigate]);


  if (loading) {
    return (
      <div className="myqueue-page">
        <div className="myqueue-container">
          <h1>My Queue</h1>
          <p className="loading">Loading...</p>
        </div>
      </div>
    );
  }

  if (!queue) {
    return (
      <div className="myqueue-page">

        <div className="myqueue-container">

          <h1>My Queue</h1>

          <div className="no-queue">

            <h2>No Active Queue</h2>

            <p>
              {message || "You have not joined any queue yet."}
            </p>

            <button
              onClick={() => navigate("/services")}
            >
              View Services
            </button>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="myqueue-page">

      <div className="myqueue-container">

        <h1>My Queue</h1>

        <div className="queue-card">

          <h2>{queue.serviceName}</h2>

          <div className="queue-number">

            <p>Your Queue Number</p>

            <h3>{queue.queueNumber}</h3>

          </div>

          <div className="queue-details">

            <div className="detail-box">

              <span>Currently Serving</span>

              <strong>
                {queue.currentlyServing}
              </strong>

            </div>


            <div className="detail-box">

              <span>People Ahead</span>

              <strong>
                {queue.peopleAhead}
              </strong>

            </div>


            <div className="detail-box">

              <span>Estimated Wait Time</span>

              <strong>
                {queue.estimatedWaitTime} min
              </strong>

            </div>


            <div className="detail-box">

              <span>Status</span>

              <strong className="status">
                {queue.status}
              </strong>

            </div>

          </div>


          <button
            className="back-button"
            onClick={() => navigate("/services")}
          >
            Back to Services
          </button>

        </div>

      </div>

    </div>
  );
}

export default MyQueue;