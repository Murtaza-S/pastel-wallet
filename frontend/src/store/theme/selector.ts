import { ThemeState } from './reducer'

export const isDark = (state: { theme: ThemeState }) => state.theme.darkTheme
