import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { createTheme, ThemeProvider } from "@mui/material"
import { getDesignTokens } from "./theme"
import App from "./App"

const container = document.getElementById("ts-toplist")!
const root = createRoot(container)
const theme = createTheme(getDesignTokens("light"))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
