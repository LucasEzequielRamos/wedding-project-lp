const Footer = () => {
  return (
    <footer>
      <picture>
        <img className="" src="images/footer_picture_80.webp" alt="" />
      </picture>
      <div className="w-full my-8 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center">
          <p className="text-sm mb-2">¡Esperamos contar con tu presencia!</p>
          <img src="images/bendiciones.webp" alt="" />
        </div>
        <picture>
          <img className="w-7" src="images/iniciales.webp" alt="" />
        </picture>
      </div>
    </footer>
  );
};

export default Footer;
