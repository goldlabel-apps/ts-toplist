import { PaletteMode } from "@mui/material"

const theme = {
  primary: "#ee1c25",
  secondary: "#231f20",
}

const { primary, secondary } = theme

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  overrides: {
    DataGrid: {
        root:{
            border: 'none',
        }
    }
  }
})



/*

      ...(mode === "dark" && {
        main: primaryDark,
      }),


text: {
      ...(mode === "light"
        ? {
            primary: themePrimary,
            secondary: themeSecondary,
          }
        : {
            primary: themeSecondary,
            secondary: themePrimary,
          }),
    },
    */