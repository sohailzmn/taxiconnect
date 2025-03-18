import React from 'react';

const Imprint: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Impressum</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-md space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-1 text-gray-700">
              <p>TAXI Connect GmbH</p>
              <p>Rosenstraße 123</p>
              <p>24534 Neumünster</p>
              <p>Deutschland</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Kontakt</h2>
            <div className="space-y-2 text-gray-700">
              <p>Telefon: +49 156 78421380</p>
              <p>E-Mail: info@taxi-connect.de</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Vertretungsberechtigte</h2>
            <div className="space-y-1 text-gray-700">
              <p>Geschäftsführer: Max Mustermann</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Registereintrag</h2>
            <div className="space-y-1 text-gray-700">
              <p>Eintragung im Handelsregister</p>
              <p>Registergericht: Amtsgericht Neumünster</p>
              <p>Registernummer: HRB 12345</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Umsatzsteuer-ID</h2>
            <div className="space-y-1 text-gray-700">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p>DE123456789</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Aufsichtsbehörde</h2>
            <div className="space-y-1 text-gray-700">
              <p>Zuständige Aufsichtsbehörde für den Taxibetrieb:</p>
              <p>Stadt Neumünster - Ordnungsamt</p>
              <p>Großflecken 59</p>
              <p>24534 Neumünster</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Streitschlichtung</h2>
            <p className="text-gray-600">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:underline ml-1">https://ec.europa.eu/consumers/odr/</a>
            </p>
            <p className="mt-2 text-gray-600">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Haftung für Inhalte</h2>
            <p className="text-gray-600">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen 
              zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-2 text-gray-600">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Haftung für Links</h2>
            <p className="text-gray-600">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum 
              Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mt-2 text-gray-600">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Urheberrecht</h2>
            <p className="text-gray-600">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
              nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-2 text-gray-600">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
              Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung 
              aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir 
              derartige Inhalte umgehend entfernen.
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

export default Imprint; 