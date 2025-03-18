import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Contact: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Marker-Icon-Problem beheben
    const DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    // Initialisiere die Karte, wenn die Komponente gemountet wird
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([54.0693, 9.9889], 14); // Koordinaten für Neumünster

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Marker für den Standort hinzufügen
      const marker = L.marker([54.0693, 9.9889]).addTo(map);
      marker.bindPopup('<strong>TAXI Connect</strong><br>Rosenstraße 123<br>24534 Neumünster').openPopup();

      // Cleanup-Funktion
      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold mb-8">Kontaktieren Sie uns</h1>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2"><i className="fas fa-map-marker-alt mr-2"></i>Adresse</h3>
                  <p>Rosenstraße 123<br />24534 Neumünster</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2"><i className="fas fa-phone mr-2"></i>Telefon</h3>
                  <a href="tel:+4915678421380" className="text-gray-700 hover:text-[var(--primary-color)] no-underline">+49 156 78421380</a>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2"><i className="fas fa-envelope mr-2"></i>E-Mail</h3>
                  <a href="mailto:info@taxi-connect.de" className="text-gray-700 hover:text-[var(--primary-color)] no-underline">info@taxi-connect.de</a>
                </div>
              </div>

              {/* Map Section (Active) */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Standort</h3>
                <div 
                  ref={mapRef} 
                  className="h-64 rounded-lg border border-gray-300" 
                  style={{ minHeight: '300px' }}
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Schnellanfrage</h2>
              <form action="https://formspree.io/f/xldgnpvr" method="POST" className="space-y-4">
                <input type="text" name="name" placeholder="Ihr Name" className="w-full p-3 border rounded-lg" required />
                <input type="email" name="email" placeholder="Ihre E-Mail" className="w-full p-3 border rounded-lg" required />
                <textarea name="message" rows={4} placeholder="Ihre Nachricht" className="w-full p-3 border rounded-lg" required></textarea>
                <button type="submit" className="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg hover:bg-[var(--secondary-color)] transition-colors">
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Unsere Öffnungszeiten</h2>
            <p className="text-gray-600">Wir sind rund um die Uhr für Sie da</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <i className="fas fa-calendar-alt mr-2 text-[var(--primary-color)]"></i>
                Telefonische Buchung
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Montag - Freitag</span>
                  <span className="font-semibold">00:00 - 24:00 Uhr</span>
                </li>
                <li className="flex justify-between">
                  <span>Samstag</span>
                  <span className="font-semibold">00:00 - 24:00 Uhr</span>
                </li>
                <li className="flex justify-between">
                  <span>Sonntag & Feiertage</span>
                  <span className="font-semibold">00:00 - 24:00 Uhr</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <i className="fas fa-building mr-2 text-[var(--primary-color)]"></i>
                Bürozeiten
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Montag - Freitag</span>
                  <span className="font-semibold">08:00 - 18:00 Uhr</span>
                </li>
                <li className="flex justify-between">
                  <span>Samstag</span>
                  <span className="font-semibold">09:00 - 14:00 Uhr</span>
                </li>
                <li className="flex justify-between">
                  <span>Sonntag & Feiertage</span>
                  <span className="font-semibold">Geschlossen</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-[var(--primary-color)] text-white px-6 py-3 rounded-full">
              <i className="fas fa-info-circle mr-2"></i>
              Notfallfahrten sind rund um die Uhr möglich!
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 