import {
  SET_CATEGORIES,
  SET_FETCH_STATE,
  SET_FILTER,
  SET_LIMIT,
  SET_OFFSET,
  SET_PRODUCT_LIST,
  SET_SELECTED_CATEGORY,
  SET_SORT,
  SET_TOTAL,
} from "../actions/productAction";

const initialState = {
  categories: [],
  selectedCategory: 1,
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  sort: "rating:desc",
  fetchState: "NOT_FETCHED",
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.payload,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    case SET_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
}
