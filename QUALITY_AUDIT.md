# Audit Kualitas Akhir — Firman.dev

Tanggal verifikasi: 28 Juli 2026  
Target: build produksi lokal (`vite build` + `vite preview`)  
Browser: Chromium melalui Playwright dan Lighthouse

## Status Akhir

Seluruh temuan yang dapat diselesaikan sebelum deployment telah diperbaiki. Build produksi berhasil, console browser bersih, gambar termuat dengan baik, dan tidak ditemukan horizontal overflow.

### Lighthouse Mobile

| Kategori | Sebelum | Sesudah |
|---|---:|---:|
| Performance | 69 | 94 |
| Accessibility | 96 | 100 |
| Best Practices | 100 | 100 |
| SEO | 92 | 100 |

Metrik akhir:

- First Contentful Paint: 2,1 detik
- Largest Contentful Paint: 2,7 detik
- Total Blocking Time: 50 ms
- Cumulative Layout Shift: 0
- Total payload: sekitar 284 KiB

Laporan lengkap: `output/lighthouse-mobile-final.json`.

## Mobile S, M, dan L

Lulus pada viewport:

- 320 × 800 px
- 375 × 812 px
- 425 × 900 px

Hasil:

- Tidak ada horizontal overflow.
- Tidak ada gambar atau aset yang gagal dimuat.
- Tombol dan link interaktif memiliki area sentuh minimum 44 px.
- Navbar, hero, kartu proyek, modal studi kasus, dan formulir tetap dapat digunakan.

Screenshot referensi: `output/playwright/mobile-final-375.png`.

## Keyboard Navigation

Lulus:

- Indikator fokus terlihat.
- Menu mobile memindahkan fokus ke link pertama saat dibuka.
- Tombol Escape menutup menu.
- Fokus dikembalikan ke tombol menu setelah menu ditutup.
- Urutan navigasi formulir tetap logis.

## Kontras Warna

Lulus Lighthouse Accessibility 100:

- Kontras teks kecil `FPP / 2026` telah dinaikkan.
- Nama aksesibel logo telah disesuaikan dengan teks `Firman.dev`.
- Ikon dekoratif tidak lagi diumumkan sebagai elemen tanpa nama.

## Performa dan Gambar

Gambar besar telah dikonversi ke WebP:

- KINGSMAN: sekitar 961 KB menjadi 37 KB.
- Mancoco: sekitar 1,95 MB menjadi 83 KB.
- DuitBot: sekitar 279 KB menjadi 35 KB.
- Foto profil: sekitar 1,60 MB menjadi 48 KB.
- Logo FPP: sekitar 232 KB menjadi 3 KB.

Font Google juga telah di-self-host agar halaman tidak bergantung pada request stylesheet eksternal.

## Broken Links

Lulus:

- Seluruh anchor internal memiliki section tujuan.
- Tiga live project, repository GitHub, Telegram, Instagram, TikTok, WhatsApp, dan GitHub dapat dijangkau.
- LinkedIn mengembalikan status 999 pada pemeriksaan otomatis karena proteksi anti-bot LinkedIn, bukan karena URL rusak.

## Reduced Motion

Lulus:

- Animasi Framer Motion mengikuti preferensi `prefers-reduced-motion`.
- Marquee berubah menjadi daftar statis.
- Smooth scrolling dinonaktifkan.
- Animasi status `ping` ikut berhenti.
- Tidak ditemukan animasi CSS aktif pada mode reduced motion.

## Form Validation

Lulus:

- Nama wajib diisi dan minimal 2 karakter.
- Email wajib diisi serta harus berformat valid.
- Pesan wajib diisi dan minimal 10 karakter.
- Pesan validasi ditampilkan dalam Bahasa Indonesia.
- Honeypot tidak masuk urutan keyboard.
- Status error endpoint diumumkan melalui live region.

Jalur pengiriman email asli tetap perlu diuji setelah deployment Cloudflare Pages dan pemasangan `RESEND_API_KEY`.

## SEO

Lulus Lighthouse SEO 100 pada build lokal:

- `robots.txt` telah tersedia.
- Metadata dasar sudah tersedia.

Canonical URL, Open Graph URL final, JSON-LD Person, dan sitemap dengan domain produksi perlu diselesaikan setelah URL Cloudflare Pages diketahui agar tidak memakai alamat sementara yang keliru.

## Kesimpulan

Proyek sudah siap untuk tahap deployment. Sisa pekerjaan bukan temuan kualitas pada UI, melainkan konfigurasi yang memang bergantung pada domain produksi dan secret layanan formulir.
