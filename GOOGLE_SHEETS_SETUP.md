# Google Sheets Lead Management Setup

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new sheet called "Joy Fix Leads"
3. Add these column headers in Row 1:
   - A1: **Date/Time**
   - B1: **Name**
   - C1: **Email**
   - D1: **Company**
   - E1: **Phone**
   - F1: **Service**
   - G1: **Message**
   - H1: **Status**

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete the default code and paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add new row with lead data
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.company,
      data.phone,
      data.service,
      data.message,
      data.status
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the script (Ctrl+S)
4. Click **Deploy > New Deployment**
5. Choose **Web app** as type
6. Set **Execute as**: Me
7. Set **Who has access**: Anyone
8. Click **Deploy**
9. **Copy the Web App URL**

## Step 3: Update Contact Form

Replace the Google Sheets URL in `SimpleContactForm.tsx` with your Web App URL:

```javascript
// Replace this URL with your Web App URL
await fetch('YOUR_WEB_APP_URL_HERE', {
```

## Step 4: Test the Setup

1. Fill out your contact form
2. Submit the form
3. Check your Google Sheet - new row should appear with lead data
4. Check your email - should receive the contact form email

## Lead Management Features

Your Google Sheet will now automatically track:
- ✅ **Date/Time** - When lead was submitted
- ✅ **Contact Info** - Name, email, phone, company
- ✅ **Service Interest** - What service they need
- ✅ **Message** - Full project details
- ✅ **Status** - Track lead progress (New Lead, Contacted, Qualified, etc.)

## Benefits

- 📊 **Lead Tracking** - All leads in one place
- 📈 **Analytics** - Track conversion rates
- 📝 **Notes** - Add follow-up notes
- 🔄 **Status Updates** - Track lead progress
- 📧 **Email Integration** - Still receive emails
- 📱 **Mobile Access** - Manage leads on phone

Your contact form now saves all data to Google Sheets for proper lead management! 🎉