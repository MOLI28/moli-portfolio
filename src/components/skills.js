import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const technicalSkills = [
        { name: "Python & Data Science", percentage: 70 },
        { name: "C++ & Data Structures", percentage: 75 },
        { name: "Machine Learning & NLP", percentage: 80 },
        { name: "Backend Architecture (Node.js)", percentage: 75 },
        { name: "Predictive Modeling", percentage: 85 }
    ];
    const coreSubjects = [
        "Data Structures and Algorithms", 
        "Design and Analysis of Algorithms",
        "C and C++ Programming", 
        "Python", 
        "Object Oriented Programming",
        "Database and Management Systems", 
        "Software Engineering",
        "Operating Systems",
        "System Programming",
        "Computer Organisation and Architecture",
        "Discrete Structures"
    ];

    const electives = [
        "Artificial Intelligence and Data Science", 
        "Linear Algebra",
        "Computer Vision",
        "Machine Learning",
        "Natural Language Processing"
    ];
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Blast off into my skills galaxy, where algorithms orbit perfectly and React rockets to new heights! Explore how I navigate the cosmos of coding with creativity and precision.</p>
                            <div className="custom-skills-container" style={{ marginTop: '40px', marginBottom: '50px' }}>
                                {technicalSkills.map((skill, index) => (
                                    <div key={index} className="skill-bar-item" style={{ marginBottom: '20px' }}>
                                        <div className="skill-info" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: '600', color: '#fff' }}>
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.percentage}%</span>
                                        </div>
                                        <div className="progress-bar-bg" style={{ width: '100%', height: '12px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                                            <div 
                                                className="progress-bar-fill" 
                                                style={{ 
                                                    width: `${skill.percentage}%`, 
                                                    height: '100%', 
                                                    background: 'linear-gradient(90deg, #b026ff, #00e5ff)', 
                                                    borderRadius: '10px',
                                                    boxShadow: '0 0 10px rgba(0, 229, 255, 0.6)'
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="coursework-section" style={{ marginTop: '50px', textAlign: 'left' }}>
                                <div className="course-category">
                                    <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>📚 Core Subjects</h3>
                                    <div className="badge-container">
                                        {coreSubjects.map((subject, index) => (
                                            <span key={index} className="course-badge core-badge">{subject}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="course-category" style={{ marginTop: '30px' }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>🎯 Specialized Electives</h3>
                                    <div className="badge-container">
                                        {electives.map((elective, index) => (
                                            <span key={index} className="course-badge elective-badge">{elective}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
}