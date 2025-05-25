import { useEffect, useState } from "react";

import "./App.css";
import { HeaderNavbar } from "./Components/HeaderNavbar";
import { Home } from "./Components/Home";
import { Route, Routes } from "react-router";
import { Articles } from "./Components/ArticleComponents/Articles";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { GetUsers } from "../api";
import { LoginComponent } from "./Components/LoginComponent/LoginComponent";
import { ArticleDetails } from "./Components/ArticleComponents/ArticleDetails";
import { AppContext } from "./Components/AppContext";
import { TopicPage } from "./Components/Topic Components/TopicPage";
import { NotFound } from "./Components/NotFound";
function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  const [userName, setUserName] = useState("");

  const [loginshow, setLoginShow] = useState(true);
  useEffect(() => {
    GetUsers().then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <>
      <AppContext.Provider value={{ selectedUser }}>
        {loginshow ? (
          <LoginComponent
            setLoginShow={setLoginShow}
            setSelectedUser={setSelectedUser}
            userName={userName}
            setUserName={setUserName}
            users={users}
          />
        ) : (
          <main>
            <HeaderNavbar selectedUser={selectedUser} />
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route
                  path="/article/:id"
                  element={<ArticleDetails selectedUser={selectedUser} />}
                />
                <Route path="/articles/:slug" element={<TopicPage />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
          </main>
        )}
      </AppContext.Provider>
    </>
  );
}

export default App;
