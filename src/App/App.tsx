import React from "react";
import withStyles from "react-jss";
import { StyledFunctionComponent } from "../common/styled-component/StyledComponent";
import { JSSProperty } from "../typings/jss-property";
import logo from "./hello.jpg";

interface IProps {}

interface IStyle {
  appContainer: JSSProperty;
  appLogo: JSSProperty;
  appHeader: JSSProperty;
  appLink: JSSProperty;
}

const styles: IStyle = {
  appContainer: {
    textAlign: "center"
  },
  appLogo: {
    height: "40vmin",
    pointerEvents: "none"
  },
  appHeader: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "black"
  },
  appLink: {
    color: "#61dafb"
  }
};

const _App: StyledFunctionComponent<IProps, IStyle> = props => {
  const classes = props.classes;

  //

  return render();

  function render(): JSX.Element {
    return (
      <div className={classes.appContainer}>
        <header className={classes.appHeader}>
          <img src={logo} className={classes.appLogo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={classes.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
};

export const App = withStyles(styles, {
  injectTheme: true
})(_App);

export default App;
