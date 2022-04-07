import { CategoryAction, CategoryState } from "../../types/category";

const defaultState: CategoryState = {
  data: [],
  loading: false,
  error: "",
};

const categoryReducer = (
  state: CategoryState = defaultState,
  action: CategoryAction
) => {
  switch (action.type) {
    case "GET_CATEGORIES_START":
      return { ...state, loading: true, error: "" };
    case "GET_CATEGORIES_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_CATEGORIES_ERROR":
      return { ...state, loading: false, error: "Error fetching categories" };
    case "ADD_CATEGORY_START":
      return { ...state, loading: true, error: "" };
    case "ADD_CATEGORY_SUCCESS":
      return { ...state, loading: false, data: [action.payload , ...state.data] };
    case "ADD_CATEGORY_ERROR":
      return { ...state, loading: false, error: "Error adding category" };
    case "UPDATE_CATEGORY_START":
      return { ...state, loading: true, error: "" };
    case "UPDATE_CATEGORY_SUCCESS":
      return { ...state, loading: false, data: state.data.map(category => category.id === action.payload.id ? action.payload : category) };
    case "UPDATE_CATEGORY_ERROR":
      return { ...state, loading: false, error: "Error updating category" };
    default: return state;
  }
};

export default categoryReducer;
