import { Card, Image, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HozierImage from '../assets/Hozier.jpeg';
import GBImage from '../assets/GetBack.jpg';
import coverImage from '../assets/cover.jpg';

import styles from './Home.module.css';


export default function Home(){
    return(
        <>

        <div className={styles.heading}>
            <h1>Welcome to The Gallery!</h1>
            <br></br>
        </div>

        <div className={styles.center}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Link to='/ExhibitA' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={GBImage} className={styles.hImage} />
                                <Card.Body>
                                    <Card.Title>Exhibit A</Card.Title>
                                    <Card.Text>Enter the past with The Beatles!</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link to='/ExhibitB' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={HozierImage} className={styles.hImage} />
                                <Card.Body>
                                    <Card.Title>Exhibit B</Card.Title>
                                    <Card.Text>Enter the world of Hozier!</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col xs="auto">
                        <Link to='/ExhibitC' style={{ textDecoration: 'none' }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={coverImage} className={styles.hImage} />
                                <Card.Body>
                                    <Card.Title>Exhibit C</Card.Title>
                                    <Card.Text>Enter a world of wonder!</Card.Text>
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