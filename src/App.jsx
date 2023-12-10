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
import Skills from "./components/Skills/Skills";
import DiaryCard from "./containers/DiaryCard/DiaryCard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [problems, setProblems] = useState([]);
  const [therapyGoals, setTherapyGoals] = useState([]);
  const [physicalGoals, setPhysicalGoals] = useState([]);
  const [values, setValues] = useState([]);
  const [boundaries, setBoundaries] = useState([]);
  const [diaryCards, setDiaryCards] = useState([]);

  const handleLogin = (status) => {
    setIsAuthenticated(status);

    if (status) {
      fetchProblems();
      fetchTherapyGoals();
      fetchPhysicalGoals();
      fetchValues();
      fetchBoundaries();
      fetchDiaryCards();
    }
  };

  const fetchProblems = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!userId) {
        console.error("User is not authenticated. Cannot fetch problems.");
        return;
      }

      const response = await axios.get(
        `http://localhost:3000/problems/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProblems(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchTherapyGoals = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!userId) {
        console.error("User is not authenticated. Cannot fetch therapy goals.");
        return;
      }

      const response = await axios.get(
        `http://localhost:3000/therapy-goals/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTherapyGoals(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchPhysicalGoals = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!userId) {
        console.error(
          "User is not authenticated. Cannot fetch physical goals."
        );
        return;
      }

      const response = await axios.get(
        `http://localhost:3000/physical-goals/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPhysicalGoals(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchValues = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!userId) {
        console.error("User is not authenticated. Cannot fetch values.");
        return;
      }

      const response = await axios.get(
        `http://localhost:3000/values/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setValues(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchBoundaries = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!userId) {
        console.error("User is not authenticated. Cannot fetch boundaries.");
        return;
      }

      const response = await axios.get(
        `http://localhost:3000/boundaries/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBoundaries(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchDiaryCards = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!userId) {
        console.error("User is not authenticated. Cannot fetch boundaries.");
        return;
      }

      const response = await axios.get(
        `http://localhost:3000/diary-cards/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDiaryCards(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      setIsAuthenticated(true);
      fetchProblems();
      fetchTherapyGoals();
      fetchPhysicalGoals();
      fetchValues();
      fetchBoundaries();
      fetchDiaryCards();
    }
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
          element={
            isAuthenticated && (
              <Problems
                problems={problems}
                fetchUpdatedProblems={fetchProblems}
              />
            )
          }
        />
        <Route
          path="/therapy-goals"
          element={
            isAuthenticated && (
              <TherapyGoals
                therapyGoals={therapyGoals}
                fetchUpdatedTherapyGoals={fetchTherapyGoals}
              />
            )
          }
        />
        <Route
          path="/physical-goals"
          element={
            isAuthenticated && (
              <PhysicalGoals
                physicalGoals={physicalGoals}
                fetchUpdatedPhysicalGoals={fetchPhysicalGoals}
              />
            )
          }
        />
        <Route
          path="/values"
          element={
            isAuthenticated && (
              <Values values={values} fetchUpdatedValues={fetchValues} />
            )
          }
        />
        <Route
          path="/boundaries"
          element={
            isAuthenticated && (
              <Boundaries
                boundaries={boundaries}
                fetchUpdatedBoundaries={fetchBoundaries}
              />
            )
          }
        />
        <Route
          path="/diary-cards"
          element={
            isAuthenticated && (
              <DiaryCard
                diaryCards={diaryCards}
                fetchUpdatedDiaryCards={fetchDiaryCards}
              />
            )
          }
        />
        <Route path="/skills" element={isAuthenticated && <Skills />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </>
  );
};

export default App;
