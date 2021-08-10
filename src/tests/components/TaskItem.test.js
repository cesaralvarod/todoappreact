import React from "react";
import { shallow } from "enzyme";
import TaskItem from "../../components/TaskItem";

describe("Testing in component TaskItem", () => {
  test("Component TaskItem should show correctly", () => {
    const dataParams = {
      dataTask: { id: 123, content: "lorem ipsum", done: false },
      handleToggle: jest.fn(),
      handleDelete: jest.fn(),
    };

    const wrapper = shallow(<TaskItem {...dataParams} />);

    expect(wrapper).toMatchSnapshot();
  });
});
