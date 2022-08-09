import { CardGroup, Card, CardImg, Container } from "react-bootstrap";
import "./Trips.css";

const CurrentTrips = () => {
    return(
        <>
          <Container className="trips-container">
            <div>
            <h1>Welcome to your Trips Section!</h1>
            <h3>Here you can view, edit or delete your current trip, view previous trips or create a new trip!</h3>
                <CardGroup>
                    <Card>
                        <Card.Header>View Trip</Card.Header>
                        <CardImg></CardImg>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Edit Trip</Card.Header>
                        <CardImg></CardImg>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Delete Trip</Card.Header>
                        <CardImg></CardImg>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
          </Container>
        </>
    )
        

};
export default CurrentTrips;
