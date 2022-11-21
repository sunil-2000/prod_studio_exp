import { Component } from "react";
import Nav from "./nav";
import classes from "../styles.module.css";
import Wave from "react-wavify";
import { Button } from "react-bootstrap";

class Style1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={classes.nav}>
          <Nav></Nav>
        </div>
    );
  }
}

export default Style1;