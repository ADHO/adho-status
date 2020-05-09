export function testResponseForText(response, serviceConfig) {
  return response
    .text()
    .then((data) =>
      data.indexOf(serviceConfig.matchText) !== -1 ? "up" : "issue",
    )
    .catch(() => "issue");
}

export function testDrupalHealthCheck(response) {
  return response
    .text()
    .then((data) => {
      const lastLine = data.split("\n").pop();
      if (lastLine.match(/^all health checks successfull/i)) {
        return "up";
      }
      return "outage";
    })
    .catch(() => "outage");
}
