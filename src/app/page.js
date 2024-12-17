"use client";
import { useEffect, useState } from "react";
import { Time } from "./component/timer";
import { Stopwatch } from "./stopwatch";
import { Eczar } from "next/font/google";
import { Montserrat } from "next/font/google";
const eczar = Eczar({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
export default function Home() {
  const [running, startRunning] = useState(false);
  const [countingDown, startCountingDown] = useState(false);
  const [modal, createModal] = useState(false);
  const [count, startCount] = useState(0);
  const [mode, switchMode] = useState(false);
  const [second, runSecond] = useState(0);
  const [minute, runMinute] = useState(0);
  const [hour, runHour] = useState(0);
  useEffect(() => {
    let stopwatch;
    if (running) {
      stopwatch = setInterval(() => {
        if (second >= 60) {
          runSecond(0);
          runMinute((p) => p + 1);
          if (minute >= 60) {
            runMinute(0);
            runHour((p) => p + 1);
          }
        }
        runSecond((p) => p + 1);
        console.log(second);
      }, 1000);
    }
    return () => clearInterval(stopwatch);
  }, [running, second]);
  const stop = (stop) => {
    startRunning(stop);
  };
  return (
    <div className={` ${montserrat.className}`}>
      <button
        onClick={() => {
          switchMode(!mode);
          stop(false);
        }}
      >
        Switch to {mode ? "Stopwatch" : "Timer"}
      </button>
      <div className="">
        {mode ? (
          <Time
            mode={mode}
            stop={stop}
            running={running}
            startRunning={startRunning}
            second={second}
            minute={minute}
            hour={hour}
          />
        ) : (
          <Time
            createModal={createModal}
            modal={modal}
            count={count}
            setCount={startCount}
            mode={mode}
            stop={stop}
            running={running}
            startRunning={startRunning}
            second={second}
            minute={minute}
            hour={hour}
          />
        )}
      </div>
    </div>
  );
}
