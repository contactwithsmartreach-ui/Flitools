"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("ServiceWorker registration successful with scope: ", registration.scope);
          
          // Request permission to force the prompt to appear
          if ("Notification" in window && Notification.permission === "default") {
            setTimeout(() => {
              Notification.requestPermission().then((permission) => {
                console.log("Notification permission status:", permission);
              });
            }, 1500);
          }
        })
        .catch((error) => {
          console.log("ServiceWorker registration failed: ", error);
        });
    }
  }, []);

  return null;
}