import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <section className="py-16 bg-white" id="uber-uns">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Über TAXI Connect</h1>
            <p className="text-xl text-gray-600">Ihr zuverlässiger Partner seit 2005</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Unsere Geschichte</h2>
              <p>Begonnen als Familienunternehmen mit 3 Fahrzeugen, sind wir heute der führende Taxianbieter in Neumünster. Unsere Mission ist es, sichere und komfortable Transportlösungen für alle Bürger anzubieten.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Unsere Werte</h2>
              <ul className="list-disc pl-6">
                <li>Zuverlässigkeit</li>
                <li>Kundenorientierung</li>
                <li>Umweltbewusstsein</li>
                <li>Innovation</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              {/* Placeholder for image */}
              <div className="bg-gray-300 h-64 rounded-lg mb-6 flex items-center justify-center">
                <i className="fas fa-users text-5xl text-gray-500"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Das Team</h3>
              <p>20 professionelle Fahrer mit durchschnittlich 10 Jahren Erfahrung stehen Ihnen rund um die Uhr zur Verfügung.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Führungsebene</h2>
            <p className="text-xl text-gray-600">Das Team hinter TAXI Connect</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="inline-block rounded-full bg-gray-300 w-32 h-32 mb-6 overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <i className="fas fa-user text-4xl text-gray-500"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Max Mustermann</h3>
              <p className="text-gray-600 mb-4">Geschäftsführer</p>
              <p className="text-gray-600">Seit 2005 leitet Max das Unternehmen mit Leidenschaft und Vision.</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="inline-block rounded-full bg-gray-300 w-32 h-32 mb-6 overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <i className="fas fa-user text-4xl text-gray-500"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Anna Schmidt</h3>
              <p className="text-gray-600 mb-4">Flottenmanagerin</p>
              <p className="text-gray-600">Anna sorgt für den einwandfreien Zustand unserer Fahrzeuge.</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="inline-block rounded-full bg-gray-300 w-32 h-32 mb-6 overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <i className="fas fa-user text-4xl text-gray-500"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Thomas Wagner</h3>
              <p className="text-gray-600 mb-4">Kundenservice-Leiter</p>
              <p className="text-gray-600">Thomas ist für die Zufriedenheit unserer Kunden verantwortlich.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Erfolge</h2>
            <p className="text-xl text-gray-600">Was uns auszeichnet</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">18</div>
              <p className="text-gray-600">Jahre Erfahrung</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">20+</div>
              <p className="text-gray-600">Professionelle Fahrer</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">15</div>
              <p className="text-gray-600">Moderne Fahrzeuge</p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">10.000+</div>
              <p className="text-gray-600">Zufriedene Kunden</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 