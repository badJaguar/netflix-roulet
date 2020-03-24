import { shallow } from "enzyme";
import * as React from "react";
import { Toggler } from "./Toggler";

const onClick = jest.fn();
test("Toggler changes the text after click", () => {
    const toggler = shallow(<Toggler
        leftLabel="TITLE"
        rightLabel="GENRE"
        title={""}
        toggle={false}
        idLeft={""}
        idRight={""}
        name={""}
        onChange={() => onClick}
    />);

    toggler.find("value").contains("this.props.leftLabel");
    toggler.findWhere((input) => input.contains("this.props.idLeft"));

    expect(toggler).toMatchSnapshot();
});
