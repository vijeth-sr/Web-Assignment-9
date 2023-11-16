// Home.js
import React from 'react';
import Card from '../component/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const cardsData = [
    {
      title: "A & P Job Consultancy",
      description: "At A & P Job Consultancy, we take pride in providing top-tier job opportunities and comprehensive guidance to our clientele. With a dedicated team and a commitment to excellence, we strive to match skilled individuals with rewarding career paths. Our personalized approach and extensive network ensure an optimal fit for both candidates and employers, making us the go-to destination for job seekers and businesses alike.",
    },
    {
      title: "Training Excellence",
      description: "We excel in training and mentoring, having empowered over 5000 individuals to reach their full potential and achieve remarkable success in their careers. Our tailored programs cover a wide spectrum of industries, offering cutting-edge insights and hands-on experience that pave the way for professional growth. With a focus on skill enhancement and practical learning, we prepare our students to thrive in today's competitive job market.",
    },
    {
      title: "Pefect Guidance",
      description: "We pride ourselves on training over 5000 individuals, equipping them with industry-relevant skills and knowledge. Our commitment to excellence ensures a success rate where our graduates secure positions in top-tier companies, commanding impressive salaries of 100k+ dollars annually. At Training Excellence, we foster an environment that encourages growth and innovation, empowering individuals to reach new heights in their careers.",
    },
     {
      title: "Experience Teachers",
      description: "Our seasoned faculty comprisesng talent and shaping careers. With years of industry expertise and a passion for education, our teachers bring invaluable knowledge and insights to the classroom. Their guidance and mentorship empower students, providing a conducive environment for learning and growth.",
    },
    {
      title: "Less Expensive",
      description: "We understand the value t. Despite our high standards, dedicated to nurturing talent and shaping career dedicated to nurturiner our programs are competitively priced to ensure accessibility to all aspiring individuals. We believe in providing top-notch education without burdening students financially, making excellence attainable for everyone.",
    },
    {
      title: "Job Guarantee",
      description: "Our commitment to your success is unwavering. We offer a job guarantee upon successful completion of our programs, dedicated to nurturing talent and shaping career ensuring that our students enter the job market with confidence. L, we facilitate job placements, assuring a smooth transition from education to employment for our graduates.",
    }
  ];

  return (
    <div className="container mt-1">
      <h1 className="text-center mb-3">Welcome to vijeth web services</h1>
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4">
            <Card title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
