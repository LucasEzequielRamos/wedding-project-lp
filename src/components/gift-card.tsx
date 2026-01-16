import type { Gift } from "../types/gift";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GiftCard = ({ gift, buy, open }: { gift: Gift; buy: any; open: any }) => {
  return (
    <article className=" relative w-full mx-auto bg-neutral flex flex-col rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl cursor-pointer border-2 border-[#1f3d1e]/60 py-5 h-55">
      <picture className="w-full flex items-center justify-center">
        <img
          src={gift.image}
          alt={gift.title}
          className="object-contain size-25"
        />
      </picture>

      <div className="px-3  min-h-16 flex flex-col justify-around mb-2">
        <h4 className=" w-full text-sm ">
          {gift.title.split(" ").slice(0, 3).join(" ")}
        </h4>

        <a
          href={gift.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs underline "
        >
          Link del articulo
        </a>
      </div>

      <div className="text-xs  flex justify-around ">
        <button
          onClick={() => {
            buy(gift.link);
            open(true);
          }}
          className=" px-1.5 py-0.5 bg-[#1f3d1e] text-white rounded-full "
        >
          Comprar
        </button>
        <button
          onClick={() => {
            buy(false);
            open(true);
          }}
          className=" px-1.5 py-0.5 bg-[#1f3d1e] text-white rounded-full "
        >
          Aportar
        </button>
      </div>
    </article>
  );
};

export default GiftCard;
