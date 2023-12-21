import Link from "next/link";

type Props = {
  topicOne: string;
  topicTwo: string;
};

export const TopicButton = ({ topicOne, topicTwo }: Props) => {
  let urlOne: string = "/articles/" + topicOne;
  let urlTwo: string = "/articles/" + topicOne;

  return (
    <article className="group/article p-4 text-left flex flex-row justify-between w-[100%] text-grey-900 rounded-xl mt-3 mb-3 border border-primaryB text-primaryB text-lg drop-shadow-xl sm:ml-0 space-x-4">
      <Link className="text-left bg-gradient-to-br from-secondaryB to-secondaryB-300  betterhover:hover:bg-ternary font-medium rounded-lg text-lg px-5 py-3 mr-2 w-full" href={urlOne}>{topicOne}</Link>
      <Link className="text-left bg-gradient-to-br from-secondaryB to-secondaryB-300 font-medium rounded-lg text-lg px-5 py-3 mr-2 w-full" href={urlTwo}>{topicTwo}</Link>
    </article>
  );
};
