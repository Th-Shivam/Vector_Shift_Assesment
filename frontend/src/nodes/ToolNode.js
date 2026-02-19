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
      <select
        value={tool}
        onChange={(e) => setTool(e.target.value)}
        style={{ width: "100%" }}
      >
        <option value="Search">Search</option>
        <option value="Calculator">Calculator</option>
        <option value="API">API</option>
      </select>
    </BaseNode>
  );
};
