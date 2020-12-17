import React from "react";
import { shallow } from "enzyme";
import { services } from "../../src/config";
import ServiceGrid from "../../src/components/ServiceGrid";

const groupOneServices = services.groupOne.services;

function shallowWrapper(serviceStatuses) {
  return shallow(
    <ServiceGrid
      serviceStatuses={serviceStatuses}
      services={groupOneServices}
    />,
  );
}

describe("ServiceGrid", () => {
  const serviceStatuses = Object.fromEntries(
    Object.keys(groupOneServices).map((key, i) => [
      key,
      ["up", "outage"][i] || "pending",
    ]),
  );

  it("renders a Status Item for each check in the config", () => {
    const wrapper = shallowWrapper(serviceStatuses);
    expect(wrapper.find("div.services StatusItem").length).toEqual(
      Object.keys(groupOneServices).length,
    );
  });

  it("passes the appropriate props to the StatusItem", () => {
    const wrapper = shallowWrapper(serviceStatuses);

    expect(
      wrapper.find("div.services StatusItem").at(0).props().serviceStatus,
    ).toEqual("up"); // Stubbed success above
    expect(
      wrapper.find("div.services StatusItem").at(1).props().serviceStatus,
    ).toEqual("outage");
  });
});
