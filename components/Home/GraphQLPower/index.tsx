import React from "react";

function GraphQLPower() {
  return (
    <div className="max-w-screen-lg m-auto px-3">
      <h2 className="text-2xl md:text-5xl font-extrabold text-center max-w-screen-md m-auto py-5 text-[var(--color-title)]">
        We built with GraphQL
      </h2>

      <p className="lg:text-xl text-center max-w-screen-md m-auto text-[var(--color-description)]">
        {`GraphQL has many advantages, that's why we decided to use it to build our APIs.`}
      </p>

      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className="flex justify-center bg-white p-3 w-full rounded-2xl border border-gray-200">
          <p className="text-sm lg:text-base flex justify-center items-center text-center text-[var(--color-description)]">
            Powerful APIs
          </p>
        </div>
        <div />
        <div className="flex justify-center bg-white p-3 w-full rounded-2xl border border-gray-200">
          <p className="text-sm lg:text-base flex justify-center items-center text-center text-[var(--color-description)]">
            Efficient Data Fetching
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div>
          <div className="flex justify-center w-full">
            <svg
              className="h-28 w-20 lg:size-60 lg:translate-x-12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 107 117"
            >
              <path
                d="M1 0V52C1 74.4021 1 85.6031 5.35974 94.1596C9.19467 101.686 15.3139 107.805 22.8404 111.64C31.3968 116 42.5979 116 65 116H107"
                stroke="#E4E7EC"
                pathLength="1"
                strokeDasharray="1px 1px"
                strokeDashoffset="0px"
              ></path>
            </svg>
          </div>

          <div className="flex justify-center w-full">
            <svg
              className="h-28 w-20 lg:size-60 lg:translate-x-12 -rotate-180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              width="100%"
              height="100%"
              viewBox="0 0 107 117"
            >
              <path
                d="M106 0V52C106 74.4021 106 85.6031 101.64 94.1596C97.8053 101.686 91.6861 107.805 84.1596 111.64C75.6032 116 64.4021 116 42 116H-5.94008e-07"
                stroke="#E4E7EC"
                pathLength="1"
                strokeDasharray="1px 1px"
                strokeDashoffset="0px"
              ></path>
            </svg>
          </div>
        </div>
        <div className="pt-14 lg:pt-36">
            {/* GRAPHQL */}
          <div className="flex justify-center bg-white p-3 w-full rounded-2xl border border-gray-200">
            <figure>
              <svg
                className="size-20 lg:size-40"
                viewBox="0 0 256 288"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
              >
                <g fillRule="evenodd">
                  <path
                    d="M152.575995,32.9634453 L211.722058,67.1124427 C213.387503,65.348329 215.332859,63.7907081 217.539734,62.5088708 C229.806457,55.4573413 245.452038,59.6441869 252.577021,71.9109101 C259.62855,84.1776333 255.441705,99.8232143 243.174982,106.948197 C240.984974,108.207124 238.684929,109.10784 236.343812,109.66832 L236.343812,177.99302 C238.659582,178.554683 240.934429,179.449686 243.101528,180.695443 C255.441705,187.820426 259.62855,203.466007 252.503568,215.73273 C245.452038,227.999453 229.733004,232.186299 217.46628,225.13477 C215.024105,223.730884 212.902189,221.983449 211.125456,219.988103 L152.340162,253.928803 C153.180519,256.46808 153.635248,259.18431 153.635248,262.008393 C153.635248,276.111452 142.176512,287.64364 128,287.64364 C113.823488,287.64364 102.364752,276.184905 102.364752,262.008393 C102.364752,259.488481 102.726802,257.054441 103.40181,254.755362 L44.2714887,220.615454 C42.6238257,222.34493 40.705394,223.873378 38.5337196,225.13477 C26.193543,232.186299 10.547962,227.999453 3.49643248,215.73273 C-3.55509701,203.466007 0.631748621,187.820426 12.8984718,180.695443 C15.0673397,179.448669 17.3418356,178.553222 19.6561876,177.991646 L19.6561876,109.66832 C17.3150714,109.10784 15.0150257,108.207124 12.8250184,106.948197 C0.558295189,99.8966677 -3.62855044,84.1776333 3.42297904,71.9109101 C10.4745085,59.6441869 26.193543,55.4573413 38.4602662,62.5088708 C40.6551374,63.7837361 42.5913269,65.3313931 44.2507413,67.0836756 L103.41276,32.9254664 C102.730718,30.6154532 102.364752,28.1687503 102.364752,25.6352478 C102.364752,11.4587354 113.823488,0 128,0 C142.176512,0 153.635248,11.4587354 153.635248,25.6352478 C153.635248,28.1826393 153.265258,30.6422768 152.575995,32.9634453 Z M146.413638,43.4848713 L205.700555,77.715193 C203.867899,84.1516888 204.540515,91.2885638 208.137694,97.5461579 C211.746601,103.824151 217.625783,107.985785 224.150543,109.607654 L224.150543,178.017842 C223.818032,178.099463 223.48718,178.187674 223.158201,178.282419 L145.72529,44.1686182 C145.959017,43.9450469 146.18851,43.7170876 146.413638,43.4848713 Z M110.29093,44.1841203 L32.8593279,178.295656 C32.524559,178.19844 32.1878611,178.108015 31.8494573,178.024438 L31.8494573,109.607654 C38.3742168,107.985785 44.2533992,103.824151 47.8623055,97.5461579 C51.466599,91.276189 52.1347497,84.1234583 50.2885426,77.6770157 L109.558747,43.4563434 C109.797913,43.7038019 110.042027,43.9464469 110.29093,44.1841203 Z M135.162749,50.259763 L212.576817,184.340928 C210.844241,185.99279 209.317376,187.91755 208.064241,190.097482 C206.818484,192.264581 205.923481,194.539429 205.361818,196.855198 L50.6395564,196.855198 C50.0779798,194.540846 49.1825333,192.26635 47.9357589,190.097482 C46.6776713,187.931497 45.1539248,186.017428 43.4300297,184.372667 L120.858821,50.2659993 C123.124941,50.9200822 125.520915,51.2704957 128,51.2704957 C130.486952,51.2704957 132.890265,50.9178547 135.162749,50.259763 Z M146.958084,244.737995 L205.860107,210.729899 C205.683398,210.174924 205.525483,209.614096 205.38664,209.048468 L50.6067643,209.048468 C50.5246888,209.380792 50.4360084,209.711472 50.3407792,210.040295 L109.531782,244.215239 C114.192298,239.378545 120.739739,236.373145 128,236.373145 C135.518379,236.373145 142.272352,239.596041 146.958084,244.737995 Z"
                    fill="#E535AB"
                  />
                </g>
              </svg>
            </figure>
          </div>
        </div>
        <div>
          <div className="flex justify-center w-full">
            <svg
              className="h-28 w-20 lg:size-60 lg:-translate-x-12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              width="100%"
              height="100%"
              viewBox="0 0 107 117"
            >
              <path
                d="M106 0V52C106 74.4021 106 85.6031 101.64 94.1596C97.8053 101.686 91.6861 107.805 84.1596 111.64C75.6032 116 64.4021 116 42 116H-5.94008e-07"
                stroke="#E4E7EC"
                pathLength="1"
                strokeDasharray="1px 1px"
                strokeDashoffset="0px"
              ></path>
            </svg>
          </div>

          <div className="flex justify-center w-full">
            <svg
              className="h-28 w-20 lg:size-60 lg:-translate-x-12 -rotate-180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 107 117"
            >
              <path
                d="M1 0V52C1 74.4021 1 85.6031 5.35974 94.1596C9.19467 101.686 15.3139 107.805 22.8404 111.64C31.3968 116 42.5979 116 65 116H107"
                stroke="#E4E7EC"
                pathLength="1"
                strokeDasharray="1px 1px"
                strokeDashoffset="0px"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="flex justify-center bg-white p-3 w-full rounded-2xl border border-gray-200">
          <p className="text-sm lg:text-base flex justify-center items-center text-center text-[var(--color-description)]">
            Strong Typing and Self-Documentation
          </p>
        </div>
        <div />
        <div className="flex justify-center bg-white p-3 w-full rounded-2xl border border-gray-200">
          <p className="text-sm lg:text-base flex justify-center items-center text-center text-[var(--color-description)]">
            Improved Developer Experience
          </p>
        </div>
      </div>
    </div>
  );
}

export default GraphQLPower;