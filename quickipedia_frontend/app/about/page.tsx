import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen mt-10 flex-col items-center justify-between p-24">
      <h1>About Quickipedia</h1>
      <p>
        Quickipedia is an ambitious project aimed at creating a real-time online
        platform that aggregates and displays trending information across
        diverse categories like nature, cars, culture, healthcare, and cats. Our
        vision is to develop an intuitive, user-friendly interface backed by a
        robust, scalable architecture that delivers up-to-the-minute trending
        content to our users.
      </p>
      <br />
      <h2>Discover the Complot Team!</h2>
      <p>
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
           (GitHub)
        </Link>
      </p>
      <p>
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
           (GitHub)
        </Link>
      </p>
    </main>
  );
}
