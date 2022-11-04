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
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'location', headerName: 'Location', width: 100 },
  { field: 'type', headerName: 'Type', width: 150 },
  { field: 'mode', headerName: 'Mode', width: 100 },
  { field: 'price', headerName: 'Price', type: 'number', width: 100 },
  { field: 'area', headerName: 'Area', type: 'number', width: 100 },
  { field: 'bedrooms', headerName: 'Bedrooms', type: 'number', width: 100 },
  { field: 'bathrooms', headerName: 'Bathrooms', type: 'number', width: 100 },
];

//https://mui.com/material-ui/react-table/#data-table
const rows = [
  { picture: {
    avatar: "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png"
  },
    id: "A1", location: 'Snow', type: 'Jon', mode: "sale", price: 200, area: 150, bedrooms: 3, bathrooms: 0
  },
  { picture: {
    avatar: "https://preview.redd.it/s9edy9i5mbp41.jpg?auto=webp&s=232205a320f206393fbd55fe283564a6ccd95253"
  }, id: "B2", location: 'new', type: 'york', mode: "rent", price: 50,  area: 50, bedrooms:50, bathrooms:5},
  { picture: {
    avatar: ""
  }, id: "C3", location: 'minsk', type: 'old', mode: "clean", price: 1000,  area: 1000, bedrooms:1000, bathrooms:10},
];

class AdminPropertyTable extends React.Component {

  render() {
    return (<section>
      <h2 style={{ marginLeft: "15%" }}>{this.props.agentName}, you are welcome!</h2>
        <div style={{ height: 1000, width: '90%', marginLeft: "5%" }}>
        <DataGrid
          rowHeight={rowHeight}
          autoHeight
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

export { AdminPropertyTable };