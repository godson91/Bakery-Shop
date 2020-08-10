import React from "react";
//must be included in all test files or imported
import { shallow, mount } from "enzyme";
import UseStateExample from "./UseStateExample";

describe("Counter Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UseStateExample/>);
  });

  test("renders without crashing", () => {
    expect(wrapper.find("div"));
  });

  test("render a header with empty text string ", () => {
    expect(wrapper.find("h1").text()).toBe("Jazz");
  });

  test("render a button called `set name to Bennie`", () => {
    expect(wrapper.find("#nameButton").text()).toBe("set name to Bennie");
  });

  test("render the click even of button to update name to Bennie", () => {
    wrapper.find("#nameButton").simulate("click");
    expect(wrapper.find("h1").text()).toBe("Bennie");
  });

  test("render a button called `set state to kansas`", () => {
    expect(wrapper.find("#stateButton").text()).toBe("set state to Kansas");
  });

  test("render the click even of button to update state to Kansas", () => {
    wrapper.find("#stateButton").simulate("click");
    expect(wrapper.find("h2").text()).toBe("Kansas");
    
  });

});
