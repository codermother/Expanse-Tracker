import { combineReducers } from "redux";
import { RecordState } from "../types/record";
import { UserState } from "../types/user";
import recordReducer from "./reducers/recordReducer";
import userReducer from "./reducers/userReducer";

interface AppState {
    user: UserState ;
    categories: any;
    records: RecordState
}

const rootReducer = combineReducers<AppState>({
    user: userReducer,
    categories: () => {},
    records: recordReducer,
})

export default rootReducer;