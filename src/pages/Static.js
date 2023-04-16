import Form from 'react-bootstrap/Form';
import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//This is the static form

const Static = () => {

    return (
        <>
        <br/>
        <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
        {/* Form start */}
        <Form>
            <Col xs={12} sm={12} md={10} lg={10} xl={10} xxl={10}>
                {/* Property Section */}
            <Card>
                <Card.Body>
                    <Card.Text>1/4</Card.Text>
                    <Card.Title>About the property</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <br/>
            <Form.Group>
                <Form.Label>Please enter the address or Eircode of the property</Form.Label>
                <Form.Control type="input" />
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>Are you the owner or a tenant?</Form.Label>
                <br/>
                <ToggleButtonGroup type="radio" name="owner">
                    <ToggleButton variant="outline-secondary" id="owner-1" value={1}>
                    OWNER
                    </ToggleButton>
                    <ToggleButton id="owner-2" variant="outline-secondary" value={2}>
                    TENANT
                    </ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>
            <br/>
                <Form.Group>
                    <Form.Label>If you are an OWNER, how do you use your property?</Form.Label>
                    <br/>
                    <ToggleButtonGroup type="radio" name="use">
                        <ToggleButton variant="outline-secondary" id="use-1" value={1}>
                            I LIVE IN IT
                        </ToggleButton>
                        <ToggleButton variant="outline-secondary" id="use-2" value={2}>
                            I RENT IT OUT
                        </ToggleButton>
                        <ToggleButton id="use-3" variant="outline-secondary" value={3}>
                            IT'S A HOLIDAY HOME
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>What type of building is it?</Form.Label>
                <Row>
                    <Col xs={6}>
                    <Form.Select aria-label="Default select example">
                        <option></option>
                        <option>Detached Bungalow</option>
                        <option>Detached House</option>
                        <option>Purpose Built Flat/Apartment</option>
                        <option>Semi-Detached House</option>
                        <option>Terraced House</option>
                        <option>Other</option>
                    </Form.Select>
                    </Col>
                    </Row>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>When was it built?</Form.Label>
                <Row>
                    <Col xs={4}>
                    <Form.Select aria-label="Default select example">
                        <option></option>
                        <option>2020 - 2029</option>
                        <option>2010 - 2019</option>
                        <option>2000 - 2009</option>
                        <option>1990 - 1999</option>
                        <option>1980 - 1989</option>
                        <option>1970 - 1979</option>
                        <option>1960 - 1969</option>
                        <option>1950 - 1959</option>
                        <option>1940 - 1949</option>
                        <option>1930 - 1939</option>
                        <option>1920 - 1929</option>
                        <option>Pre 1920</option>
                    </Form.Select>
                    </Col>
                    </Row>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>How many bedrooms does it have?</Form.Label>
                <br/>
                <ToggleButtonGroup type="radio" name="bedrooms">
                    <ToggleButton variant="outline-secondary" id="bedroom-1" value={1}>
                    1
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="bedroom-2" value={2}>
                    2
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="bedroom-3" value={3}>
                    3
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="bedroom-4" value={4}>
                    4
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="bedroom-5" value={5}>
                    5
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="bedroom-6" value={6}>
                    6
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="bedroom-7" value={7}>
                    7+
                    </ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>What is the main type of heating?</Form.Label>
                <br/>
                <ToggleButtonGroup type="radio" name="heating">
                    <ToggleButton variant="outline-secondary" id="heating-1" value={1}>
                    ELECTRIC
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="heating-2" value={2}>
                    GAS
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="heating-3" value={3}>
                    NONE
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="heating-4" value={4}>
                    OIL
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="heating-5" value={5}>
                    RENEWABLE ENERGY
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="heating-6" value={6}>
                    SOLID FUEL OPEN FIRE
                    </ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>
            <br/>
            </Card.Footer>
            </Card>
            <br/>
            {/* Cover Section */}
            <Card>
                <Card.Body>
                    <Card.Text>2/4</Card.Text>
                    <Card.Title>Your cover</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <br/>
                    <Form.Group>
                <Form.Label>When would you like your cover to start?</Form.Label>
                <Row xs={3}>
                    <Col xs={2}>
                    <Form.Label className="text-muted">Day</Form.Label>
                <Form.Control type="input" placeholder='DD' />
                </Col>
                <Col xs={2}>
                <Form.Label className="text-muted">Month</Form.Label>
                <Form.Control type="input" placeholder='MM' />
                </Col>
                <Col xs={2}>
                <Form.Label className="text-muted">Year</Form.Label>
                <Form.Control type="input" placeholder='YYYY' />
                </Col>
                </Row>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>What cover do you need?</Form.Label>
                <br/>
                <ToggleButtonGroup type="radio" name="building">
                    <ToggleButton variant="outline-secondary" id="building-1" value={1}>
                    BUILDING AND CONTENTS
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="building-2" value={2}>
                    CONTENTS ONLY
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="building-3" value={3}>
                    BUILDING ONLY
                    </ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>
            <p>TENANTS can only select cover for contents.</p>
            <br/>
            <Form.Group>
                <Form.Label>What is the approximate rebuilding cost? (Building Cover)</Form.Label>
                <Row>
                <Col xs={6}>
                <InputGroup>
                <InputGroup.Text>€</InputGroup.Text>
                <Form.Control type="input" />
                </InputGroup>
                </Col>
                </Row>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>How much contents cover do you need? (Contents Cover)</Form.Label>
                <Row>
                    <Col xs={6}>
                <InputGroup>
                <InputGroup.Text>€</InputGroup.Text>
                <Form.Control type="input" />
                </InputGroup>
                </Col>
                </Row>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>How many years have you had home insurance without making any claims?</Form.Label>
                    <Row>
                        <Col xs={8}>
                    <Form.Select aria-label="Default select example">
                        <option></option>
                        <option>0 years - Never held Home Insurance before</option>
                        <option>0 years</option>
                        <option>1 year</option>
                        <option>2 years</option>
                        <option>3 years</option>
                        <option>4 years</option>
                        <option>5 years</option>
                        <option>More than 5 years</option>
                    </Form.Select>
                    </Col>
                    </Row>
            </Form.Group>
            <br/>
            </Card.Footer>
            </Card>
            <br/>
            {/* Discounts Section */}
            <Card>
                <Card.Body>
                    <Card.Text>3/4</Card.Text>
                    <Card.Title>Discounts</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <br/>
            <Form.Group>
                <Form.Label>Does the property have a working burglar alarm?</Form.Label>
                <br/>
                <ToggleButtonGroup type="radio" name="alarm">
                    <ToggleButton variant="outline-secondary" id="alarm-1" value={1}>
                    YES
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="alarm-2" value={2}>
                    NO
                    </ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>Do you currently have AXA Car or Van insurance?</Form.Label>
                <br/>
                <ToggleButtonGroup type="radio" name="insurance">
                    <ToggleButton variant="outline-secondary" id="insurance-1" value={1}>
                    YES
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="insurance-2" value={2}>
                    NO
                    </ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>Are you a First Time Buyer?</Form.Label>
                <br/>
                <ToggleButtonGroup type="radio" name="buyer">
                    <ToggleButton variant="outline-secondary" id="buyer-1" value={1}>
                    YES
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="buyer-2" value={2}>
                    NO
                    </ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>
            <br/>
            </Card.Footer>
            </Card>
            <br/>
            {/* Personal Section */}
            <Card>
                <Card.Body>
                    <Card.Text>4/4</Card.Text>
                    <Card.Title>Personal details</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <br/>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <br/>
                <ToggleButtonGroup type="radio" name="title">
                    <ToggleButton variant="outline-secondary" id="title-1" value={1}>
                    MR
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="title-2" value={2}>
                    MRS
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="title-3" value={3}>
                    MS
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="title-4" value={4}>
                    DR
                    </ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>
            <br/>
            <Form.Group>
                <Row>
                    <Col>
                <Form.Label>First name</Form.Label>
                <Form.Control type="input" />
                </Col>
                <Col>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="input" />
                </Col>
                </Row>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>Date of birth</Form.Label>
                <Row xs={3}>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                    <Form.Label className="text-muted">Day</Form.Label>
                <Form.Control type="input" placeholder='DD' />
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                <Form.Label className="text-muted">Month</Form.Label>
                <Form.Control type="input" placeholder='MM' />
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                <Form.Label className="text-muted">Year</Form.Label>
                <Form.Control type="input" placeholder='YYYY' />
                </Col>
                </Row>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>Gender</Form.Label>
                <br/>
                <ToggleButtonGroup type="radio" name="gender">
                    <ToggleButton variant="outline-secondary" id="gender-1" value={1}>
                    MALE
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="gender-2" value={2}>
                        FEMALE
                    </ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Row><Col xs={6}>
                <Form.Control type="input" />
                </Col></Row>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>Phone number</Form.Label>
                <Row><Col xs={6}>
                <Form.Control type="input" />
                </Col></Row>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>What is your occupation?</Form.Label>
                    <Row>
                        <Col xs={8}>
                    <Form.Select aria-label="Default select example">
                        <option></option>
                        <option>Employed part time</option>
                        <option>Employed full time</option>
                        <option>Self employed</option>
                    </Form.Select>
                    </Col>
                    </Row>
            </Form.Group>
            <br/>
            <Button style={{width: '100%'}} variant="primary" type="submit">
                GET A QUOTE <i style={{float: 'right'}}>→</i>
            </Button>
            <br/>
            </Card.Footer>
            </Card>
            </Col>
        </Form>
        <br/>
        </Container>
        </>
    );
  };
  
  export default Static;