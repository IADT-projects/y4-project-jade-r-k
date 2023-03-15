import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

import Cover from './form/Cover';
import Discounts from './form/Discounts';
import Welcome from './form/Welcome';
import Property from './form/Property';
import Personal from './form/Personal';

import FormButton from './FormButton';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const IxDForm = () => {
    const [page, setPage] = useState(0);

    const FormTitle = ["About the property", "Your cover", "Discounts", "Personal Details"]

    const PageDisplay = () => {
        if (page === 0) {
            return <Property />
        } else if (page === 1) {
            return <Cover />
        } else if (page === 2) {
            return <Discounts />
        } else if (page === 3) {
            return <Personal/>
        } else {
            return <Welcome/>
        }
    }

    return (
        <>
        <br/>
        <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
            <Form>
                <Col>
                    <Card style={{ width: '500px' }}>
                        <Card.Body>
                        <br/>
                    <ProgressBar now={ 
                        page === 0
                        ? 1
                        : page === 1
                        ? 25
                        : page === 2
                        ? 50
                        : page === 3
                        ? 75
                        : 100
                        }/>
                        <br/>
                        <Card.Title>{FormTitle[page]}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <PageDisplay/>
                            <div>
                                {page !== 0 && page !== 4 ? (
                                    <FormButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPage((currPage) => currPage - 1);
                                    }}
                                    text="Prev"
                                    />
                                ) : null} {' '}
                                <FormButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (page === FormTitle.length) {
                                        window.location.reload();
                                      } else {
                                        setPage((currPage) => currPage + 1);
                                      }
                                }}
                                text={page !== 3 ? "Next" : "Get your quote"}
                                />
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Form>
        </Container>
        </>
    );
  };
  
  export default IxDForm;