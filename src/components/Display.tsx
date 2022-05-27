import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectAdmin, setAdmin } from "../features/admin/"

const columns: GridColDef[] = [
  { field: 'id', headerName: 'id', width: 50 },
  { field: 'offer', headerName: 'Offer', width: 100, editable: false },
  { field: 'brand', headerName: 'Brand', width: 100, editable: false },
]

export default function Display() {

  const dispatch = useAppDispatch()
  const admin = useAppSelector(selectAdmin)
  
  const { list } = admin.data

  const onRowClick = (row:any) => {
    const { id } = row
    // console.log ("onRowClick", row)
    dispatch(setAdmin({ key: "editorOpen", value: true}))
    dispatch(setAdmin({ key: "editorMode", value: "edit"}))
    dispatch(setAdmin({ key: "selectedId", value: id}))
  }

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={list}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        // checkboxSelection
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