import React from "react";
import { withRouter } from "react-router-dom";
import { Page } from "../components/Page/Page.jsx";
import { PropertyList } from "../components/PropertyList/PropertyList.jsx";
import { PropertyFilter } from "../components/PropertyFilter/PropertyFilter.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredProperties: {},
      selectedOptions: {},
      options: {},
      pagination: {
        page: 1,
        pages: null
      }
    }
  }

  paramsToObject(params) {
    const filters = {}
    for (const [key, value] of params) {
      filters[key] = value;
    }
    return filters;
  }

  async getProperties(urlQueryParams) {
    const {properties, options, pagination} = await fetch("/api/properties" + urlQueryParams).then(r => r.json());
    this.setState({
      filteredProperties: properties,
      options: options,
      pagination: pagination
    });
  }

  componentDidMount() {
    this.getProperties(this.props.location.search);
    const params = new URLSearchParams(this.props.location.search);
    const allOptions = this.paramsToObject(params);
    if (allOptions.page === undefined) allOptions.page = this.state.pagination.page
    this.serializeToUrl(allOptions);
    const { page, ...selectedOptions } = allOptions;
    this.setState({
      selectedOptions: selectedOptions
    });
  }

  async componentDidUpdate(prevprops, _) {
    if (prevprops.location.search === this.props.location.search) return;

    const params = new URLSearchParams(this.props.location.search);
    const { page, ...selectedOptions } = this.paramsToObject(params);

    this.getProperties(this.props.location.search);

    this.setState({
      selectedOptions: selectedOptions
    });
  }

  serializeToUrl(options) {
    let filterOptions = new URLSearchParams(options).toString();
    this.props.history.push({
      search: `?${filterOptions}`,
    });
  }

  filterProperties(filters) {
    this.setState({
      selectedOptions: filters
    });

    filters.page = 1;
    this.serializeToUrl(filters);
  }

  changePage(page) {
    const filterParams = this.state.selectedOptions;
    filterParams.page = page;
    const urlQueryParams = new URLSearchParams(filterParams)
    this.serializeToUrl(urlQueryParams);
    this.getProperties(`?${urlQueryParams}`);
  }

  render() {
    const { filteredProperties, selectedOptions, options, pagination } = this.state;

    if(Object.keys(options).length === 0) return;

    return <Page title="PROPERTIES" hasSidebar>
      <PropertyFilter
        values={ selectedOptions }
        options={ options }
        onSubmit={ (filters) => this.filterProperties(filters) }
      />
      <PropertyList
        pages={ pagination.pages }
        page={ pagination.page }
        defaultView="grid"
        properties={ filteredProperties }
        changePage={ (page) => this.changePage(page) }
      />
    </Page>
  }
}

export default withRouter(Index);
