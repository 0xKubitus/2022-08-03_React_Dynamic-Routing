import React from 'react';

import books from '../../data/books';


const Book = () => {
  const booksLinks = books.map( (book) => {  
    return (
      <li className="navbar-links" key={book.slug}>{book.title}</li>
    );
  });

  return booksLinks
};


export default Book;