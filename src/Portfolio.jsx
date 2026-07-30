import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Clock3,
  Code2,
  Feather,
  Github,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Palette,
  PenTool,
  Quote,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import {
  SiCss,
  SiFigma,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiVite,
  SiVuedotjs,
} from "react-icons/si";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
import { duitbotArticle } from "./content/duitbotArticle";
import { kingsmanArticle } from "./content/kingsmanArticle";
import { mancocoArticle } from "./content/mancocoArticle";
import { vibeCodingArticle } from "./content/vibeCodingArticle";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Portofolio", href: "#karya" },
  { label: "Blog", href: "#blog" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

const projects = [
  {
    title: "Kingsman Barbershop",
    type: "Booking Platform",
    description:
      "Website barbershop dengan informasi layanan, profil barber, dan alur booking online yang praktis.",
    tags: ["Booking", "Responsive", "UI/UX"],
    image: "/projects/kingsman-barbershop.webp",
    link: "https://barbershop.man4c.workers.dev/",
    repository: "https://github.com/Man4c/barbershop",
    challenge:
      "Pengunjung perlu memahami layanan yang tersedia dan memesan jadwal tanpa melewati alur yang membingungkan.",
    solution:
      "Saya menyusun pengalaman yang berfokus pada informasi layanan, profil barber, dan CTA booking yang mudah ditemukan.",
    highlights: ["Alur booking yang ringkas", "Informasi layanan dan harga", "Tampilan responsif"],
  },
  {
    title: "Mancoco",
    type: "Product Landing Page",
    description:
      "Landing page minyak kelapa asli Mandar yang membawa cerita lokal ke pengalaman belanja digital.",
    tags: ["Product", "WhatsApp", "Responsive"],
    image: "/projects/mancoco.webp",
    link: "https://mancoco.man4c.workers.dev/",
    repository: "https://github.com/Man4c/mancoco",
    challenge:
      "Nilai dan cerita minyak kelapa asli Mandar perlu disampaikan dengan jelas sekaligus memudahkan calon pelanggan melakukan pemesanan.",
    solution:
      "Saya menggabungkan storytelling produk, katalog yang terarah, dan jalur pemesanan langsung melalui WhatsApp.",
    highlights: ["Storytelling produk lokal", "CTA WhatsApp", "Visual brand yang khas"],
  },
  {
    title: "DuitBot",
    type: "Finance Automation",
    description:
      "Pencatat keuangan berbasis Telegram yang mengubah percakapan sederhana menjadi catatan pengeluaran.",
    tags: ["Telegram Bot", "Automation", "Finance"],
    image: "/projects/duitbot.webp",
    link: "https://duitbot-web.onrender.com/",
    repository: "https://github.com/Man4c/duitbot-tracker",
    challenge:
      "Mencatat pengeluaran terasa merepotkan ketika pengguna harus berulang kali membuka formulir atau aplikasi khusus.",
    solution:
      "Saya merancang alur percakapan Telegram yang mengubah pesan singkat menjadi catatan pengeluaran yang terorganisir.",
    highlights: ["Pencatatan lewat chat", "Kategorisasi pengeluaran", "Alur onboarding Telegram"],
  },
];

const blogPosts = [
  {
    ...kingsmanArticle,
    article: kingsmanArticle,
  },
  {
    ...mancocoArticle,
    article: mancocoArticle,
  },
  {
    ...duitbotArticle,
    article: duitbotArticle,
  },
  {
    ...vibeCodingArticle,
    article: vibeCodingArticle,
  },
];

const capabilities = [
  {
    name: "Front-end Development",
    description: "Membangun antarmuka yang rapi, modular, dan siap dikembangkan.",
    icon: Layers3,
  },
  {
    name: "UI/UX Implementation",
    description: "Menerjemahkan desain menjadi interaksi yang jelas dan terasa natural.",
    icon: PenTool,
  },
  {
    name: "Responsive Interface",
    description: "Menjaga pengalaman tetap nyaman dari layar kecil hingga desktop.",
    icon: MonitorSmartphone,
  },
];

const tools = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#A78BFA" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
  { name: "Vite", icon: SiVite, color: "#A78BFA" },
  { name: "Lucide React", icon: Feather, color: "#F56565" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Canva", icon: Palette, color: "#00C4CC" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/firmanpratamaptra_/",
    icon: FaInstagram,
  },
  { name: "TikTok", href: "https://www.tiktok.com/@wafersaja1", icon: FaTiktok },
  {
    name: "WhatsApp",
    href:
      "https://wa.me/6285696343551?text=Halo%20Firman%2C%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi.",
    icon: FaWhatsapp,
  },
  { name: "GitHub", href: "https://github.com/Man4c", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/firman-pratama-putra-183726275",
    icon: FaLinkedinIn,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Setelah foto tersedia, taruh filenya di /public lalu ubah path ini.
const PROFILE_IMAGE = "/profile-firman.webp";
const PAGE_CONTAINER = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12";
const SECTION_SPACING = "py-20 lg:py-24";
const HERO_SPACING = "pb-20 pt-40 lg:pb-24 lg:pt-44";

function SectionLabel({ children }) {
  return (
    <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-tide">
      <span className="h-px w-8 bg-tide/70" />
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [formFeedback, setFormFeedback] = useState("");
  const [profileImage, setProfileImage] = useState(PROFILE_IMAGE);
  const [activeSection, setActiveSection] = useState("beranda");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const menuButtonRef = useRef(null);
  const firstMenuLinkRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = [
      { id: "beranda", navId: "beranda" },
      { id: "tentang", navId: "tentang" },
      { id: "skills", navId: "tentang" },
      { id: "karya", navId: "karya" },
      { id: "blog", navId: "blog" },
      { id: "testimoni", navId: "testimoni" },
      { id: "kontak", navId: "kontak" },
    ];
    let frameId;

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let currentSection = "beranda";

      sections.forEach(({ id, navId }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) {
          currentSection = navId;
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        currentSection = "kontak";
      }

      setActiveSection(currentSection);
      setShowBackToTop(window.scrollY > window.innerHeight * 0.65);
      frameId = undefined;
    };

    const handleScroll = () => {
      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (!selectedProject && !selectedArticle) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setSelectedArticle(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedArticle, selectedProject]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const focusFrame = window.requestAnimationFrame(() => {
      firstMenuLinkRef.current?.focus();
    });
    const handleMenuKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleMenuKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleMenuKeyDown);
    };
  }, [menuOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formStatus === "loading") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("loading");
    setFormFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        // Respons non-JSON tetap ditangani oleh pesan fallback di bawah.
      }

      if (!response.ok) {
        throw new Error(result.message || "Pesan belum dapat dikirim.");
      }

      form.reset();
      setFormStatus("success");
      setFormFeedback(result.message || "Pesan berhasil dikirim. Terima kasih!");

      window.setTimeout(() => {
        setFormStatus("idle");
        setFormFeedback("");
      }, 5000);
    } catch (error) {
      setFormStatus("error");
      setFormFeedback(
        error instanceof Error
          ? error.message
          : "Pesan belum dapat dikirim. Silakan coba kembali.",
      );
    }
  };

  const handleInvalid = (event) => {
    const field = event.target;

    if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) {
      return;
    }

    if (field.validity.valueMissing) {
      field.setCustomValidity(
        field.name === "name"
          ? "Nama wajib diisi."
          : field.name === "email"
            ? "Email wajib diisi."
            : "Ceritakan proyek yang ingin Anda diskusikan.",
      );
    } else if (field.validity.typeMismatch) {
      field.setCustomValidity("Masukkan alamat email yang valid.");
    } else if (field.validity.tooShort) {
      field.setCustomValidity(
        field.name === "name"
          ? "Nama minimal terdiri dari 2 karakter."
          : "Pesan minimal terdiri dari 10 karakter.",
      );
    }
  };

  const handleFieldInput = (event) => {
    event.target.setCustomValidity("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none">
        <div className="absolute left-[-12rem] top-[8rem] h-[28rem] w-[28rem] rounded-full bg-tide/[0.07] blur-[110px]" />
        <div className="absolute right-[-10rem] top-[35%] h-[25rem] w-[25rem] rounded-full bg-sunset/[0.06] blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(to bottom, black, transparent 72%)",
          }}
        />
      </div>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-[#07101b]/80 backdrop-blur-xl"
      >
        <nav
          aria-label="Navigasi utama"
          className={`${PAGE_CONTAINER} flex items-center justify-between py-5`}
        >
          <a
            href="#beranda"
            onClick={() => {
              setActiveSection("beranda");
              setMenuOpen(false);
            }}
            aria-label="Firman.dev — Beranda"
            className="group inline-flex items-center gap-3"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.045] shadow-[0_8px_24px_rgba(0,0,0,.2)] transition-colors group-hover:border-tide/35 group-hover:bg-tide/[0.07]">
              <img
                src="/brand/fpp-logo.webp"
                alt=""
                className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </span>
            <span className="font-display text-lg font-semibold tracking-[-0.04em] text-white">
              Firman<span className="text-tide">.dev</span>
            </span>
          </a>

          <div className="hidden items-center gap-4 md:flex xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                onClick={() => setActiveSection(item.href.slice(1))}
                className={`relative py-2 text-sm transition-colors hover:text-white ${activeSection === item.href.slice(1) ? "text-white" : "text-mist"
                  }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-tide shadow-[0_0_10px_rgba(102,228,213,.75)]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </a>
            ))}
          </div>

          <a
            href="#kontak"
            onClick={() => setActiveSection("kontak")}
            className={`hidden items-center gap-2 rounded-full border px-6 py-3 text-sm transition lg:flex ${activeSection === "kontak"
                ? "border-tide/45 bg-tide/[0.08] text-tide"
                : "border-white/15 text-white hover:border-tide/40 hover:text-tide"
              }`}
          >
            Kontak <ArrowUpRight size={14} />
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-lg text-mist md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-4 mb-4 flex flex-col rounded-2xl border border-white/10 bg-[#0b1220]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {navItems.map((item, index) => (
              <a
                ref={index === 0 ? firstMenuLinkRef : undefined}
                key={item.label}
                href={item.href}
                aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                onClick={() => {
                  setActiveSection(item.href.slice(1));
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${activeSection === item.href.slice(1)
                    ? "bg-tide/[0.08] text-white"
                    : "text-mist hover:bg-white/5 hover:text-white"
                  }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full transition ${activeSection === item.href.slice(1) ? "bg-tide" : "bg-white/15"
                    }`}
                />
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.header>

      <section id="beranda" className={`${PAGE_CONTAINER} ${HERO_SPACING} relative min-h-[100svh] border-y border-dashed border-tide/50`}>
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.28fr_0.72fr] lg:gap-16">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-tide/20 bg-tide/[0.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-tide"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tide opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-tide" />
              </span>
              Available for freelance
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.55 }}
              className="mb-3 font-display text-xl font-medium tracking-[-0.03em] text-white/70 sm:text-2xl"
            >
              Halo, saya
            </motion.p>

            <h1 className="max-w-none font-display text-[clamp(2.4rem,4.15vw,4rem)] font-semibold leading-[0.95] tracking-[-0.065em]">
              <motion.span
                className="block md:whitespace-nowrap"
                initial={{ opacity: 0, y: 36, rotateX: -45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: reduceMotion ? 0 : 0.65,
                  duration: reduceMotion ? 0 : 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="text-tide">Firman</span> Pratama Putra
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.02, duration: 0.55 }}
              className="mt-7 flex items-center gap-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-sunset">Fullstack Developer</span>
              <span className="h-px w-16 bg-gradient-to-r from-sunset/70 to-transparent" />
            </motion.div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: reduceMotion ? 0 : 1.1,
                duration: reduceMotion ? 0 : 0.62,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 max-w-2xl text-[18px] leading-8 text-mist"
            >
              <span className="font-medium text-white/90">
                “Mengeksplorasi teknologi, menciptakan solusi.”
              </span>{" "}
              — Menggabungkan kekuatan Laravel, AI, dan Automation untuk membangun
              aplikasi web yang efisien, terstruktur, dan berorientasi pada pengguna.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.16, duration: 0.6 }}
              className="mt-8"
            >
              <div className="flex w-full flex-col items-start gap-5">
                <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:flex-wrap sm:items-center">
                  <motion.a
                    href="#karya"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="group col-span-2 inline-flex h-14 w-full items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-white px-4 font-display text-sm font-semibold text-ink shadow-[0_14px_50px_rgba(255,255,255,.12)] sm:col-auto sm:h-auto sm:w-auto sm:px-6 sm:py-4"
                  >
                    <Layers3
                      size={18}
                      className="transition-transform group-hover:-rotate-6 group-hover:scale-110"
                    />
                    Jelajahi karya saya
                  </motion.a>

                  <motion.a
                    href="#kontak"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="group col-span-2 inline-flex h-14 w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-white/15 bg-white/[0.035] px-3 font-display text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-tide/40 hover:bg-tide/[0.08] sm:col-auto sm:h-auto sm:w-auto sm:gap-3 sm:px-6 sm:py-4"
                  >
                    <FaPaperPlane
                      size={17}
                      className="text-tide transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                    <span className="sm:hidden">Hubungi</span>
                    <span className="hidden sm:inline">Hubungi Saya</span>
                  </motion.a>

                </div>

                <div className="flex items-center gap-2.5" aria-label="Media sosial">
                  {socialLinks.map(({ name, href, icon: Icon }) => (
                    <motion.a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={name}
                      title={name}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.92 }}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.025] text-mist transition-colors hover:border-tide/40 hover:bg-tide/[0.08] hover:text-tide"
                    >
                      <Icon size={17} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 44, rotate: 1.5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.85, duration: reduceMotion ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[430px] lg:mx-0 lg:ml-auto"
          >
            <div aria-hidden="true" className="absolute -bottom-5 -right-4 h-[86%] w-[88%] rounded-[2.2rem] border border-sunset/25 bg-sunset/[0.06]" />
            <div aria-hidden="true" className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-tide/10 blur-[45px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-panel/75 p-3 shadow-[0_30px_90px_rgba(0,0,0,.35)] backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-[#0a1521]">
                <img
                  src={profileImage}
                  onError={() => setProfileImage("/profile-placeholder.svg")}
                  alt="Portrait Firman Pratama Putra"
                  className="h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-tide">Berbasis di</p>
                    <div className="mt-2 flex items-center gap-2">
                      <MapPin className="text-sunset" size={17} />
                      <p className="font-display text-base font-medium">Majene, Sulawesi Barat</p>
                    </div>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-ink/45 backdrop-blur">
                    <Code2 size={17} className="text-tide" />
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between px-2 pb-1 pt-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-mist">Always Learning</p>
                  <span className="font-mono text-[9px] tracking-[0.18em] text-white/60">FPP / 2026</span>
              </div>
            </div>

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
              transition={{ duration: 4.8, delay: 0.35, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-2 top-[38%] z-20 flex items-center gap-2 rounded-full border border-[#ff4b36]/25 bg-[#0a1320]/90 px-3.5 py-2.5 text-[11px] font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,.32)] backdrop-blur-xl sm:-left-8 lg:-left-14"
            >
              <SiLaravel aria-hidden="true" size={15} className="text-[#ff4b36]" />
              Laravel Expert
            </motion.div>

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
              transition={{ duration: 5.4, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-2 top-[51%] z-20 flex items-center gap-2 rounded-full border border-violet-400/25 bg-[#0a1320]/90 px-3.5 py-2.5 text-[11px] font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,.32)] backdrop-blur-xl sm:-right-6 lg:-right-9"
            >
              <Sparkles size={15} className="text-violet-300" />
              AI Enthusiast
            </motion.div>

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 4.4, delay: 1.1, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute right-2 top-[18%] z-20 flex items-center gap-2 rounded-full border border-tide/25 bg-[#0a1320]/90 px-3.5 py-2.5 text-[11px] font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,.32)] backdrop-blur-xl sm:-right-5 lg:-right-8"
            >
              <BriefcaseBusiness size={15} className="text-tide" />
              Open to Work
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="tentang" className={`${PAGE_CONTAINER} ${SECTION_SPACING} relative scroll-mt-20 border-y border-dashed border-tide/50`}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"
        >
          <div>
            <SectionLabel>Tentang saya</SectionLabel>
            <div className="relative aspect-[4/5] max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-panel/60 p-8 backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(102,228,213,.18),transparent_36%),radial-gradient(circle_at_75%_70%,rgba(255,138,91,.15),transparent_32%)]" />
              <img
                src={PROFILE_IMAGE}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
                alt="Firman Pratama Putra"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/15 to-ink/20" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <Code2 className="text-tide" size={34} strokeWidth={1.4} />
                <div>
                  <p className="font-display text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                    Full Stack Developer
                  </p>
                  <p className="mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-tide">
                    <span className="h-1.5 w-1.5 rounded-full bg-tide" />
                    Always Learning
                  </p>
                </div>
              </div>
              <svg aria-hidden="true" className="absolute -right-14 top-10 h-60 w-60 opacity-30" viewBox="0 0 240 240">
                {[32, 48, 64, 80, 96].map((r) => (
                  <circle key={r} cx="120" cy="120" r={r} fill="none" stroke="#66E4D5" strokeWidth=".8" />
                ))}
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Perkenalkan Saya,<br />
              <span className="text-sunset">Firman</span> Pratama Putra.
            </h2>
            <div className="mt-8 max-w-2xl space-y-4 text-base leading-8 text-mist md:text-lg">
              <p>
                Saya memiliki ketertarikan besar pada pengembangan web, terutama dengan Laravel,
                serta teknologi AI, automation, dan AI agent. Saya senang memahami teknologi dari
                arsitektur hingga penerapannya untuk membangun aplikasi yang efisien, terstruktur,
                dan mudah dikembangkan.
              </p>
              <p>
                Saya juga menyukai antarmuka yang bersih, modern, dan berorientasi pada pengguna.
                Bagi saya, belajar adalah proses berkelanjutan untuk mengeksplorasi teknologi baru
                dan menciptakan solusi digital yang bermanfaat.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="skills" className={`${PAGE_CONTAINER} ${SECTION_SPACING} relative scroll-mt-20 border-y border-dashed border-tide/50`}>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>Skills &amp; Tools</SectionLabel>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Skill yang saya asah.<br />
              <span className="text-tide">Tools yang saya pakai.</span>
            </h2>
            <p className="max-w-md text-sm leading-7 text-mist lg:justify-self-end">
              Saya senang mengubah ide menjadi antarmuka yang enak dilihat dan nyaman
              digunakan, lalu membangunnya dengan kode yang rapi dan mudah dikembangkan.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-sunset">Skills</span>
                <span className="h-px flex-1 bg-gradient-to-r from-sunset/25 to-transparent" />
              </div>
              <div className="marquee-viewport" aria-label="Daftar skills">
                <div className="marquee-track marquee-track-ltr">
                  {[0, 1].map((copy) => (
                    <div key={copy} className="marquee-set" aria-hidden={copy === 1 ? "true" : undefined}>
                      {capabilities.map(({ name, description, icon: Icon }) => (
                        <div
                          key={`${copy}-${name}`}
                          className="group flex w-[310px] shrink-0 gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 backdrop-blur transition hover:border-tide/25 hover:bg-tide/[0.04] sm:w-[350px]"
                        >
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-tide transition-transform group-hover:-translate-y-0.5">
                            <Icon size={19} aria-hidden="true" />
                          </span>
                          <div>
                            <h3 className="font-display text-sm font-semibold text-white">{name}</h3>
                            <p className="mt-1.5 text-xs leading-5 text-mist">{description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-tide">Tools</span>
                <span className="h-px flex-1 bg-gradient-to-r from-tide/25 to-transparent" />
              </div>
              <div className="marquee-viewport" aria-label="Daftar tools">
                <div className="marquee-track marquee-track-rtl">
                  {[0, 1].map((copy) => (
                    <div key={copy} className="marquee-set" aria-hidden={copy === 1 ? "true" : undefined}>
                      {tools.map(({ name, icon: Icon, color }) => (
                        <div
                          key={`${copy}-${name}`}
                          className="group flex w-[155px] shrink-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.1em] text-mist backdrop-blur transition hover:border-white/20 hover:text-white"
                        >
                          <span
                            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-mist transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-[var(--tool-color)]"
                            style={{ "--tool-color": color }}
                          >
                            <Icon size={18} aria-hidden="true" />
                          </span>
                          {name}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="karya" className={`${PAGE_CONTAINER} ${SECTION_SPACING} relative scroll-mt-20 border-y border-dashed border-tide/50`}>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <SectionLabel>Karya Saya</SectionLabel>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Proyek yang saya<br />bangun dengan niat.
            </h2>
            <p className="max-w-xs text-sm leading-7 text-mist">
              Kumpulan proyek yang terus bertumbuh, lahir dari rasa ingin tahu dan
              kebutuhan nyata.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={reveal}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/10 backdrop-blur"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-panel">
                <motion.div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.07]">
                  <img
                    src={project.image}
                    alt={`Tampilan proyek ${project.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </motion.div>
                <div className="absolute inset-0 hidden items-end bg-gradient-to-t from-ink via-ink/20 to-transparent p-5 opacity-0 transition-opacity duration-300 sm:flex sm:group-hover:opacity-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Lihat ${project.title}`}
                    className="ml-auto grid h-12 w-12 translate-y-3 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:translate-y-0"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
              <div className="px-3 pb-4 pt-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-tide">{project.type}</p>
                  <Sparkles size={15} className="text-white/25" />
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-mist">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="group/case inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-2.5 font-display text-xs font-semibold text-white transition hover:border-tide/40 hover:bg-tide/[0.08] hover:text-tide"
                  >
                    <BookOpen size={15} />
                    Studi kasus
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-1.5 px-2 py-2.5 font-display text-xs font-semibold text-mist transition hover:text-white"
                  >
                    Live site <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="blog" className={`${PAGE_CONTAINER} ${SECTION_SPACING} relative scroll-mt-20 border-y border-dashed border-tide/50`}>
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionLabel>Catatan &amp; Blog</SectionLabel>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Hal yang saya pelajari,<br />
              <span className="text-tide">saya tuliskan.</span>
            </h2>
            <p className="max-w-sm text-sm leading-7 text-mist">
              Ruang untuk mencatat proses, pemikiran, dan pelajaran yang saya temukan
              selama membangun produk digital.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.14 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 grid gap-5 md:grid-cols-2"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              variants={reveal}
              whileHover={reduceMotion ? undefined : { y: -7 }}
              className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur transition-colors hover:border-tide/25"
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-tide/[0.06] blur-[50px] transition-colors group-hover:bg-tide/[0.1]"
              />

              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-tide">
                  {post.category}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.035] text-mist transition-colors group-hover:border-tide/25 group-hover:text-tide">
                  <BookOpen size={17} />
                </span>
              </div>

              <div className="relative mt-10 flex flex-1 flex-col">
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.035em]">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-mist">{post.excerpt}</p>

                {post.article ? (
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(post.article)}
                    className="mt-auto flex min-h-11 w-full items-center gap-2 border-t border-white/10 pt-5 text-left font-mono text-[9px] uppercase tracking-[0.16em] text-mist transition-colors hover:text-tide"
                  >
                    <Clock3 size={14} className="text-sunset" />
                    {post.readTime}
                    <span className="ml-auto inline-flex items-center gap-1.5 font-display text-xs font-semibold normal-case tracking-normal text-white">
                      Baca artikel <ArrowUpRight size={14} />
                    </span>
                  </button>
                ) : (
                  <div className="mt-auto flex items-center gap-2 border-t border-white/10 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                    <Clock3 size={14} className="text-sunset" />
                    Segera hadir
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="testimoni" className={`${PAGE_CONTAINER} ${SECTION_SPACING} relative scroll-mt-20 border-y border-dashed border-tide/50`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16"
        >
          <div>
            <SectionLabel>Testimoni</SectionLabel>
            <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Cerita dari<br />
              <span className="text-tide">kolaborasi nyata.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-mist">
              Ruang untuk pengalaman dari klien dan rekan yang pernah membangun sesuatu
              bersama saya.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-tide/[0.08] blur-[75px]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 left-1/4 h-52 w-52 rounded-full bg-sunset/[0.06] blur-[70px]"
            />

            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-tide/20 bg-tide/[0.08] text-tide">
                <Quote size={25} />
              </span>

              <h3 className="mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-[-0.035em] sm:text-3xl">
                Testimoni dari klien dan rekan kolaborasi akan segera hadir di sini.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-mist">
                Setiap cerita akan ditampilkan apa adanya agar pengalaman bekerja bersama
                saya tetap terasa jujur dan bermakna.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {["Jujur", "Spesifik", "Pengalaman nyata"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-mist"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <motion.a
                href="#kontak"
                whileHover={{ x: 4 }}
                className="mt-9 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-tide"
              >
                Mulai kolaborasi
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="kontak" className={`${PAGE_CONTAINER} ${SECTION_SPACING} relative scroll-mt-20 border-y border-dashed border-tide/50`}>
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-tide/10 blur-[70px]" />
              <div className="relative">
                <SectionLabel>Mulai percakapan</SectionLabel>
                <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-5xl">
                  Punya ide?<br /><span className="text-tide">Mari kita wujudkan.</span>
                </h2>
                <p className="mt-6 max-w-sm text-sm leading-7 text-mist">
                  Ceritakan apa yang sedang Anda bangun. Saya senang berdiskusi tentang website,
                  produk digital, dan kolaborasi kreatif.
                </p>
                <a href="mailto:firmanpratama141003@gmail.com" className="mt-9 inline-flex min-h-11 items-center gap-3 text-sm text-white transition-colors hover:text-tide">
                  <Mail size={18} className="text-sunset" />
                  firmanpratama141003@gmail.com
                </a>
                <div className="mt-10 flex gap-3">
                  {[
                    { icon: Github, label: "GitHub", href: "https://github.com/Man4c" },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/firman-pratama-putra-183726275",
                    },
                    {
                      icon: Instagram,
                      label: "Instagram",
                      href: "https://www.instagram.com/firmanpratamaptra_/",
                    },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-mist transition hover:-translate-y-1 hover:border-tide/30 hover:text-tide"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              onInvalid={handleInvalid}
              onInput={handleFieldInput}
              className="relative p-7 sm:p-10 lg:p-14"
            >
              <label className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                Website
                <input name="website" type="text" tabIndex="-1" autoComplete="off" />
              </label>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-xs text-mist">
                  Nama
                  <input
                    name="name"
                    required
                    minLength={2}
                    maxLength={80}
                    autoComplete="name"
                    placeholder="Nama Anda"
                    className="mt-2 w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/25 focus:border-tide focus:outline-none"
                  />
                </label>
                <label className="block text-xs text-mist">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="email@anda.com"
                    className="mt-2 w-full border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/25 focus:border-tide focus:outline-none"
                  />
                </label>
              </div>
              <label className="mt-7 block text-xs text-mist">
                Ceritakan proyek Anda
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows="5"
                  placeholder="Saya ingin membuat..."
                  className="mt-2 w-full resize-none border-b border-white/15 bg-transparent px-0 py-3 text-sm leading-7 text-white placeholder:text-white/25 focus:border-tide focus:outline-none"
                />
              </label>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <motion.button
                  type="submit"
                  disabled={formStatus === "loading"}
                  aria-busy={formStatus === "loading"}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 rounded-xl bg-tide px-5 py-3.5 font-display text-sm font-semibold text-ink transition-opacity disabled:cursor-wait disabled:opacity-60"
                >
                  {formStatus === "loading" ? "Mengirim..." : "Kirim pesan"}
                  <Send size={16} className={formStatus === "loading" ? "animate-pulse" : ""} />
                </motion.button>
                <AnimatePresence mode="wait">
                  {formFeedback && (
                    <motion.p
                      key={formStatus}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      role="status"
                      aria-live="polite"
                      className={`text-sm ${formStatus === "error" ? "text-sunset" : "text-tide"}`}
                    >
                      {formFeedback}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </motion.div>

        <footer className="mt-8 flex flex-col gap-3 border-t border-white/10 py-8 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Firman Pratama Putra.</p>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em]">Dirancang & dibangun dari Majene</p>
        </footer>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#02060d]/85 p-4 backdrop-blur-md sm:p-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-case-study-title"
              initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b121d] shadow-[0_30px_100px_rgba(0,0,0,.65)]"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Tutup studi kasus"
                className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-ink/80 text-white backdrop-blur-md transition hover:border-tide/50 hover:text-tide sm:right-6 sm:top-6"
              >
                <X size={19} />
              </button>

              <div className="grid lg:grid-cols-[1.08fr_.92fr]">
                <div className="border-b border-white/10 p-3 lg:border-b-0 lg:border-r">
                  <div className="aspect-[2/1] overflow-hidden rounded-[1.4rem] bg-panel sm:aspect-auto sm:min-h-[390px]">
                    <img
                      src={selectedProject.image}
                      alt={`Tampilan lengkap proyek ${selectedProject.title}`}
                      className="h-full w-full object-contain object-top"
                    />
                  </div>
                </div>

                <div className="p-6 sm:p-9 lg:p-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-tide">
                    {selectedProject.type}
                  </p>
                  <h2
                    id="project-case-study-title"
                    className="mt-3 pr-12 font-display text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
                  >
                    {selectedProject.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-mist">
                    {selectedProject.description}
                  </p>

                  <div className="mt-8 space-y-7">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-sunset">
                        Tantangan
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/80">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-tide">
                        Solusi
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/80">
                        {selectedProject.solution}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist">
                        Yang dibangun
                      </p>
                      <ul className="mt-3 grid gap-2">
                        {selectedProject.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 py-3 text-sm text-white/80"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-tide" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-tide px-4 py-3 font-display text-sm font-semibold text-ink transition hover:bg-white"
                    >
                      Kunjungi live site <ArrowUpRight size={16} />
                    </a>
                    <a
                      href={selectedProject.repository}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 font-display text-sm font-semibold text-white transition hover:border-tide/50 hover:text-tide"
                    >
                      <Github size={16} />
                      Lihat repository
                    </a>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-wider text-mist"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 z-[85] flex items-center justify-center bg-[#02060d]/90 p-3 backdrop-blur-md sm:p-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-labelledby="article-title"
              initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-[1.75rem] border border-white/10 bg-[#0b121d] shadow-[0_30px_100px_rgba(0,0,0,.7)] sm:rounded-[2rem]"
            >
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Tutup artikel"
                className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-ink/85 text-white backdrop-blur-md transition hover:border-tide/50 hover:text-tide sm:right-6 sm:top-6"
              >
                <X size={19} />
              </button>

              {selectedArticle.image && (
                <div className="border-b border-white/10 p-3">
                  <div className="aspect-[2/1] overflow-hidden rounded-[1.35rem] bg-panel sm:rounded-[1.6rem]">
                    <img
                      src={selectedArticle.image}
                      alt={`Tampilan proyek untuk artikel ${selectedArticle.title}`}
                      className="h-full w-full object-contain object-top"
                    />
                  </div>
                </div>
              )}

              <div className="mx-auto max-w-3xl px-6 py-9 sm:px-10 sm:py-12 md:px-14">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em]">
                  <span className="text-tide">{selectedArticle.category}</span>
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                  <span className="inline-flex items-center gap-2 text-mist">
                    <Clock3 size={13} className="text-sunset" />
                    {selectedArticle.readTime}
                  </span>
                </div>

                <h2
                  id="article-title"
                  className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl md:text-5xl"
                >
                  {selectedArticle.title}
                </h2>
                <p className="mt-6 border-l-2 border-tide/50 pl-5 text-base leading-8 text-white/80 sm:text-lg">
                  {selectedArticle.intro}
                </p>

                <div className="mt-12 space-y-12">
                  {selectedArticle.sections.map((section) => (
                    <section key={section.title}>
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                        {section.title}
                      </h3>

                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="mt-4 text-[15px] leading-8 text-mist sm:text-base">
                          {paragraph}
                        </p>
                      ))}

                      {section.bullets && (
                        <ul className="mt-5 space-y-3">
                          {section.bullets.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white/80"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tide" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.numbered && (
                        <ol className="mt-5 space-y-3">
                          {section.numbered.map((item, index) => (
                            <li
                              key={item}
                              className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-sm leading-6 text-white/80"
                            >
                              <span className="font-mono text-[10px] text-sunset">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              {item}
                            </li>
                          ))}
                        </ol>
                      )}

                      {section.code && (
                        <pre className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-[#060b12] p-5 font-mono text-xs leading-6 text-tide/80">
                          <code>{section.code}</code>
                        </pre>
                      )}

                      {section.note && (
                        <p className="mt-5 rounded-2xl border border-sunset/20 bg-sunset/[0.06] px-5 py-4 text-sm leading-7 text-white/80">
                          {section.note}
                        </p>
                      )}

                      {section.stats && (
                        <div className="mt-6 grid grid-cols-3 gap-3">
                          {section.stats.map((stat) => (
                            <div
                              key={stat.label}
                              className="rounded-2xl border border-tide/15 bg-tide/[0.045] px-3 py-5 text-center"
                            >
                              <p className="font-display text-3xl font-semibold text-tide sm:text-4xl">
                                {stat.value}
                              </p>
                              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-mist">
                                {stat.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  ))}
                </div>

                <footer className="mt-14 border-t border-white/10 pt-7">
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-mist"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {selectedArticle.projectLink && (
                      <a
                        href={selectedArticle.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-tide px-5 py-3.5 font-display text-sm font-semibold text-ink transition hover:bg-white"
                      >
                        Lihat proyek {selectedArticle.projectName} <ArrowUpRight size={16} />
                      </a>
                    )}
                    {selectedArticle.botLink && (
                      <a
                        href={selectedArticle.botLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 font-display text-sm font-semibold text-white transition hover:border-tide/50 hover:text-tide"
                      >
                        Buka bot Telegram <Send size={16} />
                      </a>
                    )}
                    {selectedArticle.orderLink && (
                      <a
                        href={selectedArticle.orderLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-[#25D366]/35 px-5 py-3.5 font-display text-sm font-semibold text-white transition hover:border-[#25D366]/70 hover:text-[#25D366]"
                      >
                        <FaWhatsapp size={17} />
                        Pesan via WhatsApp
                      </a>
                    )}
                    {selectedArticle.repositoryLink && (
                      <a
                        href={selectedArticle.repositoryLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 font-display text-sm font-semibold text-white transition hover:border-tide/50 hover:text-tide"
                      >
                        <Github size={16} />
                        Lihat repository
                      </a>
                    )}
                  </div>
                </footer>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            aria-label="Kembali ke atas"
            title="Kembali ke atas"
            initial={{ opacity: 0, y: 14, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            whileHover={reduceMotion ? undefined : { y: -3 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
            className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-tide/30 bg-[#0b1421]/90 text-tide shadow-[0_14px_40px_rgba(0,0,0,.35)] backdrop-blur-xl transition-colors hover:border-tide/60 hover:bg-tide hover:text-ink md:bottom-8 md:right-8"
          >
            <ArrowUp size={19} strokeWidth={2.2} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
