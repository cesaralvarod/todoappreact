import React from "react";
import { shallow } from "enzyme";
import TasksList from "../../components/TasksList";

describe("Testing in component TaskItem", () => {
  test("Component TaskItem should show correctly", () => {
    const wrapper = shallow(<TasksList />);

    expect(wrapper).toMatchSnapshot();
  });
});
