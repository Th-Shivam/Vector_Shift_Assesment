import { useState } from "react";
import BaseNode from "./BaseNode";

export const ToolNode = ({ id }) => {
  const [tool, setTool] = useState("Search");

  return (
    <BaseNode
      id={id}
      title="Tool"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "tool_response" }]}
    >
      <div className="flex flex-col gap-2">
        <label className="node-label">Tool Type</label>
        <select
          value={tool}
          onChange={(e) => setTool(e.target.value)}
          className="node-input appearance-none cursor-pointer"
        >
          <option value="Search">Search</option>
          <option value="Calculator">Calculator</option>
          <option value="API">API</option>
        </select>
      </div>
    </BaseNode>
  );
};
