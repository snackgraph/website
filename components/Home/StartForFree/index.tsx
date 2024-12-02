
// COMPONENTS
import Image from "next/image";
import Link from "next/link";

function StartForFree() {
  return (
    <div className="grid place-content-center h-[80dvh] p-3 bg-white">
      <div className="max-w-screen-2xl m-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid place-content-center order-last lg:order-first">
            <div className="max-w-screen-sm m-auto">
              <h1 className="text-3xl md:text-6xl font-bold text-center text-[var(--color-title)]">
                Get started for free right now.
              </h1>
            </div>

            <div className="flex justify-center gap-3 mt-10">
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
          <div className="grid place-content-center">
            <Image
              src="/snackgraph.svg"
              alt="SnackGraph's brand"
              height={500}
              width={500}
              className="size-[220px] lg:size-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartForFree;
