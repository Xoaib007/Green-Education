import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='cards'>
            <Card className="text-center card1">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title><h1>What is CORS?</h1></Card.Title>
                    <Card.Text>
                    CORS stands for cross-origin resource sharing. Just like HTTPS, it's a protocol that defines some rules for sharing resources from a different origin. We know that modern web apps consist of two key components: a client and a server. The client requests some data from the server, and the server sends back data as a response. 
                    Since the client and server are separate applications, they're usually hosted on different domains. Therefore, your own client that's requesting data from your own server might have different origins. In another scenario, you might use some third-party services for authentication, analytics, etc. The bottom line is that at some point you are going to interact with an application with a different origin than yours. This means you're going to request resources from the application by making an HTTP request.
                    </Card.Text>
                    <Button  variant="outline-primary"><a  href='https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/'>Know More</a></Button>
                </Card.Body>
            </Card>

            <Card className="text-center card1">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title><h1>Why we sould use firebase? What are the alternatives of firebase?</h1></Card.Title>
                    <Card.Text>
                    There has been an exponential surge in the number of Firebase mobile app development companies worldwide in recent years. It is because of the numerous advantages that come with Firebase mobile app development, such as:
                    1. Cloud Messaging for Cross-Platform Apps,
                    2. Higher Website Traffic with App Indexing,
                    3. Swift and Secured Web Hosting,
                    4. Higher Accessibility to Machine Learning APIs,
                    5. Crash Reporting for Swift Bugs Fixing,
                    6. Optimized App Performance,
                    7. Push Notifications for Target Messaging.
                    </Card.Text>
                    <Button  variant="outline-primary"><a  href='https://citrusbug.com/blog/advantages-of-firebase-mobile-app-development'>Know More</a></Button>
                </Card.Body>
            </Card>

            <Card className="text-center card1">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title><h1>How does private routes work?</h1></Card.Title>
                    <Card.Text>
                    Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.

                    </Card.Text>
                    <Button  variant="outline-primary"><a  href='https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e'>Know More</a></Button>
                </Card.Body>
            </Card>

            <Card className="text-center card1">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title><h1>What is NODE? How does NODE work?</h1></Card.Title>
                    <Card.Text>
                    avascript has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JavaScript was used mainly for client-side scripting inside  tags executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the front-end (client-side) and backend (server-side) aspects of a web application.

                    Although there were other projects to bring JavaScript to server-side applications, the functionality took off with the launch of Node.js in 2009. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.

                    Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.
                    </Card.Text>
                    <Button  variant="outline-primary"><a  href='https://nodejs.org/en/docs/'>Know More</a></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;