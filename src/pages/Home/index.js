import { useNavigate } from "react-router-dom";
import * as camp from '../../assets/images/camping';
import { Button, Card, CardGroup, CardImg, Container } from 'react-bootstrap';

import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    /*const { isAuthenticated, user, loading } = useSelector(state => state.user);*/
      
    /*if (!isAuthenticated && !loading && user === null)
		return <Navigate to='/login' />;*/

        return (
            <>  
            <h1 className=""> WELCOME, NATHAN</h1>
                <Container className="home-container">
                {/* {loading || user === null ? (
				<div className='spinner-border text-primary' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			) : ( */}
                    <CardGroup>
                        <Card id="home-card">
                            <Card.Header className="card-title visually-hidden">New Trip</Card.Header>
                            <CardImg className="card-image" src={camp.tent}></CardImg>
                            {/* <Card.Body> Welcome {user.first_name}! Organise a new trip today!</Card.Body> */}
                            <Button id="new-trip-btn" onClick={()=>{
                                navigate('/new/trip');
                            }}>New Trip
                            </Button>
                        </Card>
                        <Card id="home-card">
                        <Card.Header className="card-title visually-hidden">View Trips</Card.Header>
                            <CardImg className="card-image" src={camp.caravan}></CardImg>
                            
                            <Button id="view-trip-btn" onClick={()=>{
                                navigate('/view/trip/all');
                            }}>View Trips</Button>
                        </Card>
                    </CardGroup>
                </Container>            
            </>
        )
    };

export default Home;
