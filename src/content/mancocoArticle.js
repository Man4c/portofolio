export const mancocoArticle = {
  category: "Studi Kasus · Solo Project",
  title: "Mancoco: Membawa Produk Kampung ke Pembeli yang Jauh",
  excerpt:
    "Membangun etalase kepercayaan untuk minyak kelapa asli Mandar tanpa toko online dan tanpa kompleksitas yang belum dibutuhkan.",
  readTime: "8 menit baca",
  image: "/projects/mancoco.webp",
  projectName: "Mancoco",
  projectLink: "https://mancoco.man4c.workers.dev/",
  repositoryLink: "https://github.com/Man4c/mancoco",
  orderLink:
    "https://wa.me/6285696343551?text=Halo%20Mancoco%2C%20saya%20ingin%20bertanya%20tentang%20produk.%20%5Bvia%20web%5D",
  intro:
    "Mancoco berawal dari keluhan yang akrab bagi banyak perantau: minyak kelapa asli Mandar mudah ditemukan saat berada di kampung, tetapi sulit dicari ketika tidak sedang mudik. Saya membangun halaman ini agar produk pengrajin di Labuang, Majene, memiliki kehadiran online yang layak dipercaya dan dapat dipesan dari mana saja.",
  sections: [
    {
      title: "Akses dan kepercayaan adalah masalah utamanya",
      paragraphs: [
        "Mancoco adalah minyak kelapa tradisional non-RBD yang dibuat oleh pengrajin lokal. Produk seperti ini biasanya beredar dari mulut ke mulut dan hanya mudah ditemukan di sekitar tempat produksinya. Bagi perantau, pemasak rumahan, atau orang yang mencari oleh-oleh khas Majene, tidak ada kanal pemesanan yang jelas.",
        "Masalah berikutnya adalah keaslian. Banyak produk di pasaran sama-sama disebut minyak kelapa, padahal prosesnya berbeda. Halaman ini harus membantu calon pembeli memahami asal dan proses Mancoco tanpa bergantung pada klaim berlebihan.",
      ],
      stats: [
        { value: "1 file", label: "Halaman produksi" },
        { value: "0", label: "Dependensi eksternal" },
        { value: "WA", label: "Kanal pemesanan" },
      ],
    },
    {
      title: "Bukan toko online, melainkan etalase kepercayaan",
      paragraphs: [
        "Saya tidak mencoba mengubah cara bisnis kecil ini bekerja. Pemesanan tetap berlangsung melalui WhatsApp—kanal yang sudah dikenal oleh pembeli dan pengrajin. Tugas landing page adalah menjawab keraguan sebelum percakapan dimulai.",
        "Setiap tombol pesan membuka wa.me dengan teks yang sudah disiapkan dan penanda [via web]. Pengguna tidak perlu menyalin nama produk atau menyusun pesan dari awal, sementara penjual dapat mengenali sumber pesanan.",
      ],
      bullets: [
        "Katalog memperlihatkan beberapa varian produk secara jelas.",
        "Bagian proses menjelaskan cara tradisional pembuatan minyak.",
        "CTA WhatsApp membawa konteks produk langsung ke percakapan.",
        "Bagian “buat siapa” membantu pengunjung mengenali kebutuhannya.",
      ],
      note:
        "Landing page menyelesaikan pekerjaan menemukan dan meyakinkan; WhatsApp menyelesaikan percakapan dan pemesanan.",
    },
    {
      title: "Dikerjakan sendiri dari positioning hingga deployment",
      paragraphs: [
        "Sebagai solo developer, saya menangani riset positioning, copywriting, sistem visual, frontend, aksesibilitas, SEO teknis, dan deployment. Pengerjaan dimulai dengan menetapkan arah “akses + kepercayaan” serta aturan brand sebelum menulis satu pun section.",
      ],
      numbered: [
        "Tetapkan positioning dan batas komunikasi: produk dapur tradisional, bukan produk kesehatan.",
        "Kunci token warna, tipografi, radius, dan bayangan di awal.",
        "Bangun hero, proses, katalog, target pembeli, cara pesan, dan footer secara bertahap.",
        "Tambahkan animasi viewport, reduced motion, dan dukungan aksesibilitas.",
        "Lengkapi metadata, sitemap, robots.txt, dan data bisnis lokal.",
        "Deploy sebagai aset statis melalui Cloudflare Workers.",
      ],
    },
    {
      title: "Kesederhanaan sebagai keputusan arsitektur",
      paragraphs: [
        "Landing page ini tidak membutuhkan autentikasi, database, keranjang, atau checkout. Menambahkan framework dan backend hanya akan meningkatkan biaya perawatan tanpa memberi nilai yang sebanding.",
        "Karena itu seluruh halaman dibangun dengan HTML, CSS, dan JavaScript vanilla dalam satu file. Tidak ada dependency eksternal, build step, atau pipeline kompleks yang dapat gagal. Bahkan favicon dan ilustrasi produk dibuat sebagai SVG inline.",
      ],
      bullets: [
        "Memuat cepat karena tidak bergantung pada library eksternal.",
        "Mudah dipindahkan, diperiksa, dan dideploy.",
        "Tidak ada runtime frontend atau proses instalasi package.",
        "Struktur section tetap dipisahkan dengan ID dan komentar yang jelas.",
      ],
      note:
        "Pada proyek ini, satu file HTML bukan jalan pintas. Itu adalah arsitektur yang paling sesuai dengan skala dan kebutuhan produk.",
    },
    {
      title: "Identitas visual yang berakar pada Mandar",
      paragraphs: [
        "Palet mengambil inspirasi dari alam dan kerajinan Mandar: hijau kelapa sebagai identitas utama, krem yang hangat sebagai latar, serta ochre sebagai aksen yang mengingatkan pada tenun.",
        "Seluruh keputusan visual dipusatkan dalam CSS custom properties. Aturan ini menjaga halaman tetap konsisten dan membuat perubahan desain dapat dilakukan dari satu tempat.",
      ],
      code: `:root {
  --mancoco-green: #155b35;
  --coconut-cream: #f7f3e8;
  --woven-ochre: #e7b94f;
  --whatsapp: #25d366;
}`,
      bullets: [
        "Ochre digunakan sebagai aksen, bukan untuk teks panjang.",
        "Hijau WhatsApp hanya menandai tindakan yang benar-benar menuju WhatsApp.",
        "Motif geometris yang halus membawa nuansa tenun tanpa menjadi dekorasi berlebihan.",
        "Design token dipetakan ke tailwind.config.js untuk memudahkan migrasi jika kebutuhan bertumbuh.",
      ],
    },
    {
      title: "Meyakinkan tanpa menjanjikan khasiat",
      paragraphs: [
        "Tantangan copywriting terbesarnya adalah membangun kepercayaan tanpa membuat klaim kesehatan. Sejak awal saya menetapkan aturan keras: Mancoco diposisikan sebagai produk dapur dan bagian dari tradisi, bukan obat.",
        "Batas tersebut justru membuat komunikasi lebih kuat. Alih-alih menjanjikan manfaat yang tidak dapat dibuktikan, halaman memperlihatkan asal produk, cara pembuatannya, ukuran batch, dan jalur pemesanan yang jelas.",
      ],
      note:
        "Kepercayaan dibangun melalui hal yang dapat diperiksa—asal, proses, dan transparansi—bukan melalui klaim.",
    },
    {
      title: "Gerakan yang halus dan tetap menghormati pengguna",
      paragraphs: [
        "Elemen muncul secara bertahap ketika memasuki viewport menggunakan IntersectionObserver. Delay bertingkat memberi ritme pada halaman tanpa membuat interaksi terasa lambat.",
        "Animasi dinonaktifkan ketika pengguna memilih prefers-reduced-motion. Saya juga menambahkan skip-link, label ARIA, struktur heading yang runtut, serta title pada SVG yang membawa makna.",
      ],
      bullets: [
        "Reveal berjalan hanya saat elemen mulai terlihat.",
        "Reduced motion menghapus gerakan yang tidak diperlukan.",
        "Navigasi keyboard dapat langsung menuju konten utama.",
        "Ilustrasi SVG tetap tajam dan memiliki keterangan yang dapat dipahami.",
      ],
    },
    {
      title: "Ditemukan di Google adalah bagian dari fungsi produk",
      paragraphs: [
        "Jika tujuan Mancoco adalah menjangkau pembeli di luar kampung, kemampuan ditemukan bukan pekerjaan tambahan. Saya menyiapkan metadata Open Graph dan Twitter Card, sitemap, robots.txt, data LocalBusiness, serta kata kunci lokal seperti minyak kelapa Mandar dan oleh-oleh Majene.",
        "Saya sempat menggunakan schema Product, tetapi Search Console memberi peringatan karena halaman belum memiliki offers dan rating yang memadai. Schema tersebut saya hapus dan mempertahankan LocalBusiness yang datanya memang tersedia.",
      ],
      note:
        "Tidak menggunakan schema lebih baik daripada menggunakan schema yang tidak lengkap atau menyesatkan.",
    },
    {
      title: "Hasil yang kecil secara arsitektur, utuh sebagai produk",
      paragraphs: [
        "Mancoco kini tayang melalui Cloudflare Workers sebagai halaman mandiri sekitar 3.000 baris. Seluruh visual dan interaksi berjalan tanpa dependency eksternal, sementara pemesanan diarahkan langsung ke WhatsApp.",
      ],
      bullets: [
        "Landing page aktif dan dapat diakses dari luar Majene.",
        "Terindeks Google dengan informasi bisnis lokal.",
        "Ilustrasi, favicon, dan elemen visual tetap ringan melalui SVG inline.",
        "Sistem token telah disiapkan sebagai jembatan untuk pengembangan fase berikutnya.",
      ],
    },
    {
      title: "Apa yang saya pelajari",
      paragraphs: [
        "Proyek ini memperkuat prinsip bahwa kompleksitas solusi harus mengikuti kebutuhan nyata. Framework bukan ukuran kualitas; pilihan teknologi yang tepat adalah yang menyelesaikan pekerjaan dengan biaya dan beban perawatan paling masuk akal.",
        "Saya juga belajar bahwa batasan yang jelas mempercepat keputusan. Aturan warna, larangan klaim kesehatan, dan satu jalur pemesanan mengurangi pilihan yang tidak perlu dan membuat hasil akhir lebih konsisten.",
      ],
    },
    {
      title: "Langkah berikutnya",
      bullets: [
        "Mengganti nomor WhatsApp placeholder dan menyinkronkannya di seluruh tautan.",
        "Menambahkan foto produk serta proses pembuatan yang asli.",
        "Menghadirkan testimoni pembeli dan galeri proses.",
        "Mengukur Lighthouse, waktu muat, dan jumlah klik WhatsApp.",
        "Migrasi ke Next.js atau React dan Tailwind ketika kebutuhan konten atau transaksi benar-benar tumbuh.",
      ],
    },
  ],
  stack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "SVG",
    "WhatsApp",
    "LocalBusiness SEO",
    "Cloudflare Workers",
  ],
};
