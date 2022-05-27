import * as React from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectAdmin, setAdmin } from "../features/admin/"
import { 
    Alert,
    Button,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
} from "@mui/material"
import { Icon } from "../theme"

export default function Confirm() {

    const dispatch = useAppDispatch()
    const admin = useAppSelector(selectAdmin)
    const { data } = admin
    const { confirmOpen, selectedId } = data

    const onConfirmClose = () => {
        dispatch((setAdmin({key: "confirmOpen", value: false })))
    }    

    const onCancelClick = () => {
        console.log("onCancelClick", selectedId)
        // dispatch((setAdmin({key: "confirmOpen", value: false })))
    } 

    const onConfirmClick = () => {
        console.log("onConfirmClick", selectedId)
        // dispatch((setAdmin({key: "confirmOpen", value: false })))
    }  
    
    return <Dialog 
            open={ confirmOpen }
            fullWidth
            maxWidth="sm"
            onClose={ onConfirmClose }
            >
                <DialogTitle>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ mt: 0.5 }}>
                            <Icon icon="help" />
                        </Box>
                        <Typography variant="h6" sx={{ ml: 1, fontWeight: "lighter" }}>
                            Confirm
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                    </Box>
                </DialogTitle>
                <DialogContent>

                    <Alert severity="warning">
                        This action cannot be undone and will cause loss of data
                    </Alert>

                    
                </DialogContent>
                <DialogActions sx={{mr:2}}>

                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={ onCancelClick }>
                        <span style={{ marginRight: 8, marginLeft: 8}}>
                            Cancel
                        </span>
                        <Icon icon="close" />
                    </Button>

                    
                    <Button 
                        autoFocus
                        variant="contained"
                        color="primary"
                        onClick={ onConfirmClick }>
                        <span style={{ marginRight: 8, marginLeft: 8}}>
                            Confirm
                        </span>
                        <Icon icon="tick" />
                    </Button>

                </DialogActions>
            </Dialog>
}
