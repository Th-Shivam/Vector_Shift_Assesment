// // textNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input 
//             type="text" 
//             value={currText} 
//             onChange={handleTextChange} 
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }


import { useState, useEffect, useRef } from "react";
import BaseNode from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || "{{input}}"
  );

  const [variables, setVariables] = useState([]);

  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // 🔥 Extract variables dynamically
  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g;
    const matches = [...currText.matchAll(regex)];

    const uniqueVars = [
      ...new Set(matches.map(match => match[1]))
    ];

    setVariables(uniqueVars);
  }, [currText]);

  // 🔥 Auto resize logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables.map(v => ({ id: v }))}
      outputs={[{ id: "output" }]}
    >
      <textarea
        ref={textareaRef}
        value={currText}
        onChange={handleTextChange}
        style={{
          width: "100%",
          minHeight: "60px",
          resize: "none",
          overflow: "hidden",
        }}
      />
    </BaseNode>
  );
};
