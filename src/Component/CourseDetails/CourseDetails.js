import React from 'react';
import { Button } from 'react-bootstrap';
import {Link, useLoaderData, useParams} from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {
    let param = useParams();
    let id = parseFloat(param.id)
    const courses = useLoaderData(); 
    const course = courses[id-1];   
    return (
        <div>
            <div class="card mb-3 w-75 position-absolute top-50 start-50 translate-middle">
                <h1 class="card-title">{course.name}</h1>
                <img src={course.image} class="image" alt="..."/>
                <div class="card-body">
                    <p class="card-text">{course.details}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <Link className="crd-btn" to='/checkout'><Button variant="outline-primary">Get Premium Access</Button></Link>
            </div>
        </div>
    );
};

export default CourseDetails;