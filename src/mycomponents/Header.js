import React from "react";
import logo from "./images/logo.png";
import { NavLink } from "react-router-dom";
import './App.css'
const Header = () => {


  return (

    <>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Allen Solly Clone</title>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n        header nav button p span{\n            font-size: x-small;\n            display: block;\n        }\n        \n        main div[role=banner]{\n            background-image: url("https://s7ap1.scene7.com/is/image/adityabirlafashion/AS_D_HB_164_PeachPanache?resMode=sharp2&wid=1600&hei=642");\n        }\n    '
          }}
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <div
          role="navigation"
          className="container-fluid bg-dark d-flex justify-content-end text-light align-items-center"
        >
          <div className="mx-5 d-flex gap-2 border-left text-uppercase">
            <i className="bi bi-geo-alt" />
            <p>Stores</p>
          </div>
          <div className="mx-5 d-flex gap-2 border-left border-light text-uppercase">
            <i className="bi bi-info-circle" />
            <p>Contact Us</p>
          </div>
          <div className="mx-5 d-flex gap-2 border-left text-uppercase">
            <i className="bi bi-person" />
            <p>Log In</p>
          </div>
        </div>
        <header className="sticky-top">
          <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src="https://imagescdn.allensolly.com/img/app/brands/superapp/Icons/header_brand_logo_AS.png?q=75&auto=format"
                  alt="Allen Solly"
                  height="50px"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Main">
                      New Arrivals
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href="#">
                      Special
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Size
                    </a>
                  </li>
                </ul>
                <form className="d-flex m-2" role="search" method="get" action="#">
                  <input
                    className="form-control rounded-pill rounded-end px-3"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="rounded-start rounded-pill btn btn-outline-dark"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
                <button className="btn btn-warning d-flex">
                  <i className="bi bi-truck float-left fs-4 my-0" />
                  <p className="mx-2 my-0">
                    <span className="fs-6 my-0">Express Delivery</span>
                    <span className="text-secondary fw-light my-0">
                      select your nearest store
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </nav>
        </header>
      </>



    </>

  );
};
export default Header;