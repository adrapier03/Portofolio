/** @type {import('tailwindcss').Config} */
export default {
  // Menentukan file mana saja yang akan dipindai oleh Tailwind untuk mencari nama kelas (class names)
  // Tailwind akan menghapus style yang tidak digunakan (tree-shaking) berdasarkan file-file ini
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Bagian untuk kustomisasi desain sistem (warna, font, ukuran, dll)
  theme: {
    // Gunakan 'extend' untuk MENAMBAHKAN konfigurasi baru tanpa menimpa default Tailwind
    // Jika Anda menaruh konfigurasi di luar 'extend', itu akan MENIMPA default Tailwind
    extend: {},
  },

  // Tempat untuk mendaftarkan plugin Tailwind resmi atau pihak ketiga
  plugins: [],
};
