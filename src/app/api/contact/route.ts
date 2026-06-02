import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Wymagane pola są puste." }, { status: 400 });
    }

    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'herzog.web.dev@gmail.com',
      subject: `Nowa wiadomość od ${name}`,
      html: `<p><b>Imię:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Telefon:</b> ${phone || "nie podano"}</p><p><b>Wiadomość:</b><br>${message}</p>`,
    });

    console.log("Nowa wiadomość z formularza:", { name, email, phone, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Błąd serwera." }, { status: 500 });
  }
}
