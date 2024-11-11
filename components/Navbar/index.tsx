"use client";

// COMPONENTS
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="hidden md:block">
        <nav className="nav-list-float animationFadeInDown max-w-lg rounded-xl border border-gray-200 drop-shadow-sm backdrop-blur-sm bg-white/80">
          {paths.map((path) => {
            return (
              <Link
                key={path.id}
                href={path.path}
                className="select-none p-2 text-[var(--color-description)] hover:text-[var(--color-title)] duration-300 hover:underline"
              >
                {path.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default Navbar;

const paths = [
  {
    id: "1",
    name: "Home",
    path: "/",
  },
  {
    id: "2",
    name: "Products",
    path: "/",
  },
  {
    id: "4",
    name: "Pricing",
    path: "/",
  },
  {
    id: "5",
    name: "About",
    path: "/",
  },
];
