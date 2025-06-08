import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";

// Validation helper functions
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[\+]?[\d\s\-\(\)]{8,}$/;
  return phoneRegex.test(phone);
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validation
    const errors = [];

    if (!name || name.trim().length < 2) {
      errors.push({
        field: "name",
        message: "Name must be at least 2 characters long",
      });
    }

    if (!email || !validateEmail(email)) {
      errors.push({
        field: "email",
        message: "Please enter a valid email address",
      });
    }

    if (phone && !validatePhone(phone)) {
      errors.push({
        field: "phone",
        message: "Please enter a valid phone number",
      });
    }

    if (!message || message.trim().length < 10) {
      errors.push({
        field: "message",
        message: "Message must be at least 10 characters long",
      });
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    // Create email content for business owner
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px;">
        <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1e40af; margin: 0; font-size: 28px;">🧽 New Cleaning Service Inquiry</h1>
            <p style="color: #64748b; margin: 10px 0 0 0;">You have received a new contact form submission</p>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #334155; margin: 0 0 15px 0; font-size: 20px;">👤 Customer Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              ${
                phone
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
                <td style="padding: 8px 0; color: #1e293b;"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td>
              </tr>
              `
                  : ""
              }
              ${
                service
                  ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service:</td>
                <td style="padding: 8px 0; color: #1e293b;">${service}</td>
              </tr>
              `
                  : ""
              }
            </table>
          </div>
          
          <div style="background-color: #fefefe; padding: 20px; border-left: 4px solid #3b82f6; margin-bottom: 20px;">
            <h3 style="color: #334155; margin: 0 0 10px 0; font-size: 18px;">💬 Customer Message</h3>
            <p style="line-height: 1.8; color: #475569; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #1d4ed8; font-size: 14px;">
              <strong>⚡ Quick Response:</strong> Simply reply to this email to respond directly to ${name}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">
              Sent from Best Ever Hospitality Contact Form • ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}
            </p>
          </div>
        </div>
      </div>
    `;

    const businessEmailText = `
🧽 NEW CLEANING SERVICE INQUIRY

Customer Information:
👤 Name: ${name}
📧 Email: ${email}
${phone ? `📞 Phone: ${phone}` : ""}
${service ? `🛠️ Service: ${service}` : ""}

💬 Message:
${message}

---
Sent from Best Ever Hospitality Contact Form
${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}
    `;

    // Send email to business owner
    const businessEmail = await resend.emails.send({
      from: "website@besteverhospitality.com.au",
      to: ["support@besteverhospitality.com.au"],
      replyTo: email,
      subject: `🧽 New Cleaning Inquiry: ${service || "General"} - ${name}`,
      html: businessEmailHtml,
      text: businessEmailText,
    });

    // Create confirmation email for customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f0f9ff; padding: 20px;">
        <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #0369a1; margin: 0; font-size: 28px;">✅ Thank You for Your Inquiry!</h1>
            <p style="color: #0369a1; margin: 10px 0 0 0; font-size: 18px;">Best Ever Hospitality</p>
          </div>
          
          <div style="margin-bottom: 25px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Thank you for contacting Best Ever Hospitality! We've received your inquiry and really appreciate you considering our cleaning services.
            </p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #334155; margin: 0 0 15px 0; font-size: 18px;">📋 Your Inquiry Summary</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 100px;">Service:</td>
                <td style="padding: 8px 0; color: #1e293b;">${service || "General Inquiry"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Submitted:</td>
                <td style="padding: 8px 0; color: #1e293b;">${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}</td>
              </tr>
            </table>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #475569; font-style: italic; font-size: 14px;">"${message.length > 100 ? message.substring(0, 100) + "..." : message}"</p>
            </div>
          </div>
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin: 25px 0;">
            <h3 style="color: #065f46; margin: 0 0 10px 0; font-size: 16px;">⏰ What Happens Next?</h3>
            <p style="color: #047857; margin: 0; line-height: 1.6;">
              Our team will review your inquiry and get back to you within <strong>2-4 hours</strong> during business hours with a personalized response and quote if applicable.
            </p>
          </div>
          
          <div style="margin: 25px 0;">
            <h3 style="color: #334155; margin: 0 0 15px 0; font-size: 18px;">📞 Need Immediate Assistance?</h3>
            <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px;">
              <p style="margin: 0 0 10px 0; color: #475569;">Feel free to contact us directly:</p>
              <ul style="margin: 0; padding-left: 20px; color: #475569;">
                <li style="margin-bottom: 5px;">📧 Email: <a href="mailto:support@besteverhospitality.com.au" style="color: #2563eb; text-decoration: none;">support@besteverhospitality.com.au</a></li>
                <li>📱 Phone: <a href="tel:+61XXXXXXXXX" style="color: #2563eb; text-decoration: none;">+61 XXX XXX XXX</a></li>
              </ul>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #374151; margin: 0 0 10px 0; font-size: 16px;">
              Best regards,<br>
              <strong style="color: #0369a1;">The Best Ever Hospitality Team</strong>
            </p>
            <p style="color: #64748b; font-size: 12px; margin: 0;">
              Professional Cleaning Services • Sydney Metro Area<br>
              Available 7 days a week
            </p>
          </div>
        </div>
      </div>
    `;

    const customerEmailText = `
✅ THANK YOU FOR YOUR INQUIRY!

Hi ${name},

Thank you for contacting Best Ever Hospitality! We've received your inquiry and really appreciate you considering our cleaning services.

📋 YOUR INQUIRY SUMMARY:
Service: ${service || "General Inquiry"}
Submitted: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}
Message: "${message}"

⏰ WHAT HAPPENS NEXT?
Our team will review your inquiry and get back to you within 2-4 hours during business hours with a personalized response and quote if applicable.

📞 NEED IMMEDIATE ASSISTANCE?
Email: support@besteverhospitality.com.au
Phone: +61 XXX XXX XXX

Best regards,
The Best Ever Hospitality Team
Professional Cleaning Services • Sydney Metro Area
Available 7 days a week
    `;

    // Send confirmation email to customer
    await resend.emails.send({
      from: "website@besteverhospitality.com.au",
      to: [email],
      subject:
        "✅ Thank you for your cleaning service inquiry - Best Ever Hospitality",
      html: customerEmailHtml,
      text: customerEmailText,
    });

    console.log("✅ Emails sent successfully - Business ID:", businessEmail.id);

    return NextResponse.json({
      success: true,
      message:
        "Your message has been sent successfully! We'll get back to you within 2-4 hours.",
      emailId: businessEmail.id,
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);

    // Handle specific Resend errors
    if (error.message?.includes("API key")) {
      return NextResponse.json(
        { error: "Email service configuration error. Please contact support." },
        { status: 500 }
      );
    }

    if (error.message?.includes("domain")) {
      return NextResponse.json(
        { error: "Email domain not verified. Please contact support." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        error:
          "Failed to send email. Please try again or contact us directly at support@besteverhospitality.com.au",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
