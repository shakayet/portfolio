import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import emailjs from '@emailjs/browser';
import { Send, MapPin, Mail } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_ypbhmdp';
const EMAILJS_TEMPLATE_ID = 'template_p43dvop';
const EMAILJS_PUBLIC_KEY = 'aeZ3NufusBcY-Z7sf';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-screen-2xl mx-auto">
        <div className="section-heading">05 / Contact</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                Let's discuss your next <br />
                <span className="text-muted-foreground italic">infrastructure</span>.
              </h2>
              <div className="h-px w-24 bg-primary"></div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-white/30 transition-colors">
                    <Mail size={18} strokeWidth={1.5} className="text-muted-foreground group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="mono-label text-[8px]">Direct Channel</span>
                    <a href="mailto:shakayet.dev@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">shakayet.dev@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-white/30 transition-colors">
                    <MapPin size={18} strokeWidth={1.5} className="text-muted-foreground group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="mono-label text-[8px]">Location</span>
                    <span className="text-lg font-medium">Dhaka, Bangladesh</span>
                  </div>
                </div>
            </div>

            <div className="mt-auto p-8 border border-border bg-white/[0.01] flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="mono-label">Available for immediate deployment</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                  <label htmlFor="name" className="mono-label">Identity</label>
                  <Input 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Full Name" 
                    className="bg-transparent border-0 border-b border-border rounded-none h-12 px-0 text-base focus-visible:ring-0 focus-visible:border-primary transition-colors placeholder:text-muted-foreground/30" 
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="email" className="mono-label">Communication</label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="Email Address" 
                    className="bg-transparent border-0 border-b border-border rounded-none h-12 px-0 text-base focus-visible:ring-0 focus-visible:border-primary transition-colors placeholder:text-muted-foreground/30" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="message" className="mono-label">Requirements</label>
                <Textarea 
                  id="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="What are the technical requirements?" 
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 text-base min-h-[100px] resize-none focus-visible:ring-0 focus-visible:border-primary transition-colors placeholder:text-muted-foreground/30" 
                />
              </div>


              <div className="flex items-center gap-8">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-10 py-4 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all active:scale-95 disabled:opacity-50 flex items-center gap-4"
                >
                  {isSubmitting ? 'Transmitting...' : 'Send Message'}
                  <Send size={14} strokeWidth={1.5} />
                </button>

                {submitStatus === 'success' && (
                  <span className="mono-label text-primary animate-pulse">Transmission Successful</span>
                )}
                {submitStatus === 'error' && (
                  <span className="mono-label text-red-500">Transmission Failed</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

//
