import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[3000] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center max-w-xs w-full px-10">
            <div className="flex justify-between items-end w-full mb-6">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-2xl font-black tracking-tighter text-white uppercase"
              >
                Shakayet<span className="text-primary italic">.</span>
              </motion.h1>
              <span className="text-[10px] font-black text-primary/60 tabular-nums uppercase tracking-widest">
                {progress}%
              </span>
            </div>
            
            <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[9px] uppercase tracking-[0.6em] text-muted-foreground mt-8 font-black text-center"
            >
              Engineering Digital Resilience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
