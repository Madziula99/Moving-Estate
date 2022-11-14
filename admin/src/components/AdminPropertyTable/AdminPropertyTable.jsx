import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import styles from "./AdminPropertyTable.module.css";

const onPageRows = 6;
const photoHeight = 130;
const rowHeight = 135;
const widthInTable = 95;

const columns = [
  { field: "image", headerName: "Image", width: 150,
    renderCell: (params) => {
      return <Avatar
        alt="first image"
        src={params.value}
        sx={{ width: 150, height: photoHeight }}
        variant="square"
      />
    }
  },
  { field: "id", headerName: "ID", width: widthInTable },
  { field: "location", headerName: "Location", width: 150 },
  { field: "type", headerName: "Type", width: widthInTable },
  { field: "mode", headerName: "Mode", width: widthInTable },
  { field: "price", headerName: "Price", type: "number", width: widthInTable },
  { field: "area", headerName: "Area", type: "number", width: widthInTable },
  { field: "bedrooms", headerName: "Bedrooms", type: "number", width: widthInTable },
  { field: "bathrooms", headerName: "Bathrooms", type: "number", width: widthInTable },
];

class AdminPropertyTable extends React.Component {
  render() {
    return <>
      <div className={styles.header}>
        <h2>{this.props.agentName}, welcome!</h2>
        <Button variant="contained" onClick={this.props.signOut}>Sign Out</Button>
      </div>
      <div className={styles.table}>
        <DataGrid
          rowHeight={rowHeight}
          autoHeight
          rows={this.props.adminProperties}
          columns={columns}
          pageSize={onPageRows}
          rowsPerPageOptions={[onPageRows]}
          onRowClick = {e => window.location = `/admin/messages/${e.id}`}
        />
      </div>
    </>
  }
}

export { AdminPropertyTable };
