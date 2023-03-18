import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Property = () => {

    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const addresses = [
        {
            text: "1 Vines Ln, Dun Laoghaire, Dublin, WR99LU"
        }
    ]

    const onSuggestHandler = (text) => {
        setText(text);
        setSuggestions([]);
    };

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length>4) {
            matches = addresses.filter(address=>{
                const regex = new RegExp(`${text}`,"gi");
                return address.text.match(regex)
            })
        }
        setSuggestions(matches);
        setText(text);
    };

    const [show, setShow] = useState(false);

    
    return (
        <>
        <br/>
            <Form.Group>
                <Form.Label>Please enter the address or Eircode of the property</Form.Label>
                <Form.Control type="input"
                onChange={e => onChangeHandler(e.target.value)}
                value={text}  />
                {suggestions && suggestions.map((suggestion,i)=>
                <div className='suggestion'
                onClick={()=>onSuggestHandler(suggestion.text)}
                 key={i}>{suggestion.text}</div>)}
            </Form.Group>
            <br/>
            <Form.Group>
                <Form.Label>Are you the owner or a tenant?</Form.Label>
                <br/>
                <ToggleButtonGroup type="radio" name="owner">
                    <ToggleButton variant="outline-secondary" id="owner-1" value={1} onClick={()=>setShow(true)}>
                    OWNER
                    </ToggleButton>
                    <ToggleButton id="owner-2" variant="outline-secondary" value={2} onClick={()=>setShow(false)}>
                    TENANT
                    </ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>

            {
                show && <div>
                    <br/>
                    <Form.Group>
                        <Form.Label>How do you use your property?</Form.Label>
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
                </div>
            }
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
        </>
    );
  };
  
  export default Property;