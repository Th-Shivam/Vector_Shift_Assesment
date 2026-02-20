// // toolbar.js

// import { DraggableNode } from './draggableNode';

// export const PipelineToolbar = () => {

//     return (
//         <div style={{ padding: '10px' }}>
//             <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                 <DraggableNode type='customInput' label='Input' />
//                 <DraggableNode type='llm' label='LLM' />
//                 <DraggableNode type='customOutput' label='Output' />
//                 <DraggableNode type='text' label='Text' />
//             </div>
//         </div>
//     );
// };


// toolbar.js

import { DraggableNode } from './draggableNode';
import { useStore } from './store';

export const PipelineToolbar = () => {
  const nodes = useStore((state) => state.nodes);
  const hasNodes = nodes.length > 0;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 group pointer-events-none flex flex-col items-center gap-3">
      
      {/* Dynamic Label */}
      <div className="px-4 py-1.5 rounded-full bg-gray-900/50 backdrop-blur-md border border-white/5 shadow-lg transition-all duration-500 ease-out translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 transition-all duration-500">
          {hasNodes ? "Add more nodes" : "Choose a node to start"}
        </span>
      </div>

      <div className="flex items-center gap-2 p-3 bg-gray-900/70 backdrop-blur-2xl border border-white/10 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_30px_rgba(139,92,246,0.15)] max-w-[90vw] overflow-x-auto custom-scrollbar transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] translate-y-12 opacity-60 scale-95 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 pointer-events-auto">
        
        {/* Core Nodes */}
        <div className="flex items-center gap-3 px-2">
          <DraggableNode type="customInput" label="Input" />
          <DraggableNode type="llm" label="LLM" />
          <DraggableNode type="customOutput" label="Output" />
          <DraggableNode type="text" label="Text" />
        </div>

        {/* Divider */}
        <div className="w-px h-10 bg-white/10 mx-1 rounded-full shrink-0 transition-all duration-500 group-hover:bg-white/20"></div>

        {/* Advanced Nodes */}
        <div className="flex items-center gap-3 px-2">
          <DraggableNode type="promptTemplate" label="Prompt" />
          <DraggableNode type="parser" label="Parser" />
          <DraggableNode type="condition" label="Condition" />
          <DraggableNode type="memory" label="Memory" />
          <DraggableNode type="tool" label="Tool" />
        </div>

      </div>
    </div>
  );
};
