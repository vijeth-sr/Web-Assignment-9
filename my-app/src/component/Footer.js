import React from 'react';

const Footer = () => {
  return (
    <footer className="footer fixed-bottom bg-dark text-white text-center py-1">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-md-start">
            <p>Email: contact@yourwebsite.com</p>
          </div>
      
          <div className="col-md-4 text-md-end">
            <p>Phone: +123456789</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
