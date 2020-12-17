import React from "react";
import { shallow } from "enzyme";
import { services } from "../../src/config";
import StatusPanel from "../../src/components/StatusPanel";

describe("<StatusPanel />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StatusPanel services={services} />);

    expect(wrapper.find("StatusPanelSection").props().heading).toEqual(
      "Group One",
    );
  });
});
