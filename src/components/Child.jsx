import { useEffect, useState } from "react";
function Child() {
  const [data, getData] = useState([]);

  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => {
      // getFetchData();
      const API = `https://fakestoreapi.com/products?sort=${sortBy}`;
      fetch(API, {
        method: "get",
        signal: signal
      })
        .then((response) => {
          console.log(response, "First Then");
          return response.json();
        })
        .then((response) => {
          console.log(response, "Second Then");
          console.log("inside the ResponseData After Fetch Done");
          return getData(response);
        })
        .catch((err) => {
          return console.log(err);
        });
    }, 5000);
    return () => {
      console.log("Inside the Clean Up Function");
      return controller.abort();
    };
  }, [sortBy]);

  return (
    <>
      <button onClick={() => setSortBy("desc")}>DescendingOrder</button>
      <button onClick={() => setSortBy("")}>AscendingOrder</button>
      {data.map(({ title, price, id }) => (
        <div key={id}>
          <p>{id}</p>
          <h1>{title}</h1>
          <p>{price}</p>
        </div>
      ))}
    </>
  );
}

export default Child;
