import { Form } from "./components/Form";
import { LikeCounter } from "./components/likeCounter";
import { Plot } from "./components/Plot";

function App() {
  return (
    <>
      <h1>Gwiezdne wojny</h1>
      <h2>Rok produkcji: 1980</h2>
      <LikeCounter />
      <Plot />
      <Form />
    </>
  );
}

export default App;
