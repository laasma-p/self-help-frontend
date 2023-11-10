import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import SignUp from "./containers/SignUp/SignUp";
import Login from "./containers/Login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
