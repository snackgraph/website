// STYLES
import "./styles.css";

import Image from "next/image";

function CEOQuote() {
  return (
    <>
      <div className="grid place-content-center h-[50dvh] px-3">
        <div className="max-w-screen-lg m-auto">
          <section className="custom-container">
            <div className="background">
              <div className="trail" />
            </div>
            <div className="custom-content border border-gray-300 drop-shadow-sm">
              <div className="p-3 lg:p-5">
                <p className="text-xl lg:text-2xl italic text-[var(--color-description)]">
                  {`"Some of the most interesting CSS tricks use properties that
                  you might have never even heard of. My goal is to make you
                  confident in your abilities to make your ideas come to life
                  with those tricks."`}
                </p>

                <div className="flex justify-center items-center gap-3 mt-10">
                  <div>
                    <Image
                      src="/ceo.jpg"
                      alt="Nelson Hernández"
                      height={50}
                      width={50}
                      className="rounded-full"
                    />
                  </div>

                  <div className="grid place-content-center">
                    <p className="lg:text-lg font-semibold text-[var(--color-description)]">
                      Nelson Hernández
                    </p>
                    <p className="lg:text-lg text-[var(--color-description)] opacity-80">
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
