import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { Container, Form } from "react-bootstrap";
import { resetRegistered, login } from '../../features/user';
import { Bounce, Zoom } from 'react-reveal';
import Logo from "../../assets/images/artemis-colour-cutout.png";
import { useNavigate } from "react-router-dom";

import "./Landing.css";

export default function Landing() {
    // const dispatch = useDispatch();
       
    const loading = false;
    /*const { loading, isAuthenticated, registered } = useSelector(
		state => state.user
	);*/

	// const [formData, setFormData] = useState({
	// 	email: '',
	// 	username: '',
	// 	password: '',
	// });

	// /*useEffect(() => {
	// 	if (registered) dispatch(resetRegistered());
	// }, [registered]);*/

	// const { email, username, password } = formData;

	// const onChange = e => {
	// 	setFormData({ ...formData, [e.target.name]: e.target.value });
	// };

	const onSubmit = e => {
		e.preventDefault();
        // <Navigate to='/view/register' />

		// dispatch(login({ email, username, password }));
	};

	//if (isAuthenticated) return <Navigate to='/view/home' />;

    // const navigate = () => {

    //     <Navigate to='/view/register' />

    // }

    const navigate = useNavigate();
    const home = () => {
        navigate("/view/home");
    }

    // const navigateR = useNavigate();
    // const register = () => {
    //     navigateR("/view/register");
    // }
     
    return (
        <>
            <Container className="landing-container">
                <Bounce className="logo-container">
                    <img className="logo" src={Logo} alt="brand logo for Artemis Camping"></img>
                </Bounce>
                <div className="slogan-container"><h2 className="slogan">Are you DUE an adventure?</h2>
                    <Zoom className="slogan-block">
                        <p>DISCOVER UNWIND EXPLORE</p>
                    </Zoom>
                </div>
                <form >

                    <div className='form-group'>
                    {/* <label className='form-label' htmlFor='email'>
                        Username
                    </label> */}
                    <input
                        className='form-control'
                        type='username'
                        name='username'
                        // onChange={onChange}
                        // value={username}
                        placeholder="Enter Username"
                        required
                    />
                    </div>

                    <div className='form-group mt-3'>
                    {/* <label className='form-label' htmlFor='password'>
                        Password
                    </label> */}
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        // onChange={onChange}
                        // value={password}
                        placeholder="Enter Password"
                        required
                    />
                    </div>
                    {loading ? (
                    <div className='spinner-border text-primary' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                    ) : (
                    <Form.Control className="auth-btn" id="login" type="submit" value="Login" onClick={home}/>
                    )}

                        <p>OR</p>
                        <input className="auth-btn" id="register" type="submit" value="Register" />

                    </form>
                  
            </Container>
            <br />
        </>
    )
}
