import { Form, Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";

export const LoginComponent = ({
  setSelectedUser,
  userName,
  users,
  setUserName,
  setLoginShow,
}) => {
  function userSelectHandler(e) {
    const userChoice = e.target.value;
    setUserName(userChoice);
  }
  useEffect(() => {
    if (userName !== "") {
      setSelectedUser(users.find((user) => user.name === userName));
      setLoginShow(false);
    }
  }, [userName]);

  return (
    <>
      <section className="login-section">
        <Row className="justify-content-center align-items-center vh-100 m-0">
          <Col sm={12} lg={4}>
            <div className="login-form-wrapper">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Select A User to Login</Form.Label>
                  <Form.Select
                    aria-label="Select Order"
                    value={userName || ""}
                    onChange={userSelectHandler}
                  >
                    <option value="" disabled>
                      --Select User--
                    </option>
                    {users.map((user, index) => (
                      <option value={user.name} key={index}>
                        {user.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};
