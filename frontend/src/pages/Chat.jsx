import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import  Sidebar  from "../components/Sidebar";

function Chat() {
  const [Username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadWorkspace() {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:3000/auth-middleware", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }

        if (!response.ok) {
          navigate("/server-error");
          return;
        }

        const data = await response.json();
        setUsername(data.user.username);
        console.log(data);
      } catch (error) {
        // Express isn't running or another network error occurred
        navigate("/server-error");
      }
    }

    loadWorkspace();
  }, []);

  return (
    <>
      <div className="h-screen flex">
        <Sidebar username={Username} />
      </div>
    </>
  );
}

export default Chat;
