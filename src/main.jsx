// Mengimpor StrictMode dari React untuk menampilkan peringatan pengembangan saat ada kesalahan umum
import { StrictMode } from 'react'
// Mengimpor fungsi createRoot untuk membuat root dari DOM tempat React merender komponen
import { createRoot } from 'react-dom/client'
// Mengimpor file CSS utama untuk styling
import './index.css'
// Mengimpor komponen utama App dari file App.jsx
import App from './App.jsx'

// Mengambil elemen DOM dengan id 'root' dan membuat root React di dalamnya
createRoot(document.getElementById('root')).render(
  // Menggunakan StrictMode untuk mode pengembangan yang lebih ketat
  <StrictMode>
    {/* Merender komponen utama App */}
    <App />
  </StrictMode>,
)
