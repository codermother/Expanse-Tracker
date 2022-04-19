import { LoginForm, User, UserDispatch } from "../../types/user";
import api from "../../utils/api";

export const login = (creds: LoginForm) => async (dispatch: UserDispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await api.post<User>("/users/login", creds);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem("token", response.data.token);
    } catch {
      dispatch({ type: "LOGIN_ERROR" });
    }
  };

export const isLoggedIn = () => async (dispatch: UserDispatch) => {
    dispatch({ type: "IS_LOGGED_IN_START" });
    try {
      const response = await api.post<User>("/users/is_logged_in");
      dispatch({ type: "IS_LOGGED_IN_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "IS_LOGGED_IN_ERROR"});
    }
};
export const logout= () => async (dispatch: UserDispatch) => {
    localStorage.removeItem("token");
     dispatch({ type: "LOGOUT" });
   
};
