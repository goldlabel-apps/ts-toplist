import * as React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectAdmin, read } from "../../features/admin/"
import {
  Avatar,
  Box,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material"
import { 
  Display,
  Editor, 
  Confirm,
} from "../../components"

export default function Admin() {

  const dispatch = useAppDispatch()
  const admin = useAppSelector(selectAdmin)

  React.useEffect(() => {
    const { fetching, fetched } = admin.data
    if (!fetching && !fetched){
      dispatch(read())
    }
  }, [admin, dispatch])

  return <Box sx={{mt:2}}>
          <Confirm />
          <Editor />
          <CardHeader 
            avatar={<Avatar src="logo-red.svg" />}
            title={ <Typography variant="h6" sx={{ fontWeight: "lighter"}}>
                      Admin
                    </Typography>}
          />
          <CardContent>
            <Display />
          </CardContent>
        </Box>
}


/*

<pre>{JSON.stringify(admin, null, 2)}</pre>

<Button 
              sx={{m:1}}
              color="primary"
              variant="contained" 
              onClick={ onCreateClick }>
                Create
            </Button>

            
<Button 
  sx={{m:1}}
              color="secondary"
              variant="contained" 
            >
              Read
            </Button>

            <Button 
              sx={{m:1}}
              variant="contained" 
            >
              Update
            </Button>

            <Button 
              sx={{m:1}}
              variant="contained" 
            >
              Delete
            </Button>


  const onCreateClick = (e:any) => {
    console.log ("onCreateClick")
    return null
  }
            */