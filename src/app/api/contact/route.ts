import { NextResponse } from "next/server";

/**
 * Aloqa formasi -> Telegram bot.
 * Maxfiy token va chat_id kod ichida EMAS — muhit o'zgaruvchilarida (env):
 *   TELEGRAM_BOT_TOKEN  — @BotFather bergan token
 *   TELEGRAM_CHAT_ID    — xabar boradigan chat (sizning Telegram ID'ingiz)
 */

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Noto'g'ri so'rov." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim().slice(0, 200);
  const contact = String(body.contact ?? "").trim().slice(0, 200);
  const budget = String(body.budget ?? "").trim().slice(0, 100);
  const message = String(body.message ?? "").trim().slice(0, 2000);
  const company = String(body.company ?? "").trim(); // honeypot (spam-tuzoq)

  // Bot forma to'ldirsa — jimgina "muvaffaqiyat" qaytaramiz, xabar yubormaymiz.
  if (company) return NextResponse.json({ ok: true });

  if (!name || !contact) {
    return NextResponse.json(
      { ok: false, error: "Ism va aloqa ma'lumoti majburiy." },
      { status: 400 },
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  // TELEGRAM_CHAT_ID — kerakli nom; TELEGRAM_BOT_ID — muqobil (agar shunday nomlangan bo'lsa)
  const chatId = process.env.TELEGRAM_CHAT_ID ?? process.env.TELEGRAM_BOT_ID;

  if (!token || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID sozlanmagan.");
    return NextResponse.json(
      { ok: false, error: "Server hali sozlanmagan. Iltimos, keyinroq urinib ko'ring." },
      { status: 503 },
    );
  }

  let text =
    "🆕 <b>Yangi so'rov</b>\n\n" +
    `👤 <b>Ism:</b> ${escapeHtml(name)}\n` +
    `📞 <b>Telefon:</b> ${escapeHtml(contact)}`;
  if (budget) text += `\n💰 <b>Byudjet:</b> ${escapeHtml(budget)}`;
  if (message) text += `\n\n📝 <b>Xabar:</b>\n${escapeHtml(message)}`;

  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      cache: "no-store",
    });

    if (!tg.ok) {
      const detail = await tg.text();
      console.error("Telegram API xatosi:", detail);
      return NextResponse.json(
        { ok: false, error: "Xabar yuborilmadi. Iltimos, qayta urinib ko'ring." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route xatosi:", err);
    return NextResponse.json(
      { ok: false, error: "Kutilmagan xatolik yuz berdi." },
      { status: 500 },
    );
  }
}
