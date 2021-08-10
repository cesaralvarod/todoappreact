import React from "react";
import { shallow } from "enzyme";
import TasksCategory from "../../components/TasksCategory";

describe("Testing in component TaskCategory", () => {
  test("Component TaskCategory should show correctly", () => {
    const wrapper = shallow(<TasksCategory />);

    expect(wrapper).toMatchSnapshot();
  });
});
