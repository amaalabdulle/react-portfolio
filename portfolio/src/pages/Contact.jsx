import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        email: "",
        message: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", formData);
    };
    // Body
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <h2 className="text-center mb-4">Contact Me</h2>
                    <div className="mb-3 row">
                        <label htmlFor="phoneNumber" className="col-sm-4 col-form-label">Phone Number:</label>
                        <div className="col-sm-8">
                        <p id="phoneNumber" className="form-control-plaintext">07522839630</p>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="linkedin" className="col-sm-4 col-form-label">LinkedIn:</label>
                        <div className="col-sm-8">
                        <a href="https://www.linkedin.com/in/amaal-abdulle" id="linkedin" className="form-control-plaintext" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/amaal-abdulle</a>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-4 col-form-label">Email:</label>
                        <div className="col-sm-8">
                        <a href="mailto:amaalabdelmuid@gmail.com" id="email" className="form-control-plaintext">amaalabdelmuid@gmail.com</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                        </div>
                        <div className="text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;