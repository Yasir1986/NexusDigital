
import React, { useState } from 'react';
import { getProjectEstimate } from '../../services/geminiService';
import { EstimateResult } from '../../types';

const ProjectEstimator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [error, setError] = useState('');

  const handleEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError('');
    try {
      const estimate = await getProjectEstimate(prompt);
      setResult(estimate);
    } catch (err) {
      console.error(err);
      setError('Failed to generate estimate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="estimator" className="py-16 md:py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <div className="glass p-6 sm:p-10 md:p-16 rounded-[32px] md:rounded-[40px] border-indigo-500/10 shadow-2xl shadow-indigo-500/5 bg-white dark:bg-white/5">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 md:mb-4">AI Project Estimator</h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light px-2">Describe your project briefly, and our AI will provide a ballpark timeline and tech stack.</p>
          </div>

          <form onSubmit={handleEstimate} className="space-y-4 md:space-y-6">
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: I need a food delivery mobile app with real-time tracking..."
                className="w-full h-32 md:h-40 bg-slate-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-5 md:p-6 text-sm md:text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none shadow-inner"
              />
            </div>

            <button
              disabled={loading || !prompt}
              className={`w-full py-4 rounded-xl md:rounded-2xl font-bold text-white transition-all flex items-center justify-center gap-2 text-sm md:text-base ${loading ? 'bg-slate-400 dark:bg-slate-700 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500 active:scale-95 shadow-lg shadow-indigo-600/20'}`}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Analyzing...
                </>
              ) : (
                'Generate Smart Estimate'
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-center text-xs md:text-sm">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-8 md:mt-12 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-slate-100 dark:bg-white/5 rounded-2xl p-4 md:p-6 text-center">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Timeline</div>
                  <div className="text-xl md:text-2xl font-black text-indigo-600 dark:text-indigo-400">{result.estimatedWeeks} Weeks</div>
                </div>
                <div className="bg-slate-100 dark:bg-white/5 rounded-2xl p-4 md:p-6 text-center">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Complexity</div>
                  <div className="text-xl md:text-2xl font-black text-purple-600 dark:text-purple-400">{result.complexity}</div>
                </div>
              </div>

              <div className="bg-slate-100 dark:bg-white/5 rounded-2xl p-6 md:p-8">
                <h5 className="text-sm md:text-base text-slate-900 dark:text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  AI Analysis
                </h5>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  "{result.briefAnalysis}"
                </p>
              </div>

              <div>
                <h5 className="text-sm md:text-base text-slate-900 dark:text-white font-bold mb-3 md:mb-4">Recommended Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {result.suggestedTechStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-indigo-600/10 border border-indigo-600/20 rounded-full text-[10px] md:text-xs font-medium text-indigo-700 dark:text-indigo-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;
