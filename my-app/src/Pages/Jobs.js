import React from 'react';
import Card from '../component/job-card';
import image1 from '../images/GCP.jpg';
import image2 from '../images/js.jpeg';
import image3 from '../images/azure.jpeg';

const Jobs = () => {
  const jobDetails = [
    {
      title: 'Job 1',
      description: 'Join Google and work on innovativ  and sties  and leadership, embark on a journey of constsd sfgs  fsfsdfss sdfbsfhat values curiosity, creativity, and making a positive impact on t',
      imageUrl: image1,
    },
    {
      title: 'Job 2',
      description: 'At Amazon, dive into a fast-paced, customer-centric environment where your ideas and contributions impact millions. Join a team that focuses on excellence, innovation, and customer satisfaction.',
      imageUrl: image2,
    },
    {
      title: 'Job 3',
      description: 'Microsoft offers a dynamic workplace where aced,  ourney of constsd sfgs  fsfsdfss sdcustomer-centric environment where ve into a fast-paced,r-centric environment where y customer-centric environme your ideas andcollaboration and innovation thrive. Join us to solve complex challenges, drive growth, and make an impact on the world through technology.',
      imageUrl: image3,
    },
  ];

  return (
    <div className="jobs-container">
      <h1 className="text-center mb-4">Jobs</h1>
      <div className="d-flex justify-content-center">
        <div className="row">
          {jobDetails.map((job, index) => (
            <div className="col-md-4" key={index}>
              <Card
                title={job.title}
                description={job.description}
                imageUrl={job.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
