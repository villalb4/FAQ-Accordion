import React from "react";
import Accordion from "../Accordion/Accordion";
import s from "./Item.module.css";

function Item() {
  return(
    <section className={s.Item}>
      <h1>FAQ</h1>
      <Accordion />
    </section>
  )
}

export default Item;