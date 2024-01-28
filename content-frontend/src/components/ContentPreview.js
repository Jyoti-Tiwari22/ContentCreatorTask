import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ContentPreview = () => {
  // useState to store fetched content data
  const [data, setData] = useState([]);

  // useEffect hook to fetch content data
  useEffect(() => {
    axios.get('/api/contents')
      .then(response => {
        // set fetched data to state
        setData(response.data);
      })
      .catch(error => {
        // print errors during fetching
        console.error('Error fetching contents:', error);
      });
  }, []);

  // Logging data for debugging purposes
  console.log("Data in ContentPreview:", data);

  // Handling case where data hasn't been fetched or isn't an array
  if (!data || !Array.isArray(data)) {
    return <div>Loading or no data available...</div>;
  }

  // render the fetched content in a structured layout and map the data to show
  return (
    <div className="container mt-3 pt-5 rounded-4 contentPrev bg-white">
      {data.map((item, index) => (
        <div key={index}>
          <h3 className="font-weight-bold">Title: {item.title}</h3>
          <p className="font-weight-bold">Description: {item.description}</p>
          {item.link && (
            <a className="font-weight-bold" href={item.link} target="_blank" rel="noopener noreferrer">View Link</a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentPreview;
