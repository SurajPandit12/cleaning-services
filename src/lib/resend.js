import { Resend } from "resend";
const resendApiKey = process.env.RESEND_API_KEY;
const resendDomain = process.env.RESEND_DOMAIN;

if (!resendApiKey) {
  throw new Error("RESEND_API_KEY is not defined in environment variables");
}

if (!resendDomain) {
  throw new Error("RESEND_DOMAIN is not defined in environment variables");
}

export const resend = new Resend(resendApiKey);
export const fromEmail = `website@${resendDomain}`;