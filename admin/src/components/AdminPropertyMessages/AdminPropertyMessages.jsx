import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const onPageRows = 6;
const rowHeight = 135;
const widthInTable = 95;

const columns = [
  { field: 'id', headerName: 'ID', width: widthInTable },
  { field: 'location', headerName: 'Location', width: 150 },
  { field: 'type', headerName: 'Type', width: widthInTable },
  { field: 'mode', headerName: 'Mode', width: widthInTable },
  { field: 'price', headerName: 'Price', type: 'number', width: widthInTable },
  { field: 'area', headerName: 'Area', type: 'number', width: widthInTable },
  { field: 'bedrooms', headerName: 'Bedrooms', type: 'number', width: widthInTable },
  { field: 'bathrooms', headerName: 'Bathrooms', type: 'number', width: widthInTable },
];

const rows = []

class AdminPropertyMessages extends React.Component {
  //{this.props.property.id}

  render() {
    return (<section>
      <h2 style={{ margin: "20px auto", width: 1000 }}>receive next messages:</h2>
        <div style={{ width: 1000, margin: "0 auto" }}>
          <DataGrid
            rowHeight={rowHeight}
            autoHeight
            //rows={this.props.adminProperties}
            rows={rows}
            columns={columns}
            pageSize={onPageRows}
            rowsPerPageOptions={[onPageRows]}
          />
        </div>
      </section>
    )
  }
}

export { AdminPropertyMessages };