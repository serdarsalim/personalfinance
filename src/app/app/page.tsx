"use client";
import { useEffect } from "react";

export default function AppPage() {
  useEffect(() => {
    const ua = navigator.userAgent;
    const isChrome = /Chrome/.test(ua) && /Google Inc/.test(navigator.vendor) && !/Edg/.test(ua);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
    
    // ONLY Chrome on desktop gets iframe
    if (!isChrome || isMobile) {
      window.location.href = "https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec";
    }
  }, []);
  
  // Only Chrome desktop users will see this
  return (
    <iframe
      src="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
      className="fixed inset-0 w-full h-full border-0 z-50 bg-white"
      title="Simplify Budget App"
    />
  );
}