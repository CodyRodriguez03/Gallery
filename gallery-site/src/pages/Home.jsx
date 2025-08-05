import { Card, Image, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HozierImage from '../assets/Hozier.jpeg';
import GBImage from '../assets/GetBack.jpg';
import coverImage from '../assets/cover.jpg';

import styles from './home.module.css';


export default function Home(){
    return(
        <>
        <h1>Welcome to</h1>
        <h2>Cody Rodriguez's Gallery!</h2>
        <br></br>

        <div class={styles.center}>
            <Container>
                <Row>
                    <Col>
                        <Link to='/ExhibitA' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={GBImage} />
                                <Card.Body>
                                    <Card.Title>Exhibit A</Card.Title>
                                    <Card.Text>Enter the past with The Beatles!</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/ExhibitB' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={HozierImage} />
                                <Card.Body>
                                    <Card.Title>Exhibit B</Card.Title>
                                    <Card.Text>Enter the world of Hozier!</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/ExhibitC' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={coverImage} />
                                <Card.Body>
                                    <Card.Title>Exhibit C</Card.Title>
                                    <Card.Text>Enter a world of fantasm and wonder!</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>

        
        
        </>
    );
}