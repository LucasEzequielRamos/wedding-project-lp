import { Link } from "react-router";

const ToGifts = () => {
  return (
    <section className=" w-full my-8 ">
      <div className="bg-primary py-7 flex flex-col justify-center items-center px-6.5 text-background">
        <h3 className="mb-6">¿QUERES HACERNOS UN REGALO?</h3>

        <div className="flex gap-2 items-center">
          <p className="text-[10px] w-10/12">
            ¡Agradecemos enormemente tu gesto! Es de mucha ayuda para nosotros.
            Apretando el botón podrás acceder a nuestra lista de regalos..
          </p>
          <button className="text-xs w-28 py-1.5 px-3 h-fit rounded-full bg-background text-secondary ">
            <Link to={"/gifts"}>Hacer regalo</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToGifts;
