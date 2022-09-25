import { useEffect, useState } from "react";
function Sibling() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const everySecond = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    // console.log(time, "Inside Effect Sibling");
  }, [time]);

  return (
    <>
      <h1>This is Sibling</h1>
      {/* <p>{time}</p> */}
    </>
  );
}

export default Sibling;
