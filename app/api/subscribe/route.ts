import { NextResponse } from "next/server";

// Node runtime (not edge) so you can drop in a DB client or email SDK below.
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email = "";
  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim() : "";
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // ── Persist the subscriber here ──────────────────────────────────────────
  // This is where a real backend does its work. Examples:
  //   • await db.subscriber.create({ data: { email } })
  //   • await resend.emails.send({ to: email, ... })      (email provider)
  //   • await fetch("https://api.mailchimp.com/...", { ... })
  // Keep secrets in environment variables (see .env.example), never in code.
  console.log(`[subscribe] new signup: ${email}`);

  return NextResponse.json({
    ok: true,
    message: "You're on the list. Welcome to Epoch. 💌",
  });
}

export function GET() {
  return NextResponse.json({ ok: false, message: "Use POST to subscribe." }, { status: 405 });
}
