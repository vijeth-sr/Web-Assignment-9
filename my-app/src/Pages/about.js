// About.js
import React from 'react';
import Card from '../component/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const cardsData = [
    {
      title: "Our Vision",
      description: "Our goal is to transform the landscape of career advancement and recruitment services by promoting creativity, honesty, and outstanding performance. We are dedicated to establishing a nexus that connects skilled professionals with leading organizations, facilitating shared development and achievement. Our commitment lies in providing a dynamic environment where exceptional talent and industry leaders can converge, creating opportunities for professional growth and organizational success",
    },
    {
      title: "Our Mission",
      description: "Our mission is to equip individuals with the essential skills and prospects needed to realize their professional goals. We are committed to offering thorough mentorship, top-tier education, and a nurturing atmosphere that cultivates talent and aids in career progression. Our focus is on creating a supportive framework that enables personal growth and fosters the achievement of vocational milestones.",
    },
    {
      title: "Our Values",
      description: "We maintain high ethical practices, put our clients' needs first, and value variety in every facet of our work. Our ethos is grounded in clear communication, responsibility, and a focus on individual needs, ensuring that every interaction is guided by these core values. ",
    },
    {
        title: "Our Strategy",
        description: "We utilize a strategic methodology to bridge the gap between talented individuals and esteemed companies. Leveraging our extensive networks and partnerships, we devise customized plans that serve the interests of both career aspirants and hiring entities, guaranteeing reciprocal advancement and prosperity.",
      },
      {
        title: "Client-Centric Focus",
        description: "Customer fulfillment is the catalyst for our endeavors. We focus on comprehending the requirements of both job seekers and businesses, tailoring our offerings to deliver targeted and efficient resolutions. This approach is key in nurturing enduring relationships and partnerships.",
      },
      {
        title: "Innovation & Adaptability",
        description: "Creativity propels our advancement. We are constantly evolving with the dynamic trends of the industry, incorporating cutting-edge technology to refine our offerings. This commitment to innovation ensures we stay nimble and responsive, effectively meeting the changing needs of the employment landscape.",
      }
  ];

  return (
    <div className="container mt-3">
      <h1 className="text-center mb-3">About Us</h1>
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4">
            <div className="card text-white bg-success mb-3">
              <div className="card-header">{card.title}</div>
              <div className="card-body">
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
