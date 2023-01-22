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
    <div
      className="status-icon"
      dangerouslySetInnerHTML={{ __html: statusIcon }}
    />
    <div className="status-text">
      <a href={serviceUrl} target="_blank" rel="noreferrer">
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
  statusIcon: PropTypes.string,
  serviceUrl: PropTypes.string,
};

StatusItem.defaultProps = { serviceUrl: null, statusIcon: "" };

export default StatusItem;
