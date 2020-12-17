import React from "react";
import { shallow } from "enzyme";
// import { services } from "../../src/config";
import ServiceGrid from "../../src/components/ServiceGrid";

const services = {
  testSite1: {
    displayName: "Test Site 1",
    endpointUrl: "https://example1.org/",
    serviceUrl: "https://example1.org/",
    test: "testResponseForText",
    matchText: "<title>Test Site 1</title>",
  },
  testSite2: {
    displayName: "Test Site 2",
    endpointUrl: "https://example2.org/",
    needsCors: true,
    serviceUrl: "https://example2.org/",
    test: "testResponseForText",
    matchText: "<title>Test Site 2</title>",
  },
};

function shallowWrapper(serviceStatuses) {
  return shallow(
    <ServiceGrid serviceStatuses={serviceStatuses} services={services} />,
  );
}

describe("ServiceGrid", () => {
  const serviceStatuses = Object.fromEntries(
    Object.keys(services).map((key, i) => [
      key,
      ["up", "outage"][i] || "pending",
    ]),
  );

  it("renders a Status Item for each check in the config", () => {
    const wrapper = shallowWrapper(serviceStatuses);
    expect(wrapper.find("div#services StatusItem").length).toEqual(
      Object.keys(services).length,
    );
  });

  it("passes the appropriate props to the StatusItem", () => {
    const wrapper = shallowWrapper(serviceStatuses);

    expect(
      wrapper.find("div#services StatusItem").at(0).props().serviceStatus,
    ).toEqual("up"); // Stubbed success above
    expect(
      wrapper.find("div#services StatusItem").at(1).props().serviceStatus,
    ).toEqual("outage");
  });
});
