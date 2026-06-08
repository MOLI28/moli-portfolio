import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png"; 
import projImg7 from "../assets/img/project-img7.png"; 
import projImg8 from "../assets/img/project-img8.png"; 
import projImg9 from "../assets/img/project-img9.png"; 
import projImg10 from "../assets/img/project-img10.png"; 
import projImg11 from "../assets/img/project-img11.png"; 
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projectsTabOne = [
        {
            title: "3D PACKING OPTIMIZER",
            description: "An automated logistics engine running an optimized layer-building heuristic to maximize cargo container volume density in under 2 seconds.",
            techStack: ["Python", "Pandas", "Streamlit", "Plotly 3D"],
            imgUrl: projImg1,
            githubUrl: "https://github.com/MOLI28/AI-3D-Packing-Optimizer",
            liveUrl: "https://ai-3d-packing-optimizer-mrml9fvedyuayqyi8rcbva.streamlit.app/", 
        },
        {
            title: "MULTI-MODAL TOXICITY DETECTOR",
            description: "A low-latency microservices backend utilizing NLP and acoustic processing for real-time streaming media moderation.",
            techStack: ["Node.js", "Python", "Toxic-BERT", "OpenAI Whisper"],
            imgUrl: projImg2,
            githubUrl: "https://github.com/MOLI28/toxicity_detector",
        },
        {
            title: "BOUTIQUE DEMAND FORECASTER",
            description: "A predictive inventory burn-rate dashboard utilizing time-series forecasting for supply-chain markdown tracking.",
            techStack: ["Python", "Facebook Prophet", "Streamlit"],
            imgUrl: projImg3,
            githubUrl: "https://github.com/MOLI28/boutique-demand-forecaster",
        },
        {
            title: "CUSTOM ARCADE ENGINE: SNAKE",
            description: "Built a custom 2D game engine featuring a real-time game loop, localized collision detection, and persistent file I/O tracking.",
            techStack: ["C", "graphics.h", "Game Engine", "I/O Architecture"],
            imgUrl: projImg6, 
            githubUrl: "https://github.com/MOLI28/snake-game-c",
        },
    ];

    const projectsTabTwo = [
        {
            title: "SCAMGUARD: INTERVENTION ENGINE",
            description: "An advanced financial fraud defense system engineered to detect anomalous behavioral signatures and execute deepfake defense protocols.",
            techStack: ["System Architecture", "Behavioral ML", "API Gateway"],
            imgUrl: projImg4,
            githubUrl: "https://github.com/MOLI28",
        },
    ];
    const projectsTabThree = [
        {
            title: "STREAMING AUDIO TOXICITY DATASET",
            description: "A custom-engineered pipeline dataset optimized for training live moderation models. Maps acoustic features like decibel spikes and pitch shifts.",
            techStack: ["Data Engineering", "Librosa", "Matrix Vectorization"],
            imgUrl: projImg5,
            githubUrl: "https://github.com/MOLI28",
        },
        {
            title: "HACK-CELESTIA GLOBAL TOP 10",
            description: "Engineered a rapid 48-hour AI prototype under strict competitive deadlines, successfully ranking in the global Top 10.",
            techStack: ["Rapid Prototyping", "AI Integration", "Competitive Coding"],
            imgUrl: projImg7,
            githubUrl: "https://github.com/MOLI28/Hack-Celestia-Prototype", 
        },
        {
            title: "DATA SCIENCE METHODOLOGY",
            description: "Deep dive into the data science lifecycle, including business understanding, analytical approaches, and data requirements for building robust pipelines.",
            techStack: ["Methodology", "Pipelines", "Modeling"],
            imgUrl: projImg8, 
            liveUrl: "https://www.coursera.org/account/accomplishments/records/TTKDN1P7VUVK",
        },
        {
            title: "TOOLS FOR DATA SCIENCE",
            description: "Hands-on expertise with industry-standard development environments and version control tools used in production-level data science[cite: 2].",
            techStack: ["Jupyter", "RStudio", "GitHub"],
            imgUrl: projImg9, 
            liveUrl: "https://www.coursera.org/account/accomplishments/records/9CMOUZ1415B2",
        },
        {
            title: "WHAT IS DATA SCIENCE?",
            description: "Foundation in the data science ecosystem, covering Big Data, AI applications, and the strategic importance of data-driven decision making[cite: 2].",
            techStack: ["Big Data", "AI", "Data Lifecycle"],
            imgUrl: projImg10, 
            liveUrl: "https://www.coursera.org/account/accomplishments/records/THGGNL8QVW7O",
        },
        {
            title: "GOOGLE PYTHON CRASH COURSE",
            description: "Certification covering core Python programming, complex data structures, and automation techniques for efficient data processing[cite: 2].",
            techStack: ["Python", "Automation", "Data Structures"],
            imgUrl: projImg11, 
            liveUrl: "https://www.coursera.org/account/accomplishments/records/0HNHI7QKCC4G",
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Engineering Portfolio</h2>
                                    <p>Welcome to my technical mission control center. Explore an architecture space built on low-latency backend logic, production data pipelines, and highly optimized spatial analytics systems.</p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">PRODUCTION APPS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">UPCOMING PROJECTS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">DATA & ACHIEVEMENTS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projectsTabOne.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {projectsTabTwo.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {projectsTabThree.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background style" />
        </section>
    );
}