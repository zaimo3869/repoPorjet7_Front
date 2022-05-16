
import React from 'react';
import {Link} from 'react-router-dom';
// import {link} from 'react-router-dom';

function Nav() {
    return (
        <nav> <div className="logo">  </div>
        <Link className="btnNav" to="/login"> Login</Link>
        <Link className="btnNav" to="/signup"> Signup</Link>
        <Link className="btnNav" to="/post"> Acceuil</Link>
        </nav>
      
    );
  }
  
  export default Nav;