import * as React from "react"
import { useAppDispatch} from "../app/hooks"
import { 
  Box,
  ButtonBase,
  Typography,
} from "@mui/material"
import { click } from "../features/toplist"
export interface ClickableShape {
  data?: any
}

export interface ItemShape {
  id: string
  createdAt: string
  brand: string
  offer: string
  trackingLink: string
}

export default function ClickableItem(props:ClickableShape) {
  const dispatch = useAppDispatch()
  const { data } = props
  const {
    id,
    offer,
    brand,
    trackingLink,
  } = data
  
  const onItemClick = () => {
    dispatch(click(id))
    // window.open(trackingLink, "_blank")
    // console.log ("onItemClick", id)
  }

  return <ButtonBase 
              sx={{
                width: "100%",
                border: "1px solid rgba(0,0,0,0.05)",
                background: "rgba(0,0,0,0.01)",
                borderRadius: 1,
                p: 1,
                mt: 0.5,
                mb: 0.5,
              }}
              onClick={onItemClick}
            >
              <Box sx={{ 
                        display: "block", 
                        width: "100%", 
                        textAlign:"left",
              }}>
                <Box>
                <Typography variant="body1">
                  {brand}
                </Typography> 
                </Box>
                <Box>
                <Typography variant="body2">
                  {offer}
                </Typography> 
                </Box>
              </Box>
              
            </ButtonBase>
}
