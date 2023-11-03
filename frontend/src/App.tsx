import { useState } from "react";
import Button from "./components/ui/Button";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  return (
    <main className="flex bg-gray-800 w-full justify-center items-center min-h-screen ">
      <div className="flex flex-col gap-2 items-center">
        <Button onClick={handleIncrement}>+</Button>
        <span className="font-bold text-gray-100 text-xl ">{count}</span>
        <button
          className=" text-white px-4 py-2 font-medium rounded-lg cursor-pointer bg-blue-500 hover:ring-1 hover:ring-blue-500 active:ring-2 active:ring-blue-500"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </main>
  );
}

export default App;
