import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "./BookForm.css"; // Assuming you will create this CSS file for styling

const BookForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.GATSBY_API_URL}/my-librarays`,
        {
            data:{
          bookTitle: data.bookTitle,
          bookAuthor: data.bookAuthor,
          bookPrice: data.bookPrice,
          bookType: data.bookType,
          bookDescription: data.bookDescription,
          bookQty: data.bookQty,
        }
    }
      );

      setSuccess('Book details submitted successfully!');
      setError('');
      reset();
    } catch (error) {
      setError(error.response?.data?.message || error.message);
      setSuccess('');
    }
  };

  return (
    <div className="book-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Book Title:</label>
          <input
            type="text"
            {...register('bookTitle', { required: 'Book title is required' })}
          />
          {errors.bookTitle && <p style={{ color: 'red' }}>{errors.bookTitle.message}</p>}
        </div>
        <div>
          <label>Book Author:</label>
          <input
            type="text"
            {...register('bookAuthor', { required: 'Book author is required' })}
          />
          {errors.bookAuthor && <p style={{ color: 'red' }}>{errors.bookAuthor.message}</p>}
        </div>
        <div>
          <label>Book Price:</label>
          <input
            type="number"
            {...register('bookPrice', { required: 'Book price is required' })}
          />
          {errors.bookPrice && <p style={{ color: 'red' }}>{errors.bookPrice.message}</p>}
        </div>
        <div>
          <label>Book Type:</label>
          <input
            type="text"
            {...register('bookType', )}
          />
          {errors.bookType && <p style={{ color: 'red' }}>{errors.bookType.message}</p>}
        </div>
        <div>
          <label>Book Description:</label>
          <textarea
            {...register('bookDescription', { required: 'Book description is required' })}
          />
          {errors.bookDescription && <p style={{ color: 'red' }}>{errors.bookDescription.message}</p>}
        </div>
        <div>
          <label>Book Quantity:</label>
          <input
            type="number"
            {...register('bookQty', { required: 'Book quantity is required' })}
          />
          {errors.bookQty && <p style={{ color: 'red' }}>{errors.bookQty.message}</p>}
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookForm;
