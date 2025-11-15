'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight,  FiShield, FiMic, FiDownload, FiMessageSquare, FiBook } from "react-icons/fi";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
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
                BETA
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
              <FiShield className="w-12 h-12 text-white" />
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Server-Regelwerk
                </h1>
                <p className="text-gray-400 mt-1">
                  Stand: 15 November 2025 · Version 1.0
                </p>
              </div>
            </div>
          

            <p className="text-gray-300">
              Mit der Nutzung des Servers erklärst du dich mit den folgenden Regeln einverstanden. 
              Unwissenheit schützt nicht vor Sanktionen. Bei Fragen stehen wir im Discord zur Verfügung.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
        
      

          {/* Support */}
          <div className="p-8 space-y-10">
            {/* Allgemeine Regeln */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-3">
                <span className="bg-white/10 px-3 py-1 rounded-lg">1</span>
                Allgemeine Regeln
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* §1.1 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">§1.1 FiveM Richtlinien</h3>
                  <p className="text-gray-300">
                    Bitte beachte, dass die allgemeinen Geschäftsbedingungen von FiveM gelten, die du unter folgendem Link findest:
                    (Mit dem Betreten des Servers akzeptierst du sowohl diese als auch die AGBs des Servers unter timelesscity.de/agb zu finden.)
                  </p>
                  <a
                    href="https://runtime.fivem.net/platform-license-agreement-12-sept-2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm text-gray-400 hover:text-white"
                  >
                    <FiArrowRight className="w-4 h-4" />
                    FiveM AGB anzeigen
                  </a>
                </div>

                {/* §1.2 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">§1.2 Team-Anweisungen</h3>
                  <p className="text-gray-300">
                    Den Anweisungen der Teamler (unabhängig des Rangs) ist stets Folge zu leisten.
                  </p>
                </div>

                {/* §1.3 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">§1.3 Werbung</h3>
                  <p className="text-gray-300">
                    Jegliche Werbung für andere Server, sei es mündlich oder schriftlich, ist untersagt
                    und wird mit einem Ausschluss vom Server sanktioniert.
                  </p>
                </div>

                {/* §1.4 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">§1.4 Zustimmung der Datenverarbeitung</h3>
                  <p className="text-gray-300">
                    Beim Beitritt des Servers stimmt man der Speicherung aller Daten zu, die durch TX Admin
                    von den Nutzern erfasst werden können. Diese Daten bleiben serverintern und werden nicht
                    an Dritte weitergeleitet.
                  </p>
                </div>

                {/* §1.4.1 */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">§1.4.1 Zustimmung der Datenverarbeitung</h3>
                  <p className="text-gray-300">
                    Beim Betreten unseres Servers stimmt der jeweilige Spieler zu, dass seine Stimme auf
                    öffentlichen Plattformen (YouTube, Twitch etc.) hörbar ist und ggf. aufgezeichnet werden kann.
                  </p>
                </div>
          
                   {/* §1.5 */}
                   <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.5 Admin-Beachtung</h3>
                      <p className="text-gray-300">
                        Teammitglieder dürfen Ingame nicht beachtet werden, wenn sie ihren Admin-Anzug tragen
                      </p>
                  </div>
                  {/* §1.6*/}
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.6 Bugusing</h3>
                      <p className="text-gray-300">
                         Fehlerhafte Spielmechaniken (Bugusing) sind sofort im Support zu melden. Das Ausnutzen von Bugs ist strengstens untersagt.
                      </p>
                  </div>  

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.7 Respekt</h3>
                      <p className="text-gray-300">
                          Alle Spieler sind dazu angehalten, sich respektvoll und höflich gegenüber anderen Spielern und Teammitgliedern zu verhalten. Diskriminierung, Beleidigungen, Belästigung oder toxisches Verhalten werden nicht toleriert und können zu einer Verwarnung oder einem Bann führen.
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.8 Diskriminierung</h3>
                      <p className="text-gray-300">
                        <ul className="space-y-2 mt-2">
                          Rassistische, nationalsozialistische oder diskriminierende Äußerungen, sowie sexuelle Belästigungen und/oder OOC-Beleidigungen (Out of Character)  in jeglicher Hinsicht, sind zu unterlassen.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.9 Verhalten</h3>
                      <p className="text-gray-300">
                        <ul className="space-y-2 mt-2">
                          Verhaltensweisen, die darauf abzielen, sich über Behinderungen, eine Schwangerschaft oder Krankheiten lustig zu machen, ist verboten.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.10 Modding | Trolling</h3>
                      <p className="text-gray-300">
                        <ul className="space-y-2 mt-2">
                          Modding/Hacking (Sich Spielvorteile verschaffen), sowie Trolling ist strengstens verboten und wird mit einem Community-Ausschluss bestraft.
                        </ul>
                     </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.11 Nutzungsrichtlinien für Texturpacks und Mods</h3>
                      <p className="text-gray-300">
                      <strong>Verbotene Inhalte:</strong>
                        <ul className="space-y-2 mt-2">
                          <li>Texturepacks/Mods wie NoWater, NoBush, Kill-Effekte, Tracer oder Crosshair.</li>
                          <li>Nutzung von "Gambo Grafik" zum eigenen Vorteil (z.B. beim Schießen).</li>
                         </ul> 
                          <strong>Erlaubte Inhalte:</strong>
                        <ul className="space-y-2 mt-2">
                          <li>Grafik Mods, die das Spielerlebnis aufwerten (bsp. NVE).</li>
                          <li>Realistischer Himmel.</li>
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.12 Bannumgehung</h3>
                      <p className="text-gray-300">
                        <ul className="space-y-2 mt-2">
                          Bannumgehung ist in jeglicher Art verboten und wird mit einem permanenten Community Ausschluss bestraft. Das Serverteam behält sich vor, solche Vorfälle an FiveM weiterzuleiten.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.13 Serverrestart</h3>
                      <p className="text-gray-300">
                        <ul className="space-y-2 mt-2">
                          Es dürfen 30 Minuten vor Serverrestart (Sonnenwende) keine größeren Roleplay Situationen, wie Raube angefangen werden.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.14 Server-Events</h3>
                      <p className="text-gray-300">
                        <ul className="space-y-2 mt-2">
                          Ereignisse, die während eines Server-Events stattfinden, gelten automatisch als OOC und dürfen nicht für eine RP-Situation genutzt werden. Bei Events, welche auf Discord angekündigt werden, dürfen keine Überfälle/Raube gestartet werden.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.15 Account-Weitergabe</h3>
                      <p className="text-gray-300">
                        <ul className="space-y-2 mt-2">
                          Die Weitergabe des eigenen Accounts an Dritte oder die Nutzung eines Solchen ist verboten und wird mit einem permanenten Community-Ausschluss bestraft. Besondere Umstände müssen unverzüglich dem Support mitgeteilt werden.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.16 AFK System</h3>
                      <p className="text-gray-300">
                        <ul className="space-y-2 mt-2">
                          Bei längerer Abwesenheit (ab 5 Min.) ist der Spieler dazu verpflichtet, das Logout System (/relog Der Befehl ist aus technischen Gründen zurzeit deaktiviert ) zu nutzen. Weiterhin ist die Nutzung dieser Funktion während einer aktiven Roleplay Situation untersagt und wird bei Verstoß sanktioniert.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.17 Grauzonen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y-2 mt-2">
                          Das Ausnutzen von Grauzonen im Regelwerk ist strengstens verboten.
                        </ul>
                      </p>
                  </div>
                </div>
              </div>
            </div>
                  {/* Roleplay Regeln */}
                                <div className="space-y-6">
                <h2 className="text-3xl font-semibold flex items-center gap-3">
                  <span className="bg-white/10 px-3 py-1 rounded-lg">2</span>
                  Roleplay Regeln
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* §2.1 */}
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.1 Leben schützen</h3>
                    <p className="text-gray-300">
                      Das eigene Leben ist das höchste Gut, dieses gilt es mit allen Mitteln zu schützen
                      und es nicht leichtsinnig aufs Spiel zu setzen.
                    </p>
                    <ul className="space-y mt-2">
                      <li>► Beispiel: Wird man aktiv bedroht, folgt man den Anweisungen, um zu überleben.</li>
                    </ul>
                  </div>

                  {/* §2.2 */}
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.2 Hinweise Regelwerk</h3>
                    <p className="text-gray-300">
                      Es ist absolut untersagt, im Roleplay auf Regelbrüche oder das Regelwerk hinzuweisen.
                    </p>
                  </div>
              

                   <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.3 RP-Namen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Jeder Spieler muss einen RP-Namen verwenden, der aus einem realistischen Vor- und Nachnamen besteht. Namen, die als Trollnamen gelten, sowie Namen von Personen des öffentlichen Lebens oder andere bekannte Figuren aus der realen Welt sind nicht erlaubt.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.4 Ausweise</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Eine Spieler ist dazu nicht verpflichtet, einen Ausweis zu besitzen. Das LSPD hat die Möglichkeit, den Spieler zur Identitätsfeststellung auf die Wache mitzunehmen.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.5 Soundboards</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Das Nutzen eines Soundboards ist nur erlaubt, solange es keine Personen stört oder belästigt. Das Abspielen von rassistischer Musik ist ebenso verboten, wie das Abspielen von N-Wörtern. Außerdem sind Lieder, deren Texte missverständlich interpretiert werden könnten, sowie diskriminierende oder hetzerische Aussagen enthalten verboten.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.6 Maskierung</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Eine vollständige Maskierung schließt nicht aus, dass man von seinem Gegenüber identifiziert werden kann. Bandanas, Halbmasken usw. zählen nicht als vollständige Maskierung. Es ist jedoch möglich, eine Person anhand ihrer Stimme wiederzuerkennen. Stimmenverzerrer dürfen ausschließlich in Kombination mit einer vollständigen Maskierung verwendet werden.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.7 Roleplay-Situation</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Jede Roleplay Situation muss ausgespielt werden, auch wenn diese Fehlerhaft ist. Sollte die Situation beendet sein, kann diese anschließend im Support geklärt werden, falls Fehler (Regelbrüche) aufgetreten sein sollten. Bewusstlosigkeit ist hierbei ausgeschlossen, da die Situation nicht zu Ende ist.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.8 Fahrzeuginteraktion</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Leichtes Anstoßen mit Autos ist erlaubt, jedoch sind alle darüber hinausgehenden Aktionen, wie starkes Rammen oder das Tackeln von Personen bei sehr hoher Geschwindigkeit untersagt. Dies umfasst auch das Rammen von LKW´s und deren Aufliegern. Das Befahren eines Berges ist z.B. nur mit einem geländegängigen Fahrzeug und nicht mit einem Sportwagen erlaubt.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.9 Fluchtfahrzeuge</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Während einer Flucht darf das Auto bei einem Fahrzeugwechsel nicht eingeparkt werden.Es ist jedoch erlaubt, dieses vor der Polizei zu verstecken. Die Nutzung mehrerer Fahrzeuge für eine Flucht ist möglich.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.10 Tragen von Personen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Das sinnlose Umhertragen eines Spielers ist verboten, sofern dieser nicht bewusstlos und auf direktem Weg zum Mediziner getragen wird. Beim Tragen einer Person ist das Fahren eines Fahrzeugs nicht möglich, da dafür beide Hände benötigt werden. Außerdem ist es verboten, sich selbstständig zu entcarrien, solange der tragende Spieler den Anderen nicht loslässt.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.11 Verbindungsabbruch</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Sollte es zu einer Unterbrechung des Roleplays durch z.B. einen Verbindungsabbruch kommen, ist man dazu verpflichtet, sich sofort wieder in die RP-Situation einzufinden. Sollte es nach 15 Minuten immer noch nicht möglich sein, sich wieder mit dem Server zu verbinden, muss dies dem Support gemeldet werden.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.12 Trash-Talk</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Trash-Talk sowie Leichenschändung ist nicht gestattet. Dies kann z.B. in Form von lauter Musik oder das Durchführen von Emotes auf eine Person bedeuten, nachdem man sie getötet hat.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.13 OOC-Talk</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Das Reden IC ('In Character') über OOC ('Out of Character')-Themen ist untersagt. Zweit-Charaktere haben kein Wissen und keinen Bezug zu Taten und Handlungen des Hauptcharakters und umgekehrt. Außerdem ist es verboten, dies als Bruder zu bezeichnen, da eine Person nicht 2 Familienmitglieder spielen kann.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.14 Fahrzeugdiebstahl</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Das Stehlen von Fahrzeugen ohne nachvollziehbaren RP-Hintergrund ist verboten. Das Entwenden von Inhalten aus Kofferräumen ist ohne nachvollziehbaren Grund nicht erlaubt.Der Diebstahl von Fahrzeugen der Staatsfraktionen sind nur mit einem triftigen und schlüssigen RP-Hintergrund möglich, jedoch müssen sie bei der nächsten Parkmöglichkeit gewechselt werden.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.15 Schussankündigung</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Eine Schuss Ankündigung auf die Reifen oder ein Fahrzeug gilt nicht automatisch für die Personen im Fahrzeug. Sollten diese versehentlich getroffen werden, so gilt dies nicht als eine allgemeine Schuss Ankündigung.
                        </ul>
                      </p>
                  </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.16 Kommunikationsgeräte</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          <p className="text-gray-300">
                            Während man gefesselt ist, ist die Nutzung jeglicher Kommunikationsgeräte, wie Handys oder Funkgeräte, sowie von unpassenden Emotes, nicht gestattet.
                          </p>
                        </ul>
                      </p>
                    </div>
                  </div>
              </div>

                  {/* Geiselnahmen */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-semibold flex items-center gap-3">
                    <span className="bg-white/10 px-3 py-1 rounded-lg">3</span>
                      Geiselnahmen
                  </h2>

                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                 <h3 className="text-xl font-semibold mb-3">§3.1 Geiselnahmen und Raubüberfälle</h3>
                  <p className="text-gray-300">
                    <ul className="space-y mt-2">
                       Geiselnahmen und Raubüberfälle sind dafür da, um für ein spannendes Rollenspiel zu sorgen. Good- und Bad Fraktionen müssen zusammenarbeiten. Unrealistische Forderungen wie "Sonst stirbt die Geisel" gelten als "Power-RP". Allgemein muss auf realistische und erfüllbare Forderungen geachtet werden. Beide Parteien müssen  sich einigen können. Versucht eine Partei, diesem aktiv entgegenzuwirken, gilt dies als RP-Verweigerung. Raubüberfälle dürfen nicht in der Absicht gestartet werden, eine Schießerei zu provozieren. Vereinbarungen, welche während einer Verhandlung getroffen werden, sind einzuhalten. Nach 10 Sekunden schon zu schießen oder zu pitten, ist Fail-RP.
                    </ul>
                  </p>
                </div>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.2 Staatsbeamte als Geiseln</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Staatsbeamte dürfen für Überfälle als Geiseln genommen werden, wenn es die Situation hergibt. Verhandlungsführer dürfen ebenfalls als Geisel genommen werden, jedoch ist eine anschließende Klärung im Support ausgeschlossen.
                        </ul>
                      </p>
                    </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.3 Freilassung von Geiseln</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Wenn eine Person als Geisel genommen wird, muss sie spätestens nach 20 Min. freigelassen werden, sofern innerhalb dieser Zeit kein Raub gestartet wird (Sollte die Zeit überschritten werden, kann dies bei Bedarf dem Support geklärt werden).
                        </ul>
                      </p>
                    </div>      
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.4 Fake-Geiseln</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Die Nutzung von Fake-Geiseln ist verboten. Geiseln dürfen nichts mit der Situation zu tun haben oder einer beteiligten Partei angehören. Sie müssen während der Verhandlung vor Ort und ansprechbar sein.
                        </ul>
                      </p>
                  </div>      
                 
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.5 Geiselnahmen vor dem Staatsgefängnis</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Geiselnahmen vor dem Staatsgefängnis sind ohne Ausnahme verboten. Befreiungen von Gefangenen können anderweitig und kreativ gelöst werden.
                        </ul>
                      </p>
                  </div>    
                    
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.6 Medics, Government und das DOT</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Mitarbeiter von LSMD, DOT sowie des Governments sind während ihres Dienstes unantastbar. Ausnahme: Handeln Mitarbeiter des DOT oder des Governments im Auftrag der Polizei (z.B. zur Unterstützung der Polizei bei einer Festnahme oder beim Abschleppen), dann entfällt die Unantastbarkeit. Ebenso, wenn sich der Beteiligte strafbar macht.
                        </ul>
                      </p>
                  </div> 
                </div>     

                  {/* Kommunikation */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">4</span>
                      Kommnunikation
                    </h2>

                 </div>      
                   <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§4.1 Teamspeak 3</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Die generelle Kommunikation auf unserem Server findet über TeamSpeak3 statt. Die einzige Ausnahme bildet der Support.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§4.2 Discord</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Es ist erlaubt, sich mit anderen Personen im Discord zu unterhalten, sofern diese sich nicht auf dem Server befinden und die Person sich selbst nicht in einer aktiven Situation befindet. Sollte dies der Fall sein, so muss sie sich stummschalten (full mute).
                        </ul>
                      </p>
                  </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">$4.3 Ansprechbarkeit</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Wer IC ist, muss jederzeit ansprechbar sein, sofern dieser sich nicht im Support aufhält.
                        </ul>
                      </p>
                  </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">$4.4 Mikrofon</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Um allen ein gutes und angenehmes Roleplay Ergebnis bieten zu können, ist ein vernünftiges Mikrofon mit anständiger Qualität zu nutzen.
                        </ul>
                      </p>
                  </div>      

                  {/* Definitionen */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">5</span>
                      Definitionen
                    </h2>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§5.1 VDM (Vehicle Deathmatch)</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          VDM (Vehicle Deathmatch) ist das sinnlose An- bzw. Überfahren von anderen Spielern ohne einen RP-Hintergrund. Ausnahmen bestehen, wenn dies der einzige Weg ist,durch leichtes Anfahren oder Wegschieben anderer Spieler das eigene Leben zu schützen.
                        </ul>
                      </p>
                  </div>
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§5.2 RDM (Random Deathmattch)</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          RDM (Random Deathmatch) ist das sinnlose Angreifen bzw. Töten von anderen Spielern ohne einen RP-Hintergrund.
                        </ul>
                      </p>
                  </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§5.3 Extreme RP-Handlungen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Extreme RP-Handlungen sind z.B. schwere Folter, Zerstückelung. SexRP bedeutet sexuelle Handlungen auf unserem Server.
                        </ul>
                      </p>
                  </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§5.4 Power-RP</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Power-RP ist das Aufzwingen des eigenen Roleplays, ohne der Gegenpartei eine andere Möglichkeit zu geben.
                        </ul>
                      </p>
                  </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§5.5 Fail-RP</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Fail-RP bezeichnet ein unrealistisches Verhalten in RP-Situationen.
                        </ul>
                      </p>
                  </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§5.6 Gambo Verhalten</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Gambo-Verhalten bezeichnet z.B. den übermäßigen, unverhältnismäßigen oder unnötigen Waffengebrauch und das Erschießen oder Überfahren von Spielern ohne RP-Hintergrund.
                        </ul>
                      </p>
                  </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§5.7 Trolling</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Das absichtliche Stören bzw. Nerven von anderen Spielern wird als Trolling gewertet.
                        </ul>
                      </p>
                  </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§5.8 Meta-Gaming</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Die IC-Verwendung von Informationen, die man OOC erhalten hat, nennt man Meta-Gaming.
                        </ul>
                      </p>
                  </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§5.9 Bating</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Das absichtliche Provozieren anderer Spieler, um Handlungen von ihnen zu erreichen, gilt als Baiting.
                        </ul>
                      </p>
                  </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§5.10 RP-Flucht</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          RP-Flucht ist das Flüchten während einer aktiven RP-Situation. 
                        </ul>
                      </p>
                  </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§5.11 Minja-RP</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Ninja-RP bezeichnet das Einmischen in eine Roleplay-Situation, ohne direkten Bezug zur Situation zu haben.
                        </ul>
                      </p>
                  </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§5.12 Combat-Logging</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Combat-Logging ist das Ausloggen vom Server während eines aktiven Kampfes bzw. nachdem man gestorben ist, um seine Gegenstände/Waffen nicht zu verlieren.
                        </ul>
                      </p>
                  </div>      

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§5.13 Einmischung in laufenden Situationen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          3. Partei bezeichnet das Einmischen in eine laufende RP-Situation zwischen anderen Spielern oder Gruppierungen.
                        </ul>
                      </p>
                  </div>
                </div>         

                  {/* Support */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold flex items-center gap-3">
    <span className="bg-white/10 px-3 py-1 rounded-lg">6</span>
    Support
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    {/* §6.1 */}
    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
      <h3 className="text-xl font-semibold mb-3">§6.1 Meldungen</h3>
      <p className="text-gray-300">
        Es besteht nur die Möglichkeit, einen Regelbruch innerhalb von 72 Stunden zu melden.
        Supportfälle, die nach Ablauf dieser 72 Stunden gemeldet werden, verfallen und werden nicht
        bearbeitet. Ausnahmen sind Meldungen von Bugs, Moddern oder Trollern.
      </p>
    </div>   

    {/* §6.2 */}
    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
      <h3 className="text-xl font-semibold mb-3">§6.2 Beweispflicht</h3>
      <p className="text-gray-300">
        Beweise, welche im Support gezeigt werden, müssen die wichtigen Inhalte der RP-Situation
        inklusive Ton und Stimmen beinhalten. Aufnahmen, die nicht den Kriterien entsprechen, werden
        vom leitenden Supporter abgelehnt.
      </p>
    </div>      

    {/* §6.3 */}
    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
      <h3 className="text-xl font-semibold mb-3">§6.3 Support aufsuchen</h3>
      <p className="text-gray-300">
        Der Support darf erst aufgesucht werden, nachdem die laufende Situation vollständig beendet wurde.
      </p>
    </div>      

    {/* §6.4 */}
    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
      <h3 className="text-xl font-semibold mb-3">§6.4 Aufzeichnungen</h3>
      <p className="text-gray-300">
        Gespräche im Support dürfen nur vom beteiligten Supporter selbst aufgezeichnet werden, zum Zweck
        der Beweissicherung. Verstöße können strafrechtlich verfolgt werden (§201 Abs. 1 StGB).
      </p>
    </div>      

    {/* §6.5 */}
    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
      <h3 className="text-xl font-semibold mb-3">§6.5 /Report-Befehl</h3>
      <p className="text-gray-300">
        Die Nutzung des Befehls /report (Grund) darf nur verwendet werden, wenn die Situation anders
        nicht lösbar ist oder es sich um Bugs, Modder oder Troller handelt.
      </p>
    </div>      

    {/* §6.6 */}
    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
      <h3 className="text-xl font-semibold mb-3">§6.6 Rückerstattungen</h3>
      <p className="text-gray-300">
        Rückerstattungen sind nur mit einem Beweis in Form eines Clips möglich. Aus diesem Clip mit Ton
        muss der Grund der Rückerstattung ersichtlich sein. Anträge auf Rückerstattungen sind nur bis zu
        72 Stunden nach einem Verlust möglich.
      </p>
    </div>
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§6.7 Wahrheitspflicht</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Im Support sind alle Spieler zur Wahrheit verpflichtet.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§6.8 IC-Rache</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Es ist strengstens verboten, wegen eines Supportfalls, (In Charakter) IC-Rache auszuüben.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§6.9 Aufforderung des Teams</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Fordert ein Supporter einen dazu auf, dass man sich im Support melden soll, ist dieser Anweisung schnellstmöglich nachzukommen.
                        </ul>
                      </p>
                  </div> 
                </div>
              </div>
  

                  {/* Safezonen und Gefahrenzonen */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">7</span>
                      Safezonen und Gefahrenzonen
                    </h2>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§7.1 Safezones</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                           <strong>Folgende Orte gelten als Safezones, um die Bürger zu schützen:</strong>
                           <li>Das gesamte Gelände des LSMD.</li>
                           <li>Das Gebäude des Flughafens von Los Santos.</li>
                           <li>Das staatliche Autohaus.</li>
                           <li>Das Gebäude des Governments</li>
                           <li>Das Gebäude des DOT.</li>
                           <li>Sammler, Verarbeiter und Verkäufer der legalen Routen.</li>
                           <li>Die Fahrschule von Los Santos.</li>
                           <li>Alle weiteren Orte, die auf der Ingame Karte grün markiert sind.</li>
                        </ul>
                      </p>
                  </div>  

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§7.2 Safezone Regeln</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Safezones sind Orte, die als sehr schützenswert gelten. Aus diesem Grund ist es dort nicht erlaubt, andere Spieler auszurauben, sie zu bedrohen oder zu töten. Auch ist das Verstecken in einer Zone mit dem Ziel, der anderen Partei zu entkommen, ebenfalls verboten. Außerdem ist es zu vermeiden, eine laufende Situation in eine Safezone zu verlagern, da dies unbeteiligte Spieler unnötig gefährdet. Sollte sich dennoch eine Situation mit einem triftigen Grund in eine solche Zone verlagern,so ist sie ausschließlich für die beteiligten Personen unwirksam.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§7.3 Gefahrenzonen und Regeln</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                        <strong>Folgende Orte sind sehr gefährlich und werden deshalb Gefahrenzone eingestuft In Ihnen darf ohne Vorwarnung auf Personen geschossen werden.</strong>
                          <li>Alle nicht öffentlichen Bereiche des Staatsgefängnisses.</li>
                          <li>Der Parkplatz des Police Department.</li>
                          <li>Das Gebäude des Police Department, solange sie nicht hineingelassen werden.</li>
                          <li>Die Einrichtungen der Army (Militärbasis, Flugzeugträger).</li>
                          <li>Alle weiteren Orte, welche auf der Ingame Karte rot markiert sind.</li>
                        </ul>
                      </p>
                  </div>
                </div>    

                  {/* New Life Regelung */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">8</span>
                      New Life
                    </h2>
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§8.1 New Life Regel</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Sollte ein Bürger im Krankenhaus aufwachen, weil kein Mediziner gekommen ist oder der Tod durch einen Mediziner festgestellt wurde, so darf er sich nicht mehr an die gesamte vorherige Situation erinnern, die zu seinem Tod geführt hat. Außerdem ist eine Einmischung in die noch laufende Situation verboten.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§8.2 Bewusstlosigkeit</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Informationen, die während einer Bewusstlosigkeit oder Narkose erlangt werden, dürfen nach einer Wiederbelebung nicht weiter verwendet werden. Bewusstlose Personen können sich an die Zeit während ihrer Bewusstlosigkeit nicht mehr erinnern.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§8.3 Hinrichtungen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Eine Hinrichtung gilt als finaler Tod des Charakters und muss via Ticket inkl. triftigem RP-Hintergrund beim High-Team beantragt werden. Eine Hinrichtung bedeutet die finale Löschung des Charakters durch das Serverteam im Anschluss an die Hinrichtung, welche Ingame durchgeführt wird.
                        </ul>
                      </p>
                  </div> 
                </div>  

                  {/* Medic & Police-RP  */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">9</span>
                      Medic & Police-RP
                    </h2>  

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§9.1 Medic-RP</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Sollte sich ein Spieler in Behandlung eines Mediziners befinden, so ist seinen Anweisungen folge zu leisten. Das Medic-RP muss ausgespielt werden. Außerdem ist es verboten, Mediziner an ihrer Arbeit zu hindern, um die Situation schneller zu beenden.
                        </ul>
                      </p>
                  </div> 
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§9.2 LSPD & Medics</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Werden Täter von einem Mediziner behandelt, so darf das LSPD diese erst nach Freigabe des Mediziners durchsuchen oder mit zur Wache nehmen.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§9.3 Eingriff der Medics</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Mediziner dürfen erst behandeln, wenn kein aktives Schussgefecht mehr besteht, oder sie sicher arbeiten können. Sollte erneut ein Schussgefecht ausbrechen, so muss er sich ggf. mit dem Patienten zurückziehen und auf einen sicheren Zeitpunkt warten.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§9.4 Dienstnummer</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Staatsbeamte sind verpflichtet, Ihre Dienstnummer auf Nachfrage anzugeben, wenn eine solche vorhanden ist.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§9.5 Gefahrenzonen </h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          In Gefahrenzonen darf das Police Department nach einer Warnung auf Personen schießen, die unerlaubt die Gefahrenzone betreten. Es ist verboten, daraufhin das Feuer auf die Beamten zu eröffnen und sich auf Notwehr zu beziehen.
                        </ul>
                      </p>
                  </div>
                </div>  

                  {/* Waffengewalt */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">10</span>
                      Waffengewalt
                    </h2>
  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§10.1 Waffengewalt</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Waffengewalt sollte immer die letzte mögliche Option sein! Für die Nutzung von Waffengewalt ist immer ein triftiger RP-Hintergrund erforderlich. Beleidigungen zählen nicht als triftiger Grund, um eine Schießerei zu provozieren. Zuerst sollte versucht werden, den Konflikt ohne Waffen zu lösen.
                        </ul>
                      </p>
                  </div>  
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§10.2 Schussankündigung</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Bevor eine Schuss-, Stich- oder Schlagwaffe gegen andere Spieler verwendet werden darf, ist eine schlüssige RP-Handlung erforderlich (z.B. deutliches Zielen mit einer Waffe auf einen anderen Spieler für mindestens 5 Sec.)
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§10.3 Drive-Bys</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Drive-Bys sind kein Verstoß gegen das Regelwerk! .
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§10.4 Unbeteiligte Personen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Unbeteiligte Personen, welche in ein Schussgefecht geraten, haben ihr Leben zu schützen und sich unverzüglich von der Situation zu entfernen. Sollte eine unbeteiligte Person dennoch getroffen werden, so gilt dies nicht als automatische Schuss Ankündigung.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§10.5 Bewusstlosigkeit</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Personen, welche während einer Schießerei bewusstlos geworden sind, ist es nicht gestattet, nach einer Behandlung durch den Mediziner erneut am Gefecht teilzunehmen.
                        </ul>
                      </p>
                  </div>   

                    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§10.6 Verkehrskontrollen </h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Es ist verboten, eine Verkehrskontrolle des Police Department als Grund für ein Schussgefecht zu verwenden.
                        </ul>
                      </p>
                  </div>
                </div>   

                 {/* Gruppierungen   */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">11</span>
                      Gruppierungen
                    </h2>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§11.1 Gruppierungen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Als Gruppierung gilt ein Zusammenschluss von mehreren Spielern. Diese Gruppierungen haben keinen besonderen Status und zählen als Zivilisten.
                        </ul>
                      </p>
                  </div>  
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§11.2 Gruppengröße</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Eine Gruppierung darf maximal aus “4” Personen bestehen und darf nicht mit einer Fraktion zusammen agieren.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§11.3 Einheitliche Kleidung</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Wenn die Gruppierung gemeinsam agiert, muss sie durch einheitliche Kleidung erkennbar sein. Dazu sollten mindestens zwei identische, sichtbare  Kleidungsstücke vorhanden sein.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§11.4 Konsequenzen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Verstöße gegen die Regeln, die während des gemeinsamen Handelns der Gruppe erfolgen, können Konsequenzen für alle Mitglieder dieser Gruppe nach sich ziehen.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§11.5 Vorsicht</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Zivilisten Gruppen sollten sich bewusst sein, dass Fraktionen in der Regel über eine höhere Anzahl an Mitgliedern verfügen. Es wird empfohlen, vorsichtig zu agieren und absichtliche Provokationen gegenüber den Fraktionen zu vermeiden.
                        </ul>
                      </p>
                  </div>
                </div>   

                  {/* Räube|Überfälle */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">12</span>
                      Räube|Überfälle
                    </h2>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§12.1 Überfälle</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Überfälle auf einen anderen Spieler ohne nachvollziehbaren Hintergrund und zur eigenen Bereicherung sind verboten. Überfallene Personen dürfen nicht zum Abheben von Bargeld oder der Herausgabe ihrer Nahrungsmittel gezwungen werden.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§12.2 Geiseln</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Das Leben der Geiseln hat die höchste Priorität. Die Festnahme der Täter ist dabei zweitrangig.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§12.3 Räube</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Begonnene Raube oder Überfälle müssen ausgespielt werden. Mehrfaches Starten und Abbrechen ohne Grund führt zu einer Sanktion wegen Cop-Baiting.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§12.4 Diebstahl</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Der Diebstahl von mehr als $2.500 von einem anderen Spieler ist verboten.
                        </ul>
                      </p>
                  </div>
                </div>   

                  {/* Streaming */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">13</span>
                      Streaming
                    </h2>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§13.1 Streamen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Das Streamen auf dem Server ist generell erlaubt. Jeder Streamer repräsentiert den Server und sollte sich auch entsprechend verhalten!
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§13.2 Meta und Backseat-Gaming</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Meta und Backseat-Gaming in den Chats ist durch den Streamer oder seine Mods zu unterbinden. Dies gilt auch für rassistische Bemerkungen und hetzende Kommentare.
                        </ul>
                      </p>
                  </div> 
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§13.3 Support</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Das Streamen des Support ist grundsätzlich verboten! Siehe (§6.4). Während des Supports ist der Stream zu beenden oder die Tonausgabe stummzuschalten!
                        </ul>
                      </p>
                  </div> 
                </div>  

                  {/* Blacklist Wörter  */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">14</span>
                      Blacklist Wörter
                    </h2> 

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§14.1 BLacklist Wörter</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                        <strong>Folgende Wörter dürfen auf unserem Server nicht verwendet werden, außer es passt zur RP-Situation:</strong>
                          <li>Gambo</li>
                          <li>Engel / Gott / Gummibärchen / Hinweise auf Teamler</li>
                          <li>Homophobe / nationalsozialistische / Rassistische / Frauenfeindliche / Sexistische Aussagen</li>
                          <li>Safezone / Death Zone</li>
                          <li>Hinweise auf Sanktionen (Ban / Kick / Warn)</li>
                          <li>Mikro(fon)</li>
                          <li>Aufnahme / Clip</li>
                          <li>Regelwerk / Bibel</li>
                          <li>alle weiteren Begriffe, die nicht im Roleplay zu suchen haben.</li>
                        </ul>
                      </p>
                    </div> 
                  </div>
                  
                  {/* Discord */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">15</span>
                      Discord
                    </h2>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§15.1 Informationen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Informationen aus dem Server-Discord gelten grundsätzlich als OOC. (Ausnahme ist der Informations Channel für Events).
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§15.2 Screenshots</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Das Posten von Screenshots im Discord ist nur erlaubt, solange sich dadurch nicht über andere Spieler lustig gemacht oder diese damit provoziert werden sollen.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§15.3 Fraktions-Discord</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Die Channel der einzelnen Fraktionen auf dem Fraktions Discord gelten grundsätzlich als IC. Dies bedeutet, dass dort auch nur IC geschrieben werden darf. (Ausnahme: auf Verlangen der Fraktionsmanager).
                        </ul>
                      </p>
                  </div>
                </div>   

                 {/* Sonstiges  */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">16</span>
                      Sonstiges
                    </h2>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§16.1 Fahrzeugverkauf</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Alle Angaben zu Fahrzeugen für einen Verkauf oder eine Verhandlung müssen der Wahrheit entsprechen. Das absichtliche Täuschen des Käufers ist untersagt. Dazu zählen auch Informationen zum Tuning oder der Limitierung eines Fahrzeuges.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§16.2 Echtgeldhandel</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Handel mit Echtgeld ist auf Timeless City strengstens verboten! Dies gilt für ALLE Formen des Echtgeld-Handels, egal ob IC-Items, IC-Fahrzeuge oder IC-Geld gegen Echtgeld.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§16.3 Lifeinvader | Jobads</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Bei Nutzung der Social Media Apps ist es untersagt, schwere Beleidigungen zu nutzen, sowie Rassistische Äußerungen zu tätigen
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§16.4 Kleidung am Flughafen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Die Kleidung bei Ankunft am Flughafen ist anständig zu halten. Das Verwenden von Schutzwesten, kugelsicheren Helmen oder standardmäßiger Kleidung (Schwarz/Weiß Kariert) ist nicht gestattet.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§16.5 Charakterübergreifende Tranfers</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Das Übertragen von Geld, Fahrzeugen oder Items zwischen seinen Charakteren ist in jeglicher Form verboten. Dazu zählt auch das Übertragen von Geld, Fahrzeugen oder Items mit Hilfe eines anderen Spielers.Bei Verstoß gegen diese Regel werden beide betroffenen Spieler sanktioniert!
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§16.6 Grundloses Tiertötung </h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Das grundlose Töten eines Tieres ist nicht erlaubt. Ausnahme bildet die Notwehr. Wenn eine Person von einem Tier angegriffen wird, so darf man sich gegen das angreifende Tier wehren.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§16.7 Kochen von Illegalen Substanzen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Das Kochen von illegalen Substanzen ist nur an Orten erlaubt, wo die entstehenden Dämpfe ungehindert nach oben abziehen können.
                        </ul>
                      </p>
                  </div>
                </div>   

                 {/* Fraktionsregelwerk  */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg"></span>
                      Fraktionsregelwerk
                    </h2>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.1 Fraktionshopping</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Um Fraktionshopping zu vermeiden, gelten folgende Sperrzeiten für den Austritt aus einer Fraktion: (Neutrale oder Good-Fraks = 2 Tage / illegale Fraktionen = 3 Tage).
                        </ul>
                      </p>
                  </div>  
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.2 Mitgliedschaft</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Es ist nicht erlaubt, gleichzeitig mit beiden Charakteren Mitglied einer Illegalen- und einer legalen Fraktion zu sein. Legale Fraktionen sind das LSPD, das DOT und das Government.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.3 Fraktionsverwarnungen</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Fraktionsverwarnungen können ausgesprochen werden, wenn mehrere Mitglieder einer Fraktion an Regelverstößen beteiligt sind. Sollte eine Fraktion ihre dritte Verwarnung erhalten, so wird diese Fraktion aufgelöst. In besonders schweren Fällen kann die Fraktion sofort aufgelöst werden. Die Dauer einer Fraktionsverwarnung liegt im Ermessen der Fraktionsverwaltung und wird im Fraktions Discord angekündigt.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.4 Konflikte</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Die Fraktionsverwaltung ist nicht primär dafür zuständig, Konflikte von Fraktionen zu lösen. Dies muss von den Fraktionen selbstständig gelöst werden.Möchte jemand eine Beschwerde über eine andere Fraktion einreichen, dann muss das über ein Mitglied der jeweiligen Leitung via Ticket geschehen. Beschwerden müssen mit Videobeweisen (Bild und Ton) begründet werden.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.5 Fraktionsgründung</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Es ist verboten, eine Fraktion zu gründen, die sich an real existierenden Gangs, Mafia-Organisationen oder an Gruppierungen aus Serien und Filmen orientiert. Dies umfasst sowohl die direkte Übernahme von Namen (z. B. Bloods, Crips, Sinaloa-Kartell) als auch die optische Nachbildung solcher Strukturen.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§1.6 Staatliche Mimijobs in besetzten Gebieten</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Personen, welche zur Erfüllung ihrer Aufgaben in den Staatlichen Minijobs in besetzte Gebiete von Gangs oder Maffien eindringen müssen, dürfen von diesen nicht beachtet oder ausgeraubt werden, sofern sie nicht gegen ihre Pflichten verstoßen oder sich Strafbar machen.
                        </ul>
                      </p>
                  </div> 
                </div>  

                 {/* Legale Fraktionen */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">2</span>
                      Legale Fraktionen
                    </h2>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.1 Korruption</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Leichte Korruption von Staatsfraktionen zur Informationsbeschaffung ist erlaubt. Der Umgang mit solchen Fällen ist der jeweiligen Leitung überlassen. Schwere Korruption, wie die Herausgabe von Waffen, ist verboten.
                        </ul>
                      </p>
                  </div>  
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.2 Razzien</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Razzien auf Fraktionsanwesen müssen bei den Fraktionsmanagern beantragt werden. Hierfür ist ein Antrag erforderlich, der ausreichend Beweise für eine Razzia enthält. Die Entscheidung für die Freigabe des Antrags liegt bei der Fraktionsverwaltung.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§2.3 Verfolgungsjagd</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Sollten Straftäter während einer aktiven Verfolgungsjagd auf ihr Fraktionsanwesen flüchten, dürfen die Beamten dies für maximal 15 Minuten betreten, um eine Festnahme durchzuführen. Ist kein Erfolg in Aussicht, so müssen sie das Anwesen wieder verlassen und ggf. einen Razzia-Antrag stellen.
                        </ul>
                      </p>
                  </div> 
                </div>  

                 {/* Illegale Fraktionen */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold flex items-center gap-3">
                      <span className="bg-white/10 px-3 py-1 rounded-lg">3</span>
                      Illegale Fraktionen
                    </h2>

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.1 Mitgliederzahl</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Eine illegale Fraktion darf aus maximal 10 Mitgliedern bestehen. Dies gilt auch für den Fraktionsdiscord.
                        </ul>
                      </p>
                  </div>  

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.2 Fraktionsfahrzeuge</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Eine Fraktion muss immer ihre Fraktionsfahrzeuge nutzen, wenn sie als Einheit zusammen agieren.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.3 Lager</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Der Bestand einer Fraktion muss in ihren Lagern eingelagert werden. Weiterhin ist es nicht erlaubt, Inhalte aus diesem Lager in privaten Kofferräumen oder anderen Orten zu lagern, um sie im Falle einer Razzia sicher verwahrt zu haben.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.4 Konflikte</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Konflikte oder Probleme zwischen den Fraktionen sollten vorrangig ohne Waffengewalt geklärt werden. Sollte dies nicht der Fall sein, so muss ein triftiger Grund für einen richtigen Konflikt vorliegen. (Kleine Beleidigungen oder Unfälle sind keine ausreichenden Gründe)
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.5 Hood</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Fraktionen müssen in ihrer Hood keine Schussankündigung aussprechen. Sie haben freie Schuss Möglichkeit, jedoch sollte dies immer noch die letzte Option sein. Für die beschossene Partei zählt dies nicht als Rechtfertigung, da sie selbst schuld sind,wenn sie eine fremde Hood betreten und daraufhin beschossen werden sollten.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§33.6 Stürmung</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Eine Stürmung der anderen Fraktion ist nur einmal am Tag und nur mit triftigem Grund möglich. Das Hochnehmen eines Mitgliedes ist kein ausreichender Grund. Beide Parteien müssen vorher miteinander gesprochen haben und versucht haben, eine andere Lösung zu finden.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.7 Razzia</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Während einer Razzia oder einer Stürmung ist das Ausnutzen und Verbarrikadieren im Anwesen verboten, um faire Chancen zu schaffen.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.8 Kriege</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Kriege gegen andere Fraktionen müssen bei der Fraktionsverwaltung beantragt werden. Hierfür ist ein Kriegsvertrag notwendig, welcher alle wichtigen Infos enthält. (Zeiten, Kampfzonen, etc…) Kriege gegen andere Fraktionen dürfen maximal 7 Tage dauern.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.9 Bündnisse</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Bündnisse zwischen zwei Fraktionen müssen im Support beantragt werden. Hierfür müssen beide Parteien einen Bündnisvertrag verfassen und einen legitimen RP-Hintergrund vorweisen können. Wenn das Bündnis angenommen wird. dürfen beide Fraktionen zusammen agieren, solange sie einheitlich und erkennbar sind. Bündnisse mit dem Ziel, sich gegen Staatsfraktionen zu stellen, sind jedoch verboten.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.10 Kleidung</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Die Kleidung einer Fraktion muss im Fraktionskonzept angegeben und beachtet werden. Das Agieren als Fraktion ohne Fraktionskleidung ist verboten.
                        </ul>
                      </p>
                  </div>   

                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold mb-3">§3.11 Blood-in | Blood-out</h3>
                      <p className="text-gray-300">
                        <ul className="space-y mt-2">
                          Fraktionen, welche beim Beitritt einer Fraktion einen Blood-in erteilen, dürfen ebenso ein Blood-out aussprechen und vollziehen. Dies muss der betroffenen Person vorher mitgeteilt werden und ist erst mit dem Ausbluten des Spielers wirksam.Nach einem Blood-out vergisst die Person alles, was während ihrer Zugehörigkeit passiert ist.
                        </ul>
                      </p>
                  </div> 
                </div>  
           {/* Footer */}
          <footer className="border-t border-white/10 bg-black/80 mt-24">
        <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/images/logo.png"
                alt="TimelessCity Logo"
                width={40}
                height={40}
                className="animate-pulse"
              />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  TimelessCity
                </h3>
                <p className="text-gray-400 text-sm">Next-Level Roleplay Experience</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Professionelles FiveM-Roleplay mit Fokus auf Immersion und Community
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
                Support:{' '}
                <Link href="mailto:verwaltung.timeless@gmail.com" className="hover:text-white">
                  verwaltung.timeless@gmail.com
                </Link>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div>© 2025 TimelessCity. Alle Rechte vorbehalten.</div>
            <div className="flex gap-4">
              {/* <Link href="/impressum" className="hover:text-white">Impressum</Link> */}
            </div>
          </div>
        </div>
      </footer>
   </div>
  );
}