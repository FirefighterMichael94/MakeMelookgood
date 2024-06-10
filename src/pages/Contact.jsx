import React, { useState } from 'react';
import '../index.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate inputs on change
    switch (name) {
      case 'name':
        setFormErrors({ ...formErrors, name: value ? '' : 'Name is required' });
        break;
      case 'email':
        setFormErrors({ ...formErrors, email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address' });
        break;
      case 'message':
        setFormErrors({ ...formErrors, message: value.length <= 250 ? '' : 'Message must be 250 characters or less' });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are any errors
    if (formErrors.name || formErrors.email || formErrors.message) {
      alert('Please fix the errors in the form before submitting');
      return;
    }

    // For now, we just log the form data
    console.log(formData);

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength="250"
              required
            />
            {formErrors.message && <span className="error">{formErrors.message}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
