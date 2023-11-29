"use client";
import Link from "next/link";
import { BackButton } from "../components/back-button/BackButton";

export default function About() {
  return (
    <main className=" text-primaryB flex min-h-screen mt-10 flex-col items-center py-10">
      <BackButton />
      <div className="flex flex-col w-[80%] items text-sm left text-left">
        <h1 className="mr-auto text-primaryB flex items-start mb-3  mt-12 item-start text-4xl font-bold">
          Quickipedia
        </h1>
        <h2 className="italic mb-4 text-lg">Hard questions, quick answers</h2>
        <p className="mt-2 mb-4 text-md text-white">
          In an era where attention spans are shrinking and the digital world is
          evolving rapidly, Quickipedia emerges as a tool designed specifically
          for the young and dynamic.
          <br />
          Born from the minds of two Gen Z creators, Quickipedia is more than
          just an app - it&apos;s a gateway to quick, engaging, and informative
          content.
        </p>
        <br />
        <h4 className="text-xl font-bold mt-2 mb-2">Our Mission:</h4>
        <p>
          To cater to the unique needs of individuals aged 6-30, providing a
          platform that aligns with their digital fluency and fast-paced
          lifestyles.
          <br />
          We understand that for our generation, time is of the essence.
          That&apos;s why Quickipedia is optimized for mobile use, ensuring that
          knowledge is not just accessible but also concise and visually
          appealing.
        </p>
        <br />
        <h4 className="text-xl font-bold mt-2 mb-2">Our Inspiration:</h4>
        <p>
          Drawing inspiration from the viral trend of short-form videos,
          Quickipedia offers a similar approach to information consumption. Our
          platform is designed to capture and retain the attention of our users
          through bite-sized, yet substantial content.
        </p>
        <br />

        <br />
        <p>
          Join us on this exciting journey as we redefine what it means to learn
          and stay informed in the digital age!
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
