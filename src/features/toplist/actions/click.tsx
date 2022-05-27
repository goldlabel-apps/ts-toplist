import axios from "axios"
import moment from "moment"
import { AppThunk } from "../../../app/store"
import { fetchClicks } from "../../admin"

export const click = (id: string): AppThunk => async (dispatch: any) => {
  try {
    const baseURL = "https://61d83b8ce6744d0017ba89e1.mockapi.io/api/v1/"
    const endpoint = `${baseURL}/clicks`

    axios
      .post(endpoint, {
        createdAt: moment(Date.now()).toISOString(),
        toplistItemId: id
      })
        .then(function (res) {
          const { status } = res
          if (status === 201){
            console.log ("Click tracked", res.data)
            dispatch(fetchClicks())
          }
        })
        .catch(function (error) {})
        .then(function () {
          return true
        })
  } catch (error) {
    
  }
}
