"use client";

import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="hidden md:block">
        <div className="nav-list-float animationFadeInDown max-w-lg rounded-xl border border-gray-700">
          {paths.map((path) => {
            return (
              <Link
                key={path.id}
                href={path.path}
                className="select-none p-2 text-[var(--color-description)] hover:text-[var(--color-title)] border border-transparent duration-300"
              >
                {path.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;

const paths = [
  {
    id: "1",
    name: "Inicio",
    path: "/",
  },
  {
    id: "2",
    name: "Marketplace",
    path: "/",
  },
  {
    id: "3",
    name: "Clientes",
    path: "/",
  },
  {
    id: "4",
    name: "Acerca de",
    path: "/",
  },
  {
    id: "5",
    name: "Ubicaciones",
    path: "/",
  },
];
