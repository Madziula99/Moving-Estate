import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import { MenuButton } from "../MenuButton/MenuButton.jsx";
import { CreateAgentForm } from "../CreateAgentForm/CreateAgentForm.jsx";
import styles from "./AgentsTable.module.css";

const onPageRows = 6;
const photoHeight = 130;
const rowHeight = 135;
const widthInTable = 340;

const columns = [
  { field: "photo", headerName: "Photo", width: 150,
    renderCell: (params) => {
      return <Avatar
        alt="Agent"
        src={params.value}
        sx={{ width: 150, height: photoHeight }}
        variant="square"
      />
    }
  },
  { field: "name", headerName: "Name", width: widthInTable },
  { field: "location", headerName: "Location", width: 150 },
  { field: "email", headerName: "Email", width: widthInTable },
];

class AgentsTable extends React.Component {
  state = {
    isCreating: false
  };

  enableCreateMode() {
    this.setState({ isCreating: true });
  }

  disableCreateMode() {
    this.setState({ isCreating: false });
  }

  render() {
    const { isCreating } = this.state;

    if (isCreating) return <CreateAgentForm disableCreateMode={() => this.disableCreateMode()} />

    return <div className={styles.table}>
      <MenuButton text="Create agent" enableMode={() => this.enableCreateMode()} /* href="/api/agents/new" */ />
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
