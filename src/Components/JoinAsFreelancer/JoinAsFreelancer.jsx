// src/FreelanceSection.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faLaptopCode, faHandshake, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import './JoinAsFreelancer.css';

const JoinAsFreelancer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    portfolio: "",
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted: ", formData);
  };

  return (
    <section className="freelance-section" id="free-section">
      <div className="container">
        <h2 className="title">Work as a Freelancer</h2>
        <p className="description">Join the global network of skilled professionals and start your freelance career today. Whether you're coding, designing, or writing, the possibilities are endless!</p>

        <div className="services">
          <div className="service">
            <FontAwesomeIcon icon={faBriefcase} className="service-icon" />
            <h3>Start Your Career</h3>
            <p>Launch your freelance journey and work on projects you're passionate about.</p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faLaptopCode} className="service-icon" />
            <h3>Work from Anywhere</h3>
            <p>All you need is a laptop and an internet connection. Freedom is key.</p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faHandshake} className="service-icon" />
            <h3>Collaborate with Clients</h3>
            <p>Build lasting relationships with clients from all over the world.</p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faThumbsUp} className="service-icon" />
            <h3>Get Paid What You Deserve</h3>
            <p>Set your rates, get paid for your skills, and ensure you're valued.</p>
          </div>
        </div>

        {/* Profile Creation Form */}
        <div className="profile-form-container">
          <h3 className="form-title">Create Your Freelancer Profile</h3>
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
                placeholder="e.g. Web Development, Graphic Design"
              />
            </div>
            <div className="form-group">
              <label htmlFor="experience">Experience (Years)</label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                placeholder="Enter your years of experience"
              />
            </div>
            <div className="form-group">
              <label htmlFor="portfolio">Portfolio Link</label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="Optional: Link to your portfolio"
              />
            </div>
            <button type="submit" className="submit-btn">Create Profile</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinAsFreelancer;
