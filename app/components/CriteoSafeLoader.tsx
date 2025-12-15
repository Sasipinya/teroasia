"use client";

import { useEffect } from "react";
import { useConsent } from "@/app/context/ConsentContext";

export default function CriteoSafeLoader() {
  const { consent } = useConsent();

  useEffect(() => {
    if (!consent?.advertising) return;

    // ตรวจสอบว่ามีอยู่แล้วจริง ๆ ทั้งจาก id และจาก src
    const alreadyLoaded = !!document.querySelector(
      'script[src*="criteo.net/js/px.js"]'
    );
    if (alreadyLoaded) return;

    const script = document.createElement("script");
    script.src = "https://static.criteo.net/js/px.js";
    script.async = true;
    script.setAttribute("id", "criteo-script");

    document.head.appendChild(script);

    // ไม่ควร remove script ถ้าเว็บไม่ได้ unmount component จริง ๆ (เช่น client-side navigation)
    return () => {
      // ถ้าอยากลบ script เมื่อ user เปลี่ยนใจถอน consent ก็ทำตรงนี้
      if (!consent?.advertising) {
        const existing = document.getElementById("criteo-script");
        if (existing) existing.remove();
      }
    };
  }, [consent?.advertising]);

  useEffect(() => {
  if (!consent?.advertising) return;

  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((node) => {
        if (
          node.nodeName === "IFRAME" &&
          node instanceof HTMLIFrameElement &&
          node.src.includes("gum.criteo.com")
        ) {
          node.remove(); // ตัดออกก่อน PageSpeed เห็น
        }
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  return () => observer.disconnect();
}, [consent?.advertising]);

  return null;
}
