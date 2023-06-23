import './navbar.css'
import { FaBars } from "react-icons/fa"
import {useRef} from "react";
import {Link} from "react-router-dom"



const Navbar = () =>{
    const menuRef = useRef()
    const showMenu = () =>{
        menuRef.current.classList.toggle('active')

    }




    return(<div className="header">
        <div className="container">
            <h1><span>One</span> anime</h1>

            <nav ref={menuRef}>
                <ul className="anime-links">
                    <li><Link to="/" className="anime-link ">Home</Link></li>
                    <li>Recent anime</li>
                    <li>Popular anime</li>
                    <li>Most rated</li>
                </ul>
                <div className="buttons">
                    <button className="login">Login</button>
                    <button className="register">Register</button>
                </div>
            </nav>
            <button className="toggle" onClick={showMenu}>
                <FaBars />

            </button>
        </div>
    </div>)
}

export default Navbar