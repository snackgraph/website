import React from "react";

function Services() {
  return (
    <div className="grid place-content-center h-dvh">
      <h3 className="text-4xl font-semibold text-center text-[var(--color-title)]">
        Nuestros Servicios
      </h3>
      <p className="text-center xl:text-xl font-medium max-w-screen-md m-auto text-[var(--color-description)] mt-4">
        Te ofrecemos una amplia gama de servicios para satisfacer tus
        necesidades de rodamientos.
      </p>
      <div className="flex justify-center items-center m-3 mt-10">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {services.map(({ id, name, description }) => {
              return (
                <div key={id} className="p-6 rounded-lg max-w-[450px] card-services duration-300 border border-gray-700">
                  <h5 className="text-xl font-semibold mt-5 text-[var(--color-title)]">
                    {name}
                  </h5>
                  <p className="mt-3 text-[var(--color-description)]">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

const services = [
  {
    id: "1",
    name: "Especialización en Rodamientos",
    description:
      "Te ayudamos a encontrar la pieza exacta que necesitas. Nuestra experiencia en importación garantiza la calidad y originalidad de cada producto.",
  },
  {
    id: "2",
    name: "Catálogos Actualizados",
    description:
      "Olvídate de las búsquedas interminables. Nuestros catálogos están constantemente actualizados para ofrecerte la pieza que necesitas de forma rápida y precisa.",
  },
  {
    id: "3",
    name: "Chumaceras Industriales",
    description:
      "Además de rodamientos para vehículos, también contamos con una amplia gama de chumaceras industriales para optimizar el rendimiento de tu maquinaria.",
  },
  {
    id: "4",
    name: "Consultas y Envíos",
    description:
      "Si tienes alguna duda o necesitas un rodamiento específico, no dudes en contactarnos. Contamos con envíos a todo el país a través de las principales empresas de transporte.",
  },
  {
    id: "5",
    name: "Servicios Adicionales",
    description:
      "No solo vendemos repuestos. Te ofrecemos un servicio completo que incluye cotizaciones personalizadas, entrega a domicilio, asesoría técnica y sucursales estratégicamente ubicadas para tu comodidad.",
  },
];
