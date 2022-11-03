import React from "react";
import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  const refreshClock = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <h1 className="p-0 m-0 display-1">{date.toLocaleTimeString()}</h1>;
}
export default Clock;
