export const BLOG_META = {
  "kingsman-sistem-booking-barbershop": {
    title: "KINGSMAN: Sistem Booking Barbershop Tanpa Framework",
    description:
      "Membangun alur booking, perhitungan slot, distribusi barber, rating, dan admin panel sepenuhnya di browser.",
    image: "/blog/kingsman-cover.png",
    imageAlt: "Tampilan sistem booking KINGSMAN Barbershop",
    publishedAt: "2026-07-27",
    updatedAt: "2026-07-30",
  },
  "mancoco-produk-kampung-ke-pembeli": {
    title: "Mancoco: Membawa Produk Kampung ke Pembeli yang Jauh",
    description:
      "Membangun etalase kepercayaan untuk minyak kelapa asli Mandar tanpa toko online dan tanpa kompleksitas yang belum dibutuhkan.",
    image: "/blog/mancoco-cover.png",
    imageAlt: "Landing page produk minyak kelapa Mancoco dari Majene",
    publishedAt: "2026-07-27",
    updatedAt: "2026-07-30",
  },
  "duitbot-mencatat-pengeluaran-via-chat": {
    title: "DuitBot: Mencatat Pengeluaran Secepat Mengirim Chat",
    description:
      "Membawa pencatatan keuangan ke Telegram agar transaksi kecil tetap tercatat tanpa membuka aplikasi lain.",
    image: "/blog/duitbot-cover.png",
    imageAlt: "Dashboard DuitBot untuk pencatatan pengeluaran melalui Telegram",
    publishedAt: "2026-07-28",
    updatedAt: "2026-07-30",
  },
  "sebelum-memulai-vibe-coding": {
    title: "Yang Harus Dilakukan Sebelum Memulai Vibe Coding",
    description:
      "Menyiapkan masalah, scope, arsitektur, dan standar selesai agar AI mempercepat pekerjaan tanpa mengambil alih arah produk.",
    image: "/blog/vibe-coding-cover.png",
    imageAlt:
      "Peta persiapan vibe coding dari masalah, scope, arsitektur, hingga implementasi",
    publishedAt: "2026-07-30",
    updatedAt: "2026-07-30",
  },
};

const SITE_URL = "https://portofolio.man4c.workers.dev";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const replaceMeta = (html, attribute, key, content) => {
  const pattern = new RegExp(
    `(<meta\\s+[^>]*${attribute}="${key}"[^>]*content=")[^"]*("[^>]*>)`,
    "i",
  );
  return html.replace(pattern, `$1${escapeHtml(content)}$2`);
};

export function renderArticleHtml(html, slug, article) {
  const url = `${SITE_URL}/blog/${slug}`;
  const image = `${SITE_URL}${article.image}`;
  const title = `${article.title} — Firman.dev`;

  let output = html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${escapeHtml(url)}" />`,
    );

  output = replaceMeta(output, "name", "description", article.description);
  output = replaceMeta(output, "property", "og:type", "article");
  output = replaceMeta(output, "property", "og:title", article.title);
  output = replaceMeta(output, "property", "og:description", article.description);
  output = replaceMeta(output, "property", "og:url", url);
  output = replaceMeta(output, "property", "og:image", image);
  output = replaceMeta(output, "property", "og:image:secure_url", image);
  output = replaceMeta(output, "property", "og:image:type", "image/png");
  output = replaceMeta(output, "property", "og:image:alt", article.imageAlt);
  output = replaceMeta(output, "name", "twitter:title", article.title);
  output = replaceMeta(output, "name", "twitter:description", article.description);
  output = replaceMeta(output, "name", "twitter:image", image);
  output = replaceMeta(output, "name", "twitter:image:alt", article.imageAlt);

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "id-ID",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Person",
      name: "Firman Pratama Putra",
      url: `${SITE_URL}/`,
    },
    publisher: {
      "@type": "Person",
      name: "Firman Pratama Putra",
    },
  }).replaceAll("<", "\\u003c");

  return output.replace(
    "</head>",
    `    <meta property="article:published_time" content="${article.publishedAt}" />\n` +
      `    <meta property="article:modified_time" content="${article.updatedAt}" />\n` +
      `    <meta property="article:author" content="Firman Pratama Putra" />\n` +
      `    <script id="article-jsonld" type="application/ld+json">${jsonLd}</script>\n` +
      "  </head>",
  );
}
