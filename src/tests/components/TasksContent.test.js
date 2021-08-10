import React from "react";
import { shallow } from "enzyme";
import TasksContent from "../../components/TasksContent";

describe("Testing in component TasksContent", () => {
  test("Component TasksContent should show correctly", () => {
    const wrapper = shallow(<TasksContent />);

    expect(wrapper).toMatchSnapshot();
  });
});
