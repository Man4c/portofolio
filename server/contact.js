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
        subject: `Pesan portofolio dari ${name}`,
        text: [
          "Pesan baru dari formulir portofolio Firman.dev",
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
