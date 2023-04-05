import React from "react";
import "./styles.scss";

export default function PrintQuote({ randomQuote }) {
  return (
    <>
      <center className="center">
        <h1 style={{ color: "green" }}>Quote</h1>
        <h3></h3>
        <div class="card" style={{ width: "300px", textAlign: "center" }}>
          <div
            class="card-divider"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            {randomQuote?.content}
          </div>
          <div
            class="card-section"
            style={{ display: "flex", marginLeft: "40px" }}
          >
            <label style={{ marginTop: "20px" }} className='author'>Author: </label>
            <h4 style={{ color: "#bb88d1", marginLeft: "5px" }} className='author'>
              {randomQuote?.author}
            </h4>
          </div>
        </div>
      </center>
    </>
  );
}
