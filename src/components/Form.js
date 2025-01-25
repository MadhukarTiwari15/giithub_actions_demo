import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (response.ok) alert('Form submitted successfully');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label><br />
            <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /></label><br />
            <label>Message: <textarea name="message" value={formData.message} onChange={handleChange}></textarea></label><br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
