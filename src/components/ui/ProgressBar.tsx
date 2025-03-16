"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Konfigurasi NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.1,
});

export default function ProgressBar() {
  const pathname = usePathname(); // Mendapatkan pathname halaman aktif

  useEffect(() => {
    NProgress.start(); // Memulai progress bar saat rute berubah

    const handleComplete = () => {
      NProgress.done(); // Menghentikan progress bar saat selesai memuat halaman
    };

    handleComplete(); // Jalankan handleComplete setelah perubahan rute selesai

  }, [pathname]); // Gunakan pathname sebagai dependensi

  return null;
}
