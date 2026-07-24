import "server-only"

import { applicationDefault, cert, getApp, getApps, initializeApp, type App } from "firebase-admin/app"
import { getFirestore, type Firestore } from "firebase-admin/firestore"

/**
 * Firebase Admin, initialised once per server runtime.
 *
 * The website has no Firebase client SDK and web buyers are anonymous — we
 * write bookings to the SAME `bookings` collection the mobile apps use, via a
 * service account, so the chef app picks them up automatically.
 *
 * Two ways to supply credentials:
 *   1. Explicit env (recommended on Vercel — NOT committed):
 *        FIREBASE_PROJECT_ID       e.g. savri-846b3
 *        FIREBASE_CLIENT_EMAIL     service-account email
 *        FIREBASE_PRIVATE_KEY      service-account private key (with \n escapes)
 *   2. A credentials file path (handy for local dev — no key pasting):
 *        GOOGLE_APPLICATION_CREDENTIALS=/abs/path/to/service-account.json
 */

let cachedDb: Firestore | null = null

function initAdmin(): App {
  if (getApps().length) return getApp()

  const projectId = process.env.FIREBASE_PROJECT_ID
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  // Vercel stores the key with literal "\n" — turn them back into newlines.
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")

  if (projectId && clientEmail && privateKey) {
    return initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) })
  }

  // Fall back to Application Default Credentials — resolves
  // GOOGLE_APPLICATION_CREDENTIALS (a service-account JSON path) or gcloud ADC.
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    return initializeApp({ credential: applicationDefault() })
  }

  throw new Error(
    "Firebase Admin is not configured. Set FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY, or point GOOGLE_APPLICATION_CREDENTIALS at a service-account JSON.",
  )
}

export function getDb(): Firestore {
  if (cachedDb) return cachedDb
  const app = initAdmin()
  cachedDb = getFirestore(app)
  return cachedDb
}
