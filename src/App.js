import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/index";
import Navbar from "./components/Navbar";
// import Contact from "./components/Contact";
import GlobalStyle from "./Global.style";
import techs from "./Techs";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage techs={techs} />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}
