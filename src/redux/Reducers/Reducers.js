import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILOUR,
  SET_DEFAULT_CATEGORY,
} from "../ConstantTypes/ConstantTypes";
const initialState = {
  loading: false,
  data: [],
  error: "",
  default_cat: "SELECT CATEGORIES",
};

export const reducers = (state = initialState, action) => {
  if (action.type === FETCH_CATEGORY_REQUEST) {
    return { ...state, loading: true };
  } else if (action.type === FETCH_CATEGORY_SUCCESS) {
    return { ...state, loading: false, data: action.payload };
  } else if (action.type === FETCH_CATEGORY_FAILOUR) {
    return { ...state, loading: false, error: action.payload };
  } else if (action.type === SET_DEFAULT_CATEGORY) {
    return { ...state, default_cat: action.payload };
  } else {
    return state;
  }
};
