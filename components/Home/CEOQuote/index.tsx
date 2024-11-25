// STYLES
import "./styles.css";

import Image from "next/image";

function CEOQuote() {
  return (
    <>
      <div className="grid place-content-center h-[70dvh] px-3">
        <div className="max-w-screen-md m-auto">
          <section className="custom-container">
            <div className="background">
              <div className="trail" />
            </div>
            <div className="custom-content border border-gray-300 drop-shadow-sm">
              <div className="p-5">
                <p id="SnackGraph CEO's quote" className="text-xl lg:text-xl italic text-[var(--color-description)]">
                  {`"As a Web Developer, I've always wanted a tool like SnackGraph: powerful, robust, and easy to integrate in projects."`}
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
                    <p className="lg:text-lg font-semibold text-[var(--color-description)]">
                      Nelson Hernández
                    </p>
                    <p className="lg:text-base text-[var(--color-description)] opacity-80">
                      Founder & CEO, SnackGraph
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CEOQuote;
