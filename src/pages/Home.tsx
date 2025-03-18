import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { PriceCalculator } from '../components';

const Home: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  // State für Formular
  const [formStatus, setFormStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Adresssuggestions
  const [abholSuggestions, setAbholSuggestions] = useState<any[]>([]);
  const [zielSuggestions, setZielSuggestions] = useState<any[]>([]);
  const [showAbholSuggestions, setShowAbholSuggestions] = useState<boolean>(false);
  const [showZielSuggestions, setShowZielSuggestions] = useState<boolean>(false);

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
    
    if (mapRef.current) {
      // Karte initialisieren
      const map = L.map(mapRef.current).setView([54.07, 9.99], 12);

      // OpenStreetMap Tile Layer
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);

      // Servicegebiet als rotes Polygon
      const serviceArea = L.polygon([
        [54.15, 9.8],  
        [54.15, 10.2], 
        [54.0, 10.2],  
        [54.0, 9.8]    
      ], {
        color: '#e53e3e',
        weight: 3,
        opacity: 0.8,
        fillColor: '#e53e3e',
        fillOpacity: 0.2
      }).addTo(map);

      // Flughafen Hamburg Bereich
      const airportArea = L.polygon([
        [53.635, 9.975],  // NW
        [53.635, 10.0],   // NO
        [53.625, 10.0],   // SO
        [53.625, 9.975]   // SW
      ], {
        color: '#dc2626',
        weight: 2,
        opacity: 0.9,
        fillColor: '#ef4444',
        fillOpacity: 0.3
      }).addTo(map).bindPopup('Flughafen Hamburg<br>Sonderzone');

      // Zoom-Kontrolle hinzufügen
      L.control.zoom({
        position: 'topright'
      }).addTo(map);

      // Cleanup bei unmount
      return () => {
        map.remove();
      };
    }
  }, []);
  
  // Formular absenden
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus('');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xldgnpvr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        form.reset();
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Fehler beim Senden des Formulars:', error);
      setFormStatus('error');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Adressvorschläge suchen
  const searchAddressSuggestions = async (query: string, setSuggestions: React.Dispatch<React.SetStateAction<any[]>>) => {
    if (query.trim().length < 3) {
      setSuggestions([]);
      return;
    }
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5&countrycodes=de`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Fehler bei der Adresssuche:', error);
      setSuggestions([]);
    }
  };
  
  // Debounce für Adresssuche
  useEffect(() => {
    const abholInput = document.getElementById('abholadresse') as HTMLInputElement;
    const zielInput = document.getElementById('zieladresse') as HTMLInputElement;
    
    if (abholInput && zielInput) {
      const abholDebounce = setTimeout(() => {
        if (abholInput.value) {
          searchAddressSuggestions(abholInput.value, setAbholSuggestions);
        }
      }, 300);
      
      const zielDebounce = setTimeout(() => {
        if (zielInput.value) {
          searchAddressSuggestions(zielInput.value, setZielSuggestions);
        }
      }, 300);
      
      return () => {
        clearTimeout(abholDebounce);
        clearTimeout(zielDebounce);
      };
    }
  }, []);
  
  // Schließen der Vorschläge bei Klick außerhalb
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const abholSuggestionsDiv = document.getElementById('abholadresse-suggestions');
      const zielSuggestionsDiv = document.getElementById('zieladresse-suggestions');
      const abholInput = document.getElementById('abholadresse');
      const zielInput = document.getElementById('zieladresse');
      
      if (abholSuggestionsDiv && abholInput && !abholInput.contains(e.target as Node) && !abholSuggestionsDiv.contains(e.target as Node)) {
        setShowAbholSuggestions(false);
      }
      
      if (zielSuggestionsDiv && zielInput && !zielInput.contains(e.target as Node) && !zielSuggestionsDiv.contains(e.target as Node)) {
        setShowZielSuggestions(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Premium Taxiservice in Neumünster
              </h1>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <i className="fas fa-check-circle mr-3 text-xl"></i>
                  <span>24/7 Sofortverfügbarkeit</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-euro-sign mr-3 text-xl"></i>
                  <span>Transparente Festpreise</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-leaf mr-3 text-xl"></i>
                  <span>Klimaneutrale Fahrten</span>
                </div>
              </div>
              <div className="bg-white rounded-full p-2 max-w-md flex items-center pulse-animation">
                <i className="fas fa-phone-volume text-[var(--primary-color)] text-2xl ml-4"></i>
                <a href="tel:+4915678421380" className="text-2xl font-bold text-gray-800 ml-4 no-underline">+49 156 78421380</a>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="md:w-1/2 mt-12 md:mt-0 md:pl-16">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Jetzt Fahrt buchen</h3>
                <form className="space-y-4" onSubmit={handleSubmit} method="POST">
                  <div className="relative">
                    <input 
                      type="text" 
                      name="abholadresse" 
                      id="abholadresse"
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] text-gray-800"
                      placeholder="Abholadresse"
                      autoComplete="off"
                      required
                      onChange={() => setShowAbholSuggestions(true)}
                      onFocus={() => setShowAbholSuggestions(true)}
                    />
                    {showAbholSuggestions && abholSuggestions.length > 0 && (
                      <div id="abholadresse-suggestions" className="absolute z-50 w-full bg-white shadow-lg rounded-b-lg max-h-48 overflow-y-auto">
                        {abholSuggestions.map((suggestion, index) => {
                          const addressParts = suggestion.display_name.split(',');
                          const street = addressParts[0];
                          const rest = addressParts.slice(1).join(', ');
                          return (
                            <div 
                              key={index}
                              className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
                              onClick={() => {
                                const input = document.getElementById('abholadresse') as HTMLInputElement;
                                if (input) {
                                  input.value = suggestion.display_name;
                                  setShowAbholSuggestions(false);
                                }
                              }}
                            >
                              <div className="font-medium">
                                <span className="text-base font-bold text-gray-800">
                                  {street}
                                </span>{' '}
                                <span className="text-gray-500">
                                  {rest}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="zieladresse" 
                      id="zieladresse"
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] text-gray-800"
                      placeholder="Zieladresse"
                      autoComplete="off"
                      required
                      onChange={() => setShowZielSuggestions(true)}
                      onFocus={() => setShowZielSuggestions(true)}
                    />
                    {showZielSuggestions && zielSuggestions.length > 0 && (
                      <div id="zieladresse-suggestions" className="absolute z-50 w-full bg-white shadow-lg rounded-b-lg max-h-48 overflow-y-auto">
                        {zielSuggestions.map((suggestion, index) => {
                          const addressParts = suggestion.display_name.split(',');
                          const street = addressParts[0];
                          const rest = addressParts.slice(1).join(', ');
                          return (
                            <div 
                              key={index}
                              className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
                              onClick={() => {
                                const input = document.getElementById('zieladresse') as HTMLInputElement;
                                if (input) {
                                  input.value = suggestion.display_name;
                                  setShowZielSuggestions(false);
                                }
                              }}
                            >
                              <div className="font-medium">
                                <span className="text-base font-bold text-gray-800">
                                  {street}
                                </span>{' '}
                                <span className="text-gray-500">
                                  {rest}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="date" 
                        name="datum" 
                        id="datum"
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] text-gray-800"
                        required
                      />
                    </div>
                    <div>
                      <input 
                        type="time" 
                        name="uhrzeit" 
                        id="uhrzeit"
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] text-gray-800"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email" 
                      id="email"
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] text-gray-800"
                      placeholder="E-Mail"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      name="telefon" 
                      id="telefon"
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] text-gray-800"
                      placeholder="Telefonnummer"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3 px-6 bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold rounded-lg transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Wird gesendet...' : 'Jetzt buchen'}
                  </button>
                  
                  {formStatus === 'success' && (
                    <div className="mt-3 p-3 bg-green-100 text-green-700 rounded-lg">
                      Ihre Buchung wurde erfolgreich abgesendet. Wir werden uns schnellstmöglich bei Ihnen melden.
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="mt-3 p-3 bg-red-100 text-red-700 rounded-lg">
                      Es gab ein Problem beim Absenden Ihrer Buchung. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Warum TAXI Connect wählen?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir bieten mehr als nur Fahrten von A nach B - erleben Sie den Unterschied mit unserem Premium-Service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center feature-card">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-6">
                <i className="fas fa-clock text-3xl text-[var(--primary-color)]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Verfügbarkeit</h3>
              <p className="text-gray-600">
                Egal ob Tag oder Nacht - wir sind immer für Sie da, wenn Sie uns brauchen.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center feature-card">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-6">
                <i className="fas fa-euro-sign text-3xl text-[var(--primary-color)]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparente Preise</h3>
              <p className="text-gray-600">
                Keine versteckten Kosten. Wir bieten faire und transparente Preise für alle Fahrten.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center feature-card">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-6">
                <i className="fas fa-car text-3xl text-[var(--primary-color)]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Komfortable Fahrzeuge</h3>
              <p className="text-gray-600">
                Moderne und gepflegte Fahrzeuge für ein angenehmes Fahrerlebnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section - NEU */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie unsere erstklassigen Dienstleistungen für ein komfortables Fahrerlebnis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-[var(--primary-color)] text-4xl mb-4">
                <i className="fas fa-plane-departure"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Flughafentransfer</h3>
              <p className="text-gray-600">
                Zuverlässige Transfers zu allen Flughäfen in der Region mit Gepäckservice.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-[var(--primary-color)] text-4xl mb-4">
                <i className="fas fa-business-time"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Business Service</h3>
              <p className="text-gray-600">
                Corporate Accounts mit Vorzugsbehandlung für Geschäftsreisende.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-[var(--primary-color)] text-4xl mb-4">
                <i className="fas fa-glass-cheers"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Event Service</h3>
              <p className="text-gray-600">
                Spezialangebote für Hochzeiten, Junggesellenabschiede und private Feiern.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-[var(--primary-color)] text-4xl mb-4">
                <i className="fas fa-wheelchair"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Barrierefreiheit</h3>
              <p className="text-gray-600">
                Behindertengerechte Fahrzeuge mit Rollstuhlrampe und extra Platz.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/dienstleistungen" className="inline-flex items-center px-6 py-3 bg-[var(--primary-color)] text-white rounded-full hover:bg-[var(--secondary-color)] transition-colors no-underline">
              <span>Alle Services entdecken</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section - NEU */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Tarifoptionen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparente und faire Preise für alle Ihre Fahrten.
            </p>
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
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[var(--primary-color)] relative text-center transform scale-105 z-10">
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
            <Link to="/dienstleistungen" className="inline-flex items-center px-6 py-3 bg-[var(--primary-color)] text-white rounded-full hover:bg-[var(--secondary-color)] transition-colors no-underline">
              <i className="fas fa-calculator mr-2"></i>
              <span>Alle Preise ansehen</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Price Calculator Section - NEU */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fahrpreis berechnen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berechnen Sie schnell und einfach den ungefähren Preis für Ihre Fahrt
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-lg">
              <PriceCalculator />
            </div>
            
            <div className="lg:col-span-2 bg-gray-50 p-8 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">Unsere Tarifstruktur</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">Grundpreis</span>
                    <span className="font-semibold">€3,80</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">Kilometerpreis</span>
                    <span className="font-semibold">€2,20/km</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">Wartezeit</span>
                    <span className="font-semibold">€0,50/min</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">Nachtfahrten (22-6 Uhr)</span>
                    <span className="font-semibold">+10%</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-medium">Großraumtaxi</span>
                    <span className="font-semibold">+€5,00</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  Dieser Rechner liefert eine Schätzung. Der endgültige Preis kann je nach Verkehr und aktuellen Tarifen variieren.
                </p>
                <Link to="/dienstleistungen" className="text-[var(--primary-color)] font-medium flex items-center no-underline">
                  <span>Mehr über unsere Tarife erfahren</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map Section - NEU */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Einsatzgebiete</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir sind in Neumünster und der gesamten Umgebung für Sie unterwegs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              {/* Leaflet Karte */}
              <div 
                ref={mapRef} 
                className="h-[400px] rounded-xl w-full shadow-lg overflow-hidden flex-grow"
              ></div>
              <p className="mt-4 text-sm text-gray-500">
                Servicegebiet Neumünster & Umland | 
                <a 
                  href="https://www.openstreetmap.org/#map=12/54.07/9.99" 
                  className="text-[var(--primary-color)] ml-1 no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Größere Karte anzeigen
                </a>
              </p>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md h-full">
                <h3 className="text-xl font-bold mb-4">Unser Servicegebiet umfasst:</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <i className="fas fa-map-pin text-[var(--primary-color)] mt-1 mr-3"></i>
                    <div>
                      <span className="font-semibold">Neumünster Stadt</span>
                      <p className="text-sm text-gray-600">Komplettes Stadtgebiet mit allen Stadtteilen</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-map-pin text-[var(--primary-color)] mt-1 mr-3"></i>
                    <div>
                      <span className="font-semibold">Kreis Segeberg</span>
                      <p className="text-sm text-gray-600">Bad Segeberg, Kaltenkirchen, Wahlstedt</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-map-pin text-[var(--primary-color)] mt-1 mr-3"></i>
                    <div>
                      <span className="font-semibold">Kreis Rendsburg-Eckernförde</span>
                      <p className="text-sm text-gray-600">Rendsburg, Büdelsdorf, Eckernförde</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-map-pin text-[var(--primary-color)] mt-1 mr-3"></i>
                    <div>
                      <span className="font-semibold">Kreis Plön</span>
                      <p className="text-sm text-gray-600">Plön, Preetz, Lütjenburg</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-map-pin text-[var(--primary-color)] mt-1 mr-3"></i>
                    <div>
                      <span className="font-semibold">Flughafentransfers</span>
                      <p className="text-sm text-gray-600">Hamburg, Kiel, Lübeck und Hannover</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    Fahrtanfragen außerhalb unseres Servicegebiets werden individuell geprüft. Kontaktieren Sie uns für ein Angebot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--primary-color)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für Ihre nächste Fahrt?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Buchen Sie jetzt Ihr Taxi und erleben Sie unseren erstklassigen Service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+4915678421380" className="bg-white text-[var(--primary-color)] hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center no-underline">
              <i className="fas fa-phone-alt mr-2"></i>
              Jetzt anrufen
            </a>
            <Link to="/kontakt" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--primary-color)] px-8 py-3 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center no-underline">
              <i className="fas fa-envelope mr-2"></i>
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 