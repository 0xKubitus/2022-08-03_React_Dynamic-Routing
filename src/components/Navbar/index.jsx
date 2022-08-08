import books from '../../data/books'


const booksLinks = books.map( (book) => {
  return (
    <li>{book.slug}</li>
  )
})


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {booksLinks}
      </ul>
    </nav>
  )     
}


export default Navbar