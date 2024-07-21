import { Route, Routes } from "react-router-dom";
import "../assets/styles/App.css";
import Header from "./Header";
import Aside from "./Aside";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      <Header />

      <Aside />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
