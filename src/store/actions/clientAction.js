import { toast } from "react-toastify";
import api from "../../services/api";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function setRoles(roles) {
  return {
    type: SET_ROLES,
    payload: roles,
  };
}

export function setTheme(theme) {
  return {
    type: SET_THEME,
    payload: theme,
  };
}

export function setLanguage(language) {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
}

export const getRoles = () => (dispatch, getState) => {
  const { roles } = getState().clientReducer;
  if (roles.length > 0) {
    return; // Roles already fetched, no need to fetch again
  }
  try {
    api
      .get("/roles")
      .then((response) => {
        const roles = response.data;
        dispatch(setRoles(roles));
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
      });
  } catch (error) {
    console.error("Error in getRoles action:", error);
  }
};

export const getUserAction = (formData) => async (dispatch) => {
  try {
    return await api
      .post("/login", formData)
      .then((response) => {
        const user = response.data;
        dispatch(setUser(user));
        if (formData.rememberMe) {
          localStorage.setItem("token", user.token); // Store token in local storage
          console.log("Token stored in local storage:", user.token);
        }
        toast.success("Login successful!");
        return true; // Return true to indicate success
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        toast.error("Login failed. Please check your credentials.");
        return false; // Return false to indicate failure
      });
  } catch (error) {
    console.error("Error in getUser action:", error);
  }
};

export const getVerify = (token) => async (dispatch) => {
  try {
    api
      .get("/verify", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        const user = response.data;
        console.log("User verified:", user);
        dispatch(setUser(user));
        localStorage.setItem("token", user.token); // Store token in local storage
        api.defaults.headers.common["Authorization"] = user.token;
        toast.success("User verified successfully!");
      })
      .catch((error) => {
        console.error("Error verifying user:", error);
        localStorage.removeItem("token"); // Remove token from local storage
        api.defaults.headers.common["Authorization"] = null; // Clear the token from axios headers
        toast.error("Verification failed. Please log in again.");
      });
  } catch (error) {
    console.error("Error in getVerify action:", error);
    toast.error("An error occurred during verification.");
  }
};
