// Card.js
import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="card bg-info text-white mb-4 shadow-sm">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
