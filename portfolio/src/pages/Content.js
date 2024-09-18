import React, { useState } from "react";

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

    const cardsPerPage = 3;

    const handlePrevClick = () => {
        setCurrentIndex(
            (currentIndex - 1 + Math.ceil(projects.length / cardsPerPage)) %
                Math.ceil(projects.length / cardsPerPage)
        );
    };

    const handleNextClick = () => {
        setCurrentIndex(
            (currentIndex + 1) % Math.ceil(projects.length / cardsPerPage)
        );
    };

    const startIndex = currentIndex * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return (
        <div className="Content">
            <div className="content-bio">
                <div className="content-container">
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
                <div className="content-image">
                    <img src="./images/lul.jpg" alt="photo"></img>
                </div>
            </div>
            <hr></hr>
            <div className="content-projects">
                <div className="content-projects-container">
                    <h2 className="content-projects-title">Projects</h2>
                    <div className="content-projects-carousel">
                        <div className="carousel-wrapper">
                            <div className="carousel-inner">
                                {projects
                                    .slice(startIndex, endIndex)
                                    .map((project, index) => (
                                        <div
                                            key={index}
                                            className="carousel-item"
                                        >
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className="card">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                    />
                                                    <h2>{project.title}</h2>
                                                    <p>{project.description}</p>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                            </div>
                            <button
                                className="carousel-control-prev"
                                onClick={handlePrevClick}
                            >
                                Previous
                            </button>
                            <button
                                className="carousel-control-next"
                                onClick={handleNextClick}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
