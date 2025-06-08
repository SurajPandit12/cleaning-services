This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# Contact Form Email Setup

Complete backend solution for sending emails directly from your contact form to the owner's Gmail using Node.js and SMTP.

## 📋 Prerequisites

- Node.js (v16 or higher)
- Gmail account for sending emails
- Gmail App Password (for SMTP authentication)

## 🚀 Step-by-Step Setup

### Step 1: Gmail Setup (IMPORTANT!)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and generate password
   - **Save this 16-character password** - you'll need it for `.env`

### Step 2: Backend Setup

1. **Create backend directory and install dependencies**:
```bash
mkdir backend
cd backend
npm init -y
npm install express nodemailer cors dotenv express-rate-limit helmet joi
npm install -D nodemon
```

2. **Set up the folder structure**:
```
backend/
├── server.js
├── routes/
│   └── contact.js
├── config/
│   └── email.js
├── middleware/
│   └── validation.js
├── package.json
└── .env
```

3. **Create and configure `.env` file**:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (Gmail SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
OWNER_EMAIL=suraejpaedt@gmail.com

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

**⚠️ IMPORTANT**: Replace the following in your `.env`:
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: The 16-character app password from Gmail
- `FRONTEND_URL`: Your frontend URL (Next.js default is 3000)

### Step 3: Frontend Setup

1. **Add environment variable to your Next.js project**:

Create `.env.local` in your Next.js root:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

2. **Replace your existing `contactUs.jsx`** with the updated version that includes API integration.

### Step 4: Start the Applications

1. **Start Backend** (from backend directory):
```bash
npm run dev
# or
npm start
```

2. **Start Frontend** (from your Next.js directory):
```bash
npm run dev
```

### Step 5: Test the Setup

1. **Test Backend Health**:
   - Visit: `http://localhost:5000/api/health`
   - Should show: `{"status":"OK","message":"Contact Form API is running"}`

2. **Test Email Configuration** (Development only):
   - Visit: `http://localhost:5000/api/contact/test`
   - Should show email service status

3. **Test Contact Form**:
   - Fill out your contact form
   - Check owner's email (`suraejpaedt@gmail.com`)
   - Check customer's email for confirmation

## 📧 Email Features

### For Owner (suraejpaedt@gmail.com):
- **Professional HTML template** with all customer details
- **Quick action buttons** (Reply, Call, WhatsApp)
- **High priority** email flag
- **Customer can reply directly** to the email

### For Customer:
- **Confirmation email** with service details
- **Professional branding**
- **Clear next steps** and contact information
- **Response time expectations**

## 🔒 Security Features

- **Rate limiting**: 5 requests per 15 minutes per IP
- **Input validation**: All fields validated with Joi
- **Spam detection**: Basic keyword and pattern filtering
- **CORS protection**: Only allowed origins can access API
- **Helmet security headers**
- **No data storage**: Emails sent directly, no database needed

## 🛠️ Production Deployment

### Backend Deployment (e.g., Railway, Heroku, DigitalOcean):

1. **Update environment variables**:
```env
NODE_ENV=production
FRONTEND_URL=https://your-domain.com
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
OWNER_EMAIL=suraejpaedt@gmail.com
```

2. **Update frontend API URL**:
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

## 🐛 Troubleshooting

### Common Issues:

1. **"Invalid login" error**:
   - Ensure 2FA is enabled on Gmail
   - Use App Password, not regular password
   - Check EMAIL_USER and EMAIL_PASS in .env

2. **CORS errors**:
   - Update FRONTEND_URL in backend .env
   - Ensure frontend is running on correct port

3. **Rate limiting**:
   - Wait 15 minutes between excessive requests
   - Adjust rate limits in .env if needed

4. **Email not sending**:
   - Check Gmail App Password
   - Verify EMAIL_HOST and EMAIL_PORT
   - Check network/firewall restrictions

### Debug Mode:

Set `NODE_ENV=development` to see detailed error messages.

## 📊 API Endpoints

- `POST /api/contact/send` - Send contact form email
- `GET /api/health` - Health check
- `GET /api/contact/test` - Test email configuration (dev only)

## 🔄 Response Format

### Success Response:
```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "data": {
    "submittedAt": "2024-06-04T10:30:00.000Z",
    "customerName": "John Doe",
    "confirmationSent": true
  }
}
```

### Error Response:
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

## 📝 Customization

### Email Templates:
- Edit `config/email.js` to modify email templates
- Update company branding and contact information
- Customize email styling and content

### Validation Rules:
- Modify `middleware/validation.js` for custom validation
- Add/remove required fields
- Update service options

### Security Settings:
- Adjust rate limiting in `server.js`
- Modify spam detection rules
- Update CORS origins

## 🎯 Next Steps

1. **Customize email templates** with your branding
2. **Update contact information** in templates
3. **Test thoroughly** before going live
4. **