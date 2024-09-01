import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import secure from "../../assets/secure.svg"
import Button from 'react-bootstrap/Button';
const Navbar = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-light bg-warning">
                    <h3 className='head'>
                        <img className='secure' src={secure} alt="image" />
                        <a className='m_link' href="#">SUBsecure</a>
                    </h3>
                    <div className="nav-items">
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href="#"><Button>Login</Button></a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="#"><Button>Register</Button></a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="#">< Button >About Us</ Button >
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
