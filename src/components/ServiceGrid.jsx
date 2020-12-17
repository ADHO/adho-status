import React from "react";
import PropTypes from "prop-types";
import StatusItem from "./StatusItem";
import { statuses } from "../config";

const ServiceGrid = ({ services, serviceStatuses }) => (
  <div id="services">
    {Object.entries(services).map(([key, service]) => {
      const serviceStatus = serviceStatuses[key];
      const status = statuses[serviceStatus];
      return (
        <StatusItem
          key={key}
          serviceName={service.displayName}
          serviceUrl={service.serviceUrl}
          serviceIcon={service.serviceIcon}
          serviceStatus={serviceStatus}
          statusMessage={status.message}
          statusIcon={status.icon}
        />
      );
    })}
  </div>
);

ServiceGrid.propTypes = {
  services: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  serviceStatuses: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ServiceGrid;
