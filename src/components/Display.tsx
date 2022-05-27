import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectAdmin, setAdmin } from "../features/admin/"

const columns: GridColDef[] = [
  { field: 'id', headerName: 'id', width: 50 },
  { field: 'offer', headerName: 'Offer', width: 150, editable: false },
  { field: 'brand', headerName: 'Brand', width: 150, editable: false },
  { field: 'trackingLink', headerName: 'Tracking Link', width: 150, editable: false },
]

export default function Display() {

  const dispatch = useAppDispatch()
  const admin = useAppSelector(selectAdmin)
  
  const { list } = admin.data

  const onRowClick = (row:any) => {
    const { id } = row
    dispatch(setAdmin({ key: "editorOpen", value: true}))
    dispatch(setAdmin({ key: "editorMode", value: "edit"}))
    dispatch(setAdmin({ key: "selectedId", value: id}))
    dispatch(setAdmin({ key: "selectedItem", value: row.row}))
  }

  return (
    <div style={{ height: 350 }}>
      <DataGrid
        sx={{ border: 0 }}
        rows={list}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        onRowClick={onRowClick}
        disableSelectionOnClick
      />
    </div>
  )
}


/*
  {
    field: 'lastName',
    headerName: 'Last name',
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
*/