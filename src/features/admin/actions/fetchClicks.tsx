import axios from "axios"
import { AppThunk } from "../../../app/store"
import { setAdmin } from "../adminSlice"

export const fetchClicks = (): AppThunk => async (dispatch: any, getState: any) => {
  try {
    
    const {data} = getState().admin
    const { fetchedClicks, fetchingClicks } = data
    if (!fetchedClicks && !fetchingClicks){
          const endpoint = "https://61d83b8ce6744d0017ba89e1.mockapi.io/api/v1/clicks"
          axios
            .get(`${endpoint}`)
              .then(function (res) {
                dispatch(setAdmin({ key: "clicks", value: res.data }))
                dispatch(setAdmin({ key: "fetchingClicks", value: false }))
                dispatch(setAdmin({ key: "fetchedClicks", value: true }))
              })
              .catch(function (error) {
                console.warn("fetchClicks error")
              })
    }
    dispatch(setAdmin({ key: "fetchingClicks", value: true }))
    dispatch(setAdmin({ key: "fetchedClicks", value: false }))
  } catch (error) {
    console.warn("fetchClicks error")
  }
}
