import axios from "axios";
import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILOUR,
  SET_DEFAULT_CATEGORY,
} from "../ConstantTypes/ConstantTypes";

const fetchCategoryRequest = () => {
  return { type: FETCH_CATEGORY_REQUEST, payload: null };
};
const fetchCategorySuccess = (data) => {
  return { type: FETCH_CATEGORY_SUCCESS, payload: data };
};
const fetchCategoryFailour = (error) => {
  return { type: FETCH_CATEGORY_FAILOUR, payload: error };
};

// we are using redux-thunk so below we are creating action creator method that returns a function.

export const fetchCategory = () => {
  return (dispatch) => {
    // requesting for api
    dispatch(fetchCategoryRequest());
    const fetchCat = axios.get("https://dummyjson.com/products/categories");
    fetchCat.then(
      (response) => {
        let fetchData = response.data;
        console.log(fetchData);
        // after success
        dispatch(fetchCategorySuccess(fetchData));
      },
      (error) => {
        let atFailour = error.message;
        dispatch(fetchCategoryFailour(atFailour));
      }
    );
  };
};

// ? SET_DEFAULT_CATEGORY
export const setDefaultCategory = (category) => {
  return { type: SET_DEFAULT_CATEGORY, payload: category };
};
