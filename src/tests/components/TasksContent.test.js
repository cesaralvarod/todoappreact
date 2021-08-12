import React from "react";
import { shallow } from "enzyme";
import TasksContent from "../../components/TasksContent";
import TaskContext from "../../helpers/TaskContext";
import { demoData } from "../fixtures/demoData";

describe("Testing in component TasksContent", () => {
  const TestComponent = () => (
    <TaskContext.Provider value={{ arrData: demoData }}>
      <TasksContent />
    </TaskContext.Provider>
  );

  const wrapper = shallow(<TestComponent />);

  test("Component TasksContent should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
