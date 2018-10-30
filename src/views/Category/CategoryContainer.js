import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Category from './Category';

class CategoryContainer extends Component {
  componentDidMount() {
    //this.props.match.params.name
    //fetch url + interpolation
    fetch(`http://jservice.io/api/category?id=${this.props.match.params.name}`);
  }
  render() {
    console.log(this.props);
    return (
      <Category
        categoryName={this.props.match.params.name}/>
    );
  }
}

export default withRouter(CategoryContainer);
