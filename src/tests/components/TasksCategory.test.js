import React from "react";
import { shallow } from "enzyme";
import TasksCategory from "../../components/TasksCategory";
import { demoData } from "../fixtures/demoData";

describe("Testing in component TasksCategory", () => {
  const wrapper = shallow(
    <TasksCategory title="Category ..." tasks={demoData.data} />
  );

  test("Component TaskCategory should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
