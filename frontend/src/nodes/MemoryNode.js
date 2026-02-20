import { useState } from "react";
import BaseNode from "./BaseNode";

export const MemoryNode = ({ id }) => {
  const [memoryType, setMemoryType] = useState("ShortTerm");

  return (
    <BaseNode
      id={id}
      title="Memory"
      inputs={[{ id: "message" }]}
      outputs={[{ id: "context" }]}
    >
      <div className="flex flex-col gap-2">
        <label className="node-label">Type</label>
        <select
          value={memoryType}
          onChange={(e) => setMemoryType(e.target.value)}
          className="node-input appearance-none cursor-pointer"
        >
          <option value="ShortTerm">Short Term</option>
          <option value="LongTerm">Long Term</option>
        </select>
      </div>
    </BaseNode>
  );
};
