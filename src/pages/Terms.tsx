import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-md space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">1. Geltungsbereich</h2>
            <p className="text-gray-600">
              Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Geschäftsbeziehung zwischen dem Kunden und der TAXI Connect GmbH, 
              Rosenstraße 123, 24534 Neumünster (nachfolgend "TAXI Connect" genannt) für die Inanspruchnahme von Taxidienstleistungen. 
              Mit der Buchung einer Fahrt erkennt der Kunde diese AGB an.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">2. Vertragsschluss</h2>
            <p className="text-gray-600">
              Der Beförderungsvertrag kommt zustande, wenn der Kunde eine Buchung vornimmt und TAXI Connect diese Buchung bestätigt. 
              Die Buchung kann telefonisch, über die Website, per E-Mail oder direkt vor Ort erfolgen.
            </p>
            <p className="mt-2 text-gray-600">
              Bei Online-Buchungen über die Website erhält der Kunde eine Bestätigung per E-Mail. 
              Der Vertrag kommt erst mit Zugang dieser Bestätigungsmail zustande.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">3. Leistungsumfang</h2>
            <p className="text-gray-600">
              TAXI Connect verpflichtet sich, den Kunden vom vereinbarten Abholort zum vereinbarten Zielort zu befördern. 
              Die Beförderung erfolgt im Rahmen der Verfügbarkeit und der geltenden Verkehrsregeln.
            </p>
            <p className="mt-2 text-gray-600">
              Bei der Buchung sind folgende Angaben erforderlich:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Abholadresse</li>
              <li>Zieladresse</li>
              <li>Datum und Uhrzeit der gewünschten Abholung</li>
              <li>Kontaktdaten (Name, Telefonnummer)</li>
              <li>Ggf. besondere Anforderungen (z.B. Großraumtaxi, Kindersitz)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">4. Preise und Zahlung</h2>
            <p className="text-gray-600">
              Die Preisberechnung erfolgt gemäß der aktuellen Preisliste von TAXI Connect bzw. nach den gesetzlich festgelegten Taxitarifen.
            </p>
            <p className="mt-2 text-gray-600">
              Für bestimmte Strecken können Festpreise vereinbart werden. Diese werden vor Fahrtantritt mitgeteilt und gelten nur für die
              vereinbarte Route ohne Umwege oder Zwischenstopps.
            </p>
            <p className="mt-2 text-gray-600">
              Die Zahlung erfolgt in bar, per EC-Karte oder Kreditkarte direkt beim Fahrer nach Beendigung der Fahrt,
              sofern nicht ausdrücklich eine andere Zahlungsweise vereinbart wurde.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">5. Stornierung und Verspätung</h2>
            <p className="text-gray-600">
              Stornierungen von gebuchten Fahrten sind bis zu 1 Stunde vor dem vereinbarten Abholzeitpunkt kostenlos möglich.
              Bei späteren Stornierungen kann eine Gebühr in Höhe von 50% des vereinbarten Fahrpreises, mindestens jedoch 10 Euro, erhoben werden.
            </p>
            <p className="mt-2 text-gray-600">
              Erscheint der Kunde nicht zum vereinbarten Zeitpunkt am Abholort, wird bis zu 10 Minuten gewartet.
              Danach gilt die Fahrt als storniert, und es kann eine Ausfallgebühr berechnet werden.
            </p>
            <p className="mt-2 text-gray-600">
              Bei Verspätungen des Taxis wird der Kunde telefonisch informiert. Bei Verspätungen von mehr als 15 Minuten
              hat der Kunde das Recht, vom Vertrag zurückzutreten, ohne dass ihm Kosten entstehen.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">6. Haftung</h2>
            <p className="text-gray-600">
              TAXI Connect haftet nach den gesetzlichen Bestimmungen für Schäden an Leben, Körper und Gesundheit, die auf einer
              fahrlässigen oder vorsätzlichen Pflichtverletzung beruhen.
            </p>
            <p className="mt-2 text-gray-600">
              Für Gepäckschäden haftet TAXI Connect nur bei Vorsatz oder grober Fahrlässigkeit. Die Haftung ist begrenzt auf 1.000 Euro pro Gepäckstück.
            </p>
            <p className="mt-2 text-gray-600">
              Für Verspätungen aufgrund höherer Gewalt, wie z.B. extreme Wetterbedingungen, Staus oder behördliche Anordnungen, wird keine Haftung übernommen.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">7. Datenschutz</h2>
            <p className="text-gray-600">
              Personenbezogene Daten werden nur zum Zweck der Vertragsabwicklung erhoben und verarbeitet.
              Weitere Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">8. Schlussbestimmungen</h2>
            <p className="text-gray-600">
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Erfüllungsort und Gerichtsstand ist, 
              soweit gesetzlich zulässig, Neumünster.
            </p>
            <p className="mt-2 text-gray-600">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.
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

export default Terms; 