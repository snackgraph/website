import { CSSProperties } from "react";
// STYLES
import "./styles.css";

// COMPONENTS
import Image from "next/image";

function Brands() {
  return (
    <div className="grid place-content-center h-dvh bg-slate-50 rounded-lg">
      <div className="flex justify-center items-center">
        <div className="w-[400px] h-[400px] grid grid-cols-[100px] grid-rows-[100px] place-content-center rounded-full border border-gray-300">
          {brands.map(({ id, logo, name }) => {
            return (
              <div
                key={id}
                className="item"
                style={{ "--d": `-${id * 2}s` } as CSSProperties}
              >
                <div className="w-[100px] h-[100px] grid place-content-center bg-white rounded-full p-3 drop-shadow-lg shadow-slate-200">
                  <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt={`Este es el logotipo de ${name}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h2
        id="title"
        className="text-4xl font-semibold text-center max-w-screen-md m-auto mt-20 py-5 text-gray-700"
      >
        La mejor opción para tu vehículo
      </h2>
      <p className="text-xl text-center max-w-screen-md text-gray-500">
        Somos especialistas en la importación de rodamientos nuevos y originales
        para una amplia variedad de marcas y modelos de vehículos. Encuentra el
        rodamiento perfecto para tu Toyota, Mazda, Nissan, Honda y muchas más.
      </p>
    </div>
  );
}

export default Brands;

const brands = [
  {
    id: 1,
    name: "Chevrolet",
    logo: "/brands/chevrolet.svg",
  },
  {
    id: 2,
    name: "Nissan",
    logo: "/brands/nissan.svg",
  },
  {
    id: 3,
    name: "Mazda",
    logo: "/brands/mazda.svg",
  },
  {
    id: 4,
    name: "Toyota",
    logo: "/brands/toyota.svg",
  },
  {
    id: 5,
    name: "Honda",
    logo: "/brands/honda.svg",
  },
  {
    id: 6,
    name: "Jeep",
    logo: "/brands/jeep.svg",
  },
];
