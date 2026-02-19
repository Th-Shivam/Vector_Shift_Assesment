import { useState } from "react";
import BaseNode from "./BaseNode";

export const PromptTemplateNode = ({ id }) => {
  const [template, setTemplate] = useState("Write about {{topic}}");

  return (
    <BaseNode
      id={id}
      title="Prompt Template"
      inputs={[
        { id: "system" },
        { id: "variables" }
      ]}
      outputs={[
        { id: "compiled_prompt" }
      ]}
    >
      <textarea
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
        style={{ width: "100%", minHeight: "60px" }}
      />
    </BaseNode>
  );
};
