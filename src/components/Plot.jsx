import { useState } from "react";

export function Plot() {
  const [showAlert, setShowAlert] = useState(true);
  const [showPlot, setShowPlot] = useState(false);

  function alertHandler() {
    setShowAlert(false);
  }
  function plotHandler() {
    setShowPlot(true);
    setShowAlert(false);
  }
  return (
    <>
      <h1>Fabuła</h1>
      {showAlert && (
        <h3>
          Uwaga! Opis fabuły zawiera spojlery!
          <button onClick={alertHandler}>X</button>
        </h3>
      )}
      <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe</p>
      <button onClick={plotHandler}>Pokaż spojler</button>
      {showPlot && <p>Luke okazuje się być ojcem Dark Vejdera</p>}
    </>
  );
}
