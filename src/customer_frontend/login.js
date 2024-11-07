import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./customer_api";
import './login.css';

function Login() {
    const [formData, setFormData] = useState({
        customer_username: "",
        customer_password: "",
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
        const response = await login(formData);

        if (response.access) {
            setMessage("Login successful!");
            navigate("/allproduct");
        } else {
            setMessage("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="login-background">
            <div className="login-container">
                <h1 className="login-title">ShopEase</h1>
                <h2 className="login-heading">
                    {formData.customer_username 
                        ? `Welcome back, ${formData.customer_username}` 
                        : "Login to your account"}
                </h2>
                <form className="login-form" onSubmit={handleSubmit}>
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
                    <button type="submit" className="submit-btn">Login</button>
                </form>
                {message && <p className="response-message">{message}</p>}
            </div>
        </div>
    );
}

export default Login;
