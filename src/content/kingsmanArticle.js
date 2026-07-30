export const kingsmanArticle = {
  slug: "kingsman-sistem-booking-barbershop",
  category: "Studi Kasus · Solo Project",
  title: "KINGSMAN: Sistem Booking Barbershop Tanpa Framework",
  excerpt:
    "Membangun alur booking, perhitungan slot, distribusi barber, rating, dan admin panel sepenuhnya di browser.",
  readTime: "10 menit baca",
  publishedAt: "2026-07-27",
  updatedAt: "2026-07-30",
  image: "/projects/kingsman-barbershop.webp",
  shareImage: "/blog/kingsman-cover.png",
  coverAlt: "Tampilan sistem booking KINGSMAN Barbershop",
  projectName: "KINGSMAN",
  projectLink: "https://barbershop.man4c.workers.dev/",
  repositoryLink: "https://github.com/Man4c/barbershop",
  intro:
    "KINGSMAN berawal dari tantangan pribadi: apakah sistem booking yang realistis dapat dibangun tanpa framework dan tanpa backend? Saya tidak ingin berhenti pada landing page yang menarik. Produk ini harus bekerja dari saat pelanggan memilih layanan hingga admin mengelola jadwal, pendapatan, dan performa barber.",
  sections: [
    {
      title: "Booking lewat chat menyisakan terlalu banyak ketidakpastian",
      paragraphs: [
        "Pemesanan melalui WhatsApp atau datang langsung memang sederhana, tetapi sulit menjaga jadwal tetap konsisten. Dua pelanggan bisa meminta jam dan barber yang sama, pelanggan harus bertanya dahulu untuk mengetahui slot kosong, dan beban kerja cenderung menumpuk pada barber yang paling populer.",
        "Di sisi pemilik, informasi booking, pendapatan, dan performa barber tersebar dalam percakapan atau catatan terpisah. KINGSMAN menyatukan pengalaman pelanggan dan admin dalam satu Single Page Application statis.",
      ],
      stats: [
        { value: "77", label: "Skenario responsif" },
        { value: "0", label: "Failure & warning" },
        { value: "≥44px", label: "Touch target" },
      ],
    },
    {
      title: "Satu produk untuk dua jenis pengguna",
      paragraphs: [
        "Pelanggan membutuhkan proses yang cepat dan dapat dipahami tanpa bantuan staf. Pemilik membutuhkan kontrol atas data operasional. Karena itu saya merancang dua pengalaman yang menggunakan sumber data dan aturan bisnis yang sama.",
      ],
      bullets: [
        "Pelanggan memilih layanan, barber, tanggal, slot, lalu mengonfirmasi booking.",
        "Opsi “Siapa Saja” memilih barber secara otomatis dengan aturan yang adil.",
        "Pelanggan dapat memberi rating hanya setelah layanan selesai.",
        "Admin mengelola booking, barber, layanan, dan laporan pendapatan.",
      ],
    },
    {
      title: "Dikerjakan sendiri dari UX hingga validasi",
      paragraphs: [
        "Sebagai solo developer, saya menangani desain UI/UX, frontend, aturan bisnis sisi-klien, struktur data localStorage, QA otomatis, dokumentasi arsitektur, dan deployment. Fokus pengerjaan bergerak dari fondasi data menuju aturan booking, baru kemudian polish visual.",
      ],
      numbered: [
        "Tetapkan lingkup MVP serta aturan bisnis booking.",
        "Pisahkan struktur data, CSS, dan modul JavaScript berdasarkan tanggung jawab.",
        "Bangun router, fungsi render, booking flow, sistem slot, dan auto-assign.",
        "Tambahkan admin panel serta alur rating.",
        "Lakukan polish responsif dari viewport 320px hingga 1366px.",
        "Validasi dengan Playwright, node --check, dan dokumentasi knowledge graph.",
      ],
    },
    {
      title: "Mengapa JavaScript murni",
      paragraphs: [
        "Saya sengaja membangun KINGSMAN sebagai static SPA tanpa framework atau bundler. Tujuannya bukan menolak framework, tetapi memahami langsung cara routing, rendering, state, dan aturan bisnis saling terhubung.",
        "Pilihan ini menghasilkan aplikasi yang ringan dan mudah dideploy. Konsekuensinya, setiap abstraksi harus dirancang sendiri dan urutan pemuatan modul harus dijaga dengan disiplin.",
      ],
      bullets: [
        "Hash-based routing dibangun khusus untuk landing, booking, admin, dan review.",
        "Tidak ada runtime framework atau proses build yang diperlukan.",
        "Setiap baris logika berada dalam kendali penuh.",
        "Aplikasi dapat dihosting sebagai kumpulan aset statis.",
      ],
      note:
        "Tanpa framework bukan berarti tanpa arsitektur. Justru batas tersebut memaksa struktur dan tanggung jawab setiap modul dibuat lebih jelas.",
    },
    {
      title: "Memecah kode sebelum fitur menjadi sulit dirawat",
      paragraphs: [
        "Versi awal tumbuh dari satu file. Ketika booking, admin, rating, dan aturan responsif bertambah, saya memisahkan kode berdasarkan fungsi agar perubahan pada satu fitur tidak mengaburkan bagian lain.",
      ],
      code: `index.html
css/
  base.css
  navigation.css
  landing.css
  booking.css
  admin.css
  responsive.css
js/
  data.js
  helpers.js
  router.js
  landing.js
  booking.js
  admin.js`,
      note:
        "Karena tidak ada bundler, urutan load menjadi bagian dari kontrak arsitektur dan didokumentasikan secara eksplisit.",
    },
    {
      title: "Draft booking harus selalu valid",
      paragraphs: [
        "Alur booking terdiri dari layanan, barber, jadwal, dan konfirmasi. Setiap pilihan memengaruhi pilihan sesudahnya: durasi layanan mengubah slot, barber menentukan jam kerja, dan tanggal menentukan hari libur serta booking aktif.",
        "Bug yang paling mudah terjadi adalah slot lama tetap tersimpan ketika pengguna kembali lalu mengganti layanan atau barber. Saya menggunakan clearDraftFromStep() untuk menghapus seluruh state setelah langkah yang berubah.",
      ],
      numbered: [
        "Pengguna memilih layanan dan durasinya.",
        "Pengguna memilih barber tertentu atau opsi “Siapa Saja”.",
        "Sistem menghitung kembali slot berdasarkan seluruh konteks terbaru.",
        "Konfirmasi hanya dapat dilakukan ketika draft masih konsisten.",
      ],
      note:
        "State setelah titik perubahan selalu dibuang dan dihitung ulang. Tidak ada pilihan lama yang diam-diam terbawa ke booking baru.",
    },
    {
      title: "Slot kosong tidak cukup dihitung dari jam",
      paragraphs: [
        "barberDaySlots() menjadi salah satu fungsi paling terhubung karena harus memperhitungkan tanggal, jam kerja barber, hari libur, durasi layanan, dan seluruh booking aktif.",
        "Slot yang sudah terisi tetap ditampilkan sebagai taken, bukan disembunyikan. Pendekatan ini membuat pengguna memahami bahwa jam tersebut memang ada tetapi sudah penuh, alih-alih mengira sistem melewatkannya.",
      ],
      bullets: [
        "Jam kerja dapat berbeda untuk setiap barber.",
        "Hari libur menghapus ketersediaan pada tanggal terkait.",
        "Durasi layanan menentukan jarak antar-slot.",
        "Booking batal tidak lagi memblokir waktu yang tersedia.",
      ],
    },
    {
      title: "Auto-assign yang dapat dijelaskan",
      paragraphs: [
        "Opsi “Siapa Saja” tidak memilih barber secara acak. pickAutoAssignBarber() memakai urutan aturan yang deterministik agar hasilnya terasa adil bagi tim dan tetap mudah dijelaskan.",
      ],
      numbered: [
        "Pilih barber dengan beban booking aktif paling ringan pada tanggal tersebut.",
        "Jika bebannya sama, pilih barber dengan rating lebih tinggi.",
        "Jika masih sama, gunakan urutan alfabetis agar hasil selalu konsisten.",
      ],
      note:
        "Pelanggan mendapat pilihan otomatis tanpa menebak, sementara booking lebih tersebar dan hasil fungsi tetap dapat diuji.",
    },
    {
      title: "Rating berasal dari layanan yang benar-benar selesai",
      paragraphs: [
        "Rating bukan angka dekoratif yang ditulis langsung pada profil barber. Pelanggan mengakses route khusus #/review?code=... dan hanya booking berstatus selesai yang dapat dinilai.",
        "Nilai barber dihitung dari rata-rata ulasan nyata. Di admin panel, laporan pendapatan juga mengecualikan booking batal dan no-show agar angka yang tampil mengikuti keadaan operasional.",
      ],
      bullets: [
        "Kode booking menjadi penghubung menuju form ulasan.",
        "Booking yang belum selesai tidak dapat diberi rating.",
        "Pendapatan hanya menghitung layanan yang valid.",
        "Layanan yang masih direferensikan booking tidak dapat dihapus sembarangan.",
      ],
    },
    {
      title: "localStorage sebagai trade-off yang disengaja",
      paragraphs: [
        "Semua data demo disimpan pada key kingsman_mvp_v1 di localStorage. Pendekatan ini membuat booking dan admin panel dapat berfungsi penuh tanpa server serta cocok untuk mendemonstrasikan aturan produk.",
        "Batasannya jelas: data hanya tersedia pada browser dan perangkat yang sama, tidak memiliki autentikasi nyata, dan tidak aman untuk operasional bisnis. Saya mendokumentasikan batas ini daripada membuat demo terlihat seolah-olah siap menangani data produksi.",
      ],
      note:
        "Untuk versi operasional, localStorage harus diganti REST API, database, autentikasi, dan validasi sisi server.",
    },
    {
      title: "Responsif yang diuji, bukan hanya dilihat",
      paragraphs: [
        "Tampilan diperiksa dari lebar 320px hingga 1366px. Selain susunan grid, audit juga memeriksa horizontal overflow dan ukuran target sentuh agar halaman benar-benar dapat digunakan pada perangkat kecil.",
        "Saya membuat scripts/responsive-audit.cjs dengan Playwright untuk menjalankan landing page, booking, admin, dan review pada beberapa viewport secara berulang.",
      ],
      stats: [
        { value: "77", label: "Skenario diuji" },
        { value: "0", label: "Kegagalan" },
        { value: "0", label: "Peringatan" },
      ],
      bullets: [
        "Seluruh elemen interaktif memiliki touch target minimal 44px.",
        "Hero, form, rating picker, avatar, dan tabel admin diperiksa pada layar sempit.",
        "Perilaku hover disesuaikan untuk perangkat sentuh.",
        "Reduced motion dan safe area ikut dipertimbangkan.",
      ],
    },
    {
      title: "Memetakan struktur sebelum melanjutkan pengembangan",
      paragraphs: [
        "Saya menggunakan Graphify untuk melihat keterhubungan fungsi dan modul sebagai knowledge graph. Pemetaan ini membantu menemukan bagian dengan ketergantungan tinggi—termasuk barberDaySlots()—serta memberi dasar yang lebih jelas untuk refactor berikutnya.",
      ],
      stats: [
        { value: "106", label: "Node kode" },
        { value: "182", label: "Hubungan" },
        { value: "8", label: "Komunitas" },
      ],
    },
    {
      title: "Hasil dan pelajaran",
      paragraphs: [
        "KINGSMAN kini berjalan sebagai web app statis yang mencakup pengalaman pelanggan dan admin. Aplikasi telah dipublikasikan sebagai demo dan seluruh alur utamanya dapat dijalankan langsung di browser.",
        "Proyek ini mengajarkan saya untuk memilih trade-off secara sadar, membangun sendiri fondasi routing dan state, menerjemahkan aturan bisnis menjadi kode, serta membuktikan kualitas responsif melalui pengujian—bukan asumsi.",
      ],
    },
    {
      title: "Langkah berikutnya",
      bullets: [
        "Mengganti localStorage dengan REST API dan database.",
        "Menambahkan autentikasi serta pemisahan hak akses admin.",
        "Mengirim konfirmasi dan pengingat melalui email atau WhatsApp.",
        "Menambahkan pembayaran online dan analitik operasional.",
        "Mengembangkan kemampuan PWA untuk pengalaman yang lebih dekat dengan aplikasi.",
      ],
    },
  ],
  stack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Static SPA",
    "localStorage",
    "Playwright",
    "Graphify",
    "Cloudflare",
  ],
};
