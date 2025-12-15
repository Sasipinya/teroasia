// app/InnityAdsMobile.tsx
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    innity_adZone?: any;
    __innityLoaded?: boolean;
  }
}

function isMobileUA() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent.toLowerCase();
  return /iphone|ipod|ipad|android|blackberry|opera mini|iemobile/.test(ua);
}

function ensureInnityScript(): Promise<void> {
  return new Promise((resolve) => {
    // ถ้ามีฟังก์ชันอยู่แล้ว ไม่ต้องโหลดซ้ำ
    if (typeof window.innity_adZone === "function") {
      resolve();
      return;
    }
    // ป้องกันโหลดซ้ำหลายรอบในหน้าเดียว
    if (window.__innityLoaded) {
      // รอจนกว่าจะประกาศฟังก์ชัน (กรณีโหลดอยู่)
      const iv = setInterval(() => {
        if (typeof window.innity_adZone === "function") {
          clearInterval(iv);
          resolve();
        }
      }, 50);
      return;
    }

    window.__innityLoaded = true;
    const s = document.createElement("script");
    s.src = "https://cdn.innity.net/admanager.js";
    s.async = true;
    s.onload = () => resolve();
    document.body.appendChild(s);
  });
}

export default function InnityAdsMobile() {
  useEffect(() => {
    if (!isMobileUA()) return;

    let cancelled = false;

    (async () => {
      await ensureInnityScript();
      if (cancelled) return;
      // ตรงนี้เทียบเท่ากับแท็กที่คุณให้มา (ไม่มีพารามิเตอร์เสริม)
      // @ts-ignore
      new window.innity_adZone("337cd73a31464dd4adfc3c5dbc356cd0", "104960", {});
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null; // ไม่มี DOM พิเศษจำเป็น
}
