export const services = {
  adhoDotOrg: {
    heading: "adho.org",
    services: {
      mainAdhoSite: {
        displayName: "Main ADHO Site",
        endpointUrl: "https://adho.org/",
        needsCors: false,
        serviceUrl: "https://adho.org/",
        test: "testResponseForText",
        matchText:
          "<title>Alliance of Digital Humanities Organizations &#8211; A Global Coalition of Digital Humanities Organizations</title>",
      },
      dh2017: {
        displayName: "DH2017 Conference Site",
        endpointUrl: "https://dh2017.adho.org/",
        needsCors: false,
        serviceUrl: "https://dh2017.adho.org/",
        test: "testResponseForText",
        matchText:
          "<title>Digital Humanities 2017 &#8211; Montreal, Canada, August 8-11, 2017</title>",
      },
      dh2018: {
        displayName: "DH2018 Conference Site",
        endpointUrl: "https://dh2018.adho.org/",
        needsCors: false,
        serviceUrl: "https://dh2018.adho.org/",
        test: "testResponseForText",
        matchText: "<title>DH 2018 &#8211; Ciudad de México</title>",
      },
      dh2020: {
        displayName: "DH2020 Conference Site",
        endpointUrl: "https://dh2020.adho.org/",
        needsCors: false,
        serviceUrl: "https://dh2020.adho.org/",
        test: "testResponseForText",
        matchText: "<title>DH2020</title>",
      },
      dh2021: {
        displayName: "DH2021 Conference Site",
        endpointUrl: "https://dh2021.adho.org/",
        needsCors: false,
        serviceUrl: "https://dh2021.adho.org/",
        test: "testResponseForText",
        matchText: "<title>Digital Humanities 2021</title>",
      },
    },
  },
  digitalHumanitiesDotOrg: {
    heading: "digitalhumanities.org",
    services: {
      dhq: {
        displayName: "DHQ Website",
        endpointUrl: "https://digitalhumanities.org/dhq/",
        needsCors: false,
        serviceUrl: "https://digitalhumanities.org/dhq/",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: '<?xml version="1.0" encoding="UTF-8"?>',
      },
      dhAbstracts: {
        displayName: "Digital Humanities Abstracts (1996-2003)",
        endpointUrl: "http://digitalhumanities.org/dh-abstracts/search",
        needsCors: false,
        serviceUrl: "https://digitalhumanities.org/dh-abstracts/search",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: "<title>Digital Humanities Abstracts: Search Form</title>",
      },
      companion: {
        displayName: "A Companion to Digital Humanities",
        endpointUrl: "https://companions.digitalhumanities.org/DH/",
        needsCors: false,
        serviceUrl: "https://companions.digitalhumanities.org/DH/",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: "<title>A Companion to Digital Humanities</title>",
      },
      companionDLS: {
        displayName: "A Companion to Digital Literary Studies",
        endpointUrl: "https://companions.digitalhumanities.org/DLS/",
        needsCors: false,
        serviceUrl: "https://companions.digitalhumanities.org/DLS/",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: "<title>A Companion to Digital Literary Studies</title>",
      },
    },
  },
  others: {
    heading: "Others",
    services: {
      humanities: {
        displayName: "4humanities.org",
        endpointUrl: "https://4humanities.org",
        needsCors: false,
        serviceUrl: "https://4humanities.org",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: "<title>4Humanities | Advocating for the Humanities</title>",
      },
      cleurope: {
        displayName: "cleurope.eu",
        endpointUrl: "https://cleurope.eu",
        needsCors: false,
        serviceUrl: "https://cleurope.eu",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: "<title>My CMS &#8211; Cultural Literacy Everywhere</title>",
      },
      czadh: {
        displayName: "www.czadh.cz",
        endpointUrl: "https://www.czadh.cz",
        needsCors: false,
        serviceUrl: "https://www.czadh.cz",
        serviceIcon: "",
        test: "testResponseForText",
        matchText:
          "<title>CzADH █ &#8211; Česká asociace pro digitální humanitní vědy</title>",
      },
      geohumanities: {
        displayName: "geohumanities.org",
        endpointUrl: "https://geohumanities.org",
        needsCors: false,
        serviceUrl: "https://geohumanities.org",
        serviceIcon: "",
        test: "testResponseForText",
        matchText:
          "<title>GeoHumanities SIG &#8211; A Special Interest Group of the ADHO</title>",
      },
      bostondh: {
        displayName: "bostondh.org",
        endpointUrl: "https://bostondh.org/",
        needsCors: false,
        serviceUrl: "https://bostondh.org/",
        serviceIcon: "",
        test: "testResponseAgainstRegex",
        regex: /<h2 class="featured-subtitle">\s*Boston DH Consortium\s*<\/h2>/,
      },
      dhcenternet: {
        displayName: "dhcenternet.org",
        endpointUrl: "https://dhcenternet.org/",
        needsCors: false,
        serviceUrl: "https://dhcenternet.org/",
        serviceIcon: "",
        test: "testResponseForText",
        matchText:
          "<title>centerNet | An international network of digital humanities centers</title>",
      },
      dighum: {
        displayName: "dig-hum.de",
        endpointUrl: "https://dig-hum.de/",
        needsCors: false,
        serviceUrl: "https://dig-hum.de/",
        serviceIcon: "",
        test: "testResponseForText",
        matchText:
          "<title>digital humanities im deutschsprachigen raum</title> ",
      },
    },
  },
};

export const statuses = {
  pending: {
    message: "Checking status...",
  },
  up: {
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M9 12l2 2l4 -4"></path>
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
    </svg>`,
    message: "No detected issues",
  },
  maintenance: {
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="7" width="16" height="9" rx="1"></rect>
      <path d="M7 16v4"></path>
      <path d="M7.5 16l9 -9"></path>
      <path d="M13.5 16l6.5 -6.5"></path>
      <path d="M4 13.5l6.5 -6.5"></path>
      <path d="M17 16v4"></path>
      <path d="M5 20h4"></path>
      <path d="M15 20h4"></path>
      <path d="M17 7v-2"></path>
      <path d="M7 7v-2"></path>
    </svg>`,
    message: "Temporarily unavailable for maintenance",
  },
  issue: {
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 9v2m0 4v.01"></path>
      <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path>
    </svg>`,
    message: "There may be an issue with this site",
  },
  fail: {
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 9v4"></path>
      <path d="M12 16v.01"></path>
    </svg>`,
    message: "Site unavailable",
  },
  outage: {
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9"></circle>
      <line x1="5.7" y1="5.7" x2="18.3" y2="18.3"></line>
    </svg>`,
    message: "Service is down",
  },
};
