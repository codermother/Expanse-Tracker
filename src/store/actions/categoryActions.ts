import { Category, CategoryDispatch, CategoryForm } from "../../types/category"
import api from "../../utils/api";

export const getCategories = () => async (dispatch: CategoryDispatch) => {
    dispatch({ type: "GET_CATEGORIES_START" });
    try {
      const response = await api.get<Category[]>("/categories");
      dispatch({ type: "GET_CATEGORIES_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "GET_CATEGORIES_ERROR" });
    }
  };

export const addCategory = (form: CategoryForm) => async (dispatch: CategoryDispatch) =>{
  dispatch({type: "ADD_CATEGORY_START"})
  try {
    const response = await api.post<Category>("/categories", form);
    dispatch({type: "ADD_CATEGORY_SUCCESS", payload: response.data})
  } catch {
    dispatch({ type: "ADD_CATEGORY_ERROR"})
  }
}

export const updateCategory = (form: Partial<CategoryForm>, categoryId: number) => async (dispatch: CategoryDispatch) =>{
  dispatch({type: "UPDATE_CATEGORY_START"})
  try {
    const response = await api.put<Category>("/categories/" + categoryId, form);
    dispatch({type: "UPDATE_CATEGORY_SUCCESS", payload: response.data})
  } catch {
    dispatch({ type: "UPDATE_CATEGORY_ERROR"})
  }
}

export const deleteCategory = (categoryId:number) => async (dispatch: CategoryDispatch) =>{
  dispatch({type: "UPDATE_CATEGORY_START"})
  try{
    await api.delete("/categories/" + categoryId)
    dispatch({type: "DELETE_CATEGORY_SUCCESS", payload: categoryId})
  } catch {
    dispatch({type:"DELETE_CATEGORY_ERROR"})
  }
}