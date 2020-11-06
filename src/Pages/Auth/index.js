import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "../../Store";
import { RegistrationForm, LoginForm } from "../../Components/Forms";

export default function Authentication() {
  const [login, setLogin] = useState(true);
  const dispatch = useDispatch();

  console.log("AUTHPAGE RENDERING...");
  return (
    <>
      {/* <div className="col d-flex justify-content-center"> */}
      <Container>
        <Row className="justify-content-md-center">
          <Col className="col d-flex justify-content-center">
            <Card className="text-center">
              <Card.Header as="h5">{login ? "LOGIN" : "REGISTER"}</Card.Header>
              <Card.Body>
                {login ? (
                  <LoginForm dispatch={dispatch} />
                ) : (
                  <RegistrationForm dispatch={dispatch} />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col className="col d-flex justify-content-center">
            <Card className="text-center">
              <Card.Body>
                {login ? (
                  <>
                    <h5>Don't have an account?</h5>
                    <Button variant="link" onClick={() => setLogin(false)}>
                      Register
                    </Button>
                  </>
                ) : (
                  <>
                    <h5>Already have an account?</h5>
                    <Button variant="link" onClick={() => setLogin(true)}>
                      Login
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* </div> */}
    </>
  );
}
