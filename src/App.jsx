import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import SignUp from "./containers/SignUp/SignUp";
import Login from "./containers/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Navigation from "./components/Navigation/Navigation";
import Problems from "./components/Problems/Problems";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <>
      {isAuthenticated && (
        <Navigation setIsAuthenticated={setIsAuthenticated} />
      )}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Hero />} />
        <Route path="/problems" element={isAuthenticated && <Problems />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </>
  );
};

export default App;
