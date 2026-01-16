const Header = () => {
  return (
    <section className="w-full my-8">
      <header className="pb-5">
        <picture className="flex items-center justify-center">
          <img
            className="w-4/5"
            src="images/header_names.webp"
            alt="nombres de anfitriones de la boda"
          />
        </picture>
      </header>
      <div className="">
        <picture>
          <img
            src="images/header_picture_80.webp"
            alt=""
            className="object-contain "
          />
        </picture>
      </div>
      <div className="bg-primary py-14 ">
        <div className="flex flex-col w-2/3 m-auto ">
          <p className="text-background text-sm text-center ">
            “Así que ya no son dos, sino una sola carne. Por tanto, lo que Dios
            ha unido, ningún hombre lo separe»”.
          </p>
          <p className="text-background text-[9px] flex self-end">Mateo 19:6</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
