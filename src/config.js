export const services = {
  mainAdhoSite: {
    displayName: "Main ADHO Site",
    endpointUrl: "https://adho.org/",
    needsCors: true,
    serviceUrl: "https://adho.org/",
    test: "testResponseForText",
    matchText: "<title>Our Mission | ADHO</title>",
  },
  achWebsite: {
    displayName: "ACH Website",
    endpointUrl: "https://ach.org/",
    needsCors: true,
    serviceUrl: "https://ach.org/",
    serviceIcon: "ach.svg",
    test: "testResponseForText",
    matchText:
      "<title>The Association for Computers and the Humanities | </title>",
  },
  dhq: {
    displayName: "DHQ Website",
    endpointUrl: "https://digitalhumanities.org/dhq/",
    needsCors: true,
    serviceUrl: "https://digitalhumanities.org/dhq/",
    serviceIcon: "",
    test: "testResponseForText",
    matchText: '<?xml version="1.0" encoding="UTF-8"?>',
  },
};

export const statuses = {
  pending: {
    message: "Checking status...",
  },
  up: {
    icon: "✔",
    message: "No known issues",
  },
  maintenance: {
    icon: "⚒",
    message: "Temporarily unavailable for maintenance",
  },
  issue: {
    icon: "⚠️",
    message: "There may be an issue with this site",
  },
  fail: {
    icon: "❗",
    message: "Site unavailable",
  },
  outage: {
    icon: "🚫",
    message: "Service is down",
  },
};
