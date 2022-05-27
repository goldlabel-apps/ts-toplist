import * as React from "react"
import { 
  BarChart, 
  Bar, 
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend, 
} from 'recharts'
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
  }, [admin, dispatch])
  const { clicks } = admin.data
  let bars: any = []
  for (let i = 0; i < clicks.length; i++){
    const { toplistItemId, brand, offer } = clicks[i]
    if (!bars[toplistItemId]){
      bars[toplistItemId] = {
        count: 1,
        brand,
        offer,
      }
    } else {
      bars[toplistItemId] = {
        count: parseFloat(bars[toplistItemId].count) + 1,
        brand,
        offer,
      }
    }
  }

  return <Accordion defaultExpanded={ isExpanded }>
          <AccordionSummary
            sx={{ mt:2 }}
            expandIcon={<Icon icon="acc" />}>
            <Typography variant="h6" sx={{ mt: 0.5, fontWeight: "lighter"}}>
                Click Tracker Graph
            </Typography>
            <Box sx={{flexGrow:1}} />
          </AccordionSummary>
          <AccordionDetails>
              <BarChart 
                width={400} 
                height={350} 
                data={ bars }>
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="brand" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#ee1c25" />
              </BarChart>
            </AccordionDetails>
        </Accordion>
}


/*
<pre>{JSON.stringify(admin.data.clicks, null, 2)}</pre>
*/