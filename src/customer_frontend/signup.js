import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "./customer_api";
import './signup.css';

function Signup() {
    const [formData, setFormData] = useState({
        customer_name: "",
        customer_address: "",
        customer_phoneNo: "",
        customer_username: "",
        customer_password: ""
    });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await signup(formData);

        if (response.access) {
            setMessage("Signup successful!");
            navigate("/login");
        } else {
            setMessage("Signup failed. Please try again.");
        }
    };

    return (
        <div className="signup-background">
            <div className="signup-container">
                <h1 className="signup-title">ShopEase</h1>
                <h2 className="signup-heading">Create Your Account</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="customer_name"
                        placeholder="Name"
                        value={formData.customer_name}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                    <input
                        type="text"
                        name="customer_address"
                        placeholder="Address"
                        value={formData.customer_address}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                    <input
                        type="text"
                        name="customer_phoneNo"
                        placeholder="Phone Number"
                        value={formData.customer_phoneNo}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                    <input
                        type="text"
                        name="customer_username"
                        placeholder="Username"
                        value={formData.customer_username}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                    <input
                        type="password"
                        name="customer_password"
                        placeholder="Password"
                        value={formData.customer_password}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>
                {message && <p className="response-message">{message}</p>}
            </div>
        </div>
    );
}

export default Signup;
