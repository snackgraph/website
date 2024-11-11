import Image from "next/image";

function Partners() {
  return (
    <div className="max-w-screen-md m-auto animation-op">
      <p className="text-xl text-center text-[var(--color-description)]">
        Con años de experiencia, hemos abastecido a empresas y talleres
        mecánicos con rodamientos para las principales marcas del mercado.
      </p>

      <div className="mt-14 inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.alt} width={150} height={150} />
            </li>
          ))}
        </ul>
        <ul
          className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.alt} width={150} height={150} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Partners;

const logos = [
  { src: "/meta.svg", alt: "Facebook" },
  { src: "/meta.svg", alt: "Disney" },
  { src: "/meta.svg", alt: "Airbnb" },
  { src: "/meta.svg", alt: "Apple" },
  { src: "/meta.svg", alt: "Spark" },
  { src: "/meta.svg", alt: "Samsung" },
  { src: "/meta.svg", alt: "Quora" },
  { src: "/meta.svg", alt: "Sass" },
];

/*

<img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
          className="max-w-none"
          alt="Image 1"
        />
*/
