"use client";

import { useEffect } from "react";
import { useConsent } from "@/app/context/ConsentContext";

declare global {
  interface Window {
    anymindTS?: {
      que: Function[];
      dispose: () => void;
    };
    startAnymindTS?: () => void;
  }
}

const ATSManager = () => {
  const { consent } = useConsent();

  useEffect(() => {
    console.log("[ATS] Consent status:", consent?.advertising);

    if (!consent?.advertising) return;

    const loadATS = () => {
      console.log("[ATS] Attempting to load ats.js");

      if (document.getElementById("ats-script")) {
        console.log("[ATS] Script already loaded");
        return;
      }

      const script = document.createElement("script");
      script.src = "https://anymind360.com/js/15956/ats.js";
      script.async = true;
      script.id = "ats-script";

      script.onload = () => {
        console.log("[ATS] ats.js loaded");

        // Set up global object if not already
        window.anymindTS = window.anymindTS || { que: [], dispose: () => {} };

        // Wait for `startAnymindTS` to become available
        const tryTrigger = () => {
          if (typeof window.startAnymindTS === "function") {
            console.log("[ATS] startAnymindTS found. Triggering now.");
            window.startAnymindTS();
          } else {
            console.warn("[ATS] startAnymindTS not ready. Retrying...");
            setTimeout(tryTrigger, 100); // retry every 100ms
          }
        };

        tryTrigger();
      };

      script.onerror = () => {
        console.error("[ATS] Failed to load ats.js");
      };

      document.body.appendChild(script);
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadATS);
    } else {
      setTimeout(loadATS, 2000);
    }

    return () => {
      console.log("[ATS] Disposing ATS");
      window.anymindTS?.dispose?.();
    };
  }, [consent?.advertising]);

  return null;
};

export default ATSManager;
