"use client";
import React, { useState, useEffect } from "react";

import styles from "./about_us.module.css";

const AboutUs: React.FC = () => {
  const sliderTexts = [
    "Join Us in Making a Difference",
    "Innovating Technology, Empowering People",
    "A culture of innovation, respect, and continuous growth.",
    "Transforming Ideas into Reality",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sliderTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      icon: "🔍",
      title: "Integrity",
      description: "We uphold honesty and transparency.",
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We embrace change and challenge the status quo.",
    },
    {
      icon: "🏆",
      title: "Excellence",
      description: "We strive for the highest standards in everything we do.",
    },

    {
      icon: "🤝",
      title: "Collaboration",
      description: "We believe teamwork drives success.",
    },
    {
      icon: "👥",
      title: "Client Focus",
      description: "Our clients are at the core of our mission.",
    },
  ];

  return (
    <main style={{ maxWidth: "100%", margin: "0 auto", padding: "2rem" }}>
      <div className={styles.block}>
        <h1 className={styles.title}>About Us</h1>
        <p
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            color: "#ffffff",
          }}
        >
          Innovating Technology, Empowering people
        </p>
        <br />
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

      <section className={styles.valuesSection}>
        <h2 className={styles.heading}>Our Values</h2>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          Our principles guide our actions and decisions.
        </p>
        <br />
        <br />

        <div className={styles.grid}>
          <div className={styles.row}>
            {values.slice(0, 3).map((value, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>{value.icon}</div>
                <h3 className={styles.iconname}>{value.title}</h3>
                <p className={styles.description}>{value.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.rowCenter}>
            {values.slice(3).map((value, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>{value.icon}</div>
                <h3 className={styles.iconname}>{value.title}</h3>
                <p className={styles.description}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Since our founding in [year], we've achived remarkable growth and
              completed noteworthy projects.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.block3}>
          <div className={styles.imagePlaceholder1}></div>

          <div className={styles.square2}>
            <h1 className={styles.title2}>Meet Our Team</h1>
            <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              We have a diverse and talented dedicated to fostering innovation.
            </p>
          </div>
        </div>
        <div className={styles.block4}>
          <button className={styles.button1} type="submit">
            Learn More
          </button>
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

      <div className={styles.slider}>
        <p className={styles.slideText}>{sliderTexts[index]}</p>
      </div>
    </main>
  );
};

export default AboutUs;
