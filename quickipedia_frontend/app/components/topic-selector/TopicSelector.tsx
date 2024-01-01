import { Article } from "@/app/utils/types";
import { uniqueFilter } from "@/app/utils/utilities";
import { Filterbutton } from "..";

type Props = {
    allArticles: Article[],
    pathParam: string
}

export const TopicSelector = ({ allArticles, pathParam }: Props) => { 
    return <div className=" flex flex-row justify-center flex-wrap">
        <Filterbutton topic="all" selected={pathParam == "all"} />
        {allArticles
          ?.map((article) => article.topic)
          .filter(uniqueFilter)
          .map((item, index) => {
            return <Filterbutton key={index} topic={item.toLowerCase()} selected={item.toLowerCase() == pathParam} />;
          })}
      </div>
}