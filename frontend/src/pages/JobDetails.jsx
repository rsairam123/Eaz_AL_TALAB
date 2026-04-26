import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  
  return (
    <div className="container-custom section-padding">
      <h1 className="text-3xl font-heading font-bold mb-4">Job Details</h1>
      <p className="text-gray-600">Job ID: {id} - Details page coming soon</p>
    </div>
  );
};

export default JobDetails;

// Made with Bob
