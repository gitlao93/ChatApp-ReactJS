
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function RegisterForm () {

    return (
        <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center p-5">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 p-5">
                    <h2 className="mb-2">Register to <span className="fw-bold text-uppercase">CHATAPP</span></h2>
                    <p className=" mb-5">Please enter your Credentials</p>
                    
                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label className="text-center">
                                Name
                            </Form.Label>
                            <Form.Control type="Text" placeholder="Enter Name" />
                        </Form.Group>

                            
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-center">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicReTypePassword">
                            <Form.Label>Re-Type Password</Form.Label>
                            <Form.Control type="password" placeholder="Re-Type Password" />
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary fw-bold">
                          Sign In
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

export default RegisterForm;