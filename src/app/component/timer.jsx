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
              } else {
                createModal(true);
              }
            }}
            className="bg-white w-[70%] fixed text-black justify-center text-9xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            {hour} : {minute} : {second}
          </button>
        </div>
      </div>
      {modal === true && <Popup />}
    </>
  );
};
