import React from 'react';
import { Link } from 'react-router-dom'; 

import books from '../../data/books';


const Book = () => {
  const booksLinks = books.map( (book) => {  
    return (
      <li className="navbar-links" key={book.slug}>
        <Link to={`/book/${book.slug}`}>
          {book.title}
        </Link> 
      </li>
    );
  });

  return booksLinks
};


export default Book;