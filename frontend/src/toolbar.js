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

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: '16px' }}>
      
      {/* Core Nodes */}
      <h4 style={{ marginBottom: '8px' }}>Core Nodes</h4>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '20px'
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="promptTemplate" label="Prompt Template" />
        <DraggableNode type="parser" label="Parser" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="memory" label="Memory" />
        <DraggableNode type="tool" label="Tool" />
      </div>


    </div>
  );
};
