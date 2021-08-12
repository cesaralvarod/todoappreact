import React from "react";
import { shallow } from "enzyme";
import FormContent from "../../components/FormContent";

describe("Testing in component FormContent", () => {
  test("Component FormContent should show correctly", () => {
    const wrapper = shallow(<FormContent />);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("TaskForm").exists()).toBeTruthy();
  });
});
