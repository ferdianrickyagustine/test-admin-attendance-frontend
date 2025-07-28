# Admin Attendance Frontend

Ini adalah frontend untuk sisi **admin** .

Aplikasi ini digunakan oleh admin untuk mengelola data kehadiran dan user karyawan, seperti melihat riwayat absensi, menambah/mengedit user, serta melihat detail user.

---

## Fitur Utama

| Endpoint / Halaman         | Method | Keterangan                        |
|---------------------------|--------|------------------------------------|
| `/login`                  | GET    | Halaman login admin                |
| `/`                       | GET    | Home admin, menu utama             |
| `/view-attendance`        | GET    | Lihat seluruh riwayat absensi      |
| `/manage-user`            | GET    | Lihat & kelola daftar user         |
| `/create-user`            | GET    | Form tambah user baru              |
| `/user/:id`               | GET    | Detail user                        |
| `/edit-user/:id`          | GET    | Edit data user                     |

> Semua fitur hanya bisa diakses setelah login sebagai admin.

---

## Cara Menjalankan

1. Pastikan backend sudah berjalan (user-service, auth-service, attendance-service).
2. Jalankan frontend admin:
    ```bash
    cd client
    npm install
    npm run dev
    ```
3. Buka browser ke `http://localhost:5173`.

---

## Catatan

- Hanya admin yang dapat mengakses dan mengelola data user serta absensi melalui aplikasi ini.
- Tidak ada fitur register di sisi admin, user admin diinput manual melalui backend.