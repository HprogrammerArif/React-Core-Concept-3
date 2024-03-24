import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContex = createContext('Gold');
export const MoneyContex = createContext(1000);

const Grandpa = () => {
  const asset = 'Diamond';
  const [money, setMoney] = useState(1000);
  return (
    
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Net Money: {money}</p>

      <MoneyContex.Provider value={[money, setMoney]}>
      <AssetContex.Provider value="Gold">
      <section className="flex">
      <Dad asset={asset}></Dad>
      <Uncle asset={asset}></Uncle>
      <Aunty></Aunty>
      </section>
      </AssetContex.Provider>
      </MoneyContex.Provider>

    </div>
  );
};

export default Grandpa;

/**
 * 1: Creat a contex and export it
 * 2. Add provider for the contex with a value. Value could be anything
 * 3. useContex to access value in the contex API.
 */