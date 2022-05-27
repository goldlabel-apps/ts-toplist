// import axios from "axios"
import { AppThunk } from "../../../app/store"
import { setAdmin } from "../adminSlice"

export const create = (payload:any): AppThunk => async (dispatch: any) => {
  try {
    console.log ("create",payload )
  } catch (error) {
    // dispatch(setSystemError(error))
  }
}
