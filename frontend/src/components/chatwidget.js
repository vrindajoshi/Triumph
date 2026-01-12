import { useEffect } from "react";

const VoiceflowWidget = () => {
  useEffect(() => {
    // Prevent loading the script multiple times
    if (window.voiceflow) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: "694c729ea20f534a73cc2d7f" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
      });
    };

    document.body.appendChild(script);

    // Optional cleanup if component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Widget injects itself into the DOM
};

export default VoiceflowWidget;
