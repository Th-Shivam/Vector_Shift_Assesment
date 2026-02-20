import React from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({ id, title, inputs = [], outputs = [], children }) => {
  return (
    <div
      className="relative min-w-[240px] bg-gray-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_16px_48px_rgba(139,92,246,0.2),inset_0_1px_0_rgba(255,255,255,0.2)] hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-400 ease-out group"
    >
      {/* Gradient Header */}
      <div className="px-5 py-3.5 bg-gradient-to-r from-gray-800/90 to-gray-900/90 border-b border-white/5 flex items-center justify-between rounded-t-2xl transition-colors duration-300 group-hover:from-purple-900/40 group-hover:to-indigo-900/40 relative overflow-hidden">
        {/* Header Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
        
        <div className="flex items-center gap-2.5 relative z-10">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
          <span className="text-xs font-bold text-gray-200 group-hover:text-white tracking-[0.15em] uppercase transition-colors duration-300">
            {title}
          </span>
        </div>
      </div>

      {/* Dynamic Input Handles (Left Side) */}
      {inputs.map((input, index) => (
        <Handle
          key={`${id}-input-${input.id}`}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: 65 + index * 32 }}
        />
      ))}

      {/* Dynamic Output Handles (Right Side) */}
      {outputs.map((output, index) => (
        <Handle
          key={`${id}-output-${output.id}`}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: 65 + index * 32 }}
        />
      ))}

      {/* Custom Node Content */}
      <div className="px-5 py-4 text-gray-300 text-sm">
        {children}
      </div>
    </div>
  );
};

export default BaseNode;
