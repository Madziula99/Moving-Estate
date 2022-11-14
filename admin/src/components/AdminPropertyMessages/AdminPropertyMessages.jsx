import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./AdminPropertyMessages.module.css";

const onPageRows = 8;
const rowHeight = 135;
const widthInTable = 200;
const messageWidth = 398

const columns = [
  { field: "client_email", headerName: "Client Email", width: widthInTable },
  { field: "client_name", headerName: "Client Name", width: widthInTable },
  { field: "createdAt", headerName: "Time", width: widthInTable },
  { field: "message", headerName: "Text", width: messageWidth }
];

class AdminPropertyMessages extends React.Component {

  render() {
    const { propertyMessages, propertyId } = this.props;
    return <>
      <h2 className={styles.header}>{propertyId} receive next messages:</h2>
      <div className={styles.table}>
        <DataGrid
          rowHeight={rowHeight}
          autoHeight
          rows={propertyMessages}
          columns={columns}
          pageSize={onPageRows}
          rowsPerPageOptions={[onPageRows]}
        />
      </div>
    </>
  }
}

export { AdminPropertyMessages };
