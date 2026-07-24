import "server-only"

import nodemailer from "nodemailer"

import {
  formatINR,
  notificationLines,
  type BookingNotification,
  type NotificationChannel,
} from "./channel"

/**
 * Email notification channel (the default). Sends the full booking to the
 * founder inbox via SMTP (Nodemailer).
 *
 * Required env (Vercel):
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 *   NOTIFY_FROM_EMAIL   (defaults to the SMTP user)
 *   NOTIFY_TO_EMAIL     (defaults to founder@savri.co.in)
 */
export class EmailChannel implements NotificationChannel {
  readonly name = "email"

  async send(n: BookingNotification): Promise<void> {
    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS

    if (!host || !user || !pass) {
      throw new Error("Email channel not configured. Set SMTP_HOST / SMTP_USER / SMTP_PASS.")
    }

    const from = process.env.NOTIFY_FROM_EMAIL || user
    const to = process.env.NOTIFY_TO_EMAIL || "founder@savri.co.in"

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const text = notificationLines(n).join("\n")

    await transporter.sendMail({
      from,
      to,
      replyTo: n.customerEmail || undefined,
      subject: `New ${n.bookingTypeLabel} booking — ${n.customerName} (${formatINR(n.totalPaid)})`,
      text,
      html: renderHtml(n),
    })
  }
}

function renderHtml(n: BookingNotification): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#5A5A5A;white-space:nowrap">${label}</td><td style="padding:4px 0;color:#0A0A0A"><strong>${escapeHtml(
      value,
    )}</strong></td></tr>`

  return `
  <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;color:#0A0A0A">
    <h2 style="color:#B5636A;margin:0 0 4px">New ${escapeHtml(n.bookingTypeLabel)} booking</h2>
    <p style="color:#5A5A5A;margin:0 0 16px">Booking ${escapeHtml(n.bookingId)}</p>
    <table style="border-collapse:collapse;font-size:14px">
      ${row("Customer", n.customerName)}
      ${row("Phone", n.customerPhone)}
      ${row("Email", n.customerEmail)}
      ${row("Date", n.date)}
      ${row("Time", n.time)}
      ${row("Guests", String(n.guests))}
      ${row("City", n.city)}
      ${row("Address", n.address)}
      ${row("Staff", `${n.staff.waiters} waiter(s), ${n.staff.bartenders} bartender(s)`)}
      ${row("Total paid", formatINR(n.totalPaid))}
      ${row("Order", n.paymentOrderId)}
    </table>
    <h3 style="margin:20px 0 6px">Dishes (${n.dishes.length})</h3>
    <ul style="font-size:14px;padding-left:20px;margin:0">
      ${n.dishes.map((d) => `<li>${escapeHtml(d)}</li>`).join("")}
    </ul>
  </div>`
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
