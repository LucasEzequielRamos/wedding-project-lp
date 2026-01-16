const Hero = () => {
  return (
    <section className="w-full my-8">
      <div className="px-6 flex gap-9  items-center">
        <picture className=" ">
          <img
            className="object-contain w-xl"
            src="images/hero_picture_80.webp"
            alt=""
          />
        </picture>
        <p className="text-xs">
          Estamos felices de anunciar que nos vamos a casar, y nos encantaría
          que puedas ser parte de este día único en donde haremos un pacto con
          Dios.
        </p>
      </div>
    </section>
  );
};

export default Hero;
