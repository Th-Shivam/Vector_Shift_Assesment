// // ui.js
// // Displays the drag-and-drop UI
// // --------------------------------------------------

// import { useState, useRef, useCallback } from 'react';
// import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
// import { useStore } from './store';
// import { shallow } from 'zustand/shallow';
// import { InputNode } from './nodes/inputNode';
// import { LLMNode } from './nodes/llmNode';
// import { OutputNode } from './nodes/outputNode';
// import { TextNode } from './nodes/textNode';

// import 'reactflow/dist/style.css';

// const gridSize = 20;
// const proOptions = { hideAttribution: true };
// const nodeTypes = {
//   customInput: InputNode,
//   llm: LLMNode,
//   customOutput: OutputNode,
//   text: TextNode,
// };

// const selector = (state) => ({
//   nodes: state.nodes,
//   edges: state.edges,
//   getNodeID: state.getNodeID,
//   addNode: state.addNode,
//   onNodesChange: state.onNodesChange,
//   onEdgesChange: state.onEdgesChange,
//   onConnect: state.onConnect,
// });

// export const PipelineUI = () => {
//     const reactFlowWrapper = useRef(null);
//     const [reactFlowInstance, setReactFlowInstance] = useState(null);
//     const {
//       nodes,
//       edges,
//       getNodeID,
//       addNode,
//       onNodesChange,
//       onEdgesChange,
//       onConnect
//     } = useStore(selector, shallow);

//     const getInitNodeData = (nodeID, type) => {
//       let nodeData = { id: nodeID, nodeType: `${type}` };
//       return nodeData;
//     }

//     const onDrop = useCallback(
//         (event) => {
//           event.preventDefault();

//           const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
//           if (event?.dataTransfer?.getData('application/reactflow')) {
//             const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
//             const type = appData?.nodeType;

//             // check if the dropped element is valid
//             if (typeof type === 'undefined' || !type) {
//               return;
//             }

//             const position = reactFlowInstance.project({
//               x: event.clientX - reactFlowBounds.left,
//               y: event.clientY - reactFlowBounds.top,
//             });

//             const nodeID = getNodeID(type);
//             const newNode = {
//               id: nodeID,
//               type,
//               position,
//               data: getInitNodeData(nodeID, type),
//             };

//             addNode(newNode);
//           }
//         },
//         [reactFlowInstance]
//     );

//     const onDragOver = useCallback((event) => {
//         event.preventDefault();
//         event.dataTransfer.dropEffect = 'move';
//     }, []);

//     return (
//         <>
//         <div ref={reactFlowWrapper} style={{width: '100wv', height: '70vh'}}>
//             <ReactFlow
//                 nodes={nodes}
//                 edges={edges}
//                 onNodesChange={onNodesChange}
//                 onEdgesChange={onEdgesChange}
//                 onConnect={onConnect}
//                 onDrop={onDrop}
//                 onDragOver={onDragOver}
//                 onInit={setReactFlowInstance}
//                 nodeTypes={nodeTypes}
//                 proOptions={proOptions}
//                 snapGrid={[gridSize, gridSize]}
//                 connectionLineType='smoothstep'
//             >
//                 <Background color="#aaa" gap={gridSize} />
//                 <Controls />
//                 <MiniMap />
//             </ReactFlow>
//         </div>
//         </>
//     )
// }

// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";

// import five new nodes

import { PromptTemplateNode } from "./nodes/PromptTemplateNode";
import { ParserNode } from "./nodes/ParserNode";
import { ConditionNode } from "./nodes/ConditionNode";
import { MemoryNode } from "./nodes/MemoryNode";
import { ToolNode } from "./nodes/ToolNode";

import "reactflow/dist/style.css";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  promptTemplate: PromptTemplateNode,
  parser: ParserNode,
  condition: ConditionNode,
  memory: MemoryNode,
  tool: ToolNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow"),
        );
        const type = appData?.nodeType;

        // check if the dropped element is valid
        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <>
      <div 
        ref={reactFlowWrapper} 
        className="w-full h-full flex-1 rounded-[24px] bg-gray-900/20 backdrop-blur-xl border border-white/5 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] overflow-hidden relative group"
      >
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMGgxdjFIMHptMiAyaDF2MUgyeiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')]"></div>

        {/* Soft vignette around edges */}
        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

        {/* Subtle inner glow for depth */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(139,92,246,0.03)] z-0"></div>
        
        {/* Animated Radial Gradient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-slow"></div>
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-fuchsia-600/5 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>

        {/* Smart Empty State */}
        <div 
          className={`absolute inset-0 flex items-center justify-center pointer-events-none z-0 transition-all duration-1000 ease-in-out ${
            nodes.length === 0 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center gap-6 animate-float-slow">
            
            {/* Icon Container */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Animated dotted outline */}
              <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-purple-500/30 animate-spin-slow"></div>
              
              {/* Inner glass container */}
              <div className="absolute inset-2 rounded-2xl bg-gray-900/50 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                <span className="text-4xl drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">✨</span>
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col items-center gap-2 text-center">
              <h3 className="text-xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent tracking-wide">
                Start Building
              </h3>
              <p className="text-xs font-medium text-gray-500 tracking-widest uppercase max-w-[200px]">
                Drag a node from the dock to begin your workflow
              </p>
            </div>

          </div>
        </div>

        <div className="absolute inset-0 z-10">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onInit={setReactFlowInstance}
            nodeTypes={nodeTypes}
            proOptions={proOptions}
            snapGrid={[gridSize, gridSize]}
            connectionLineType="smoothstep"
            className="w-full h-full"
            fitView
            fitViewOptions={{ padding: 0.5, maxZoom: 1, duration: 800 }}
          >
            <Background color="#4b11a8" gap={gridSize} size={1} variant="dots" className="opacity-40" />
            <Controls />
            <MiniMap 
              nodeColor={(n) => '#8b5cf6'}
              maskColor="rgba(0, 0, 0, 0.7)"
              pannable
              zoomable
            />
          </ReactFlow>
        </div>
      </div>
    </>
  );
};
