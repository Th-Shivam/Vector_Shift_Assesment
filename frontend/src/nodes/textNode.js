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


import { useState, useEffect } from "react";
import BaseNode from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || "{{input}}"
  );

  const [variables, setVariables] = useState([]);

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

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables.map(v => ({ id: v }))}
      outputs={[{ id: "output" }]}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <textarea
          value={currText}
          onChange={handleTextChange}
          style={{
            width: "100%",
            minHeight: "60px",
            resize: "none",
          }}
        />
      </div>
    </BaseNode>
  );
};
