import * as React from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  selectNotification,
  setAdmin,
} from "../features/admin"

import { Snackbar } from "@mui/material"
import MuiAlert, { AlertProps } from "@mui/material/Alert"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props,ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function Notification() {

  const dispatch = useAppDispatch()
  const notification = useAppSelector(selectNotification)
  if (!notification) return null

  const { message, severity } = notification

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return
    dispatch(setAdmin( {key:"notification", value: null } ))
  }

  return (
    <Snackbar
      open
      sx={{ zIndex: 12345678 }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      autoHideDuration={5000}
      onClose={ handleClose }
    >
      <Alert 
        variant="filled"
        onClose={handleClose} 
        severity={severity} 
        sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
