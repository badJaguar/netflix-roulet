import { shallow } from "enzyme";
import * as React from "react";
import { ErrorBoundry } from "./ErrorBoundry";

test("Renders component", () => {
    const wrapper = shallow(<ErrorBoundry />);
    expect(wrapper.find(".error-boundary")).toHaveLength(0);
});
