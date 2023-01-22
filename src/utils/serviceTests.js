export function testResponseCode200(response) {
  // these tests are only invoked if response.status is 200
  //  (as tested in StatusPanelSection.jsx), so this is redundant
  return Promise.resolve(response.status === 200 ? "up" : "issue");
}

export function testResponseForText(response, serviceConfig) {
  return response
    .text()
    .then((data) =>
      data.indexOf(serviceConfig.matchText) !== -1 ? "up" : "issue",
    )
    .catch(() => "issue");
}

export function testResponseAgainstRegex(response, serviceConfig) {
  return response
    .text()
    .then((data) => (serviceConfig.regex.test(data) ? "up" : "issue"))
    .catch(() => "issue");
}

export function testDrupalHealthCheck(response) {
  return response
    .text()
    .then((data) => {
      const lastLine = data.split("\n").pop();
      if (lastLine.match(/^all health checks successful/i)) {
        return "up";
      }
      return "outage";
    })
    .catch(() => "outage");
}
