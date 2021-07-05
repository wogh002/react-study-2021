import React from "react";
import { string, func } from "prop-types";

class AppInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content || "",
    };
  }
  static propTypes = {
    label: string.isRequired,
    id: string.isRequired,
    onInput: func,
  };
  static defaultProps = {
    type: "text",
  };

  handler(e) {
    const { onInput } = this.props;
    onInput && onInput(e);
  }
  render() {
    return (
      <div className="form-control">
        <label htmlFor={this.props.id} className="label">
          {this.props.label}
        </label>
        <input
          id={this.props.id}
          type={this.props.type}
          className="input"
          {...this.props.inputProps}
          onChange={(e) => {
            this.handler(e);
          }}
        />
      </div>
    );
  }
}
export default AppInput;
