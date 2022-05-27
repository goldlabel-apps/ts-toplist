import * as React from "react"
import moment from "moment"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectAdmin, setAdmin } from "../features/admin/"
import { 
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
} from "@mui/material"
import { InputText } from "./"
import { Icon } from "../theme"

export default function Editor() {

    const dispatch = useAppDispatch()
    const admin = useAppSelector(selectAdmin)
    const { data } = admin

    const { editorOpen, selectedId, selectedItem } = data

    let editorMode = "new"
    let brandValue = "New brand value"
    let offerValue = "New offer value"
    let createdAt = Date.now()
    let trackingLinkValue = "https://"
    if (selectedItem) {
        editorMode = "edit"
        brandValue = selectedItem.brand
        offerValue = selectedItem.brand
        trackingLinkValue = selectedItem.trackingLink
        createdAt =  selectedItem.createdAt
    }


    const onUpdateClick = () => {
        dispatch(setAdmin({ key: "notification", value: {
            severity: "info",
            message: "Updating items is not yet implemented. We can delete and create new ones"
        }}))
    } 

    const onDeleteClick = () => {
        dispatch((setAdmin({key: "editorOpen", value: false })))
        dispatch((setAdmin({key: "confirmOpen", value: true })))
        dispatch((setAdmin({key: "confirmAction", value: {
            action: "delete",
            id: selectedId,
        }})))
    } 

    const onCancelClick = () => {
        dispatch((setAdmin({key: "editorOpen", value: false })))
        dispatch((setAdmin({key: "selectedId", value: null })))
        dispatch((setAdmin({key: "selectedItem", value: null })))
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
                            { editorMode === "edit" ? 
                                `Edit ${selectedId}` 
                                : 
                                "New TopList" }
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

                    <Typography variant="body1" gutterBottom sx={{ ml: 1 }}>
                        Created { moment( createdAt ).fromNow() }
                    </Typography>

                    <Typography variant="body2" sx={{ ml: 1 }}>
                        Brand
                    </Typography>
                    <InputText
                        id="brand"
                        label="Brand"
                        value={ brandValue }
                    />

                    <Typography variant="body2" sx={{ ml: 1 }}>
                        Offer
                    </Typography>
                    <InputText
                        id="offer"
                        label="Offer"
                        value={ offerValue }
                    />

                    <Typography variant="body2" sx={{ ml: 1 }}>
                    Tracking Link
                    </Typography>
                    <InputText
                        id="trackingLink"
                        label="Tracking Link"
                        value={ trackingLinkValue }
                    />

                    


                </DialogContent>
                
                <DialogActions sx={{mr:2}}>


                    <Button
                        color="secondary"
                        onClick={ onCancelClick }>
                        <span style={{ marginRight: 8, marginLeft: 8}}>
                            Cancel
                        </span>
                    </Button>


                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={ onDeleteClick }>
                        <span style={{ marginRight: 8, marginLeft: 8}}>
                            Delete
                        </span>
                        <Icon icon="delete" />
                    </Button>

                    <Button 
                        variant="contained"
                        color="secondary" 
                        onClick={ onUpdateClick }>
                        <span style={{ marginRight: 8, marginLeft: 8}}>
                            Update
                        </span>
                        <Icon icon="save" />
                    </Button>

                </DialogActions>
            </Dialog>
}

/*
<pre>{JSON.stringify(selectedItem, null, 2)}</pre>
*/