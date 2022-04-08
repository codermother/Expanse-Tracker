import { Record, RecordDispatch } from "../../types/record";
import api from "../../utils/api";

export const getRecords = () => async (dispatch: RecordDispatch) => {
    dispatch({ type: "GET_RECORDS_START" });
    try {
      const response = await api.get<Record[]>("/records");
      dispatch({ type: "GET_RECORDS_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "GET_RECORDS_ERROR" });
    }
  };