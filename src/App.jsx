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
import PhysicalGoals from "./components/PhysicalGoals/PhysicalGoals";
import Values from "./components/Values/Values";
import Boundaries from "./components/Boundaries/Boundaries";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [problems, setProblems] = useState([]);
  const [therapyGoals, setTherapyGoals] = useState([]);
  const [physicalGoals, setPhysicalGoals] = useState([]);
  const [values, setValues] = useState([]);
  const [boundaries, setBoundaries] = useState([]);

  const handleLogin = (status) => {
    setIsAuthenticated(status);

    if (status) {
      fetchProblems();
      fetchTherapyGoals();
      fetchPhysicalGoals();
      fetchValues();
      fetchBoundaries();
    }
  };

  const fetchProblems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/problems/");

      setProblems(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchTherapyGoals = async () => {
    try {
      const response = await axios.get("http://localhost:3000/therapy-goals/");

      setTherapyGoals(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchPhysicalGoals = async () => {
    try {
      const response = await axios.get("http://localhost:3000/physical-goals/");

      setPhysicalGoals(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchValues = async () => {
    try {
      const response = await axios.get("http://localhost:3000/values/");

      setValues(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchBoundaries = async () => {
    try {
      const response = await axios.get("http://localhost:3000/boundaries/");

      setBoundaries(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchProblems();
    fetchTherapyGoals();
    fetchPhysicalGoals();
    fetchValues();
    fetchBoundaries();
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
          element={
            isAuthenticated && <TherapyGoals therapyGoals={therapyGoals} />
          }
        />
        <Route
          path="/physical-goals"
          element={
            isAuthenticated && <PhysicalGoals physicalGoals={physicalGoals} />
          }
        />
        <Route
          path="/values"
          element={isAuthenticated && <Values values={values} />}
        />
        <Route
          path="/boundaries"
          element={isAuthenticated && <Boundaries boundaries={boundaries} />}
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </>
  );
};

export default App;
