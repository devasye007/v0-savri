import "server-only"

import { notificationLines, type BookingNotification, type NotificationChannel } from "./channel"

/**
 * WhatsApp notification channel — placeholder implementation.
 *
 * Drop-in for when Meta WhatsApp Cloud API Business verification is approved.
 * Fill in the Graph API call below and flip NOTIFY_CHANNEL=whatsapp (see
 * ./index.ts). No other code changes required.
 *
 * Planned env:
 *   WHATSAPP_PHONE_NUMBER_ID
 *   WHATSAPP_ACCESS_TOKEN
 *   WHATSAPP_TO           (founder's WhatsApp number, E.164)
 */
export class WhatsAppChannel implements NotificationChannel {
  readonly name = "whatsapp"

  async send(n: BookingNotification): Promise<void> {
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN
    const to = process.env.WHATSAPP_TO

    if (!phoneNumberId || !accessToken || !to) {
      throw new Error("WhatsApp channel not configured (WHATSAPP_PHONE_NUMBER_ID / WHATSAPP_ACCESS_TOKEN / WHATSAPP_TO).")
    }

    const body = notificationLines(n).join("\n")

    const res = await fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body },
      }),
    })

    if (!res.ok) {
      const detail = await res.text().catch(() => "")
      throw new Error(`WhatsApp send failed (${res.status}): ${detail}`)
    }
  }
}
