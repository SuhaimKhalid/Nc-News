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
      <Row style={{ justifyContent: "center" }}>
        <Col sm={12} lg={4}>
          <div className="add-form-div login-form">
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                  Select A User
                </Form.Label>
                <Col sm="8">
                  <Form.Select
                    aria-label="Select Order"
                    value={userName || ""}
                    onChange={userSelectHandler}
                  >
                    <option value="" disabled>
                      --Select User--
                    </option>
                    {users.map((user, index) => {
                      return (
                        <option value={user.name} key={index}>
                          {user.name}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};
