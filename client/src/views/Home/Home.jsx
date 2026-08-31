import { useEffect,useState } from "react";
import "./Home.css";
import { getCurrentUser } from "../../util";

function Home() {
  const [user,setUser] = useState(null);

   useEffect(() => {
   setUser(getCurrentUser());
   }, []);

  return (
    <div>
      <h1>Home</h1>

      {
        user ? `Hello ${user.name}` : `Welcome Guest!`
      }
    </div>
  );
}

export default Home;
