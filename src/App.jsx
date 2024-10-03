import useMousePosition from "./components/updateMousePosition";

function App() {
  const { x, y } = useMousePosition();

  return (
    <div>
      <h1>Pozycja kursora</h1>
      <p>
        X: {x}, Y: {y}
      </p>
    </div>
  );
}

export default App;
