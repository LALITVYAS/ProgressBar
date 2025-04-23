import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Loading');

  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress(prev => {
          const next = prev + 1;
          if (next >= 100) {
            clearInterval(timer);
            setStatus('Complete');
          }
          return next;
        });
      }, 100);

      return () => clearInterval(timer);
    }
  }, [progress]);

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <div className="mb-2 text-lg font-semibold text-center">{status}</div>
      <div className="w-full bg-gray-300 rounded-full h-6">
        <div
          className="bg-blue-600 h-6 rounded-full text-white text-sm text-center flex items-center justify-center"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
