import '../App.scss';
import logo from '../logo.svg'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="container">
      <header style={{backgroundColor: 'whitesmoke'}}>
        <div className="section">
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
        </div>
      </header>
      <div className="content">
        <div className="section">
          {children}
        </div>
      </div>
      <footer style={{backgroundColor: 'whitesmoke'}}>
        <div className="section" />
      </footer>
    </div>
  );
}

export default Layout;
