import React, { Component } from "react";
import PropTypes from "prop-types";
import { addTodo } from "../../actions/index";
import { connect } from "react-redux";

import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      text: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    console.log("submit being hit");
    e.preventDefault();
    if (!this.state.text.trim()) {
      return;
    }
    console.log(this.state.text)
    this.props.addTodo(this.state.text);
    console.log("submit being hit");
    console.log(this.state.text)
  }

  onChange(e) {
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  }

  render() {
    console.log(this.props)
    return (
      <div onSubmit={this.onSubmit}>
        <form className="mb-3" >
          <InputGroup.Prepend>
            <Button type="submit" variant="outline-secondary">
              Button
            </Button>
          </InputGroup.Prepend>
          <FormControl
            placeholder="this plae"
            onChange={this.onChange}
            value={this.state.text}
          />
        </form>
      </div>
    );
  }
}

index.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  onClick: state.onClick,
  completed: state.completed,
  text: state.text
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text => { dispatch( addTodo(text))})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(index);
