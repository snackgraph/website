"use client";

// HOOKS
import { usePathname } from "next/navigation";

// COMPONENTS
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="hidden md:block">
      <nav role="navigation" aria-label="Navigation" className="nav-list-float p-2 animationFadeInDown max-w-lg rounded-xl border border-gray-200 drop-shadow-sm backdrop-blur-sm bg-white/80">
        <ul className="flex">
          {paths.map((path) => {
            return (
              <li key={path.id}>
                <Link
                  href={path.path}
                  id={pathname === path.path ? "active" : ""}
                  className={`select-none p-2 font-semibold ${
                    pathname === path.path
                      ? "text-[var(--color-title)]"
                      : "text-[var(--color-description)] hover:text-[var(--color-title)] hover:underline"
                  } duration-300`}
                >
                  {path.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
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
    name: "APIs",
    path: "/apis",
  },
  {
    id: "4",
    name: "Pricing",
    path: "/pricing",
  },
  {
    id: "5",
    name: "About",
    path: "/about",
  },
];
