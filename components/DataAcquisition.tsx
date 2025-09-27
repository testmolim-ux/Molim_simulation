import React from "react";

export const DataAcquisition: React.FC<any> = ({ patientId, onBack }) => {
  return (
    <div>
      <h2>Data Acquisition (stub)</h2>
      <p>Patient ID: {patientId}</p>
      <button onClick={onBack}>Back to Home</button>
    </div>
  );
};
