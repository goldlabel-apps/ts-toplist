import axios from "axios"
import { AppThunk } from "../../../app/store"
import { setToplist } from "../toplistSlice"

export const fetch = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setToplist({ key: "fetching", value: true }))
    dispatch(setToplist({ key: "fetched", value: false }))
    dispatch(setToplist({ key: "list", value: [] }))
    const endpoint = "https://61d83b8ce6744d0017ba89e1.mockapi.io/api/v1/toplistItems"
    axios
      .get(`${endpoint}`)
      .then(function (response) {
        dispatch(setToplist({ key: "list", value: response.data }))
      })
      .catch(function (error) {
        dispatch(setToplist({ key: "error", value: error }))
      })
      .then(function () {
        dispatch(setToplist({ key: "fetching", value: false }))
        dispatch(setToplist({ key: "fetched", value: true }))
        return true
      })
  } catch (error) {
    console.log("fetch error", error)
  }
}
