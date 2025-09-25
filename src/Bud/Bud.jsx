import React from 'react';

export default function BudSpencerEvent() {
  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 p-8 rounded-lg shadow-2xl font-sans relative overflow-hidden">
      {/* Autumn leaves decoration */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <div className="w-8 h-8 text-orange-500 transform rotate-12">🍂</div>
        <div className="w-6 h-6 text-red-500 transform -rotate-12">🍁</div>
        <div className="w-7 h-7 text-amber-600 transform rotate-45">🍂</div>
      </div>
      
      <div className="absolute bottom-4 left-4 flex space-x-2 opacity-50">
        <div className="w-6 h-6 text-orange-400 transform -rotate-12">🍁</div>
        <div className="w-5 h-5 text-red-400 transform rotate-45">🍂</div>
      </div>

      {/* Header with Bud Spencer illustration */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-2" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
            SERATA
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
            BUD SPENCER
          </h2>
        </div>
        
        {/* Bud Spencer character illustration */}
        <div className="relative ml-4">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <div className="text-6xl">👊</div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-lg">
            😄
          </div>
        </div>
      </div>

      {/* Date section */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-4 rounded-lg mb-6 shadow-lg">
        <div className="text-center">
          <div className="text-yellow-300 text-lg font-semibold mb-1">VENERDÌ</div>
          <div className="flex items-center justify-center">
            <div className="text-6xl font-bold mr-4">10</div>
            <div className="text-right text-sm">
              <div>OTTOBRE</div>
              <div>2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu section */}
      <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-6 rounded-lg mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">MENU' UNICO SU</h3>
            <h3 className="text-xl font-bold">PRENOTAZIONE</h3>
          </div>
          <div className="text-4xl font-bold">€ 23</div>
        </div>
      </div>

      {/* Menu details */}
      <div className="mb-6 text-gray-700">
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-orange-600 mr-2">•</span>
            <span><strong>SPAGHETTI alla BUD SPENCER</strong><br />
            <span className="text-sm text-gray-600">(con polpette)</span></span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-2">•</span>
            <span><strong>FAGIOLI alla BUD con SALSICCIA</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-2">•</span>
            <span><strong>BIRRA ARTIGIANALE</strong></span>
          </li>
        </ul>
      </div>

      {/* Children menu */}
      <div className="mb-6 bg-yellow-100 p-4 rounded-lg">
        <h4 className="font-bold text-gray-800 mb-2">MENU' BAMBINI €10</h4>
        <p className="text-gray-700">POLPETTE con PATATINE + BIBITA</p>
      </div>

      {/* Timeline */}
      <div className="mb-6 space-y-3">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></div>
          <div className="text-yellow-600 font-bold text-xl mr-4">19:45</div>
          <div className="text-gray-700">INIZIO CENA SU PRENOTAZIONE</div>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></div>
          <div className="text-yellow-600 font-bold text-xl mr-4">21:30</div>
          <div className="text-gray-700 flex items-center">
            INTRATTENIMENTO MUSICALE AL 
            <span className="ml-2 text-pink-500 font-bold italic">Chiosco</span>
            <span className="ml-1 text-cyan-500 font-bold text-2xl">TIO TAO</span>
          </div>
        </div>
      </div>

      {/* Reservations */}
      <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg">
        <div className="flex items-center justify-center text-center">
          <div className="w-8 h-8 mr-3 text-2xl">🍁</div>
          <div className="text-gray-800">
            <span className="font-bold">PRENOTAZIONI al 338 5644469</span>
            <div className="text-sm mt-1">dal lunedì al venerdì, dalle 17:00 alle 19:00</div>
          </div>
        </div>
      </div>
    </div>
  );
}