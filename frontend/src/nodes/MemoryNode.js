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
      <select
        value={memoryType}
        onChange={(e) => setMemoryType(e.target.value)}
        style={{ width: "100%" }}
      >
        <option value="ShortTerm">Short Term</option>
        <option value="LongTerm">Long Term</option>
      </select>
    </BaseNode>
  );
};
