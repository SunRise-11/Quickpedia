import Link from "next/link";

type Props = {
  topicOne: string;
  topicTwo: string;
};

export const TopicArticle = ({ topicOne, topicTwo }: Props) => {
  let urlOne: string = "/articles/" + topicOne.toLowerCase();
  let urlTwo: string = "/articles/" + topicTwo.toLowerCase();
  

  const bg =
    "bg-gradient-to-br from-secondaryB to-secondaryB-300  betterhover:hover:bg-gradient-to-tl betterhover:hover:from-ternary-500 betterhover:hover:to-ternary-200 drop-shadow-sm ";
  return (
    <article className="group/article p-3 bg-primaryB/80 text-left flex flex-row justify-between w-[100%] text-grey-900 rounded-xl mt-3 mb-3 text-primaryB text-lg drop-shadow-xl sm:ml-0 space-x-2 h-28">
      <Link
        className={bg + "text-left font-medium rounded-lg text-lg px-5 py-3 mr-2 w-full transition ease-in-out duration-300"}
        href={urlOne}
      >
        {topicOne}
      </Link>
      <Link
        className={bg + "text-left font-medium rounded-lg text-lg px-5 py-3 mr-2 w-full transition ease-in-out duration-300"}
        href={urlTwo}
      >
        {topicTwo}
      </Link>
    </article>
  );
};
