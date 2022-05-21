import React from "react";
import Item from "./items/Item";
import woman from "../../images/illustration-woman-desktop.svg"
import shapes from "../../images/bg-pattern-desktop.svg"
import cube from "../../images/illustration-box-desktop.svg"
import s from "./Card.module.css";

function Card() {

  return(
    <section className={s.card}>
      <section className={s.img_cont}>
         {/* <img className={s.shapes} src={shapes}/> */}
         <img className={s.woman} src={woman}/>
         {/* <img className={s.cube} src={cube}/> */}
      </section>
      <Item />
    </section>
  )
}

export default Card;