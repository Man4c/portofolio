# Mengaktifkan formulir kontak

Formulir dikirim ke Cloudflare Pages Function pada endpoint `/api/contact`, kemudian diteruskan ke email melalui Resend.

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

## 3. Deploy dengan Git atau Wrangler

Folder `functions/` harus berada di root project, sejajar dengan `src/` dan `public/`. Pages Functions tidak ikut aktif bila hanya membuka hasil build secara lokal melalui `index.html`.

Build command:

```text
npm run build
```

Build output:

```text
dist
```

## 4. Pengembangan lokal opsional

Salin `.dev.vars.example` menjadi `.dev.vars`, isi API key yang asli, lalu jalankan:

```text
npx wrangler pages dev dist
```

Jangan commit `.dev.vars` karena berisi secret.
