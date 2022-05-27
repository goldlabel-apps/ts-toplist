import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setAdmin, selectAdmin, read } from "../../features/admin/"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
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
  const isExpanded = true

  const onCreateClick = () => {
    dispatch(setAdmin({ key: "editorOpen", value: true}))
    dispatch(setAdmin({ key: "editorMode", value: "create"}))
  }

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
          >
            <Typography variant="h6" sx={{ mt: 0.5, fontWeight: "lighter"}}>
              Manage
            </Typography>
            <Box sx={{flexGrow:1}} />
          </AccordionSummary>
          
          <AccordionDetails> 
            <Confirm />
            <Editor />
            <Notification />
            
            <Box sx={{ display: "flex" }}>
              
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                onClick={ onCreateClick }>
                <span style={{ marginRight: 8, marginLeft: 8}}>
                  Create
                </span>
                <Icon icon="new" />
              </Button>
              
            </Box>
            
            <Display />
          </AccordionDetails>

        </Accordion>
}