import React from "react";
import { shallow } from "enzyme";
import Content from "../../components/Content";

describe("Testing in component Content", () => {
  test("Component Content should show correctly", () => {
    const wrapper = shallow(<Content />);

    console.log(wrapper.html());

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("TasksContent").exists()).toBeTruthy();
  });
});
