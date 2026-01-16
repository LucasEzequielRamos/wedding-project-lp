import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import type { Gift } from "../types/gift";
import GiftCard from "../components/gift-card";
import GiftModal from "../components/gift-modal";
import { Link } from "react-router";
import { toast, Toaster } from "sonner";

const Gifts = () => {
  const [giftList, setGiftList] = useState<Gift[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [buyAction, setBuyAction] = useState<string | null>(null);

  useEffect(() => {
    const fetchGifts = async () => {
      const { data, error } = await supabase.from("gifts").select("*");
      if (error) console.error("Error al cargar los regalos:", error.message);
      else setGiftList(data);
    };

    fetchGifts();
  }, []);

  const handleCopy = (alias: string) => {
    navigator.clipboard.writeText(alias);
    toast.success("Copiado en el portapapeles");
    setTimeout(() => {
      setOpenModal(false);
    }, 500);
  };

  return (
    <section id="REGALOS" className="mx-9 my-8 anchor text-[#1f3d1e]">
      <Toaster position="bottom-center" duration={2300} />
      <header>
        <picture className="w-full flex justify-center mb-4">
          <Link to="/">
            <img src="images/iniciales.webp" alt="" className="w-9" />
          </Link>
        </picture>
      </header>
      <div className="text-center mb-14 ">
        <h2 className="mb-6 text-xl">REGALOS</h2>
        <p className="text-xs mb-4">
          Te agradecemos nuevamente por tu gesto! <br /> Realmente nos ayuda un
          montón!
        </p>
        <p className="text-xs mb-12">
          A continuación vas a encontrar productos que nos hacen falta... <br />
          Según lo que hayas dispuesto en regalarnos podes comprar el producto
          en su pagina original o enviarnos el dinero equivalente a lo que hayas
          elegido.
          <br /> ¡Nosotros te lo facilitamos!
        </p>

        <p className="text-xs text-start ">
          <strong>Link del articulo:</strong> Te lleva al sitio web del regalo
          para que tengas una idea de lo que estamos buscando <br />
          <br />
          <strong>Comprar:</strong> Luego de apretar el boton, te pide que
          pongas tu nombre para enviarnos un mensaje y poder coordinar la
          direccion y el envio con nosotros. <br />
          <br />
          <strong>Aportar:</strong> Te permite enviarnos el dinero que hayas
          dispuesto para colaborar con nosotros.
        </p>
      </div>
      <div className="grid gap-x-8 xl:gap-x-12 2xl:w-7/8 2xl:mx-auto gap-y-5 grid-cols-2 sm:grid-cols-2 3 lg:grid-cols-4 xl:grid-cols-5 bg-base-100 ">
        {giftList.map(gift => (
          <GiftCard
            key={gift.id}
            gift={gift}
            open={setOpenModal}
            buy={setBuyAction}
          />
        ))}
      </div>

      {openModal && (
        <GiftModal
          onCopy={handleCopy}
          onClose={() => setOpenModal(false)}
          buy={buyAction}
        />
      )}
    </section>
  );
};

export default Gifts;
