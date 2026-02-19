import { useState } from "react";
import BaseNode from "./BaseNode";

export const ConditionNode = ({ id }) => {
  const [condition, setCondition] = useState("value > 0");

  return (
    <BaseNode
      id={id}
      title="Condition"
      inputs={[{ id: "value" }]}
      outputs={[
        { id: "true" },
        { id: "false" }
      ]}
    >
      <input
        type="text"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        placeholder="Enter condition"
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
};
