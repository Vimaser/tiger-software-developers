import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";
/* import Logout from "./Logout"; */
import "./css/darkMode.css";
import tiger from "../img/tiger.png";
import backgroundVideo from "../img/TIGERSOFTWARE.mp4";

function Home() {
  const isDarkMode = document.body.getAttribute("data-dark") === "true";
  const [showVideo, setShowVideo] = useState(true);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  const skipVideo = () => {
    setShowVideo(false);
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setShowVideo(!isMobile);
    
    window.addEventListener("click", skipVideo);
    window.addEventListener("keydown", skipVideo);

    return () => {
      window.removeEventListener("click", skipVideo);
      window.removeEventListener("keydown", skipVideo);
    };
  }, []);

  return (
    <div className={`home-container ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Video Popup */}
      {showVideo && (
        <div className="video-popup">
          <video
            autoPlay
            loop={false}
            muted
            className={`popup-video ${!showVideo && "fade-out"}`}
            onEnded={handleVideoEnd}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Okay, honestly took these out because I didn't like how they looked and I'm keeping them commented in as reference. It's my site lol, I do what I want *in the voice of Eric Cartman* */}
      {/* Video Background */}
      {/*       <video autoPlay loop muted className="backgroud-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video> */}
      {/* Hero Section */}
      <section className="hero-section">
        <img src={tiger} alt="Tiger" className="tiger-image" />
        <h1>Tiger Software Developers LLC</h1>
        <p>Building Robust Web Solutions</p>
        {/*  <Link to="/contact" className="btn btn-primary">Contact Us</Link> */}
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <br />
        <p>
          We are a team of dedicated web developers with expertise in modern web
          technologies. Trei Feske, the visionary behind Tiger Software
          Developers, embarked on his coding journey as a zealous teenager, with
          the world of video games igniting his passion. His enthusiasm for
          coding matured in college, where web development became his primary
          pursuit. Recognizing the untapped potential in the Louisiana region,
          Trei established Tiger Software Developers to revolutionize the web
          development landscape where it's often overlooked.
        </p>
        <br />
        <p>
          Trei's team is a testament to his journey, comprised of fellow cohort
          members from both college and bootcamp. Although spread out across the
          US, the power of the internet bridges their geographical divides,
          enabling seamless collaboration. This unity allows them to
          consistently exceed client expectations.
        </p>
        <br />
        <p>
          At the core of Trei's ethos is transparency and open communication. He
          firmly believes in being there for his customers, quite literally at
          any hour, underscoring his dedication with a remarkable 24/7
          availability. With Trei and Tiger Software Developers, clients don't
          just get a service; they gain a committed partner in their digital
          journey.
        </p>
        <br />
        <p>
          In addition to our commitment to quality and customer service, we
          pride ourselves on being affordable and competitive in our pricing.
          Unlike template-based solutions offered by platforms like Squarespace,
          WordPress, and GoDaddy, our team of real developers writes actual
          code, utilizing the latest frameworks and technologies. This approach
          allows us to create bespoke, high-performance web solutions that are
          tailored specifically to your needs, all while remaining
          cost-effective. Choose Tiger Software Developers for cutting-edge web
          development that aligns with your budget.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-item">
          <h3>Web Development</h3>
          <p>
            Building responsive and dynamic websites tailored to your needs.
          </p>
        </div>
        <div className="service-item">
          <h3>SEO Optimization</h3>
          <p>Ensuring your website ranks high on search engines.</p>
        </div>
        {/* ... Add more services as needed */}
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <blockquote>
          {/* First Testimonial */}{" "}
          <a
            href="http://danbroemusic.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>"...I love, love, love the Website."</p>
            <cite>- Dan Broe</cite>
          </a>
          <br />
          <br />
          {/* Second Testimonial */}
          <a
            href="http://aaron-justice-music.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              "I now have a website that you can go check out. Just click the
              link above to visit the website!! And if you’re looking to start
              your own website, contact Tiger Software Developers!!"
            </p>
            <cite>- Aaron Justice</cite>
          </a>
          <br />
          <br />
          {/* Third Testimonial */}
          <a
            href="http://frc-louisiana.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              "Tiger Software Developers transformed our online presence! Highly
              recommend them!"
            </p>
            <cite>- FRC</cite>
          </a>
          <br />
          <br />
          {/* Fourth Testimonial */}
          <a
            href="https://thefleamarketoflouisiana.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>"They went above and beyond our expectations!"</p>
            <cite>- The Flea Market of Louisiana</cite>
          </a>
          <br />
          <br />
          {/* Fifth Testimonial */}
          <a
            href="https://unclechess.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>"You guys are awesome!"</p>
            <cite>- Uncle Chess</cite>
          </a>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to start your project?</h2>
        <br />
        <Link to="/contact" className="btn btn-success">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default Home;
