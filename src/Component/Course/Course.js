import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Course.css';

const Course = () => {
    const courses = useLoaderData();
    return (
        <div>
            
                <Container>
                    <Row>
                        <Col lg="2" className=" text-start courses-left">
                            {
                            courses.map( (course) =>(
                                
                                    <li  key={course.id}><Link className="left-link" to={`${course.id}`}>{course.name}</Link></li>
                                
                                ))
                            }
                        </Col>
                        <Col lg="10" className="courses-right">
                            {
                            courses.map( (course) =>(
                                
                                    <Card className="card" style={{ width: '18rem' }} key={course.id}>
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
                                            <div key={course.id}>
                                                <Link className="card-btn" to={`/course/${course.id}`}><Button  variant="outline-primary">View Details</Button></Link>
                                            </div>
                                            
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