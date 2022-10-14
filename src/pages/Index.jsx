import React from "react";
import { withRouter } from "react-router-dom";
import { Page } from "../components/Page/Page.jsx";
import PropertyList from "../components/PropertyList/PropertyList.jsx";
import { Sidebar } from "../components/Sidebar/Sidebar.jsx";
import queryString from 'query-string';
import properties from "../data.json";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterOptions: {}
    }
  }

  componentDidMount() {
    console.log("Component Mounted");
    const options = queryString.parse(this.props.location.search)
    this.setState({ filterOptions: options});
  }

  componentDidUpdate(prevprops, _) {
    console.log("Component Update");
    if (prevprops.location.search === this.props.location.search) return;
    console.log("Search params from url changed");
    const options = queryString.parse(this.props.location.search)
    this.setState({ filterOptions: options });
  }

  serializeToUrl(options) {
    const filterOptions = queryString.stringify(options);
    this.props.history.push({
      search: `?${filterOptions}`,
    });
  }

  formSubmit(selectedOptions) {
    this.setState({
      options: selectedOptions
    });
    this.serializeToUrl(selectedOptions);
  }

  render() {
    const necessaryProperties = properties.map(property => {
      return {
        id: property.id,
        title: property.title,
        location: property.location,
        image: property.images[0],
        description: property.description,
        type: property.type,
        mode: property.mode,
        price: property.price,
        area: property.area,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms
      }
    });

    return <Page title="PROPERTIES" hasSidebar>
      <button onClick={() => this.formSubmit({type: "house", bedrooms: 2, bathrooms:3})}>Click me</button>
      <button onClick={() => this.formSubmit({ type: "apartment", bedrooms: 3, bathrooms: 3 })}>Click me</button>
      <button onClick={() => this.formSubmit({ type: "house", bedrooms: 2 })}>Click me</button>
      <Sidebar />
      <PropertyList
        defaultView="grid"
        properties={necessaryProperties}
      />
    </Page>
  }
}

export default withRouter(Index);
