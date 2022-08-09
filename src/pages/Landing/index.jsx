import { useState } from 'react';
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import { Container, Form } from "react-bootstrap";
import Logo from "../../assets/images/artemis-colour-cutout.png";
import "./Landing.css";

export default function Landing() {
    const dispatch = useDispatch();
    dispatch(setTitle("Artemis Camping"));

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
        <>
            <Container className="landing-container">
                <h1>Welcome!</h1>
                <div className="logo-container">
                    <img className="logo" src={Logo} alt="brand logo for Artemis Camping"></img>
                </div>
                <h3>To start, please login below...</h3>
                
                <div className="auth-container">
                    <Form className="auth-form">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label className="auth-label">Email:</Form.Label> */}
                            <Form.Control className="auth-input" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label className="auth-label">Password:</Form.Label> */}
                        <Form.Control className="auth-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>
                        <Form.Control className="auth-btn" id="login" type="submit" value="Login" />
                        <p>OR</p>
                        <Form.Control className="auth-btn" id="register" type="submit" value="Register" />
                    </Form>

                    </div> 
                    
            </Container>
            <br />
        </>
    )
}