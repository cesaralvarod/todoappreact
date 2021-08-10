import React from "react";
import { shallow } from "enzyme";
import TaskForm from "../../../components/forms/TaskForm";

describe("Testing in component form TaskForm", () => {
  test("Component fonr TaskForm should show correctly", () => {
    const wrapper = shallow(<TaskForm />);

    expect(wrapper).toMatchSnapshot();
  });
});
