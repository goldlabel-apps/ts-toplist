import axios from "axios"
import { AppThunk } from "../../../app/store"
import { setAdmin } from "../adminSlice"

export const read = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setAdmin({ key: "fetching", value: true }))
    dispatch(setAdmin({ key: "fetched", value: false }))
    const endpoint = "https://61d83b8ce6744d0017ba89e1.mockapi.io/api/v1/toplistItems"
    axios
      .get(`${endpoint}`)
      .then(function (response) {
        dispatch(setAdmin({ key: "list", value: response.data }))
      })
      .catch(function (error) {
        dispatch(setAdmin({ key: "error", value: error }))
      })
      .then(function () {
        dispatch(setAdmin({ key: "fetching", value: false }))
        dispatch(setAdmin({ key: "fetched", value: true }))
        return true
      })
  } catch (error) {
    console.warn("admin read error")
  }
}
