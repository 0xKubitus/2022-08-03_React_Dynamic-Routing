import React, { useState, useEffect, } from 'react';
import { useParams, Link, } from 'react-router-dom'; 

import books from '../../data/books';


const Book = () => {
  const { bookSlug } = useParams();
  // Par défaut, j'indique que nous n'avons pas de livre sélectionné. 
  const [currentBook, setCurrentBook] = useState(undefined);

  // Dès que le composant est monté ou que l'URL change, j'appelle setCurrentBook en lui passant le livre, grâce au useEffect().
  useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    //console.log(foundBook)
    setCurrentBook(foundBook);
  }, [bookSlug])


  const bookContent = (book) => {
    return (
      <div className="real-book-content">
        <p id="book-title"><b><u>{book.title}</u></b>, {book.author}</p>
        <p id="book-desc">{book.description}</p>
      </div>
    )
  }


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
    <div className="books-main">
      <div className="booklinks">{booksLinks}</div>

      <div className="book-content">
        {currentBook ? bookContent(currentBook) : console.log("erreur")}
      </div>
    </div>
  )
};


export default Book;