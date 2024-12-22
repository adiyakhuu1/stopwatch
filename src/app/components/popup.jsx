export const Popup = ({
  count,
  setCount,
  modal,
  createModal,
  timer,
  setTimer,
  setTimerS,
}) => {
  return (
    <div className="bg-gray-500 w-[800px] h-[200px] top-[50%] left-[50%] right-[50%] bottom-[50%] flex translate-x-[-50%] translate-y-[-50%] content-center justify-center px-auto rounded-xl shadow-lg fixed">
      <div className="mt-20 relative">
        {/* <label className="text-white">Минутаа оруулна уу!</label> */}
        <input
          type="number"
          className="h-5 text-black"
          placeholder="Минутаа оруулна уу!"
          // onChange={(e) => {
          //   setCount(e.key);
          //   console.log(e);
          // }}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
        />
        <button
          onClick={() => {
            const seconds = count * 60;
            console.log(seconds);
            setTimerS(seconds);
            createModal(false);
          }}
          className="absolute  bottom-10 right-[40%]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
