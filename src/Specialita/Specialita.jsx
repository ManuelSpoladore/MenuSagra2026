import React from "react";
import baccala from "../assets/Piatti/baccala.jpg";
import frico from "../assets/Piatti/Frico.png";
import capriolo from "../assets/Piatti/Capriolo.jpg";
import gnocchi from "../assets/Piatti/gnocchi.jpg";
import trippe from "../assets/Piatti/trippe.jpg";
import lumache from "../assets/Piatti/Lumache.jpg";

export default function Specialita() {
  return (
    <div className="mx-4 mt-10 md:px-[100px]">
      <h2 className="text-4xl md:text-5xl mb-8 ">Specialità</h2>

      {/* Contenitore responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Piatto 1 */}
        <div className="relative w-full aspect-[370/530] overflow-hidden rounded-4xl shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={baccala}
            alt="Baccalà"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-4 left-4 text-white text-3xl  hover:scale-105 transition-transform duration-300">
            <p className="text-3xl">Baccalà</p>
          </div>
        </div>

        {/* Piatto 2 */}
        <div className="relative w-full aspect-[370/530] overflow-hidden rounded-4xl shadow-lg  hover:scale-105 transition-transform duration-300">
          <img
            src={lumache}
            alt="Baccalà"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-4 left-4 text-white text-lg font-semibold hover:scale-105 transition-transform duration-300">
            Lumache con polenta
          </div>
        </div>

        {/* Piatto 3 */}
        <div className="relative w-full aspect-[370/530] overflow-hidden rounded-4xl shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={capriolo}
            alt="Baccalà"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-4 left-4 text-white text-lg font-semibold hover:scale-105 transition-transform duration-300">
            Capriolo con polenta
          </div>
        </div>

        {/* Piatto 4 */}
        <div className="relative w-full aspect-[370/530] overflow-hidden rounded-4xl shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={frico}
            alt="Baccalà"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-4 left-4 text-white text-lg font-semibold hover:scale-105 transition-transform duration-300">
            Frico con polenta
          </div>
        </div>
        {/* Piatto 5 */}
        <div className="relative w-full aspect-[370/530] overflow-hidden rounded-4xl shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={gnocchi}
            alt="Baccalà"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-4 left-4 text-white text-lg font-semibold hover:scale-105 transition-transform duration-300">
            Gnocchi con sugo di capriolo
          </div>
        </div>
        {/* Piatto 6 */}
        <div className="relative w-full aspect-[370/530] overflow-hidden rounded-4xl shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={trippe}
            alt="Baccalà"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-4 left-4 text-white text-lg font-semibold hover:scale-105 transition-transform duration-300">
            Trippe
          </div>
        </div>
      </div>
    </div>
  );
}
