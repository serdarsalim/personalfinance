"use client";
import { useEffect } from "react";

export default function AppPage() {
  useEffect(() => {
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // If not Chrome OR if mobile, redirect to the app directly
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