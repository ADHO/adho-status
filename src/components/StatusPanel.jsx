import React from "react";
import StatusPanelSection from "./StatusPanelSection";
import { services } from "../config";

const StatusPanel = () => {
  return (
    <>
      <div id="status-header">
        <h2>Current service status</h2>
        <p>This section shows services supported by ADHO infrastructure.</p>
      </div>
      {Object.keys(services).map((key) => (
        <StatusPanelSection
          key={key}
          heading={services[key].heading}
          services={services[key].services}
        />
      ))}
    </>
  );
};

export default StatusPanel;
