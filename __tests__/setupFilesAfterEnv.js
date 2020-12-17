import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { statuses } from "../src/config";

Enzyme.configure({ adapter: new Adapter() });

jest.doMock("../src/config", () => ({
  services: {
    groupOne: {
      heading: "Group One",
      services: {
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
      },
    },
  },
  statuses,
}));
