
import React, { useState } from 'react';
import { generateProjectImage } from '../services/geminiService';

type AspectRatio = '1:1' | '16:9' | '4:3' | '3:4';

const VisualGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('1:1');
  const [error, setError] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('Initializing AI Studio');

  const loadingMessages = [
    'Analyzing visual parameters...',
    'Synthesizing brand aesthetics...',
    'Rendering high-fidelity pixels...',
    'Optimizing lighting and textures...',
    'Finalizing composition...'
  ];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || loading) return;

    setLoading(true);
    setError('');
    
    // Cycle loading messages
    let msgIndex = 0;
    const interval = setInterval(() => {
      msgIndex = (msgIndex + 1) % loadingMessages.length;
      setLoadingMessage(loadingMessages[msgIndex]);
    }, 2500);

    try {
      const url = await generateProjectImage(prompt, aspectRatio);
      setGeneratedImageUrl(url);
    } catch (err) {
      console.error(err);
      setError('Visual generation failed. This might be due to safety filters. Try a different description.');
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const aspectRatios: { label: string; value: AspectRatio }[] = [
    { label: '1:1', value: '1:1' },
    { label: '16:9', value: '16:9' },
    { label: '4:3', value: '4:3' },
    { label: '3:4', value: '3:4' },
  ];

  return (
    <section id="studio" className="py-16 md:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-indigo-600 dark:text-indigo-500 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3 md:mb-4">AI Design Studio</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 md:mb-8 leading-tight">
              Envision Your Brand <br className="hidden md:block" /> In High Definition
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 md:mb-10 text-base md:text-lg leading-relaxed font-light">
              Describe a visual concept for your next project, and our integrated Gemini AI will render a bespoke 2K visual asset instantly.
            </p>

            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="space-y-3">
                <label className="text-slate-900 dark:text-white text-xs font-bold block">Aspect Ratio</label>
                <div className="grid grid-cols-4 gap-2">
                  {aspectRatios.map((ratio) => (
                    <button
                      key={ratio.value}
                      type="button"
                      onClick={() => setAspectRatio(ratio.value)}
                      className={`py-2 rounded-xl text-[10px] md:text-xs font-bold border transition-all ${
                        aspectRatio === ratio.value 
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20' 
                        : 'bg-slate-100 dark:bg-white/5 border-black/5 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                      }`}
                    >
                      {ratio.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. A futuristic glass office skyscraper in a neon cyberpunk city at sunset..."
                  className="w-full h-28 md:h-32 bg-slate-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[20px] md:rounded-[24px] p-4 md:p-6 text-sm md:text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none shadow-inner"
                />
              </div>

              <button
                disabled={loading || !prompt}
                className={`w-full py-4 md:py-5 rounded-2xl font-black text-white transition-all flex items-center justify-center gap-3 text-base md:text-lg ${
                  loading 
                  ? 'bg-slate-300 dark:bg-slate-800 cursor-not-allowed opacity-50' 
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-[0.98] shadow-xl shadow-indigo-500/20'
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    {loadingMessage}
                  </>
                ) : (
                  'Generate Visual'
                )}
              </button>
            </form>

            {error && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-500/5 border border-red-200 dark:border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-xs font-medium animate-in fade-in">
                {error}
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative aspect-square glass rounded-[32px] md:rounded-[40px] overflow-hidden group shadow-2xl flex items-center justify-center border-black/5 dark:border-white/10 bg-slate-50 dark:bg-white/5">
              {loading && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-100/60 dark:bg-slate-900/60 backdrop-blur-md">
                   <div className="w-full h-1 bg-black/5 dark:bg-white/10 absolute top-0 overflow-hidden">
                      <div className="h-full bg-indigo-500 animate-[loading_2s_ease-in-out_infinite]"></div>
                   </div>
                   <p className="text-slate-900 dark:text-white font-black tracking-widest text-[10px] md:text-sm uppercase animate-pulse">{loadingMessage}</p>
                </div>
              )}

              {generatedImageUrl ? (
                <div className="relative w-full h-full animate-in zoom-in-95 duration-1000">
                  <img 
                    src={generatedImageUrl} 
                    alt="AI Generated Branding" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
                    <a 
                      href={generatedImageUrl} 
                      download="nexus-ai-concept.png"
                      className="bg-white text-slate-950 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-black text-xs md:text-sm hover:scale-105 active:scale-95 transition-transform"
                    >
                      Download Asset
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center p-8 md:p-12 space-y-3 md:space-y-4">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-slate-200/50 dark:bg-white/5 rounded-2xl md:rounded-3xl mx-auto flex items-center justify-center text-3xl md:text-4xl border border-black/5 dark:border-white/10 opacity-40">
                    ✨
                  </div>
                  <div className="text-xs md:text-base text-slate-400 dark:text-slate-500 font-medium">Your vision will materialize here</div>
                  <div className="text-[10px] text-slate-300 dark:text-slate-700 uppercase tracking-widest font-black">Powered by Gemini 2.5</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default VisualGenerator;
