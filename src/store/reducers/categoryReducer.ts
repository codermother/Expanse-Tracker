import { CategoryAction, CategoryState } from "../../types/category";

const defaultState: CategoryState = {
    data: [],
    loading: false,
    error: ""
}

const categoryReducer = (state: CategoryState = defaultState, action: CategoryAction) =>{
    return state;
}

export default categoryReducer 