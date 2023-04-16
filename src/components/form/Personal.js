import Form from 'react-bootstrap/Form';
import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';

//The personal section of the form

const Personal = () => {

    //The boolean for the responsive radio buttons
    const [show, setShow] = useState(false);

    return (
        <>
        <br/>
        {/* Form start */}
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <br/>
                <ToggleButtonGroup type="radio" name="title">
                    <ToggleButton variant="outline-secondary" id="title-1" value={1} onClick={()=>setShow(false)}>
                    MR
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="title-2" value={2} onClick={()=>setShow(false)}>
                    MRS
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="title-3" value={3} onClick={()=>setShow(false)}>
                    MS
                    </ToggleButton>
                    <ToggleButton variant="outline-secondary" id="title-4" value={4} onClick={()=>setShow(true)}>
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
                    <Col xs={6}>
                <Form.Control type="date" />
                </Col>
                </Row>
            </Form.Group>
            {/* Show gender input when DR is selected */}
            {show && <div>
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
            </div>}
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
            {/* Form close */}
            <br/>
        </>
    );
  };
  
  export default Personal;