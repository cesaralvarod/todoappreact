import React from "react";
import { shallow } from "enzyme";
import TopBar from "../../../components/layouts/TopBar";

describe("Testing in component layout TopBar", () => {
  test("Component layout TopBar should show correctly", () => {
    const wrapper = shallow(<TopBar />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").exists()).toBeTruthy();
  });
});
