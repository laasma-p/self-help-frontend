import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Hero from "./components/Hero/Hero";
import SignUp from "./containers/SignUp/SignUp";
import Login from "./containers/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Navigation from "./components/Navigation/Navigation";
import Problems from "./components/Problems/Problems";
import TherapyGoals from "./components/TherapyGoals/TherapyGoals";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [problems, setProblems] = useState([]);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  const fetchProblems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/problems/");

      setProblems(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  return (
    <>
      {isAuthenticated && (
        <Navigation setIsAuthenticated={setIsAuthenticated} />
      )}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Hero />} />
        <Route
          path="/problems"
          element={isAuthenticated && <Problems problems={problems} />}
        />
        <Route
          path="/therapy-goals"
          element={isAuthenticated && <TherapyGoals />}
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </>
  );
};

export default App;
