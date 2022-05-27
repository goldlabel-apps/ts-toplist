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
                // border: "1px solid rgba(0,0,0,0.1)",
                // background: "rgba(0,0,0,0.025)",
                // borderRadius: 1,
                p: 0.5,
              }}
              onClick={onItemClick}
            >
              
              <Typography variant="body2">
                {offer}, {brand}
              </Typography> 
              <Box sx={{ flexGrow:1 }} />
            </ButtonBase>
}

/*
<Badge 
            badgeContent={ id } 
            color="default">
*/