import { NextRequest, NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;

  if (!apiKey || !senderEmail) {
    console.error("Missing BREVO_API_KEY or BREVO_SENDER_EMAIL env vars.");
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }

  const payload = {
    sender: {
      name: "Portfolio Contact Form",
      email: senderEmail
    },
    to: [
      {
        email: "juniord.dj88@gmail.com",
        name: "David Agbugba"
      }
    ],
    replyTo: {
      email,
      name
    },
    subject: `New message from ${name} via portfolio`,
    htmlContent: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">
          New Contact Form Submission
        </h2>
        <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; color: #888; width: 80px; font-size: 14px;">Name</td>
            <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888; font-size: 14px;">Email</td>
            <td style="padding: 8px 0; font-size: 14px;">
              <a href="mailto:${escapeHtml(email)}" style="color: #f59e0b;">${escapeHtml(email)}</a>
            </td>
          </tr>
        </table>
        <div style="margin-top: 24px; background: #f9f9f9; border-left: 4px solid #f59e0b; padding: 16px; border-radius: 4px;">
          <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #aaa;">
          Sent from your portfolio contact form — reply directly to respond to ${escapeHtml(name)}.
        </p>
      </div>
    `
  };

  const response = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Brevo API error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
