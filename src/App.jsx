import { useState } from "react";

import "./App.css";
import { HeaderNavbar } from "./Components/HeaderNavbar";
import { Home } from "./Components/Home";
import { Route, Routes } from "react-router";
import { Articles } from "./Components/ArticleComponents/Articles";
import { Comments } from "./Components/Comments Components/Comments";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { SingalArticle } from "./Components/Singal Article Components/SingalArticle";
function App() {
  return (
    <>
      <HeaderNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/find-article" element={<SingalArticle />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
