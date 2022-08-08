import { Routes, Route } from "react-router-dom";

import Book from 'components/Book';


const Navbar = () => {
  return (
    <nav>
      <Routes>
        <Route path="/book/:bookSlug" element={<Book />} />
      </Routes>
    </nav>
  );     
};


export default Navbar;