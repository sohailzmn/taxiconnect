import React, { useState, useEffect, useRef } from 'react';

interface AddressSuggestion {
  id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
}

// Liste der vordefinierten Adressen für Demo
const PREDEFINED_LOCATIONS = [
  {
    id: '1',
    name: 'Neumünster Hauptbahnhof',
    address: 'Bahnhofstraße 1, 24534 Neumünster',
    lat: 54.0718,
    lon: 9.9804
  },
  {
    id: '2',
    name: 'Flughafen Hamburg',
    address: 'Flughafenstraße 1-3, 22335 Hamburg',
    lat: 53.6304,
    lon: 10.0067
  },
  {
    id: '3',
    name: 'Kiel Hauptbahnhof',
    address: 'Kaistraße 1, 24114 Kiel',
    lat: 54.3153,
    lon: 10.1337
  },
  {
    id: '4',
    name: 'Lübeck Hauptbahnhof',
    address: 'Am Bahnhof 4, 23558 Lübeck',
    lat: 53.8690,
    lon: 10.6787
  },
  {
    id: '5',
    name: 'Schleswig Dom',
    address: 'Domziegelhof 1, 24837 Schleswig',
    lat: 54.5144,
    lon: 9.5626
  },
  {
    id: '6',
    name: 'Holstentherme Neumünster',
    address: 'Wittorfer Straße 138, 24539 Neumünster',
    lat: 54.0756,
    lon: 9.9926
  },
  {
    id: '7',
    name: 'Outlet Neumünster',
    address: 'Oderstraße 10, 24539 Neumünster',
    lat: 54.0645,
    lon: 9.9826
  }
];

