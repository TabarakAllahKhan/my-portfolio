import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const head = document.querySelector('head');

    // Load Calendly stylesheet
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    head.appendChild(link);

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    head.appendChild(script);

    // Cleanup on unmount
    return () => {
      head.removeChild(link);
      head.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/tabarakalizai861/30min',
    });
    return false;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-3 shadow-lg text-sm leading-tight"
      >
        <div className="flex flex-col items-center leading-tight">
          <span>Book a Meeting</span>
          <span className="text-xs">powered by Calendly</span>
        </div>
      </button>
    </div>
  );
};

export default CalendlyWidget;
