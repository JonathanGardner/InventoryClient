import React from 'react';
import './ContactUsPage.css'
import ContactUs from '../../components/contact/ContactUs';
import ContactForm from '../../components/contact/ContactForm';
import TitleBar from './TitleBar'

function ContactUsPage() {
  return (
    <div>
      <div className="contact">
        <TitleBar />
      </div>

      <div>
        <ContactUs color = '#0e361a'/>
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUsPage;
