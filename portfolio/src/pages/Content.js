import React, { useState } from "react";
import { Carousel } from "react-bootstrap"; // Import Bootstrap Carousel

const Content = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const projects = [
        {
            image: "project1-image.jpg",
            title: "Project 1",
            description: "Project 1 description",
            link: "https://cse310.vercel.app/",
        },
        {
            image: "project2-image.jpg",
            title: "Project 2",
            description: "Project 2 description",
        },
        {
            image: "project3-image.jpg",
            title: "Project 3",
            description: "Project 3 description",
        },
        {
            image: "project4-image.jpg",
            title: "Project 4",
            description: "Project 4 description",
        },
        {
            image: "project5-image.jpg",
            title: "Project 5",
            description: "Project 5 description",
        },
        {
            image: "project6-image.jpg",
            title: "Project 6",
            description: "Project 6 description",
        },
        // Add more projects here
    ];

    return (
        <div className="Content container">
            <div className="content-bio row align-items-center mb-2">
                <div className="content-container col-md-6">
                    <h2 className="content-name">Uriel Barba</h2>
                    <div className="content-title">Software Developer</div>
                    <div className="about-me-box">
                        Passionate about crafting exceptional web experiences,
                        I'm a software developer driven to innovate and excel.
                        With expertise in HTML, CSS, and JavaScript, I create
                        responsive, user-centric applications that inspire and
                        delight. Explore my portfolio to see my ambition in
                        action.
                    </div>
                </div>
                <div className="content-image col-md-1">
                    <img
                        src="./images/lul.jpg"
                        alt="photo"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
            <hr />
            <div className="content-projects">
                <h2 className="content-projects-title">Projects</h2>
                <Carousel className="content-projects-carousel">
                    {projects.map((project, index) => (
                        <Carousel.Item key={index}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="card">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {project.title}
                                        </h5>
                                        <p className="card-text">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Content;
