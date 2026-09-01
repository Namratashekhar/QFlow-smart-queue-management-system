import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import "./Queue.css";

function Queue() {

  const { serviceId } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");


  const joinQueue = async () => {

    try {

      setLoading(true);
      setMessage("");


      const user = JSON.parse(
        localStorage.getItem("user")
      );


      if (!user) {

        setMessage("Please login first.");

        navigate("/login");

        return;
      }


      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/queue/${service._id}`,
        {
          user: user._id,
          service: serviceId
        }
      );


      console.log(response.data);


      // Save queue
      localStorage.setItem(
        "queue",
        JSON.stringify(response.data.queue)
      );


      // Go to My Queue
      navigate("/myqueue");


    } catch (error) {

      console.log(
        error.response?.data || error.message
      );

      setMessage(
        error.response?.data?.message ||
        "Unable to join queue"
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <div className="queue-page">

      <div className="queue-container">

        <h1>Join Queue</h1>

        <p>
          Ready to join this service queue?
        </p>


        {message && (
          <p className="queue-message">
            {message}
          </p>
        )}


        <button
          className="join-queue-button"
          onClick={joinQueue}
          disabled={loading}
        >
          {loading
            ? "Joining..."
            : "Join Queue"}
        </button>

      </div>

    </div>
  );
}

export default Queue;