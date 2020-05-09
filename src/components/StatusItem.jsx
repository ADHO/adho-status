import React from "react";
import PropTypes from "prop-types";

const StatusItem = ({
  serviceName,
  serviceUrl,
  statusMessage,
  statusIcon,
  serviceStatus,
}) => (
  <div className={`status-item ${serviceStatus}`}>
    <div className="status-icon">{statusIcon}</div>
    <div className="status-text">
      <a href={serviceUrl}>
        <h3 className="service-name">{serviceName}</h3>
      </a>
      <p className="status-message">{statusMessage}</p>
    </div>
  </div>
);

StatusItem.propTypes = {
  serviceStatus: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  statusMessage: PropTypes.string.isRequired,
  statusIcon: PropTypes.string.isRequired,
  serviceUrl: PropTypes.string,
};

StatusItem.defaultProps = { serviceUrl: null };

export default StatusItem;
