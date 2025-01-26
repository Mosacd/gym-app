import { Card, CardContent } from "@/componentsShadcn/ui/card";
import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { useGetUserReviews } from "@/reactQuery/query/reviews";
import { Link } from "react-router-dom";

const PersonalReviews = () => {
  const { user } = useAuthContext();

  const { data: userReviews = [] } = useGetUserReviews({ userId: user?.id });

  return (
    <Card className="border-4 dark:border-neutral-800">
      <CardContent className="p-8">
        {/* <li
      key={comment.id}
      className=" p-4 border-b border-b-black dark:border-b-white bg-white dark:bg-black dark:text-white"
    >
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-semibold">{comment.author_username}</span>
          <span className="text-sm text-gray-500">
            {comment.created_at}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
        <div className="flex justify-between items-center text-sm"></div>
      </div>
    </li> */}
        <div className="flex gap-2 flex-wrap justify-center">
          {userReviews.map((comment) => {
            return (
              <Link to={`/dashboard/productDetail/${comment.product_id}`}>
                <div className="border-2 dark:border-neutral-800 p-5 rounded-md">
                  <h1 className="text-lg">{comment.product_id} Review</h1>
                  <p>likes:34</p>
                  <h1>{comment.created_at}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalReviews;
