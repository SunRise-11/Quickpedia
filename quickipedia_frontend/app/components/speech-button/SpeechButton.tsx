import React from "react";
import { speakFromText } from "@/app/utils/utilities";
type Props = {
  text: string;
};
export const SpeechButton = ({ text }: Props) => {
  return (
    <button
      type="button"
      className={
        " group group text-rose-700 hover:text-white font-medium rounded-lg text-sm  pl-3 text-center"
      }
      onClick={() => speakFromText(text)}
    >
      <svg
        className="w-6 h-6 text-slate-200 transition ease-in-out delay-150 hover/article:text-rose-700"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 22 22"
        fill="none"
      >
        <g
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12.5493 4.50005C11.3193 4.04005 8.70926 5.49996 6.54926 7.40996H4.94922C3.88835 7.40996 2.87093 7.83145 2.12079 8.58159C1.37064 9.33174 0.949219 10.3491 0.949219 11.41V13.41C0.949219 14.4708 1.37064 15.4883 2.12079 16.2385C2.87093 16.9886 3.88835 17.41 4.94922 17.41H6.54926C8.65926 19.35 11.2693 20.78 12.5493 20.33C14.6493 19.55 14.9992 15.33 14.9992 12.41C14.9992 9.48996 14.6493 5.28005 12.5493 4.50005Z" />
          <path d="M18.5391 15.95C19.4764 15.0123 20.003 13.7407 20.003 12.4149C20.003 11.0891 19.4764 9.81764 18.5391 8.88" />
        </g>
      </svg>
    </button>
  );
};
