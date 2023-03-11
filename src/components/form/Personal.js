import Form from 'react-bootstrap/Form';
import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Personal = () => {

    return (
        <>
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
                    <Col xs={6}>
                <Form.Control type="date" />
                </Col>
                </Row>
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
                <Row><Col xs={10}>
                <Form.Control type="input" />
                </Col></Row>
            </Form.Group>
            <br/>
        </>
    );
  };
  
  export default Personal;