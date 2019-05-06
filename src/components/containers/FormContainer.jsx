import React, { Component } from "react";
import ReactDom from "react-dom";
import InputField from "../ui/InputField.jsx";

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <form id="article-form">
        <InputField
          text="seo title"
          label="seo_title"
          type="text"
          id="title"
          value={this.state.title}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDom.render(<FormContainer/>, wrapper): false
export default FormContainer;
