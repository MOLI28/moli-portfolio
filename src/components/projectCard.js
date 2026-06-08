import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, techStack, imgUrl, githubUrl, liveUrl }) => {
  // Logic to dynamically change the button text
  const isCertificate = liveUrl && liveUrl.includes("coursera.org");

  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project Mockup" style={{ borderRadius: "20px" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span style={{ fontSize: "14px", display: "block", marginBottom: "10px" }}>
            {description}
          </span>
          
          {/* Tech Stack Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginBottom: "15px" }}>
            {techStack && techStack.map((tech, index) => (
              <span key={index} style={{
                fontSize: "11px", fontWeight: "bold", background: "rgba(255,255,255,0.2)", 
                padding: "4px 8px", borderRadius: "4px", color: "#fff"
              }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" style={{
                textDecoration: "none", color: "#fff", background: "#1a1a1a", 
                padding: "8px 16px", borderRadius: "50px", fontSize: "13px", fontWeight: "bold", border: "1px solid #fff"
              }}>
                {'</>'} GitHub
              </a>
            )}
            
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" style={{
                textDecoration: "none", color: "#000", background: "#fff", 
                padding: "8px 16px", borderRadius: "50px", fontSize: "13px", fontWeight: "bold"
              }}>
                {isCertificate ? '📜 View Certificate' : '🚀 Live App'}
              </a>
            )}
          </div>

        </div>
      </div>
    </Col>
  )
}