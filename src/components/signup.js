import useAnalyticsEventTracker from '../useAnalyticsEventTracker';
import { Button } from "react-bootstrap";
import classes from "../styles.module.css";

const SignUp = () => {
  const gaEventTracker = useAnalyticsEventTracker('Sign up');
  return(
            <Button
          className={classes.button}
          color='primary'
          size='lg'
          style={{ fontSize: "36px" }}
          onClick={()=>gaEventTracker('sign up')}
        >
          Sign up! 👀
        </Button>
  )
};

export default SignUp;