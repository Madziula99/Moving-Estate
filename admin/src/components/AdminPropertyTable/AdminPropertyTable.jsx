import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';

const onPageRows = 10;
const photoHeight = 130;
const rowHeight = 150;

const columns = [
  { field: "picture", headerName: "Picture", width: 150,
    renderCell: (params) => {
      return <Avatar
        alt="first image"
        src={params.value.avatar}
        sx={{ width: 150, height: photoHeight }}
        variant="square"
      />
    }
    },
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'location', headerName: 'Location', width: 100 },
  { field: 'type', headerName: 'Type', width: 150 },
  { field: 'mode', headerName: 'Mode', width: 100 },
  { field: 'price', headerName: 'Price', type: 'number', width: 100 },
  { field: 'area', headerName: 'Area', type: 'number', width: 100 },
  { field: 'bedrooms', headerName: 'Bedrooms', type: 'number', width: 100 },
  { field: 'bathrooms', headerName: 'Bathrooms', type: 'number', width: 100 },
];



class AdminPropertyTable extends React.Component {

  render() {
    return (<section>
      <h2 style={{ marginLeft: "15%" }}>{this.props.agentName}, you are welcome!</h2>
        <div style={{ height: 1000, width: '90%', marginLeft: "5%" }}>
        <DataGrid
          rowHeight={rowHeight}
          autoHeight
          rows={this.props.adminProperties}
          columns={columns}
          pageSize={onPageRows}
          rowsPerPageOptions={[onPageRows]}
        />
        </div>
      </section>
    )
  }
}

export { AdminPropertyTable };