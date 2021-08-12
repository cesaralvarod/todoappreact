import React from "react";
import {  mount } from "enzyme";
import TasksList from "../../components/TasksList";
import { demoData } from "../fixtures/demoData";
import TaskContext from "../../helpers/TaskContext";

describe("Testing in component TaskItem", () => {
  const TestComponent = () => (
    <TaskContext.Provider value={{ setArrData() {} }}>
      <TasksList tasks={demoData.data} />
    </TaskContext.Provider>
  );

  const wrapper = mount(<TestComponent />);

  test("Component TaskItem should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Component TaskItem should render 3 TaskItem", () => {
    expect(wrapper.find("TaskItem").length).toBe(demoData.data.length);
  });
});
