import { toast } from "react-toastify";
import api from "../../services/api";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_SORT = "SET_SORT";

export function setCategories(categories) {
  return { type: SET_CATEGORIES, payload: categories };
}

export function setProductList(productList) {
  return { type: SET_PRODUCT_LIST, payload: productList };
}

export function setTotal(total) {
  return { type: SET_TOTAL, payload: total };
}

export function setFetchState(fetchState) {
  return { type: SET_FETCH_STATE, payload: fetchState };
}

export function setLimit(limit) {
  return { type: SET_LIMIT, payload: limit };
}

export function setOffset(offset) {
  return { type: SET_OFFSET, payload: offset };
}

export function setFilter(filter) {
  return { type: SET_FILTER, payload: filter };
}

export function setSelectedCategory(selectedCategory) {
  return { type: SET_SELECTED_CATEGORY, payload: selectedCategory };
}

export function setSort(sort) {
  return { type: SET_SORT, payload: sort };
}

export const getCategories = () => async (dispatch) => {
  try {
    await api
      .get("/categories")
      .then((response) => {
        if (response.status === 200) {
          dispatch(setCategories(response.data));
          toast.success("Categories fetched successfully");
        } else {
          dispatch(setCategories([]));
        }
      })
      .catch((error) => {
        dispatch(setCategories([]));
        console.log(error);
        toast.error("Error fetching categories");
      });
  } catch (error) {
    console.log(error);
    toast.error("Error fetching categories", error);
  }
};

export const getProducts = (props) => async (dispatch) => {
  try {
    const { categoryId, sort, filter } = props;
    console.log(
      "SORT:" + sort + "FİLTER:" + filter + "CATEGORYID:" + categoryId
    );

    const params = new URLSearchParams();

    if (categoryId) {
      params.append("category", categoryId);
    }
    if (sort) {
      params.append("sort", sort);
    }
    if (filter) {
      params.append("filter", filter);
    }
    const url = `/products?${params.toString()}`;
    await api
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setTotal(response.data.total));
          dispatch(setProductList(response.data.products));
          toast.success("ProductList fetched successfully");
        } else {
          dispatch(setProductList([]));
        }
      })
      .catch((error) => {
        dispatch(setProductList([]));
        console.log(error);
        toast.error("Error fetching productList");
      });
  } catch (error) {
    console.log(error);
    toast.error("Error fetching productList", error);
  }
};
