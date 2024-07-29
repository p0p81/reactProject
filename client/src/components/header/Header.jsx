import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { authContext } from "../../context/authContext";

export default function Header() {
  const { isAuthenticated, logout } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>

          {isAuthenticated ? (
            <div className="user">
              <li>
                <Link to="/addCard">Add Business Card</Link>
              </li>
              <li>
                <Link to="/catalog">Experts</Link>
              </li>
              <li>
                <Link to="/" onClick={handleLogout}>Logout</Link>
              </li>
            </div>
          ) : (
            <div className="guest">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
      <Link to="/">
        <img src="./images/logo.png" alt="logo" className="logo-img" />
      </Link>
    </header>
  );
}
