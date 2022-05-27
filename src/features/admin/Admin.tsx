import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectAdmin, read } from "../../features/admin/"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Typography,
} from "@mui/material"
import { Icon } from "../../theme"
import { 
  Display,
  Editor, 
  Confirm,
  Notification,
} from "../../components"


export default function Admin() {

  const dispatch = useAppDispatch()
  const admin = useAppSelector(selectAdmin)
  const { list } = admin.data
  const isExpanded = true

  React.useEffect(() => {
    const { fetching, fetched } = admin.data
    if (!fetching && !fetched){
      dispatch(read())
    }
  }, [admin, dispatch]);

  return <Accordion defaultExpanded={ isExpanded }>
          <AccordionSummary
            sx={{mt:2}}
            expandIcon={<Icon icon="acc" />}
            aria-controls="toplist-content"
            id="toplist-header"
          >
            <Avatar sx={{ mr: 1 }} src="logo-red.svg" />
            <Typography variant="h6" sx={{ mt: 0.5, fontWeight: "lighter"}}>
              Admin
            </Typography>
          </AccordionSummary>
          <AccordionDetails> 
            <Confirm />
            <Editor />
            <Notification />
            <Display />
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