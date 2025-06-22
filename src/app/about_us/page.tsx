import React from "react";
import styles from "./about_us.module.css";

const AboutPage: React.FC = () => {
  return (
    <main style={{ maxWidth: "100%", margin: "0 auto", padding: "2rem" }}>
      <div className={styles.block}>
        <h1 className={styles.title}>About Us</h1>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          Innovating Technology, Empowering people
        </p>

        <button className={styles.button} type="submit">
          Join Us
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.block1}>
          <h1 className={styles.title2}>Our Mission</h1>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            At [Company name], our mission is to deliver quality tech solutions
            that empower our clients and nurture enduring parternships.
          </p>
        </div>
        <div className={styles.block2}>
          <div className={styles.imagePlaceholder}></div>

          <div className={styles.square2}>
            <h1 className={styles.title1}>Mission Focus</h1>
            <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Focusing on quality,reliability, and long-term relationships.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.block1}>
          <h1 className={styles.title2}>Our Story</h1>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            Discover our journey and milestones.
          </p>
        </div>
        <div className={styles.block2}>
          <div className={styles.imagePlaceholder}></div>

          <div className={styles.square2}>
            <h1 className={styles.title1}>Company Timeline</h1>
            <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Since our founding in [year], we've achived remarkable growth
              and completed noteworthy projects.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.block1}>
          <h1 className={styles.title2}>Our Culture</h1>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            A culture of innovation, respect, and continuous growth.
          </p>
        </div>
        <div className={styles.block2}>
          <div className={styles.imagePlaceholder}></div>

          <div className={styles.square2}>
            <h1 className={styles.title1}>Team Spirit</h1>
            <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              We priortize learning, diversity, and a passion for technology.
            </p>
          </div>
        </div>
      </div>

      
    </main>
  );
};

export default AboutPage;
