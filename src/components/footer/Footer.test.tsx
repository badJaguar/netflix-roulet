import * as React from "react";

import { shallow } from "enzyme";
import { Footer } from "./Footer";

describe("<Footer />", () => {

    it("renders Footer element as expected", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });
});
