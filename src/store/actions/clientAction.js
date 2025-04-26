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
