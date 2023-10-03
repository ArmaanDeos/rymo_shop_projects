import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchCategory, setDefaultCategory } from "../redux/Action/Action";

const CategoryBox = () => {
  // Access all the redux store state by useSelector;
  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);
  const default_cat = useSelector((state) => state.default_cat);

  // Access redux dispatch function by using useDispatch
  const dispatch = useDispatch();

  // Access the cat data by using useEffect
  useEffect(() => {
    // if (default_cat === "Select Categories")
    dispatch(fetchCategory());
  }, [dispatch]);

  // When we change category
  // function handleCategory(cat) {
  //   alert(cat);
  //   // dispatch(setDefaultCategory(cat));
  // }

  if (loading) {
    return (
      <>
        <h2>Please Wait! Loading.... </h2>
      </>
    );
  } else if (data.length !== 0) {
    return (
      <>
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn d-flex align-items-center justify-content-between bg-primary w-100"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: 65, padding: "0 30px" }}
          >
            <h6 className="text-dark m-0">
              <i className="fa fa-bars mr-2" />
              {default_cat}
            </h6>
            <i className="fa fa-angle-down text-dark" />
          </a>
          <nav
            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
            id="navbar-vertical"
            style={{ width: "calc(100% - 30px)", zIndex: 999 }}
          >
            <div className="navbar-nav w-100">
              {data.map((item, i) => (
                <NavLink
                  key={i}
                  to="#"
                  className="nav-item nav-link"
                  onClick={() => {
                    dispatch(setDefaultCategory(item.toUpperCase()));
                  }}
                >
                  {item.toUpperCase()}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </>
    );
  } else if (error) {
    return (
      <>
        <h2>{error.message}</h2>
      </>
    );
  }
};

export default CategoryBox;
