import React from "react";
import { withRouter } from "react-router-dom";
import { MenuButton } from "../components/MenuButton/MenuButton.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import styles from "./Agent.module.css";

class Agent extends React.Component {
  state = {
    // agentData: {}, - it is commented because we can't get data from api yet, so we use the fake one now
    agentData: { name: "Kelly Lo", email: "lo@gmail.com", location: "Spain", id: 1, photo: "https://picsum.photos/id/500/300" },
    isLoading: true
  };

  async getAgent() {
    // this.setState({ isLoading: true });

    // const agentId = this.props.match.params.id;

    // await fetch(`/api/agents/${agentId}`)
    //   .then(r => r.json())
    //   .then(agentData => {
    //     this.setState({
    //       agentData: agentData,
    //       isLoading: false
    //     })
    //   });
    this.setState({ isLoading: false });
  }

  componentDidMount() {
    this.getAgent();
  }

  render() {
    const { isLoading, agentData } = this.state;
    const agentId = this.props.match.params.id;

    if (isLoading) return <Spinner />;

    return <div className={styles.agent_form_wrapper}>
      <MenuButton text="Edit agent" href={`/admin/agents/${agentId}/edit`} />
      <div className={styles.agent_form}>
        <img src={agentData.photo} alt="Agent" />
        <p>Name: {agentData.name}</p>
        <p>Email: {agentData.email}</p>
        <p>Location: {agentData.location}</p>
      </div>
    </div>
  }
}

export default withRouter(Agent);
