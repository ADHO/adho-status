import React from "react";
import StatusPanelSection from "./StatusPanelSection";
import { services } from "../config";

const StatusPanel = () => {
  return (
    <>
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
