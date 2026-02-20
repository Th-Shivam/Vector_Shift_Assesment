// // llmNode.js

// import { Handle, Position } from 'reactflow';

// export const LLMNode = ({ id, data }) => {

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{top: `${100/3}%`}}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{top: `${200/3}%`}}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-response`}
//       />
//     </div>
//   );
// }


import BaseNode from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={[
        { id: "system" },
        { id: "prompt" }
      ]}
      outputs={[
        { id: "response" }
      ]}
    >
      <div className="flex flex-col items-center justify-center py-4">
        <div className="w-12 h-12 rounded-full bg-gray-800/50 border border-white/10 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(139,92,246,0.3)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
          <span className="text-xl relative z-10">🧠</span>
        </div>
        <span className="text-sm text-gray-400 font-medium tracking-wide">Language Model</span>
      </div>
    </BaseNode>
  );
};
