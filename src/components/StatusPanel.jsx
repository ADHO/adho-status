import React, { useState } from "react";
import ServiceGrid from "./ServiceGrid";
import { services } from "../config";
import * as serviceTests from "../utils/serviceTests";

const StatusPanel = () => {
  const [serviceStatuses, setServiceStatuses] = useState(
    Object.fromEntries(Object.keys(services).map((key) => [key, "pending"])),
  );

  // React.useEffect (rather than simply useEffect) is necessary to allow
  //  mocking with Jest which is needed to trigger the effect before first render
  //  when testing.
  React.useEffect(() => {
    Object.keys(services).forEach((key) => {
      fetch(
        (services[key].needsCors
          ? "https://cors-anywhere.herokuapp.com/"
          : "") + services[key].endpointUrl,
        {
          mode: "cors",
        },
      )
        .then((response) => {
          if (response.status === 503) {
            setServiceStatuses((prevState) => ({
              ...prevState,
              [key]: "maintenance",
            }));
            return;
          }

          if (response.status !== 200) {
            setServiceStatuses((prevState) => ({
              ...prevState,
              [key]: "fail",
            }));
            return;
          }

          serviceTests[services[key].test](
            response.clone(),
            services[key],
          ).then((status) => {
            setServiceStatuses((prevState) => ({
              ...prevState,
              [key]: status,
            }));
          });
        })
        .catch(() => {
          setServiceStatuses((prevState) => ({
            ...prevState,
            [key]: "fail",
          }));
        });
    });
  }, []);

  return (
    <>
      <div id="status-header">
        <h2>Current service status</h2>
        <p>This section shows services supported by ADHO infrastructure.</p>
      </div>
      <ServiceGrid serviceStatuses={serviceStatuses} />
    </>
  );
};

export default StatusPanel;
