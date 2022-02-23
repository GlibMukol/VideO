import { useState, FormEvent, ChangeEvent } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { curry } from 'lodash';
import { initState } from './helpers';
import './style.css'

const RegistrationForm = () => {
    const [state, setState] = useState(initState);
    console.log('state', state)
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('e :>> ', e);
        return;
    }

    const handleChange = (type: string, e: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;
        setState({
            ...state,
            [type]: {
                value,
                touched: true,
                error: false
            }
        })
    }

    const handleChangeCurry = curry(handleChange)

    return (
        <div className='registrationForm'>
            <Card className="text-center">
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Card.Header>Create Account</Card.Header>
                    <Card.Body className="text-start">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={state.email.value}
                                onChange={handleChangeCurry('email')}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={state.pwd.value}
                                onChange={handleChangeCurry('pwd')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                            <Form.Label>Password Confirm</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password Confirm"
                                value={state.confirmPwd.value}
                                onChange={handleChangeCurry('confirmPwd')}
                            />
                        </Form.Group>
                    </Card.Body>
                    <Card.Header className='d-flex justify-content-around'>
                        <Button disabled={!state.isValid} variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="secondary" type="reset">
                            Submit
                        </Button>
                    </Card.Header>
                </Form>
            </Card>
        </div>
    )
}

export default RegistrationForm