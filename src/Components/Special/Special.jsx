import { useContext } from "react";
import { AssetContex } from "../Grandpa/Grandpa";

const Special = ({asset}) => {
  const gift = useContext(AssetContex);
  return (
    <div>
      <h2>Special</h2>
      <p>Has: {asset}</p>
      <p>Also has: {gift}</p>
    </div>
  );
};

export default Special;