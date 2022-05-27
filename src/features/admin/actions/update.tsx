// import axios from "axios"
import { AppThunk } from "../../../app/store"
import { setAdmin } from "../adminSlice"

export const update = (id: string, keyValuePair: any): AppThunk => async (dispatch: any) => {
  try {
    console.log ("update", id, keyValuePair)
  } catch (error: any) {
    dispatch(setAdmin({ key: "error", value: error }))
    dispatch(setAdmin({ key: "notification", value: {
      severity: "error",
      message: error.toString()
    }}))
  }
}
