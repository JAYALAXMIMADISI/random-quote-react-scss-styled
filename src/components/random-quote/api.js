export const getQuote=()=>{
    return fetch("https://api.quotable.io/random").then((resp) => {
        if (resp.status === 200) return resp.json();
        else throw new Error("Invalid response");
      });
}