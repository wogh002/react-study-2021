import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppInput from "./components/ui/appInput";

// import App from './app'
const fieldSetStyle = { border: "none" };

class FormControlExample extends Component {
  state = {
    signInInfo: {
      name: "",
      pass: "",
    },
  };

  multiInputHandler = (e) => {
    const { signInInfo } = this.state;
    const { name, value } = e.target;

    this.setState({
      signInInfo: {
        ...signInInfo,
        // 동적리터럴
        // 값이 없으면 name값으로 새로 만들어서 객체에 프로퍼티로 생성
        //  있다면 그 값을 수정
        [name]: value,
      },
    });
  };
  render() {
    return (
      <div className="app container">
        <form className="form-example">
          <fieldset style={fieldSetStyle}>
            <legend className="h2">React 폼 컨트롤 실습</legend>
            <AppInput
              id="user-name"
              label="이름"
              inputProps={{ name: "name" }}
              onInput={this.multiInputHandler}
            />
            <AppInput
              id="user-pass"
              label="패스워드"
              type="password"
              inputProps={{ name: "pass" }}
              onInput={this.multiInputHandler}
            />
            <p>{this.state.inputContent}</p>
          </fieldset>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<FormControlExample />, document.getElementById("root"));
