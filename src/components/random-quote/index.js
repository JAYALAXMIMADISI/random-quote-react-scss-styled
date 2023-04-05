import React, { useState } from "react";
import { Button } from "../../styles";
import ShowQuote from "./show-quote";

export default function RandomQuote() {
  const [randomQuote, setRandomQuote] = useState({});

  const [buttonColor, setButtonColor] = useState("red");

  const getRandomQuote = async () => {
    setButtonColor("green");
    const quote = await fetch(`https://api.quotable.io/random`)
      .then((res) => res.json())
      .then((res) => setRandomQuote(res));
    setButtonColor("red");
  };

  return (
    <>
      {Object.keys(randomQuote).length > 0 && (
        <ShowQuote randomQuote={randomQuote} />
      )}
      <Button onClick={getRandomQuote} getbuttonColor={buttonColor}>
        Get Quote
      </Button>
    </>
  );
}
