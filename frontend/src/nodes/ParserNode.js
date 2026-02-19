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
      <select
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        style={{ width: "100%" }}
      >
        <option value="JSON">JSON</option>
        <option value="Markdown">Markdown</option>
        <option value="PlainText">Plain Text</option>
      </select>
    </BaseNode>
  );
};
