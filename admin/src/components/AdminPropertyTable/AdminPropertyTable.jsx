import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';

const onPageRows = 6;
const photoHeight = 130;
const rowHeight = 150;
const widthInTable = 150;

const columns = [
  { field: "picture", headerName: "Picture", width: 250,
    renderCell: (params) => {
      return <Avatar
        alt="first image"
        src={params.value.avatar}
        sx={{ width: 150, height: photoHeight }}
        variant="square"
      />
    }
    },
  { field: 'id', headerName: 'ID', width: widthInTable },
  { field: 'location', headerName: 'Location', width: widthInTable },
  { field: 'type', headerName: 'Type', width: widthInTable },
  { field: 'mode', headerName: 'Mode', width: widthInTable },
  { field: 'price', headerName: 'Price', type: 'number', width: widthInTable },
  { field: 'area', headerName: 'Area', type: 'number', width: widthInTable },
  { field: 'bedrooms', headerName: 'Bedrooms', type: 'number', width: widthInTable },
  { field: 'bathrooms', headerName: 'Bathrooms', type: 'number', width: widthInTable },
];



class AdminPropertyTable extends React.Component {

  render() {
    return (<section>
      <h2 style={{ marginLeft: "15%" }}>{this.props.agentName}, you are welcome!</h2>
        <div style={{ height: 1000, width: '70%', marginLeft: "15%" }}>
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