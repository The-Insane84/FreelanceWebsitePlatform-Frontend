// src/JoinAsCustomerSection.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faProjectDiagram, faMoneyBillWave, faHandshake } from "@fortawesome/free-solid-svg-icons";
import './JoinAsCustomer.css';

const JoinAsCustomer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectDescription: "",
        skillsRequired: "",
        budget: "",
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
        console.log("Customer Form Submitted: ", formData);
    };

    return (
        <section className="customer-section" id="join-free">
            <div className="container">
                <h2 className="title">Join as a Customer</h2>
                <p className="description">Looking to hire skilled freelancers? Fill out the form below to connect with top talent and get your projects done on time!</p>

                <div className="services">
                    <div className="service">
                        <FontAwesomeIcon icon={faUserTie} className="service-icon" />
                        <h3>Find the Right Talent</h3>
                        <p>Browse through a wide range of freelancers based on your project needs.</p>
                    </div>
                    <div className="service">
                        <FontAwesomeIcon icon={faProjectDiagram} className="service-icon" />
                        <h3>Manage Your Projects</h3>
                        <p>Stay organized and keep track of your project progress.</p>
                    </div>
                    <div className="service">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="service-icon" />
                        <h3>Affordable Solutions</h3>
                        <p>Set your budget and find freelancers that match your financial goals.</p>
                    </div>
                    <div className="service">
                        <FontAwesomeIcon icon={faHandshake} className="service-icon" />
                        <h3>Build Long-term Relationships</h3>
                        <p>Collaborate with freelancers for ongoing or one-time projects.</p>
                    </div>
                </div>

                {/* Customer Form */}
                <div className="customer-form-container">
                    <h3 className="form-title">Create Your Hiring Profile</h3>
                    <form onSubmit={handleSubmit} className="customer-form">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
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
                            <label htmlFor="projectDescription">Project Description</label>
                            <textarea
                                id="projectDescription"
                                name="projectDescription"
                                value={formData.projectDescription}
                                onChange={handleChange}
                                required
                                placeholder="Describe your project in detail"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="skillsRequired">Skills Required</label>
                            <input
                                type="text"
                                id="skillsRequired"
                                name="skillsRequired"
                                value={formData.skillsRequired}
                                onChange={handleChange}
                                required
                                placeholder="e.g. Web Development, Graphic Design"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="budget">Project Budget</label>
                            <input
                                type="number"
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                required
                                placeholder="Enter your budget"
                            />
                        </div>
                        <button type="submit" className="submit-btn">Post Your Project</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default JoinAsCustomer;
