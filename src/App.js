import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.page";
import Commands from "./pages/Commands.page";
import Contact from "./pages/Contact.page";
import Developers from "./pages/Developers.page";
import Header from "./components/Header.component";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commands" element={<Commands />} />
          <Route path="/dev" element={<Developers />} />
          <Route path="/docs" element={<Header />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
