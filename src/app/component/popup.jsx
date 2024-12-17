export const Popup = ({ count, setCount }) => {
  return (
    <div className="bg-black w-[400px] h-[100px] top-[50%] left-[50%] right-[50%] bottom-[50%] translate-x-[-50%] translate-y-[-50%] content-center px-auto rounded-xl shadow-lg flex-col relative">
      <label className="text-white">Минутаа оруулна уу!</label>
      <input
        type="number"
        className="h-5"
        // onChange={(e) => {
        //   setCount(e.key);
        //   console.log(e);
        // }}
        onKeyDown={(e) => {
          setCount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(count);
        }}
        className=" bg-slate-500 absolute bottom-2 right-[30%]">
        Submit
      </button>
    </div>
  );
};
