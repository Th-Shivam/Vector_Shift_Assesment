import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white relative overflow-hidden flex flex-col">
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMGgxdjFIMHptMiAyaDF2MUgyeiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')]"></div>

      {/* Subtle radial glow effect from corners */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-800/10 blur-[120px]"></div>
      </div>

      {/* Header / Title */}
      <header className="w-full pt-6 pb-4 px-8 relative z-10 flex justify-between items-center pointer-events-none">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-200 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
            VectorShift
          </h1>
          <p className="text-[9px] text-purple-400/50 mt-1 uppercase tracking-[0.2em] font-bold">Pipeline Builder</p>
        </div>
        <div className="pointer-events-auto">
          <SubmitButton />
        </div>
      </header>

      {/* Main pipeline canvas (centered, full width, bottom spacing for dock) */}
      <main className="flex-1 flex flex-col w-full max-w-[1800px] mx-auto relative z-10 px-6 pb-32 transition-all duration-500">
        <PipelineUI />
      </main>

      {/* Floating Bottom Dock */}
      <PipelineToolbar />
    </div>
  );
}

export default App;
