import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/index";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import GlobalStyle from "./Global.style";
import Backend from "./Backend";
import Frontend from "./Frontend";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route
          path="/LandingPage"
          element={<LandingPage Backend={Backend} Frontend={Frontend} />}
        />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}
