import { Popup } from "./popup";

export const Time = ({
  running,
  startRunning,
  second,
  minute,
  hour,
  stop,
  mode,
  createModal,
  modal,
  setCount,
  count,
  timer,
  setTimer,
  timerS,
  timerH,
  startTimer,
  countingDown,
  setTimerS,
}) => {
  return (
    <>
      <div className="flex justify-center text-7xl">
        {mode === false ? `Timer` : `Stopwatch`}
      </div>
      <div className="justify-items-center">
        {/* <button
          onClick={() => {
            startRunning(!running);
          }}
        >
          {running ? "Stop" : "Start"}
        </button> */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              if (mode === true) {
                stop(!running);
              } else if (!countingDown) {
                startTimer(true);
              } else if (modal === false) {
                createModal(true);
              }
            }}
            className="bg-white w-[70%] fixed text-black justify-center text-9xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            {mode === false
              ? `${timerH} : ${timer} : ${timerS}`
              : `${Math.floor(hour)} : ${Math.floor(minute)} : ${second}`}
          </button>
        </div>
      </div>
      {modal === true && (
        <Popup
          setCount={setCount}
          count={count}
          modal={modal}
          createModal={createModal}
          setTimer={setTimer}
          timer={timer}
          setTimerS={setTimerS}
        />
      )}
    </>
  );
};
