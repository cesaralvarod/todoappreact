import React from "react";
import { shallow } from "enzyme";
import Footer from "../../../components/layouts/Footer";

describe("Testing in component layout Footer", () => {
  test("Component layout Footer should show correctly", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});
