import React from "react";
import { shallow } from "enzyme";
import TaskItem from "../../components/TaskItem";
import { demoData } from "../fixtures/demoData";

describe("Testing in component TaskItem", () => {
  const dataTask = demoData.data[1];

  const dataParams = {
    dataTask,
    handleToggle: jest.fn(),
    handleDelete: jest.fn(),
  };

  const wrapper = shallow(<TaskItem {...dataParams} />);

  test("Component TaskItem should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Component TaskItem should show task correctly", () => {
    expect(wrapper.find("label.task-content p").exists()).toBeTruthy();

    expect(wrapper.find("label.task-content p").text().trim()).toBe(
      dataTask.content.trim()
    );
  });

  test("Component TaskItem should call callback handleDelete correctly", () => {
    wrapper.find("button.task-times").simulate("click");

    expect(dataParams.handleDelete).toHaveBeenCalledWith(dataTask.id);
  });

  test("Component TaskItem should call callback handleToggle correctly", () => {
    wrapper.find("input[type='checkbox']").simulate("change");

    expect(dataParams.handleToggle).toHaveBeenCalledWith(dataTask.id);
  });
});
