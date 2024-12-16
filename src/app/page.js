"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [running, startRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    let stopwatch;
    if (running) {
      stopwatch = setInterval(() => {
        setTimer((prev) => {
          if (timer === 60) {
            setTimer(0);
          }
          return prev + 1;
        });
        console.log(timer);
      }, 1000);
    } else {
      clearInterval(stopwatch);
    }
    return clearInterval(stopwatch);
  }, [running]);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-4">
        <button
          onClick={() => {
            startRunning(!running);
          }}
        >
          {running ? "Stop" : "Start"}
        </button>
        <div>{timer}</div>
      </div>
    </div>
  );
}
