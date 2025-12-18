# Portfolio - Ahmad Rafi Rusydi (ADR)

Ini adalah personal portfolio website yang dibangun menggunakan **React**, **Vite**, dan **Tailwind CSS**. Website ini dirancang untuk menampilkan profil profesional, pengalaman kerja, proyek-proyek unggulan, dan informasi kontak saya.

## � Teknologi Utama

-   **[React](https://react.dev/)**: Library JavaScript untuk membangun antarmuka pengguna.
-   **[Vite](https://vitejs.dev/)**: Build tool super cepat untuk frontend modern.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first untuk styling yang cepat dan custom.
-   **[EmailJS](https://www.emailjs.com/)**: Layanan untuk mengirim email langsung dari client-side (digunakan di form kontak).
-   **[Framer Motion](https://www.framer.com/motion/)**: Library animasi untuk React (digunakan untuk transisi dan efek visual).
-   **[Docker](https://www.docker.com/)**: Digunakan untuk containerization dan deployment yang mudah.

## � Struktur Proyek

```
src/
├── components/     # Komponen UI reusable (Button, Card, dll)
├── sections/       # Komponen bagian halaman (Hero, About, Projects, dll)
├── constants/      # Data statis (list proyek, pengalaman, sosial media)
├── assets/         # Gambar, ikon, dan aset statis lainnya
└── App.jsx         # Komponen root aplikasi
```

## �️ Cara Menjalankan (Development Locall)

Untuk menjalankan proyek ini di komputer lokal Anda untuk pengembangan:

1.  **Clone repository ini:**
    ```bash
    git clone https://github.com/adrapier03/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Jalankan development server:**
    ```bash
    npm run dev
    ```
    Buka browser di alamat yang muncul (biasanya `http://localhost:5173`).

## � Cara Menjalankan dengan Docker (Production)

Proyek ini sudah dilengkapi konfigurasi Docker untuk deployment production menggunakan Nginx.

### Menggunakan Docker Compose (Direkomendasikan)

1.  **Build dan jalankan container:**
    ```bash
    docker-compose up -d --build
    ```

2.  **Akses aplikasi:**
    Buka `http://localhost:8080` di browser Anda.

3.  **Menghentikan aplikasi:**
    ```bash
    docker-compose down
    ```

### Mengonfigurasi Port Deployment

Jika Anda ingin menjalankan aplikasi di port selain **8080**, cukup edit file `docker-compose.yml`:

```yaml
ports:
  - "PORT_YANG_ANDA_MAU:80"
```
Contoh: `"3000:80"` untuk menjalankannya di port 3000.

---


## 🙏 Credits

This project is based on the portfolio template by **[Ali Sanati](https://github.com/Ali-Sanati)**.
Original Repository: [Ali-Sanati/Portfolio](https://github.com/Ali-Sanati/Portfolio)

## 📝 Lisensi

[MIT](LICENSE)

