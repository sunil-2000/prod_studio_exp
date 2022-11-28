import React from "react";
import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Button click") => {
  const eventTracker = (action = "sign up click", label = "sign up") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;