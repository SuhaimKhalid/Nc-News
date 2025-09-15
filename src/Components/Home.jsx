import { Col, Row } from "react-bootstrap";
import { HomeCoding } from "./HomeComponents/HomeCoding";

export const Home = () => {
  return (
    <>
      <Row>
        <Col sm={12}>
          <section className="home_section">
            <h2>About This Project</h2>
            <p>
              This project was built as part of the Northcoders curriculum to
              demonstrate my skills in{" "}
              <strong>full-stack web development</strong> using{" "}
              <strong>
                React, JavaScript, Bootstrap, Node.js, Express, Axios, and
                PostgreSQL
              </strong>
              .
            </p>
            <p>
              The application is designed as a simplified news platform where
              existing users can log in and interact with articles. To keep the
              project focused on the core functionality, sign-up and account
              creation are intentionally skipped — instead, users are
              pre-defined and fetched directly from the database.
            </p>
            <h3>Features</h3>
            <ul>
              <li>
                <strong>User selection:</strong> Choose from existing users via
                a dropdown list.
              </li>
              <li>
                <strong>Browse articles:</strong> View all articles or filter by
                specific categories.
              </li>
              <li>
                <strong>Article details:</strong> Open individual articles to
                read more.
              </li>
              <li>
                <strong>Commenting system:</strong> Add comments on articles.
              </li>
              <li>
                <strong>Comment management:</strong> Delete only your own
                comments (not other users’).
              </li>
            </ul>
          </section>
        </Col>
        <Col xs={12}>
          <HomeCoding />
        </Col>
      </Row>
    </>
  );
};
