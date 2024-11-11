import Partners from "@/components/Partners";

function Intro() {
  return (
    <div className="h-dvh bg-[#000814]">
      <div className="effect-right absolute left-[-30%] top-[30%] w-[80%] h-[60%] -z-0" />
      <div className="effect-left absolute right-[-30%] top-[-30%] w-[80%] h-[60%] -z-0" />
      <div className="grid place-content-center h-[77dvh] z-50 animation-op">
        <h1
          id="title"
          className="text-3xl md:text-6xl font-extrabold text-pretty max-w-screen-lg m-auto py-5 text-[var(--color-title)]"
        >
          En La Casa de Los Rodamientos somos expertos en rodamientos
          automotrices e industriales
        </h1>
        <p
          id="description"
          className="text-xl text-pretty max-w-screen-md text-[var(--color-description)]"
        >
          Con más de una década de experiencia, ofrecemos una amplia gama de
          rodamientos alta calidad para todo tipo de vehículos.
        </p>

        <div className="mt-5">
          <button className="px-4 py-2 text-sm text-black fill-white bg-[#E5E5E5] hover:bg-white duration-300 text-center font-semibold rounded-lg inline-flex gap-1">
            Ver Marketplace
          </button>
        </div>
      </div>
      <Partners />
    </div>
  );
}

export default Intro;
