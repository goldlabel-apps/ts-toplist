import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectAdmin, fetchClicks } from "../../features/admin/"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material"
import { Icon } from "../../theme"

export default function Clicks() {

  const dispatch = useAppDispatch()
  const admin = useAppSelector(selectAdmin)
  const isExpanded = true

  React.useEffect(() => {
    const { fetchingClicks, fetchedClick } = admin.data
    if (!fetchingClicks && !fetchedClick){
      dispatch(fetchClicks())
    }
  }, [admin, dispatch]);

  return <Accordion defaultExpanded={ isExpanded }>
          <AccordionSummary
            sx={{ mt:2 }}
            expandIcon={<Icon icon="acc" />}>
            <Typography variant="h6" sx={{ mt: 0.5, fontWeight: "lighter"}}>
                Clicks
            </Typography>
            <Box sx={{flexGrow:1}} />
          </AccordionSummary>
          <AccordionDetails> 
            G3 chart
            
          </AccordionDetails>
        </Accordion>
}


/*
<pre>{JSON.stringify(admin.data.clicks, null, 2)}</pre>
*/