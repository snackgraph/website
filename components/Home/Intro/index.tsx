import Link from "next/link";

function Intro() {
  return (
    <div className="h-dvh px-3 relative">
      <div className="hidden lg:block">
        <div className="effect-right absolute left-[-30%] top-[30%] w-[80%] h-[60%] z-0" />
      </div>
      <div className="hidden lg:block">
        <div className="effect-left absolute right-[-30%] top-[-20%] w-[80%] h-[60%] z-0" />
      </div>
      <div className="grid place-content-center h-dvh z-50 animation-op">
        <div className="flex justify-center items-center">
          <Link
            role="link"
            href="/"
            className="flex gap-2 px-3 py-[9px] bg-gray-50 hover:bg-gray-100 duration-300 text-center font-semibold rounded-2xl border border-gray-200 drop-shadow-sm hover:border-blue-600"
          >
            <div className="grid place-content-center">
              <div className="bg-[#222327] text-[var(--color-description-dark)] py-1 px-2 rounded-full text-xs">
                New
              </div>
            </div>
            <div className="grid place-content-center">
              <span className="text-sm text-[var(--color-description)]">
                Our Countries API is live now! 🎉
              </span>
            </div>
            <figure className="grid place-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 fill-[var(--color-description)]"
                viewBox="0 0 256 256"
              >
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
              </svg>
            </figure>
          </Link>
        </div>

        <h1
          id="title"
          className="text-3xl md:text-6xl font-extrabold text-center max-w-screen-md m-auto py-5 text-[var(--color-title)]"
        >
          Supercharge Your Projects with Our APIs
        </h1>
        <p
          id="description"
          className="lg:text-xl text-center max-w-screen-md m-auto text-[var(--color-description)]"
        >
          We offer a set of APIs designed for developers and data enthusiasts
          who want to access to information easily.
        </p>

        <div className="flex justify-center gap-3 mt-5">
          <Link
            role="link"
            href="https://dash.snackgraph.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-white fill-white bg-[#222327] hover:bg-black duration-300 text-center font-semibold rounded-lg inline-flex gap-1"
          >
            Start for free
          </Link>
          <Link
            role="link"
            href="/pricing"
            className="px-4 py-2 text-sm fill-white bg-white duration-300 text-center font-semibold rounded-lg inline-flex gap-1 border border-gray-400 hover:border-[#222327]"
          >
            See our plans
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
