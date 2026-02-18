import React from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({ id, title, inputs = [], outputs = [], children }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "8px",
        padding: "12px",
        background: "white",
        minWidth: "180px",
        position: "relative",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontWeight: "bold",
          marginBottom: "8px",
          textAlign: "center",
        }}
      >
        {title}
      </div>

      {/* Dynamic Input Handles (Left Side) */}
      {inputs.map((input, index) => (
        <Handle
          key={`${id}-input-${input.id}`}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: 40 + index * 25 }}
        />
      ))}

      {/* Dynamic Output Handles (Right Side) */}
      {outputs.map((output, index) => (
        <Handle
          key={`${id}-output-${output.id}`}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: 40 + index * 25 }}
        />
      ))}

      {/* Custom Node Content */}
      <div>{children}</div>
    </div>
  );
};

export default BaseNode;
