import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface AdminShape {
  slug: string
  data: any

}

const initialState: AdminShape = {
  slug: "adminSlice",
  data: {
    fetching: false,
    fetched: false,
    editorOpen: false,
    confirmOpen: false,
    notification: null,
    list: [],

    fetchingClicks: false,
    fetchedClicks: false,
    clicks: [],
  },
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      state.data = {
        ...state.data,
        [key]: value,
      };
    },
  },
})

export const { setAdmin } = adminSlice.actions
export const selectAdmin = (state: RootState) => state.admin
export const selectNotification = (state: RootState) => state.admin.data.notification

export default adminSlice.reducer
