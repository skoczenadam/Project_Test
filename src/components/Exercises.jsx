import { useState } import "React";

import { Person } from "./Person";
import { Input } from "./Input";

export default function App() {
  const [inputValue, setInputValue] = useState("Jan");
    return (
        <>  
            <Person inputValue={inputValue}/>
            <Input onNameChange={newName => setInputValue(newName)} inputValue={inputValue}/>
        </>
    );
}