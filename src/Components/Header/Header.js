import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
        <div>
           <h1>Friends List</h1>
        </div>
        <nav>
          <a href="/all friends">all friends</a>
          <a href="/birthdays">birthdays</a>
          <a href="/addresses">addresses</a>
        </nav>
      </header>
    );
};

export default Header;