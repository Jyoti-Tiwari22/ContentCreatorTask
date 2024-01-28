import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ContentForm = () => {
  // useState to store form input values
  const [content, setContent] = useState({ title: '', description: '', link: '' });

  // Function to handle changes in the inputs
  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  // Function to fetch content data
  const fetchData = () => {
    axios.get('/api/contents')
      .then(response => {
        // successful data fetch
      })
      .catch(error => console.error('Error fetching contents:', error));
  };

  // UseEffect hook to fetch data
  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission action
    try {
      const response = await axios.post('/api/submit-content', content);
      console.log('Submitted:', response.data);
      // Handle successful form submissions print
    } catch (error) {
      console.error('Error submitting content:', error);
      // Handle submission error print
    }
    fetchData(); // Fetch data again to update the preview
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input type="text" className="form-control" id="title" name="title" value={content.title} onChange={handleChange} placeholder="Title" required />
        </div>
        <div className="form-group mb-3">
          <textarea className="form-control" id="description" name="description" value={content.description} onChange={handleChange} placeholder="Description" required />
        </div>
        <div className="form-group mb-3">
          <input type="text" className="form-control" id="link" name="link" value={content.link} onChange={handleChange} placeholder="Link" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {/* Removed showPreview and submittedData states as they are not used */}
    </div>
  );
};

export default ContentForm;
