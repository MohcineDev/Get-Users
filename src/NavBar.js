import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'

function NavBar() {

    const handleClick = () => {
        if (localStorage.getItem('mode') === 'light') {

            localStorage.removeItem('mode')
            document.body.classList.remove('light')
        } 
        else {
            localStorage.setItem('mode', 'light')
            document.body.classList.add('light')
        }
    }

    return (
        <nav>
            <div className="wrapper">
                <div className="navbar">

                    <Link to="/" className="logo">Logo</Link>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#0b0e18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
