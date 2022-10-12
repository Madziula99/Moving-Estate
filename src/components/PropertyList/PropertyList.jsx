import React from "react";
import {NavLink, withRouter } from "react-router-dom"
import ViewModeToggle from "../ViewModeToggle/ViewModeToggle.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";
import styles from "./PropertyList.module.css";

class PropertyList extends React.Component {
  constructor(props) {
    super(props);

    let pageSize = this.props.defaultView === "grid" ? 12 : 8;
    let pages = Math.ceil(this.props.properties.length / pageSize);
    let propertiesList = [];

    for (let i = 0; i < this.props.properties.length; i += pageSize) {
      propertiesList.push(this.props.properties.slice(i, i + pageSize));
    }

    this.state = {
      currentMode: this.props.defaultView,
      pageSize: pageSize,
      propertiesList: propertiesList,
      pages: pages,
      currentPage: 1
    };
  }

  toggleViewMode(mode) {
    if (mode === this.props.currentMode) return;

    const newPageSize = (mode === "grid") ? 12 : 8;
    const pages = Math.ceil(this.props.properties.length / newPageSize);
    const page = (this.state.currentPage > pages) ? pages : this.state.currentPage;
    const propertiesList = [];

    for (let i = 0; i < this.props.properties.length; i += newPageSize) {
      propertiesList.push(this.props.properties.slice(i, i + newPageSize));
    }

    this.setState({
      currentMode: mode,
      pageSize: newPageSize,
      propertiesList: propertiesList,
      pages: pages,
      currentPage: page
    });
  }

  changePage(page) {
    if (page === this.props.currentPage) return;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

    this.setState({
      currentPage: page
    });
  }

  addClasses() {
    const classes = [styles.properties_wrapper];
    this.state.currentMode === "grid" && classes.push(styles.grid_view_mode);

    return classes.join(" ");
  }

  render() {
    return <div>
      <ViewModeToggle
        mode={this.state.currentMode}
        onChange={mode => this.toggleViewMode(mode)}
      />
      <div className={this.addClasses()}>
        {this.state.propertiesList[this.state.currentPage - 1].map(property => {
          const { id, ...props } = property;
          return (
            <NavLink to={`${id}`} key={`${id}-link`}>
              <PropertyCard
                viewMode={this.state.currentMode}
                {...props}
              />
            </NavLink>
          )
        })}
      </div>
      <Pagination
        pages={this.state.pages}
        page={this.state.currentPage}
        onChange={page => this.changePage(page)}
      />
    </div>
  }
}

export default withRouter(PropertyList);
