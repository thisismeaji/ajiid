"use client";

import { useEffect, useTransition } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false, // Hilangkan spinner
  trickleSpeed: 200,  // Kecepatan animasi progress
  minimum: 0.1,       // Progress minimal sebelum selesai
});

export default function ProgressBar() {
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  useEffect(() => {
    NProgress.start(); // Mulai progress bar

    startTransition(() => {
      NProgress.done(); // Selesai saat transisi selesai
    });

  }, [pathname]);

  return null;
}
