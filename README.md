# UTS Hybrid Application Development (COMP6923051)

**Nama:** Risky Dzaki Purwanto  
**NIM:** 2802488916  
**Kelas:** LA95  
**Tema Aplikasi:** Health (SehatKu - Prototipe Layanan Konsultasi Dokter)  

---

## Deskripsi Aplikasi
**SehatKu** adalah aplikasi mobile berbasis React Native (Expo) yang dirancang untuk memudahkan pengguna menemukan informasi dokter spesialis, jadwal operasional medis, serta melakukan navigasi konsultasi secara praktis dan intuitif.

---

## Fitur Utama Aplikasi
1. **Autentikasi (AuthScreen):** Halaman masuk dan pendaftaran pengguna dengan antarmuka yang bersih.
2. **Beranda / Dashboard (HomeScreen):** Menampilkan banner utama, jam operasional medis, kontak darurat, serta daftar dokter spesialis dengan fitur pencarian real-time.
3. **Detail Dokter (DetailScreen):** Menampilkan profil lengkap dokter, spesialisasi, estimasi biaya, dan jadwal praktik.
4. **Profil Pengguna (ProfileScreen):** Memuat informasi profil akun pengguna dan riwayat layanan.

---

## Analisis Teknis & Pembahasan (LO1 & LO3)

### LO1: Fundamental React Native & Component Architecture
- **Functional Components & Reusability:** Aplikasi dibangun menggunakan komponen fungsional React Native. Komponen seperti `DoctorCard` dirancang modular agar dapat digunakan kembali (*reusable*) di berbagai bagian aplikasi.
- **Props Passing:** Data dokter (nama, spesialisasi, rumah sakit, gambar) ditransfer dari komponen induk (`HomeScreen`) ke komponen anak (`DoctorCard`) menggunakan mekanisme `props`.
- **State Management (Hooks):** Menggunakan React Hook `useState` untuk menangani state lokal seperti penginputan kata kunci pencarian dokter, form login/register, dan peralihan status antarmuka.

### LO3: Layout Design & Navigation
- **Styling & Flexbox:** Antarmuka dirancang menggunakan `StyleSheet.create` dengan prinsip Flexbox untuk menjaga kerapian tata letak (*responsive layout*), serta pembatasan *max-width container* agar aplikasi tetap presisi saat dijalankan di browser web.
- **Navigation Architecture:** Menggunakan `@react-navigation/native-stack` untuk mengelola perpindahan halaman (*screen navigation*) secara lancar dari Login (`AuthScreen`) -> Beranda (`HomeScreen`) -> Detail (`DetailScreen`) -> Profil (`ProfileScreen`).

---

## Cara Menjalankan Aplikasi
1. **Clone repositori ini:**
   ```bash
   git clone [https://github.com/RiskyDzaki/sehatku-app.git](https://github.com/RiskyDzaki/sehatku-app.git)
   cd sehatku-app