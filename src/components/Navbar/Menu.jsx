import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";



  const Menu = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  return (
    <>
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <Link
            to={"/"}
            className={`nav-link ${currentPath === '/' ? "active" : ''}`}
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"} className={`nav-link ${currentPath === '/about' ? "active" : ''}`} href="#">
            About
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            to={""}
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Service
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to={""} className="dropdown-item" href="#">
                Action
              </Link>
            </li>
            <li>
              <Link to={""} className="dropdown-item" href="#">
                Another action
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link to={""} className="dropdown-item" href="#">
                Something else here
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link
            to={""}
            className="nav-link dropdown-toggle"
            href="#g"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Pages
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to={""} className="dropdown-item" href="#">
                page 1
              </Link>
            </li>
            <li>
              <Link to={""} className="dropdown-item" href="#">
                page 2
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link to={""} className="dropdown-item" href="#">
                page 3
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to={"/blog"} className={`nav-link ${currentPath === '/blog' ? "active" : ''}`} aria-disabled="true">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className={`nav-link ${currentPath === '/contact' ? "active" : ''}`} aria-disabled="true">
            Contact
          </Link>
        </li>
      </ul>
      <div className="navbar-start">
        <CgMenuGridR
          style={{ fontSize: "30px", color: "var(--orange-color)" }}
        />
        <button className="btn start">
          <Link to={""}>start Today</Link>
        </button>
      </div>
    </>
  );
};

export default Menu;
