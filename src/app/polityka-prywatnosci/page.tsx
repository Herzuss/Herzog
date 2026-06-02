"use client";
import { useState } from "react";
import Nav from "../compoments/nav";
import Footer from "../compoments/footer";
import ContactModal from "../compoments/ContactModal";

export default function PrivacyPolicy() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <main className="min-h-screen flex flex-col">
      <Nav onOpenContact={openContact} />

      <div className="grow">
        <section className="pt-24 pb-20 max-w-3xl mx-auto px-4 sm:px-8 text-zinc-300">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-8 tracking-tight">
            Polityka Prywatności
          </h1>

          <div className="space-y-10 text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-emerald-400 mb-3">
                1. Postanowienia ogólne
              </h2>
              <p>
                Niniejsza Polityka Prywatności określa zasady przetwarzania i
                ochrony danych osobowych przekazanych przez Użytkowników w
                związku z korzystaniem z serwisu internetowego HerzogWeb.
                Szanujemy Twoją prywatność i dbamy o bezpieczeństwo Twoich
                danych.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-emerald-400 mb-3">
                2. Administrator Danych Osobowych
              </h2>
              <p>
                Administratorem Twoich danych osobowych jest Filip Herzog. Z
                Administratorem można skontaktować się za pośrednictwem adresu
                e-mail:{" "}
                <a
                  href="mailto:herzog.web.dev@gmail.com"
                  className="text-emerald-300 hover:text-emerald-400 transition-colors underline underline-offset-4"
                >
                  herzog.web.dev@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-emerald-400 mb-3">
                3. Jakie dane zbieramy?
              </h2>
              <p className="mb-3">
                Podczas korzystania z formularza kontaktowego na stronie
                internetowej, możemy przetwarzać następujące dane osobowe:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400 marker:text-emerald-400/50">
                <li>
                  <strong className="text-zinc-300 font-medium">
                    Imię i nazwisko
                  </strong>{" "}
                  – abyśmy wiedzieli, z kim się kontaktujemy,
                </li>
                <li>
                  <strong className="text-zinc-300 font-medium">
                    Adres e-mail
                  </strong>{" "}
                  – jako główny kanał komunikacji zwrotnej,
                </li>
                <li>
                  <strong className="text-zinc-300 font-medium">
                    Numer telefonu
                  </strong>{" "}
                  (opcjonalnie) – jeśli preferujesz szybki kontakt telefoniczny.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-emerald-400 mb-3">
                4. Cel i podstawa prawna przetwarzania danych
              </h2>
              <p className="mb-3">
                Twoje dane osobowe są przez nas przetwarzane wyłącznie w jasno
                określonych celach:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400 marker:text-emerald-400/50">
                <li>
                  udzielenie odpowiedzi na Twoje zapytanie przesłane przez
                  formularz kontaktowy lub e-mail (podstawa prawna: art. 6 ust.
                  1 lit. f RODO – prawnie uzasadniony interes administratora),
                </li>
                <li>
                  przedstawienie oferty współpracy na Twoją prośbę oraz podjęcie
                  działań przed ewentualnym zawarciem umowy (podstawa prawna:
                  art. 6 ust. 1 lit. b RODO).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-emerald-400 mb-3">
                5. Udostępnianie danych
              </h2>
              <p>
                Gwarantujemy, że Twoje dane są u nas w pełni bezpieczne.{" "}
                <strong>Nigdy nie sprzedajemy</strong>, nie wynajmujemy ani nie
                udostępniamy Twoich danych osobowych zewnętrznym podmiotom w
                celach marketingowych. Dostęp do nich mogą mieć jedynie zaufane
                podmioty świadczące dla nas usługi techniczne (np. dostawca
                hostingu, dostawca usług e-mail), które są zobowiązane do
                zachowania ścisłej poufności i najwyższych standardów
                bezpieczeństwa.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-emerald-400 mb-3">
                6. Czas przechowywania danych
              </h2>
              <p>
                Twoje dane osobowe będą przechowywane przez okres niezbędny do
                pełnej obsługi zapytania i prowadzenia korespondencji, a w
                przypadku nawiązania współpracy – przez czas trwania umowy oraz
                okres wymagany przepisami prawa (np. księgowo-podatkowymi).
                Jeśli kontakt nie zakończy się współpracą, dane zostaną usunięte
                bez zbędnej zwłoki, najpóźniej po ustaniu okresu przedawnienia
                ewentualnych roszczeń.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-emerald-400 mb-3">
                7. Twoje prawa (RODO)
              </h2>
              <p className="mb-3">
                Zgodnie z przepisami Ogólnego Rozporządzenia o Ochronie Danych
                (RODO) przysługuje Ci pełnia praw:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-400 marker:text-emerald-400/50">
                <li>
                  prawo dostępu do swoich danych oraz otrzymania ich kopii,
                </li>
                <li>
                  prawo do sprostowania (poprawiania) swoich danych, jeśli są
                  błędne lub nieaktualne,
                </li>
                <li>
                  prawo do usunięcia danych (&quot;prawo do bycia
                  zapomnianym&quot;),
                </li>
                <li>prawo do ograniczenia przetwarzania danych,</li>
                <li>prawo do wniesienia sprzeciwu wobec przetwarzania,</li>
                <li>prawo do przenoszenia danych,</li>
                <li>
                  prawo wniesienia skargi do organu nadzorczego – Prezesa Urzędu
                  Ochrony Danych Osobowych (PUODO).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-emerald-400 mb-3">
                8. Postanowienia końcowe
              </h2>
              <p>
                Zastrzegamy sobie prawo do wprowadzania aktualizacji w
                niniejszej Polityce Prywatności w celu dostosowania jej do
                ewentualnych zmian prawnych lub rozbudowy funkcjonalności strony
                internetowej. Wszelkie zmiany będą na bieżąco publikowane na tej
                podstronie.
              </p>
            </section>
          </div>
        </section>
      </div>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </main>
  );
}
