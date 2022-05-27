import * as React from "react"
import { useAppDispatch } from "../app/hooks"
import { Box, TextField } from "@mui/material"

export interface InputTextShape {
  id: string
  value?: string
  valid?: boolean
  label: string
  onChange?: any
}

export default function InputText(props: InputTextShape) {

  const { id, label, value, onChange } = props

  return (
    <Box
      sx={{
        m: 1,
        "& .MuiTextField-root": {},
      }}
    >
      <TextField
        id={id}
        fullWidth
        error={ false }
        helperText={ null}
        label={ null }
        defaultValue={value}
      />
    </Box>
  )
}
