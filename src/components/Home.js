import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";
import "./css/darkMode.css";
import tiger from "../img/tiger.png";
import claws from "../img/claws1.png";
import claws2 from "../img/claws2.png";
import actoFrogged from "../img/actoFrogged.png";

function Home() {
  return (
    <div>
      <section id="hero-section" className="hero-section">
        <div className="overlay"></div>
        <img src={tiger} alt="Tiger" className="tiger-image" />
        <h1 className="animated-text">Tiger Software Developers LLC</h1>
        <p>Building Robust Web Solutions</p>
        <a href="#cta-section" className="btn btn-primary">
          Get Started
        </a>
        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-paragraph">
            <img src={claws} alt="Claws" className="claw-image left" />
            <p>
              We are a team of dedicated web developers with expertise in modern
              web technologies. <strong>Trei Feske</strong>, the visionary
              behind Tiger Software Developers, embarked on his coding journey
              as a zealous teenager, with the world of video games igniting his
              passion. His enthusiasm for coding matured in college, where web
              development became his primary pursuit. Recognizing the untapped
              potential in the Louisiana region, Trei established Tiger Software
              Developers to revolutionize the web development landscape where
              it's often overlooked.
            </p>
          </div>
          <div className="about-paragraph alternate">
            <img src={claws2} alt="Claws" className="claw-image right" />
            <p>
              Trei's team is a testament to his journey, comprised of fellow
              cohort members from both college and bootcamp. Although spread out
              across the US, the power of the internet bridges their
              geographical divides, enabling seamless collaboration. This unity
              allows them to consistently exceed client expectations.
            </p>
          </div>
          <div className="about-paragraph">
            <img src={claws} alt="Claws" className="claw-image left" />
            <p>
              At the core of Trei's ethos is transparency and open
              communication. He firmly believes in being there for his
              customers, quite literally at any hour, underscoring his
              dedication with a remarkable 24/7 availability. With Trei and
              Tiger Software Developers, clients don't just get a service; they
              gain a committed partner in their digital journey.
            </p>
          </div>
          <div className="about-paragraph alternate">
            <img src={claws2} alt="Claws" className="claw-image right" />
            <p>
              In addition to our commitment to quality and customer service, we
              pride ourselves on being affordable and competitive in our
              pricing. Unlike template-based solutions offered by platforms like
              Squarespace, WordPress, and GoDaddy, our team of real developers
              writes actual code, utilizing the latest frameworks and
              technologies. This approach allows us to create bespoke,
              high-performance web solutions that are tailored specifically to
              your needs, all while remaining cost-effective. Choose Tiger
              Software Developers for cutting-edge web development that aligns
              with your budget.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <img src={actoFrogged} alt="ActoFrogged" className="services-image" />
        <p className="services-description">
          We offer a comprehensive range of services including Web Development,
          Email Campaigns & Autoresponders, Analytics & Reporting, Inventory
          Management, POS Integration, Social Media Management, SEO
          Optimization, Facebook Pixel Implementation, Google Ads Management,
          Google Indexing Services, Membership & Subscription Services,
          E-commerce Solutions, Professional Logo Design, Video Production &
          Editing, Google Business Listing Optimization, Newsletters & Email
          Automation, Customer Management Systems, and much more!
        </p>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <blockquote className="testimonial">
          <p>"...I love, love, love the Website."</p>
          <cite>- Dan Broe</cite>
          <a
            href="http://danbroemusic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Visit Website
          </a>
        </blockquote>
        <blockquote className="testimonial">
          <p>
            "I now have a website that you can go check out. Just click the
            link above to visit the website!! And if you’re looking to start
            your own website, contact Tiger Software Developers!!"
          </p>
          <cite>- Aaron Justice</cite>
          <a
            href="http://aaron-justice-music.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Visit Website
          </a>
        </blockquote>
        <blockquote className="testimonial">
          <p>
            "Tiger Software Developers transformed our online presence! Highly
            recommend them!"
          </p>
          <cite>- FRC</cite>
          <a
            href="http://frc-louisiana.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Visit Website
          </a>
        </blockquote>
        <blockquote className="testimonial">
          <p>"They went above and beyond our expectations!"</p>
          <cite>- The Flea Market of Louisiana</cite>
          <a
            href="https://thefleamarketoflouisiana.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Visit Website
          </a>
        </blockquote>
        <blockquote className="testimonial">
          <p>"You guys are awesome!"</p>
          <cite>- Uncle Chess</cite>
          <a
            href="https://unclechess.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Visit Website
          </a>
        </blockquote>
      </section>

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
