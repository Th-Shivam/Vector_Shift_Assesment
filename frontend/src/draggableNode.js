// draggableNode.js

const iconMap = {
  customInput: '📥',
  llm: '🧠',
  customOutput: '📤',
  text: '📝',
  promptTemplate: '📋',
  parser: '⚙️',
  condition: '🔀',
  memory: '💾',
  tool: '🛠️'
};

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`${type} group relative flex flex-col items-center justify-center w-16 h-16 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/50 rounded-2xl cursor-grab transition-all duration-300 ease-out shadow-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-2 hover:scale-105 backdrop-blur-md overflow-hidden shrink-0`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/80 to-transparent"></div>
        </div>

        {/* Icon */}
        <span className="relative z-10 text-xl mb-1 group-hover:-translate-y-0.5 transition-transform duration-300 drop-shadow-md">
          {iconMap[type] || '✨'}
        </span>
        
        {/* Label */}
        <span className="relative z-10 text-[9px] font-bold text-gray-400 group-hover:text-white transition-colors duration-300 tracking-wider uppercase">
          {label}
        </span>
      </div>
    );
  };
  