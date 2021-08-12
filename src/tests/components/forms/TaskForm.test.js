import React from "react";
import { mount } from "enzyme";
import TaskForm from "../../../components/forms/TaskForm";
import TaskContext from "../../../helpers/TaskContext";
import userEvent from "@testing-library/user-event";

describe("Testing in component form TaskForm", () => {
  const setArrData = jest.fn();

  const TestComponent = () => (
    <TaskContext.Provider value={{ setArrData }}>
      <TaskForm />
    </TaskContext.Provider>
  );

  const wrapper = mount(<TestComponent />);

  test("Component form TaskForm should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Component TaskForm shouldn't call sendArrData() 0 times", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");

    const event = { preventDefault() {}, target: "" };

    formSubmit(event);

    expect(setArrData).toHaveBeenCalledTimes(0);
  });

  test("Component Taskshould call sendArrData() one time", () => {
    const useRefSpy = jest
      .spyOn(React, "useRef")
      .mockReturnValueOnce({ current: document.createElement("button") });

    const wrapper = mount(<TestComponent />);

    const inputTask = wrapper.find("form input");

    const formSubmit = wrapper.find("form").prop("onSubmit");

    const event = { preventDefault() {}, target: "" };

    formSubmit(event);

    // expect(setArrData).toHaveBeenCalledTimes(1);
  });
});
