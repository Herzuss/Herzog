import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Wymagane pola są puste." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Brak RESEND_API_KEY w środowisku.");
      return NextResponse.json(
        { error: "Konfiguracja serwera niekompletna." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "herzog.web.dev@gmail.com",
      replyTo: email,
      subject: `Nowa wiadomość od ${name}`,
      html: `<p><b>Imię:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Telefon:</b> ${phone || "nie podano"}</p><p><b>Wiadomość:</b><br>${message}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 502 });
    }

    console.log("Wiadomość wysłana, id:", data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Błąd serwera /api/contact:", err);
    return NextResponse.json({ error: "Błąd serwera." }, { status: 500 });
  }
}
