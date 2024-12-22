"use client";
import { useEffect, useState } from "react";
import { Time } from "./components/timer";
import { Eczar } from "next/font/google";
import { Montserrat } from "next/font/google";
const eczar = Eczar({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
export default function Home() {
  const [running, startRunning] = useState(false);
  const [modal, createModal] = useState(false);
  const [mode, switchMode] = useState(false);
  const [second, runSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, runHour] = useState(0);

  const [count, startCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timerH, setTimerH] = useState(0);
  const [timerS, setTimerS] = useState(0);
  const [countingDown, startCountingDown] = useState(false);
  // Stopwatch +
  useEffect(() => {
    let stopwatch;
    if (running) {
      stopwatch = setInterval(() => {
        if (second >= 60) {
          runSecond(0);
          setMinute((p) => p + 1);
          if (minute >= 60) {
            setMinute(0);
            runHour((p) => p + 1);
          }
        }
        runSecond((p) => p + 1);
        console.log(second);
      }, 1000);
    }
    return () => clearInterval(stopwatch);
  }, [running, second]);
  // Stopwatch -
  // Timer +
  useEffect(() => {
    let stopwatch;

    if (countingDown) {
      let stopwatch = setInterval(() => {
        // startCount(count * 60);

        if (timerS === 0) {
          if (timer > 0) {
            setTimer((p) => p - 1);
            setTimerS(59);
          } else if (timerH > 0) {
            setTimerH((p) => p - 1);

            setTimer(59);
            setTimerS(59);
          } else {
            clearInterval(stopwatch);
          }
        } else {
          setTimerS((p) => p - 1);
          console.log("H:", timerH, "M:", timer, "S:", timerS);
        }
      }, 1000);
    }
    return () => clearInterval(stopwatch);
  }, [countingDown, timerS]);
  // Timer -
  const stop = (stop) => {
    startRunning(stop);
  };
  const startTimer = () => {
    startCountingDown(true);
  };
  return (
    <div className={` ${montserrat.className}`}>
      <button
        onClick={() => {
          switchMode(!mode);
          stop(false);
        }}
      >
        Switch to {mode ? "Timer" : "Stopwatch"}
      </button>
      <div className="">
        {mode ? (
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
            setMinut={setMinute}
            hour={hour}
            timer={timer}
            setTimer={setTimer}
            timerH={timerH}
            timerS={timerS}
            setTimerS={setTimerS}
            startTimer={startTimer}
            countingDown={countingDown}
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
            setMinut={setMinute}
            hour={hour}
            timer={timer}
            setTimer={setTimer}
            timerH={timerH}
            timerS={timerS}
            setTimerS={setTimerS}
            startTimer={startTimer}
            countingDown={countingDown}
          />
        )}
      </div>
    </div>
  );
}
