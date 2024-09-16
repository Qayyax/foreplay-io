import Item from "./Item";

export default function Wardrobe({ wardName, arr, handleMove }) {
  return (
    <section className="w-[300px]">
      <div className="border-2 border-[#AEAEAE] text-[#303546] px-6 rounded-lg mb-4 text-center">
        {wardName}
      </div>
      <div className="flex  gap-[15px] border-2 border-[#AEAEAE] rounded-lg p-[10px] flex-wrap">
        {arr.map((item) => (
          <Item
            key={item.id}
            asset={item.asset}
            removeItem={() => handleMove(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
