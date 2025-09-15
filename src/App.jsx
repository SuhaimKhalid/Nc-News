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
import { Particle } from "./Particle";
import { SpinnerSection } from "./Components/SpinnerSection";
import { SpinnerForLogin } from "./Components/SpinnerForLogin";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  const [userName, setUserName] = useState("");

  const [loginshow, setLoginShow] = useState(true);
  const [waitUser, setWaitUser] = useState(false);

  useEffect(() => {
    GetUsers()
      .then((data) => {
        setUsers(data);
      })
      .finally(() => {
        setWaitUser(true);
      });
  }, [waitUser]);
  return (
    <>
      <AppContext.Provider value={{ selectedUser }}>
        {!waitUser ? (
          <>
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                zIndex: -1,
                background:
                  "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              }}
            >
              <Particle
                id="tsparticles"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100vh",
                  zIndex: -1,
                }}
              />
              <SpinnerForLogin />
            </div>
          </>
        ) : loginshow ? (
          <>
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                zIndex: -1,
                background:
                  "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              }}
            >
              <Particle
                id="tsparticles"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100vh",
                  zIndex: -1,
                }}
              />
              <LoginComponent
                setLoginShow={setLoginShow}
                setSelectedUser={setSelectedUser}
                userName={userName}
                setUserName={setUserName}
                users={users}
              />
            </div>
          </>
        ) : (
          <main>
            <div
              style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                background:
                  "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              }}
            >
              <Particle
                id="tsparticles"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -1,
                }}
              />
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
            </div>
          </main>
        )}
      </AppContext.Provider>
    </>
  );
}

export default App;
