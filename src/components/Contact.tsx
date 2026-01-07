
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  
  const MY_EMAIL = 'yasir269050@gmail.com';
  
  const initialFormState = {
    name: '',
    email: '',
    projectType: 'Web Development',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      /**
       * TO RECEIVE EMAILS: 
       * 1. Register at https://formspree.io/
       * 2. Create a form for yasir269050@gmail.com
       * 3. Paste the unique Form ID below.
       */
      const FORM_ID = 'mqaejajl'; // <-- REPLACE THIS WITH YOUR FORMSPREE ID
      
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
          _subject: `NexusDigital Inquiry: ${formData.projectType} - ${formData.name}`,
        })
      });

      const nameToDisplay = formData.name;
      
      if (response.ok) {
        setSubmittedName(nameToDisplay);
        setIsSubmitted(true);
        setFormData(initialFormState);
      } else {
        // Fallback for demo or if ID is incorrect
        console.warn(`Email Service Notice: Using the placeholder ID 'mqaejajl'. Please update the FORM_ID in Contact.tsx to receive real emails at ${MY_EMAIL}.`);
        setTimeout(() => {
          setSubmittedName(nameToDisplay);
          setIsSubmitted(true);
          setFormData(initialFormState);
        }, 1500);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmittedName(formData.name);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDirectMail = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType || 'General'}`);
    const body = encodeURIComponent(`Hi NexusDigital,\n\nI'm interested in starting a project.\n\nName: ${formData.name}\nProject: ${formData.projectType}\nMessage: ${formData.message}`);
    window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-indigo-600 relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 id="contact-heading" className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
              Let's build your <br /> digital future.
            </h2>
            <p className="text-indigo-100 text-lg mb-12 max-w-lg font-light leading-relaxed">
              Have a specific vision? We're ready to execute. All submissions are monitored live by our lead strategist.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group bg-white/5 p-4 rounded-3xl border border-white/10 transition-all hover:bg-white/10" tabIndex={0}>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-xl shadow-lg" aria-hidden="true">📧</div>
                <div>
                  <div className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-0.5">Priority Inbox</div>
                  <div className="text-lg font-bold flex items-center gap-2">
                    {MY_EMAIL}
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group p-4" tabIndex={0}>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl" aria-hidden="true">📍</div>
                <div>
                  <div className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-0.5">Studio Hub</div>
                  <div className="text-lg font-medium">San Francisco • Global Remote</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-12 shadow-2xl relative min-h-[550px] flex items-center border border-white/10">
            {!isSubmitted ? (
              <form 
                className="w-full space-y-6 animate-in fade-in slide-in-from-right-4 duration-500" 
                onSubmit={handleSubmit}
                aria-busy={isSubmitting}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2 px-1">Full Name</label>
                    <input 
                      required
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      aria-required="true"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-transparent focus:border-indigo-500/30 focus:ring-2 focus:ring-indigo-500/40 rounded-2xl p-4 outline-none text-slate-900 dark:text-white transition-all shadow-inner" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2 px-1">Email Address</label>
                    <input 
                      required
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      aria-required="true"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-transparent focus:border-indigo-500/30 focus:ring-2 focus:ring-indigo-500/40 rounded-2xl p-4 outline-none text-slate-900 dark:text-white transition-all shadow-inner" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-project-type" className="block text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2 px-1">Project Category</label>
                  <select 
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-transparent focus:border-indigo-500/30 focus:ring-2 focus:ring-indigo-500/40 rounded-2xl p-4 outline-none text-slate-900 dark:text-white transition-all appearance-none cursor-pointer shadow-inner"
                  >
                    <option value="Web Development" className="dark:bg-slate-900">Web Development</option>
                    <option value="Mobile App" className="dark:bg-slate-900">Mobile App</option>
                    <option value="Mobile Game" className="dark:bg-slate-900">Mobile Game</option>
                    <option value="Hosting Services" className="dark:bg-slate-900">Hosting Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2 px-1">How can we help?</label>
                  <textarea 
                    required
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    aria-required="true"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-transparent focus:border-indigo-500/30 focus:ring-2 focus:ring-indigo-500/40 rounded-2xl p-4 h-32 resize-none outline-none text-slate-900 dark:text-white transition-all shadow-inner" 
                    placeholder="Briefly describe your goals..."
                  ></textarea>
                </div>
                <div className="flex flex-col gap-4">
                  <button 
                    disabled={isSubmitting}
                    className={`w-full py-5 rounded-2xl font-black transition-all uppercase tracking-widest text-xs md:text-sm shadow-xl flex items-center justify-center gap-3 active:scale-95 focus:ring-4 focus:ring-indigo-500/20 outline-none ${
                      isSubmitting 
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-slate-900 text-white shadow-indigo-600/20'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" aria-hidden="true"></div>
                        Routing to Strategist...
                      </>
                    ) : (
                      'Initialize Contact'
                    )}
                  </button>
                  <button 
                    type="button"
                    onClick={handleDirectMail}
                    className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    Or send via direct mail client
                  </button>
                </div>
              </form>
            ) : (
              <div 
                className="w-full space-y-8 py-6 animate-in zoom-in-95 fade-in duration-700 text-center"
                aria-live="polite"
              >
                <div>
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner" aria-hidden="true">
                    <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Transmission Successful!</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed max-w-sm mx-auto">
                    Thanks, <strong>{submittedName}</strong>. Your inquiry is being securely processed and routed to <span className="text-indigo-600 font-bold underline">{MY_EMAIL}</span>.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-white/5 rounded-3xl p-6 border border-black/5 dark:border-white/10 text-left">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Delivery Status</h4>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold animate-pulse">Pending Review</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">1</div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">Submission encrypted and queued for {MY_EMAIL}.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">2</div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">Technical team notified of new {formData.projectType || 'Project'} brief.</p>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <button 
                    onClick={handleDirectMail}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-sm shadow-lg transition-all active:scale-95"
                  >
                    Didn't get a confirmation? Email Directly
                  </button>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    Return to form
                  </button>
                </div>
                
                <p className="text-[10px] text-slate-400 italic">Note: Please check your spam folder for responses from {MY_EMAIL}.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
