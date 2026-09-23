import React from "react";

export default function Date() {
  return (
    <div className="mx-4 mr-4 mt-6 md:mx-50 md:mt-10 border-b-4">
      {/* Titolo "Quando?" sempre in alto su mobile */}
      <div className="flex items-center justify-center pt-4 lg:hidden">
        <h2 className="text-[35px] font-semibold">Quando?</h2>
      </div>

      <div className="flex flex-col gap-4 p-4 lg:flex-row lg:justify-around lg:gap-0 lg:p-0">
        {/* Primo div Quando? - solo desktop */}
        <div className="hidden lg:flex items-center justify-center ">
          <h2 className="text-[35px]">Quando?</h2>
        </div>

        {/* Div Venerdì */}
        <div className="bg-orange-400 rounded-2xl w-fit mx-auto lg:w-auto lg:mx-0 border-4 border-white text-white">
          <p className="pl-10 pt-3">Venerdì</p>
          <div className="flex items-center">
            <p className="text-[50px] pl-10">9</p>
            <span
              className="inline-block pl-6 pb-4"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              Ottobre 2026
            </span>
          </div>
        </div>

        {/* Div Sabato */}
        <div className="bg-orange-400 rounded-2xl w-fit mx-auto lg:w-auto lg:mx-0 border-4 border-white text-white">
          <p className="pl-10 pt-3">Sabato</p>
          <div className="flex items-center">
            <p className="text-[50px] pl-10">10</p>
            <span
              className="inline-block pl-6 pb-4 "
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              Ottobre 2026
            </span>
          </div>
        </div>

        {/* Div Domenica */}
        <div className="bg-orange-400 rounded-2xl w-fit mx-auto lg:w-auto lg:mx-0 border-4 border-white text-white">
          <p className="pl-10 pt-3">Domenica</p>
          <div className="flex items-center">
            <p className="text-[50px] pl-10">11</p>
            <span
              className="inline-block pl-6 pb-4"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              Ottobre 2026
            </span>
          </div>
        </div>
      </div>
      <div className="text-center p-4">
        <h2>Ligugnana, Via Vittorio Veneto 27</h2>
      </div>
    </div>
  );
}
