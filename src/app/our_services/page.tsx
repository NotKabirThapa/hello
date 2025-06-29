'use client';
import React from 'react';
import styles from "./our_services.module.css";
const OurServices: React.FC = () => {
return(
    <main style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>



<div className={styles.container}>
        <div className={styles.block1}>
 
<div >

        <h1 className={styles.title}>Empowering your digital transformation</h1>
        <p
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            color: "#ffffff",
          }}
        >
          We provide top-notch IT solutions to help your business thrive.
        </p>
        <br />
        <button className={styles.button} type="submit">
          Get Quote
        </button>
      </div>

        </div>
       
          <div className={styles.imagePlaceholder}></div>
        
      </div>





      </main>
);
};
export default OurServices;