"use client";
import Link from "next/link";
import { BackButton } from "../components/back-button/BackButton";

export default function About() {
  return (
    <main className=" text-primaryB bg-primary flex min-h-screen mt-10 flex-col items-center py-10">
      <div className="flex flex-col w-[80%] items left text-left">
      <BackButton />
        <h1 className="mr-auto text-primaryB flex items-start mb-3  mt-12 item-start text-4xl font-bold">
          About us
        </h1>
        <p className="mt-2 text-white">
          Quickipedia is an ambitious project aimed at creating a real-time
          online platform that aggregates and displays trending information
          across diverse categories like nature, cars, culture, healthcare, and
          cats. Our vision is to develop an intuitive, user-friendly interface
          backed by a robust, scalable architecture that delivers
          up-to-the-minute trending content to our users.
        </p>
        <br />
        <h1 className="mr-auto text-primaryB flex items-start mb-3  mt-5 item-start text-xl font-bold">
          Discover the Complot Team!
        </h1>
        <p className="flex justify-between border-b border-primaryB/25 pb-3 pt-3">
          <Link
            href="https://www.linkedin.com/in/colinnordmark/"
            className="hover:underline"
          >
            Colin Nordmark
          </Link>
          <Link
            href="https://github.com/colinnordmark"
            className="hover:underline"
          >
            GitHub
          </Link>
        </p>
        <p className="flex justify-between pt-3">
          <Link
            href="https://www.linkedin.com/in/marisa-pinheiro-833a12113/"
            className="hover:underline"
          >
            Marisa Pinheiro
          </Link>
          <Link
            href="https://github.com/Marisa-Pinheiro"
            className="hover:underline"
          >
            GitHub
          </Link>
        </p>
      </div>
    </main>
  );
}
