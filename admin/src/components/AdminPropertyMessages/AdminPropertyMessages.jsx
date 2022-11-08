import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const onPageRows = 8;
const rowHeight = 135;
const widthInTable = 230;

const columns = [
  { field: 'from', headerName: 'From', width: widthInTable },
  { field: 'time', headerName: 'Time', width: widthInTable },
  { field: 'text', headerName: 'Text', width: 500 }
];

class AdminPropertyMessages extends React.Component {

  render() {
    return (<section>
      <h2 style={{ margin: "20px auto", width: 1000 }}>{ this.props.adminProperty } receive next messages:</h2>
        <div style={{ width: 1000, margin: "0 auto" }}>
          <DataGrid
            rowHeight={rowHeight}
            autoHeight
            rows={this.props.filteredPropertyMessages}
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