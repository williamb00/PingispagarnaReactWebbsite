import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (formData.name.trim() === '') {
            errors.name = 'Name is required';
        }
        if (formData.email.trim() === '') {
            errors.email = 'Email is required';
        }
        if (formData.message.trim() === '') {
            errors.message = 'Message is required';
        }
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            // Skicka formulärdata till backend eller hantera här
            console.log('Form submitted:', formData);
            // Nollställ formulär efter inlämning
            setFormData({ name: '', email: '', message: '' });
            setFormErrors({});
        }
    };

    return (
        <section className='Formula'>
        <div className="contact-form-box">
            <h2>Leave us a message for any information.</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <p className="error">{formErrors.name}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <p className="error">{formErrors.email}</p>}
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Your Message*"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {formErrors.message && <p className="error">{formErrors.message}</p>}
                </div>
                <button type="submit" className="btn-yellow">Send Message</button>
            </form>
        </div>
        </section>
    );
};

export default ContactForm;
