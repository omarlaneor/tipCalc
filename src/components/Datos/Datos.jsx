import React, { useState } from "react";
import Resultados from "../Resultados/Resultados";
import "../Datos/Datos.css";

export default function Datos({ billAmount, cambio, cambioPorcentaje }) {
  const [customPercentage, setCustomPercentage] = useState("");
  const [people, setPeople] = useState(1);

  const cambioManualLocal = (e) => {
    const value = e.target.value || "0";
    cambio(value);
  };

  const botonClic = (percentage) => {
    cambioPorcentaje(percentage);
    aplicarPorcentaje(percentage);
  };

  const aplicarPorcentaje = (percentage) => {
    const cuentaPorcentaje = billAmount;
    cambio(cuentaPorcentaje);
  };

  const customBox = (e) => {
    const customPercentageValue = e.target.value;
    setCustomPercentage(customPercentageValue);
    aplicarPorcentaje(customPercentageValue);
  };

  const handlePeopleChange = (e) => {
    setPeople(e.target.value);
  };

  return (
    <section class="general-wrapper">
      <div class="data-wrapper">
        <h1>Bill</h1>
        <label for="input-bill">
          <input
            className="input-bill"
            id="input-bill"
            type="number"
            value={billAmount}
            min="0"
            onChange={cambioManualLocal}
          />
        </label>
        <h2>Select Tip %</h2>
        <ul>
          <li id="percentage-5">
            <button
              type="button"
              class="percentage-button-calc"
              value="5"
              onClick={() => botonClic(5)}
            >
              5%
            </button>
          </li>
          <li id="percentage-10">
            <button
              type="button"
              class="percentage-button-calc"
              value="10"
              onClick={() => botonClic(10)}
            >
              10%
            </button>
          </li>
          <li id="percentage-15">
            <button
              type="button"
              class="percentage-button-calc"
              value="15"
              onClick={() => botonClic(15)}
            >
              15%
            </button>
          </li>
          <li id="percentage-25">
            <button
              type="button"
              class="percentage-button-calc"
              value="25"
              onClick={() => botonClic(25)}
            >
              25%
            </button>
          </li>
          <li id="percentage-50">
            <button
              type="button"
              class="percentage-button-calc"
              value="50"
              onClick={() => botonClic(50)}
            >
              50%
            </button>
          </li>
          <li>
            <input
              type="number"
              placeholder="Custom"
              id="custom-percentage-button"
              className="percentage-button-calc"
              value={customPercentage}
              onChange={customBox}
            />
          </li>
        </ul>
        <h2>Number of People</h2>
        <label for="input-people">
          <input
            id="input-people"
            className="input-people"
            type="number"
            value={people}
            min="1"
            onChange={handlePeopleChange}
          />
        </label>
      </div>
    </section>
  );
}
