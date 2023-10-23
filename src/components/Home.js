import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";
import Logout from "./Logout";
import "./css/darkMode.css";
import tiger from "../img/tiger.png";

function Home() {
  const isDarkMode = document.body.getAttribute("data-dark") === "true";

  return (
    <div className={`home-container ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <img src={tiger} alt="Tiger" className="tiger-image" />
        <h1>Welcome to Tiger Software Developers</h1>
        <p>Building Robust Web Solutions</p>
        {/*  <Link to="/contact" className="btn btn-primary">Contact Us</Link> */}
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <br/>
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
        <br/>
        <p>
          Trei's team is a testament to his journey, comprised of fellow cohort
          members from both college and bootcamp. Although spread out across the
          US, the power of the internet bridges their geographical divides,
          enabling seamless collaboration. This unity allows them to
          consistently exceed client expectations.
        </p>
        <br/>
        <p>
          At the core of Trei's ethos is transparency and open communication. He
          firmly believes in being there for his customers, quite literally at
          any hour, underscoring his dedication with a remarkable 24/7
          availability. With Trei and Tiger Software Developers, clients don't
          just get a service; they gain a committed partner in their digital
          journey.
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

      {/* Testimonials (Optional) */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <blockquote>
          <p>
            "Tiger Software Developers transformed our online presence! Highly
            recommend them!"
          </p>
          <cite>- FRC</cite>
          <br />
          <br />
          <p>
            "I now have a website that you can go check out. Just click the link
            above to visit the website!! And if you’re looking to start your own
            website, contact Tiger Software Developers!!"
          </p>
          <cite>- Aaron Justice</cite>
        </blockquote>
        {/* ... Add more testimonials as needed */}
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to start your project?</h2>
        <Link to="/contact" className="btn btn-success">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default Home;
