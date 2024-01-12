import React from "react";
import "../Resultados/Resultados.css";

export default function Resultados({
  billAmount,
  onReset,
  botonPorcentaje,
  people,
}) {
  const tipAmount = (parseFloat(billAmount) * botonPorcentaje) / 100 / people;
  const totalAmount =
    (parseFloat(billAmount) +
      (parseFloat(billAmount) * botonPorcentaje) / 100) /
    people;

  return (
    <div>
      <div class="result-wrapper">
        <div class="result-txt">
          <div class="text-amount">
            <div>
              <h2>Tip Amount</h2>
              <p>/ person</p>
            </div>
            <h3>
              $<span id="tip-amount">{tipAmount}</span>
            </h3>
          </div>
          <div class="total-amount">
            <div>
              <h2>Total</h2>
              <p>/ person</p>
            </div>
            <h3>
              $<span id="total">{totalAmount}</span>
            </h3>
          </div>
        </div>
        <button
          type="button"
          id="reset-button"
          class="reset-button"
          onClick={onReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
