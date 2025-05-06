import { toast } from "react-toastify";
import api from "../../services/api";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";
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

export function setSelectedProduct(selectedProduct) {
  return { type: SET_SELECTED_PRODUCT, payload: selectedProduct };
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
    const { categoryId, sort, filter, offset, limit } = props;
    console.log(
      "SORT: " +
        sort +
        " FİLTER: " +
        filter +
        " CATEGORYID: " +
        categoryId +
        " OFFSET: " +
        offset +
        " LIMIT: " +
        limit
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
    if (offset) {
      params.append("offset", offset);
    } else {
      params.append("offset", 0);
    }
    if (limit) {
      params.append("limit", limit);
    } else {
      params.append("limit", 12);
    }
    const url = `/products?${params.toString()}`;
    console.log("URL: " + url);
    dispatch(setFetchState("FETCHING"));
    await api
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setTotal(response.data.total));
          dispatch(setProductList(response.data.products));
          dispatch(setFetchState("FETCHED"));
        } else {
          dispatch(setProductList([]));
        }
      })
      .catch((error) => {
        dispatch(setProductList([]));
        console.log(error);
        dispatch(setFetchState("NOT_FETCHED"));
        toast.error("Error fetching productList");
      });
  } catch (error) {
    console.log(error);
    dispatch(setProductList([]));
    dispatch(setFetchState("NOT_FETCHED"));
    toast.error("Error fetching productList", error);
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    console.log("Product ID:", id);
    await api.get(`/products/${id}`).then((response) => {
      console.log("Response:", response.status);
      if (response.status === 200) {
        dispatch(setSelectedProduct(response.data));
        console.log("Selected Product:", response.data);
      } else {
        dispatch(setSelectedProduct({}));
      }
    });
  } catch (error) {
    toast.error("Error fetching product by ID", error);
    dispatch(setSelectedProduct({}));
  }
};
