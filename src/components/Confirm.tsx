import * as React from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectAdmin, setAdmin, del } from "../features/admin/"
import { 
    Alert,
    Button,
    Dialog,
    DialogActions,
} from "@mui/material"
import { Icon } from "../theme"

export default function Confirm() {

    const dispatch = useAppDispatch()
    const admin = useAppSelector(selectAdmin)
    const { data } = admin
    const { confirmAction, confirmOpen, selectedId } = data

    const onConfirmClose = () => {
        dispatch((setAdmin({key: "confirmOpen", value: false })))
    }    

    const onCancelClick = () => {
        dispatch((setAdmin({key: "confirmOpen", value: false })))
        dispatch((setAdmin({key: "editorOpen", value: true })))
    } 

    const onConfirmClick = () => {
        const { action, id } = confirmAction
        if (action === "delete"){
            dispatch(del(id))
        }
    }  
    
    return <Dialog 
            open={ confirmOpen }
            fullWidth
            maxWidth="xs"
            onClose={ onConfirmClose }>
                
                <Alert severity="error">
                    Deleting <strong>{selectedId}</strong> cannot 
                    be undone and will cause loss of data
                </Alert>
                <DialogActions sx={{mr:2}}>

                    <Button
                        autoFocus
                        color="secondary"
                        onClick={ onCancelClick }>
                        <span style={{ marginRight: 8, marginLeft: 8}}>
                            Cancel
                        </span>
                    </Button>

                    <Button 
                        variant="contained"
                        color="secondary"
                        onClick={ onConfirmClick }>
                        <span style={{ marginRight: 8, marginLeft: 8}}>
                            Confirm
                        </span>
                        <Icon icon="tick" />
                    </Button>
                    
                </DialogActions>
            </Dialog>
}
