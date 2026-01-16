const LocationDateData = () => {
  return (
    <section className="w-full my-8">
      <div>
        <picture>
          <img src="images/calendar.webp" alt="" />
        </picture>
      </div>
      <div className="flex flex-col justify-center items-center py-10">
        <h3 className="mb-14">HORARIO: 17:00hs</h3>
        <div className="flex flex-col items-center">
          <p className="mb-5">UBICACION</p>
          <picture>
            <img src="images/quinta_sol_verde.webp" alt="" />
          </picture>
          <p className="mb-5">Pontevedra, Merlo</p>
          <button className="bg-primary rounded-full p-1.5 text-background text-xs">
            <a
              href="https://maps.app.goo.gl/uobKkJboPpNyBK5c7"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¿Como llegar?
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationDateData;
