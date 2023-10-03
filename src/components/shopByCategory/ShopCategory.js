import React, { useContext, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCategory } from "../../redux/Action/Action";
import SingleCategory from "./SingleCategory";
// import MyContext from "../../context/data/myContext";
// import Loader from "../loader/Loader";
// import axios from "axios";

const ShopCategory = () => {
  // Setting loader
  // const context = useContext(MyContext);
  // const { loader, setLoader } = context;

  // Sorting categories randomly
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // const catData = axios.get("https://dummyjson.com/products/categories");
    // catData.then(
    //   (res) => {
    //     response = res.json();
    //   },
    //   (data) => {
    //     setCategories(data);
    //   }
    // );
    // Fetch categories from the API
    // setLoader(true);
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));

    // setLoader(false);
  }, []);

  // Function for sorting cat randomly
  const getRandomCategory = (num) => {
    const shuffledCategories = [...categories].sort(() => 0.5 - Math.random());
    return shuffledCategories.slice(0, num);
  };
  const randomCategories = getRandomCategory(12);

  // // Access all the redux store state by useSelector
  // // const loading_cat = useSelector((state) => state.loading);
  // const data_cat = useSelector((state) => state.data);
  // // const error_cat = useSelector((state) => state.console.error);

  // // Access redux dispatch function by using useDispatch
  // const dispatch = useDispatch();

  // // Access the cat data by using useEffect
  // useEffect(() => {
  //   dispatch(fetchCategory());
  // }, [dispatch]);

  return (
    <>
      {/* {data_cat.length !== 0 && ( */}

      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Shop By Categories</span>
        </h2>

        {/* {loader && <Loader />} */}
        <div className="row px-xl-5 pb-3">
          {randomCategories.map((item, i) => (
            <SingleCategory cat={item} key={i} />
          ))}
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default ShopCategory;
