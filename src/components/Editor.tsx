import * as React from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectAdmin, setAdmin } from "../features/admin/"
import { 
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
} from "@mui/material"
import { Icon } from "../theme"

export default function Editor() {

    const dispatch = useAppDispatch()
    const admin = useAppSelector(selectAdmin)
    const { data } = admin

    const { editorOpen, editorMode, selectedId } = data

    const onSaveClick = () => {
        console.log ("onSaveClick")
        // dispatch((setAdmin({key: "editorOpen", value: false })))
    } 

    const onDeleteClick = () => {
        dispatch((setAdmin({key: "editorOpen", value: false })))
        dispatch((setAdmin({key: "confirmOpen", value: true })))
        dispatch((setAdmin({key: "confirmAction", value: {
            action: "delete",
            id: selectedId,
        }})))
    } 

    const onEditorClose = () => {
        dispatch((setAdmin({key: "editorOpen", value: false })))
    }    

    return <Dialog 
            open={ editorOpen }
            fullWidth
            maxWidth="sm"
            onClose={ onEditorClose }
            >
                <DialogTitle>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ mt: 0.5 }}>
                            <Icon icon={ editorMode === "edit" ? "edit" : "new" } />
                        </Box>
                        <Typography variant="h6" sx={{ ml: 1, fontWeight: "lighter" }}>
                            id {selectedId}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        
                            <IconButton 
                                onClick={ onEditorClose }
                                color="secondary" >
                                <Icon icon="close" />
                            </IconButton>

                    </Box>
                </DialogTitle>
                <DialogContent>
                    
                </DialogContent>
                <DialogActions sx={{mr:2}}>
                    <IconButton 
                        onClick={ onDeleteClick }
                        color="secondary" >
                        <Icon icon="delete" />
                    </IconButton>

                    <IconButton 
                        onClick={ onSaveClick }
                        color="secondary" >
                        <Icon icon="save" />
                    </IconButton>

                </DialogActions>
            </Dialog>
}
