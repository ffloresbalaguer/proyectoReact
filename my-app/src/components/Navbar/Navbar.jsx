import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className='nav-item btn btn-dark'><Link className='nav-link' to='/'>Manchas Store</Link></button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Carrito</a>
              </li>
              <li className="nav-item">
                <button className='nav-item btn btn-dark'><Link className='nav-link' to='/category/:categoryid'>Power Attacks</Link></button>
              </li>
              <li className="nav-item">
              <button className='nav-item btn btn-dark'><Link className='nav-link' to='/category/:categoryid'>Standard Attacks</Link></button>
              </li>              
            </ul>
          </div>
        </div>
        <div className = 'h3'>
                <CartWidget />
              </div> 
      </nav>
    </div>      
    ); 
}

/*<a className="navbar-brand" href="#">Manchas Store</a>*/ 
export default Navbar;