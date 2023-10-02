import React from "react";
import { useState } from "react";

function Item({ name, category }) {


const [inCart, setinCart] = useState();

function inCartButton() {
  setinCart(!inCart);
}

const appClass = inCart ? "in-cart" : "";
const appClassCart = inCart ? "remove" : "add";

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={inCartButton} className={appClassCart} >
      {inCart ? "Remove from Cart" : "Add To Cart"}
      </button>
    </li>
  );
}

export default Item;
