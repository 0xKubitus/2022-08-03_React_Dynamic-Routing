import Book from 'components/Book';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul id="navbar-ul">
        <Book />
      </ul>
    </nav>
  );     
};


export default Navbar;