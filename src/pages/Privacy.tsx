import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Datenschutzerklärung</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-md space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">1. Einleitung</h2>
            <p className="text-gray-600">
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. 
              In dieser Datenschutzerklärung informieren wir Sie darüber, wie wir Ihre Daten verarbeiten und welche Rechte Sie haben.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">2. Verantwortliche Stelle</h2>
            <p className="text-gray-600">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="mt-4 pl-4 border-l-4 border-gray-200">
              <p className="text-gray-700">TAXI Connect GmbH</p>
              <p className="text-gray-700">Rosenstraße 123</p>
              <p className="text-gray-700">24534 Neumünster</p>
              <p className="text-gray-700">E-Mail: info@taxi-connect.de</p>
              <p className="text-gray-700">Telefon: +49 156 78421380</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">3. Erfassung von Daten</h2>
            <p className="text-gray-600">
              Beim Besuch unserer Website werden automatisch Informationen von Ihrem Gerät erfasst. 
              Diese Informationen umfassen:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Informationen über Ihren Browser und Ihr Betriebssystem</li>
              <li>Websites, von denen Ihr System auf unsere Website gelangt</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Wir erfassen diese Daten auf Grundlage unseres berechtigten Interesses, die Stabilität und Funktionalität unserer Website zu gewährleisten.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">4. Cookies</h2>
            <p className="text-gray-600">
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die in Ihrem Browser gespeichert werden. 
              Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p className="mt-4 text-gray-600">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies 
              nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie 
              das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">5. Kontaktformular</h2>
            <p className="text-gray-600">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">6. Buchungsformular</h2>
            <p className="text-gray-600">
              Die über das Buchungsformular eingegebenen Daten werden ausschließlich für die Bearbeitung Ihrer 
              Buchungsanfrage verwendet. Wir speichern diese Daten, um Ihnen einen optimalen Service bieten zu können.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">7. Ihre Rechte</h2>
            <p className="text-gray-600">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
              gespeicherten personenbezogenen Daten zu erhalten. Zudem haben Sie ein Recht auf Berichtigung, 
              Sperrung oder Löschung dieser Daten.
            </p>
            <p className="mt-4 text-gray-600">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum 
              angegebenen Adresse an uns wenden.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">8. Änderung der Datenschutzerklärung</h2>
            <p className="text-gray-600">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
              rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung 
              umzusetzen, z.B. bei der Einführung neuer Services.
            </p>
            <p className="mt-4 text-gray-600">
              Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">9. Kontakt</h2>
            <p className="text-gray-600">
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, 
              Berichtigung, Sperrung oder Löschung von Daten kontaktieren Sie uns bitte über die im Impressum 
              genannten Kontaktmöglichkeiten.
            </p>
          </section>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Stand: März 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 