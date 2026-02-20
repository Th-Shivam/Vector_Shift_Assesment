// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      const result = await response.json();

      alert(`
Pipeline Analysis:
Nodes: ${result.num_nodes}
Edges: ${result.num_edges}
Is DAG: ${result.is_dag ? "Yes ✅" : "No ❌"}
      `);

    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert("Error connecting to backend.");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleSubmit}
        className="relative px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-bold tracking-wide rounded-full transition-all duration-300 ease-out shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] hover:-translate-y-1 hover:scale-[1.02] active:scale-95 active:translate-y-0 animate-shine border border-white/10 overflow-hidden group"
      >
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Deploy Pipeline
        </span>
      </button>
    </div>
  );
};
