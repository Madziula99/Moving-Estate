import React from "react";
import { withRouter } from "react-router-dom";
import { Page } from "../components/Page/Page.jsx";
import PropertyList from "../components/PropertyList/PropertyList.jsx";
import { PropertyFilter } from "../components/PropertyFilter/PropertyFilter.jsx";
import queryString from 'query-string';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredProperties: this.props.properties,
      selectedOptions: {}
    }
  }

  componentDidMount() {
    const options = queryString.parse(this.props.location.search);
    this.setState({ selectedOptions: options});
  }

  async componentDidUpdate(prevprops, _) {
    if (prevprops.location.search === this.props.location.search) return;

    const { properties } = await fetch("/api/properties").then(r => r.json());
    const options = queryString.parse(this.props.location.search)

    this.setState({
      selectedOptions: options,
      filteredProperties: properties
    });
  }

  serializeToUrl(options) {
    const filterOptions = queryString.stringify(options);
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
        properties={filteredProperties}
      />
    </Page>
  }
}

export default withRouter(Index);
