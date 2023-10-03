import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import MyContext from "../context/data/myContext";
import { BsFillCloudSunFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { FiSun } from "react-icons/fi";

const TopBar = () => {
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;
  return (
    <>
      <div className="container-fluid">
        <div
          className="row py-1 px-xl-5"
          style={{
            backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
            color: mode === "dark" ? "white" : "text-body",
          }}
        >
          <div className="col-lg-4 d-none d-lg-block">
            <div className="d-inline-flex align-items-center h-100">
              <NavLink className="text-body mr-3" to="/about">
                About
              </NavLink>
              <NavLink className="text-body mr-3" to="/contact">
                Contact
              </NavLink>
              <NavLink className="text-body mr-3" to="/help">
                Help
              </NavLink>
              <NavLink className="text-body mr-3" to="/faq">
                FAQs
              </NavLink>
            </div>
          </div>
          {/* Location  */}
          <div className="col-lg-4 d-none d-lg-block">
            <div className="d-inline-flex align-items-center w-100 justify-content-center h-100">
              <span className="text-body">
                <ImLocation2 size={20} /> New Delhi,India
              </span>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  My Account
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <NavLink to="/login">
                    <button className="dropdown-item" type="button">
                      Log In
                    </button>
                  </NavLink>
                  <NavLink to="/register">
                    <button className="dropdown-item" type="button">
                      Sign Up
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="btn-group mx-2">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  USD
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">
                    EUR
                  </button>
                  <button className="dropdown-item" type="button">
                    GBP
                  </button>
                  <button className="dropdown-item" type="button">
                    CAD
                  </button>
                </div>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  EN
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">
                    FR
                  </button>
                  <button className="dropdown-item" type="button">
                    AR
                  </button>
                  <button className="dropdown-item" type="button">
                    RU
                  </button>
                </div>
              </div>
              <button onClick={toggleMode}>
                {mode === "light" ? (
                  <FiSun className="" size={30} />
                ) : "dark" ? (
                  <BsFillCloudSunFill size={30} />
                ) : (
                  ""
                )}
              </button>
            </div>
            <div className="d-inline-flex align-items-center d-block d-lg-none">
              <a href="/" className="btn px-0 ml-2">
                <i className="fas fa-heart text-dark" />
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: 2 }}
                >
                  0
                </span>
              </a>
              <a href="/" className="btn px-0 ml-2">
                <i className="fas fa-shopping-cart text-dark" />
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: 2 }}
                >
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <a href="/" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">
                rymo
              </span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                Shop
              </span>
              {/* <img src="./static/img/rymo_logo.png" alt="" /> */}
            </a>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-6 text-right">
            <p className="m-0">Customer Service</p>
            <h5 className="m-0">+012 345 6789</h5>
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default TopBar;
