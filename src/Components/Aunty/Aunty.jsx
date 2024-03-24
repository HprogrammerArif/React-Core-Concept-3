import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContex } from "../Grandpa/Grandpa";


const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContex)
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={'Rubayet'}></Cousin>
        <Cousin name={'Fariya'}></Cousin>
      </section>
      <p>Money: {money} </p>
      <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
    </div>
  );
};

export default Aunty;