import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.warn("RESEND_API_KEY is missing! Simulating successful email dispatch to aromalbabu9847@gmail.com.");
      console.log(`[SIMULATED EMAIL]
        From: ${name} <${email}>
        To: aromalbabu9847@gmail.com
        Message: ${message}
      `);
      return NextResponse.json({
        success: true,
        message: "Message logged successfully (mock development mode).",
      });
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Alleppy Houseboat Contact <onboarding@resend.dev>",
      to: "aromalbabu9847@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <h2>New Booking Inquiry/Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f7f7f7; padding: 15px; border-radius: 8px;">${message}</p>
      `,
    });

    if (error) {
      console.error("Resend sending error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Server contact submission error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
