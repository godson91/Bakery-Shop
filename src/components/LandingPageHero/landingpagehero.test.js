import React from "react";
import renderer from "react-test-renderer";
import LandingPageHero from "./LandingPageHero";

it("should render LandingHero component", () => {
  const component = renderer.create(<LandingPageHero />).toJSON();
  expect(component).toMatchSnapshot();
  //this is a test showing that the button works
  //Assuming this is the order now custom button?
  //Test not passing
});
