import { useState } from "react";
import Button from "./Button";

const Alert = () => {
  const [hide, setHide] = useState(false);
  const handleHide = () => {
    setHide(true);
  };
  return (
    <div className={` ${hide&&"hidden"} fixed z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-full max-w-[700px] py-8 px-4 flex items-center justify-between   bg-primary text-white rounded-lg`}>
      <p className="font-medium text-white  text-xl font-mono">
         site is under development
      </p>
      <Button onClick={handleHide} className="bg-white !text-primary px-8 py-4 active:ring-whie hover:ring-white text-sm">
        close
      </Button>
    </div>
  );
};

export default Alert;
