'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiFileText } from "react-icons/fi";
import SocialLinks from "@/components/SocialLinks";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/30 pointer-events-none" />

      <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/logo.png"
              alt="TimelessCity Logo"
              width={40}
              height={40}
              className="animate-pulse"
            />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                TimelessCity
              </span>
              <span className="px-2 py-1 text-xs bg-white/10 rounded-full border border-white/10">
              {/*BETA*/}
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <FiArrowRight className="w-5 h-5 transform rotate-180" />
              <span className="hidden sm:inline">Zurück</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/10">
              <div className="flex items-center gap-1 mb-4">
                <FiFileText className="w-12 h-12 text-white" />
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Impressum
                  </h1>
                  <p className="text-gray-400 mt-1">Stand: 02. Januar 2026</p>
                </div>
              </div>
              <p className="text-gray-300">
                Dieses Impressum gilt für die Website und alle zugehörigen Dienste von TimelessCity.
              </p>
            </div>

            {/* Inhalt */}
            <div className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white">Verantwortlich für den Inhalt</h2>
                <p className="text-gray-300 mt-2">
                  <strong>Name:</strong> Dario Butschko <br />
                  <strong>Email:</strong> <Link href="mailto:verwaltung.timeless@gmail.com" className="text-blue-400 hover:text-blue-300">verwaltung.timeless@gmail.com</Link> <br />
                  <strong>Telefon:</strong> 094146186158 <br />
                  <strong>Adresse:</strong> <br />
                    c/o flexdienst – #11486 <br />
                    Kurt-Schumacher-Straße 76 <br />
                    67663 Kaiserslautern <br /> 
                    Deutschland<br />
                  
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white">Haftung für Inhalte</h2>
                <p className="text-gray-300 mt-2">
                  Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white">Jugendschutz</h2>
                <p className="text-gray-300 mt2">
                  Unser FiveM-Server richtet sich ausschließlich an volljährige Nutzerinnen und Nutzer ab 18 Jahren.
                  Der Zugang zu unserem Server ist daher gemäß § 10 Abs. 1 des Jugendmedienschutz-Staatsvertrags (JMStV) nur Personen gestattet, die das 18. Lebensjahr vollendet haben.

                  Zur Einhaltung der gesetzlichen Jugendschutzbestimmungen wird der Zugang regelmäßig überprüft. Mit dem Beitritt bzw. der Nutzung unseres Servers bestätigt jede Person, volljährig zu sein.
                  Wir behalten uns vor, bei Zweifeln an der Altersangabe eine Altersverifikation zu verlangen oder den Zugang zu verweigern.

                  Inhalte auf unserem Server können Szenen enthalten, die für Kinder und Jugendliche nicht geeignet sind (z. B. Gewaltdarstellungen, Drogenkonsum oder andere nicht jugendfreie Inhalte), weshalb ein verantwortungsvoller Umgang im Sinne des Jugendschutzes für uns oberste Priorität hat.
                </p>
              </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">Datenschutzerklärung gemäß DSGVO</h2>
              <p className="text-gray-300 mt2">
                Datenschutzerklärung (gemäß DSGVO)

              Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unseres FiveM-Servers.

              1. Verantwortlicher
              Verantwortlich für die Datenverarbeitung auf diesem Server ist:
              Siehe Oben.

              2. Erhebung und Speicherung personenbezogener Daten
              Beim Betreten unseres Servers werden technisch notwendige Daten wie Ihre IP-Adresse, der Steam- oder Rockstar-Accountname, sowie Datum und Uhrzeit der Verbindung automatisch erfasst. Diese Daten dienen der Sicherheit, Missbrauchsprävention und dem Serverbetrieb. Eine weitergehende Verarbeitung oder Weitergabe an Dritte erfolgt nicht, sofern keine gesetzliche Pflicht besteht.

              3. Zweck der Datenverarbeitung
              Die Datenverarbeitung erfolgt ausschließlich zum Betrieb des Servers, zur Fehleranalyse, zur Sicherstellung der Serverstabilität sowie zur Einhaltung unserer Serverregeln.
              4. Speicherdauer
              Die gespeicherten Verbindungsdaten werden regelmäßig gelöscht, sobald sie für den Zweck ihrer Erhebung nicht mehr erforderlich sind. In der Regel geschieht dies nach spätestens 30 Tagen, sofern keine sicherheitsrelevanten Gründe oder Ermittlungen vorliegen.

              5. Ihre Rechte
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Darüber hinaus steht Ihnen ein Widerspruchsrecht gegen die Verarbeitung sowie das Recht auf Datenübertragbarkeit zu.
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, haben Sie das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.

              6. Kontaktaufnahme
              Für datenschutzrechtliche Anfragen wenden Sie sich bitte per E-Mail an: Siehe Oben.
              </p>
            </div>

              <div>
                <h2 className="text-2xl font-semibold text-white">Externe Links</h2>
                <p className="text-gray-300 mt-2">
                  Diese Website kann Links zu externen Webseiten enthalten, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-white/10 bg-black/20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <p className="text-gray-400 text-sm">
                  Für weitere Informationen oder Fragen wende dich bitte per E-Mail an uns.
                </p>
                <Link href="/" className="flex items-center gap-2 text-white hover:text-gray-300">
                  <FiArrowRight className="transform rotate-180" />
                  Zurück zur Startseite
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logotransparent.png"
                alt="Logo"
                width={80}
                height={80}

              />
              <div>
                <h3 className="text-xl font-bold">TimelessCity</h3>
                <p className="text-gray-400 text-sm">Next-Level Roleplay Experience</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Professionelles FiveM-Roleplay mit Fokus auf Immersion und Community.
            </p>
          </div>

          <div>
            <h4 className="text-white/90 font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
            <Link href="/regeln" className="block text-gray-400 hover:text-white text-sm">
                Server-Regeln
              </Link>
              <Link href="/agb" className="block text-gray-400 hover:text-white text-sm">
                AGB
              </Link>
              <Link href="/impressum" className="block text-gray-400 hover:text-white text-sm">
                Impressum
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white/90 font-medium mb-4">Kontakt</h4>
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">
                Support: <Link href="mailto:verwaltung.timeless@gmail.com" className="hover:text-white">verwaltung.timeless@gmail.com</Link>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div>© 2026 TimelessCity. Alle Rechte vorbehalten.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
