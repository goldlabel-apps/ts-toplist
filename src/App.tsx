import React from 'react'
import {
  Container,
  CssBaseline,
  Grid,
} from "@mui/material"
import {Admin, Clicks} from "./features/admin"
import {Toplist} from "./features/toplist"

function App() {
  
  return <React.Fragment>
          <CssBaseline />
          <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={ 6 }>
              <Admin />
              <Clicks />
            </Grid>
            <Grid item xs={ 12 } md={ 6 }>
              <Toplist />
            </Grid>     
          </Grid>
          </Container>
        </React.Fragment>
}

export default App
