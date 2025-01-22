// Login.js
import React, { useState } from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState({});

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" onChange={handleChange} placeholder="Email" required />
            <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
            <button type="submit">Log In</button>
        </form>
    );
};

export default Login;
