export const Stopwatch = ({ running, second, minute, hour, stop }) => {
  return (
    <>
      <div className="flex justify-center">Stopwatch</div>
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
              stop(!running);
            }}
            className="bg-white w-[70%] text-black justify-center text-9xl absolute"
          >
            {hour} : {minute} : {second}
          </button>
        </div>
      </div>
    </>
  );
};
