import React from "react";
import PrintQuote from "./print-quote";
import "./styles.scss";

export default function ShowQuote({ randomQuote }) {
  return (
    <div className="container">
      <PrintQuote randomQuote={randomQuote} />
    </div>
  );
}
