import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  darkTheme: boolean
}

export const initialState: ThemeState = {
  darkTheme: false,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
