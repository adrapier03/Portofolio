# Panduan Deployment (Production)

Panduan ini ditujukan untuk melakukan deployment aplikasi Portfolio ke server (VPS/Cloud) menggunakan Docker.

## Persiapan Server

Pastikan server Anda sudah terinstal:
1.  **Git**: Untuk mengambil kode sumber.
    ```bash
    sudo apt update
    sudo apt install git
    ```
2.  **Docker** & **Docker Compose**:
    *   Ikuti panduan resmi instalasi Docker: [docs.docker.com/engine/install](https://docs.docker.com/engine/install/)

## Langkah-langkah Deployment

1.  **Clone Repository**
    Masuk ke server Anda dan clone repository ini dari GitHub.
    ```bash
    git clone https://github.com/adrapier03/Portfolio.git
    cd Portfolio
    ```

2.  **Jalankan Aplikasi**
    Karena kita sudah menyediakan `docker-compose.yml`, Anda cukup menjalankan satu perintah ini:
    ```bash
    docker-compose up -d --build
    ```
    *   `-d`: Detached mode (berjalan di background).
    *   `--build`: Memastikan image di-build ulang dari source code terbaru.

3.  **Selesai!**
    Aplikasi sekarang berjalan dan dapat diakses melalui IP server Anda di port `8080` (sesuai default `docker-compose.yml`).
    
    > **Akses Browser:** `http://IP-SERVER-ANDA:8080`

## Manajemen Aplikasi

*   **Cek Status Container:**
    ```bash
    docker-compose ps
    ```

*   **Melihat Logs (jika ada error):**
    ```bash
    docker-compose logs -f
    ```

*   **Menghentikan Aplikasi:**
    ```bash
    docker-compose down
    ```

## Update Aplikasi (Ketika ada perubahan kode)

Jika Anda melakukan push perubahan baru ke GitHub, lakukan langkah ini di server untuk mengupdate aplikasi:

1.  **Ambil kode terbaru:**
    ```bash
    git pull origin main
    ```

2.  **Build ulang dan restart container:**
    ```bash
    docker-compose up -d --build
    ```
    Docker akan otomatis mengganti container lama dengan yang baru tanpa downtime yang berarti.

## Catatan Penting: Port Conflict

Jika di server Anda port `8080` sudah terpakai oleh aplikasi lain, Anda bisa mengubah port aksesnya dengan mengedit `docker-compose.yml` sebelum menjalankan `docker-compose up`:

```yaml
ports:
  - "3000:80" # Contoh: Mengganti ke port 3000
```
Maka aksesnya menjadi `http://IP-SERVER-ANDA:3000`.
