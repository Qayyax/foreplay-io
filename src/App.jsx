// import { useState } from "react";

import { useState } from "react";
import Wardrobe from "./components/Wardrobe";

const assets = [
  {
    id: 1,
    asset: "Glasses",
  },
  {
    id: 2,
    asset: "Bags",
  },
  {
    id: 3,
    asset: "Shoe",
  },
];
function App() {
  const [closet, setCloset] = useState(assets);
  const [suitcase, setSuitcase] = useState([]);

  const getItem = (id, arr) => {
    return arr.filter((item) => item.id === id)[0];
  };

  const removeCloset = (id) => {
    setCloset((prev) => prev.filter((item) => item.id !== id));
    setSuitcase((prev) => [...prev, getItem(id, assets)]);
  };

  const removeSuitCase = (id) => {
    setSuitcase((prev) => prev.filter((item) => item.id !== id));
    setCloset((prev) => [...prev, getItem(id, assets)]);
  };

  return (
    <div className="flex gap-4 items-start justify-center mt-[30px]">
      <Wardrobe wardName="closet" arr={closet} handleMove={removeCloset} />
      <Wardrobe
        wardName="Suitcase"
        arr={suitcase}
        handleMove={removeSuitCase}
      />
    </div>
  );
}

export default App;
