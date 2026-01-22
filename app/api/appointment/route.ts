export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("API HIT 👉", body);

    const { name, email, phone, date, time, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("SMTP VERIFIED ✅");

    await transporter.sendMail({
      from: `"Dental Planet" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "🦷 New Appointment Booked",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Time: ${time}
Message: ${message}
      `,
    });

    await transporter.sendMail({
      from: `"Dental Planet" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Appointment Confirmed",
      text: `Hello ${name}, your appointment is confirmed on ${date} at ${time}.`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("EMAIL ERROR ❌", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
