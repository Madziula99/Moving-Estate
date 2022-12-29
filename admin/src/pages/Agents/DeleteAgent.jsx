import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import React from "react";
import { withRouter } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal.jsx";
import { Spinner } from "../../components/Spinner/Spinner.jsx";
import { MenuButton } from "../../controls/MenuButton/MenuButton.jsx";

class DeleteAgent extends React.Component {
  state = {
    agentId: this.props.match.params.id,
    agentName: "",
    isLoading: true,
    agents: [],
    newAgentId: 0,
    // hasProperties: this.props.hasProperties
    hasProperties: true,
  };

  getAgents() {
    const { agentId } = this.state;

    this.setState({ isLoading: true });

    fetch("/api/agents")
      .then((r) => r.json())
      .then((data) => {
        const currentAgentName = data.agents.find(
          (agent) => agent.id === Number(agentId)
        ).name;
        const otherAgents = data.agents.filter(
          (agent) => agent.id !== Number(agentId)
        );

        this.setState({
          agentName: currentAgentName,
          agents: otherAgents,
          isLoading: false,
        });
      });
  }

  handleChange = (e) => {
    const { agents } = this.state;

    const newAgentId = agents.find((agent) => agent.name === e.target.value).id;

    this.setState({ newAgentId: newAgentId });
  };

  componentDidMount() {
    this.getAgents();
  }

  render() {
    const { agentId, agentName, agents, isLoading, hasProperties, newAgentId } =
      this.state;
    const isDisabled = newAgentId === 0 && hasProperties === true;

    if (isLoading) return <Spinner />;

    return (
      <Modal title={`Delete ${agentName}`}>
        {hasProperties && (
          <FormControl sx={{ m: 2, minWidth: 300 }}>
            <Select defaultValue="" onChange={this.handleChange} displayEmpty>
              {agents.map((option) => {
                return (
                  <MenuItem key={option.name} value={option.name}>
                    {option.name.toUpperCase()}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>
              Select an agent to reassign properties to.
            </FormHelperText>
          </FormControl>
        )}
        <div>
          <MenuButton isDisabled={isDisabled} text="Delete agent" />
          <MenuButton href={`/admin/agents/${agentId}`} text="Cancel" />
        </div>
      </Modal>
    );
  }
}

export default withRouter(DeleteAgent);
