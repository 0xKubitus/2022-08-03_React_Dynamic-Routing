import books from '../../data/books'


const booksLinks = books.map( (book) => {
  return (
    <li className="navbar-links">{book.slug}</li>
  )
})


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul id="navbar-ul">
        {booksLinks}
      </ul>
    </nav>
  )     
}


export default Navbar