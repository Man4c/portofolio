const CONTACT_EMAIL = "firmanpratama141003@gmail.com";

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character],
  );
}

function createEmailHtml({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");
  const replyUrl = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    `Re: Pesan portofolio dari ${name}`,
  )}`;

  return `<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Pesan baru dari ${safeName}</title>
  </head>
  <body style="margin:0;background:#eef2f5;color:#17202e;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      ${safeName} mengirim pesan baru melalui formulir Firman.dev.
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#eef2f5;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background:#ffffff;border:1px solid #dbe2e8;border-radius:20px;overflow:hidden;">
            <tr>
              <td style="background:#07101d;padding:30px 32px;border-bottom:4px solid #5ee4d7;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td>
                      <div style="font-size:24px;font-weight:700;letter-spacing:-0.5px;color:#f7fafc;">
                        Firman<span style="color:#5ee4d7;">.dev</span>
                      </div>
                    </td>
                    <td align="right">
                      <span style="display:inline-block;padding:8px 11px;border:1px solid #294356;border-radius:999px;color:#ff8657;font-family:Courier New,monospace;font-size:10px;font-weight:700;letter-spacing:1.5px;">
                        PORTFOLIO INQUIRY
                      </span>
                    </td>
                  </tr>
                </table>
                <p style="margin:30px 0 8px;color:#8fa5b7;font-size:13px;line-height:1.5;">
                  Pesan baru melalui formulir kontak
                </p>
                <h1 style="margin:0;color:#ffffff;font-size:28px;line-height:1.25;letter-spacing:-0.6px;">
                  Ada pesan dari ${safeName}
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:30px 32px 8px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="padding:0 0 20px;">
                      <p style="margin:0 0 7px;color:#718096;font-family:Courier New,monospace;font-size:10px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;">
                        Nama
                      </p>
                      <p style="margin:0;color:#17202e;font-size:16px;font-weight:700;line-height:1.5;">
                        ${safeName}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 24px;">
                      <p style="margin:0 0 7px;color:#718096;font-family:Courier New,monospace;font-size:10px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;">
                        Email
                      </p>
                      <a href="mailto:${encodeURIComponent(email)}" style="color:#087f78;font-size:16px;font-weight:700;text-decoration:none;">
                        ${safeEmail}
                      </a>
                    </td>
                  </tr>
                </table>
                <div style="background:#f7fafb;border-left:4px solid #5ee4d7;border-radius:0 14px 14px 0;padding:22px 22px 24px;">
                  <p style="margin:0 0 12px;color:#718096;font-family:Courier New,monospace;font-size:10px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;">
                    Pesan
                  </p>
                  <p style="margin:0;color:#263445;font-size:16px;line-height:1.75;">
                    ${safeMessage}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 32px;">
                <a href="${replyUrl}" style="display:inline-block;background:#07101d;border-radius:12px;color:#ffffff;font-size:14px;font-weight:700;padding:14px 20px;text-decoration:none;">
                  Balas ${safeName} &nbsp;↗
                </a>
                <p style="margin:24px 0 0;color:#8a98a8;font-size:12px;line-height:1.6;">
                  Tombol di atas akan membuka email dengan alamat pengirim sebagai tujuan balasan.
                </p>
              </td>
            </tr>
            <tr>
              <td style="background:#f7fafb;border-top:1px solid #e4e9ed;padding:18px 32px;">
                <p style="margin:0;color:#95a1ae;font-size:11px;line-height:1.6;">
                  Dikirim secara aman melalui formulir
                  <a href="https://portofolio.man4c.workers.dev/" style="color:#087f78;text-decoration:none;">Firman.dev</a>.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function methodNotAllowed() {
  return json({ ok: false, message: "Metode tidak diizinkan." }, 405);
}

export function apiNotFound() {
  return json({ ok: false, message: "Endpoint tidak ditemukan." }, 404);
}

export async function handleContactPost(request, env) {
  let payload;

  try {
    const contentType = request.headers.get("content-type") || "";
    payload = contentType.includes("application/json")
      ? await request.json()
      : Object.fromEntries(await request.formData());
  } catch {
    return json({ ok: false, message: "Data formulir tidak dapat dibaca." }, 400);
  }

  const name = clean(payload.name).replace(/[\r\n]+/g, " ");
  const email = clean(payload.email);
  const message = clean(payload.message);
  const website = clean(payload.website);

  // Honeypot: bot biasanya mengisi field tersembunyi ini.
  if (website) {
    return json({ ok: true, message: "Pesan berhasil dikirim." });
  }

  if (name.length < 2 || name.length > 80) {
    return json({ ok: false, message: "Nama harus terdiri dari 2–80 karakter." }, 422);
  }

  if (!isValidEmail(email) || email.length > 254) {
    return json({ ok: false, message: "Alamat email tidak valid." }, 422);
  }

  if (message.length < 10 || message.length > 3000) {
    return json({ ok: false, message: "Pesan harus terdiri dari 10–3000 karakter." }, 422);
  }

  if (!env.RESEND_API_KEY) {
    return json(
      { ok: false, message: "Layanan email belum dikonfigurasi." },
      503,
    );
  }

  const recipient = env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
  const sender = env.CONTACT_FROM_EMAIL || "Firman.dev <onboarding@resend.dev>";

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `Pesan baru dari ${name} — Firman.dev`,
        html: createEmailHtml({ name, email, message }),
        text: [
          "PESAN BARU — FIRMAN.DEV",
          "",
          `Nama: ${name}`,
          `Email: ${email}`,
          "",
          "Pesan:",
          message,
        ].join("\n"),
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error("Resend gagal:", resendResponse.status, errorBody);
      return json(
        { ok: false, message: "Pesan belum dapat dikirim. Silakan coba kembali." },
        502,
      );
    }

    return json({ ok: true, message: "Pesan berhasil dikirim." });
  } catch (error) {
    console.error("Pengiriman email gagal:", error);
    return json(
      { ok: false, message: "Terjadi gangguan koneksi. Silakan coba kembali." },
      502,
    );
  }
}
