import * as serviceTests from "../../src/utils/serviceTests";

const response = (data, status = 200) => ({
  json: () => Promise.resolve(data),
  text: () => Promise.resolve(data),
  status,
});

describe("serviceTests", () => {
  describe("testResponseForText", () => {
    it("returns an issue if the response is empty", () =>
      expect(serviceTests.testResponseForText(response())).resolves.toEqual(
        "issue",
      ));

    it("returns an issue if the expected text is not present", () =>
      expect(
        serviceTests.testResponseForText(
          response("<h1>🕱🕱 Site has been pwned! 🕱🕱</h1>"),
          { matchText: "<h1>A Legitimate Site</h1>" },
        ),
      ).resolves.toEqual("issue"));

    it("returns up if all the checks are successful", () =>
      expect(
        serviceTests.testResponseForText(
          response("<html><body><h1>A Legitimate Site</h1></body></html>"),
          { matchText: "<h1>A Legitimate Site</h1>" },
        ),
      ).resolves.toEqual("up"));
  });

  describe("testResponseAgainstRegex", () => {
    it("returns an issue if the response is empty", () =>
      expect(
        serviceTests.testResponseAgainstRegex(response()),
      ).resolves.toEqual("issue"));

    it("returns an issue if the regex does not match", () =>
      expect(
        serviceTests.testResponseAgainstRegex(
          response("<h1>🕱🕱 Site has been pwned! 🕱🕱</h1>"),
          { regex: /<h1>\s*Legitimate Site Header[^<]+<\/h1>/i },
        ),
      ).resolves.toEqual("issue"));

    it("returns up if all the checks are successful", () =>
      expect(
        serviceTests.testResponseAgainstRegex(
          response(`
          <html>
            <body>
              <h1>
                Legitimate Site Header :: Homepage
              </h1>
            </body>
          </html>`),
          { regex: /<h1>\s*Legitimate Site Header[^<]+<\/h1>/i },
        ),
      ).resolves.toEqual("up"));
  });

  describe("testDrupalHealthCheck", () => {
    it("returns an outage if the expected success text is not present", () =>
      expect(
        serviceTests.testDrupalHealthCheck(response("Things are borked")),
      ).resolves.toEqual("outage"));

    it("returns an outage if the response is unparsable", () =>
      expect(serviceTests.testDrupalHealthCheck(response({}))).resolves.toEqual(
        "outage",
      ));

    it("returns up if the final line of the text response is the expected text", () =>
      expect(
        serviceTests.testDrupalHealthCheck(
          response(
            "Successfully Checked A\nSuccessfully Checked B\nAll Health Checks Successfull! 200",
          ),
        ),
      ).resolves.toEqual("up"));
  });

  describe("testResponseCode200", () => {
    it("returns an issue if the response code is not 200", () =>
      expect(
        serviceTests.testResponseCode200(response("", 404)),
      ).resolves.toEqual("issue"));

    it("returns up if the response code is 200", () =>
      expect(serviceTests.testResponseCode200(response())).resolves.toEqual(
        "up",
      ));
  });
});
