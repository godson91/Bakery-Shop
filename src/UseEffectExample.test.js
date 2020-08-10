import React from "react";
//must be included in all test files or imported
import { shallow, mount } from "enzyme";
import UseEffectExample from "./UseEffectExample";



describe("Counter Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UseEffectExample/>);
  });

  test("renders without crashing", () => {
    expect(wrapper.find("div"));
  });

  // test("render a button w/ text of `increment` ", () => {
  //   expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  // });

  // test("render the initial value of state in a div", () => {
  //   expect(wrapper.find("#counter-value").text()).toBe("0");
  // });

  // test("render the click even of increment button and increment couter value", () => {
  //   wrapper.find("#increment-btn").simulate("click");
  //   expect(wrapper.find("#counter-value").text()).toBe("1");
  // });

  // test("render the click even of decrement button and decrement couter value", () => {
  //   wrapper.find("#increment-btn").simulate("click");
  //   expect(wrapper.find("#counter-value").text()).toBe("1");
  //   wrapper.find("#decrement-btn").simulate("click");
  //   expect(wrapper.find("#counter-value").text()).toBe("0");
  // });

  // test("renders 0 if clicking decrement on 0 value", () => {
  //   wrapper.find("#decrement-btn").simulate("click");
  //   expect(wrapper.find("#counter-value").text()).toBe("0");
  // });


});
