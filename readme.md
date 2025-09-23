# 📧 Free Bulk Email Sender Web App

A **Google Apps Script Web App** for sending personalized bulk emails directly from your Google account. Supports English & Lithuanian. No third-party servers, no external storage—privacy-first.

---

## ✨ Features

- **Bulk Email Sending:** Personalized emails to multiple recipients.
- **Random Subject Lines:** Each recipient gets a randomly chosen subject.
- **HTML Email Templates:** Use HTML and placeholders like `[SENDER_NAME]` and `[RECIPIENT_EMAIL]`.
- **Quota Awareness:** See your daily Gmail/Workspace sending quota and progress.
- **Multi-language UI:** English and Lithuanian.
- **Progress Tracking:** Real-time progress bar and campaign summary sent to your inbox.

---

## 🚀 Getting Started

### 1. Clone or Download This Repository

```sh
git clone https://github.com/yourusername/bulk-email-sender-webapp.git
cd bulk-email-sender-webapp
```

### 2. Open [Google Apps Script](https://script.google.com/)

- Go to [script.google.com](https://script.google.com/).
- Click **New Project**.

### 3. Add Project Files

- Open `Code.gs` from this repo and paste its contents into the default `Code.gs` file in Apps Script.
- Click the "+" icon > **HTML** and name it `index`. Paste the contents of `index.html` from this repo.
- (Optional) Add or update the project description using content from `readme.md`.

### 4. Save All Files

- Click **File > Save all**.

---

## 🛠️ Development

- Edit `Code.gs` for backend logic (email sending, quota, etc).
- Edit `index.html` for frontend UI (form, language, progress bar).
- Use the built-in Apps Script editor for live testing.
- For local editing, copy/paste changes between your editor and Apps Script.

---

## 🚨 Limitations

- **No Real Delivery/Bounce Tracking:**  
  The app cannot detect if an email address actually exists or if delivery failed (bounced).  
  Google Apps Script's `MailApp.sendEmail()` only checks if the email address is syntactically valid (e.g., contains `@`).  
  If you enter a fake but valid-looking address, the app will report it as "sent"—even if it never reaches a real inbox.
- **Bounces:**  
  If an email bounces, you may receive a bounce notification in your Gmail inbox, but this is not visible to the app or included in the campaign summary.
- **Syntax Validation Only:**  
  The app will only count as "failed" those addresses that are obviously malformed.

---

## 🚢 Deploy as Web App

1. In Apps Script, click **Deploy > New deployment**.
2. Select **Web app**.
3. Set:
   - **Description:** (e.g., "Bulk Email Sender Web App")
   - **Execute as:** *User accessing the web app*
   - **Who has access:** *Anyone* or *Anyone with Google account*
4. Click **Deploy** and authorize permissions.
5. Copy the web app URL and share it!

---

## 🛡️ Privacy & Security

- Emails are sent from **your own Google account**—no third-party servers.
- No data is stored or shared externally.

---
[Demo (not yet verified by Google)](https://script.google.com/macros/s/AKfycbwD4Hqz0AAp5KuXelHXdVNHwyr6auKsqmtQNQK7lzEt/dev)
  
**Public domain. Use, modify, and share freely!**