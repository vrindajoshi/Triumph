import { useEffect, useRef } from "react";

const VOICEFLOW_PROJECT_ID = "694c729ea20f534a73cc2d7f";

const VoiceflowOverlay = ({ isOpen, setIsOpen }) => {
  const initialized = useRef(false);
  const widgetReady = useRef(false);

  useEffect(() => {
    // Prevent script from loading more than once
    if (initialized.current) return;
    
    initialized.current = true;

    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: VOICEFLOW_PROJECT_ID },
          url: "https://general-runtime.voiceflow.com",
          versionID: "development",
          voice: {
            url: "https://runtime-api.voiceflow.com",
          },
          assistant: {
            renderMode: "widget",
            persistence: 'memory'
          }
        });
        widgetReady.current = true;
      }
    };
    document.body.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.querySelector('script[src*="voiceflow"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Toggle visibility and open chat
  useEffect(() => {
    if (!widgetReady.current) return;

    if (isOpen) {
      // Open the Voiceflow chat
      if (window.voiceflow?.chat?.open) {
        window.voiceflow.chat.open();
      }
    } else {
      // Close the Voiceflow chat
      if (window.voiceflow?.chat?.close) {
        window.voiceflow.chat.close();
      }
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
          }}
        />
      )}
    </>
  );
};

export default VoiceflowOverlay;