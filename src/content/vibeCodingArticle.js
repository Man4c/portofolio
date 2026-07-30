export const vibeCodingArticle = {
  category: "Catatan · Engineering Workflow",
  title: "Yang Harus Dilakukan Sebelum Memulai Vibe Coding",
  excerpt:
    "Menyiapkan masalah, scope, arsitektur, dan standar selesai agar AI mempercepat pekerjaan tanpa mengambil alih arah produk.",
  readTime: "8 menit baca",
  intro:
    "Vibe coding membuat jarak antara ide dan kode terasa sangat pendek. Namun, memulai terlalu cepat dari prompt sering menghasilkan aplikasi yang tampak selesai di permukaan, tetapi rapuh ketika kebutuhan berubah. Sebelum meminta AI menulis satu baris kode, kita perlu menentukan arah yang tidak boleh diputuskan oleh AI.",
  sections: [
    {
      title: "Jangan mulai dari prompt—mulai dari masalah",
      paragraphs: [
        "Prompt yang detail tidak akan menolong jika masalah yang hendak diselesaikan masih kabur. AI dapat menghasilkan banyak fitur dengan cepat, tetapi tidak mengetahui fitur mana yang benar-benar penting bagi pengguna.",
        "Tulis masalah dalam satu kalimat yang dapat dipahami tanpa menyebut framework atau teknologi. Jika kalimat itu masih berisi solusi, mundur satu langkah dan cari kebutuhan sebenarnya.",
      ],
      bullets: [
        "Siapa yang mengalami masalah ini?",
        "Dalam situasi apa masalah tersebut terjadi?",
        "Apa yang dilakukan pengguna saat ini untuk mengatasinya?",
        "Apa perubahan paling kecil yang sudah terasa berguna?",
      ],
      note:
        "Contoh yang lebih jelas: “Pemilik barbershop kesulitan mengatur antrean booking dari chat” lebih berguna daripada “Saya ingin membuat aplikasi booking dengan React.”",
    },
    {
      title: "Buat brief satu halaman",
      paragraphs: [
        "Brief menjaga konteks tetap konsisten ketika percakapan dengan AI semakin panjang. Dokumen ini tidak perlu formal; satu halaman yang tegas jauh lebih berguna daripada spesifikasi panjang yang tidak pernah dibaca kembali.",
      ],
      bullets: [
        "Tujuan produk dan pengguna utamanya.",
        "Satu alur utama yang wajib berhasil.",
        "Fitur yang masuk versi pertama.",
        "Hal yang sengaja tidak dikerjakan sekarang.",
        "Ukuran sederhana untuk menyatakan produk berhasil.",
      ],
      note:
        "Simpan brief di repository. Setiap kali AI mengusulkan fitur baru, bandingkan kembali dengan dokumen ini sebelum menerimanya.",
    },
    {
      title: "Kunci scope versi pertama",
      paragraphs: [
        "Kecepatan generasi kode membuat penambahan fitur terasa murah. Biaya sebenarnya baru muncul setelah fitur-fitur itu harus dihubungkan, diuji, diamankan, dan dirawat.",
        "Pisahkan kebutuhan menjadi tiga kelompok agar percakapan tidak melebar:",
      ],
      numbered: [
        "Must have — tanpa bagian ini, masalah utama belum terselesaikan.",
        "Should have — penting, tetapi produk tetap dapat digunakan tanpanya.",
        "Later — ide menarik yang disimpan setelah alur utama stabil.",
      ],
    },
    {
      title: "Pilih fondasi teknis sebelum implementasi",
      paragraphs: [
        "AI boleh membantu membandingkan pilihan, tetapi keputusan teknis perlu mengikuti kebutuhan proyek dan kemampuan orang yang akan merawatnya. Mengganti stack di tengah pengerjaan biasanya lebih mahal daripada meluangkan waktu untuk memilih di awal.",
      ],
      bullets: [
        "Runtime dan framework yang benar-benar dikuasai.",
        "Model penyimpanan data dan kebutuhan relasinya.",
        "Cara autentikasi dan batas akses pengguna.",
        "Target hosting, biaya, serta keterbatasan platform.",
        "Layanan eksternal yang dibutuhkan dan cara menyimpan secret.",
      ],
      note:
        "Pilih arsitektur paling sederhana yang masih memenuhi kebutuhan nyata. Jangan menambah service hanya karena AI mampu membuatnya.",
    },
    {
      title: "Rancang data dan kontrak terlebih dahulu",
      paragraphs: [
        "Antarmuka mudah diubah, tetapi model data yang salah cepat menyebar ke seluruh aplikasi. Sebelum membuat halaman, tentukan entitas utama, relasi, status, aturan validasi, dan siapa yang boleh mengubahnya.",
        "Untuk setiap endpoint atau aksi, tulis input, output sukses, kondisi gagal, serta efek sampingnya. Kontrak kecil ini membuat AI bekerja di dalam batas yang dapat diperiksa.",
      ],
      code:
        "Aksi: membuat booking\nInput: layanan, barber, tanggal, jam, pelanggan\nSukses: booking tersimpan dan slot terkunci\nGagal: slot penuh / data tidak valid\nAturan: satu slot tidak boleh dimiliki dua booking",
    },
    {
      title: "Siapkan guardrail repository",
      paragraphs: [
        "Vibe coding tetap membutuhkan disiplin engineering. Guardrail membuat kesalahan terlihat lebih cepat dan mencegah AI mengubah terlalu banyak bagian sekaligus.",
      ],
      bullets: [
        "Inisialisasi Git dan buat commit kecil sebelum perubahan besar.",
        "Sediakan .gitignore serta .env.example tanpa nilai rahasia.",
        "Aktifkan formatter, linter, type checker, dan test runner.",
        "Tentukan struktur folder dan aturan penamaan.",
        "Jangan pernah menempelkan API key atau credential ke prompt.",
      ],
    },
    {
      title: "Definisikan arti “selesai”",
      paragraphs: [
        "Kode yang dapat dijalankan belum tentu selesai. Tanpa definition of done, AI cenderung berhenti ketika happy path terlihat bekerja.",
      ],
      bullets: [
        "Alur utama berhasil dari awal hingga akhir.",
        "Loading, empty state, error, dan validasi telah ditangani.",
        "Tampilan nyaman digunakan pada mobile dan desktop.",
        "Navigasi keyboard dan reduced motion tetap berfungsi.",
        "Build, lint, type check, dan pengujian yang relevan lulus.",
        "Secret tidak masuk repository dan otorisasi diuji.",
      ],
    },
    {
      title: "Berikan konteks, lalu bekerja per checkpoint",
      paragraphs: [
        "Jangan meminta AI membangun seluruh aplikasi dalam satu prompt. Berikan brief, keputusan teknis, struktur data, dan definition of done; kemudian pecah pekerjaan menjadi checkpoint yang bisa diverifikasi.",
      ],
      numbered: [
        "Minta AI menjelaskan rencana dan file yang akan disentuh.",
        "Setujui satu bagian kecil, lalu implementasikan.",
        "Baca diff dan jalankan pemeriksaan sebelum lanjut.",
        "Commit ketika checkpoint sudah stabil.",
        "Perbarui brief jika keputusan produk benar-benar berubah.",
      ],
      note:
        "Kecepatan terbaik bukan menghasilkan kode paling banyak, melainkan memperpendek jarak antara perubahan, pemeriksaan, dan keputusan berikutnya.",
    },
    {
      title: "Checklist 15 menit sebelum mulai",
      numbered: [
        "Tulis masalah dan pengguna dalam satu kalimat.",
        "Pilih satu alur yang menjadi pusat versi pertama.",
        "Pisahkan must have dari ide yang bisa menunggu.",
        "Tetapkan stack, hosting, autentikasi, dan model data.",
        "Tuliskan kriteria selesai dan risiko utama.",
        "Siapkan Git, environment example, lint, dan test.",
        "Baru setelah itu susun prompt pertama.",
      ],
      note:
        "Vibe coding bekerja paling baik ketika manusia memegang arah, batas, dan standar kualitas—sementara AI membantu mempercepat eksplorasi serta implementasi.",
    },
  ],
  stack: [
    "Product Brief",
    "Scope",
    "Architecture",
    "Git",
    "Security",
    "Testing",
    "AI Workflow",
  ],
};
