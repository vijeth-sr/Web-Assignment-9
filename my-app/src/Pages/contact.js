import React from 'react';
import Card from '../component/Card';
import '../style/contact.css';

const Contact = () => {
  const myContactInfo = {
    title: 'My Contact Info',
    description: (
      <div>
        <p>Email: example@email.com</p>
        <p>Address: 123 Street, City</p> 
        <p>Phone: +1234567890</p>
      </div>
    ),
  };

  const userContactForm = {
    title: 'User Contact Form',
    description: (
        <form>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="emailInput" placeholder="Your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="nameInput" placeholder="Your name" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    ),
  };

  return (
    <div className="container mt-1">
      <div className="d-flex justify-content-center align-items-start flex-row">
        <div className="card" style={{ width: '500px', backgroundColor: 'lightblue',
            borderRadius: '8px',
            padding: '20px',
            marginRight: '20px' }}>
          <Card title={myContactInfo.title} description={myContactInfo.description} />
        </div>
        <div className="card" style={{ width: '500px', backgroundColor: 'lightgreen',
            borderRadius: '8px',
            padding: '20px' }}>
          <Card title={userContactForm.title} description={userContactForm.description} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
