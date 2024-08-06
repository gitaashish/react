import React, { useState } from 'react';
import { ImPlus, ImMinus } from "react-icons/im";
import SubscribePop from "../component/popup/subscribePop"; 

import "./apparel.css";

const Apparel = () => {
  const [value, setValue] = useState(0);

  const plus = () => {
    setValue(value + 1);
  };

  const minus = () => {
    setValue(value > 0 ? value - 1 : 0); 
  };

  return (
    <>
      <section className='apparel_sec'>
        <div className="container">
          <div className="head_sec"><h1>Apparel</h1></div>
          <div className="quantity_row">
            <div className="quantity_col">
              <span className="quantity_btn minus" onClick={minus}><ImMinus /></span>
              <input type="number" value={value} readOnly />
              <span className="quantity_btn plus" onClick={plus}><ImPlus /></span>
            </div>
          </div>
        </div>
      </section>

      <SubscribePop title="Heading"> {/* Corrected the casing for SubscribePop */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe accusamus quam possimus recusandae atque.</p>
      </SubscribePop>
    </>
  );
};

export default Apparel;
