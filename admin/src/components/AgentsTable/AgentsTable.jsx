import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import { MenuButton } from "../MenuButton/MenuButton.jsx";
import { CreateAgent } from "../../pages/CreateAgent.jsx";
import styles from "./AgentsTable.module.css";

const onPageRows = 6;
const photoHeight = 130;
const rowHeight = 135;
const largeCellWidth = 340;
const smallCellWidth = 150;

const AvatarCell = props => <Avatar
  alt="Agent"
  src={props.value}
  sx={{ width: 150, height: photoHeight }}
  variant="square" />;

const columns = [
  { field: "photo", headerName: "Photo", width: smallCellWidth, renderCell: AvatarCell },
  { field: "name", headerName: "Name", width: largeCellWidth },
  { field: "location", headerName: "Location", width: smallCellWidth },
  { field: "email", headerName: "Email", width: largeCellWidth },
];

class AgentsTable extends React.Component {
  state = {
    isCreating: false
  };

  render() {
    const { isCreating } = this.state;

    if (isCreating) return <CreateAgent />

    return <div className={styles.table}>
      <MenuButton text="Create agent" enableMode={() => this.setState({ isCreating: true })} href="/admin/agents/new" />
      <DataGrid
        rowHeight={rowHeight}
        autoHeight
        rows={this.props.agents || []}
        columns={columns}
        pageSize={onPageRows}
        rowsPerPageOptions={[onPageRows]}
        onRowClick = {agent => window.location = `/admin/agents/${agent.id}`}
      />
    </div>
  }
}

export { AgentsTable };
