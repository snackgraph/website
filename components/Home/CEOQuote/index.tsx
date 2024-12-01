import Image from "next/image";

function CEOQuote() {
  return (
    <>
      <div className="grid place-content-center h-dvh px-3 relative mt-10">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="max-w-screen-md m-auto">
          <p
            id="SnackGraph CEO's quote"
            className="text-3xl md:text-5xl font-semibold text-center py-5 text-[var(--color-title)]"
          >
            {`“As a Product Designer, I've always wanted a poweful, robust, and easy tool to integrate in different projects.“`}
          </p>

          <div className="flex justify-center items-center gap-3 mt-5">
            <div>
              <Image
                src="/ceo.jpg"
                alt="Photograph of a person sitting smiling"
                height={50}
                width={50}
                className="rounded-full"
                role="img"
              />
            </div>

            <div className="grid place-content-center">
              <p className="text-center font-semibold text-[var(--color-description)]">
                Nelson Hernández
              </p>
              <p className="lg:text-sm text-[var(--color-description)] opacity-80">
                Founder & CEO, SnackGraph
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CEOQuote;
