import { useState } from "react";
import { addGuest } from "../lib/add-guest";
import { toast, Toaster } from "sonner";

const ConfirmAttendance = () => {
  const [fullName, setFullName] = useState("");
  const [tel, setTel] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!fullName || !tel) {
      toast.warning("Por favor completá todos los campos");
      return;
    }

    const res = await addGuest(fullName, tel);
    if (!res) {
      toast.warning(
        <>
          No se encontró tu nombre en la lista, verificá si es correcto:
          <br />
          <br />
          Nombre: Primer nombre
          <br />
          Apellido: De casado o de soltero
        </>
      );
    } else {
      toast.success("Confirmacion enviada. Muchas gracias!");
      setFullName("");
      setTel("");
    }
  }

  return (
    <section className=" w-full my-8 ">
      <Toaster position="bottom-right" duration={3500} />
      <div className="py-6 flex flex-col justify-center items-center ">
        <h2 className="mb-3">CONFIRMAR ASISTENCIA</h2>
        <p className="text-[10px]">
          Te pedimos que confirmes asistencia antes del 01/02/26
        </p>
      </div>
      <div className="flex w-full justify-center ">
        <form
          onSubmit={handleSubmit}
          action="  "
          className="flex flex-col gap-5 [&>input]:w-36 [&>input]:rounded-full [&>input]:px-2 [&>input]:py-2 [&>input]:outline [&>input]:placeholder:text-secondary/70"
        >
          <input
            placeholder="Nombre y Apellido"
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
          <input
            placeholder="Numero de celular"
            type="tel"
            value={tel}
            onChange={e => setTel(e.target.value)}
          />
          <button className="bg-primary px-5 py-2 text-background rounded-full">
            Confirmar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConfirmAttendance;
