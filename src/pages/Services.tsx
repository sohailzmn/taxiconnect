import React from 'react';

const Services: React.FC = () => {
  return (
    <div>
      {/* Hauptinhalt */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Unsere Dienstleistungen</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <i className="fas fa-plane-departure text-4xl text-[var(--primary-color)] mb-4"></i>
              <h2 className="text-2xl font-bold mb-4">Flughafentransfers</h2>
              <p className="mb-4">Unser Flughafentransfer bringt Sie pünktlich zum Terminal und holt Sie bei Ihrer Rückkehr wieder ab.</p>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold mb-2">Abgedeckte Flughäfen:</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Hamburg (HAM)</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Kiel (KEL)</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Hannover (HAJ)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <i className="fas fa-school text-4xl text-[var(--primary-color)] mb-4"></i>
              <h2 className="text-2xl font-bold mb-4">Schulfahrten</h2>
              <p>Zuverlässiger Schultransport-Service für Schüler*innen von erfahrenem Taxiunternehmen.</p>
              <div className="mt-4 bg-white p-4 rounded-lg">
                <p className="font-semibold">Inklusive:</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center"><i className="fas fa-child text-[var(--primary-color)] mr-2"></i>Kindersitze</li>
                  <li className="flex items-center"><i className="fas fa-clock text-[var(--primary-color)] mr-2"></i>Feste Abholzeiten</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <i className="fas fa-suitcase text-4xl text-[var(--primary-color)] mb-4"></i>
              <h2 className="text-2xl font-bold mb-4">Gepäcktransport</h2>
              <p>Mit unserem Transport-Service müssen Sie sich keine Sorgen mehr um den Transport Ihres Gepäcks machen.</p>
              <div className="mt-4 bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Umzugsunterstützung</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Großraumfahrzeuge</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <i className="fas fa-map-marked-alt text-4xl text-[var(--primary-color)] mb-4"></i>
              <h2 className="text-2xl font-bold mb-4">Stadtrundfahrten</h2>
              <p>Entdecken Sie die schönsten Orte und Sehenswürdigkeiten in Neumünster mit unseren Stadtrundfahrten!</p>
              <div className="mt-4 bg-white p-4 rounded-lg">
                <p className="font-semibold">Highlights:</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center"><i className="fas fa-university text-[var(--primary-color)] mr-2"></i>Stadtmuseum</li>
                  <li className="flex items-center"><i className="fas fa-paw text-[var(--primary-color)] mr-2"></i>Tierpark</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <i className="fas fa-subway text-4xl text-[var(--primary-color)] mb-4"></i>
              <h2 className="text-2xl font-bold mb-4">Ersatzverkehr</h2>
              <p>Als Taxiunternehmen bieten wir Ihnen einen zuverlässigen Ersatzverkehr für den öffentlichen Nahverkehr.</p>
              <div className="mt-4 bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>24h Verfügbarkeit</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Gruppentransporte</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <i className="fas fa-shopping-cart text-4xl text-[var(--primary-color)] mb-4"></i>
              <h2 className="text-2xl font-bold mb-4">Einkaufsfahrten</h2>
              <p>Wir bieten einen zuverlässigen Lebensmittellieferservice für Kunden in Neumünster an.</p>
              <div className="mt-4 bg-white p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Supermarkt-Lieferung</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Apotheken-Boten</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Preise</h2>
            <p className="text-xl text-gray-600">Faire und transparente Preisgestaltung</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
              <h3 className="text-2xl font-bold mb-2">Stadtfahrten</h3>
              <div className="text-4xl font-bold text-[var(--primary-color)] my-6">ab €3,80</div>
              <p className="text-gray-600 mb-6">Grundpreis für Fahrten innerhalb von Neumünster</p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Grundgebühr: €3,80</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Pro Kilometer: €2,20</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Wartezeit/Minute: €0,50</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[var(--primary-color)] relative text-center transform scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--primary-color)] text-white px-4 py-1 rounded-full text-sm font-bold">
                Beliebt
              </div>
              <h3 className="text-2xl font-bold mb-2">Flughafentransfer</h3>
              <div className="text-4xl font-bold text-[var(--primary-color)] my-6">€89</div>
              <p className="text-gray-600 mb-6">Festpreis für Fahrten zum Flughafen Hamburg</p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Festpreis ohne Aufschläge</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>30 Minuten Wartezeit inklusive</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Gepäcktransport inklusive</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>24/7 Verfügbarkeit</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
              <h3 className="text-2xl font-bold mb-2">Sonderfahrten</h3>
              <div className="text-4xl font-bold text-[var(--primary-color)] my-6">Individuell</div>
              <p className="text-gray-600 mb-6">Maßgeschneiderte Angebote für besondere Anforderungen</p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Großraumtaxi-Zuschlag: €5</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Fahrradtransport: €4</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Individuelles Angebot für Events</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Alle Preise inkl. MwSt. Preisänderungen vorbehalten. Individuelle Angebote für Unternehmen und Daueraufträge möglich.
            </p>
            <button className="bg-[var(--primary-color)] text-white px-8 py-3 rounded-full hover:bg-[var(--secondary-color)] transition-colors inline-flex items-center">
              <i className="fas fa-calculator mr-2"></i>
              Preisanfrage stellen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 