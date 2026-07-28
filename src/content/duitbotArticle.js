export const duitbotArticle = {
  category: "Studi Kasus · Solo Project",
  title: "DuitBot: Mencatat Pengeluaran Secepat Mengirim Chat",
  excerpt:
    "Membawa pencatatan keuangan ke Telegram agar transaksi kecil tetap tercatat tanpa membuka aplikasi lain.",
  readTime: "11 menit baca",
  image: "/projects/duitbot.webp",
  projectName: "DuitBot",
  projectLink: "https://duitbot-web.onrender.com/",
  repositoryLink: "https://github.com/Man4c/duitbot-tracker",
  botLink: "https://t.me/duitbot_tracker_bot",
  intro:
    "Saya berulang kali mencoba mencatat pengeluaran, tetapi selalu berhenti dalam hitungan hari. Masalahnya bukan motivasi—proses mencatatnya terlalu merepotkan. DuitBot lahir dari satu pertanyaan sederhana: bagaimana jika mencatat pengeluaran semudah mengirim chat yang memang sudah kita lakukan setiap hari?",
  sections: [
    {
      title: "Bukan aplikasi baru, melainkan kebiasaan yang sudah ada",
      paragraphs: [
        "Aplikasi keuangan biasanya meminta pengguna membuka aplikasi, menunggu loading, mencari tombol tambah, mengisi nominal, memilih kategori, lalu menyimpan. Untuk kopi, parkir, atau jajan, langkah sebanyak itu terasa tidak sebanding. Transaksi kecil pun paling sering terlupakan, lalu di akhir bulan pengguna kembali bertanya: uang saya habis ke mana?",
        "Alih-alih membuat satu aplikasi lagi yang harus rutin dibuka, saya membawa pencatatan ke Telegram. Produk ini ditujukan untuk pengguna personal di Indonesia yang perlu mencatat cepat—di kasir, di parkiran, atau sambil berjalan—dengan Bahasa Indonesia, format Rupiah, dan perhitungan waktu WIB.",
      ],
      stats: [
        { value: "<15 dtk", label: "Mulai hingga tercatat" },
        { value: "24", label: "Kategori otomatis" },
        { value: "$0", label: "Biaya operasional" },
      ],
    },
    {
      title: "Dua kanal, satu tujuan",
      paragraphs: [
        "Saya membagi pengalaman berdasarkan pekerjaan yang paling cocok untuk setiap kanal. Telegram menjadi kanal input yang cepat, sedangkan dashboard web menjadi tempat untuk memahami pola pengeluaran secara lebih dalam.",
      ],
      bullets: [
        "Ketik “Makan siang 25rb” dan transaksi langsung dicatat.",
        "Kirim beberapa transaksi dalam satu pesan untuk diproses sebagai satu batch.",
        "Lihat grafik harian, distribusi kategori, riwayat, dan status budget melalui dashboard PWA.",
        "Masuk tanpa password menggunakan OTP yang dikirim langsung melalui Telegram.",
      ],
      note:
        "Alur tercepatnya: /start → “Makan siang 25rb” → bot membalas “Tercatat: Rp25.000, Makanan.”",
    },
    {
      title: "Dikerjakan dari produk hingga produksi",
      paragraphs: [
        "Sebagai solo full-stack developer, saya menangani desain produk dan UX, backend Laravel, dashboard Vue, database, integrasi Telegram, pengujian, serta deployment. Proyek ini sengaja saya perlakukan sebagai produk yang benar-benar beroperasi, bukan sekadar demo lokal.",
        "Pengerjaan dimulai dari service parsing dan integrasi Telegram karena di sanalah nilai utama produk berada. Setelah alur pencatatan stabil, saya membangun autentikasi OTP, dashboard, PWA, kemudian menutup proses dengan deployment dan pengujian end-to-end di produksi.",
      ],
      numbered: [
        "Tetapkan prinsip produk: Telegram untuk input, dashboard untuk analisis.",
        "Bangun fondasi parsing, kategori, dan integrasi webhook.",
        "Sederhanakan autentikasi menjadi satu jalur OTP Telegram.",
        "Bangun dashboard Vue, grafik, riwayat, dan budget.",
        "Tambahkan kemampuan PWA dan offline fallback.",
        "Deploy, daftarkan webhook, lalu verifikasi alur nyata dari awal hingga akhir.",
      ],
    },
    {
      title: "Memahami cara orang Indonesia menulis uang",
      paragraphs: [
        "Jantung DuitBot adalah ParsingService. Pengguna tidak dipaksa menghafal format tertentu; sistem menyesuaikan diri dengan cara orang menulis transaksi sehari-hari.",
        "Detail lokal menjadi penting. Titik dibaca sebagai pemisah ribuan, sedangkan koma, titik-koma, dan baris baru digunakan sebagai pemisah transaksi. Dengan aturan yang konsisten, “25.000” tidak keliru dibaca sebagai angka desimal.",
      ],
      bullets: [
        "25rb, 25k, 25.000, dan 25 ribu dipahami sebagai Rp25.000.",
        "“Kopi 20rb, parkir 5rb, bensin 50rb” dipecah menjadi tiga transaksi.",
        "Kategori dipilih otomatis dari 24 pilihan yang tersedia.",
        "Saat keyakinan klasifikasi rendah, bot meminta konfirmasi melalui tombol.",
      ],
    },
    {
      title: "Retry tidak boleh menggandakan transaksi",
      paragraphs: [
        "Jaringan tidak selalu sempurna. Telegram dapat mengirim ulang update yang sama dan sebuah job dapat dijalankan kembali. Tanpa perlindungan, satu pesan kopi berisiko berubah menjadi beberapa transaksi identik.",
        "Masalah ini lebih rumit karena satu update bisa menghasilkan banyak transaksi. Karena itu saya menerapkan idempotency pada dua lapisan:",
      ],
      numbered: [
        "telegram_update_id diberi unique index sehingga satu update hanya memiliki satu identitas pemrosesan.",
        "Saat batch diproses ulang, seluruh transaksi milik update tersebut dihapus dan dibuat kembali dalam satu transaksi database.",
      ],
      note:
        "Berapa kali pun proses di-retry, keadaan akhirnya tetap identik—tidak ada transaksi yang bertambah ganda.",
    },
    {
      title: "Arsitektur yang cukup sederhana untuk dirawat sendiri",
      paragraphs: [
        "DuitBot menggunakan monorepo Laravel dan Inertia: bot, autentikasi, logika bisnis, dan dashboard berjalan dari satu origin dan satu proses build. Saya memilih ini agar tidak menambah batas API dan kompleksitas deployment yang belum dibutuhkan.",
        "Controller dijaga tetap tipis. ParsingService, TelegramService, OtpService, BudgetService, dan SummaryService memisahkan aturan bisnis sehingga setiap bagian lebih mudah diuji dan dikembangkan.",
      ],
      bullets: [
        "Laravel 13 dan PHP 8.4 untuk domain, webhook, autentikasi, dan automation.",
        "Vue 3, TypeScript, Inertia, Tailwind CSS, dan Chart.js untuk dashboard.",
        "PostgreSQL di produksi; MySQL atau SQLite untuk kebutuhan pengembangan.",
        "Pest, PHPStan/Larastan, Pint, ESLint, Prettier, dan vue-tsc sebagai quality gates.",
      ],
    },
    {
      title: "Budget dan automation yang tidak berisik",
      paragraphs: [
        "BudgetService mengirim peringatan ketika pengeluaran kategori menyentuh 80% dan 100%. Agar pengguna tidak menerima pesan berulang, setiap kombinasi pengguna, kategori, periode, dan ambang hanya boleh memicu satu notifikasi.",
        "Ringkasan mingguan dikirim setiap Minggu pukul 20.00 WIB. Automation bekerja di belakang layar: informasi datang saat dibutuhkan tanpa menambah tugas baru bagi pengguna.",
      ],
      bullets: [
        "Uang disimpan sebagai integer Rupiah untuk menghindari error pembulatan.",
        "Waktu disimpan secara konsisten lalu dihitung dalam konteks WIB.",
        "Metrik processing_ms hanya menyimpan durasi proses, tidak pernah isi pesan pengguna.",
      ],
    },
    {
      title: "Menjalankan semuanya dengan biaya operasional $0",
      paragraphs: [
        "Blueprint awal memakai tiga service, tetapi pendekatan tersebut membutuhkan resource berbayar. Saya menyederhanakannya menjadi satu web service Docker di Render dengan PostgreSQL dan queue sinkron, tanpa mengubah aturan bisnis utama.",
        "Migrasi berjalan ketika container dimulai, sedangkan scheduler dipicu oleh endpoint aman melalui cron eksternal. Karena queue berjalan sinkron, webhook selalu membalas 200 dan proses dispatch dibungkus penanganan error agar kegagalan Telegram API tidak memicu retry-storm.",
      ],
      bullets: [
        "Satu web service Render free tier dengan Infrastructure as Code melalui render.yaml.",
        "QUEUE_CONNECTION=sync menghilangkan kebutuhan worker terpisah.",
        "cron-job.org memicu pekerjaan terjadwal tanpa scheduler berbayar.",
        "Idempotency menjaga data tetap aman ketika terjadi retry.",
      ],
    },
    {
      title: "Bug produksi yang tidak muncul di localhost",
      paragraphs: [
        "Setelah deployment pertama, server terlihat sehat tetapi aplikasi hanya menampilkan layar hitam. Penyebabnya adalah Mixed Content: aplikasi berada di balik proxy Render dan menghasilkan URL aset dengan skema yang keliru.",
        "APP_URL=https saja tidak menyelesaikannya karena skema URL ditentukan oleh request runtime. Saya memperbaikinya dengan mempercayai proxy dan memaksa skema HTTPS khusus lingkungan produksi.",
      ],
      code:
        "trustProxies(at: '*');\n\nif (app()->environment('production')) {\n    URL::forceScheme('https');\n}",
      note:
        "Pelajaran terpentingnya: konfigurasi lokal tidak cukup untuk menjelaskan perilaku runtime di balik reverse proxy.",
    },
    {
      title: "Dari chat menjadi sistem yang benar-benar berjalan",
      paragraphs: [
        "DuitBot kini berjalan end-to-end di produksi. Pengguna dapat memulai dari Telegram, mencatat transaksi, menerima OTP, lalu membuka dashboard untuk melihat riwayat dan kondisi budget.",
      ],
      bullets: [
        "Webhook aktif dan transaksi berhasil tercatat melalui bot.",
        "Login OTP Telegram telah diverifikasi di lingkungan produksi.",
        "Target respons bot di bawah dua detik dipantau melalui processing_ms.",
        "Seluruh quality gates—PHPStan, Pint, Pest, dan ESLint—berhasil dijalankan.",
      ],
      note:
        "Hasil paling penting bukan sekadar fitur yang selesai, tetapi alur yang dapat digunakan dari nol hingga transaksi tercatat dalam kurang dari 15 detik.",
    },
    {
      title: "Apa yang saya pelajari",
      paragraphs: [
        "Keandalan produk hidup pada detail yang jarang terlihat pengguna: idempotency, representasi uang, zona waktu, batas retry, dan isolasi data antar-pengguna.",
        "Saya juga belajar bahwa menyederhanakan adalah keputusan aktif. Menghapus Fortify dan passkey yang tidak dibutuhkan menghasilkan arsitektur yang lebih sehat daripada mempertahankannya untuk kemungkinan yang belum nyata. Automation yang baik terasa tenang—ia mengurangi friksi di depan pengguna sambil menyerap kompleksitas di belakang layar.",
      ],
    },
    {
      title: "Langkah berikutnya",
      bullets: [
        "Pencatatan pemasukan dan transaksi berulang seperti gaji, cicilan, dan langganan.",
        "Input transaksi untuk tanggal yang telah berlalu.",
        "Parsing berbasis AI/NLP untuk meningkatkan akurasi klasifikasi.",
        "Pengujian instalasi PWA pada perangkat Android dan iOS fisik.",
        "Rotasi secret dan eksplorasi database gratis permanen seperti Neon.",
      ],
    },
  ],
  stack: [
    "Laravel 13",
    "PHP 8.4",
    "Vue 3",
    "TypeScript",
    "Inertia.js",
    "PostgreSQL",
    "Telegram Bot API",
    "Chart.js",
    "Docker",
    "PWA",
  ],
};
