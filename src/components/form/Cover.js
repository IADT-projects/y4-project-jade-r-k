import Form from 'react-bootstrap/Form';
import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cover = () => {

    return (
        <>
        <br/>
        <Form.Group>
                <Form.Label>When would you like your cover to start?</Form.Label>
                <Row>
                    <Col xs={6}>
                <Form.Control type="date" placeholder='DD' />
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
            <br/>
            <Form.Group>
                <Form.Label>What is the approximate rebuilding cost?</Form.Label>
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
                <Form.Label>How much contents cover do you need?</Form.Label>
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
        </>
    );
  };
  
  export default Cover;