const PriceCalculator: React.FC = () => {
  // Eingabefelder
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [distance, setDistance] = useState<number>(1);
  const [waitingTime, setWaitingTime] = useState<number>(0);
  const [isNightTime, setIsNightTime] = useState<boolean>(false);
  const [isLargeCar, setIsLargeCar] = useState<boolean>(false);
  const [extraLuggage, setExtraLuggage] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  
  // Adressvorschläge
  const [originSuggestions, setOriginSuggestions] = useState<AddressSuggestion[]>([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<AddressSuggestion[]>([]);
  const [showOriginSuggestions, setShowOriginSuggestions] = useState<boolean>(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState<boolean>(false);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Koordinaten
  const [originCoords, setOriginCoords] = useState<[number, number] | null>(null);
  const [destinationCoords, setDestinationCoords] = useState<[number, number] | null>(null);

  // Refs für die Adresseingabefelder
  const originInputRef = useRef<HTMLInputElement>(null);
  const destinationInputRef = useRef<HTMLInputElement>(null);

  // Tarifkonstanten
  const BASE_PRICE = 3.80;
  const PRICE_PER_KM = 2.20;
  const PRICE_PER_MINUTE = 0.50;
  const NIGHT_SURCHARGE = 0.10; // 10%
  const LARGE_CAR_SURCHARGE = 5.00;
  const EXTRA_LUGGAGE_SURCHARGE = 3.00;

  // Funktion zum Filtern von Adressvorschlägen aus vordefinierten Orten
  const searchAddressSuggestions = (query: string, setResults: React.Dispatch<React.SetStateAction<AddressSuggestion[]>>) => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filteredResults = PREDEFINED_LOCATIONS.filter(
      location => 
        location.name.toLowerCase().includes(lowerQuery) || 
        location.address.toLowerCase().includes(lowerQuery)
    );
    
    setResults(filteredResults);
  };

  // Funktion zum Berechnen der Entfernung
  const calculateDistance = () => {
    if (!originCoords || !destinationCoords) {
      setErrorMessage('Bitte geben Sie gültige Start- und Zieladressen ein.');
      return;
    }
    
    setIsCalculating(true);
    setErrorMessage('');

    try {
      // Berechnung der Luftlinie in km
      const R = 6371; // Erdradius in Kilometern
      const dLat = (destinationCoords[0] - originCoords[0]) * Math.PI / 180;
      const dLon = (destinationCoords[1] - originCoords[1]) * Math.PI / 180;
      const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(originCoords[0] * Math.PI / 180) * Math.cos(destinationCoords[0] * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const straightLineDistance = R * c;
      
      // Faktor für realistische Straßenentfernung
      const roadFactor = 1.3;
      
      // Kalkulation der geschätzten Straßenentfernung
      const estimatedRoadDistance = straightLineDistance * roadFactor;
      setDistance(Math.round(estimatedRoadDistance * 10) / 10);
    } catch (error) {
      console.error('Fehler bei der Entfernungsberechnung:', error);
      setErrorMessage('Es gab ein Problem bei der Entfernungsberechnung. Bitte versuchen Sie es erneut.');
    } finally {
      setIsCalculating(false);
    }
  };

  // Effekt für die Adresssuche
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (origin) {
        searchAddressSuggestions(origin, setOriginSuggestions);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [origin]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (destination) {
        searchAddressSuggestions(destination, setDestinationSuggestions);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [destination]);

  // Effekt für die Preisberechnung
  useEffect(() => {
    let price = BASE_PRICE + (distance * PRICE_PER_KM) + (waitingTime * PRICE_PER_MINUTE);
    
    if (isNightTime) {
      price += price * NIGHT_SURCHARGE;
    }
    
    if (isLargeCar) {
      price += LARGE_CAR_SURCHARGE;
    }
    
    if (extraLuggage) {
      price += EXTRA_LUGGAGE_SURCHARGE;
    }
    
    setTotalPrice(Math.round(price * 100) / 100);
  }, [distance, waitingTime, isNightTime, isLargeCar, extraLuggage]);

  // Effekt für die Entfernungsberechnung, wenn beide Koordinaten vorhanden sind
  useEffect(() => {
    if (originCoords && destinationCoords) {
      calculateDistance();
    }
  }, [originCoords, destinationCoords]);

  // Klick außerhalb der Vorschläge schließt diese
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (originInputRef.current && !originInputRef.current.contains(event.target as Node)) {
        setShowOriginSuggestions(false);
      }
      if (destinationInputRef.current && !destinationInputRef.current.contains(event.target as Node)) {
        setShowDestinationSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Fahrpreis-Rechner</h3>
      
      <div className="space-y-6">
        {/* Startadresse */}
        <div className="relative">
          <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">
            Startadresse
          </label>
          <div className="relative">
            <input 
              type="text" 
              id="origin" 
              ref={originInputRef}
              value={origin} 
              onChange={(e) => {
                setOrigin(e.target.value);
                setShowOriginSuggestions(true);
              }}
              onFocus={() => setShowOriginSuggestions(true)}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] text-gray-800"
              placeholder="z.B. Rosenstraße 123, Neumünster"
            />
            {origin.length > 0 && (
              <button 
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setOrigin('');
                  setOriginCoords(null);
                  setOriginSuggestions([]);
                }}
              >
                <i className="fas fa-times-circle"></i>
              </button>
            )}
          </div>
          {showOriginSuggestions && originSuggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-auto">
              {originSuggestions.map(suggestion => (
                <li 
                  key={suggestion.id} 
                  className="p-2 hover:bg-gray-100 cursor-pointer text-sm border-b border-gray-100 last:border-b-0"
                  onClick={() => {
                    setOrigin(suggestion.address);
                    setOriginCoords([suggestion.lat, suggestion.lon]);
                    setShowOriginSuggestions(false);
                  }}
                >
                  <div className="font-medium">{suggestion.name}</div>
                  <div className="text-gray-600 text-xs">{suggestion.address}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Zieladresse */}
        <div className="relative">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
            Zieladresse
          </label>
          <div className="relative">
            <input 
              type="text" 
              id="destination" 
              ref={destinationInputRef}
              value={destination} 
              onChange={(e) => {
                setDestination(e.target.value);
                setShowDestinationSuggestions(true);
              }}
              onFocus={() => setShowDestinationSuggestions(true)}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] text-gray-800"
              placeholder="z.B. Flughafen Hamburg"
            />
            {destination.length > 0 && (
              <button 
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setDestination('');
                  setDestinationCoords(null);
                  setDestinationSuggestions([]);
                }}
              >
                <i className="fas fa-times-circle"></i>
              </button>
            )}
          </div>
          {showDestinationSuggestions && destinationSuggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-auto">
              {destinationSuggestions.map(suggestion => (
                <li 
                  key={suggestion.id} 
                  className="p-2 hover:bg-gray-100 cursor-pointer text-sm border-b border-gray-100 last:border-b-0"
                  onClick={() => {
                    setDestination(suggestion.address);
                    setDestinationCoords([suggestion.lat, suggestion.lon]);
                    setShowDestinationSuggestions(false);
                  }}
                >
                  <div className="font-medium">{suggestion.name}</div>
                  <div className="text-gray-600 text-xs">{suggestion.address}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Berechnete Entfernung */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Entfernung:</span>
            {isCalculating ? (
              <span className="text-sm font-medium text-gray-500">Berechne...</span>
            ) : (
              <span className="text-lg font-bold text-gray-800">{distance.toFixed(1)} km</span>
            )}
          </div>
          {errorMessage && (
            <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
          )}
        </div>
        
        {/* Wartezeit */}
        <div>
          <label htmlFor="waitingTime" className="block text-sm font-medium text-gray-700 mb-1">
            Wartezeit (in Minuten)
          </label>
          <div className="flex items-center">
            <input 
              type="range" 
              id="waitingTime" 
              min="0" 
              max="60" 
              step="5" 
              value={waitingTime} 
              onChange={(e) => setWaitingTime(Number(e.target.value))}
              className="w-full mr-4"
            />
            <span className="text-gray-900 font-medium min-w-[60px]">{waitingTime} min</span>
          </div>
        </div>
        
        {/* Zusatzoptionen */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700">Zusatzoptionen</p>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="nightTime" 
              checked={isNightTime} 
              onChange={(e) => setIsNightTime(e.target.checked)}
              className="h-4 w-4 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
            />
            <label htmlFor="nightTime" className="ml-2 text-sm text-gray-700">
              Nachtfahrt (22:00 - 06:00 Uhr)
            </label>
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="largeCar" 
              checked={isLargeCar} 
              onChange={(e) => setIsLargeCar(e.target.checked)}
              className="h-4 w-4 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
            />
            <label htmlFor="largeCar" className="ml-2 text-sm text-gray-700">
              Großraumtaxi (bis zu 8 Personen)
            </label>
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="extraLuggage" 
              checked={extraLuggage} 
              onChange={(e) => setExtraLuggage(e.target.checked)}
              className="h-4 w-4 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
            />
            <label htmlFor="extraLuggage" className="ml-2 text-sm text-gray-700">
              Zusätzliches Gepäck/Sperrgut
            </label>
          </div>
        </div>
      </div>
      
      {/* Ergebnisanzeige */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Geschätzter Fahrpreis:</span>
          <span className="text-2xl font-bold text-[var(--primary-color)]">€{totalPrice.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Diese Berechnung ist ein Schätzwert. Der endgültige Preis kann variieren.
        </p>
      </div>
      
      <div className="mt-6 flex justify-center">
        <a 
          href="tel:+4915678421380" 
          className="inline-flex items-center px-6 py-3 bg-[var(--primary-color)] text-white rounded-full hover:bg-[var(--secondary-color)] transition-colors no-underline"
        >
          <i className="fas fa-phone-alt mr-2"></i>
          <span>Jetzt Taxi bestellen</span>
        </a>
      </div>
    </div>
  );
};

export default PriceCalculator; 