import React from "react";

export const FileManagement: React.FC<any> = ({ onBack, onPatientSelected }) => {
  return (
    <div>
      <h2>File Management (stub)</h2>
      <button onClick={() => onPatientSelected?.({ id: "1", name: "John Doe" })}>Select Demo Patient</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
};
