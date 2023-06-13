import React, { useState } from 'react';
import './ContactForm.css';
import image from '../../images/logo5.png'

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    recipient: 'info@golfcarsunlimited.com'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  // eslint-disable-next-line
  return (
    <div className = "test">
      <div className ="title">
        <h1>Your Questions, Our Solutions: Let's Talk Sales and Service</h1>
      </div> 

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
            <label>
                <input type="text" className="form-input" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
            </label>
            <label>
                <input type="text" className="form-input" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
            </label>
          
            <img src={image} className="form-image" width={200} height={200} /> 
        </div>
        <div className="form-row">
            <label>
                <input type="email" className="form-input" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                <input type="tel" className="form-input" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} />
            </label>
        </div>
      <label>
        <textarea className="form-input-full" placeholder="Message"></textarea>
      </label>
      <input className="form-submit" type="submit" value="Submit" />
    </form> 
    </div>
  );
}

export default ContactForm;
