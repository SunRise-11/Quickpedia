import React from "react";
import { useRouter } from 'next/navigation'

export const BackButton = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }
  return (
    <div className=" top-10 mr-auto">
    <button
      type="button"
      className={
        "flex flex-row group text-primaryB hover:text-ternary font-medium rounded-lg text-md w-20"
      }
      onClick={() => handleGoBack()}
    >
      <svg
        className="w-6 h-6 text-primaryB hover:text-ternary"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-6.24 -6.24 64.48 64.48"
      >
        <g
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="white"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z"
          />
        </g>
      </svg>
    </button>
    </div>
  );
};
