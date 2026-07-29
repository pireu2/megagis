import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, service, message } = body;

    if (!fullName || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Toate câmpurile sunt obligatorii." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST?.trim();
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT.trim(), 10) : 465;
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS?.trim();
    const receiver = process.env.CONTACT_RECEIVER_EMAIL?.trim();

    if (!host || !user || !pass || !receiver) {
      console.error("Missing SMTP configuration in environment variables.");
      return NextResponse.json(
        { error: "Configurația de email este incompletă pe server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; rounded: 8px; overflow: hidden;">
        <div style="background-color: #0f172a; color: #ffffff; padding: 20px; text-align: left;">
          <h2 style="margin: 0; font-size: 20px;">Solicitare Nouă Contact - Megagis.ro</h2>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #64748b;">Nume Complet:</td>
              <td style="padding: 8px 0; color: #0f172a;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Telefon:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #0f172a;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Serviciu Solicitat:</td>
              <td style="padding: 8px 0; color: #0f172a;"><strong>${service}</strong></td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-weight: bold; margin-bottom: 8px; color: #64748b;">Mesaj / Detalii Proiect:</p>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; border: 1px solid #f1f5f9; white-space: pre-wrap; font-size: 14px; color: #1e293b;">${message}</div>
        </div>
        <div style="background-color: #f8fafc; padding: 12px 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
          Mesaj generat automat prin formularul de contact megagis.ro
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Formular Contact Megagis" <${user}>`,
      to: receiver,
      replyTo: email,
      subject: `[Formular Web] ${service} - ${fullName}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    const errorMessage = error instanceof Error ? error.message : "Eroare la trimiterea mesajului.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
