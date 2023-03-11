import Form from 'react-bootstrap/Form';
import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const Discounts = () => {

    return (
        <>
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
        </>
    );
  };
  
  export default Discounts;