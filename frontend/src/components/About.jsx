import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Our philosophy is simple yet profound: to craft extraordinary moments through exceptional food. Every dish is a masterpiece, thoughtfully curated by our culinary experts who combine global inspirations with the finest locally sourced ingredients. From the first aroma to the last bite, each creation is designed to delight the senses and leave a lasting impression.
              Step into an ambiance that exudes sophistication warm lighting, luxurious interiors, and an inviting atmosphere that makes every meal feel special. Whether you’re here for an intimate dinner, a family gathering, or a corporate celebration, our attentive service ensures every detail is taken care of with grace.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
