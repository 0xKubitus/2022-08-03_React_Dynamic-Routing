import React, { useState, useEffect, } from 'react';
import { useParams, Link, } from 'react-router-dom'; 

import books from '../../data/books';


const Book = () => {
  const { bookSlug } = useParams();
  const [currentBook, setCurrentBook] = useState(undefined);

  useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug])

  const booksLinks = books.map( (book) => {  
    return (
      <li className="navbar-links" key={book.slug}>
        <Link to={`/book/${book.slug}`}>
          {book.title}
        </Link> 
      </li>
    );
  });


  
  return (
    <div className="booklinks-main">
      <div className="booklinks-sub">{booksLinks}</div>
    </div>
  )
};


export default Book;