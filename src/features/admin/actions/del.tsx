import axios from "axios"
import { AppThunk } from "../../../app/store"
import { 
  setAdmin,
  read,
} from "../"
import { 
  fetch,
} from "../../toplist"

export const del = (id: string): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setAdmin({ key: "deleting", value: true }))
    dispatch(setAdmin({ key: "deleted", value: false }))
    dispatch(setAdmin({ key: "confirmOpen", value: false }))
    dispatch(setAdmin({ key: "editorOpen", value: false }))
    const baseURL = "https://61d83b8ce6744d0017ba89e1.mockapi.io/api/v1/"
    const endpoint = `${baseURL}/toplistItems/${id}`
    // console.log ("DELETE endpoint", endpoint)

    axios
    .delete(`${endpoint}`)
      .then(function (response) {
        const { status } = response
        if (status === 200){
          dispatch(setAdmin({ key: "list", value: [] }))
          dispatch(setAdmin({ key: "notification", value: {
            severity: "success",
            message: `${id} was deleted OK`
          }}))
          dispatch(read())
          dispatch(fetch())
        }
      })
      .catch(function (error) {
        dispatch(setAdmin({ key: "error", value: error }))
        dispatch(setAdmin({ key: "notification", value: {
          severity: "error",
          message: error.toString()
        }}))
      })
      .then(function () {
        dispatch(setAdmin({ key: "deleting", value: false }))
        dispatch(setAdmin({ key: "deleted", value: true }))
        return true
      })

  } catch (error) {
    
  }
}
