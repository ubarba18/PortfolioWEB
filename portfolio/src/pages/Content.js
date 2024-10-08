import React, { useState, useEffect } from "react";
import { Carousel, Card } from "react-bootstrap"; // Import Bootstrap Carousel and Card

const Content = () => {
    const [cardsToShow, setCardsToShow] = useState(1); // Default to showing 1 card
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

    useEffect(() => {
        const updateCardsToShow = () => {
            const width = window.innerWidth;
            if (width <= 430) {
                setCardsToShow(1);
            } else if (width > 1537) {
                setCardsToShow(3);
            } else {
                setCardsToShow(2);
            }
        };

        // Set initial cards to show
        updateCardsToShow();

        // Add event listener
        window.addEventListener("resize", updateCardsToShow);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("resize", updateCardsToShow);
        };
    }, []);

    const totalSlides = Math.ceil(projects.length / cardsToShow); // Calculate total slides based on cardsToShow

    return (
        <div className="Content container">
            <div className="content-bio row align-items-center mb-5">
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
                        src={`${process.env.PUBLIC_URL}/images/lul.jpg`}
                        alt="pic"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
            <hr />
            <div className="content-projects">
                <h2 className="content-projects-title mb-4">Projects</h2>
                <Carousel className="content-projects-carousel">
                    {Array.from({ length: totalSlides }).map(
                        (_, slideIndex) => (
                            <Carousel.Item key={slideIndex}>
                                <div className="d-flex justify-content-center">
                                    {Array.from({ length: cardsToShow }).map(
                                        (_, cardIndex) => {
                                            const projectIndex =
                                                slideIndex * cardsToShow +
                                                cardIndex;
                                            if (projectIndex >= projects.length)
                                                return null; // Prevent out of bounds
                                            return (
                                                <a
                                                    key={projectIndex}
                                                    href={
                                                        projects[projectIndex]
                                                            .link
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-decoration-none mx-2"
                                                >
                                                    <Card
                                                        style={{
                                                            width: "18rem",
                                                        }}
                                                        className="text-center bg-dark text-white border-light"
                                                    >
                                                        <Card.Img
                                                            variant="top"
                                                            src={
                                                                projects[
                                                                    projectIndex
                                                                ].image
                                                            }
                                                            style={{
                                                                height: "200px",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>
                                                                {
                                                                    projects[
                                                                        projectIndex
                                                                    ].title
                                                                }
                                                            </Card.Title>
                                                            <Card.Text>
                                                                {
                                                                    projects[
                                                                        projectIndex
                                                                    ]
                                                                        .description
                                                                }
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </a>
                                            );
                                        }
                                    )}
                                </div>
                            </Carousel.Item>
                        )
                    )}
                </Carousel>
            </div>
        </div>
    );
};

export default Content;
