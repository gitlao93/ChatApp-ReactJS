
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function LoginForm () {

    return (
        <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center p-5">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                  <div className="mb-3 p-5">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <Link className="text-primary" to="/login">
                            Forgot password?
                          </Link>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-primary fw-bold">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    );
}

export default LoginForm;