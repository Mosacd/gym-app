import { Card, CardContent } from "@/components/ui/card";

const PersonalReviews = () => {
  const comments = [
    {
      id: 1,
      author_username: "me",
      product: "Fuckass hoodie",
      created_at: "24 october",
    },
    {
      id: 2,
      author_username: "isev me",
      product: "Fuckass hoodie",
      created_at: "24 october",
    },
  ];

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
      <div  className="flex gap-2 flex-wrap justify-center">
        {comments.map((comment) => {
          return(
            <div className="border-2 dark:border-neutral-800 p-5 rounded-md">
            <h1 className="text-lg">{comment.product} Review</h1>
            <p>likes:34</p>
            <h1>{comment.created_at}</h1>
          </div>
          )
        })}
        </div>
       
      </CardContent>
    </Card>
  );
};

export default PersonalReviews;
