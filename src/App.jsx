import { useState } from "react";

import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Route, Routes } from "react-router";
import { Articles } from "./Components/Articles";
import { Comments } from "./Components/Comments";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
      <div className="container mx-auto px-4"></div>
    </>
  );
}

export default App;
