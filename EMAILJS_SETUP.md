# EmailJS Setup Guide

## Your Service ID
**Service ID:** `service_q7e33or`

## Setup Steps

### 1. Get Your Public Key
1. Go to [https://dashboard.emailjs.com/admin/account](https://dashboard.emailjs.com/admin/account)
2. Copy your **Public Key**
3. Replace `YOUR_PUBLIC_KEY` in `src/pages/Contact/Contact.js` line 11 with your actual public key

### 2. Create Email Template
1. Go to [https://dashboard.emailjs.com/admin/templates](https://dashboard.emailjs.com/admin/templates)
2. Click **"Create New Template"**
3. Use the following template details:

#### Template Name
`Contact Form Template`

#### Subject
`New Contact Form Message from {{from_name}}`

#### Email Body (HTML)
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .container {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 10px;
            border: 1px solid #ddd;
        }
        .header {
            background: #4a90e2;
            color: white;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .info-section {
            background: white;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 15px;
            border-left: 4px solid #4a90e2;
        }
        .info-section h3 {
            margin-top: 0;
            color: #4a90e2;
            font-size: 16px;
        }
        .message-section {
            background: #fff;
            padding: 20px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
        .message-section h3 {
            margin-top: 0;
            color: #333;
        }
        .message-content {
            background: #f5f5f5;
            padding: 15px;
            border-radius: 5px;
            margin-top: 10px;
            white-space: pre-wrap;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            color: #666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 New Contact Form Submission</h1>
        </div>

        <div class="info-section">
            <h3>👤 From:</h3>
            <p><strong>Name:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
            <p><strong>Phone:</strong> {{phone}}</p>
        </div>

        <div class="info-section">
            <h3>📋 Subject:</h3>
            <p>{{subject}}</p>
        </div>

        <div class="message-section">
            <h3>💬 Message:</h3>
            <div class="message-content">{{message}}</div>
        </div>

        <div class="footer">
            <p>This message was sent from your Orebi E-Commerce Store contact form.</p>
            <p>Sent on: {{to_email}}</p>
        </div>
    </div>
</body>
</html>
```

#### Template Variables
Make sure these variables are available in your template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Sender's phone number
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your receiving email

### 3. Get Template ID
After creating the template:
1. Copy the **Template ID** from the template page
2. Replace `YOUR_TEMPLATE_ID` in `src/pages/Contact/Contact.js` line 30 with your actual template ID

### 4. Update Receiving Email
In `src/pages/Contact/Contact.js` line 25:
- Replace `your-email@example.com` with your actual email address where you want to receive messages

### 5. Test Your Integration
1. Start your development server: `npm start`
2. Go to the Contact page
3. Fill out the form and submit
4. Check your email for the message

## Important Notes
- Keep your Public Key and Template ID secure
- Don't commit them to public repositories
- You can set up environment variables for better security
- The free EmailJS plan allows 200 emails per month

## Troubleshooting
- If emails don't send, check browser console for errors
- Verify your Service ID, Template ID, and Public Key are correct
- Make sure your template has all required variables
- Check EmailJS dashboard for email sending logs
