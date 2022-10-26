import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Course.css';

const Course = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div>
            
                <Container>
                    <Row>
                        <Col lg="2" className=" text-start courses-left">
                            {
                            courses.map( (course) =>(
                                
                                    <li><Link className="left-link" to={`${course.id}`}>{course.name}</Link></li>
                                
                                ))
                            }
                        </Col>
                        <Col lg="10" className="courses-right">
                            {
                            courses.map( (course) =>(
                                
                                    <Card className="card" style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={course.image} />
                                        <Card.Body>
                                            <Card.Title>{course.name}</Card.Title>
                                            <Card.Text>
                                                {course.lebel}
                                            </Card.Text>
                                            <div className="course-info">
                                                <p>rating: {course.rating}</p>
                                                <p>{course.duration}</p>
                                            </div>
                                            <Link className="card-btn" to={`${course.id}`}><Button  variant="outline-primary">View Details</Button></Link>
                                        </Card.Body>
                                    </Card>
                                
                                ))
                            }
                        </Col>
                    </Row>
                </Container>
        </div>
        
    );
};

export default Course;