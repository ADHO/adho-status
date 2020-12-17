import React from "react";
import { shallow } from "enzyme";
import { services } from "../../src/config";
import StatusPanelSection from "../../src/components/StatusPanelSection";

let wrapper;

const groupOneServices = services.groupOne.services;

const buildFetchResponse = (status, text = "", json = {}) => ({
  status,
  clone: () => ({
    json: () => Promise.resolve(json),
    text: () => Promise.resolve(text),
  }),
});

const initTest = (fetchResponse) => {
  return () => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    global.fetch = jest.fn(() => Promise.resolve(fetchResponse));
    wrapper = shallow(
      <StatusPanelSection heading="Test Section" services={groupOneServices} />,
    );
  };
};

afterEach(() => {
  React.useEffect.mockRestore();
  global.fetch.mockClear();
  delete global.fetch;
});

describe("processing text responses", () => {
  beforeEach(
    initTest(
      buildFetchResponse(
        200,
        "<html><head><title>Test Site 1</title></head><body></body></html>",
      ),
    ),
  );
  it("processes text responses appropriately", () => {
    expect(
      wrapper.find("ServiceGrid").props().serviceStatuses.testSite1,
    ).toEqual("up");
    expect(
      wrapper.find("ServiceGrid").props().serviceStatuses.testSite2,
    ).toEqual("issue");
  });
});

describe("processing 503 responses", () => {
  beforeEach(initTest(buildFetchResponse(503)));
  it("responds appropriately", () => {
    expect(
      wrapper.find("ServiceGrid").props().serviceStatuses.testSite1,
    ).toEqual("maintenance");
  });
});

describe("processing other error code responses", () => {
  beforeEach(initTest(buildFetchResponse(404)));
  it("responds appropriately", () => {
    expect(
      wrapper.find("ServiceGrid").props().serviceStatuses.testSite1,
    ).toEqual("fail");
  });
});

describe("processing failed fetches", () => {
  beforeEach(initTest(null));
  it("responds appropriately", () => {
    expect(
      wrapper.find("ServiceGrid").props().serviceStatuses.testSite1,
    ).toEqual("fail");
  });
});
