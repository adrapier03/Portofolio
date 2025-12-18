import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// Mengekspor konfigurasi default untuk Vite
export default defineConfig({
  // Mendaftarkan plugin yang digunakan dalam proyek
  plugins: [
    // Plugin untuk dukungan React (JSX, Fast Refresh, dll)
    react(),
    // Plugin untuk integrasi Tailwind CSS dengan Vite
    tailwindcss()
  ],
});
