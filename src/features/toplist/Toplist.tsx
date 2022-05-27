import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectToplist, fetch } from "../../features/toplist/"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Typography,
} from "@mui/material"
import { Icon } from "../../theme"
import { 
  ClickableItem,
} from "../../components"


export default function Toplist() {

  const dispatch = useAppDispatch()
  const toplist = useAppSelector(selectToplist)
  const { list } = toplist.data
  const isExpanded = true

  React.useEffect(() => {
    const { fetching, fetched } = toplist.data
    if (!fetching && !fetched){
      dispatch(fetch())
    }
  }, [toplist, dispatch])

  return <Accordion defaultExpanded={ isExpanded }>
          <AccordionSummary
            sx={{mt:2}}
            expandIcon={<Icon icon="acc" />}
            aria-controls="toplist-content"
            id="toplist-header"
          >
            <Avatar sx={{ mr: 1 }} src="logo.svg" />
            <Typography variant="h6" sx={{ mt: 0.5, fontWeight: "lighter"}}>
              Toplist
            </Typography>
          </AccordionSummary>
          <AccordionDetails> 
            {list.map((item:any, i: number) => {
              return <ClickableItem 
                        key={`item_${i}`}
                        data={item}
                      />
            })}
          </AccordionDetails>
        </Accordion>
}

/*

<pre>{JSON.stringify(toplist, null, 2)}</pre>

<IconButton
  color="primary"
  onClick={ (e) => {
    e.preventDefault()
    dispatch(fetch())
  }}>
  <Icon icon="refresh" />
</IconButton>
*/