import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Savri",
  description: "Privacy Policy for Savri — Private Chef booking platform",
}

const privacyHtml = `
<style>
  .privacy-root * { margin: 0; padding: 0; box-sizing: border-box; }
  .privacy-root {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    background: #F5F0E8;
    color: #1A1A1A;
    line-height: 1.8;
  }
  .privacy-root header {
    background: #1A1A1A;
    padding: 20px 40px;
  }
  .privacy-root .logo {
    font-size: 24px;
    color: #F5F0E8;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .privacy-root .hero {
    background: #1A1A1A;
    padding: 60px 40px 80px;
    text-align: center;
  }
  .privacy-root .hero h1 {
    font-size: 48px;
    color: #F5F0E8;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .privacy-root .hero p {
    color: rgba(245,240,232,0.6);
    font-size: 15px;
  }
  .privacy-root .meta {
    display: flex;
    gap: 24px;
    justify-content: center;
    padding: 24px 40px;
    background: white;
    border-bottom: 1px solid #E8E0D4;
    flex-wrap: wrap;
  }
  .privacy-root .meta-item { text-align: center; }
  .privacy-root .meta-label {
    font-size: 11px;
    color: #B5636A;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
  }
  .privacy-root .meta-value {
    font-size: 14px;
    color: #1A1A1A;
    font-weight: 500;
  }
  .privacy-root main {
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 24px 80px;
  }
  .privacy-root h2 {
    font-size: 22px;
    font-weight: 700;
    color: #1A1A1A;
    margin: 48px 0 16px;
    padding-bottom: 10px;
    border-bottom: 2px solid #B5636A;
  }
  .privacy-root h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 24px 0 8px;
  }
  .privacy-root p {
    margin-bottom: 14px;
    color: #3A3A3A;
    font-size: 15px;
  }
  .privacy-root ul, .privacy-root ol {
    padding-left: 24px;
    margin-bottom: 14px;
  }
  .privacy-root li {
    margin-bottom: 8px;
    color: #3A3A3A;
    font-size: 15px;
  }
  .privacy-root strong {
    font-weight: 600;
    color: #1A1A1A;
  }
  .privacy-root .highlight {
    background: white;
    border-left: 4px solid #B5636A;
    padding: 16px 20px;
    margin: 20px 0;
    border-radius: 0 8px 8px 0;
  }
  .privacy-root .contact-box {
    background: #1A1A1A;
    border-radius: 16px;
    padding: 32px;
    margin-top: 48px;
    text-align: center;
  }
  .privacy-root .contact-box h2 {
    color: #F5F0E8;
    border: none;
    margin-top: 0;
  }
  .privacy-root .contact-box p {
    color: rgba(245,240,232,0.6);
  }
  .privacy-root .contact-box a {
    display: inline-block;
    background: #B5636A;
    color: white;
    text-decoration: none;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 600;
    margin-top: 8px;
  }
  .privacy-root footer {
    background: #1A1A1A;
    padding: 20px 40px;
    text-align: center;
  }
  .privacy-root footer p {
    color: rgba(245,240,232,0.4);
    font-size: 13px;
    margin: 0;
  }
  @media (max-width: 600px) {
    .privacy-root .hero h1 { font-size: 32px; }
    .privacy-root header, .privacy-root .hero { padding: 20px; }
  }
</style>

<header>
  <div class="logo">Savri</div>
</header>

<div class="hero">
  <h1>Privacy Policy</h1>
  <p>How Savri collects, uses, and protects your information</p>
</div>

<div class="meta">
  <div class="meta-item">
    <div class="meta-label">Effective Date</div>
    <div class="meta-value">June 1, 2026</div>
  </div>
  <div class="meta-item">
    <div class="meta-label">Last Updated</div>
    <div class="meta-value">June 1, 2026</div>
  </div>
  <div class="meta-item">
    <div class="meta-label">Governing Law</div>
    <div class="meta-value">Republic of India</div>
  </div>
  <div class="meta-item">
    <div class="meta-label">Company</div>
    <div class="meta-value">Savri</div>
  </div>
</div>

<main>

<h2>1. About Savri and This Policy</h2>
<p>Savri ("we," "our," or "us") is a technology platform that connects users with trained private chefs for in-home cooking experiences in Delhi NCR, India. The Savri mobile application and website at savri.co.in are operated by Savri.</p>
<p>This Privacy Policy explains how we collect, use, store, disclose, and protect your personal information when you use our Platform. By using Savri, you agree to the terms of this Privacy Policy.</p>
<p>This policy complies with the <strong>Information Technology Act, 2000</strong>, the <strong>IT (Amendment) Act, 2008</strong>, and the <strong>IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>.</p>
<div class="highlight">
  <p>We do not sell your personal data. We do not use your data for advertising. We collect only what is necessary to provide our service.</p>
</div>

<h2>2. Information We Collect</h2>

<h3>2.1 Information You Provide</h3>
<ul>
  <li><strong>Phone Number</strong> — For account creation and OTP authentication.</li>
  <li><strong>Name</strong> — For booking identification and personalisation.</li>
  <li><strong>Email Address</strong> — Optional, for receipts and communication.</li>
  <li><strong>Service Address</strong> — Where you want chef services delivered.</li>
  <li><strong>Dish Selections</strong> — Food preferences for your booking.</li>
  <li><strong>Payment Information</strong> — Processed by Cashfree Payments. We do not store card numbers or UPI credentials.</li>
</ul>

<h3>2.2 Information Collected Automatically</h3>
<ul>
  <li><strong>Device Information</strong> — Device type, OS, unique identifiers.</li>
  <li><strong>Usage Data</strong> — How you interact with our app.</li>
  <li><strong>Location Data</strong> — Approximate location to confirm service availability. Not tracked continuously.</li>
  <li><strong>Push Notification Tokens</strong> — To send booking updates.</li>
  <li><strong>Log Data</strong> — App crashes and performance data for debugging.</li>
</ul>

<h3>2.3 Information from Third Parties</h3>
<ul>
  <li><strong>Firebase (Google)</strong> — Authentication and database.</li>
  <li><strong>Cashfree Payments</strong> — Payment processing.</li>
</ul>

<h2>3. How We Use Your Information</h2>
<ul>
  <li>To create and manage your account</li>
  <li>To process and fulfill chef booking requests</li>
  <li>To verify identity via OTP</li>
  <li>To process payments and issue receipts</li>
  <li>To send booking confirmations and updates</li>
  <li>To send push notifications about your bookings</li>
  <li>To improve our services</li>
  <li>To respond to support requests</li>
  <li>To detect and prevent fraud</li>
  <li>To comply with applicable laws</li>
</ul>
<div class="highlight">
  <p>We do not use your personal data for advertising or sell it to third parties.</p>
</div>

<h2>4. How We Share Your Information</h2>

<h3>4.1 With Chefs</h3>
<p>When you confirm a booking, your name, address, and dish selections are shared with the assigned chef. Chefs are bound by confidentiality obligations.</p>

<h3>4.2 With Service Providers</h3>
<ul>
  <li><strong>Google Firebase</strong> — Authentication, database, cloud functions</li>
  <li><strong>Cashfree Payments</strong> — Payment processing</li>
  <li><strong>Expo</strong> — App delivery and push notifications</li>
  <li><strong>Vercel</strong> — Website hosting</li>
</ul>

<h3>4.3 Legal Requirements</h3>
<p>We may disclose information if required by law, court order, or to protect the rights and safety of our users.</p>

<h2>5. Data Storage and Security</h2>
<p>Your data is stored on Google Firebase servers in the <strong>asia-south1 (Mumbai, India)</strong> region, ensuring data localisation within India.</p>
<p>Security measures include:</p>
<ul>
  <li>OTP-based authentication with no password storage</li>
  <li>Encrypted data transmission using HTTPS/TLS</li>
  <li>Firebase Security Rules</li>
  <li>Role-based access controls</li>
  <li>PCI-DSS compliant payment processing via Cashfree</li>
</ul>

<h2>6. Data Retention</h2>
<ul>
  <li><strong>Account data</strong> — While account is active, plus 3 years after deletion</li>
  <li><strong>Booking data</strong> — 5 years for legal and compliance purposes</li>
  <li><strong>Payment records</strong> — As required by financial regulations (minimum 8 years)</li>
  <li><strong>Push notification tokens</strong> — Deleted when account is deleted</li>
</ul>
<p>Request deletion by emailing <strong>privacy@savri.co.in</strong>. Requests are processed within 30 days.</p>

<h2>7. Your Rights</h2>
<ul>
  <li><strong>Right to Access</strong> — Request a copy of your personal data</li>
  <li><strong>Right to Correction</strong> — Request correction of inaccurate data</li>
  <li><strong>Right to Deletion</strong> — Request deletion of your data</li>
  <li><strong>Right to Withdraw Consent</strong> — Withdraw consent at any time</li>
  <li><strong>Right to Object</strong> — Object to processing for specific purposes</li>
  <li><strong>Right to Portability</strong> — Request data in machine-readable format</li>
</ul>

<h2>8. Children's Privacy</h2>
<p>Savri is intended for users <strong>18 years of age or older</strong>. We do not knowingly collect personal information from children under 18. If you believe we have inadvertently collected data from a minor, contact us at <strong>privacy@savri.co.in</strong>.</p>

<h2>9. Cookies and Tracking</h2>
<p>Our mobile app does not use cookies. Our website may use essential cookies for functionality only. We do not use advertising cookies or cross-site tracking.</p>

<h2>10. Third-Party Services</h2>
<ul>
  <li>Google Firebase — firebase.google.com/support/privacy</li>
  <li>Cashfree Payments — cashfree.com/privacy-policy</li>
  <li>Google Maps — policies.google.com/privacy</li>
</ul>

<h2>11. Changes to This Policy</h2>
<p>We may update this policy periodically. We will notify you of significant changes via the app or SMS. Continued use after changes constitutes acceptance.</p>

<h2>12. Grievance Officer</h2>
<p>In accordance with the <strong>Information Technology Act, 2000</strong> and <strong>IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong>:</p>
<ul>
  <li><strong>Name:</strong> Devasye Sachdeva</li>
  <li><strong>Designation:</strong> Founder and Grievance Officer</li>
  <li><strong>Email:</strong> privacy@savri.co.in</li>
  <li><strong>Response Time:</strong> Within 30 days</li>
</ul>

<h2>13. Contact Us</h2>
<ul>
  <li><strong>Email:</strong> privacy@savri.co.in</li>
  <li><strong>Website:</strong> savri.co.in</li>
  <li><strong>Address:</strong> Delhi NCR, India</li>
</ul>

<div class="contact-box">
  <h2>Questions about your data?</h2>
  <p>Our Grievance Officer responds within 48 hours.</p>
  <a href="mailto:privacy@savri.co.in">privacy@savri.co.in</a>
</div>

</main>

<footer>
  <p>© 2026 Savri. All rights reserved. Delhi NCR, India.</p>
</footer>
`

export default function PrivacyPage() {
  return (
    <div className="privacy-root" dangerouslySetInnerHTML={{ __html: privacyHtml }} />
  )
}
