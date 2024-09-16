export default function Item({ asset, removeItem }) {
  return (
    <div className="flex flex-col gap-y-[10px] rounded-lg border border-[#AEAEAE] justify-center items-center p-[10px]">
      <div className="mb-3">{asset}</div>
      <button
        className="border-2 border-[#AEAEAE] text-[#303546] px-6 rounded-lg"
        onClick={removeItem}
      >
        Move {"-"}
      </button>
    </div>
  );
}
