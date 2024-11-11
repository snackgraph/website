import Image from "next/image";

function Countries() {
  return (
    <div className="grid grid-cols-2 h-[80dvh] bg-slate-100 rounded-lg">
      <div className="grid place-content-center">
        <div className="grid grid-cols-2">
          <div>
            <Image
              src="/flags/usa.svg"
              width={200}
              height={200}
              alt="Bandera oficial de los Estados Unidos de America"
              className="logo-float"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-40">
          <div />
          <div>
            <Image
              src="/flags/korea.svg"
              width={200}
              height={200}
              alt="Bandera oficial de los Estados Unidos de America"
              className="logo-float delay-12"
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <Image
              src="/flags/japan.svg"
              width={200}
              height={200}
              alt="Bandera oficial de los Estados Unidos de America"
              className="logo-float delay-13"
            />
          </div>
        </div>
      </div>
      <div className="grid place-content-center h-[75dvh]">
        <h2
          id="title"
          className="text-5xl font-extrabold text-left max-w-screen-lg m-auto py-5 text-gray-700"
        >
          12 años de experiencia en el mercado guatemalteco y salvadoreño.
        </h2>
        <p className="text-xl text-left max-w-screen-md text-gray-500">
          somos líderes en la importación, distribución y comercialización de
          rodamientos automotrices e industriales para todo tipo de vehículos:
          americanos, japoneses y coreanos.
        </p>
      </div>
    </div>
  );
}

export default Countries;
