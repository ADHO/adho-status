import React from "react";
import { shallow } from "enzyme";

import StatusItem from "../../src/components/StatusItem";

function shallowWrapper(props) {
  return shallow(
    <StatusItem
      serviceStatus=""
      serviceName=""
      statusMessage=""
      statusIcon=""
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />,
  );
}

describe("<StatusItem />", () => {
  it("adds the service status class", () => {
    const wrapper = shallowWrapper({ serviceStatus: "test-class" });
    expect(wrapper.contains(<div className="status-item test-class" />));
  });

  it("displays the service name", () => {
    const wrapper = shallowWrapper({ serviceName: "Main ADHO Site" });
    expect(wrapper.find(".service-name").text()).toEqual("Main ADHO Site");
  });

  it("adds a link to the service name if URL is provided", () => {
    const wrapper = shallowWrapper({
      serviceName: "Main ADHO Site",
      serviceUrl: "https://adho.org/",
    });
    expect(wrapper.find(".service-name").text()).toEqual("Main ADHO Site");
    expect(wrapper.find(".status-text a").prop("href")).toEqual(
      "https://adho.org/",
    );
  });

  it("displays the status message", () => {
    const wrapper = shallowWrapper({ statusMessage: "up" });
    expect(wrapper.find(".status-message").text()).toEqual("up");
  });

  it("displays the status icon", () => {
    const wrapper = shallowWrapper({ statusIcon: "✅" });
    expect(wrapper.find(".status-icon").text()).toEqual("✅");
  });
});
