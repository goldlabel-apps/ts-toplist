import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface ToplistShape {
  slug: string
  data: any
}

const initialState: ToplistShape = {
  slug: "toplistSlice",
  data: {
    fetching: false,
    fetched: false,
    list: [],
  },
}

export const toplistSlice = createSlice({
  name: 'toplist',
  initialState,
  reducers: {
    setToplist: (state, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      state.data = {
        ...state.data,
        [key]: value,
      };
    },
  },
})

export const { setToplist } = toplistSlice.actions
export const selectToplist = (state: RootState) => state.toplist
export default toplistSlice.reducer
