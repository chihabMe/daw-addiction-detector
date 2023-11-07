import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css"
const QuestionListItemSkeleton = () => {
  return (
    <div className="flex flex-col   gap-2  rounded-lg p-2">
        <Skeleton className="h-16 rounded-md"  />
        <Skeleton className="h-8 rounded-md"  />
        <Skeleton className="h-8 rounded-md"  />
        <Skeleton className="h-8 rounded-md"  />
        <Skeleton className="h-8 rounded-md"  />
    </div>
  );
};

export default QuestionListItemSkeleton;
