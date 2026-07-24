import "server-only"

import { EmailChannel } from "./email"
import { WhatsAppChannel } from "./whatsapp"
import type { BookingNotification, NotificationChannel } from "./channel"

export type { BookingNotification } from "./channel"

/**
 * Single config flag decides the transport. Switching from email to WhatsApp
 * is a one-line change: set NOTIFY_CHANNEL=whatsapp in the environment.
 */
function resolveChannel(): NotificationChannel {
  const choice = (process.env.NOTIFY_CHANNEL || "email").toLowerCase()
  switch (choice) {
    case "whatsapp":
      return new WhatsAppChannel()
    case "email":
    default:
      return new EmailChannel()
  }
}

/**
 * Fire the booking notification. Never throws — a notification failure must not
 * fail the customer's payment confirmation. Errors are logged for follow-up.
 */
export async function sendBookingNotification(notification: BookingNotification): Promise<void> {
  const channel = resolveChannel()
  try {
    await channel.send(notification)
  } catch (err) {
    console.error(`[notifications] ${channel.name} send failed for ${notification.bookingId}:`, err)
  }
}
