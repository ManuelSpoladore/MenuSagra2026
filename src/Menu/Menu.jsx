import React from "react";
import pollo from "../assets/Piatti/pollo.jpg";
import capriolo from "../assets/Piatti/Capriolo.jpg";
import frico from "../assets/Piatti/Frico.png";
import torta from "../assets/Piatti/torta.jpg";
import vino from "../assets/Piatti/vino.jpg";




export default function Menu() {
  return (
    <div className="mx-4 mt-10 p-10 md:mx-[100px]">
      <h2 className="text-4xl md:text-5xl mb-8">Menù</h2>

      {/* Sezione Primi */}
      <div className="mb-8">
        <h3 className="text-2xl mb-4">Primi</h3>
        <div className="flex flex-col md:flex-row items-stretch md:gap-5">
          {/* Elenco Primi */}
          <ul className="flex-1 list-none pl-0 space-y-8 md:order-2 uppercase">
            <li>
              Gnocchi di patate al sugo di capriolo (con o senza formaggio)
            </li>
            <li>Gnocchi di patate al burro e salvia</li>
            <li>Gnocchi al pomodoro (con o senza formaggio)</li>
            <li>Capriolo con polenta</li>
            <li>Lumache con polenta</li>
            <li>Baccalà con polenta</li>
            <li>Trippe (con o senza formaggio)</li>
          </ul>

          {/* Immagine */}
          <img
            src={capriolo}
            alt="Capriolo con polenta"
            className="w-full max-w-[400px] max-h-[500px] object-cover rounded-2xl md:order-1 "
          />
        </div>
      </div>

      {/* Sezione Secondi */}
      <div className="mb-8">
        <h3 className="text-2xl mb-4">Secondi</h3>
        <div className="flex flex-col md:flex-row items-stretch gap-5">
          {/* Elenco Secondi */}
          <ul className="flex-1 list-none pl-0  space-y-8 md:order-1 uppercase">
            <li>Misto salsiccia-pollo con polenta</li>
            <li>Pollo con polenta</li>
            <li>Salsiccia con polenta</li>
            <li>Bistecchine con polenta</li>
            <li>Panino Hamburger o Hot Dog</li>
          </ul>

          {/* Immagine */}
          <img
            src={pollo}
            alt="Pollo alla griglia"
            className="w-full max-w-[400px] max-h-[500px] object-cover rounded-2xl md:order-2"
          />
        </div>

        {/* Sezione Contorni */}
        <div className="mb-8">
          <h3 className="text-2xl mb-4">Contorni</h3>
          <div className="flex flex-col md:flex-row items-stretch gap-5">
            {/* Elenco Contorni */}
            <ul className="flex-1 list-none space-y-8 md:order-2 uppercase">
              <li>Funghi misto bosco con porcini e polenta</li>
              <li>Frico con polenta</li>
              <li>Patatine fritte</li>
            </ul>

            {/* Immagine */}
            <img
              src={frico}
              alt="Frico"
              className="w-full max-w-[400px] max-h-[500px] object-cover rounded-2xl md:order-1"
            />
          </div>
        </div>

        {/* Sezione Dolci */}
        <div className="mb-8">
          <h3 className="text-2xl mb-4">Dolci</h3>
          <div className="flex flex-col md:flex-row items-stretch gap-5">
            {/* Elenco Dolci */}
            <ul className="flex-1 list-none space-y-8 md:order-1 uppercase">
              <li>Torta di Frutta</li>
              <li>Torta di mandorle</li>
            </ul>

            {/* Immagine */}
            <img
              src={torta}
              alt="Torta di frutta"
              className="w-full max-w-[400px] max-h-[500px] object-cover rounded-2xl md:order-2"
            />
          </div>
        </div>

        {/* Sezione Bevande */}
        <div className="mb-8">
          <h3 className="text-2xl mb-4">Bevande</h3>
          <div className="flex flex-col md:flex-row items-stretch gap-5">
            {/* Elenco Bevande */}
            <ul className="flex-1 list-none space-y-8 md:order-2 uppercase">
              <li>Bicchiere di vino Merlot o Friulano o Cabernet</li>
              <li>Quartino di vino cabaret</li>
              <li>Quartino di vino Merlot o Friulano</li>
              <li>Bottiglia di vino Merlot o Friulano</li>
              <li>Bottiglia di vino Cabernet / Ribolla Gialla</li>
              <li>Bottiglia di Prosecco</li>
              <li>Bicchiere di prosecco</li>
              <li>Coca Cola / Fanta</li>
              <li>Birra alla spina</li>
              <li>Acqua minerale/naturale da 1/2 litro</li>
              <li>Caffè</li>
              <li>Sorbetto</li>
            </ul>

            {/* Immagine */}
            <img
              src={vino}
              alt="Calice di vino"
              className="w-full max-w-[400px] max-h-[500px] object-cover rounded-2xl md:order-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
