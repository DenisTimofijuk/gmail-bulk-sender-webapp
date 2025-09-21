# 📧 Free Bulk Email Sender Web App

This is a **Google Apps Script Web App** for sending personalized bulk emails directly from your Google account. It supports multiple languages (English & Lithuanian) and is designed for ease of use, privacy, and transparency.

## ✨ Features

- **Bulk Email Sending:** Send personalized emails to multiple recipients at once.
- **Random Subject Lines:** Enter several subject lines—each recipient gets a randomly chosen one.
- **HTML Email Templates:** Use HTML and placeholders like `[SENDER_NAME]` and `[RECIPIENT_EMAIL]` for dynamic content.
- **Quota Awareness:** See your daily Gmail/Workspace sending quota and progress.
- **Multi-language UI:** English and Lithuanian supported.
- **Progress Tracking:** Real-time progress bar and campaign summary sent to your inbox.

## 🚨 Limitations of Delivery Tracking

- **No Real Delivery/Bounce Tracking:**  
  The app cannot detect if an email address actually exists or if delivery failed (bounced).  
  Google Apps Script's `MailApp.sendEmail()` only checks if the email address is syntactically valid (e.g., contains `@`).  
  If you enter a fake but valid-looking address (like `notarealaddress@domain.com`), the app will report it as "sent" and "successful"—even if it never reaches a real inbox.
- **Bounces:**  
  If an email bounces, you may receive a bounce notification in your Gmail inbox, but this is not visible to the app or included in the campaign summary.
- **Syntax Validation Only:**  
  The app will only count as "failed" those addresses that are obviously malformed (e.g., missing `@` or domain).

## 🚀 How to Use

1. **Deploy as a Google Apps Script Web App** (see comments in `Code.js` for instructions).
2. **Open the web app URL** and fill in your name, email template, subject lines, and recipient emails.
3. **Send!** The app will handle sending, show progress, and email you a summary.

## 🛡️ Privacy & Security

- Emails are sent from **your own Google account**—no third-party servers.
- No data is stored or shared externally.

---

**Public domain. Use, modify, and share freely!**