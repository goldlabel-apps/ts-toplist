import axios from "axios"
import { AppThunk } from "../../../app/store"
import { setAdmin, read } from "../"
import { fetch  } from "../../toplist"

export const create = (payload:any): AppThunk => async (dispatch: any) => {
  try {
    dispatch(setAdmin({ key: "creating", value: true }))
    dispatch(setAdmin({ key: "created", value: false }))
    const baseURL = "https://61d83b8ce6744d0017ba89e1.mockapi.io/api/v1/"
    const endpoint = `${baseURL}/toplistItems/`
    axios
      .post(endpoint, payload)
      .then(function (res) {
        const { status } = res
        if (status === 201){
          dispatch(setAdmin({ key: "notification", value: {
            severity: "success",
            message: `${res.data.id} was created successsfully`
          }}))
          dispatch(setAdmin({ key: "editorOpen", value: false}))
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
        dispatch(setAdmin({ key: "creating", value: false }))
        dispatch(setAdmin({ key: "created", value: true }))
        return true
      })
  } catch (error) {
    // dispatch(setSystemError(error))
  }
}
