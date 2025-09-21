/**
 * DEPLOYABLE EMAIL SENDER WEB APP - MULTI-LANGUAGE VERSION
 * 
 * TO DEPLOY:
 * 1. Paste this code in Google Apps Script
 * 2. Deploy as Web App
 * 3. Set permissions: "Execute as User accessing the web app"
 * 4. Set access: "Anyone" or "Anyone with Google account"
 * 5. Get the web app URL and share it!
 */

// ============== LANGUAGE TRANSLATIONS ==============

const TRANSLATIONS = {
  en: {
    // Page titles and headers
    pageTitle: "📧 Free Bulk Email Sender",
    headerTitle: "📧 Bulk Email Sender",
    headerSubtitle: "Send personalized emails to many recipients at once—directly from your Gmail account.",
    headerInstructions: `
      <div style="margin-bottom:1em;">
        <strong>What is this?</strong><br>
        This is a Google Apps Script web app that helps you send personalized emails to many people at once. It uses <b>your own Gmail account</b>—no third-party servers or external storage.
      </div>
      <div style="margin-bottom:1em;">
        <strong>How does it work?</strong><br>
        - All emails are sent from your Gmail account and appear in your Gmail "Sent" folder.<br>
        - You can use HTML and placeholders like <code>[SENDER_NAME]</code> and <code>[RECIPIENT_EMAIL]</code> in your email template.<br>
        - Enter several subject lines—each recipient gets a randomly chosen one.<br>
        - Your daily Gmail/Workspace sending quota applies. The app shows your quota and progress.
      </div>
      <div style="margin-bottom:1em;">
        <strong>What to expect?</strong><br>
        - This app automates the manual process of sending the same email to many recipients, making each message feel personal.<br>
        - <b>Delivery tracking is not possible:</b> The app only checks if an email address looks valid (contains <code>@</code>). If you enter a fake address, Gmail will try to send it, and you may get a bounce notification in your inbox.<br>
        - "Sending done for" means the email was sent from your account, but does <b>not</b> guarantee delivery.
      </div>
      <div>
        <strong>How to use:</strong><br>
        1. Fill in your name, email template, subject lines, and recipient emails.<br>
        2. Click "Send Bulk Emails".<br>
        3. The app will send emails, show progress, and email you a summary.
      </div>
    `,
    
    // Form labels and placeholders
    languageLabel: "Language / Kalba",
    senderNameLabel: "Your Name",
    senderNamePlaceholder: "This will appear as the sender name",
    emailTemplateLabel: "Email Template",
    emailTemplatePlaceholder: "Write your email content here. Use [SENDER_NAME] for your name and [RECIPIENT_EMAIL] for recipient's email. HTML is supported.",
    emailTemplateHelp: "You can use HTML for formatting. Placeholders: [SENDER_NAME], [RECIPIENT_EMAIL]",
    subjectsLabel: "Subject Lines",
    subjectsPlaceholder: "Enter multiple subject lines, one per line. One will be randomly selected for each email.",
    subjectsHelp: "Enter one subject per line. Each email will get a randomly selected subject.",
    recipientsLabel: "Recipients",
    recipientsPlaceholder: "Enter email addresses, one per line or separated by commas",
    recipientsHelp: "You can separate emails with commas, semicolons, or new lines",
    
    // Examples
    exampleEmailTemplate: "📝 Example Email Template:",
    exampleEmailContent: `Hello!

I hope this email finds you well.

This is a personalized message sent to [RECIPIENT_EMAIL] from [SENDER_NAME].

Best regards,
[SENDER_NAME]`,
    exampleSubjects: "📬 Example Subject Lines:",
    exampleSubjectsList: `Quick update for you
Hope you're doing well  
Following up on our conversation
Thought you might find this useful
Monthly check-in`,
    exampleRecipients: "📮 Example Recipients:",
    exampleRecipientsList: `john@example.com
jane@company.com, bob@test.com
alice@domain.org`,
    
    // Quota information
    quotaTitle: "📊 Your Email Quota Status",
    quotaAccount: "📧 Account:",
    quotaAvailable: "📬 Available today:",
    quotaAccountType: "📈 Account type:",
    quotaWorkspace: "Google Workspace (1,500/day)",
    quotaFree: "Free Gmail (100/day)",
    quotaReset: "Quota resets daily at midnight Pacific Time",
    quotaLoading: "Loading your email quota information...",
    quotaInfoNote: "All emails are sent from your Gmail account and appear in your Gmail 'Sent' folder. Your daily Gmail/Workspace quota applies.",
    quotaError: "❌ Could not load quota information:",
    
    // Buttons and actions
    submitButton: "🚀 Send Bulk Emails",
    loadingMessage: "Sending your emails... This may take a few minutes.",
    
    // Validation messages
    noRecipientsError: "Please enter at least one recipient email address.",
    noSubjectsError: "Please enter at least one subject line.",
    
    // Success/error messages
    campaignComplete: "🎉 Campaign completed! Check your Gmail for a detailed report.",
    errorPrefix: "❌ Error: ",
    
    // Email summary
    campaignSummaryTitle: "📊 Email Campaign Summary",
    campaignDetailsTitle: "Campaign Details",
    totalRecipients: "Total Recipients:",
    subjectVariations: "Subject Variations:",
    duration: "Duration:",
    seconds: "seconds",
    successful: "✅ Sending done for", // updated wording
    failed: "❌ Failed",
    quotaStatus: "📈 Quota Status",
    emailsSent: "Emails sent:",
    remainingQuota: "Remaining quota:",
    campaignCompleteSubject: "📊 Email Campaign Complete",
    quotaErrorMsg: "Not enough email quota! Need:",
    available: "Available:",
    deliveryNotice: "Note: 'Sending done for' means the email was sent from your account, but does not guarantee delivery. If an address is invalid, you may receive a bounce notification in your Gmail inbox."
  },
  
  lt: {
  // Page titles and headers
  pageTitle: "📧 Nemokamas masinių laiškų siuntėjas",
  headerTitle: "📧 Masinių laiškų siuntėjas",
  headerSubtitle: "Siųskite suasmenintus laiškus daugeliui gavėjų vienu metu – tiesiai iš savo Gmail paskyros.",
  headerInstructions: `
    <div style="margin-bottom:1em;">
      <strong>Kas tai?</strong><br>
      Tai „Google Apps Script“ internetinė programa, leidžianti paprastai ir greitai išsiųsti suasmenintus laiškus daugeliui adresatų. Ji naudoja <b>jūsų pačių Gmail paskyrą</b> – be tarpininkų ar išorinių serverių.
    </div>
    <div style="margin-bottom:1em;">
      <strong>Kaip tai veikia?</strong><br>
      - Visi laiškai siunčiami iš jūsų Gmail paskyros ir matomi aplanke „Išsiųsti“. <br>
      - Laiško šablone galima naudoti HTML bei žymes, pvz.: <code>[SENDER_NAME]</code>, <code>[RECIPIENT_EMAIL]</code>. <br>
      - Galite įrašyti kelias laiško temas – kiekvienam gavėjui bus parinkta atsitiktinė. <br>
      - Galioja jūsų kasdienė Gmail/Workspace siuntimo kvota. Programa rodo kvotos būseną ir progresą.
    </div>
    <div style="margin-bottom:1em;">
      <strong>Ko tikėtis?</strong><br>
      - Įrankis automatizuoja rankinį procesą – kiekvienas gavėjas gauna suasmenintą laišką. <br>
      - <b>Pristatymo stebėjimas nevykdomas:</b> programa tikrina tik ar adresas panašus į teisingą (turi <code>@</code>). Jei adresas neteisingas, Gmail vis tiek bandys siųsti, o jūs galite gauti pranešimą apie atšokimą („bounce“). <br>
      - „Siuntimas baigtas gavėjui“ reiškia, kad laiškas buvo išsiųstas, bet tai <b>nėra garantija</b>, kad jis pasiekė gavėją.
    </div>
    <div>
      <strong>Naudojimo žingsniai:</strong><br>
      1. Įrašykite savo vardą, laiško šabloną, temas ir gavėjų adresus. <br>
      2. Paspauskite „Siųsti masiškai“. <br>
      3. Programa išsiųs laiškus, rodys eigą ir atsiųs suvestinę el. paštu.
    </div>
  `,
  
  // Form labels and placeholders
  languageLabel: "Kalba",
  senderNameLabel: "Jūsų vardas",
  senderNamePlaceholder: "Bus rodomas kaip siuntėjo vardas",
  emailTemplateLabel: "Laiško šablonas",
  emailTemplatePlaceholder: "Čia rašykite laiško turinį. Naudokite [SENDER_NAME] – jūsų vardui, [RECIPIENT_EMAIL] – gavėjo adresui. Palaikomas HTML.",
  emailTemplateHelp: "Galite naudoti HTML formatavimui. Žymės: [SENDER_NAME], [RECIPIENT_EMAIL]",
  subjectsLabel: "Temos",
  subjectsPlaceholder: "Įveskite kelias laiško temas, po vieną eilutėje. Kiekvienam gavėjui bus parinkta atsitiktinė tema.",
  subjectsHelp: "Įrašykite po vieną temą eilutėje. Kiekvienas laiškas gaus atsitiktinai parinktą temą.",
  recipientsLabel: "Gavėjai",
  recipientsPlaceholder: "Įveskite el. pašto adresus – po vieną eilutėje arba atskirkite kableliais",
  recipientsHelp: "Adresus galite atskirti kableliais, kabliataškiais arba naujomis eilutėmis",
  
  // Examples
  exampleEmailTemplate: "📝 Laiško šablono pavyzdys:",
  exampleEmailContent: `Sveiki,

Tikiuosi, šis laiškas jus pasiekė tinkamu metu.

Tai suasmenintas pranešimas, išsiųstas adresu [RECIPIENT_EMAIL] nuo [SENDER_NAME].

Pagarbiai,  
[SENDER_NAME]`,
  exampleSubjects: "📬 Laiškų temų pavyzdžiai:",
  exampleSubjectsList: `Trumpas atnaujinimas
Tikiuosi, jums sekasi gerai
Tęsiame mūsų pokalbį
Pagalvojau, kad tai gali būti naudinga
Mėnesinė apžvalga`,
  exampleRecipients: "📮 Gavėjų pavyzdžiai:",
  exampleRecipientsList: `jonas@pavyzdys.lt
jana@imone.lt, petras@testas.lt
alisa@sritis.lt`,
  
  // Quota information
  quotaTitle: "📊 Jūsų laiškų kvotos būsena",
  quotaAccount: "📧 Paskyra:",
  quotaAvailable: "📬 Galima išsiųsti šiandien:",
  quotaAccountType: "📈 Paskyros tipas:",
  quotaWorkspace: "Google Workspace (1 500 laiškų/dieną)",
  quotaFree: "Nemokamas Gmail (100 laiškų/dieną)",
  quotaReset: "Kvota atsinaujina kasdien, vidurnaktį pagal Ramiojo vandenyno laiką",
  quotaLoading: "Įkeliama informacija apie jūsų laiškų kvotą...",
  quotaInfoNote: "Visi laiškai siunčiami iš jūsų Gmail paskyros ir matomi aplanke „Išsiųsti“. Galioja jūsų kasdienė Gmail/Workspace siuntimo kvota.",
  quotaError: "❌ Nepavyko įkelti kvotos informacijos:",
  
  // Buttons and actions
  submitButton: "🚀 Siųsti masiškai",
  loadingMessage: "Laiškai siunčiami... tai gali užtrukti kelias minutes.",
  
  // Validation messages
  noRecipientsError: "Įveskite bent vieną gavėjo el. pašto adresą.",
  noSubjectsError: "Įveskite bent vieną laiško temą.",
  
  // Success/error messages
  campaignComplete: "🎉 Kampanija baigta! Išsami suvestinė pasiekiama jūsų Gmail.",
  errorPrefix: "❌ Klaida: ",
  
  // Email summary
  campaignSummaryTitle: "📊 Laiškų kampanijos suvestinė",
  campaignDetailsTitle: "Kampanijos informacija",
  totalRecipients: "Iš viso gavėjų:",
  subjectVariations: "Temų variantai:",
  duration: "Trukmė:",
  seconds: "sek.",
  successful: "✅ Siuntimas baigtas gavėjams",
  failed: "❌ Nepavyko",
  quotaStatus: "📈 Šios paros jūsų kvotos būsena",
  emailsSent: "Išsiųsta laiškų:",
  remainingQuota: "Likusi kvota:",
  campaignCompleteSubject: "📊 Laiškų kampanija baigta",
  quotaErrorMsg: "Nepakanka laiškų kvotos! Reikia:",
  available: "Galima:",
  deliveryNotice: "Pastaba: „Siuntimas baigtas gavėjams“ reiškia, kad laiškas buvo išsiųstas iš jūsų paskyros, bet tai negarantuoja, kad jis pasiekė gavėją. Jei adresas neteisingas, galite gauti atšokimo pranešimą („bounce“) į Gmail pašto dėžutę."
}


};

