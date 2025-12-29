import { useEffect, useState } from 'react';

export function Chatbot() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Only load in browser environment (not in Figma preview)
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }
    
    try {
      // Check if we're in a browser that supports custom elements
      if (!('customElements' in window)) {
        console.warn('Custom elements not supported');
        setHasError(true);
        return;
      }

      // Load the ElevenLabs script
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        setIsLoaded(true);
      };
      
      script.onerror = () => {
        console.warn('ElevenLabs chatbot failed to load');
        setHasError(true);
      };
      
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        try {
          if (document.body && document.body.contains(script)) {
            document.body.removeChild(script);
          }
        } catch (e) {
          // Ignore cleanup errors
        }
      };
    } catch (error) {
      console.warn('Error loading chatbot:', error);
      setHasError(true);
    }
  }, []);

  // Don't render if there's an error or we're in an unsupported environment
  if (hasError || typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        dangerouslySetInnerHTML={{
          __html: '<elevenlabs-convai agent-id="agent_3801kcs9xa70en09tfqye77p7qv1"></elevenlabs-convai>'
        }}
      />
    </div>
  );
}
