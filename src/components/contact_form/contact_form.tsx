'use client';
import React from 'react';
import { FaBriefcase, FaTools } from 'react-icons/fa';
import styles from './contact_form.module.css';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';



const ContactForm: React.FC = () => {
  return (
    <main style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        <div className={styles.heading}>
        <h1 className={styles.title}>We’d love to hear from you</h1>
        <p className={styles.subtitle}>Let’s build something great together.</p>
        </div>

      <section className={styles.contactSection}>
      <div className={styles.leftColumn}>
        <h2>Get in Touch</h2>
        <p>Fill out the form below and we’ll get back to you promptly!</p>
      </div>
      <div className={styles.rightColumn}>


        <form className={styles.form}>
          <label className={styles.label}>
            Name
            <input className={styles.input} type="text" placeholder="Your Name" required />
            <small>required</small>
          </label>

          <label className={styles.label}>
            Email
            <input className={styles.input} type="email" placeholder="Your Email" required />
            <small>required</small>
          </label>
<label className={styles.label}>
            Company Name
            <input  className={styles.input} type="text" placeholder="Your Company (optional)" />
       </label >

          <label className={styles.label}>
            Phone Number
            <input className={styles.input} type="tel" placeholder="Your Phone (optional)" />
          </label>

         <label className={styles.label}>
            Message
            <input className={styles.input} type="text" placeholder="Your Message" required />
            <small className={styles.small}>required</small>
          </label>

          <button className={styles.formButton} type="submit">Send Message</button>

        </form>
      </div>
    </section>



<section className={styles.wrapper}>

    
     <div className={styles.mapBox}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.360101161904!2d85.42746247529948!3d27.675263076201066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1ab1cb000fe7%3A0xb3c39c2525b8b385!2sByasi%20Gate%2C%20Nagarkot%20Rd%2C%20Bhaktapur%2044800!5e0!3m2!1sen!2snp!4v1751175340360!5m2!1sen!2snp"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      <div className={styles.content}>
        
        <div className={styles.leftColumn}>
          <h2>Company Details</h2>
          <p>Get to know us better!</p>
        </div>

<div className={styles.block2}>












      
        
        <div className={styles.boxes}>
          <div className={styles.imagePlaceholder}></div>

          <div className={styles.square2}>
            <h1 className={styles.title1}>Company Name</h1>
            <p>
              Tech Solutions Inc.
            </p>
          </div>
          </div>
    <br/>

<div className={styles.boxes}>
          <div className={styles.imagePlaceholder}></div>

          <div className={styles.square2}>
            <h1 className={styles.title1}>Main Office Address</h1>
            <p>
              Address hai
            </p>
          </div>
          </div>
       <br/>
<div className={styles.boxes}>
          <div className={styles.imagePlaceholder}></div>

          <div className={styles.square2}>
            <h1 className={styles.title1}>Phone Number</h1>
            <p>
              9800000000
            </p>
          </div>
  </div>
 <br/>

<div className={styles.boxes}>
          <div className={styles.imagePlaceholder}></div>

          <div className={styles.square2}>
            <h1 className={styles.title1}>General Email</h1>
            <p>
              @gmail.com
            </p>
          </div>
   </div>

 <br/>
<div className={styles.boxes}>
          <div className={styles.imagePlaceholder}></div>

          <div className={styles.square2}>
            <h1 className={styles.title1}>Business Hours</h1>
            <p>
              Mon - Fri: 9 A.M. – 6 P.M.
            </p>
          </div>
     </div>




          
        </div>
      </div>
    </section>



<section className={styles.wrapper}>
        <div className={styles.heading1}>
        <h1 className={styles.title}>Follow Us</h1>
        <p className={styles.subtitle}>Stay connected through our social media channels!</p>
        </div>

<div className={styles.socialGrid}>
  {[
    {
      name: 'LinkedIn',
      text: 'Connect with us on LinkedIn!',
      icon: <FaLinkedin size={30} style={{ color: '#0077b5', marginRight: 8 }} />,

       url: 'https://www.linkedin.com',
      embed: (
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7042501730968596480"
          width="100%"
          height="300"
          style={{ border: 'none' }}
          allowFullScreen
          title="LinkedIn Embed"
        ></iframe>
      ),
    },
    {
      name: 'Twitter',
      text: 'Follow us on Twitter for updates!',
      icon: <FaTwitter size={30} style={{ color: '#1da1f2', marginRight: 8 }} />,
      url: 'https://www.linkedin.com',
      embed: (
        <iframe
          src="https://twitframe.com/show?url=https://twitter.com/TwitterDev/status/1641577503761788929"
          width="100%"
          height="300"
          style={{ border: 'none' }}
          allowFullScreen
          title="Twitter Embed"
        ></iframe>
      ),
    },
    {
      name: 'Facebook',
      text: 'Like us on Facebook!',
      icon: <FaFacebook size={30} style={{ color: '#1877f2', marginRight: 8 }} />,
       url: 'https://www.linkedin.com',
      embed: (
        <iframe
  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
  style={{ width: '100%', height: 'auto', border: 'none', minHeight: '300px' }}
  allow="encrypted-media"
  allowFullScreen
  title="Facebook Embed"
/>

      ),
    },
  ].map((platform, index) => (
    <div key={index} className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.avatar}>{platform.icon}</div>
        <span>{platform.name}</span>
        <div className={styles.menuIcon}>⋯</div>
      </div>

      <div className={styles.embedContent}>{platform.embed}</div>

      <div className={styles.cardFooter}>
        <p>{platform.text}</p>
        <button
  onClick={() => window.open(platform.url, '_blank')}
  className={styles.button}
>
  Social
</button>


      </div>
    </div>
  ))}
</div>


  </section>



  
  


   <div
  style={{ borderBottom: '2px solid #dddada' }}
  className={styles.kcontainer}
>
        <div className={styles.kblock}>
          <h3>Interested in working with us?</h3>
        
          <button>Careers</button>
        </div>
        <div className={styles.kblock1}>
        
         
          <div className={styles.kimagePlaceholder}>
  <FaBriefcase style={{ marginRight: '8px', height: '100%', width: '100%' }} />
</div>

          
            <div>
              
              <h1 className={styles.ktitle}>Check Our Careers</h1>
              <p>Join our team!</p>
            
            
            
          </div>
        
        </div>
        </div>
     

        <div
  
  className={styles.kcontainer}
>
        <div className={styles.kblock}>
          <h3>Need Support?</h3>
        
          <button>Help Center</button>
        </div>
        <div className={styles.kblock1}>

                    <div className={styles.kimagePlaceholder}>
  <FaTools style={{ marginRight: '8px', height: '100%', width: '100%' }} />
</div>

            <div >
              
              <h1 className={styles.ktitle}>Visit Our Help Center</h1>
            
            <p>Get assistance with your queries.</p>
          </div>
        </div>
        </div>

  










    </main>
  );
};

export default ContactForm;
