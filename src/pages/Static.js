import Form from 'react-bootstrap/Form';
import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Container from 'react-bootstrap/Container';

const Static = () => {

    return (
        <>
        <br/>
        <Container>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Please enter the address or Eircode of the property</Form.Label>
                <Form.Control type="input" />
            </Form.Group>
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
                <Form.Label>What type of building is it?</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option></option>
                        <option>Detached Bungalow</option>
                        <option>Detached House</option>
                        <option>Purpose Built Flat/Apartment</option>
                        <option>Semi-Detached House</option>
                        <option>Terraced House</option>
                        <option>Other</option>
                    </Form.Select>
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>When was it built?</Form.Label>
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
        </Form>
        </Container>
        </>
    );
  };
  
  export default Static;