// ============== BACKEND FUNCTIONS ==============

/**
 * Serves the main HTML interface
 */
function doGet(e) {
  const lang = e.parameter.lang || 'lt';
  const template = HtmlService.createTemplateFromFile('index');
  template.lang = lang;
  template.allTranslations = TRANSLATIONS; // Pass the whole object
  return template.evaluate()
    .setTitle(TRANSLATIONS[lang]?.pageTitle || TRANSLATIONS.lt.pageTitle)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Core email processing function
 */
function processEmailCampaign(formData, lang = 'lt') {
  const results = {
    successful: [],
    failed: [],
    startTime: new Date()
  };
  
  formData.recipients.forEach((recipient, index) => {
    try {
      // Get random subject
      const randomSubject = formData.subjects[Math.floor(Math.random() * formData.subjects.length)];
      
      // Prepare email body
      const emailBody = formData.emailTemplate
        .replace(/\[SENDER_NAME\]/g, formData.senderName || Session.getActiveUser().getDisplayName())
        .replace(/\[RECIPIENT_EMAIL\]/g, recipient);
      
      // Send email
      MailApp.sendEmail({
        to: recipient.trim(),
        subject: randomSubject,
        htmlBody: emailBody,
        name: formData.senderName || Session.getActiveUser().getDisplayName()
      });
      
      results.successful.push({ recipient, subject: randomSubject });
      Logger.log(`✅ Email sent to ${recipient}: ${randomSubject}`);
      
      // Add delay between emails (2-4 seconds)
      if (index < formData.recipients.length - 1) {
        Utilities.sleep(Math.floor(Math.random() * 2000) + 2000);
      }
      
    } catch (error) {
      results.failed.push({ recipient, error: error.toString() });
      Logger.log(`❌ Failed to send to ${recipient}: ${error.toString()}`);
    }
  });
  
  results.endTime = new Date();
  
  // Send summary email to user
  sendCampaignSummary(formData, results, lang);
  
  return results;
}

/**
 * Send campaign summary to user
 */
function sendCampaignSummary(formData, results, lang = 'lt') {
  try {
    const t = TRANSLATIONS[lang] || TRANSLATIONS.lt;
    const userEmail = Session.getActiveUser().getEmail();
    const duration = (results.endTime - results.startTime) / 1000;
    
    let summaryHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">${t.campaignSummaryTitle}</h2>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h3>${t.campaignDetailsTitle}</h3>
          <p><strong>${t.totalRecipients}</strong> ${formData.recipients.length}</p>
          <p><strong>${t.subjectVariations}</strong> ${formData.subjects.length}</p>
          <p><strong>${t.duration}</strong> ${Math.round(duration)} ${t.seconds}</p>
        </div>
        
        <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #2d5a2d;">${t.successful} (${results.successful.length})</h3>
          ${results.successful.map(item => `<p style="margin: 5px 0;">• ${item.recipient}</p>`).join('')}
        </div>
    `;
    
    if (results.failed.length > 0) {
      summaryHtml += `
        <div style="background: #ffe8e8; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #8b0000;">${t.failed} (${results.failed.length})</h3>
          ${results.failed.map(item => `<p style="margin: 5px 0;">• ${item.recipient}</p>`).join('')}
        </div>
      `;
    }
    
    summaryHtml += `
        <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h3>${t.quotaStatus}</h3>
          <p><strong>${t.emailsSent}</strong> ${results.successful.length}</p>
          <p><strong>${t.remainingQuota}</strong> ${MailApp.getRemainingDailyQuota()}</p>
        </div>
      </div>
    `;

    summaryHtml += `<p>*${t.deliveryNotice}</p>`;
    
    MailApp.sendEmail({
      to: userEmail,
      subject: `${t.campaignCompleteSubject} - ${results.successful.length}/${formData.recipients.length}`,
      htmlBody: summaryHtml
    });
    
  } catch (error) {
    Logger.log('❌ Failed to send summary: ' + error.toString());
  }
}

/**
 * Get user's current email quota
 */
function getQuotaInfo() {
  try {
    const quota = MailApp.getRemainingDailyQuota();
    const userEmail = Session.getActiveUser().getEmail();
    
    return {
      success: true,
      quota: quota,
      userEmail: userEmail,
      isWorkspace: userEmail.indexOf('@gmail.com') === -1
    };
  } catch (error) {
    return {
      success: false,
      error: error.toString()
    };
  }
}

/**
 * Store campaign progress in CacheService
 */
function setCampaignProgress(userEmail, progress) {
  CacheService.getUserCache().put('progress_' + userEmail, JSON.stringify(progress), 3600);
}

/**
 * Get campaign progress from CacheService
 */
function getCampaignProgress(userEmail) {
  const data = CacheService.getUserCache().get('progress_' + userEmail);
  return data ? JSON.parse(data) : null;
}

/**
 * Start campaign and track progress
 */
function sendBulkEmailsWithProgress(formData) {
  const userEmail = Session.getActiveUser().getEmail();
  const lang = formData.lang || 'lt';
  const t = TRANSLATIONS[lang] || TRANSLATIONS.lt;
  let total = formData.recipients.length;
  let remainingQuota = MailApp.getRemainingDailyQuota();

  // --- NEW QUOTA CHECK LOGIC ---
  if (remainingQuota <= 1) {
    return { success: false, message: t.quotaErrorMsg + " " + total + ". " + t.available + " " + remainingQuota + ". " + t.quotaError };
  }
  if (remainingQuota < total + 1) {
    // Only send as many as possible, reserve 1 for summary
    total = Math.max(remainingQuota - 1, 0);
    formData.recipients = formData.recipients.slice(0, total);
  }
  // --- END NEW LOGIC ---

  let progress = { sent: 0, failed: 0, total: total, done: false, error: null };
  setCampaignProgress(userEmail, progress);

  const results = {
    successful: [],
    failed: [],
    startTime: new Date()
  };

  try {
    formData.recipients.forEach((recipient, index) => {
      try {
        const randomSubject = formData.subjects[Math.floor(Math.random() * formData.subjects.length)];
        const emailBody = formData.emailTemplate
          .replace(/\[SENDER_NAME\]/g, formData.senderName || Session.getActiveUser().getDisplayName())
          .replace(/\[RECIPIENT_EMAIL\]/g, recipient);

        MailApp.sendEmail({
          to: recipient.trim(),
          subject: randomSubject,
          htmlBody: emailBody,
          name: formData.senderName || Session.getActiveUser().getDisplayName()
        });

        progress.sent++;
        results.successful.push({ recipient, subject: randomSubject });
      } catch (error) {
        progress.failed++;
        results.failed.push({ recipient, error: error.toString() });
      }
      setCampaignProgress(userEmail, progress);

      // Add delay between emails (2-4 seconds)
      if (index < formData.recipients.length - 1) {
        Utilities.sleep(Math.floor(Math.random() * 2000) + 2000);
      }
    });

    progress.done = true;
    setCampaignProgress(userEmail, progress);

    results.endTime = new Date();

    // Send summary with actual results
    sendCampaignSummary(formData, results, lang);

    // Inform user if not all recipients were emailed
    if (remainingQuota < formData.recipients.length + 1) {
      return { success: true, message: t.campaignComplete + " " + t.quotaErrorMsg + " " + (formData.recipients.length + 1) + ". " + t.available + " " + remainingQuota + ". Only " + total + " emails sent." };
    }

    return { success: true, message: t.campaignComplete };
  } catch (error) {
    progress.done = true;
    progress.error = error.toString();
    setCampaignProgress(userEmail, progress);
    return { success: false, message: error.toString() };
  }
}

/**
 * Expose progress to frontend
 */
function getCurrentProgress() {
  const userEmail = Session.getActiveUser().getEmail();
  return getCampaignProgress(userEmail) || { sent: 0, failed: 0, total: 0, done: false };
}