import { useState } from "react";
import BaseNode from "./BaseNode";

export const ParserNode = ({ id }) => {
  const [format, setFormat] = useState("JSON");

  return (
    <BaseNode
      id={id}
      title="Parser"
      inputs={[{ id: "raw_text" }]}
      outputs={[{ id: "parsed_data" }]}
    >
      <div className="flex flex-col gap-2">
        <label className="node-label">Format</label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="node-input appearance-none cursor-pointer"
        >
          <option value="JSON">JSON</option>
          <option value="Markdown">Markdown</option>
          <option value="PlainText">Plain Text</option>
        </select>
      </div>
    </BaseNode>
  );
};
