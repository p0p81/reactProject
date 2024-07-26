import { Link } from "react-router-dom";
import './Header.css'

export default function Header () {

    return(
        <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/addCard">Add Business Card</Link></li>
            <li><Link to="/catalog">Experts</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
        <a href="/">
            <img src="./images/logo.png" alt="logo" className='logo-img' />
        </a>
      </header>
    )
}