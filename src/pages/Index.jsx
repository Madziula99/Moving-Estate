import React from "react";
import { withRouter } from "react-router-dom";
import { Page } from "../components/Page/Page.jsx";
import PropertyList from "../components/PropertyList/PropertyList.jsx";
import { PropertyFilter } from "../components/PropertyFilter/PropertyFilter.jsx";
import queryString from 'query-string';
import properties from "../data.json";

class Index extends React.Component {
  constructor(props) {
    super(props);

    const allProperties = properties.map(property => {
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
    })

    this.state = {
      filterOptions: {},
      allProperties: allProperties,
      filteredProperties: allProperties,
      selectedOptions: {}
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

  optionsObject(allProperties) {
    const extract = (key) => [
      ...new Set(allProperties.map((property => property[key])))
    ];

    const options = {
      type: extract("type").sort() || [],
      status: extract("mode").sort() || [],
      bedrooms: extract("bedrooms").sort((a, b) => {return a-b}) || [],
      bathrooms: extract("bathrooms").sort((a, b) => { return a - b }) || [],
      location: [...new Set(allProperties.map((property => property["location"][1])))].sort() || []
    };

    return options;
  }

  filterProperties(filters) {
    const filterKeys = Object.keys(filters);
    const { allProperties } = this.state;

    const filteredProperties = allProperties.filter(item => filterKeys.every(key => {
      const filterValue = filters[key];

      if (key === "type") return item["type"] === filterValue;
      if (key === "mode") return item["mode"] === filterValue;
      if (key === "bathrooms") return item["bathrooms"] === filterValue;
      if (key === "bedrooms") return item["bedrooms"] === filterValue;
      if (key === "location") return item["location"][1] === filterValue;
      if (key === "minArea") return item["area"] >= filterValue;
      if (key === "maxArea") return item["area"] <= filterValue;
      if (key === "minPrice") return item["price"] >= filterValue;
      if (key === "maxPrice") return item["price"] <= filterValue;
      if (key === "minYearBuilt") return item["year"] >= filterValue;

      return true;
    }));

    this.setState({
      filteredProperties: filteredProperties
    });

    return filteredProperties
  }

  render() {
    const { allProperties, filteredProperties, selectedOptions } = this.state;

    return <Page title="PROPERTIES" hasSidebar>
      <PropertyFilter
        values={{ ...selectedOptions }}
        options={ this.optionsObject(allProperties) }
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
