from pathlib import Path
import shutil

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
OUTPUT_PDF = OUTPUT_DIR / "firman-pratama-putra-cv.pdf"
PUBLIC_PDF = ROOT / "public" / "cv-firman-pratama-putra.pdf"
LOGO_PATH = ROOT / "public" / "brand" / "fpp-favicon.png"

INK = HexColor("#070B14")
NAVY = HexColor("#0B1421")
PANEL = HexColor("#F3F6F8")
TEXT = HexColor("#19212E")
MUTED = HexColor("#647084")
WHITE = HexColor("#F4F7FB")
TIDE = HexColor("#24B8AA")
TIDE_LIGHT = HexColor("#DDF7F3")
SUNSET = HexColor("#FF7F4F")
LINE = HexColor("#DCE3E8")


def wrap_text(text, font_name, font_size, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if stringWidth(candidate, font_name, font_size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(c, text, x, y, max_width, font_name="Helvetica", font_size=9, leading=13, color=TEXT):
    c.setFont(font_name, font_size)
    c.setFillColor(color)
    for line in wrap_text(text, font_name, font_size, max_width):
        c.drawString(x, y, line)
        y -= leading
    return y


def section_label(c, text, x, y, width):
    c.setFillColor(TIDE)
    c.roundRect(x, y - 3, 6, 6, 3, fill=1, stroke=0)
    c.setFillColor(TEXT)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(x + 13, y - 1, text.upper())
    c.setStrokeColor(LINE)
    c.setLineWidth(0.7)
    c.line(x, y - 11, x + width, y - 11)
    return y - 27


def draw_link(c, label, url, x, y, width, font_size=8.2):
    c.setFillColor(TEXT)
    c.setFont("Helvetica-Bold", font_size)
    c.drawString(x, y, label)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", font_size)
    display = url.replace("https://", "").rstrip("/")
    while stringWidth(display, "Helvetica", font_size) > width and len(display) > 6:
        display = display[:-1]
    if display != url.replace("https://", "").rstrip("/"):
        display = f"{display[:-3]}..."
    c.drawString(x, y - 12, display)
    c.linkURL(url, (x, y - 15, x + width, y + 5), relative=0)
    return y - 31


def create_cv():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_PDF.parent.mkdir(parents=True, exist_ok=True)

    c = canvas.Canvas(str(OUTPUT_PDF), pagesize=A4)
    width, height = A4
    c.setTitle("CV - Firman Pratama Putra")
    c.setAuthor("Firman Pratama Putra")
    c.setSubject("Full Stack Developer Portfolio CV")

    # Header
    header_h = 152
    c.setFillColor(NAVY)
    c.rect(0, height - header_h, width, header_h, fill=1, stroke=0)
    c.setFillColor(TIDE)
    c.rect(0, height - header_h, 8, header_h, fill=1, stroke=0)

    logo_size = 76
    logo_x = 42
    logo_y = height - 114
    if LOGO_PATH.exists():
        c.drawImage(
            ImageReader(str(LOGO_PATH)),
            logo_x,
            logo_y,
            logo_size,
            logo_size,
            preserveAspectRatio=True,
            mask="auto",
        )

    text_x = 138
    c.setFillColor(TIDE)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(text_x, height - 48, "CURRICULUM VITAE")
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 26)
    c.drawString(text_x, height - 79, "Firman Pratama Putra")
    c.setFillColor(TIDE)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(text_x, height - 101, "Full Stack Developer")
    c.setFillColor(HexColor("#AAB5C5"))
    c.setFont("Helvetica", 9.5)
    c.drawString(text_x, height - 122, "Majene, Sulawesi Barat - Indonesia")

    # Column geometry
    margin = 42
    gap = 24
    left_w = 158
    right_x = margin + left_w + gap
    right_w = width - margin - right_x
    body_top = height - header_h - 32

    # Sidebar panel
    c.setFillColor(PANEL)
    c.roundRect(margin - 12, 43, left_w + 24, body_top - 27, 14, fill=1, stroke=0)
    left_y = body_top - 4

    left_y = section_label(c, "Kontak & Profil", margin, left_y, left_w)
    left_y = draw_link(c, "GitHub", "https://github.com/Man4c", margin, left_y, left_w)
    left_y = draw_link(
        c,
        "LinkedIn",
        "https://www.linkedin.com/in/firman-pratama-putra-183726275",
        margin,
        left_y,
        left_w,
    )
    left_y = draw_link(
        c,
        "Instagram",
        "https://www.instagram.com/firmanpratamaptra_/",
        margin,
        left_y,
        left_w,
    )

    left_y -= 5
    left_y = section_label(c, "Fokus", margin, left_y, left_w)
    focus_items = [
        "Full Stack Development",
        "Laravel Development",
        "AI & Automation",
        "Responsive UI",
        "UI/UX Implementation",
    ]
    c.setFont("Helvetica", 8.6)
    for item in focus_items:
        c.setFillColor(TIDE)
        c.circle(margin + 3, left_y + 2, 2, fill=1, stroke=0)
        c.setFillColor(TEXT)
        c.drawString(margin + 12, left_y - 1, item)
        left_y -= 18

    left_y -= 3
    left_y = section_label(c, "Tools", margin, left_y, left_w)
    tools = [
        "Laravel, PHP, JavaScript",
        "React, Next.js, Vue.js",
        "Tailwind CSS, Framer Motion",
        "MySQL, PostgreSQL, Supabase",
        "Figma, Canva, Vite",
    ]
    for tool in tools:
        left_y = draw_wrapped(c, tool, margin, left_y, left_w, font_size=8.4, leading=12, color=TEXT)
        left_y -= 6

    # Main content
    right_y = body_top
    right_y = section_label(c, "Profil", right_x, right_y, right_w)
    profile = (
        "Full Stack Developer dari Majene yang memiliki ketertarikan besar pada "
        "pengembangan web dengan Laravel, teknologi AI, automation, dan AI agent. "
        "Saya menikmati proses memahami teknologi dari arsitektur hingga penerapannya "
        "untuk membangun aplikasi yang efisien, terstruktur, dan mudah dikembangkan."
    )
    right_y = draw_wrapped(c, profile, right_x, right_y, right_w, font_size=9.2, leading=14, color=TEXT)
    right_y -= 14

    right_y = section_label(c, "Pendekatan", right_x, right_y, right_w)
    approach = (
        "Menggabungkan engineering yang rapi dengan antarmuka bersih, modern, "
        "responsif, dan berorientasi pada pengalaman pengguna. Selalu belajar dan "
        "mengeksplorasi teknologi baru untuk menciptakan solusi digital yang bermanfaat."
    )
    right_y = draw_wrapped(c, approach, right_x, right_y, right_w, font_size=9.2, leading=14, color=TEXT)
    right_y -= 14

    right_y = section_label(c, "Proyek Pilihan", right_x, right_y, right_w)
    projects = [
        (
            "Kingsman Barbershop",
            "Booking Platform",
            "Website layanan barbershop dengan profil barber, informasi layanan, dan alur booking online.",
            "https://barbershop.man4c.workers.dev/",
        ),
        (
            "Mancoco",
            "Product Landing Page",
            "Landing page produk minyak kelapa asli Mandar dengan storytelling dan pemesanan melalui WhatsApp.",
            "https://mancoco.man4c.workers.dev/",
        ),
        (
            "DuitBot",
            "Finance Automation",
            "Pencatat keuangan berbasis Telegram yang mengubah percakapan menjadi catatan pengeluaran.",
            "https://duitbot-web.onrender.com/",
        ),
    ]

    for title, category, description, url in projects:
        c.setFillColor(TEXT)
        c.setFont("Helvetica-Bold", 10.5)
        c.drawString(right_x, right_y, title)
        category_w = stringWidth(category.upper(), "Helvetica-Bold", 7)
        c.setFillColor(TIDE_LIGHT)
        c.roundRect(right_x + right_w - category_w - 16, right_y - 4, category_w + 16, 16, 8, fill=1, stroke=0)
        c.setFillColor(TIDE)
        c.setFont("Helvetica-Bold", 7)
        c.drawString(right_x + right_w - category_w - 8, right_y + 1, category.upper())
        right_y -= 17
        right_y = draw_wrapped(c, description, right_x, right_y, right_w, font_size=8.6, leading=12, color=MUTED)
        c.setFillColor(TIDE)
        c.setFont("Helvetica", 7.7)
        display_url = url.replace("https://", "").rstrip("/")
        c.drawString(right_x, right_y - 1, display_url)
        c.linkURL(url, (right_x, right_y - 4, right_x + right_w, right_y + 9), relative=0)
        right_y -= 21
        c.setStrokeColor(LINE)
        c.line(right_x, right_y + 7, right_x + right_w, right_y + 7)
        right_y -= 5

    # Footer
    c.setStrokeColor(LINE)
    c.line(margin, 29, width - margin, 29)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7.5)
    c.drawString(margin, 17, "Firman Pratama Putra - Full Stack Developer")
    c.setFillColor(SUNSET)
    c.drawRightString(width - margin, 17, "Always Learning")

    c.showPage()
    c.save()
    shutil.copyfile(OUTPUT_PDF, PUBLIC_PDF)


if __name__ == "__main__":
    create_cv()
