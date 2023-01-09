import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  showSideBar: boolean
  darkMode: boolean
}

const initialState: InitialState = {
  showSideBar: false,
  darkMode: false,
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    // toggleSideBar: (state) => {
    //   state.showSideBar = !state.showSideBar
    // },
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

export default headerSlice.reducer
export const { toggleTheme } = headerSlice.actions
