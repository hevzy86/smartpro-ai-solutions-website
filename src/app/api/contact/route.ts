import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Логируем переменные окружения при каждом вызове API
console.log("ENV at /api/contact:", {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
  pass: !!process.env.SMTP_PASS, // не логируем пароль напрямую
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // SMTP credentials from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = smtpPort === 465;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      return NextResponse.json({ error: "SMTP config missing" }, { status: 500 });
    }

    // Настройка транспорта
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure, // 465 — secure, 587 — not secure
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Отправка письма
    await transporter.sendMail({
      from: smtpUser,
      to: smtpUser, // или другой email
      subject: `Contact from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    // Type guard for Error
    let errMsg = "Unknown error";
    if (error instanceof Error) {
      errMsg = error.message;
    } else if (typeof error === "string") {
      errMsg = error;
    }

    // Логируем ошибку в консоль Vercel
    console.error("CONTACT API ERROR:", error, {
      env: {
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USER: process.env.SMTP_USER,
      }
    });
    // Возвращаем ошибку в ответе (для дебага, потом убери)
    return NextResponse.json(
      { error: "Internal Server Error", details: errMsg },
      { status: 500 }
    );
  }
}