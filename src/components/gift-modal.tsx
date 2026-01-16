import { useState } from "react";

const GiftModal = ({
  onCopy,
  onClose,
  buy,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onCopy: any;
  onClose: () => void;
  buy: string | null;
}) => {
  const [form, setForm] = useState({ name: "" });

  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER_GIFTS;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hola! Soy ${form.name}, me gustaría comprarles un regalo: ¿Como podriamos coordinarlo?`
  )}`;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="bg-background rounded-xl px-5 py-7 relative w-64     shadow-xl flex flex-col text-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl   bg-transparent text-primary size-3  "
        >
          x
        </button>

        <div className="mb-6 ">
          <h2 className=" mb-2 ">{buy ? "COMPRAR" : "APORTAR"}</h2>
          <p className="text-sm  mb-4 ">
            Gracias por {buy ? "tu" : "aportar en este"} regalo
          </p>
          <p className="text-sm  leading-4 ">
            {buy
              ? "Para continuar con la compra llená tus datos para verificar el envio y coordinar con nosotros "
              : "Tu aporte puede ser del monto total o una parte según lo que dispongas..."}
          </p>
        </div>

        {buy ? (
          <div>
            <a
              href={buy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline "
            >
              Link del articulo
            </a>
            <form className="">
              <input
                type="text"
                required
                placeholder="Tu nombre completo"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className=" bg-primary text-background mt-2 px-3 py-2 rounded-full w-full mb-4"
              />

              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-2  bg-primary text-background rounded-full ${
                  form.name ? "" : "opacity-50 pointer-events-none"
                }`}
              >
                Enviar
              </a>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-center  gap-2  text-xs  mb-2">
              <p className="w-52 text ">
                Alias Mercado Pago: <br /> LUCASS.MARQUEZ
              </p>
              <button
                onClick={() => onCopy("LUCASS.MARQUEZ")}
                className="bg-transparent text-primary size-3 "
              >
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                  <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                </svg>
              </button>
            </div>

            <div className=" flex items-center  justify-center  gap-2  text-xs ">
              <p className="w-52 ">CBU: 0170130840000010092846</p>
              <button
                onClick={() => {
                  onCopy("0170130840000010092846");
                }}
                className="bg-transparent text-primary size-3 "
              >
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                  <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftModal;
