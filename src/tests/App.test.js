import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("Testing in component App", () => {
  test("Component App should show correctly", () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("TopBar").exists()).toBeTruthy();

    expect(wrapper.find("Content").exists()).toBeTruthy();

    expect(wrapper.find("Footer").exists()).toBeTruthy();
  });
});
