import { faq } from "./faq";
function Faq() {
  return (
    <div className="grid place-content-center h-[70dvh] px-3">
      <h2 className="text-2xl md:text-5xl font-extrabold text-center max-w-screen-md m-auto py-5 text-[var(--color-title)]">
        FAQ
      </h2>
      <div>
        <div className="text-sm lg:text-base flex flex-wrap max-w-screen-lg m-auto">
          {faq.map(({ id, title, description }) => {
            return (
              <div key={id} className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold cursor-pointer bg-gray-200 rounded-md py-2 px-4 mb-3">
                    {title}
                  </summary>
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </details>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;
