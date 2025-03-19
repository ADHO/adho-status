export const services = {
  sites: {
    heading: "Organization and Group Websites",
    services: {
      adhoOrg: {
        displayName: "adho.org",
        endpointUrl: "https://adho.org/",
        serviceUrl: "https://adho.org/",
        test: "testResponseForText",
        matchText:
          "<title>Alliance of Digital Humanities Organizations &#8211; A Global Coalition of Digital Humanities Organizations</title>",
      },
      eadhOrg: {
        displayName: "eadh.org",
        endpointUrl: "https://eadh.org/",
        serviceUrl: "https://eadh.org/",
        serviceIcon: "",
        test: "testResponseForText",
        matchText:
          "<title>EADH - The European Association for Digital Humanities |</title>",
      },
      digHumDe: {
        displayName: "dig-hum.de",
        endpointUrl: "https://dig-hum.de/",
        serviceUrl: "https://dig-hum.de/",
        serviceIcon: "",
        test: "testResponseForText",
        matchText:
          "<title>digital humanities im deutschsprachigen raum</title>",
      },
      humanities: {
        displayName: "4humanities.org",
        endpointUrl: "https://4humanities.org",
        serviceUrl: "https://4humanities.org",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: "<title>4Humanities | Advocating for the Humanities</title>",
      },
      cle: {
        displayName: "cle.world",
        endpointUrl: "https://cle.world",
        serviceUrl: "https://cle.world",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: "<title>Cultural Literacy Everywhere</title>",
      },
      czadh: {
        displayName: "www.czadh.cz",
        endpointUrl: "https://www.czadh.cz",
        serviceUrl: "https://www.czadh.cz",
        serviceIcon: "",
        test: "testResponseForText",
        matchText:
          "<title>CzADH █ &#8211; Česká asociace pro digitální humanitní vědy</title>",
      },
      dhcenternet: {
        displayName: "dhcenternet.org",
        endpointUrl: "https://dhcenternet.org/",
        serviceUrl: "https://dhcenternet.org/",
        serviceIcon: "",
        test: "testResponseForText",
        matchText:
          "<title>centerNet &#8211; An International Network of Digital Humanities Centers</title>",
      },
      membersAchOrg: {
        displayName: "members.ach.org",
        endpointUrl: "https://members.ach.org",
        serviceUrl: "https://members.ach.org",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: "<title>ACH Membership</title>",
      },
      digitalhumanitiesDe: {
        displayName: "digitalhumanities.de",
        endpointUrl: "https://digitalhumanities.de",
        serviceUrl: "https://digitalhumanities.de",
        serviceIcon: "",
        test: "testResponseForText",
        matchText:
          "<title>digital humanities im deutschsprachigen raum</title>",
      },
      mitgliedschaftDigitalhumanitiesDe: {
        displayName: "mitgliedschaft.digitalhumanities.de",
        endpointUrl: "https://mitgliedschaft.digitalhumanities.de",
        serviceUrl: "https://mitgliedschaft.digitalhumanities.de",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: "<title>DHd-Mitgliedschaft</title>",
      },
      geohumanities: {
        displayName: "geohumanities.org",
        endpointUrl: "https://geohumanities.org",
        serviceUrl: "https://geohumanities.org",
        serviceIcon: "",
        test: "testResponseForText",
        matchText:
          "<title>GeoHumanities SIG &#8211; A Special Interest Group of the ADHO</title>",
      },
    },
  },
  dhq: {
    heading: "Digital Humanities Quarterly",
    services: {
      dhqWebsite: {
        displayName: "DHQ Website",
        endpointUrl: "https://digitalhumanities.org/dhq/",
        serviceUrl: "https://digitalhumanities.org/dhq/",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: '<?xml version="1.0" encoding="UTF-8"?>',
      },
      dhqWiki: {
        displayName: "DHQ Wiki",
        endpointUrl: "https://dhq.wikis.adho.org/index.php?title=Main_Page",
        serviceUrl: "https://dhq.wikis.adho.org/",
        serviceIcon: "",
        test: "testResponseForText",
        matchText:
          '<link rel="EditURI" type="application/rsd+xml" href="http://dhq.wikis.adho.org/api.php?action=rsd"/>',
      },
      dhqStatic: {
        displayName: "DHQ File Storage",
        endpointUrl: "https://dhq-static.digitalhumanities.org/",
        serviceUrl: "https://dhq-static.digitalhumanities.org/",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: "<title>ADHO :: DHQ Static</title>",
      },
    },
  },
  digitalHumanitiesDotOrg: {
    heading: "digitalhumanities.org",
    services: {
      companion: {
        displayName: "A Companion to Digital Humanities",
        endpointUrl: "https://companions.digitalhumanities.org/DH/",
        serviceUrl: "https://companions.digitalhumanities.org/DH/",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: "<title>A Companion to Digital Humanities</title>",
      },
      companionDLS: {
        displayName: "A Companion to Digital Literary Studies",
        endpointUrl: "https://companions.digitalhumanities.org/DLS/",
        serviceUrl: "https://companions.digitalhumanities.org/DLS/",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: "<title>A Companion to Digital Literary Studies</title>",
      },
      dhAbstracts: {
        displayName: "Digital Humanities Abstracts (1996-2003)",
        endpointUrl: "https://digitalhumanities.org/dh-abstracts/search",
        serviceUrl: "https://digitalhumanities.org/dh-abstracts/search",
        serviceIcon: "",
        test: "testResponseForText",
        matchText: "<title>Digital Humanities Abstracts: Search Form</title>",
      },
    },
  },
  dhConferences: {
    heading: "ADHO Conference Sites",
    services: {
      dh2025: {
        displayName: "DH2025 Conference Site",
        endpointUrl: "https://dh2025.adho.org/",
        serviceUrl: "https://dh2025.adho.org/",
        test: "testResponseForText",
        matchText:
          "<title>DH2025 &#8211; ADHO Digital Humanities conference 2025, NOVA FCSH, Lisbon, Portugal</title>",
      },
      dh2024: {
        displayName: "DH2024 Conference Site",
        endpointUrl: "https://dh2024.adho.org/",
        serviceUrl: "https://dh2024.adho.org/",
        test: "testResponseForText",
        matchText:
          "<title>DH2024 &#8211; Reinvention &amp; Responsibility</title>",
      },
      dh2023: {
        displayName: "DH2023 Conference Site",
        endpointUrl: "https://dh2023.adho.org/",
        serviceUrl: "https://dh2023.adho.org/",
        test: "testResponseForText",
        matchText:
          "<title>July 10-14 2023, Graz | Austria &#8211; DH 2023, July 10-14 2023, Graz | Austria</title>",
      },
      dh2021: {
        displayName: "DH2021 Conference Site",
        endpointUrl: "https://dh2021.adho.org/",
        serviceUrl: "https://dh2021.adho.org/",
        test: "testResponseForText",
        matchText: "<title>Digital Humanities 2021</title>",
      },
      dh2020: {
        displayName: "DH2020 Conference Site",
        endpointUrl: "https://dh2020.adho.org/",
        serviceUrl: "https://dh2020.adho.org/",
        test: "testResponseForText",
        matchText: "<title>DH2020</title>",
      },
      dh2018: {
        displayName: "DH2018 Conference Site",
        endpointUrl: "https://dh2018.adho.org/",
        serviceUrl: "https://dh2018.adho.org/",
        test: "testResponseForText",
        matchText: "<title>DH 2018 &#8211; Ciudad de México</title>",
      },
      dh2017: {
        displayName: "DH2017 Conference Site",
        endpointUrl: "https://dh2017.adho.org/",
        serviceUrl: "https://dh2017.adho.org/",
        test: "testResponseForText",
        matchText:
          "<title>Digital Humanities 2017 &#8211; Montreal, Canada, August 8-11, 2017</title>",
      },
    },
  },
  dhdConferences: {
    heading: "DHd Conference Sites",
    services: {
      dhd2026: {
        displayName: "DHd 2026 Conference Site",
        endpointUrl: "https://dhd2026.digitalhumanities.de/wp-login.php",
        serviceUrl: "https://dhd2026.digitalhumanities.de/",
        test: "testResponseForText",
        matchText:
          '<form name="loginform" id="loginform" action="https://dhd2026.digitalhumanities.de/wp-login.php" method="post">',
      },
      dhd2026convalidator: {
        displayName: "DHd 2026 DH Convalidator",
        endpointUrl: "https://dhconvalidator.dhd2026.digitalhumanities.de/",
        serviceUrl: "https://dhconvalidator.dhd2026.digitalhumanities.de/",
        test: "testResponseCode200",
      },
      dhd2025: {
        displayName: "DHd 2025 Conference Site",
        endpointUrl: "https://dhd2025.dig-hum.de/wp-login.php",
        serviceUrl: "https://dhd2025.dig-hum.de/",
        test: "testResponseForText",
        matchText:
          '<form name="loginform" id="loginform" action="https://dhd2025.dig-hum.de/wp-login.php" method="post">',
      },
      dhd2024: {
        displayName: "DHd 2024 Conference Site",
        endpointUrl: "https://dhd2024.dig-hum.de/wp-login.php",
        serviceUrl: "https://dhd2024.dig-hum.de/",
        test: "testResponseForText",
        matchText:
          '<form name="loginform" id="loginform" action="https://dhd2024.dig-hum.de/wp-login.php" method="post">',
      },
      dhd2023: {
        displayName: "DHd 2023 Conference Site",
        endpointUrl: "https://dhd2023.dig-hum.de/",
        serviceUrl: "https://dhd2023.dig-hum.de/",
        test: "testResponseForText",
        matchText:
          '<meta name="description" content="DHd2023 Luxemburg / Trier - Open Humanities Open Culture"/>',
      },
      dhd2022: {
        displayName: "DHd 2022 Conference Site",
        endpointUrl: "https://dhd2022.dig-hum.de/",
        serviceUrl: "https://dhd2022.dig-hum.de/",
        test: "testResponseForText",
        matchText:
          "<title>DHd 2022 | Digital Humanities im deutschsprachigen Raum</title>",
      },
      dhd2020: {
        displayName: "DHd 2020 Conference Site",
        endpointUrl: "https://dhd2020.dig-hum.de/",
        serviceUrl: "https://dhd2020.dig-hum.de/",
        test: "testResponseForText",
        matchText:
          "<title>DHd2020 - Spielräume | Paderborn, 02.-06.03.2020</title>",
      },
      dhd2019: {
        displayName: "DHd 2019 Conference Site",
        endpointUrl: "https://dhd2019.dig-hum.de/",
        serviceUrl: "https://dhd2019.dig-hum.de/",
        test: "testResponseForText",
        matchText: "<title>DHd 2019 - multimedial & multimodal</title>",
      },
      dhd2017: {
        displayName: "DHd 2017 Conference Site",
        endpointUrl: "https://dhd2017.dig-hum.de/",
        serviceUrl: "https://dhd2017.dig-hum.de/",
        test: "testResponseForText",
        matchText: '<a href="/" aria-current="page">DHd 2017</a>',
      },
      dhd2016: {
        displayName: "DHd 2016 Conference Site",
        endpointUrl: "https://dhd2016.dig-hum.de/",
        serviceUrl: "https://dhd2016.dig-hum.de/",
        test: "testResponseForText",
        matchText: "<title>DHd 2016 | DHd 2016</title>",
      },
    },
  },
  mailListAdminPages: {
    heading: "Mailing List Archives & Admin UIs",
    services: {
      listsDigitalhumanitiesOrg: {
        displayName: "lists.digitalhumanities.org",
        endpointUrl: "https://lists.digitalhumanities.org/mailman/",
        serviceUrl: "https://lists.digitalhumanities.org/mailman/",
        test: "testResponseForText",
        matchText:
          "<title>\nList Index - lists.digitalhumanities.org\n</title>",
      },
      listsTeiCOrg: {
        displayName: "lists.tei-c.org",
        endpointUrl: "https://lists.tei-c.org/mailman/",
        serviceUrl: "https://lists.tei-c.org/mailman/",
        test: "testResponseForText",
        matchText: "<title>\nList Index - lists.tei-c.org\n</title>",
      },
    },
  },
  adhoInfra: {
    heading: "ADHO Internal Infrastructure",
    services: {
      nextcloud: {
        displayName: "ADHO NextCloud",
        endpointUrl: "https://nextcloud.adho.org/status.php",
        serviceUrl: "https://nextcloud.adho.org/",
        test: "testResponseForText",
        matchText:
          '"installed":true,"maintenance":false,"needsDbUpgrade":false',
      },
      mattermost: {
        displayName: "ADHO Mattermost Instance",
        endpointUrl: "https://mattermost.adho.org/api/v4/system/ping",
        serviceUrl: "https://mattermost.adho.org/",
        test: "testResponseForText",
        matchText: '"status":"OK"',
      },
      umami: {
        displayName: "Umami Analytics",
        endpointUrl: "https://umami.adho.org/dashboard",
        serviceUrl: "https://umami.adho.org/",
        test: "testResponseForText",
        matchText: "<title>Dashboard | Umami</title>",
      },
      listmonk: {
        displayName: "listmonk Newsletter Management",
        endpointUrl: "https://listmonk.adho.org/",
        serviceUrl: "https://listmonk.adho.org/",
        test: "testResponseForText",
        matchText: "<title>listmonk</title>",
      },
      mainwp: {
        displayName: "MainWP",
        endpointUrl: "https://mainwp.adho.org/",
        serviceUrl: "https://mainwp.adho.org/",
        test: "testResponseForText",
        matchText: "<title>Log In &lsaquo; MainWP &#8212; WordPress</title>",
      },
      sftpgo: {
        displayName: "ADHO SFTP Server",
        endpointUrl: "https://sftp.adho.org/",
        serviceUrl: "https://sftp.adho.org/",
        test: "testResponseForText",
        matchText: '<body class="app-blank">',
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
