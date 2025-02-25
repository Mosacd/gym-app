import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/componentsShadcn/ui/card";
import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { useGetUserReviews } from "@/reactQuery/query/reviews";
import { Link } from "react-router-dom";
import noReviewsSVG from "@/assets/undraw_reviews_ukai.svg";
import { mapUserReviewsData } from "@/supabase/reviews";


const PersonalReviews = () => {
  const { user } = useAuthContext();

  const { data: userReviews = [], isLoading } = useGetUserReviews({  queryOptions: { select: mapUserReviewsData }, userId: user?.id });

  const formatTimestamp = (isoString: string) =>
    new Date(isoString).toLocaleString();

  return (
    <>
    {isLoading ? "":(<Card className="border-none shadow-none bg-transparent dark:bg-transparent dark:border-neutral-800">
      <CardHeader>
        <CardTitle className="text-center">
          {userReviews.length}{userReviews.length !== 1 ? "Reviews" : "Review"} 
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2"> 
          {userReviews.length === 0 ? (
            <img
              src={noReviewsSVG}
              alt="No reviews"
              className="max-w-72 m-auto"
            />
          ) : (
            userReviews.map((comment) => {
              return (
                <Link key={comment.id} className="w-full max-w-sm" to={`/dashboard/productDetail/${comment.product_id}`}>
                <div className="group mb-3 flex flex-col bg-white dark:bg-neutral-950 gap-5 sm:flex-row border-2 px-5 rounded-md dark:border-neutral-800 p-3 justify-between items-center hover:border-black dark:hover:border-white hover:-translate-y-2 transition-all duration-200">                    
                  <div className="flex items-center gap-3 ">
               
                    <img className="w-20 h-20 rounded-full" src={comment.product.image_url[0]} alt={comment.product.name} />
                    <h1 className="text-lg sm:text-xl font-semibold">{comment.product.name}</h1>
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400">{comment.like} people found this review helpful</p>
                    <h1>{formatTimestamp(comment.created_at)}</h1>
                  </div>
                  
                </Link>
              );
            })
          )}
   
      </CardContent>
    </Card>)}
    </>
  );
};

export default PersonalReviews;
