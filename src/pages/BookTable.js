import React, { useState, useEffect } from 'react';
import axios from 'axios';


function LibraryTable() {
  const [libraries, setLibraries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.GATSBY_API_URL}/my-librarays`);
        setLibraries(response.data.data); // Access the data array within the response
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Library Table</h1>
      {isLoading && <p>Loading libraries...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {libraries.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Book Type</th>
              <th>Book Description</th>
              <th>Book Quantity</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {libraries.map((library) => (
              <tr key={library.id}>
                <td>{library.attributes?.bookTitle}</td> {/* Access with optional chaining */}
                <td>{library.attributes?.bookAuthor}</td>
                <td>{library.attributes?.bookPrice}</td>
                <td>{library.attributes?.bookType}</td>
                <td>{library.attributes?.bookDescription}</td>
                <td>{library.attributes?.bookQty}</td>
                {/* Add more table cells as needed, accessing data from attributes */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LibraryTable;
