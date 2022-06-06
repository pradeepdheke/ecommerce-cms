import React, {useState} from 'react'
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap'
import "./registerForm.css"
import {useDispatch, useSelector} from 'react-redux'
import {postUserAction} from '../../pages/register-login/signInUpAction'



const initialState = {
    fName: "Sam",
    lName: "Smith",
    phone: "0477777777",
    email: "sam@sam.com",
    dob: 11/11/1991,
    address: "syd, sydney",
    password: 12345,
    confirmPassword: 12345

}
export const RegisterForm = () => {
    const dispatch = useDispatch()
    const [form, setForm ] = useState(initialState)
    const [error, setError] = useState(false)

    const {isLoadinng, response} = useSelector((state) => state.signInUp)

    const handleChange = (e) => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: value
        })
    }


    const handleOnSubmit = (e) => {
        e.preventDefault()

       
        
        if(form.password !== form.confirmPassword){
            return setError(true)
        } 
        setError(false)
        console.log(form)

        const {confirmPassword, ...rest} = form
 
       // we dispatch the action to the reducer 
       dispatch(postUserAction(rest))
    }


  return (
    <Container>
        <div className="form-content mt-5 mb-5">
        <h1>Register Form</h1>
        <hr />
        <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Frist Name</Form.Label>
                <Form.Control 
                onChange={handleChange}
                name='fName'  placeholder="Sam" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                onChange={handleChange}
                name='lName' placeholder="Smith" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control 
                onChange={handleChange}
                name='phone' placeholder="04444" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>DOB</Form.Label>
                <Form.Control 
                onChange={handleChange}
                name='dob' type="date" placeholder="2020-10-10" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                onChange={handleChange}
                name='address'   placeholder="10 george st Sydne" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                onChange={handleChange}
                name='email' type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                onChange={handleChange}
                name='password' type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                onChange={handleChange}
                name='confirmPassword' type="password" placeholder="Password" required/>
                <Alert variant="danger" show={error}>Confirm password do not match!</Alert>
            </Form.Group>  
            <Form.Group>
                {(response.message && <Alert variant= {response.status === "success" ? "success" : "danger"}>
                    {response.message}
                </Alert>
                )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Button type='submit'>
                    {
                        isLoadinng ? (
                            <Spinner variant = "danger"
                            animation = "border"/>
                        ) : (
                            "Sign Up"
                        )
                    }
                    </Button>
            </Form.Group>
            </Form>
            </div>
    </Container>
  )
}
