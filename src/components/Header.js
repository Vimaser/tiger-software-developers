import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./css/Header.css";
import "./css/darkMode.css";

const Header = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      if (!prevMode) {
        document.body.setAttribute("data-dark", "true");
      } else {
        document.body.removeAttribute("data-dark");
      }
      return !prevMode;
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute("data-dark", "true");
    } else {
      document.body.removeAttribute("data-dark");
    }

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [darkMode]);

  return (
    <nav className={mobileMenuOpen ? "open" : ""}>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="menu-items">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/portfolio" activeClassName="active">
          Portfolio
        </NavLink>
        <NavLink to="/services" activeClassName="active">
          Services
        </NavLink>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
        {user ? (
          <>
            <NavLink to="/messages" activeClassName="active">
              Messages
            </NavLink>
            <NavLink to="/logout" activeClassName="active">
              Logout
            </NavLink>
          </>
        ) : (
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        )}
        <button onClick={toggleDarkMode}>{darkMode ? "Light" : "Dark"}</button>
      </div>
    </nav>
  );
};

export default Header;
