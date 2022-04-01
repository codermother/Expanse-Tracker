import { RecordState, RecordAction, Record } from "../../types/record";

const defaultState: RecordState = {
    data: {} as Record[],
    loading: false,
    error: ""
}

const recordReducer = (state:RecordState = defaultState, action: RecordAction) =>{
    return state;
}

export default recordReducer 