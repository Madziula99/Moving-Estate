import React from "react";
import { withRouter } from "react-router-dom";
import { Page } from "../components/Page/Page.jsx";
import PropertyList from "../components/PropertyList/PropertyList.jsx";
import { PropertyFilter } from "../components/PropertyFilter/PropertyFilter.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredProperties: this.props.properties,
      selectedOptions: {}
    }
  }

  paramsToObject(params) {
  const filters = {}
  for (const [key, value] of params) {
    filters[key] = value;
  }
  return filters;
}

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const options = this.paramsToObject(params);
    this.setState({ selectedOptions: options});
  }

  async componentDidUpdate(prevprops, _) {
    if (prevprops.location.search === this.props.location.search) return;

    const { properties } = await fetch("/api/properties").then(r => r.json());
    const params = new URLSearchParams(this.props.location.search);
    const options = this.paramsToObject(params);

    this.setState({
      selectedOptions: options,
      filteredProperties: properties
    });
  }

  serializeToUrl(options) {
    const filterOptions = new URLSearchParams(options).toString();
    this.props.history.push({
      search: `?${filterOptions}`,
    });
  }

  filterProperties(filters) {
    this.serializeToUrl(filters);

    this.setState({
      selectedOptions: filters
    });
  }

  render() {
    const { options } = this.props;
    const { filteredProperties, selectedOptions } = this.state;

    return <Page title="PROPERTIES" hasSidebar>
      <PropertyFilter
        values={ selectedOptions }
        options={ options }
        onSubmit={(filters) => this.filterProperties(filters)}
      />
      <PropertyList
        defaultView="grid"
        properties={ filteredProperties }
      />
    </Page>
  }
}

export default withRouter(Index);
