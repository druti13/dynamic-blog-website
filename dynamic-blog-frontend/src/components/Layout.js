import React from 'react';
import { Link } from 'react-router-dom';
import { RiHome2Line } from 'react-icons/ri'; 

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Link to="/" className="home-link">
                <RiHome2Line className="home-icon"  /> Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 Dynamic Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
