"use client";

// TYPES
import { Sub } from "../subscriptions";

// HOOKS
import { useState } from "react";
import { useLocale } from "next-intl";

// COMPONENTS
import Link from "next/link";

interface Props {
  sub: Sub;
}

function Subscription({ sub }: Props) {
  const locale = useLocale();

  const [ProPriceSelected, setProPriceSelected] = useState(sub.limits[0].price);

  const [RequestsSelected, setRequestsSelected] = useState(
    sub.limits[0].requests
  );

  return (
    <div
      id={`Card ${sub.type}`}
      className="w-full p-4 bg-white border border-gray-200 rounded-2xl"
    >
      <h5 className="mb-4 text-lg font-semibold text-center text-[var(--color-description)]">
        {sub.type}
      </h5>

      {sub.type === "Free" && (
        <div className="flex justify-center items-baseline text-[var(--color-title)]">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-4xl font-extrabold tracking-tight">
            {sub.limits[0].price}
          </span>
          <span className="ml-1 text-xl font-normal">
            {/* @ts-ignore */}
            {"/" + sub.duration[locale]}
          </span>
        </div>
      )}

      {sub.type === "Pro" && (
        <div className="flex justify-center items-baseline text-[var(--color-title)]">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-4xl font-extrabold tracking-tight">
            {ProPriceSelected}
          </span>
          <span className="ml-1 text-xl font-normal">
            {/* @ts-ignore */}
            {"/" + sub.duration[locale]}
          </span>
        </div>
      )}

      {sub.type === "Gold" && (
        <div className="flex justify-center items-baseline text-[var(--color-title)]">
          <span className="text-4xl font-extrabold tracking-tight">
            {/* @ts-ignore */}
            {sub.duration[locale]}
          </span>
        </div>
      )}

      <hr className="my-5 sm:mx-auto border border-gray-300" />

      {sub.type === "Free" && (
        <p className="text-center mt-5 text-[var(--color-description)]">
          {/* @ts-ignore */}
          {textMax[locale]} {new Intl.NumberFormat().format(sub.limits[0].requests)} requests
          /{/* @ts-ignore */}
          {sub.duration[locale]}
        </p>
      )}

      {sub.type === "Pro" && (
        <p className="text-center mt-5 text-[var(--color-description)]">
          {/* @ts-ignore */}
          {textMax[locale]} {new Intl.NumberFormat().format(RequestsSelected)} requests /
          {/* @ts-ignore */}
          {sub.duration[locale]}
        </p>
      )}

      {sub.type === "Gold" && (
        <p className="text-center mt-5 text-[var(--color-description)]">
          {/* @ts-ignore */}
          {sub.requestsTitle[locale]}
        </p>
      )}

      {sub.type === "Pro" && (
        <div className="mt-5">
          <input
            className="w-full h-2 rounded-lg cursor-pointer accent-green-700"
            type="range"
            min={20}
            max={100}
            step={20}
            list="options-pro"
            defaultValue={20}
            onChange={({ currentTarget }) => {
              const position = Number(currentTarget.value);

              const priceSelected = sub.limits.find(
                (l) => l.position === position
              )?.price as number;

              const requestsSelected = sub.limits.find(
                (l) => l.position === position
              )?.requests as number;

              setProPriceSelected(priceSelected);

              setRequestsSelected(requestsSelected);
            }}
          />
          <datalist id="options-pro">
            {sub.limits.map((limit) => {
              return (
                <option key={limit.position} value={limit.position}>
                  {limit.position}
                </option>
              );
            })}
          </datalist>
        </div>
      )}

      <hr className="my-5 sm:mx-auto border border-gray-300" />

      {/* List */}
      <ul role="list" className="space-y-5 my-7">
        {sub.benefits.map((benefit) => {
          return (
            <li key={benefit} className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 size-5 text-[var(--bg-brand-sel)]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base leading-tight text-[var(--color-description)]">
                {benefit}
              </span>
            </li>
          );
        })}
      </ul>
      <Link
        role="link"
        href="https://dashboard.snackgraph.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-sm w-full text-white fill-white bg-[var(--bg-brand-sel)] hover:bg-[var(--bg-brand-sel-hover)] duration-300 text-center font-semibold rounded-lg inline-flex justify-center gap-1"
      >
        {/* @ts-ignore */}
        {sub.titleButton[locale]}
      </Link>
    </div>
  );
}

export default Subscription;

const textMax = {
  en: "Max",
  es: "Máximo",
};
