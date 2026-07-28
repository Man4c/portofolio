# Mengaktifkan formulir kontak

Formulir dikirim ke Cloudflare Worker pada endpoint `/api/contact`, kemudian diteruskan ke email melalui Resend. Handler yang sama tetap tersedia sebagai Pages Function untuk kompatibilitas.

## 1. Buat akun Resend

Daftar menggunakan `firmanpratama141003@gmail.com`, lalu buat API key.

Untuk pengujian awal, pengirim bawaan berikut dapat digunakan:

```text
Firman.dev <onboarding@resend.dev>
```

Setelah memiliki domain sendiri, verifikasi domain tersebut di Resend dan ganti `CONTACT_FROM_EMAIL`, misalnya:

```text
Firman.dev <contact@firman.dev>
```

## 2. Atur Variables and Secrets di Cloudflare

Pada project Cloudflare Pages, buka:

```text
Settings → Variables and Secrets
```

Tambahkan:

| Nama | Tipe | Nilai |
| --- | --- | --- |
| `RESEND_API_KEY` | Secret/encrypted | API key dari Resend |
| `CONTACT_TO_EMAIL` | Variable | `firmanpratama141003@gmail.com` |
| `CONTACT_FROM_EMAIL` | Variable | `Firman.dev <onboarding@resend.dev>` |

Atur untuk environment Production dan Preview bila keduanya akan digunakan, kemudian lakukan deployment ulang.

## 3. Deploy sebagai Cloudflare Worker

Repository menggunakan `wrangler.jsonc` untuk menjalankan Worker dan menyajikan hasil build Vite sebagai static assets. Route `/api/*` selalu diproses oleh Worker sebelum fallback SPA.

Build command:

```text
npm run build
```

Deploy command:

```text
npm run deploy
```

Jika menggunakan Git integration pada Workers Builds, pastikan deploy command di Cloudflare adalah:

```text
npx wrangler deploy
```

Folder `functions/` dipertahankan untuk deployment Pages lama, tetapi deployment `workers.dev` menggunakan `worker/index.js`.

## 4. Pengembangan lokal opsional

Salin `.dev.vars.example` menjadi `.dev.vars`, isi API key yang asli, lalu jalankan:

```text
npm run cf:dev
```

Jangan commit `.dev.vars` karena berisi secret.
