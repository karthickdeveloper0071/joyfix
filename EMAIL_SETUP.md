# Email Setup Guide

## Contact Form Email Configuration

The contact form is configured to send emails to `karthick123svks@gmail.com` when users submit the form.

### Setup Steps:

1. **Configure Gmail App Password:**
   - Go to your Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password for "Mail"
   - Copy the 16-character app password

2. **Update Environment Variables:**
   - Open `.env.local` file
   - Replace `your-email@gmail.com` with your Gmail address
   - Replace `your-app-password` with the app password from step 1

3. **Example .env.local:**
   ```
   EMAIL_USER=youremail@gmail.com
   EMAIL_PASS=abcd efgh ijkl mnop
   ```

4. **Test the Contact Form:**
   - Run the development server: `npm run dev`
   - Go to `/contact` page
   - Fill out and submit the form
   - Check if email is received at `karthick123svks@gmail.com`

### Features:
- ✅ Sends formatted HTML emails
- ✅ Includes all form data
- ✅ Professional email template
- ✅ Error handling and user feedback
- ✅ Form validation

### Troubleshooting:
- Make sure 2FA is enabled on Gmail
- Use App Password, not regular password
- Check spam folder for test emails
- Verify environment variables are set correctly