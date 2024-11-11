// STYLES
import "./styles.css";

import Image from "next/image";

function CEOQuote() {
  return (
    <>
      <div className="grid place-content-center h-dvh">
        <div className="max-w-screen-lg m-auto">
          <section className="custom-container">
            <div className="background">
              <div className="trail" />
            </div>
            <div className="custom-content">
              <div className="p-5">
                <p className="text-2xl italic text-[var(--color-description)]">
                  "Some of the most interesting CSS tricks use properties that
                  you might have never even heard of. My goal is to make you
                  confident in your abilities to make your ideas come to life
                  with those tricks."
                </p>

                <div className="flex justify-center items-center gap-3 mt-10">
                  <div>
                    <Image
                      src="/ceo.jpg"
                      alt="Jhey Tompkins"
                      height={50}
                      width={50}
                      className="rounded-full"
                    />
                  </div>

                  <div className="grid place-content-center">
                    <p className="text-lg font-semibold text-[var(--color-description)]">
                      Nelson Hernández
                    </p>
                    <p className="text-lg text-[var(--color-description)]">
                      CEO, La Casa de Los Rodamientos
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
