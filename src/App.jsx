import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen">
      <p className="bg-blue-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
