import { useEffect, useRef } from "react";

const VOICEFLOW_PROJECT_ID = "694c729ea20f534a73cc2d7f";

const VoiceflowOverlay = ({ isOpen, setIsOpen }) => {
  const initialized = useRef(false);

  useEffect(() => {
    // Prevent script from loading more than once
    if (initialized.current || window.voiceflow) return;
    
    initialized.current = true;

    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: VOICEFLOW_PROJECT_ID },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
      });
    };
    document.body.appendChild(script);
  }, []);

  // Toggle visibility via CSS
  useEffect(() => {
    const widget = document.querySelector("vf-chat");
    if (widget) {
      widget.style.display = isOpen ? "block" : "none";
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
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 1000,
          }}
        />
      )}
    </>
  );
};

export default VoiceflowOverlay;