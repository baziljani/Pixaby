// import React from 'react'
// import './style/Navbar.scss'

// const Navbar = () => {
//   return (
//       <nav className="navbar">
//           <h1>
//               Image Search App
//           </h1>
//           <input type="text" placeholder='Search for images...!' />
//     </nav>
//   )
// }

// export default Navbar
import React from 'react';
import './style/Navbar.scss';

const Navbar = ({ search, setSearch, filter, setFilter }) => {
  return (
    <nav className="navbar">
          <h1>Image Search App</h1>
          <div className="navbar-controls">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for images..."
          />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="Photo">Photos</option>
              <option value="Illustration">Illustrations</option>
              <option value="vector">Vectors</option>
              </select>
              </div>
    </nav>
  );
};

export default Navbar;
