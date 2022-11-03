import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'location', headerName: 'Location', width: 90 },
  { field: 'type', headerName: 'Type', width: 90 },
  { field: 'mode', headerName: 'Mode', width: 90 },
  { field: 'price', headerName: 'Price', type: 'number', width: 90 },
  { field: 'area', headerName: 'Area', type: 'number', width: 90 },
  { field: 'bedrooms', headerName: 'Bedrooms', type: 'number', width: 90 },
  { field: 'bathrooms', headerName: 'Bathrooms', type: 'number', width: 90 },
];

//https://mui.com/material-ui/react-table/#data-table
const rows = [
  { id: "A1", location: 'Snow', type: 'Jon', mode: "sale", price: 200,  area: 150, bedrooms:3, bathrooms:0},
  { id: "B2", location: 'new', type: 'york', mode: "rent", price: 50,  area: 50, bedrooms:50, bathrooms:5},
  { id: "C3", location: 'minsk', type: 'old', mode: "clean", price: 1000,  area: 1000, bedrooms:1000, bathrooms:10},
];

class AdminPropertyTable extends React.Component {
  render() {
    return (<section>
      <h2>{this.props.agentName}, you are welcome!</h2>
        <div style={{ height: 400, width: '80%', marginLeft: "10%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
        </div>
      </section>
    )
  }
}

export { AdminPropertyTable };