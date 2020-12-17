import React, { useState } from "react";
import PropTypes from "prop-types";
import ServiceGrid from "./ServiceGrid";
import * as serviceTests from "../utils/serviceTests";

const StatusPanelSection = ({ heading, services }) => {
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
  }, [services]);

  return (
    <>
      <h3>{heading}</h3>
      <ServiceGrid services={services} serviceStatuses={serviceStatuses} />
    </>
  );
};

StatusPanelSection.propTypes = {
  heading: PropTypes.string.isRequired,
  services: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default StatusPanelSection;
