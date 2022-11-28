import { Component } from "react";
import Nav from "./nav";
import classes from "../styles.module.css";
import Wave from "react-wavify";
import logo from "../resources/logo_white.png";
import SignUp from "./signup"

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classes.home}>
        <div>
          <img className={classes.logo} src={logo}></img>
        </div>
        <div className={classes.nav}>
          <Nav></Nav>
        </div>
        <div className={classes.graph}></div>
        <div className={classes.land_msg}>Beta coming soon...stay tuned!</div>
        <div className={classes.wave}>
          <Wave
            fill='#5438DC'
            paused={false}
            options={{
              height: 20,
              amplitude: 30,
              speed: 0.3,
              points: 3,
            }}
          />
        </div>
        <SignUp></SignUp>
      </div>
    );
  }
}

export default Home;
