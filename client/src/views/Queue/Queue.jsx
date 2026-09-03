import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import "./Queue.css";

function Queue() {

  const { serviceId } = useParams();a

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

        setMessage("Please login first");

        navigate("/login");

        return;
      }


      console.log("User ID:", user._id);

      console.log("Service ID:", serviceId);


      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/queue`,
        {
          user: user._id,
          serviceId: Number(serviceId)
        }
      );


      console.log("Queue response:", response.data);


      localStorage.setItem(
        "queue",
        JSON.stringify(response.data.queue)
      );


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
          You are joining service #{serviceId}
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