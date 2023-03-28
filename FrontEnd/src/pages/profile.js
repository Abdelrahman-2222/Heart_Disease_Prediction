import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

function Userprofile() {

    return (
        <Container>
            <h2 style={{
                position: 'absolute',
                top: '4%',
                left: '40%'
            }}>User Profile Page</h2>

            <div className='userprofile'>
                <Form>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type='text' name='firstname' id='firstname' placeholder='Enter first name'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type='text' name='lastname' id='lastname' placeholder='Enter last name'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' name='email' id='email' placeholder='Enter email'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='psw' id='psw' placeholder='Enter password'/>
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Save
                    </Button>
                </Form>
            </div>
        </Container>
    )

}

export default Userprofile;
