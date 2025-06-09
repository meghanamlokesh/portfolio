import React from "react";
import profilePic from './Meghana.jpeg';
const Portfolio = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <img
          src={profilePic} // Replace this with your actual photo
          alt="Meghana"
          style={styles.photo}
        />
        <h1 style={styles.name}>Meghana.M.L</h1>
        <p style={styles.contact}>7337872271 | mlmeghana488@gmail.com</p>
      </header>

      {/* Objective Section */}
      <section style={styles.section}>
        <h2>Objective</h2>
        <p>
          "Secure a responsible career opportunity to fully utilize my training and
          skills, while making a significant contribution to the success of the
          company."
        </p>
      </section>

      {/* Education Section */}
      <section style={styles.section}>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>B.E (Computer Science and Engineering)</strong> - Malnad College of Engineering, Hassan (2026, CGPA: 8.0)
          </li>
          <li>
            <strong>PUC (PCMB)</strong> - Womens Politecnic, Hassan (2022, 95.00%)
          </li>
          <li>
            <strong>X (State Board)</strong> - GJC Halekote, Hassan (2020, 96.00%)
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section style={styles.section}>
        <h2>Skills</h2>
        <ul>
          <li>Languages: C, Java, SQL, HTML, and CSS</li>
          <li>MS Office: Word, PowerPoint, Excel</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <h2>Projects</h2>
        <p>
          <strong>Mentor Mentee website</strong>
          <br />
          The main aim is enhance mentor and student interaction.<br/>Using HTML,php and Xamp.
        </p>
      </section>

      {/* Other Activities Section */}
      <section style={styles.section}>
        <h2>Other Activities</h2>
        <p>Hobbies: Playing guitar, sketching, and dancing</p>
      </section>

      {/* Strengths Section */}
      <section style={styles.section}>
        <h2>Strengths</h2>
        <ul>
          <li>Quick learner</li>
          <li>Detail-oriented</li>
          <li>Teamwork</li>
          <li>Time management</li>
        </ul>
      </section>

      {/* Declaration Section */}
      <section style={styles.section}>
        <h2>Declaration</h2>
        <p>
          I, Meghana.M.L, solemnly declare that all the information is correct to the
          best of my knowledge and belief.
        </p>
        <p>
          <strong>Date:</strong> 31/11/2024 <br />
          <strong>Place:</strong> Hassan
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    lineHeight: 1.6,
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  photo: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    marginBottom: "10px",
    border: "3px solid #4CAF50",
  },
  name: {
    fontSize: "2.5rem",
    color: "#4CAF50",
  },
  contact: {
    fontSize: "1rem",
    color: "#666",
  },
  section: {
    marginBottom: "20px",
  },
  project: {
    marginBottom: "10px",
  },
};

export default Portfolio;
