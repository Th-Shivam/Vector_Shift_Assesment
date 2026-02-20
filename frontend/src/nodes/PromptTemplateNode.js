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
      <div className="flex flex-col gap-2">
        <label className="node-label">Template</label>
        <textarea
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          className="node-input resize-none min-h-[60px]"
        />
      </div>
    </BaseNode>
  );
};
