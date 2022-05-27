import * as React from "react"
import moment from "moment"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectAdmin, setAdmin, create, update } from "../features/admin/"
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

    let editorMode = "create"
    let brandValue = ""
    let offerValue = ""
    let createdAt = Date.now()
    let trackingLinkValue = "https://"
    if (selectedItem) {
        editorMode = "edit"
        brandValue = selectedItem.brand
        offerValue = selectedItem.brand
        trackingLinkValue = selectedItem.trackingLink
        createdAt =  selectedItem.createdAt
    }

    const onCreateClick = () => {
        let brand, offer, trackingLink
        const brandEl: any = document.getElementById("brand")
        const offerEl: any = document.getElementById("offer")
        const trackingLinkEl: any = document.getElementById("trackingLink")
        if (brandEl) brand = brandEl.value
        if (offerEl) offer = offerEl.value
        if (trackingLinkEl)  trackingLink = trackingLinkEl.value
        const payload = {
            createdAt: moment(Date.now()).toISOString(),
            brand,
            offer,
            trackingLink,
        }
        dispatch(create(payload))
    } 

    const onUpdateClick = () => {
        let brand, offer, trackingLink
        const brandEl: any = document.getElementById("brand")
        const offerEl: any = document.getElementById("offer")
        const trackingLinkEl: any = document.getElementById("trackingLink")
        if (brandEl) brand = brandEl.value
        if (offerEl) offer = offerEl.value
        if (trackingLinkEl)  trackingLink = trackingLinkEl.value
        const payload = {
            createdAt: moment(Date.now()).toISOString(),
            updted: moment(Date.now()).toISOString(),
            brand,
            offer,
            trackingLink,
        }
        dispatch(update(selectedId, payload))
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
                        { editorMode === "edit" ?  <Box sx={{ mt: 0.5 }}>
                            <Icon icon={ editorMode === "edit" ? "edit" : "new" } />
                        </Box> : null }
                        <Typography variant="h6" sx={{ ml: 1, fontWeight: "lighter" }}>
                            { editorMode === "edit" ? `Edit ${selectedId}` : null }
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
                    { editorMode === "edit" ? <Typography variant="body1" gutterBottom sx={{ ml: 1 }}>
                        Created { moment( createdAt ).fromNow() }
                    </Typography> : null }
                    

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

                    { editorMode === "edit" ? <Button 
                        variant="contained"
                        color="primary"
                        onClick={ onDeleteClick }>
                        <span style={{ marginRight: 8, marginLeft: 8}}>
                            Delete
                        </span>
                        <Icon icon="delete" />
                    </Button> : null }
                    

                    <Button 
                        variant="contained"
                        color="secondary" 
                        onClick={ editorMode === "edit" ? onUpdateClick : onCreateClick }>
                        <span style={{ marginRight: 8, marginLeft: 8}}>
                            { editorMode === "edit" ? "Update" : "Create" }
                        </span>
                        <Icon icon="save" />
                    </Button>

                </DialogActions>
            </Dialog>
}

/*
<pre>{JSON.stringify(selectedItem, null, 2)}</pre>
*/